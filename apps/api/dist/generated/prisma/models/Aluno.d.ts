import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AlunoModel = runtime.Types.Result.DefaultSelection<Prisma.$AlunoPayload>;
export type AggregateAluno = {
    _count: AlunoCountAggregateOutputType | null;
    _avg: AlunoAvgAggregateOutputType | null;
    _sum: AlunoSumAggregateOutputType | null;
    _min: AlunoMinAggregateOutputType | null;
    _max: AlunoMaxAggregateOutputType | null;
};
export type AlunoAvgAggregateOutputType = {
    idEstrutura: number | null;
};
export type AlunoSumAggregateOutputType = {
    idEstrutura: bigint | null;
};
export type AlunoMinAggregateOutputType = {
    matricula: string | null;
    nome: string | null;
    email: string | null;
    idEstrutura: bigint | null;
};
export type AlunoMaxAggregateOutputType = {
    matricula: string | null;
    nome: string | null;
    email: string | null;
    idEstrutura: bigint | null;
};
export type AlunoCountAggregateOutputType = {
    matricula: number;
    nome: number;
    email: number;
    idEstrutura: number;
    _all: number;
};
export type AlunoAvgAggregateInputType = {
    idEstrutura?: true;
};
export type AlunoSumAggregateInputType = {
    idEstrutura?: true;
};
export type AlunoMinAggregateInputType = {
    matricula?: true;
    nome?: true;
    email?: true;
    idEstrutura?: true;
};
export type AlunoMaxAggregateInputType = {
    matricula?: true;
    nome?: true;
    email?: true;
    idEstrutura?: true;
};
export type AlunoCountAggregateInputType = {
    matricula?: true;
    nome?: true;
    email?: true;
    idEstrutura?: true;
    _all?: true;
};
export type AlunoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AlunoWhereInput;
    orderBy?: Prisma.AlunoOrderByWithRelationInput | Prisma.AlunoOrderByWithRelationInput[];
    cursor?: Prisma.AlunoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AlunoCountAggregateInputType;
    _avg?: AlunoAvgAggregateInputType;
    _sum?: AlunoSumAggregateInputType;
    _min?: AlunoMinAggregateInputType;
    _max?: AlunoMaxAggregateInputType;
};
export type GetAlunoAggregateType<T extends AlunoAggregateArgs> = {
    [P in keyof T & keyof AggregateAluno]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAluno[P]> : Prisma.GetScalarType<T[P], AggregateAluno[P]>;
};
export type AlunoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AlunoWhereInput;
    orderBy?: Prisma.AlunoOrderByWithAggregationInput | Prisma.AlunoOrderByWithAggregationInput[];
    by: Prisma.AlunoScalarFieldEnum[] | Prisma.AlunoScalarFieldEnum;
    having?: Prisma.AlunoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AlunoCountAggregateInputType | true;
    _avg?: AlunoAvgAggregateInputType;
    _sum?: AlunoSumAggregateInputType;
    _min?: AlunoMinAggregateInputType;
    _max?: AlunoMaxAggregateInputType;
};
export type AlunoGroupByOutputType = {
    matricula: string;
    nome: string;
    email: string;
    idEstrutura: bigint;
    _count: AlunoCountAggregateOutputType | null;
    _avg: AlunoAvgAggregateOutputType | null;
    _sum: AlunoSumAggregateOutputType | null;
    _min: AlunoMinAggregateOutputType | null;
    _max: AlunoMaxAggregateOutputType | null;
};
export type GetAlunoGroupByPayload<T extends AlunoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AlunoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AlunoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AlunoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AlunoGroupByOutputType[P]>;
}>>;
export type AlunoWhereInput = {
    AND?: Prisma.AlunoWhereInput | Prisma.AlunoWhereInput[];
    OR?: Prisma.AlunoWhereInput[];
    NOT?: Prisma.AlunoWhereInput | Prisma.AlunoWhereInput[];
    matricula?: Prisma.StringFilter<"Aluno"> | string;
    nome?: Prisma.StringFilter<"Aluno"> | string;
    email?: Prisma.StringFilter<"Aluno"> | string;
    idEstrutura?: Prisma.BigIntFilter<"Aluno"> | bigint | number;
    estrutura?: Prisma.XOR<Prisma.EstruturaCurricularScalarRelationFilter, Prisma.EstruturaCurricularWhereInput>;
    concluidos?: Prisma.ConcluiuListRelationFilter;
    acompanhamentos?: Prisma.AcompanhaListRelationFilter;
    credencial?: Prisma.XOR<Prisma.CredencialNullableScalarRelationFilter, Prisma.CredencialWhereInput> | null;
    sessoes?: Prisma.SessaoRefreshListRelationFilter;
};
export type AlunoOrderByWithRelationInput = {
    matricula?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    idEstrutura?: Prisma.SortOrder;
    estrutura?: Prisma.EstruturaCurricularOrderByWithRelationInput;
    concluidos?: Prisma.ConcluiuOrderByRelationAggregateInput;
    acompanhamentos?: Prisma.AcompanhaOrderByRelationAggregateInput;
    credencial?: Prisma.CredencialOrderByWithRelationInput;
    sessoes?: Prisma.SessaoRefreshOrderByRelationAggregateInput;
};
export type AlunoWhereUniqueInput = Prisma.AtLeast<{
    matricula?: string;
    email?: string;
    AND?: Prisma.AlunoWhereInput | Prisma.AlunoWhereInput[];
    OR?: Prisma.AlunoWhereInput[];
    NOT?: Prisma.AlunoWhereInput | Prisma.AlunoWhereInput[];
    nome?: Prisma.StringFilter<"Aluno"> | string;
    idEstrutura?: Prisma.BigIntFilter<"Aluno"> | bigint | number;
    estrutura?: Prisma.XOR<Prisma.EstruturaCurricularScalarRelationFilter, Prisma.EstruturaCurricularWhereInput>;
    concluidos?: Prisma.ConcluiuListRelationFilter;
    acompanhamentos?: Prisma.AcompanhaListRelationFilter;
    credencial?: Prisma.XOR<Prisma.CredencialNullableScalarRelationFilter, Prisma.CredencialWhereInput> | null;
    sessoes?: Prisma.SessaoRefreshListRelationFilter;
}, "matricula" | "email">;
export type AlunoOrderByWithAggregationInput = {
    matricula?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    idEstrutura?: Prisma.SortOrder;
    _count?: Prisma.AlunoCountOrderByAggregateInput;
    _avg?: Prisma.AlunoAvgOrderByAggregateInput;
    _max?: Prisma.AlunoMaxOrderByAggregateInput;
    _min?: Prisma.AlunoMinOrderByAggregateInput;
    _sum?: Prisma.AlunoSumOrderByAggregateInput;
};
export type AlunoScalarWhereWithAggregatesInput = {
    AND?: Prisma.AlunoScalarWhereWithAggregatesInput | Prisma.AlunoScalarWhereWithAggregatesInput[];
    OR?: Prisma.AlunoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AlunoScalarWhereWithAggregatesInput | Prisma.AlunoScalarWhereWithAggregatesInput[];
    matricula?: Prisma.StringWithAggregatesFilter<"Aluno"> | string;
    nome?: Prisma.StringWithAggregatesFilter<"Aluno"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Aluno"> | string;
    idEstrutura?: Prisma.BigIntWithAggregatesFilter<"Aluno"> | bigint | number;
};
export type AlunoCreateInput = {
    matricula: string;
    nome: string;
    email: string;
    estrutura: Prisma.EstruturaCurricularCreateNestedOneWithoutAlunosInput;
    concluidos?: Prisma.ConcluiuCreateNestedManyWithoutAlunoInput;
    acompanhamentos?: Prisma.AcompanhaCreateNestedManyWithoutAlunoInput;
    credencial?: Prisma.CredencialCreateNestedOneWithoutAlunoInput;
    sessoes?: Prisma.SessaoRefreshCreateNestedManyWithoutAlunoInput;
};
export type AlunoUncheckedCreateInput = {
    matricula: string;
    nome: string;
    email: string;
    idEstrutura: bigint | number;
    concluidos?: Prisma.ConcluiuUncheckedCreateNestedManyWithoutAlunoInput;
    acompanhamentos?: Prisma.AcompanhaUncheckedCreateNestedManyWithoutAlunoInput;
    credencial?: Prisma.CredencialUncheckedCreateNestedOneWithoutAlunoInput;
    sessoes?: Prisma.SessaoRefreshUncheckedCreateNestedManyWithoutAlunoInput;
};
export type AlunoUpdateInput = {
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    estrutura?: Prisma.EstruturaCurricularUpdateOneRequiredWithoutAlunosNestedInput;
    concluidos?: Prisma.ConcluiuUpdateManyWithoutAlunoNestedInput;
    acompanhamentos?: Prisma.AcompanhaUpdateManyWithoutAlunoNestedInput;
    credencial?: Prisma.CredencialUpdateOneWithoutAlunoNestedInput;
    sessoes?: Prisma.SessaoRefreshUpdateManyWithoutAlunoNestedInput;
};
export type AlunoUncheckedUpdateInput = {
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    idEstrutura?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    concluidos?: Prisma.ConcluiuUncheckedUpdateManyWithoutAlunoNestedInput;
    acompanhamentos?: Prisma.AcompanhaUncheckedUpdateManyWithoutAlunoNestedInput;
    credencial?: Prisma.CredencialUncheckedUpdateOneWithoutAlunoNestedInput;
    sessoes?: Prisma.SessaoRefreshUncheckedUpdateManyWithoutAlunoNestedInput;
};
export type AlunoCreateManyInput = {
    matricula: string;
    nome: string;
    email: string;
    idEstrutura: bigint | number;
};
export type AlunoUpdateManyMutationInput = {
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AlunoUncheckedUpdateManyInput = {
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    idEstrutura?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type AlunoListRelationFilter = {
    every?: Prisma.AlunoWhereInput;
    some?: Prisma.AlunoWhereInput;
    none?: Prisma.AlunoWhereInput;
};
export type AlunoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AlunoCountOrderByAggregateInput = {
    matricula?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    idEstrutura?: Prisma.SortOrder;
};
export type AlunoAvgOrderByAggregateInput = {
    idEstrutura?: Prisma.SortOrder;
};
export type AlunoMaxOrderByAggregateInput = {
    matricula?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    idEstrutura?: Prisma.SortOrder;
};
export type AlunoMinOrderByAggregateInput = {
    matricula?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    idEstrutura?: Prisma.SortOrder;
};
export type AlunoSumOrderByAggregateInput = {
    idEstrutura?: Prisma.SortOrder;
};
export type AlunoScalarRelationFilter = {
    is?: Prisma.AlunoWhereInput;
    isNot?: Prisma.AlunoWhereInput;
};
export type AlunoCreateNestedManyWithoutEstruturaInput = {
    create?: Prisma.XOR<Prisma.AlunoCreateWithoutEstruturaInput, Prisma.AlunoUncheckedCreateWithoutEstruturaInput> | Prisma.AlunoCreateWithoutEstruturaInput[] | Prisma.AlunoUncheckedCreateWithoutEstruturaInput[];
    connectOrCreate?: Prisma.AlunoCreateOrConnectWithoutEstruturaInput | Prisma.AlunoCreateOrConnectWithoutEstruturaInput[];
    createMany?: Prisma.AlunoCreateManyEstruturaInputEnvelope;
    connect?: Prisma.AlunoWhereUniqueInput | Prisma.AlunoWhereUniqueInput[];
};
export type AlunoUncheckedCreateNestedManyWithoutEstruturaInput = {
    create?: Prisma.XOR<Prisma.AlunoCreateWithoutEstruturaInput, Prisma.AlunoUncheckedCreateWithoutEstruturaInput> | Prisma.AlunoCreateWithoutEstruturaInput[] | Prisma.AlunoUncheckedCreateWithoutEstruturaInput[];
    connectOrCreate?: Prisma.AlunoCreateOrConnectWithoutEstruturaInput | Prisma.AlunoCreateOrConnectWithoutEstruturaInput[];
    createMany?: Prisma.AlunoCreateManyEstruturaInputEnvelope;
    connect?: Prisma.AlunoWhereUniqueInput | Prisma.AlunoWhereUniqueInput[];
};
export type AlunoUpdateManyWithoutEstruturaNestedInput = {
    create?: Prisma.XOR<Prisma.AlunoCreateWithoutEstruturaInput, Prisma.AlunoUncheckedCreateWithoutEstruturaInput> | Prisma.AlunoCreateWithoutEstruturaInput[] | Prisma.AlunoUncheckedCreateWithoutEstruturaInput[];
    connectOrCreate?: Prisma.AlunoCreateOrConnectWithoutEstruturaInput | Prisma.AlunoCreateOrConnectWithoutEstruturaInput[];
    upsert?: Prisma.AlunoUpsertWithWhereUniqueWithoutEstruturaInput | Prisma.AlunoUpsertWithWhereUniqueWithoutEstruturaInput[];
    createMany?: Prisma.AlunoCreateManyEstruturaInputEnvelope;
    set?: Prisma.AlunoWhereUniqueInput | Prisma.AlunoWhereUniqueInput[];
    disconnect?: Prisma.AlunoWhereUniqueInput | Prisma.AlunoWhereUniqueInput[];
    delete?: Prisma.AlunoWhereUniqueInput | Prisma.AlunoWhereUniqueInput[];
    connect?: Prisma.AlunoWhereUniqueInput | Prisma.AlunoWhereUniqueInput[];
    update?: Prisma.AlunoUpdateWithWhereUniqueWithoutEstruturaInput | Prisma.AlunoUpdateWithWhereUniqueWithoutEstruturaInput[];
    updateMany?: Prisma.AlunoUpdateManyWithWhereWithoutEstruturaInput | Prisma.AlunoUpdateManyWithWhereWithoutEstruturaInput[];
    deleteMany?: Prisma.AlunoScalarWhereInput | Prisma.AlunoScalarWhereInput[];
};
export type AlunoUncheckedUpdateManyWithoutEstruturaNestedInput = {
    create?: Prisma.XOR<Prisma.AlunoCreateWithoutEstruturaInput, Prisma.AlunoUncheckedCreateWithoutEstruturaInput> | Prisma.AlunoCreateWithoutEstruturaInput[] | Prisma.AlunoUncheckedCreateWithoutEstruturaInput[];
    connectOrCreate?: Prisma.AlunoCreateOrConnectWithoutEstruturaInput | Prisma.AlunoCreateOrConnectWithoutEstruturaInput[];
    upsert?: Prisma.AlunoUpsertWithWhereUniqueWithoutEstruturaInput | Prisma.AlunoUpsertWithWhereUniqueWithoutEstruturaInput[];
    createMany?: Prisma.AlunoCreateManyEstruturaInputEnvelope;
    set?: Prisma.AlunoWhereUniqueInput | Prisma.AlunoWhereUniqueInput[];
    disconnect?: Prisma.AlunoWhereUniqueInput | Prisma.AlunoWhereUniqueInput[];
    delete?: Prisma.AlunoWhereUniqueInput | Prisma.AlunoWhereUniqueInput[];
    connect?: Prisma.AlunoWhereUniqueInput | Prisma.AlunoWhereUniqueInput[];
    update?: Prisma.AlunoUpdateWithWhereUniqueWithoutEstruturaInput | Prisma.AlunoUpdateWithWhereUniqueWithoutEstruturaInput[];
    updateMany?: Prisma.AlunoUpdateManyWithWhereWithoutEstruturaInput | Prisma.AlunoUpdateManyWithWhereWithoutEstruturaInput[];
    deleteMany?: Prisma.AlunoScalarWhereInput | Prisma.AlunoScalarWhereInput[];
};
export type AlunoCreateNestedOneWithoutCredencialInput = {
    create?: Prisma.XOR<Prisma.AlunoCreateWithoutCredencialInput, Prisma.AlunoUncheckedCreateWithoutCredencialInput>;
    connectOrCreate?: Prisma.AlunoCreateOrConnectWithoutCredencialInput;
    connect?: Prisma.AlunoWhereUniqueInput;
};
export type AlunoUpdateOneRequiredWithoutCredencialNestedInput = {
    create?: Prisma.XOR<Prisma.AlunoCreateWithoutCredencialInput, Prisma.AlunoUncheckedCreateWithoutCredencialInput>;
    connectOrCreate?: Prisma.AlunoCreateOrConnectWithoutCredencialInput;
    upsert?: Prisma.AlunoUpsertWithoutCredencialInput;
    connect?: Prisma.AlunoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AlunoUpdateToOneWithWhereWithoutCredencialInput, Prisma.AlunoUpdateWithoutCredencialInput>, Prisma.AlunoUncheckedUpdateWithoutCredencialInput>;
};
export type AlunoCreateNestedOneWithoutSessoesInput = {
    create?: Prisma.XOR<Prisma.AlunoCreateWithoutSessoesInput, Prisma.AlunoUncheckedCreateWithoutSessoesInput>;
    connectOrCreate?: Prisma.AlunoCreateOrConnectWithoutSessoesInput;
    connect?: Prisma.AlunoWhereUniqueInput;
};
export type AlunoUpdateOneRequiredWithoutSessoesNestedInput = {
    create?: Prisma.XOR<Prisma.AlunoCreateWithoutSessoesInput, Prisma.AlunoUncheckedCreateWithoutSessoesInput>;
    connectOrCreate?: Prisma.AlunoCreateOrConnectWithoutSessoesInput;
    upsert?: Prisma.AlunoUpsertWithoutSessoesInput;
    connect?: Prisma.AlunoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AlunoUpdateToOneWithWhereWithoutSessoesInput, Prisma.AlunoUpdateWithoutSessoesInput>, Prisma.AlunoUncheckedUpdateWithoutSessoesInput>;
};
export type AlunoCreateNestedOneWithoutConcluidosInput = {
    create?: Prisma.XOR<Prisma.AlunoCreateWithoutConcluidosInput, Prisma.AlunoUncheckedCreateWithoutConcluidosInput>;
    connectOrCreate?: Prisma.AlunoCreateOrConnectWithoutConcluidosInput;
    connect?: Prisma.AlunoWhereUniqueInput;
};
export type AlunoUpdateOneRequiredWithoutConcluidosNestedInput = {
    create?: Prisma.XOR<Prisma.AlunoCreateWithoutConcluidosInput, Prisma.AlunoUncheckedCreateWithoutConcluidosInput>;
    connectOrCreate?: Prisma.AlunoCreateOrConnectWithoutConcluidosInput;
    upsert?: Prisma.AlunoUpsertWithoutConcluidosInput;
    connect?: Prisma.AlunoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AlunoUpdateToOneWithWhereWithoutConcluidosInput, Prisma.AlunoUpdateWithoutConcluidosInput>, Prisma.AlunoUncheckedUpdateWithoutConcluidosInput>;
};
export type AlunoCreateNestedOneWithoutAcompanhamentosInput = {
    create?: Prisma.XOR<Prisma.AlunoCreateWithoutAcompanhamentosInput, Prisma.AlunoUncheckedCreateWithoutAcompanhamentosInput>;
    connectOrCreate?: Prisma.AlunoCreateOrConnectWithoutAcompanhamentosInput;
    connect?: Prisma.AlunoWhereUniqueInput;
};
export type AlunoUpdateOneRequiredWithoutAcompanhamentosNestedInput = {
    create?: Prisma.XOR<Prisma.AlunoCreateWithoutAcompanhamentosInput, Prisma.AlunoUncheckedCreateWithoutAcompanhamentosInput>;
    connectOrCreate?: Prisma.AlunoCreateOrConnectWithoutAcompanhamentosInput;
    upsert?: Prisma.AlunoUpsertWithoutAcompanhamentosInput;
    connect?: Prisma.AlunoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AlunoUpdateToOneWithWhereWithoutAcompanhamentosInput, Prisma.AlunoUpdateWithoutAcompanhamentosInput>, Prisma.AlunoUncheckedUpdateWithoutAcompanhamentosInput>;
};
export type AlunoCreateWithoutEstruturaInput = {
    matricula: string;
    nome: string;
    email: string;
    concluidos?: Prisma.ConcluiuCreateNestedManyWithoutAlunoInput;
    acompanhamentos?: Prisma.AcompanhaCreateNestedManyWithoutAlunoInput;
    credencial?: Prisma.CredencialCreateNestedOneWithoutAlunoInput;
    sessoes?: Prisma.SessaoRefreshCreateNestedManyWithoutAlunoInput;
};
export type AlunoUncheckedCreateWithoutEstruturaInput = {
    matricula: string;
    nome: string;
    email: string;
    concluidos?: Prisma.ConcluiuUncheckedCreateNestedManyWithoutAlunoInput;
    acompanhamentos?: Prisma.AcompanhaUncheckedCreateNestedManyWithoutAlunoInput;
    credencial?: Prisma.CredencialUncheckedCreateNestedOneWithoutAlunoInput;
    sessoes?: Prisma.SessaoRefreshUncheckedCreateNestedManyWithoutAlunoInput;
};
export type AlunoCreateOrConnectWithoutEstruturaInput = {
    where: Prisma.AlunoWhereUniqueInput;
    create: Prisma.XOR<Prisma.AlunoCreateWithoutEstruturaInput, Prisma.AlunoUncheckedCreateWithoutEstruturaInput>;
};
export type AlunoCreateManyEstruturaInputEnvelope = {
    data: Prisma.AlunoCreateManyEstruturaInput | Prisma.AlunoCreateManyEstruturaInput[];
    skipDuplicates?: boolean;
};
export type AlunoUpsertWithWhereUniqueWithoutEstruturaInput = {
    where: Prisma.AlunoWhereUniqueInput;
    update: Prisma.XOR<Prisma.AlunoUpdateWithoutEstruturaInput, Prisma.AlunoUncheckedUpdateWithoutEstruturaInput>;
    create: Prisma.XOR<Prisma.AlunoCreateWithoutEstruturaInput, Prisma.AlunoUncheckedCreateWithoutEstruturaInput>;
};
export type AlunoUpdateWithWhereUniqueWithoutEstruturaInput = {
    where: Prisma.AlunoWhereUniqueInput;
    data: Prisma.XOR<Prisma.AlunoUpdateWithoutEstruturaInput, Prisma.AlunoUncheckedUpdateWithoutEstruturaInput>;
};
export type AlunoUpdateManyWithWhereWithoutEstruturaInput = {
    where: Prisma.AlunoScalarWhereInput;
    data: Prisma.XOR<Prisma.AlunoUpdateManyMutationInput, Prisma.AlunoUncheckedUpdateManyWithoutEstruturaInput>;
};
export type AlunoScalarWhereInput = {
    AND?: Prisma.AlunoScalarWhereInput | Prisma.AlunoScalarWhereInput[];
    OR?: Prisma.AlunoScalarWhereInput[];
    NOT?: Prisma.AlunoScalarWhereInput | Prisma.AlunoScalarWhereInput[];
    matricula?: Prisma.StringFilter<"Aluno"> | string;
    nome?: Prisma.StringFilter<"Aluno"> | string;
    email?: Prisma.StringFilter<"Aluno"> | string;
    idEstrutura?: Prisma.BigIntFilter<"Aluno"> | bigint | number;
};
export type AlunoCreateWithoutCredencialInput = {
    matricula: string;
    nome: string;
    email: string;
    estrutura: Prisma.EstruturaCurricularCreateNestedOneWithoutAlunosInput;
    concluidos?: Prisma.ConcluiuCreateNestedManyWithoutAlunoInput;
    acompanhamentos?: Prisma.AcompanhaCreateNestedManyWithoutAlunoInput;
    sessoes?: Prisma.SessaoRefreshCreateNestedManyWithoutAlunoInput;
};
export type AlunoUncheckedCreateWithoutCredencialInput = {
    matricula: string;
    nome: string;
    email: string;
    idEstrutura: bigint | number;
    concluidos?: Prisma.ConcluiuUncheckedCreateNestedManyWithoutAlunoInput;
    acompanhamentos?: Prisma.AcompanhaUncheckedCreateNestedManyWithoutAlunoInput;
    sessoes?: Prisma.SessaoRefreshUncheckedCreateNestedManyWithoutAlunoInput;
};
export type AlunoCreateOrConnectWithoutCredencialInput = {
    where: Prisma.AlunoWhereUniqueInput;
    create: Prisma.XOR<Prisma.AlunoCreateWithoutCredencialInput, Prisma.AlunoUncheckedCreateWithoutCredencialInput>;
};
export type AlunoUpsertWithoutCredencialInput = {
    update: Prisma.XOR<Prisma.AlunoUpdateWithoutCredencialInput, Prisma.AlunoUncheckedUpdateWithoutCredencialInput>;
    create: Prisma.XOR<Prisma.AlunoCreateWithoutCredencialInput, Prisma.AlunoUncheckedCreateWithoutCredencialInput>;
    where?: Prisma.AlunoWhereInput;
};
export type AlunoUpdateToOneWithWhereWithoutCredencialInput = {
    where?: Prisma.AlunoWhereInput;
    data: Prisma.XOR<Prisma.AlunoUpdateWithoutCredencialInput, Prisma.AlunoUncheckedUpdateWithoutCredencialInput>;
};
export type AlunoUpdateWithoutCredencialInput = {
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    estrutura?: Prisma.EstruturaCurricularUpdateOneRequiredWithoutAlunosNestedInput;
    concluidos?: Prisma.ConcluiuUpdateManyWithoutAlunoNestedInput;
    acompanhamentos?: Prisma.AcompanhaUpdateManyWithoutAlunoNestedInput;
    sessoes?: Prisma.SessaoRefreshUpdateManyWithoutAlunoNestedInput;
};
export type AlunoUncheckedUpdateWithoutCredencialInput = {
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    idEstrutura?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    concluidos?: Prisma.ConcluiuUncheckedUpdateManyWithoutAlunoNestedInput;
    acompanhamentos?: Prisma.AcompanhaUncheckedUpdateManyWithoutAlunoNestedInput;
    sessoes?: Prisma.SessaoRefreshUncheckedUpdateManyWithoutAlunoNestedInput;
};
export type AlunoCreateWithoutSessoesInput = {
    matricula: string;
    nome: string;
    email: string;
    estrutura: Prisma.EstruturaCurricularCreateNestedOneWithoutAlunosInput;
    concluidos?: Prisma.ConcluiuCreateNestedManyWithoutAlunoInput;
    acompanhamentos?: Prisma.AcompanhaCreateNestedManyWithoutAlunoInput;
    credencial?: Prisma.CredencialCreateNestedOneWithoutAlunoInput;
};
export type AlunoUncheckedCreateWithoutSessoesInput = {
    matricula: string;
    nome: string;
    email: string;
    idEstrutura: bigint | number;
    concluidos?: Prisma.ConcluiuUncheckedCreateNestedManyWithoutAlunoInput;
    acompanhamentos?: Prisma.AcompanhaUncheckedCreateNestedManyWithoutAlunoInput;
    credencial?: Prisma.CredencialUncheckedCreateNestedOneWithoutAlunoInput;
};
export type AlunoCreateOrConnectWithoutSessoesInput = {
    where: Prisma.AlunoWhereUniqueInput;
    create: Prisma.XOR<Prisma.AlunoCreateWithoutSessoesInput, Prisma.AlunoUncheckedCreateWithoutSessoesInput>;
};
export type AlunoUpsertWithoutSessoesInput = {
    update: Prisma.XOR<Prisma.AlunoUpdateWithoutSessoesInput, Prisma.AlunoUncheckedUpdateWithoutSessoesInput>;
    create: Prisma.XOR<Prisma.AlunoCreateWithoutSessoesInput, Prisma.AlunoUncheckedCreateWithoutSessoesInput>;
    where?: Prisma.AlunoWhereInput;
};
export type AlunoUpdateToOneWithWhereWithoutSessoesInput = {
    where?: Prisma.AlunoWhereInput;
    data: Prisma.XOR<Prisma.AlunoUpdateWithoutSessoesInput, Prisma.AlunoUncheckedUpdateWithoutSessoesInput>;
};
export type AlunoUpdateWithoutSessoesInput = {
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    estrutura?: Prisma.EstruturaCurricularUpdateOneRequiredWithoutAlunosNestedInput;
    concluidos?: Prisma.ConcluiuUpdateManyWithoutAlunoNestedInput;
    acompanhamentos?: Prisma.AcompanhaUpdateManyWithoutAlunoNestedInput;
    credencial?: Prisma.CredencialUpdateOneWithoutAlunoNestedInput;
};
export type AlunoUncheckedUpdateWithoutSessoesInput = {
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    idEstrutura?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    concluidos?: Prisma.ConcluiuUncheckedUpdateManyWithoutAlunoNestedInput;
    acompanhamentos?: Prisma.AcompanhaUncheckedUpdateManyWithoutAlunoNestedInput;
    credencial?: Prisma.CredencialUncheckedUpdateOneWithoutAlunoNestedInput;
};
export type AlunoCreateWithoutConcluidosInput = {
    matricula: string;
    nome: string;
    email: string;
    estrutura: Prisma.EstruturaCurricularCreateNestedOneWithoutAlunosInput;
    acompanhamentos?: Prisma.AcompanhaCreateNestedManyWithoutAlunoInput;
    credencial?: Prisma.CredencialCreateNestedOneWithoutAlunoInput;
    sessoes?: Prisma.SessaoRefreshCreateNestedManyWithoutAlunoInput;
};
export type AlunoUncheckedCreateWithoutConcluidosInput = {
    matricula: string;
    nome: string;
    email: string;
    idEstrutura: bigint | number;
    acompanhamentos?: Prisma.AcompanhaUncheckedCreateNestedManyWithoutAlunoInput;
    credencial?: Prisma.CredencialUncheckedCreateNestedOneWithoutAlunoInput;
    sessoes?: Prisma.SessaoRefreshUncheckedCreateNestedManyWithoutAlunoInput;
};
export type AlunoCreateOrConnectWithoutConcluidosInput = {
    where: Prisma.AlunoWhereUniqueInput;
    create: Prisma.XOR<Prisma.AlunoCreateWithoutConcluidosInput, Prisma.AlunoUncheckedCreateWithoutConcluidosInput>;
};
export type AlunoUpsertWithoutConcluidosInput = {
    update: Prisma.XOR<Prisma.AlunoUpdateWithoutConcluidosInput, Prisma.AlunoUncheckedUpdateWithoutConcluidosInput>;
    create: Prisma.XOR<Prisma.AlunoCreateWithoutConcluidosInput, Prisma.AlunoUncheckedCreateWithoutConcluidosInput>;
    where?: Prisma.AlunoWhereInput;
};
export type AlunoUpdateToOneWithWhereWithoutConcluidosInput = {
    where?: Prisma.AlunoWhereInput;
    data: Prisma.XOR<Prisma.AlunoUpdateWithoutConcluidosInput, Prisma.AlunoUncheckedUpdateWithoutConcluidosInput>;
};
export type AlunoUpdateWithoutConcluidosInput = {
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    estrutura?: Prisma.EstruturaCurricularUpdateOneRequiredWithoutAlunosNestedInput;
    acompanhamentos?: Prisma.AcompanhaUpdateManyWithoutAlunoNestedInput;
    credencial?: Prisma.CredencialUpdateOneWithoutAlunoNestedInput;
    sessoes?: Prisma.SessaoRefreshUpdateManyWithoutAlunoNestedInput;
};
export type AlunoUncheckedUpdateWithoutConcluidosInput = {
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    idEstrutura?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    acompanhamentos?: Prisma.AcompanhaUncheckedUpdateManyWithoutAlunoNestedInput;
    credencial?: Prisma.CredencialUncheckedUpdateOneWithoutAlunoNestedInput;
    sessoes?: Prisma.SessaoRefreshUncheckedUpdateManyWithoutAlunoNestedInput;
};
export type AlunoCreateWithoutAcompanhamentosInput = {
    matricula: string;
    nome: string;
    email: string;
    estrutura: Prisma.EstruturaCurricularCreateNestedOneWithoutAlunosInput;
    concluidos?: Prisma.ConcluiuCreateNestedManyWithoutAlunoInput;
    credencial?: Prisma.CredencialCreateNestedOneWithoutAlunoInput;
    sessoes?: Prisma.SessaoRefreshCreateNestedManyWithoutAlunoInput;
};
export type AlunoUncheckedCreateWithoutAcompanhamentosInput = {
    matricula: string;
    nome: string;
    email: string;
    idEstrutura: bigint | number;
    concluidos?: Prisma.ConcluiuUncheckedCreateNestedManyWithoutAlunoInput;
    credencial?: Prisma.CredencialUncheckedCreateNestedOneWithoutAlunoInput;
    sessoes?: Prisma.SessaoRefreshUncheckedCreateNestedManyWithoutAlunoInput;
};
export type AlunoCreateOrConnectWithoutAcompanhamentosInput = {
    where: Prisma.AlunoWhereUniqueInput;
    create: Prisma.XOR<Prisma.AlunoCreateWithoutAcompanhamentosInput, Prisma.AlunoUncheckedCreateWithoutAcompanhamentosInput>;
};
export type AlunoUpsertWithoutAcompanhamentosInput = {
    update: Prisma.XOR<Prisma.AlunoUpdateWithoutAcompanhamentosInput, Prisma.AlunoUncheckedUpdateWithoutAcompanhamentosInput>;
    create: Prisma.XOR<Prisma.AlunoCreateWithoutAcompanhamentosInput, Prisma.AlunoUncheckedCreateWithoutAcompanhamentosInput>;
    where?: Prisma.AlunoWhereInput;
};
export type AlunoUpdateToOneWithWhereWithoutAcompanhamentosInput = {
    where?: Prisma.AlunoWhereInput;
    data: Prisma.XOR<Prisma.AlunoUpdateWithoutAcompanhamentosInput, Prisma.AlunoUncheckedUpdateWithoutAcompanhamentosInput>;
};
export type AlunoUpdateWithoutAcompanhamentosInput = {
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    estrutura?: Prisma.EstruturaCurricularUpdateOneRequiredWithoutAlunosNestedInput;
    concluidos?: Prisma.ConcluiuUpdateManyWithoutAlunoNestedInput;
    credencial?: Prisma.CredencialUpdateOneWithoutAlunoNestedInput;
    sessoes?: Prisma.SessaoRefreshUpdateManyWithoutAlunoNestedInput;
};
export type AlunoUncheckedUpdateWithoutAcompanhamentosInput = {
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    idEstrutura?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    concluidos?: Prisma.ConcluiuUncheckedUpdateManyWithoutAlunoNestedInput;
    credencial?: Prisma.CredencialUncheckedUpdateOneWithoutAlunoNestedInput;
    sessoes?: Prisma.SessaoRefreshUncheckedUpdateManyWithoutAlunoNestedInput;
};
export type AlunoCreateManyEstruturaInput = {
    matricula: string;
    nome: string;
    email: string;
};
export type AlunoUpdateWithoutEstruturaInput = {
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    concluidos?: Prisma.ConcluiuUpdateManyWithoutAlunoNestedInput;
    acompanhamentos?: Prisma.AcompanhaUpdateManyWithoutAlunoNestedInput;
    credencial?: Prisma.CredencialUpdateOneWithoutAlunoNestedInput;
    sessoes?: Prisma.SessaoRefreshUpdateManyWithoutAlunoNestedInput;
};
export type AlunoUncheckedUpdateWithoutEstruturaInput = {
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    concluidos?: Prisma.ConcluiuUncheckedUpdateManyWithoutAlunoNestedInput;
    acompanhamentos?: Prisma.AcompanhaUncheckedUpdateManyWithoutAlunoNestedInput;
    credencial?: Prisma.CredencialUncheckedUpdateOneWithoutAlunoNestedInput;
    sessoes?: Prisma.SessaoRefreshUncheckedUpdateManyWithoutAlunoNestedInput;
};
export type AlunoUncheckedUpdateManyWithoutEstruturaInput = {
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AlunoCountOutputType = {
    concluidos: number;
    acompanhamentos: number;
    sessoes: number;
};
export type AlunoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    concluidos?: boolean | AlunoCountOutputTypeCountConcluidosArgs;
    acompanhamentos?: boolean | AlunoCountOutputTypeCountAcompanhamentosArgs;
    sessoes?: boolean | AlunoCountOutputTypeCountSessoesArgs;
};
export type AlunoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlunoCountOutputTypeSelect<ExtArgs> | null;
};
export type AlunoCountOutputTypeCountConcluidosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConcluiuWhereInput;
};
export type AlunoCountOutputTypeCountAcompanhamentosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AcompanhaWhereInput;
};
export type AlunoCountOutputTypeCountSessoesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessaoRefreshWhereInput;
};
export type AlunoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    matricula?: boolean;
    nome?: boolean;
    email?: boolean;
    idEstrutura?: boolean;
    estrutura?: boolean | Prisma.EstruturaCurricularDefaultArgs<ExtArgs>;
    concluidos?: boolean | Prisma.Aluno$concluidosArgs<ExtArgs>;
    acompanhamentos?: boolean | Prisma.Aluno$acompanhamentosArgs<ExtArgs>;
    credencial?: boolean | Prisma.Aluno$credencialArgs<ExtArgs>;
    sessoes?: boolean | Prisma.Aluno$sessoesArgs<ExtArgs>;
    _count?: boolean | Prisma.AlunoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aluno"]>;
export type AlunoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    matricula?: boolean;
    nome?: boolean;
    email?: boolean;
    idEstrutura?: boolean;
    estrutura?: boolean | Prisma.EstruturaCurricularDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aluno"]>;
export type AlunoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    matricula?: boolean;
    nome?: boolean;
    email?: boolean;
    idEstrutura?: boolean;
    estrutura?: boolean | Prisma.EstruturaCurricularDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aluno"]>;
export type AlunoSelectScalar = {
    matricula?: boolean;
    nome?: boolean;
    email?: boolean;
    idEstrutura?: boolean;
};
export type AlunoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"matricula" | "nome" | "email" | "idEstrutura", ExtArgs["result"]["aluno"]>;
export type AlunoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    estrutura?: boolean | Prisma.EstruturaCurricularDefaultArgs<ExtArgs>;
    concluidos?: boolean | Prisma.Aluno$concluidosArgs<ExtArgs>;
    acompanhamentos?: boolean | Prisma.Aluno$acompanhamentosArgs<ExtArgs>;
    credencial?: boolean | Prisma.Aluno$credencialArgs<ExtArgs>;
    sessoes?: boolean | Prisma.Aluno$sessoesArgs<ExtArgs>;
    _count?: boolean | Prisma.AlunoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AlunoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    estrutura?: boolean | Prisma.EstruturaCurricularDefaultArgs<ExtArgs>;
};
export type AlunoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    estrutura?: boolean | Prisma.EstruturaCurricularDefaultArgs<ExtArgs>;
};
export type $AlunoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Aluno";
    objects: {
        estrutura: Prisma.$EstruturaCurricularPayload<ExtArgs>;
        concluidos: Prisma.$ConcluiuPayload<ExtArgs>[];
        acompanhamentos: Prisma.$AcompanhaPayload<ExtArgs>[];
        credencial: Prisma.$CredencialPayload<ExtArgs> | null;
        sessoes: Prisma.$SessaoRefreshPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        matricula: string;
        nome: string;
        email: string;
        idEstrutura: bigint;
    }, ExtArgs["result"]["aluno"]>;
    composites: {};
};
export type AlunoGetPayload<S extends boolean | null | undefined | AlunoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AlunoPayload, S>;
export type AlunoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AlunoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AlunoCountAggregateInputType | true;
};
export interface AlunoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Aluno'];
        meta: {
            name: 'Aluno';
        };
    };
    findUnique<T extends AlunoFindUniqueArgs>(args: Prisma.SelectSubset<T, AlunoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AlunoClient<runtime.Types.Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AlunoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AlunoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AlunoClient<runtime.Types.Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AlunoFindFirstArgs>(args?: Prisma.SelectSubset<T, AlunoFindFirstArgs<ExtArgs>>): Prisma.Prisma__AlunoClient<runtime.Types.Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AlunoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AlunoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AlunoClient<runtime.Types.Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AlunoFindManyArgs>(args?: Prisma.SelectSubset<T, AlunoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AlunoCreateArgs>(args: Prisma.SelectSubset<T, AlunoCreateArgs<ExtArgs>>): Prisma.Prisma__AlunoClient<runtime.Types.Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AlunoCreateManyArgs>(args?: Prisma.SelectSubset<T, AlunoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AlunoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AlunoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AlunoDeleteArgs>(args: Prisma.SelectSubset<T, AlunoDeleteArgs<ExtArgs>>): Prisma.Prisma__AlunoClient<runtime.Types.Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AlunoUpdateArgs>(args: Prisma.SelectSubset<T, AlunoUpdateArgs<ExtArgs>>): Prisma.Prisma__AlunoClient<runtime.Types.Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AlunoDeleteManyArgs>(args?: Prisma.SelectSubset<T, AlunoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AlunoUpdateManyArgs>(args: Prisma.SelectSubset<T, AlunoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AlunoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AlunoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AlunoUpsertArgs>(args: Prisma.SelectSubset<T, AlunoUpsertArgs<ExtArgs>>): Prisma.Prisma__AlunoClient<runtime.Types.Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AlunoCountArgs>(args?: Prisma.Subset<T, AlunoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AlunoCountAggregateOutputType> : number>;
    aggregate<T extends AlunoAggregateArgs>(args: Prisma.Subset<T, AlunoAggregateArgs>): Prisma.PrismaPromise<GetAlunoAggregateType<T>>;
    groupBy<T extends AlunoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AlunoGroupByArgs['orderBy'];
    } : {
        orderBy?: AlunoGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AlunoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlunoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AlunoFieldRefs;
}
export interface Prisma__AlunoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    estrutura<T extends Prisma.EstruturaCurricularDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EstruturaCurricularDefaultArgs<ExtArgs>>): Prisma.Prisma__EstruturaCurricularClient<runtime.Types.Result.GetResult<Prisma.$EstruturaCurricularPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    concluidos<T extends Prisma.Aluno$concluidosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Aluno$concluidosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConcluiuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    acompanhamentos<T extends Prisma.Aluno$acompanhamentosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Aluno$acompanhamentosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AcompanhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    credencial<T extends Prisma.Aluno$credencialArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Aluno$credencialArgs<ExtArgs>>): Prisma.Prisma__CredencialClient<runtime.Types.Result.GetResult<Prisma.$CredencialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    sessoes<T extends Prisma.Aluno$sessoesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Aluno$sessoesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessaoRefreshPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AlunoFieldRefs {
    readonly matricula: Prisma.FieldRef<"Aluno", 'String'>;
    readonly nome: Prisma.FieldRef<"Aluno", 'String'>;
    readonly email: Prisma.FieldRef<"Aluno", 'String'>;
    readonly idEstrutura: Prisma.FieldRef<"Aluno", 'BigInt'>;
}
export type AlunoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlunoSelect<ExtArgs> | null;
    omit?: Prisma.AlunoOmit<ExtArgs> | null;
    include?: Prisma.AlunoInclude<ExtArgs> | null;
    where: Prisma.AlunoWhereUniqueInput;
};
export type AlunoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlunoSelect<ExtArgs> | null;
    omit?: Prisma.AlunoOmit<ExtArgs> | null;
    include?: Prisma.AlunoInclude<ExtArgs> | null;
    where: Prisma.AlunoWhereUniqueInput;
};
export type AlunoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlunoSelect<ExtArgs> | null;
    omit?: Prisma.AlunoOmit<ExtArgs> | null;
    include?: Prisma.AlunoInclude<ExtArgs> | null;
    where?: Prisma.AlunoWhereInput;
    orderBy?: Prisma.AlunoOrderByWithRelationInput | Prisma.AlunoOrderByWithRelationInput[];
    cursor?: Prisma.AlunoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AlunoScalarFieldEnum | Prisma.AlunoScalarFieldEnum[];
};
export type AlunoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlunoSelect<ExtArgs> | null;
    omit?: Prisma.AlunoOmit<ExtArgs> | null;
    include?: Prisma.AlunoInclude<ExtArgs> | null;
    where?: Prisma.AlunoWhereInput;
    orderBy?: Prisma.AlunoOrderByWithRelationInput | Prisma.AlunoOrderByWithRelationInput[];
    cursor?: Prisma.AlunoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AlunoScalarFieldEnum | Prisma.AlunoScalarFieldEnum[];
};
export type AlunoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlunoSelect<ExtArgs> | null;
    omit?: Prisma.AlunoOmit<ExtArgs> | null;
    include?: Prisma.AlunoInclude<ExtArgs> | null;
    where?: Prisma.AlunoWhereInput;
    orderBy?: Prisma.AlunoOrderByWithRelationInput | Prisma.AlunoOrderByWithRelationInput[];
    cursor?: Prisma.AlunoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AlunoScalarFieldEnum | Prisma.AlunoScalarFieldEnum[];
};
export type AlunoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlunoSelect<ExtArgs> | null;
    omit?: Prisma.AlunoOmit<ExtArgs> | null;
    include?: Prisma.AlunoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AlunoCreateInput, Prisma.AlunoUncheckedCreateInput>;
};
export type AlunoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AlunoCreateManyInput | Prisma.AlunoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AlunoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlunoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AlunoOmit<ExtArgs> | null;
    data: Prisma.AlunoCreateManyInput | Prisma.AlunoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AlunoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AlunoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlunoSelect<ExtArgs> | null;
    omit?: Prisma.AlunoOmit<ExtArgs> | null;
    include?: Prisma.AlunoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AlunoUpdateInput, Prisma.AlunoUncheckedUpdateInput>;
    where: Prisma.AlunoWhereUniqueInput;
};
export type AlunoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AlunoUpdateManyMutationInput, Prisma.AlunoUncheckedUpdateManyInput>;
    where?: Prisma.AlunoWhereInput;
    limit?: number;
};
export type AlunoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlunoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AlunoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AlunoUpdateManyMutationInput, Prisma.AlunoUncheckedUpdateManyInput>;
    where?: Prisma.AlunoWhereInput;
    limit?: number;
    include?: Prisma.AlunoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AlunoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlunoSelect<ExtArgs> | null;
    omit?: Prisma.AlunoOmit<ExtArgs> | null;
    include?: Prisma.AlunoInclude<ExtArgs> | null;
    where: Prisma.AlunoWhereUniqueInput;
    create: Prisma.XOR<Prisma.AlunoCreateInput, Prisma.AlunoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AlunoUpdateInput, Prisma.AlunoUncheckedUpdateInput>;
};
export type AlunoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlunoSelect<ExtArgs> | null;
    omit?: Prisma.AlunoOmit<ExtArgs> | null;
    include?: Prisma.AlunoInclude<ExtArgs> | null;
    where: Prisma.AlunoWhereUniqueInput;
};
export type AlunoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AlunoWhereInput;
    limit?: number;
};
export type Aluno$concluidosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConcluiuSelect<ExtArgs> | null;
    omit?: Prisma.ConcluiuOmit<ExtArgs> | null;
    include?: Prisma.ConcluiuInclude<ExtArgs> | null;
    where?: Prisma.ConcluiuWhereInput;
    orderBy?: Prisma.ConcluiuOrderByWithRelationInput | Prisma.ConcluiuOrderByWithRelationInput[];
    cursor?: Prisma.ConcluiuWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConcluiuScalarFieldEnum | Prisma.ConcluiuScalarFieldEnum[];
};
export type Aluno$acompanhamentosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AcompanhaSelect<ExtArgs> | null;
    omit?: Prisma.AcompanhaOmit<ExtArgs> | null;
    include?: Prisma.AcompanhaInclude<ExtArgs> | null;
    where?: Prisma.AcompanhaWhereInput;
    orderBy?: Prisma.AcompanhaOrderByWithRelationInput | Prisma.AcompanhaOrderByWithRelationInput[];
    cursor?: Prisma.AcompanhaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AcompanhaScalarFieldEnum | Prisma.AcompanhaScalarFieldEnum[];
};
export type Aluno$credencialArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredencialSelect<ExtArgs> | null;
    omit?: Prisma.CredencialOmit<ExtArgs> | null;
    include?: Prisma.CredencialInclude<ExtArgs> | null;
    where?: Prisma.CredencialWhereInput;
};
export type Aluno$sessoesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessaoRefreshSelect<ExtArgs> | null;
    omit?: Prisma.SessaoRefreshOmit<ExtArgs> | null;
    include?: Prisma.SessaoRefreshInclude<ExtArgs> | null;
    where?: Prisma.SessaoRefreshWhereInput;
    orderBy?: Prisma.SessaoRefreshOrderByWithRelationInput | Prisma.SessaoRefreshOrderByWithRelationInput[];
    cursor?: Prisma.SessaoRefreshWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessaoRefreshScalarFieldEnum | Prisma.SessaoRefreshScalarFieldEnum[];
};
export type AlunoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlunoSelect<ExtArgs> | null;
    omit?: Prisma.AlunoOmit<ExtArgs> | null;
    include?: Prisma.AlunoInclude<ExtArgs> | null;
};
