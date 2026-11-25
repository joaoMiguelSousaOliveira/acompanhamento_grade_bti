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