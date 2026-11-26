-- =========================================================
-- F01 listar_estruturas
-- =========================================================
SELECT id_estrutura, codigo, nome_matriz, ano_entrada_vigor
FROM estrutura_curricular
ORDER BY ano_entrada_vigor DESC NULLS LAST;


-- F03 progresso_enfase
WITH params AS (
    SELECT '20240000001'::CHAR(11) AS mat, 2 AS enf
),
concl AS (
    SELECT id_componente FROM concluiu
    WHERE matricula = (SELECT mat FROM params)
),
cumprido AS (
    SELECT id_componente FROM concl
    UNION
    SELECT eq.id_componente
    FROM equivalencia eq
    GROUP BY eq.id_componente, eq.grupo_alternativa
    HAVING bool_and(eq.id_equivalente IN (SELECT id_componente FROM concl))
),
base AS (
    SELECT
        SUM(c.ch_total) AS ch_obrigatoria,
        SUM(CASE WHEN cp.id_componente IN (SELECT id_componente FROM cumprido)
                 THEN c.ch_total ELSE 0 END) AS horas_cumpridas
    FROM compoe cp
    JOIN componente c ON c.id_componente = cp.id_componente
    WHERE cp.id_enfase = (SELECT enf FROM params)
      AND cp.tipo = 'OBRIGATORIO'
)
SELECT
    ch_obrigatoria,
    horas_cumpridas,
    ch_obrigatoria - horas_cumpridas                   AS horas_restantes,
    ROUND(horas_cumpridas * 100.0 / ch_obrigatoria, 1) AS percentual
FROM base;


-- F04 componentes_liberados
WITH params AS (
    SELECT '20240000001'::CHAR(11) AS mat, 2 AS enf
),
concl AS (            -- concluídos diretos do aluno
    SELECT id_componente
    FROM concluiu
    WHERE matricula = (SELECT mat FROM params)
),
cumprido AS (         -- concluído direto OU por grupo de equivalência completo (R8)
    SELECT id_componente FROM concl
    UNION
    SELECT eq.id_componente
    FROM equivalencia eq
    GROUP BY eq.id_componente, eq.grupo_alternativa
    HAVING bool_and(eq.id_equivalente IN (SELECT id_componente FROM concl))
)
SELECT c.codigo, c.nome, c.ch_total, cp.tipo, c.modalidade
FROM compoe cp
JOIN componente c ON c.id_componente = cp.id_componente
WHERE cp.id_enfase = (SELECT enf FROM params)
  AND c.ativo
  AND cp.id_componente NOT IN (SELECT id_componente FROM cumprido)
  AND (
        -- sem pré-requisito
        NOT EXISTS (SELECT 1 FROM pre_requisito p
                    WHERE p.id_componente = cp.id_componente)
        -- ou algum grupo com TODOS exigidos cumpridos (R7)
     OR EXISTS (SELECT 1 FROM pre_requisito p
                WHERE p.id_componente = cp.id_componente
                GROUP BY p.grupo_alternativa
                HAVING bool_and(p.id_exigido IN (SELECT id_componente FROM cumprido)))
      )
ORDER BY cp.tipo, c.codigo;


-- =========================================================
-- F05 equivalencias_aproveitadas
-- =========================================================
WITH params AS (
    SELECT '20240000001'::CHAR(11) AS mat, 2 AS enf
),
concl AS (
    SELECT id_componente, semestre_conclusao FROM concluiu
    WHERE matricula = (SELECT mat FROM params)
),
grupos_ok AS (          -- grupos de equivalência 100% concluídos
    SELECT eq.id_componente, eq.grupo_alternativa
    FROM equivalencia eq
    GROUP BY eq.id_componente, eq.grupo_alternativa
    HAVING bool_and(eq.id_equivalente IN (SELECT id_componente FROM concl))
)
SELECT
    alvo.codigo          AS componente_enfase,
    alvo.nome            AS nome_enfase,
    cp.tipo,
    fez.codigo           AS concluido_codigo,
    fez.nome             AS concluido_nome,
    fez.modalidade,
    cc.semestre_conclusao
FROM compoe cp
JOIN componente  alvo ON alvo.id_componente = cp.id_componente
JOIN grupos_ok   g    ON g.id_componente    = cp.id_componente
JOIN equivalencia eq  ON eq.id_componente   = g.id_componente
                     AND eq.grupo_alternativa = g.grupo_alternativa
JOIN componente  fez  ON fez.id_componente  = eq.id_equivalente
JOIN concl       cc   ON cc.id_componente   = eq.id_equivalente
WHERE cp.id_enfase = (SELECT enf FROM params)
  AND cp.id_componente NOT IN (SELECT id_componente FROM concl)
ORDER BY alvo.codigo, g.grupo_alternativa;


-- =========================================================
-- F07 progresso_curso
-- =========================================================
WITH params AS (
    SELECT '20240000001'::CHAR(11) AS mat
),
base AS (
    SELECT
        e.ch_total_minima,
        COALESCE(SUM(c.ch_total), 0) AS horas_concluidas
    FROM aluno a
    JOIN estrutura_curricular e ON e.id_estrutura = a.id_estrutura
    LEFT JOIN concluiu cc       ON cc.matricula   = a.matricula
    LEFT JOIN componente c      ON c.id_componente = cc.id_componente
    WHERE a.matricula = (SELECT mat FROM params)
    GROUP BY e.ch_total_minima
)
SELECT
    horas_concluidas,
    ch_total_minima,
    GREATEST(ch_total_minima - horas_concluidas, 0)      AS horas_restantes,
    ROUND(horas_concluidas * 100.0 / ch_total_minima, 1) AS percentual
FROM base;