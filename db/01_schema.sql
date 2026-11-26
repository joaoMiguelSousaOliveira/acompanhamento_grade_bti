CREATE TABLE estrutura_curricular (
    id_estrutura             BIGINT ,
    codigo                   VARCHAR(10),
    nome_matriz              TEXT NOT NULL,
    ano_entrada_vigor        INT,
    semestre_conclusao_ideal INT,
    ch_total_minima          INT NOT NULL CHECK (ch_total_minima > 0),
    ch_optativas_minima      INT NOT NULL CHECK (ch_optativas_minima >= 0),
    PRIMARY KEY (id_estrutura)
);

CREATE TABLE aluno (
    matricula    CHAR(11) PRIMARY KEY CHECK (matricula ~ '^[0-9]{11}$'),
    nome         VARCHAR(120) NOT NULL CHECK (length(nome) >= 3),
    email        VARCHAR(120) NOT NULL UNIQUE,
    id_estrutura BIGINT NOT NULL,
    FOREIGN KEY (id_estrutura) REFERENCES estrutura_curricular(id_estrutura)
);

CREATE TABLE enfase (
    id_enfase INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nome      VARCHAR(120) NOT NULL UNIQUE CHECK (length(nome) >= 3)
);

CREATE TABLE componente (
    id_componente BIGINT PRIMARY KEY,
    codigo        VARCHAR(10) NOT NULL,
    nome          VARCHAR(120) NOT NULL CHECK (length(nome) >= 3),
    ch_total      INT NOT NULL CHECK (ch_total > 0),
    modalidade    VARCHAR(10) NOT NULL CHECK (modalidade IN ('PRESENCIAL','EAD')),
    ativo         BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE compoe(
    id_enfase       INT    REFERENCES enfase(id_enfase),
    id_componente   BIGINT REFERENCES componente(id_componente),
    tipo            VARCHAR(11) NOT NULL CHECK (tipo IN ('OBRIGATORIO','OPTATIVO')),
    PRIMARY KEY (id_enfase, id_componente)
);

CREATE TABLE concluiu(
    matricula           CHAR(11) REFERENCES aluno(matricula) ,
    id_componente       BIGINT REFERENCES componente(id_componente),
    semestre_conclusao  CHAR(6) NOT NULL CHECK (semestre_conclusao ~ '^[0-9]{4}\.[12]$'),
    PRIMARY KEY (matricula, id_componente)
);

CREATE TABLE acompanha(
    matricula       CHAR(11) REFERENCES aluno(matricula) ,
    id_enfase       INT     REFERENCES enfase(id_enfase),
    data_inicio     DATE    NOT NULL DEFAULT CURRENT_DATE,
    PRIMARY KEY (matricula, id_enfase)
);

CREATE TABLE pre_requisito(
    id_componente       BIGINT REFERENCES componente(id_componente),
    id_exigido          BIGINT  REFERENCES componente(id_componente),
    grupo_alternativa   INT NOT NULL CHECK (grupo_alternativa > 0) ,
    PRIMARY KEY (id_componente, id_exigido, grupo_alternativa),
    CHECK (id_componente <> id_exigido)
);

CREATE TABLE equivalencia(
   id_componente       BIGINT REFERENCES componente(id_componente),
    id_equivalente     BIGINT  REFERENCES componente(id_componente),
    grupo_alternativa   INT NOT NULL CHECK (grupo_alternativa > 0) ,
    PRIMARY KEY (id_componente, id_equivalente, grupo_alternativa),
    CHECK (id_componente <> id_equivalente)
);

