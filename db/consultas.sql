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

INSERT INTO concluiu VALUES ('20240000001', 900004, '2025.2');
DELETE FROM concluiu WHERE matricula = '20240000001' AND id_componente = 900004;