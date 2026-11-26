-- CreateTable
CREATE TABLE "estrutura_curricular" (
    "id_estrutura" BIGINT NOT NULL,
    "codigo" VARCHAR(10),
    "nome_matriz" TEXT NOT NULL,
    "ano_entrada_vigor" INTEGER,
    "semestre_conclusao_ideal" INTEGER,
    "ch_total_minima" INTEGER NOT NULL,
    "ch_optativas_minima" INTEGER NOT NULL,

    CONSTRAINT "estrutura_curricular_pkey" PRIMARY KEY ("id_estrutura")
);

-- CreateTable
CREATE TABLE "aluno" (
    "matricula" CHAR(11) NOT NULL,
    "nome" VARCHAR(120) NOT NULL,
    "email" VARCHAR(120) NOT NULL,
    "id_estrutura" BIGINT NOT NULL,

    CONSTRAINT "aluno_pkey" PRIMARY KEY ("matricula")
);

-- CreateTable
CREATE TABLE "enfase" (
    "id_enfase" SERIAL NOT NULL,
    "nome" VARCHAR(120) NOT NULL,

    CONSTRAINT "enfase_pkey" PRIMARY KEY ("id_enfase")
);

-- CreateTable
CREATE TABLE "componente" (
    "id_componente" BIGINT NOT NULL,
    "codigo" VARCHAR(10) NOT NULL,
    "nome" VARCHAR(120) NOT NULL,
    "ch_total" INTEGER NOT NULL,
    "modalidade" VARCHAR(10) NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "componente_pkey" PRIMARY KEY ("id_componente")
);

-- CreateTable
CREATE TABLE "compoe" (
    "id_enfase" INTEGER NOT NULL,
    "id_componente" BIGINT NOT NULL,
    "tipo" VARCHAR(11) NOT NULL,

    CONSTRAINT "compoe_pkey" PRIMARY KEY ("id_enfase","id_componente")
);

-- CreateTable
CREATE TABLE "concluiu" (
    "matricula" CHAR(11) NOT NULL,
    "id_componente" BIGINT NOT NULL,
    "semestre_conclusao" CHAR(6) NOT NULL,

    CONSTRAINT "concluiu_pkey" PRIMARY KEY ("matricula","id_componente")
);

-- CreateTable
CREATE TABLE "acompanha" (
    "matricula" CHAR(11) NOT NULL,
    "id_enfase" INTEGER NOT NULL,
    "data_inicio" DATE NOT NULL DEFAULT CURRENT_DATE,

    CONSTRAINT "acompanha_pkey" PRIMARY KEY ("matricula","id_enfase")
);

-- CreateTable
CREATE TABLE "pre_requisito" (
    "id_componente" BIGINT NOT NULL,
    "id_exigido" BIGINT NOT NULL,
    "grupo_alternativa" INTEGER NOT NULL,

    CONSTRAINT "pre_requisito_pkey" PRIMARY KEY ("id_componente","id_exigido","grupo_alternativa")
);

-- CreateTable
CREATE TABLE "equivalencia" (
    "id_componente" BIGINT NOT NULL,
    "id_equivalente" BIGINT NOT NULL,
    "grupo_alternativa" INTEGER NOT NULL,

    CONSTRAINT "equivalencia_pkey" PRIMARY KEY ("id_componente","id_equivalente","grupo_alternativa")
);

-- CreateIndex
CREATE UNIQUE INDEX "aluno_email_key" ON "aluno"("email");

-- CreateIndex
CREATE UNIQUE INDEX "enfase_nome_key" ON "enfase"("nome");

-- AddForeignKey
ALTER TABLE "aluno" ADD CONSTRAINT "aluno_id_estrutura_fkey" FOREIGN KEY ("id_estrutura") REFERENCES "estrutura_curricular"("id_estrutura") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compoe" ADD CONSTRAINT "compoe_id_enfase_fkey" FOREIGN KEY ("id_enfase") REFERENCES "enfase"("id_enfase") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compoe" ADD CONSTRAINT "compoe_id_componente_fkey" FOREIGN KEY ("id_componente") REFERENCES "componente"("id_componente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "concluiu" ADD CONSTRAINT "concluiu_matricula_fkey" FOREIGN KEY ("matricula") REFERENCES "aluno"("matricula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "concluiu" ADD CONSTRAINT "concluiu_id_componente_fkey" FOREIGN KEY ("id_componente") REFERENCES "componente"("id_componente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acompanha" ADD CONSTRAINT "acompanha_matricula_fkey" FOREIGN KEY ("matricula") REFERENCES "aluno"("matricula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acompanha" ADD CONSTRAINT "acompanha_id_enfase_fkey" FOREIGN KEY ("id_enfase") REFERENCES "enfase"("id_enfase") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pre_requisito" ADD CONSTRAINT "pre_requisito_id_componente_fkey" FOREIGN KEY ("id_componente") REFERENCES "componente"("id_componente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pre_requisito" ADD CONSTRAINT "pre_requisito_id_exigido_fkey" FOREIGN KEY ("id_exigido") REFERENCES "componente"("id_componente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "equivalencia" ADD CONSTRAINT "equivalencia_id_componente_fkey" FOREIGN KEY ("id_componente") REFERENCES "componente"("id_componente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "equivalencia" ADD CONSTRAINT "equivalencia_id_equivalente_fkey" FOREIGN KEY ("id_equivalente") REFERENCES "componente"("id_componente") ON DELETE RESTRICT ON UPDATE CASCADE;
