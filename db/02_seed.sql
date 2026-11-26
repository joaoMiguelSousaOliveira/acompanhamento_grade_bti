INSERT INTO estrutura_curricular
    (id_estrutura, codigo, nome_matriz, ano_entrada_vigor,
     semestre_conclusao_ideal, ch_total_minima, ch_optativas_minima)
VALUES
    (133804382,'03','TECNOLOGIA DA INFORMAÇÃO - NATAL - MT - BACHARELADO', 2019 ,7 , 2600 , 300);

INSERT INTO enfase (nome) VALUES ('CIÊNCIA DA COMPUTAÇÃO');
INSERT INTO enfase (nome) VALUES ('ENGENHARIA DE SOFTWARE');
INSERT INTO enfase (nome) VALUES ('INTELIGÊNCIA ARTIFICIAL');

SELECT * FROM estrutura_curricular;
SELECT * FROM enfase;


INSERT INTO componente (id_componente, codigo, nome, ch_total, modalidade) VALUES
    (52790,  'IMD0401', 'BANCO DE DADOS',  60, 'PRESENCIAL'),
    (900001, 'IMD0028', 'TESTE IMD0028',   60, 'PRESENCIAL'),
    (900002, 'IMD0019', 'TESTE IMD0019',   60, 'PRESENCIAL'),
    (900003, 'IMD1001', 'TESTE IMD1001',   60, 'PRESENCIAL'),
    (900004, 'IMD1002', 'TESTE IMD1002',   60, 'PRESENCIAL'),
    (900005, 'IMD9001', 'TESTE EAD',       60, 'EAD');


SELECT * FROM componente;
SELECT * FROM enfase;


INSERT INTO compoe (id_enfase, id_componente, tipo) VALUES
    (2, 52790,  'OBRIGATORIO'),
    (2, 900001, 'OBRIGATORIO'),
    (2, 900002, 'OBRIGATORIO'),
    (1, 52790,  'OPTATIVO');


INSERT INTO pre_requisito (id_componente, id_exigido, grupo_alternativa) VALUES
    (900001, 900002, 1),
    (900001, 900003, 2),
    (900001, 900004, 2);


INSERT INTO equivalencia (id_componente, id_equivalente, grupo_alternativa) VALUES
    (52790, 900005, 1);

INSERT INTO aluno (matricula, nome, email, id_estrutura) VALUES
    ('20240000001', 'ALUNO TESTE', 'teste@ufrn.br', 133804382);

INSERT INTO concluiu (matricula, id_componente, semestre_conclusao) VALUES
    ('20240000001', 900003, '2025.1'),
    ('20240000001', 900005, '2025.2');

INSERT INTO acompanha (matricula, id_enfase) VALUES
    ('20240000001', 2);
