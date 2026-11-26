import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PreRequisitoModel = runtime.Types.Result.DefaultSelection<Prisma.$PreRequisitoPayload>;
export type AggregatePreRequisito = {
    _count: PreRequisitoCountAggregateOutputType | null;
    _avg: PreRequisitoAvgAggregateOutputType | null;
    _sum: PreRequisitoSumAggregateOutputType | null;
    _min: PreRequisitoMinAggregateOutputType | null;
    _max: PreRequisitoMaxAggregateOutputType | null;
};
export type PreRequisitoAvgAggregateOutputType = {
    idComponente: number | null;
    idExigido: number | null;
    grupoAlternativa: number | null;
};
export type PreRequisitoSumAggregateOutputType = {
    idComponente: bigint | null;
    idExigido: bigint | null;
    grupoAlternativa: number | null;
};
export type PreRequisitoMinAggregateOutputType = {
    idComponente: bigint | null;
    idExigido: bigint | null;
    grupoAlternativa: number | null;
};
export type PreRequisitoMaxAggregateOutputType = {
    idComponente: bigint | null;
    idExigido: bigint | null;
    grupoAlternativa: number | null;
};
export type PreRequisitoCountAggregateOutputType = {
    idComponente: number;
    idExigido: number;
    grupoAlternativa: number;
    _all: number;
};
export type PreRequisitoAvgAggregateInputType = {
    idComponente?: true;
    idExigido?: true;
    grupoAlternativa?: true;
};
export type PreRequisitoSumAggregateInputType = {
    idComponente?: true;
    idExigido?: true;
    grupoAlternativa?: true;
};
export type PreRequisitoMinAggregateInputType = {
    idComponente?: true;
    idExigido?: true;
    grupoAlternativa?: true;
};
export type PreRequisitoMaxAggregateInputType = {
    idComponente?: true;
    idExigido?: true;
    grupoAlternativa?: true;
};
export type PreRequisitoCountAggregateInputType = {
    idComponente?: true;
    idExigido?: true;
    grupoAlternativa?: true;
    _all?: true;
};
export type PreRequisitoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PreRequisitoWhereInput;
    orderBy?: Prisma.PreRequisitoOrderByWithRelationInput | Prisma.PreRequisitoOrderByWithRelationInput[];
    cursor?: Prisma.PreRequisitoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PreRequisitoCountAggregateInputType;
    _avg?: PreRequisitoAvgAggregateInputType;
    _sum?: PreRequisitoSumAggregateInputType;
    _min?: PreRequisitoMinAggregateInputType;
    _max?: PreRequisitoMaxAggregateInputType;
};
export type GetPreRequisitoAggregateType<T extends PreRequisitoAggregateArgs> = {
    [P in keyof T & keyof AggregatePreRequisito]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePreRequisito[P]> : Prisma.GetScalarType<T[P], AggregatePreRequisito[P]>;
};
export type PreRequisitoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PreRequisitoWhereInput;
    orderBy?: Prisma.PreRequisitoOrderByWithAggregationInput | Prisma.PreRequisitoOrderByWithAggregationInput[];
    by: Prisma.PreRequisitoScalarFieldEnum[] | Prisma.PreRequisitoScalarFieldEnum;
    having?: Prisma.PreRequisitoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PreRequisitoCountAggregateInputType | true;
    _avg?: PreRequisitoAvgAggregateInputType;
    _sum?: PreRequisitoSumAggregateInputType;
    _min?: PreRequisitoMinAggregateInputType;
    _max?: PreRequisitoMaxAggregateInputType;
};
export type PreRequisitoGroupByOutputType = {
    idComponente: bigint;
    idExigido: bigint;
    grupoAlternativa: number;
    _count: PreRequisitoCountAggregateOutputType | null;
    _avg: PreRequisitoAvgAggregateOutputType | null;
    _sum: PreRequisitoSumAggregateOutputType | null;
    _min: PreRequisitoMinAggregateOutputType | null;
    _max: PreRequisitoMaxAggregateOutputType | null;
};
export type GetPreRequisitoGroupByPayload<T extends PreRequisitoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PreRequisitoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PreRequisitoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PreRequisitoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PreRequisitoGroupByOutputType[P]>;
}>>;
export type PreRequisitoWhereInput = {
    AND?: Prisma.PreRequisitoWhereInput | Prisma.PreRequisitoWhereInput[];
    OR?: Prisma.PreRequisitoWhereInput[];
    NOT?: Prisma.PreRequisitoWhereInput | Prisma.PreRequisitoWhereInput[];
    idComponente?: Prisma.BigIntFilter<"PreRequisito"> | bigint | number;
    idExigido?: Prisma.BigIntFilter<"PreRequisito"> | bigint | number;
    grupoAlternativa?: Prisma.IntFilter<"PreRequisito"> | number;
    componente?: Prisma.XOR<Prisma.ComponenteScalarRelationFilter, Prisma.ComponenteWhereInput>;
    exigido?: Prisma.XOR<Prisma.ComponenteScalarRelationFilter, Prisma.ComponenteWhereInput>;
};
export type PreRequisitoOrderByWithRelationInput = {
    idComponente?: Prisma.SortOrder;
    idExigido?: Prisma.SortOrder;
    grupoAlternativa?: Prisma.SortOrder;
    componente?: Prisma.ComponenteOrderByWithRelationInput;
    exigido?: Prisma.ComponenteOrderByWithRelationInput;
};
export type PreRequisitoWhereUniqueInput = Prisma.AtLeast<{
    idComponente_idExigido_grupoAlternativa?: Prisma.PreRequisitoIdComponenteIdExigidoGrupoAlternativaCompoundUniqueInput;
    AND?: Prisma.PreRequisitoWhereInput | Prisma.PreRequisitoWhereInput[];
    OR?: Prisma.PreRequisitoWhereInput[];
    NOT?: Prisma.PreRequisitoWhereInput | Prisma.PreRequisitoWhereInput[];
    idComponente?: Prisma.BigIntFilter<"PreRequisito"> | bigint | number;
    idExigido?: Prisma.BigIntFilter<"PreRequisito"> | bigint | number;
    grupoAlternativa?: Prisma.IntFilter<"PreRequisito"> | number;
    componente?: Prisma.XOR<Prisma.ComponenteScalarRelationFilter, Prisma.ComponenteWhereInput>;
    exigido?: Prisma.XOR<Prisma.ComponenteScalarRelationFilter, Prisma.ComponenteWhereInput>;
}, "idComponente_idExigido_grupoAlternativa">;
export type PreRequisitoOrderByWithAggregationInput = {
    idComponente?: Prisma.SortOrder;
    idExigido?: Prisma.SortOrder;
    grupoAlternativa?: Prisma.SortOrder;
    _count?: Prisma.PreRequisitoCountOrderByAggregateInput;
    _avg?: Prisma.PreRequisitoAvgOrderByAggregateInput;
    _max?: Prisma.PreRequisitoMaxOrderByAggregateInput;
    _min?: Prisma.PreRequisitoMinOrderByAggregateInput;
    _sum?: Prisma.PreRequisitoSumOrderByAggregateInput;
};
export type PreRequisitoScalarWhereWithAggregatesInput = {
    AND?: Prisma.PreRequisitoScalarWhereWithAggregatesInput | Prisma.PreRequisitoScalarWhereWithAggregatesInput[];
    OR?: Prisma.PreRequisitoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PreRequisitoScalarWhereWithAggregatesInput | Prisma.PreRequisitoScalarWhereWithAggregatesInput[];
    idComponente?: Prisma.BigIntWithAggregatesFilter<"PreRequisito"> | bigint | number;
    idExigido?: Prisma.BigIntWithAggregatesFilter<"PreRequisito"> | bigint | number;
    grupoAlternativa?: Prisma.IntWithAggregatesFilter<"PreRequisito"> | number;
};
export type PreRequisitoCreateInput = {
    grupoAlternativa: number;
    componente: Prisma.ComponenteCreateNestedOneWithoutPreRequisitosInput;
    exigido: Prisma.ComponenteCreateNestedOneWithoutExigidoPorInput;
};
export type PreRequisitoUncheckedCreateInput = {
    idComponente: bigint | number;
    idExigido: bigint | number;
    grupoAlternativa: number;
};
export type PreRequisitoUpdateInput = {
    grupoAlternativa?: Prisma.IntFieldUpdateOperationsInput | number;
    componente?: Prisma.ComponenteUpdateOneRequiredWithoutPreRequisitosNestedInput;
    exigido?: Prisma.ComponenteUpdateOneRequiredWithoutExigidoPorNestedInput;
};
export type PreRequisitoUncheckedUpdateInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    idExigido?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    grupoAlternativa?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PreRequisitoCreateManyInput = {
    idComponente: bigint | number;
    idExigido: bigint | number;
    grupoAlternativa: number;
};
export type PreRequisitoUpdateManyMutationInput = {
    grupoAlternativa?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PreRequisitoUncheckedUpdateManyInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    idExigido?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    grupoAlternativa?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PreRequisitoListRelationFilter = {
    every?: Prisma.PreRequisitoWhereInput;
    some?: Prisma.PreRequisitoWhereInput;
    none?: Prisma.PreRequisitoWhereInput;
};
export type PreRequisitoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PreRequisitoIdComponenteIdExigidoGrupoAlternativaCompoundUniqueInput = {
    idComponente: bigint | number;
    idExigido: bigint | number;
    grupoAlternativa: number;
};
export type PreRequisitoCountOrderByAggregateInput = {
    idComponente?: Prisma.SortOrder;
    idExigido?: Prisma.SortOrder;
    grupoAlternativa?: Prisma.SortOrder;
};
export type PreRequisitoAvgOrderByAggregateInput = {
    idComponente?: Prisma.SortOrder;
    idExigido?: Prisma.SortOrder;
    grupoAlternativa?: Prisma.SortOrder;
};
export type PreRequisitoMaxOrderByAggregateInput = {
    idComponente?: Prisma.SortOrder;
    idExigido?: Prisma.SortOrder;
    grupoAlternativa?: Prisma.SortOrder;
};
export type PreRequisitoMinOrderByAggregateInput = {
    idComponente?: Prisma.SortOrder;
    idExigido?: Prisma.SortOrder;
    grupoAlternativa?: Prisma.SortOrder;
};
export type PreRequisitoSumOrderByAggregateInput = {
    idComponente?: Prisma.SortOrder;
    idExigido?: Prisma.SortOrder;
    grupoAlternativa?: Prisma.SortOrder;
};
export type PreRequisitoCreateNestedManyWithoutComponenteInput = {
    create?: Prisma.XOR<Prisma.PreRequisitoCreateWithoutComponenteInput, Prisma.PreRequisitoUncheckedCreateWithoutComponenteInput> | Prisma.PreRequisitoCreateWithoutComponenteInput[] | Prisma.PreRequisitoUncheckedCreateWithoutComponenteInput[];
    connectOrCreate?: Prisma.PreRequisitoCreateOrConnectWithoutComponenteInput | Prisma.PreRequisitoCreateOrConnectWithoutComponenteInput[];
    createMany?: Prisma.PreRequisitoCreateManyComponenteInputEnvelope;
    connect?: Prisma.PreRequisitoWhereUniqueInput | Prisma.PreRequisitoWhereUniqueInput[];
};
export type PreRequisitoCreateNestedManyWithoutExigidoInput = {
    create?: Prisma.XOR<Prisma.PreRequisitoCreateWithoutExigidoInput, Prisma.PreRequisitoUncheckedCreateWithoutExigidoInput> | Prisma.PreRequisitoCreateWithoutExigidoInput[] | Prisma.PreRequisitoUncheckedCreateWithoutExigidoInput[];
    connectOrCreate?: Prisma.PreRequisitoCreateOrConnectWithoutExigidoInput | Prisma.PreRequisitoCreateOrConnectWithoutExigidoInput[];
    createMany?: Prisma.PreRequisitoCreateManyExigidoInputEnvelope;
    connect?: Prisma.PreRequisitoWhereUniqueInput | Prisma.PreRequisitoWhereUniqueInput[];
};
export type PreRequisitoUncheckedCreateNestedManyWithoutComponenteInput = {
    create?: Prisma.XOR<Prisma.PreRequisitoCreateWithoutComponenteInput, Prisma.PreRequisitoUncheckedCreateWithoutComponenteInput> | Prisma.PreRequisitoCreateWithoutComponenteInput[] | Prisma.PreRequisitoUncheckedCreateWithoutComponenteInput[];
    connectOrCreate?: Prisma.PreRequisitoCreateOrConnectWithoutComponenteInput | Prisma.PreRequisitoCreateOrConnectWithoutComponenteInput[];
    createMany?: Prisma.PreRequisitoCreateManyComponenteInputEnvelope;
    connect?: Prisma.PreRequisitoWhereUniqueInput | Prisma.PreRequisitoWhereUniqueInput[];
};
export type PreRequisitoUncheckedCreateNestedManyWithoutExigidoInput = {
    create?: Prisma.XOR<Prisma.PreRequisitoCreateWithoutExigidoInput, Prisma.PreRequisitoUncheckedCreateWithoutExigidoInput> | Prisma.PreRequisitoCreateWithoutExigidoInput[] | Prisma.PreRequisitoUncheckedCreateWithoutExigidoInput[];
    connectOrCreate?: Prisma.PreRequisitoCreateOrConnectWithoutExigidoInput | Prisma.PreRequisitoCreateOrConnectWithoutExigidoInput[];
    createMany?: Prisma.PreRequisitoCreateManyExigidoInputEnvelope;
    connect?: Prisma.PreRequisitoWhereUniqueInput | Prisma.PreRequisitoWhereUniqueInput[];
};
export type PreRequisitoUpdateManyWithoutComponenteNestedInput = {
    create?: Prisma.XOR<Prisma.PreRequisitoCreateWithoutComponenteInput, Prisma.PreRequisitoUncheckedCreateWithoutComponenteInput> | Prisma.PreRequisitoCreateWithoutComponenteInput[] | Prisma.PreRequisitoUncheckedCreateWithoutComponenteInput[];
    connectOrCreate?: Prisma.PreRequisitoCreateOrConnectWithoutComponenteInput | Prisma.PreRequisitoCreateOrConnectWithoutComponenteInput[];
    upsert?: Prisma.PreRequisitoUpsertWithWhereUniqueWithoutComponenteInput | Prisma.PreRequisitoUpsertWithWhereUniqueWithoutComponenteInput[];
    createMany?: Prisma.PreRequisitoCreateManyComponenteInputEnvelope;
    set?: Prisma.PreRequisitoWhereUniqueInput | Prisma.PreRequisitoWhereUniqueInput[];
    disconnect?: Prisma.PreRequisitoWhereUniqueInput | Prisma.PreRequisitoWhereUniqueInput[];
    delete?: Prisma.PreRequisitoWhereUniqueInput | Prisma.PreRequisitoWhereUniqueInput[];
    connect?: Prisma.PreRequisitoWhereUniqueInput | Prisma.PreRequisitoWhereUniqueInput[];
    update?: Prisma.PreRequisitoUpdateWithWhereUniqueWithoutComponenteInput | Prisma.PreRequisitoUpdateWithWhereUniqueWithoutComponenteInput[];
    updateMany?: Prisma.PreRequisitoUpdateManyWithWhereWithoutComponenteInput | Prisma.PreRequisitoUpdateManyWithWhereWithoutComponenteInput[];
    deleteMany?: Prisma.PreRequisitoScalarWhereInput | Prisma.PreRequisitoScalarWhereInput[];
};
export type PreRequisitoUpdateManyWithoutExigidoNestedInput = {
    create?: Prisma.XOR<Prisma.PreRequisitoCreateWithoutExigidoInput, Prisma.PreRequisitoUncheckedCreateWithoutExigidoInput> | Prisma.PreRequisitoCreateWithoutExigidoInput[] | Prisma.PreRequisitoUncheckedCreateWithoutExigidoInput[];
    connectOrCreate?: Prisma.PreRequisitoCreateOrConnectWithoutExigidoInput | Prisma.PreRequisitoCreateOrConnectWithoutExigidoInput[];
    upsert?: Prisma.PreRequisitoUpsertWithWhereUniqueWithoutExigidoInput | Prisma.PreRequisitoUpsertWithWhereUniqueWithoutExigidoInput[];
    createMany?: Prisma.PreRequisitoCreateManyExigidoInputEnvelope;
    set?: Prisma.PreRequisitoWhereUniqueInput | Prisma.PreRequisitoWhereUniqueInput[];
    disconnect?: Prisma.PreRequisitoWhereUniqueInput | Prisma.PreRequisitoWhereUniqueInput[];
    delete?: Prisma.PreRequisitoWhereUniqueInput | Prisma.PreRequisitoWhereUniqueInput[];
    connect?: Prisma.PreRequisitoWhereUniqueInput | Prisma.PreRequisitoWhereUniqueInput[];
    update?: Prisma.PreRequisitoUpdateWithWhereUniqueWithoutExigidoInput | Prisma.PreRequisitoUpdateWithWhereUniqueWithoutExigidoInput[];
    updateMany?: Prisma.PreRequisitoUpdateManyWithWhereWithoutExigidoInput | Prisma.PreRequisitoUpdateManyWithWhereWithoutExigidoInput[];
    deleteMany?: Prisma.PreRequisitoScalarWhereInput | Prisma.PreRequisitoScalarWhereInput[];
};
export type PreRequisitoUncheckedUpdateManyWithoutComponenteNestedInput = {
    create?: Prisma.XOR<Prisma.PreRequisitoCreateWithoutComponenteInput, Prisma.PreRequisitoUncheckedCreateWithoutComponenteInput> | Prisma.PreRequisitoCreateWithoutComponenteInput[] | Prisma.PreRequisitoUncheckedCreateWithoutComponenteInput[];
    connectOrCreate?: Prisma.PreRequisitoCreateOrConnectWithoutComponenteInput | Prisma.PreRequisitoCreateOrConnectWithoutComponenteInput[];
    upsert?: Prisma.PreRequisitoUpsertWithWhereUniqueWithoutComponenteInput | Prisma.PreRequisitoUpsertWithWhereUniqueWithoutComponenteInput[];
    createMany?: Prisma.PreRequisitoCreateManyComponenteInputEnvelope;
    set?: Prisma.PreRequisitoWhereUniqueInput | Prisma.PreRequisitoWhereUniqueInput[];
    disconnect?: Prisma.PreRequisitoWhereUniqueInput | Prisma.PreRequisitoWhereUniqueInput[];
    delete?: Prisma.PreRequisitoWhereUniqueInput | Prisma.PreRequisitoWhereUniqueInput[];
    connect?: Prisma.PreRequisitoWhereUniqueInput | Prisma.PreRequisitoWhereUniqueInput[];
    update?: Prisma.PreRequisitoUpdateWithWhereUniqueWithoutComponenteInput | Prisma.PreRequisitoUpdateWithWhereUniqueWithoutComponenteInput[];
    updateMany?: Prisma.PreRequisitoUpdateManyWithWhereWithoutComponenteInput | Prisma.PreRequisitoUpdateManyWithWhereWithoutComponenteInput[];
    deleteMany?: Prisma.PreRequisitoScalarWhereInput | Prisma.PreRequisitoScalarWhereInput[];
};
export type PreRequisitoUncheckedUpdateManyWithoutExigidoNestedInput = {
    create?: Prisma.XOR<Prisma.PreRequisitoCreateWithoutExigidoInput, Prisma.PreRequisitoUncheckedCreateWithoutExigidoInput> | Prisma.PreRequisitoCreateWithoutExigidoInput[] | Prisma.PreRequisitoUncheckedCreateWithoutExigidoInput[];
    connectOrCreate?: Prisma.PreRequisitoCreateOrConnectWithoutExigidoInput | Prisma.PreRequisitoCreateOrConnectWithoutExigidoInput[];
    upsert?: Prisma.PreRequisitoUpsertWithWhereUniqueWithoutExigidoInput | Prisma.PreRequisitoUpsertWithWhereUniqueWithoutExigidoInput[];
    createMany?: Prisma.PreRequisitoCreateManyExigidoInputEnvelope;
    set?: Prisma.PreRequisitoWhereUniqueInput | Prisma.PreRequisitoWhereUniqueInput[];
    disconnect?: Prisma.PreRequisitoWhereUniqueInput | Prisma.PreRequisitoWhereUniqueInput[];
    delete?: Prisma.PreRequisitoWhereUniqueInput | Prisma.PreRequisitoWhereUniqueInput[];
    connect?: Prisma.PreRequisitoWhereUniqueInput | Prisma.PreRequisitoWhereUniqueInput[];
    update?: Prisma.PreRequisitoUpdateWithWhereUniqueWithoutExigidoInput | Prisma.PreRequisitoUpdateWithWhereUniqueWithoutExigidoInput[];
    updateMany?: Prisma.PreRequisitoUpdateManyWithWhereWithoutExigidoInput | Prisma.PreRequisitoUpdateManyWithWhereWithoutExigidoInput[];
    deleteMany?: Prisma.PreRequisitoScalarWhereInput | Prisma.PreRequisitoScalarWhereInput[];
};
export type PreRequisitoCreateWithoutComponenteInput = {
    grupoAlternativa: number;
    exigido: Prisma.ComponenteCreateNestedOneWithoutExigidoPorInput;
};
export type PreRequisitoUncheckedCreateWithoutComponenteInput = {
    idExigido: bigint | number;
    grupoAlternativa: number;
};
export type PreRequisitoCreateOrConnectWithoutComponenteInput = {
    where: Prisma.PreRequisitoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PreRequisitoCreateWithoutComponenteInput, Prisma.PreRequisitoUncheckedCreateWithoutComponenteInput>;
};
export type PreRequisitoCreateManyComponenteInputEnvelope = {
    data: Prisma.PreRequisitoCreateManyComponenteInput | Prisma.PreRequisitoCreateManyComponenteInput[];
    skipDuplicates?: boolean;
};
export type PreRequisitoCreateWithoutExigidoInput = {
    grupoAlternativa: number;
    componente: Prisma.ComponenteCreateNestedOneWithoutPreRequisitosInput;
};
export type PreRequisitoUncheckedCreateWithoutExigidoInput = {
    idComponente: bigint | number;
    grupoAlternativa: number;
};
export type PreRequisitoCreateOrConnectWithoutExigidoInput = {
    where: Prisma.PreRequisitoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PreRequisitoCreateWithoutExigidoInput, Prisma.PreRequisitoUncheckedCreateWithoutExigidoInput>;
};
export type PreRequisitoCreateManyExigidoInputEnvelope = {
    data: Prisma.PreRequisitoCreateManyExigidoInput | Prisma.PreRequisitoCreateManyExigidoInput[];
    skipDuplicates?: boolean;
};
export type PreRequisitoUpsertWithWhereUniqueWithoutComponenteInput = {
    where: Prisma.PreRequisitoWhereUniqueInput;
    update: Prisma.XOR<Prisma.PreRequisitoUpdateWithoutComponenteInput, Prisma.PreRequisitoUncheckedUpdateWithoutComponenteInput>;
    create: Prisma.XOR<Prisma.PreRequisitoCreateWithoutComponenteInput, Prisma.PreRequisitoUncheckedCreateWithoutComponenteInput>;
};
export type PreRequisitoUpdateWithWhereUniqueWithoutComponenteInput = {
    where: Prisma.PreRequisitoWhereUniqueInput;
    data: Prisma.XOR<Prisma.PreRequisitoUpdateWithoutComponenteInput, Prisma.PreRequisitoUncheckedUpdateWithoutComponenteInput>;
};
export type PreRequisitoUpdateManyWithWhereWithoutComponenteInput = {
    where: Prisma.PreRequisitoScalarWhereInput;
    data: Prisma.XOR<Prisma.PreRequisitoUpdateManyMutationInput, Prisma.PreRequisitoUncheckedUpdateManyWithoutComponenteInput>;
};
export type PreRequisitoScalarWhereInput = {
    AND?: Prisma.PreRequisitoScalarWhereInput | Prisma.PreRequisitoScalarWhereInput[];
    OR?: Prisma.PreRequisitoScalarWhereInput[];
    NOT?: Prisma.PreRequisitoScalarWhereInput | Prisma.PreRequisitoScalarWhereInput[];
    idComponente?: Prisma.BigIntFilter<"PreRequisito"> | bigint | number;
    idExigido?: Prisma.BigIntFilter<"PreRequisito"> | bigint | number;
    grupoAlternativa?: Prisma.IntFilter<"PreRequisito"> | number;
};
export type PreRequisitoUpsertWithWhereUniqueWithoutExigidoInput = {
    where: Prisma.PreRequisitoWhereUniqueInput;
    update: Prisma.XOR<Prisma.PreRequisitoUpdateWithoutExigidoInput, Prisma.PreRequisitoUncheckedUpdateWithoutExigidoInput>;
    create: Prisma.XOR<Prisma.PreRequisitoCreateWithoutExigidoInput, Prisma.PreRequisitoUncheckedCreateWithoutExigidoInput>;
};
export type PreRequisitoUpdateWithWhereUniqueWithoutExigidoInput = {
    where: Prisma.PreRequisitoWhereUniqueInput;
    data: Prisma.XOR<Prisma.PreRequisitoUpdateWithoutExigidoInput, Prisma.PreRequisitoUncheckedUpdateWithoutExigidoInput>;
};
export type PreRequisitoUpdateManyWithWhereWithoutExigidoInput = {
    where: Prisma.PreRequisitoScalarWhereInput;
    data: Prisma.XOR<Prisma.PreRequisitoUpdateManyMutationInput, Prisma.PreRequisitoUncheckedUpdateManyWithoutExigidoInput>;
};
export type PreRequisitoCreateManyComponenteInput = {
    idExigido: bigint | number;
    grupoAlternativa: number;
};
export type PreRequisitoCreateManyExigidoInput = {
    idComponente: bigint | number;
    grupoAlternativa: number;
};
export type PreRequisitoUpdateWithoutComponenteInput = {
    grupoAlternativa?: Prisma.IntFieldUpdateOperationsInput | number;
    exigido?: Prisma.ComponenteUpdateOneRequiredWithoutExigidoPorNestedInput;
};
export type PreRequisitoUncheckedUpdateWithoutComponenteInput = {
    idExigido?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    grupoAlternativa?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PreRequisitoUncheckedUpdateManyWithoutComponenteInput = {
    idExigido?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    grupoAlternativa?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PreRequisitoUpdateWithoutExigidoInput = {
    grupoAlternativa?: Prisma.IntFieldUpdateOperationsInput | number;
    componente?: Prisma.ComponenteUpdateOneRequiredWithoutPreRequisitosNestedInput;
};
export type PreRequisitoUncheckedUpdateWithoutExigidoInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    grupoAlternativa?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PreRequisitoUncheckedUpdateManyWithoutExigidoInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    grupoAlternativa?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PreRequisitoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idComponente?: boolean;
    idExigido?: boolean;
    grupoAlternativa?: boolean;
    componente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
    exigido?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["preRequisito"]>;
export type PreRequisitoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idComponente?: boolean;
    idExigido?: boolean;
    grupoAlternativa?: boolean;
    componente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
    exigido?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["preRequisito"]>;
export type PreRequisitoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idComponente?: boolean;
    idExigido?: boolean;
    grupoAlternativa?: boolean;
    componente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
    exigido?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["preRequisito"]>;
export type PreRequisitoSelectScalar = {
    idComponente?: boolean;
    idExigido?: boolean;
    grupoAlternativa?: boolean;
};
export type PreRequisitoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"idComponente" | "idExigido" | "grupoAlternativa", ExtArgs["result"]["preRequisito"]>;
export type PreRequisitoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    componente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
    exigido?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
};
export type PreRequisitoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    componente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
    exigido?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
};
export type PreRequisitoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    componente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
    exigido?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
};
export type $PreRequisitoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PreRequisito";
    objects: {
        componente: Prisma.$ComponentePayload<ExtArgs>;
        exigido: Prisma.$ComponentePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        idComponente: bigint;
        idExigido: bigint;
        grupoAlternativa: number;
    }, ExtArgs["result"]["preRequisito"]>;
    composites: {};
};
export type PreRequisitoGetPayload<S extends boolean | null | undefined | PreRequisitoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PreRequisitoPayload, S>;
export type PreRequisitoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PreRequisitoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PreRequisitoCountAggregateInputType | true;
};
export interface PreRequisitoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PreRequisito'];
        meta: {
            name: 'PreRequisito';
        };
    };
    findUnique<T extends PreRequisitoFindUniqueArgs>(args: Prisma.SelectSubset<T, PreRequisitoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PreRequisitoClient<runtime.Types.Result.GetResult<Prisma.$PreRequisitoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PreRequisitoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PreRequisitoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PreRequisitoClient<runtime.Types.Result.GetResult<Prisma.$PreRequisitoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PreRequisitoFindFirstArgs>(args?: Prisma.SelectSubset<T, PreRequisitoFindFirstArgs<ExtArgs>>): Prisma.Prisma__PreRequisitoClient<runtime.Types.Result.GetResult<Prisma.$PreRequisitoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PreRequisitoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PreRequisitoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PreRequisitoClient<runtime.Types.Result.GetResult<Prisma.$PreRequisitoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PreRequisitoFindManyArgs>(args?: Prisma.SelectSubset<T, PreRequisitoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PreRequisitoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PreRequisitoCreateArgs>(args: Prisma.SelectSubset<T, PreRequisitoCreateArgs<ExtArgs>>): Prisma.Prisma__PreRequisitoClient<runtime.Types.Result.GetResult<Prisma.$PreRequisitoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PreRequisitoCreateManyArgs>(args?: Prisma.SelectSubset<T, PreRequisitoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PreRequisitoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PreRequisitoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PreRequisitoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PreRequisitoDeleteArgs>(args: Prisma.SelectSubset<T, PreRequisitoDeleteArgs<ExtArgs>>): Prisma.Prisma__PreRequisitoClient<runtime.Types.Result.GetResult<Prisma.$PreRequisitoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PreRequisitoUpdateArgs>(args: Prisma.SelectSubset<T, PreRequisitoUpdateArgs<ExtArgs>>): Prisma.Prisma__PreRequisitoClient<runtime.Types.Result.GetResult<Prisma.$PreRequisitoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PreRequisitoDeleteManyArgs>(args?: Prisma.SelectSubset<T, PreRequisitoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PreRequisitoUpdateManyArgs>(args: Prisma.SelectSubset<T, PreRequisitoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PreRequisitoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PreRequisitoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PreRequisitoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PreRequisitoUpsertArgs>(args: Prisma.SelectSubset<T, PreRequisitoUpsertArgs<ExtArgs>>): Prisma.Prisma__PreRequisitoClient<runtime.Types.Result.GetResult<Prisma.$PreRequisitoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PreRequisitoCountArgs>(args?: Prisma.Subset<T, PreRequisitoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PreRequisitoCountAggregateOutputType> : number>;
    aggregate<T extends PreRequisitoAggregateArgs>(args: Prisma.Subset<T, PreRequisitoAggregateArgs>): Prisma.PrismaPromise<GetPreRequisitoAggregateType<T>>;
    groupBy<T extends PreRequisitoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PreRequisitoGroupByArgs['orderBy'];
    } : {
        orderBy?: PreRequisitoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PreRequisitoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreRequisitoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PreRequisitoFieldRefs;
}
export interface Prisma__PreRequisitoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    componente<T extends Prisma.ComponenteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ComponenteDefaultArgs<ExtArgs>>): Prisma.Prisma__ComponenteClient<runtime.Types.Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    exigido<T extends Prisma.ComponenteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ComponenteDefaultArgs<ExtArgs>>): Prisma.Prisma__ComponenteClient<runtime.Types.Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PreRequisitoFieldRefs {
    readonly idComponente: Prisma.FieldRef<"PreRequisito", 'BigInt'>;
    readonly idExigido: Prisma.FieldRef<"PreRequisito", 'BigInt'>;
    readonly grupoAlternativa: Prisma.FieldRef<"PreRequisito", 'Int'>;
}
export type PreRequisitoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreRequisitoSelect<ExtArgs> | null;
    omit?: Prisma.PreRequisitoOmit<ExtArgs> | null;
    include?: Prisma.PreRequisitoInclude<ExtArgs> | null;
    where: Prisma.PreRequisitoWhereUniqueInput;
};
export type PreRequisitoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreRequisitoSelect<ExtArgs> | null;
    omit?: Prisma.PreRequisitoOmit<ExtArgs> | null;
    include?: Prisma.PreRequisitoInclude<ExtArgs> | null;
    where: Prisma.PreRequisitoWhereUniqueInput;
};
export type PreRequisitoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreRequisitoSelect<ExtArgs> | null;
    omit?: Prisma.PreRequisitoOmit<ExtArgs> | null;
    include?: Prisma.PreRequisitoInclude<ExtArgs> | null;
    where?: Prisma.PreRequisitoWhereInput;
    orderBy?: Prisma.PreRequisitoOrderByWithRelationInput | Prisma.PreRequisitoOrderByWithRelationInput[];
    cursor?: Prisma.PreRequisitoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PreRequisitoScalarFieldEnum | Prisma.PreRequisitoScalarFieldEnum[];
};
export type PreRequisitoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreRequisitoSelect<ExtArgs> | null;
    omit?: Prisma.PreRequisitoOmit<ExtArgs> | null;
    include?: Prisma.PreRequisitoInclude<ExtArgs> | null;
    where?: Prisma.PreRequisitoWhereInput;
    orderBy?: Prisma.PreRequisitoOrderByWithRelationInput | Prisma.PreRequisitoOrderByWithRelationInput[];
    cursor?: Prisma.PreRequisitoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PreRequisitoScalarFieldEnum | Prisma.PreRequisitoScalarFieldEnum[];
};
export type PreRequisitoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreRequisitoSelect<ExtArgs> | null;
    omit?: Prisma.PreRequisitoOmit<ExtArgs> | null;
    include?: Prisma.PreRequisitoInclude<ExtArgs> | null;
    where?: Prisma.PreRequisitoWhereInput;
    orderBy?: Prisma.PreRequisitoOrderByWithRelationInput | Prisma.PreRequisitoOrderByWithRelationInput[];
    cursor?: Prisma.PreRequisitoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PreRequisitoScalarFieldEnum | Prisma.PreRequisitoScalarFieldEnum[];
};
export type PreRequisitoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreRequisitoSelect<ExtArgs> | null;
    omit?: Prisma.PreRequisitoOmit<ExtArgs> | null;
    include?: Prisma.PreRequisitoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PreRequisitoCreateInput, Prisma.PreRequisitoUncheckedCreateInput>;
};
export type PreRequisitoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PreRequisitoCreateManyInput | Prisma.PreRequisitoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PreRequisitoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreRequisitoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PreRequisitoOmit<ExtArgs> | null;
    data: Prisma.PreRequisitoCreateManyInput | Prisma.PreRequisitoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PreRequisitoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PreRequisitoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreRequisitoSelect<ExtArgs> | null;
    omit?: Prisma.PreRequisitoOmit<ExtArgs> | null;
    include?: Prisma.PreRequisitoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PreRequisitoUpdateInput, Prisma.PreRequisitoUncheckedUpdateInput>;
    where: Prisma.PreRequisitoWhereUniqueInput;
};
export type PreRequisitoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PreRequisitoUpdateManyMutationInput, Prisma.PreRequisitoUncheckedUpdateManyInput>;
    where?: Prisma.PreRequisitoWhereInput;
    limit?: number;
};
export type PreRequisitoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreRequisitoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PreRequisitoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PreRequisitoUpdateManyMutationInput, Prisma.PreRequisitoUncheckedUpdateManyInput>;
    where?: Prisma.PreRequisitoWhereInput;
    limit?: number;
    include?: Prisma.PreRequisitoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PreRequisitoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreRequisitoSelect<ExtArgs> | null;
    omit?: Prisma.PreRequisitoOmit<ExtArgs> | null;
    include?: Prisma.PreRequisitoInclude<ExtArgs> | null;
    where: Prisma.PreRequisitoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PreRequisitoCreateInput, Prisma.PreRequisitoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PreRequisitoUpdateInput, Prisma.PreRequisitoUncheckedUpdateInput>;
};
export type PreRequisitoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreRequisitoSelect<ExtArgs> | null;
    omit?: Prisma.PreRequisitoOmit<ExtArgs> | null;
    include?: Prisma.PreRequisitoInclude<ExtArgs> | null;
    where: Prisma.PreRequisitoWhereUniqueInput;
};
export type PreRequisitoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PreRequisitoWhereInput;
    limit?: number;
};
export type PreRequisitoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreRequisitoSelect<ExtArgs> | null;
    omit?: Prisma.PreRequisitoOmit<ExtArgs> | null;
    include?: Prisma.PreRequisitoInclude<ExtArgs> | null;
};
