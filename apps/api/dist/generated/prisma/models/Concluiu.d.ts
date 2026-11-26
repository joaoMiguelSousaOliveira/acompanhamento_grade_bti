import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ConcluiuModel = runtime.Types.Result.DefaultSelection<Prisma.$ConcluiuPayload>;
export type AggregateConcluiu = {
    _count: ConcluiuCountAggregateOutputType | null;
    _avg: ConcluiuAvgAggregateOutputType | null;
    _sum: ConcluiuSumAggregateOutputType | null;
    _min: ConcluiuMinAggregateOutputType | null;
    _max: ConcluiuMaxAggregateOutputType | null;
};
export type ConcluiuAvgAggregateOutputType = {
    idComponente: number | null;
};
export type ConcluiuSumAggregateOutputType = {
    idComponente: bigint | null;
};
export type ConcluiuMinAggregateOutputType = {
    matricula: string | null;
    idComponente: bigint | null;
    semestreConclusao: string | null;
};
export type ConcluiuMaxAggregateOutputType = {
    matricula: string | null;
    idComponente: bigint | null;
    semestreConclusao: string | null;
};
export type ConcluiuCountAggregateOutputType = {
    matricula: number;
    idComponente: number;
    semestreConclusao: number;
    _all: number;
};
export type ConcluiuAvgAggregateInputType = {
    idComponente?: true;
};
export type ConcluiuSumAggregateInputType = {
    idComponente?: true;
};
export type ConcluiuMinAggregateInputType = {
    matricula?: true;
    idComponente?: true;
    semestreConclusao?: true;
};
export type ConcluiuMaxAggregateInputType = {
    matricula?: true;
    idComponente?: true;
    semestreConclusao?: true;
};
export type ConcluiuCountAggregateInputType = {
    matricula?: true;
    idComponente?: true;
    semestreConclusao?: true;
    _all?: true;
};
export type ConcluiuAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConcluiuWhereInput;
    orderBy?: Prisma.ConcluiuOrderByWithRelationInput | Prisma.ConcluiuOrderByWithRelationInput[];
    cursor?: Prisma.ConcluiuWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ConcluiuCountAggregateInputType;
    _avg?: ConcluiuAvgAggregateInputType;
    _sum?: ConcluiuSumAggregateInputType;
    _min?: ConcluiuMinAggregateInputType;
    _max?: ConcluiuMaxAggregateInputType;
};
export type GetConcluiuAggregateType<T extends ConcluiuAggregateArgs> = {
    [P in keyof T & keyof AggregateConcluiu]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConcluiu[P]> : Prisma.GetScalarType<T[P], AggregateConcluiu[P]>;
};
export type ConcluiuGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConcluiuWhereInput;
    orderBy?: Prisma.ConcluiuOrderByWithAggregationInput | Prisma.ConcluiuOrderByWithAggregationInput[];
    by: Prisma.ConcluiuScalarFieldEnum[] | Prisma.ConcluiuScalarFieldEnum;
    having?: Prisma.ConcluiuScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConcluiuCountAggregateInputType | true;
    _avg?: ConcluiuAvgAggregateInputType;
    _sum?: ConcluiuSumAggregateInputType;
    _min?: ConcluiuMinAggregateInputType;
    _max?: ConcluiuMaxAggregateInputType;
};
export type ConcluiuGroupByOutputType = {
    matricula: string;
    idComponente: bigint;
    semestreConclusao: string;
    _count: ConcluiuCountAggregateOutputType | null;
    _avg: ConcluiuAvgAggregateOutputType | null;
    _sum: ConcluiuSumAggregateOutputType | null;
    _min: ConcluiuMinAggregateOutputType | null;
    _max: ConcluiuMaxAggregateOutputType | null;
};
export type GetConcluiuGroupByPayload<T extends ConcluiuGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConcluiuGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConcluiuGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConcluiuGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConcluiuGroupByOutputType[P]>;
}>>;
export type ConcluiuWhereInput = {
    AND?: Prisma.ConcluiuWhereInput | Prisma.ConcluiuWhereInput[];
    OR?: Prisma.ConcluiuWhereInput[];
    NOT?: Prisma.ConcluiuWhereInput | Prisma.ConcluiuWhereInput[];
    matricula?: Prisma.StringFilter<"Concluiu"> | string;
    idComponente?: Prisma.BigIntFilter<"Concluiu"> | bigint | number;
    semestreConclusao?: Prisma.StringFilter<"Concluiu"> | string;
    aluno?: Prisma.XOR<Prisma.AlunoScalarRelationFilter, Prisma.AlunoWhereInput>;
    componente?: Prisma.XOR<Prisma.ComponenteScalarRelationFilter, Prisma.ComponenteWhereInput>;
};
export type ConcluiuOrderByWithRelationInput = {
    matricula?: Prisma.SortOrder;
    idComponente?: Prisma.SortOrder;
    semestreConclusao?: Prisma.SortOrder;
    aluno?: Prisma.AlunoOrderByWithRelationInput;
    componente?: Prisma.ComponenteOrderByWithRelationInput;
};
export type ConcluiuWhereUniqueInput = Prisma.AtLeast<{
    matricula_idComponente?: Prisma.ConcluiuMatriculaIdComponenteCompoundUniqueInput;
    AND?: Prisma.ConcluiuWhereInput | Prisma.ConcluiuWhereInput[];
    OR?: Prisma.ConcluiuWhereInput[];
    NOT?: Prisma.ConcluiuWhereInput | Prisma.ConcluiuWhereInput[];
    matricula?: Prisma.StringFilter<"Concluiu"> | string;
    idComponente?: Prisma.BigIntFilter<"Concluiu"> | bigint | number;
    semestreConclusao?: Prisma.StringFilter<"Concluiu"> | string;
    aluno?: Prisma.XOR<Prisma.AlunoScalarRelationFilter, Prisma.AlunoWhereInput>;
    componente?: Prisma.XOR<Prisma.ComponenteScalarRelationFilter, Prisma.ComponenteWhereInput>;
}, "matricula_idComponente">;
export type ConcluiuOrderByWithAggregationInput = {
    matricula?: Prisma.SortOrder;
    idComponente?: Prisma.SortOrder;
    semestreConclusao?: Prisma.SortOrder;
    _count?: Prisma.ConcluiuCountOrderByAggregateInput;
    _avg?: Prisma.ConcluiuAvgOrderByAggregateInput;
    _max?: Prisma.ConcluiuMaxOrderByAggregateInput;
    _min?: Prisma.ConcluiuMinOrderByAggregateInput;
    _sum?: Prisma.ConcluiuSumOrderByAggregateInput;
};
export type ConcluiuScalarWhereWithAggregatesInput = {
    AND?: Prisma.ConcluiuScalarWhereWithAggregatesInput | Prisma.ConcluiuScalarWhereWithAggregatesInput[];
    OR?: Prisma.ConcluiuScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ConcluiuScalarWhereWithAggregatesInput | Prisma.ConcluiuScalarWhereWithAggregatesInput[];
    matricula?: Prisma.StringWithAggregatesFilter<"Concluiu"> | string;
    idComponente?: Prisma.BigIntWithAggregatesFilter<"Concluiu"> | bigint | number;
    semestreConclusao?: Prisma.StringWithAggregatesFilter<"Concluiu"> | string;
};
export type ConcluiuCreateInput = {
    semestreConclusao: string;
    aluno: Prisma.AlunoCreateNestedOneWithoutConcluidosInput;
    componente: Prisma.ComponenteCreateNestedOneWithoutConcluidosInput;
};
export type ConcluiuUncheckedCreateInput = {
    matricula: string;
    idComponente: bigint | number;
    semestreConclusao: string;
};
export type ConcluiuUpdateInput = {
    semestreConclusao?: Prisma.StringFieldUpdateOperationsInput | string;
    aluno?: Prisma.AlunoUpdateOneRequiredWithoutConcluidosNestedInput;
    componente?: Prisma.ComponenteUpdateOneRequiredWithoutConcluidosNestedInput;
};
export type ConcluiuUncheckedUpdateInput = {
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    semestreConclusao?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConcluiuCreateManyInput = {
    matricula: string;
    idComponente: bigint | number;
    semestreConclusao: string;
};
export type ConcluiuUpdateManyMutationInput = {
    semestreConclusao?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConcluiuUncheckedUpdateManyInput = {
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    semestreConclusao?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConcluiuListRelationFilter = {
    every?: Prisma.ConcluiuWhereInput;
    some?: Prisma.ConcluiuWhereInput;
    none?: Prisma.ConcluiuWhereInput;
};
export type ConcluiuOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ConcluiuMatriculaIdComponenteCompoundUniqueInput = {
    matricula: string;
    idComponente: bigint | number;
};
export type ConcluiuCountOrderByAggregateInput = {
    matricula?: Prisma.SortOrder;
    idComponente?: Prisma.SortOrder;
    semestreConclusao?: Prisma.SortOrder;
};
export type ConcluiuAvgOrderByAggregateInput = {
    idComponente?: Prisma.SortOrder;
};
export type ConcluiuMaxOrderByAggregateInput = {
    matricula?: Prisma.SortOrder;
    idComponente?: Prisma.SortOrder;
    semestreConclusao?: Prisma.SortOrder;
};
export type ConcluiuMinOrderByAggregateInput = {
    matricula?: Prisma.SortOrder;
    idComponente?: Prisma.SortOrder;
    semestreConclusao?: Prisma.SortOrder;
};
export type ConcluiuSumOrderByAggregateInput = {
    idComponente?: Prisma.SortOrder;
};
export type ConcluiuCreateNestedManyWithoutAlunoInput = {
    create?: Prisma.XOR<Prisma.ConcluiuCreateWithoutAlunoInput, Prisma.ConcluiuUncheckedCreateWithoutAlunoInput> | Prisma.ConcluiuCreateWithoutAlunoInput[] | Prisma.ConcluiuUncheckedCreateWithoutAlunoInput[];
    connectOrCreate?: Prisma.ConcluiuCreateOrConnectWithoutAlunoInput | Prisma.ConcluiuCreateOrConnectWithoutAlunoInput[];
    createMany?: Prisma.ConcluiuCreateManyAlunoInputEnvelope;
    connect?: Prisma.ConcluiuWhereUniqueInput | Prisma.ConcluiuWhereUniqueInput[];
};
export type ConcluiuUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: Prisma.XOR<Prisma.ConcluiuCreateWithoutAlunoInput, Prisma.ConcluiuUncheckedCreateWithoutAlunoInput> | Prisma.ConcluiuCreateWithoutAlunoInput[] | Prisma.ConcluiuUncheckedCreateWithoutAlunoInput[];
    connectOrCreate?: Prisma.ConcluiuCreateOrConnectWithoutAlunoInput | Prisma.ConcluiuCreateOrConnectWithoutAlunoInput[];
    createMany?: Prisma.ConcluiuCreateManyAlunoInputEnvelope;
    connect?: Prisma.ConcluiuWhereUniqueInput | Prisma.ConcluiuWhereUniqueInput[];
};
export type ConcluiuUpdateManyWithoutAlunoNestedInput = {
    create?: Prisma.XOR<Prisma.ConcluiuCreateWithoutAlunoInput, Prisma.ConcluiuUncheckedCreateWithoutAlunoInput> | Prisma.ConcluiuCreateWithoutAlunoInput[] | Prisma.ConcluiuUncheckedCreateWithoutAlunoInput[];
    connectOrCreate?: Prisma.ConcluiuCreateOrConnectWithoutAlunoInput | Prisma.ConcluiuCreateOrConnectWithoutAlunoInput[];
    upsert?: Prisma.ConcluiuUpsertWithWhereUniqueWithoutAlunoInput | Prisma.ConcluiuUpsertWithWhereUniqueWithoutAlunoInput[];
    createMany?: Prisma.ConcluiuCreateManyAlunoInputEnvelope;
    set?: Prisma.ConcluiuWhereUniqueInput | Prisma.ConcluiuWhereUniqueInput[];
    disconnect?: Prisma.ConcluiuWhereUniqueInput | Prisma.ConcluiuWhereUniqueInput[];
    delete?: Prisma.ConcluiuWhereUniqueInput | Prisma.ConcluiuWhereUniqueInput[];
    connect?: Prisma.ConcluiuWhereUniqueInput | Prisma.ConcluiuWhereUniqueInput[];
    update?: Prisma.ConcluiuUpdateWithWhereUniqueWithoutAlunoInput | Prisma.ConcluiuUpdateWithWhereUniqueWithoutAlunoInput[];
    updateMany?: Prisma.ConcluiuUpdateManyWithWhereWithoutAlunoInput | Prisma.ConcluiuUpdateManyWithWhereWithoutAlunoInput[];
    deleteMany?: Prisma.ConcluiuScalarWhereInput | Prisma.ConcluiuScalarWhereInput[];
};
export type ConcluiuUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: Prisma.XOR<Prisma.ConcluiuCreateWithoutAlunoInput, Prisma.ConcluiuUncheckedCreateWithoutAlunoInput> | Prisma.ConcluiuCreateWithoutAlunoInput[] | Prisma.ConcluiuUncheckedCreateWithoutAlunoInput[];
    connectOrCreate?: Prisma.ConcluiuCreateOrConnectWithoutAlunoInput | Prisma.ConcluiuCreateOrConnectWithoutAlunoInput[];
    upsert?: Prisma.ConcluiuUpsertWithWhereUniqueWithoutAlunoInput | Prisma.ConcluiuUpsertWithWhereUniqueWithoutAlunoInput[];
    createMany?: Prisma.ConcluiuCreateManyAlunoInputEnvelope;
    set?: Prisma.ConcluiuWhereUniqueInput | Prisma.ConcluiuWhereUniqueInput[];
    disconnect?: Prisma.ConcluiuWhereUniqueInput | Prisma.ConcluiuWhereUniqueInput[];
    delete?: Prisma.ConcluiuWhereUniqueInput | Prisma.ConcluiuWhereUniqueInput[];
    connect?: Prisma.ConcluiuWhereUniqueInput | Prisma.ConcluiuWhereUniqueInput[];
    update?: Prisma.ConcluiuUpdateWithWhereUniqueWithoutAlunoInput | Prisma.ConcluiuUpdateWithWhereUniqueWithoutAlunoInput[];
    updateMany?: Prisma.ConcluiuUpdateManyWithWhereWithoutAlunoInput | Prisma.ConcluiuUpdateManyWithWhereWithoutAlunoInput[];
    deleteMany?: Prisma.ConcluiuScalarWhereInput | Prisma.ConcluiuScalarWhereInput[];
};
export type ConcluiuCreateNestedManyWithoutComponenteInput = {
    create?: Prisma.XOR<Prisma.ConcluiuCreateWithoutComponenteInput, Prisma.ConcluiuUncheckedCreateWithoutComponenteInput> | Prisma.ConcluiuCreateWithoutComponenteInput[] | Prisma.ConcluiuUncheckedCreateWithoutComponenteInput[];
    connectOrCreate?: Prisma.ConcluiuCreateOrConnectWithoutComponenteInput | Prisma.ConcluiuCreateOrConnectWithoutComponenteInput[];
    createMany?: Prisma.ConcluiuCreateManyComponenteInputEnvelope;
    connect?: Prisma.ConcluiuWhereUniqueInput | Prisma.ConcluiuWhereUniqueInput[];
};
export type ConcluiuUncheckedCreateNestedManyWithoutComponenteInput = {
    create?: Prisma.XOR<Prisma.ConcluiuCreateWithoutComponenteInput, Prisma.ConcluiuUncheckedCreateWithoutComponenteInput> | Prisma.ConcluiuCreateWithoutComponenteInput[] | Prisma.ConcluiuUncheckedCreateWithoutComponenteInput[];
    connectOrCreate?: Prisma.ConcluiuCreateOrConnectWithoutComponenteInput | Prisma.ConcluiuCreateOrConnectWithoutComponenteInput[];
    createMany?: Prisma.ConcluiuCreateManyComponenteInputEnvelope;
    connect?: Prisma.ConcluiuWhereUniqueInput | Prisma.ConcluiuWhereUniqueInput[];
};
export type ConcluiuUpdateManyWithoutComponenteNestedInput = {
    create?: Prisma.XOR<Prisma.ConcluiuCreateWithoutComponenteInput, Prisma.ConcluiuUncheckedCreateWithoutComponenteInput> | Prisma.ConcluiuCreateWithoutComponenteInput[] | Prisma.ConcluiuUncheckedCreateWithoutComponenteInput[];
    connectOrCreate?: Prisma.ConcluiuCreateOrConnectWithoutComponenteInput | Prisma.ConcluiuCreateOrConnectWithoutComponenteInput[];
    upsert?: Prisma.ConcluiuUpsertWithWhereUniqueWithoutComponenteInput | Prisma.ConcluiuUpsertWithWhereUniqueWithoutComponenteInput[];
    createMany?: Prisma.ConcluiuCreateManyComponenteInputEnvelope;
    set?: Prisma.ConcluiuWhereUniqueInput | Prisma.ConcluiuWhereUniqueInput[];
    disconnect?: Prisma.ConcluiuWhereUniqueInput | Prisma.ConcluiuWhereUniqueInput[];
    delete?: Prisma.ConcluiuWhereUniqueInput | Prisma.ConcluiuWhereUniqueInput[];
    connect?: Prisma.ConcluiuWhereUniqueInput | Prisma.ConcluiuWhereUniqueInput[];
    update?: Prisma.ConcluiuUpdateWithWhereUniqueWithoutComponenteInput | Prisma.ConcluiuUpdateWithWhereUniqueWithoutComponenteInput[];
    updateMany?: Prisma.ConcluiuUpdateManyWithWhereWithoutComponenteInput | Prisma.ConcluiuUpdateManyWithWhereWithoutComponenteInput[];
    deleteMany?: Prisma.ConcluiuScalarWhereInput | Prisma.ConcluiuScalarWhereInput[];
};
export type ConcluiuUncheckedUpdateManyWithoutComponenteNestedInput = {
    create?: Prisma.XOR<Prisma.ConcluiuCreateWithoutComponenteInput, Prisma.ConcluiuUncheckedCreateWithoutComponenteInput> | Prisma.ConcluiuCreateWithoutComponenteInput[] | Prisma.ConcluiuUncheckedCreateWithoutComponenteInput[];
    connectOrCreate?: Prisma.ConcluiuCreateOrConnectWithoutComponenteInput | Prisma.ConcluiuCreateOrConnectWithoutComponenteInput[];
    upsert?: Prisma.ConcluiuUpsertWithWhereUniqueWithoutComponenteInput | Prisma.ConcluiuUpsertWithWhereUniqueWithoutComponenteInput[];
    createMany?: Prisma.ConcluiuCreateManyComponenteInputEnvelope;
    set?: Prisma.ConcluiuWhereUniqueInput | Prisma.ConcluiuWhereUniqueInput[];
    disconnect?: Prisma.ConcluiuWhereUniqueInput | Prisma.ConcluiuWhereUniqueInput[];
    delete?: Prisma.ConcluiuWhereUniqueInput | Prisma.ConcluiuWhereUniqueInput[];
    connect?: Prisma.ConcluiuWhereUniqueInput | Prisma.ConcluiuWhereUniqueInput[];
    update?: Prisma.ConcluiuUpdateWithWhereUniqueWithoutComponenteInput | Prisma.ConcluiuUpdateWithWhereUniqueWithoutComponenteInput[];
    updateMany?: Prisma.ConcluiuUpdateManyWithWhereWithoutComponenteInput | Prisma.ConcluiuUpdateManyWithWhereWithoutComponenteInput[];
    deleteMany?: Prisma.ConcluiuScalarWhereInput | Prisma.ConcluiuScalarWhereInput[];
};
export type ConcluiuCreateWithoutAlunoInput = {
    semestreConclusao: string;
    componente: Prisma.ComponenteCreateNestedOneWithoutConcluidosInput;
};
export type ConcluiuUncheckedCreateWithoutAlunoInput = {
    idComponente: bigint | number;
    semestreConclusao: string;
};
export type ConcluiuCreateOrConnectWithoutAlunoInput = {
    where: Prisma.ConcluiuWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConcluiuCreateWithoutAlunoInput, Prisma.ConcluiuUncheckedCreateWithoutAlunoInput>;
};
export type ConcluiuCreateManyAlunoInputEnvelope = {
    data: Prisma.ConcluiuCreateManyAlunoInput | Prisma.ConcluiuCreateManyAlunoInput[];
    skipDuplicates?: boolean;
};
export type ConcluiuUpsertWithWhereUniqueWithoutAlunoInput = {
    where: Prisma.ConcluiuWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConcluiuUpdateWithoutAlunoInput, Prisma.ConcluiuUncheckedUpdateWithoutAlunoInput>;
    create: Prisma.XOR<Prisma.ConcluiuCreateWithoutAlunoInput, Prisma.ConcluiuUncheckedCreateWithoutAlunoInput>;
};
export type ConcluiuUpdateWithWhereUniqueWithoutAlunoInput = {
    where: Prisma.ConcluiuWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConcluiuUpdateWithoutAlunoInput, Prisma.ConcluiuUncheckedUpdateWithoutAlunoInput>;
};
export type ConcluiuUpdateManyWithWhereWithoutAlunoInput = {
    where: Prisma.ConcluiuScalarWhereInput;
    data: Prisma.XOR<Prisma.ConcluiuUpdateManyMutationInput, Prisma.ConcluiuUncheckedUpdateManyWithoutAlunoInput>;
};
export type ConcluiuScalarWhereInput = {
    AND?: Prisma.ConcluiuScalarWhereInput | Prisma.ConcluiuScalarWhereInput[];
    OR?: Prisma.ConcluiuScalarWhereInput[];
    NOT?: Prisma.ConcluiuScalarWhereInput | Prisma.ConcluiuScalarWhereInput[];
    matricula?: Prisma.StringFilter<"Concluiu"> | string;
    idComponente?: Prisma.BigIntFilter<"Concluiu"> | bigint | number;
    semestreConclusao?: Prisma.StringFilter<"Concluiu"> | string;
};
export type ConcluiuCreateWithoutComponenteInput = {
    semestreConclusao: string;
    aluno: Prisma.AlunoCreateNestedOneWithoutConcluidosInput;
};
export type ConcluiuUncheckedCreateWithoutComponenteInput = {
    matricula: string;
    semestreConclusao: string;
};
export type ConcluiuCreateOrConnectWithoutComponenteInput = {
    where: Prisma.ConcluiuWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConcluiuCreateWithoutComponenteInput, Prisma.ConcluiuUncheckedCreateWithoutComponenteInput>;
};
export type ConcluiuCreateManyComponenteInputEnvelope = {
    data: Prisma.ConcluiuCreateManyComponenteInput | Prisma.ConcluiuCreateManyComponenteInput[];
    skipDuplicates?: boolean;
};
export type ConcluiuUpsertWithWhereUniqueWithoutComponenteInput = {
    where: Prisma.ConcluiuWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConcluiuUpdateWithoutComponenteInput, Prisma.ConcluiuUncheckedUpdateWithoutComponenteInput>;
    create: Prisma.XOR<Prisma.ConcluiuCreateWithoutComponenteInput, Prisma.ConcluiuUncheckedCreateWithoutComponenteInput>;
};
export type ConcluiuUpdateWithWhereUniqueWithoutComponenteInput = {
    where: Prisma.ConcluiuWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConcluiuUpdateWithoutComponenteInput, Prisma.ConcluiuUncheckedUpdateWithoutComponenteInput>;
};
export type ConcluiuUpdateManyWithWhereWithoutComponenteInput = {
    where: Prisma.ConcluiuScalarWhereInput;
    data: Prisma.XOR<Prisma.ConcluiuUpdateManyMutationInput, Prisma.ConcluiuUncheckedUpdateManyWithoutComponenteInput>;
};
export type ConcluiuCreateManyAlunoInput = {
    idComponente: bigint | number;
    semestreConclusao: string;
};
export type ConcluiuUpdateWithoutAlunoInput = {
    semestreConclusao?: Prisma.StringFieldUpdateOperationsInput | string;
    componente?: Prisma.ComponenteUpdateOneRequiredWithoutConcluidosNestedInput;
};
export type ConcluiuUncheckedUpdateWithoutAlunoInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    semestreConclusao?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConcluiuUncheckedUpdateManyWithoutAlunoInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    semestreConclusao?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConcluiuCreateManyComponenteInput = {
    matricula: string;
    semestreConclusao: string;
};
export type ConcluiuUpdateWithoutComponenteInput = {
    semestreConclusao?: Prisma.StringFieldUpdateOperationsInput | string;
    aluno?: Prisma.AlunoUpdateOneRequiredWithoutConcluidosNestedInput;
};
export type ConcluiuUncheckedUpdateWithoutComponenteInput = {
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    semestreConclusao?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConcluiuUncheckedUpdateManyWithoutComponenteInput = {
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    semestreConclusao?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConcluiuSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    matricula?: boolean;
    idComponente?: boolean;
    semestreConclusao?: boolean;
    aluno?: boolean | Prisma.AlunoDefaultArgs<ExtArgs>;
    componente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["concluiu"]>;
export type ConcluiuSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    matricula?: boolean;
    idComponente?: boolean;
    semestreConclusao?: boolean;
    aluno?: boolean | Prisma.AlunoDefaultArgs<ExtArgs>;
    componente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["concluiu"]>;
export type ConcluiuSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    matricula?: boolean;
    idComponente?: boolean;
    semestreConclusao?: boolean;
    aluno?: boolean | Prisma.AlunoDefaultArgs<ExtArgs>;
    componente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["concluiu"]>;
export type ConcluiuSelectScalar = {
    matricula?: boolean;
    idComponente?: boolean;
    semestreConclusao?: boolean;
};
export type ConcluiuOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"matricula" | "idComponente" | "semestreConclusao", ExtArgs["result"]["concluiu"]>;
export type ConcluiuInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    aluno?: boolean | Prisma.AlunoDefaultArgs<ExtArgs>;
    componente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
};
export type ConcluiuIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    aluno?: boolean | Prisma.AlunoDefaultArgs<ExtArgs>;
    componente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
};
export type ConcluiuIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    aluno?: boolean | Prisma.AlunoDefaultArgs<ExtArgs>;
    componente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
};
export type $ConcluiuPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Concluiu";
    objects: {
        aluno: Prisma.$AlunoPayload<ExtArgs>;
        componente: Prisma.$ComponentePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        matricula: string;
        idComponente: bigint;
        semestreConclusao: string;
    }, ExtArgs["result"]["concluiu"]>;
    composites: {};
};
export type ConcluiuGetPayload<S extends boolean | null | undefined | ConcluiuDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConcluiuPayload, S>;
export type ConcluiuCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ConcluiuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConcluiuCountAggregateInputType | true;
};
export interface ConcluiuDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Concluiu'];
        meta: {
            name: 'Concluiu';
        };
    };
    findUnique<T extends ConcluiuFindUniqueArgs>(args: Prisma.SelectSubset<T, ConcluiuFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ConcluiuClient<runtime.Types.Result.GetResult<Prisma.$ConcluiuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ConcluiuFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ConcluiuFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConcluiuClient<runtime.Types.Result.GetResult<Prisma.$ConcluiuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ConcluiuFindFirstArgs>(args?: Prisma.SelectSubset<T, ConcluiuFindFirstArgs<ExtArgs>>): Prisma.Prisma__ConcluiuClient<runtime.Types.Result.GetResult<Prisma.$ConcluiuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ConcluiuFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ConcluiuFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConcluiuClient<runtime.Types.Result.GetResult<Prisma.$ConcluiuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ConcluiuFindManyArgs>(args?: Prisma.SelectSubset<T, ConcluiuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConcluiuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ConcluiuCreateArgs>(args: Prisma.SelectSubset<T, ConcluiuCreateArgs<ExtArgs>>): Prisma.Prisma__ConcluiuClient<runtime.Types.Result.GetResult<Prisma.$ConcluiuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ConcluiuCreateManyArgs>(args?: Prisma.SelectSubset<T, ConcluiuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ConcluiuCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ConcluiuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConcluiuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ConcluiuDeleteArgs>(args: Prisma.SelectSubset<T, ConcluiuDeleteArgs<ExtArgs>>): Prisma.Prisma__ConcluiuClient<runtime.Types.Result.GetResult<Prisma.$ConcluiuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ConcluiuUpdateArgs>(args: Prisma.SelectSubset<T, ConcluiuUpdateArgs<ExtArgs>>): Prisma.Prisma__ConcluiuClient<runtime.Types.Result.GetResult<Prisma.$ConcluiuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ConcluiuDeleteManyArgs>(args?: Prisma.SelectSubset<T, ConcluiuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ConcluiuUpdateManyArgs>(args: Prisma.SelectSubset<T, ConcluiuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ConcluiuUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ConcluiuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConcluiuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ConcluiuUpsertArgs>(args: Prisma.SelectSubset<T, ConcluiuUpsertArgs<ExtArgs>>): Prisma.Prisma__ConcluiuClient<runtime.Types.Result.GetResult<Prisma.$ConcluiuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ConcluiuCountArgs>(args?: Prisma.Subset<T, ConcluiuCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConcluiuCountAggregateOutputType> : number>;
    aggregate<T extends ConcluiuAggregateArgs>(args: Prisma.Subset<T, ConcluiuAggregateArgs>): Prisma.PrismaPromise<GetConcluiuAggregateType<T>>;
    groupBy<T extends ConcluiuGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ConcluiuGroupByArgs['orderBy'];
    } : {
        orderBy?: ConcluiuGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ConcluiuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConcluiuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ConcluiuFieldRefs;
}
export interface Prisma__ConcluiuClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    aluno<T extends Prisma.AlunoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AlunoDefaultArgs<ExtArgs>>): Prisma.Prisma__AlunoClient<runtime.Types.Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    componente<T extends Prisma.ComponenteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ComponenteDefaultArgs<ExtArgs>>): Prisma.Prisma__ComponenteClient<runtime.Types.Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ConcluiuFieldRefs {
    readonly matricula: Prisma.FieldRef<"Concluiu", 'String'>;
    readonly idComponente: Prisma.FieldRef<"Concluiu", 'BigInt'>;
    readonly semestreConclusao: Prisma.FieldRef<"Concluiu", 'String'>;
}
export type ConcluiuFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConcluiuSelect<ExtArgs> | null;
    omit?: Prisma.ConcluiuOmit<ExtArgs> | null;
    include?: Prisma.ConcluiuInclude<ExtArgs> | null;
    where: Prisma.ConcluiuWhereUniqueInput;
};
export type ConcluiuFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConcluiuSelect<ExtArgs> | null;
    omit?: Prisma.ConcluiuOmit<ExtArgs> | null;
    include?: Prisma.ConcluiuInclude<ExtArgs> | null;
    where: Prisma.ConcluiuWhereUniqueInput;
};
export type ConcluiuFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ConcluiuFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ConcluiuFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ConcluiuCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConcluiuSelect<ExtArgs> | null;
    omit?: Prisma.ConcluiuOmit<ExtArgs> | null;
    include?: Prisma.ConcluiuInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConcluiuCreateInput, Prisma.ConcluiuUncheckedCreateInput>;
};
export type ConcluiuCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ConcluiuCreateManyInput | Prisma.ConcluiuCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ConcluiuCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConcluiuSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConcluiuOmit<ExtArgs> | null;
    data: Prisma.ConcluiuCreateManyInput | Prisma.ConcluiuCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ConcluiuIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ConcluiuUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConcluiuSelect<ExtArgs> | null;
    omit?: Prisma.ConcluiuOmit<ExtArgs> | null;
    include?: Prisma.ConcluiuInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConcluiuUpdateInput, Prisma.ConcluiuUncheckedUpdateInput>;
    where: Prisma.ConcluiuWhereUniqueInput;
};
export type ConcluiuUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ConcluiuUpdateManyMutationInput, Prisma.ConcluiuUncheckedUpdateManyInput>;
    where?: Prisma.ConcluiuWhereInput;
    limit?: number;
};
export type ConcluiuUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConcluiuSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConcluiuOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConcluiuUpdateManyMutationInput, Prisma.ConcluiuUncheckedUpdateManyInput>;
    where?: Prisma.ConcluiuWhereInput;
    limit?: number;
    include?: Prisma.ConcluiuIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ConcluiuUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConcluiuSelect<ExtArgs> | null;
    omit?: Prisma.ConcluiuOmit<ExtArgs> | null;
    include?: Prisma.ConcluiuInclude<ExtArgs> | null;
    where: Prisma.ConcluiuWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConcluiuCreateInput, Prisma.ConcluiuUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ConcluiuUpdateInput, Prisma.ConcluiuUncheckedUpdateInput>;
};
export type ConcluiuDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConcluiuSelect<ExtArgs> | null;
    omit?: Prisma.ConcluiuOmit<ExtArgs> | null;
    include?: Prisma.ConcluiuInclude<ExtArgs> | null;
    where: Prisma.ConcluiuWhereUniqueInput;
};
export type ConcluiuDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConcluiuWhereInput;
    limit?: number;
};
export type ConcluiuDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConcluiuSelect<ExtArgs> | null;
    omit?: Prisma.ConcluiuOmit<ExtArgs> | null;
    include?: Prisma.ConcluiuInclude<ExtArgs> | null;
};
