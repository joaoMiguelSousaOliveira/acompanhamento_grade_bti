-- CreateTable
CREATE TABLE "credencial" (
    "matricula" CHAR(11) NOT NULL,
    "senha_hash" TEXT NOT NULL,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "credencial_pkey" PRIMARY KEY ("matricula")
);

-- CreateTable
CREATE TABLE "sessao_refresh" (
    "id" UUID NOT NULL,
    "matricula" CHAR(11) NOT NULL,
    "token_hash" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expira_em" TIMESTAMP(3) NOT NULL,
    "revogado_em" TIMESTAMP(3),

    CONSTRAINT "sessao_refresh_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sessao_refresh_token_hash_key" ON "sessao_refresh"("token_hash");

-- CreateIndex
CREATE INDEX "sessao_refresh_matricula_idx" ON "sessao_refresh"("matricula");

-- AddForeignKey
ALTER TABLE "credencial" ADD CONSTRAINT "credencial_matricula_fkey" FOREIGN KEY ("matricula") REFERENCES "aluno"("matricula") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessao_refresh" ADD CONSTRAINT "sessao_refresh_matricula_fkey" FOREIGN KEY ("matricula") REFERENCES "aluno"("matricula") ON DELETE CASCADE ON UPDATE CASCADE;
