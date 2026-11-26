import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EquivalenciaModel = runtime.Types.Result.DefaultSelection<Prisma.$EquivalenciaPayload>;
export type AggregateEquivalencia = {
    _count: EquivalenciaCountAggregateOutputType | null;
    _avg: EquivalenciaAvgAggregateOutputType | null;
    _sum: EquivalenciaSumAggregateOutputType | null;
    _min: EquivalenciaMinAggregateOutputType | null;
    _max: EquivalenciaMaxAggregateOutputType | null;
};
export type EquivalenciaAvgAggregateOutputType = {
    idComponente: number | null;
    idEquivalente: number | null;
    grupoAlternativa: number | null;
};
export type EquivalenciaSumAggregateOutputType = {
    idComponente: bigint | null;
    idEquivalente: bigint | null;
    grupoAlternativa: number | null;
};
export type EquivalenciaMinAggregateOutputType = {
    idComponente: bigint | null;
    idEquivalente: bigint | null;
    grupoAlternativa: number | null;
};
export type EquivalenciaMaxAggregateOutputType = {
    idComponente: bigint | null;
    idEquivalente: bigint | null;
    grupoAlternativa: number | null;
};
export type EquivalenciaCountAggregateOutputType = {
    idComponente: number;
    idEquivalente: number;
    grupoAlternativa: number;
    _all: number;
};
export type EquivalenciaAvgAggregateInputType = {
    idComponente?: true;
    idEquivalente?: true;
    grupoAlternativa?: true;
};
export type EquivalenciaSumAggregateInputType = {
    idComponente?: true;
    idEquivalente?: true;
    grupoAlternativa?: true;
};
export type EquivalenciaMinAggregateInputType = {
    idComponente?: true;
    idEquivalente?: true;
    grupoAlternativa?: true;
};
export type EquivalenciaMaxAggregateInputType = {
    idComponente?: true;
    idEquivalente?: true;
    grupoAlternativa?: true;
};
export type EquivalenciaCountAggregateInputType = {
    idComponente?: true;
    idEquivalente?: true;
    grupoAlternativa?: true;
    _all?: true;
};
export type EquivalenciaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EquivalenciaWhereInput;
    orderBy?: Prisma.EquivalenciaOrderByWithRelationInput | Prisma.EquivalenciaOrderByWithRelationInput[];
    cursor?: Prisma.EquivalenciaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EquivalenciaCountAggregateInputType;
    _avg?: EquivalenciaAvgAggregateInputType;
    _sum?: EquivalenciaSumAggregateInputType;
    _min?: EquivalenciaMinAggregateInputType;
    _max?: EquivalenciaMaxAggregateInputType;
};
export type GetEquivalenciaAggregateType<T extends EquivalenciaAggregateArgs> = {
    [P in keyof T & keyof AggregateEquivalencia]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEquivalencia[P]> : Prisma.GetScalarType<T[P], AggregateEquivalencia[P]>;
};
export type EquivalenciaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EquivalenciaWhereInput;
    orderBy?: Prisma.EquivalenciaOrderByWithAggregationInput | Prisma.EquivalenciaOrderByWithAggregationInput[];
    by: Prisma.EquivalenciaScalarFieldEnum[] | Prisma.EquivalenciaScalarFieldEnum;
    having?: Prisma.EquivalenciaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EquivalenciaCountAggregateInputType | true;
    _avg?: EquivalenciaAvgAggregateInputType;
    _sum?: EquivalenciaSumAggregateInputType;
    _min?: EquivalenciaMinAggregateInputType;
    _max?: EquivalenciaMaxAggregateInputType;
};
export type EquivalenciaGroupByOutputType = {
    idComponente: bigint;
    idEquivalente: bigint;
    grupoAlternativa: number;
    _count: EquivalenciaCountAggregateOutputType | null;
    _avg: EquivalenciaAvgAggregateOutputType | null;
    _sum: EquivalenciaSumAggregateOutputType | null;
    _min: EquivalenciaMinAggregateOutputType | null;
    _max: EquivalenciaMaxAggregateOutputType | null;
};
export type GetEquivalenciaGroupByPayload<T extends EquivalenciaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EquivalenciaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EquivalenciaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EquivalenciaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EquivalenciaGroupByOutputType[P]>;
}>>;
export type EquivalenciaWhereInput = {
    AND?: Prisma.EquivalenciaWhereInput | Prisma.EquivalenciaWhereInput[];
    OR?: Prisma.EquivalenciaWhereInput[];
    NOT?: Prisma.EquivalenciaWhereInput | Prisma.EquivalenciaWhereInput[];
    idComponente?: Prisma.BigIntFilter<"Equivalencia"> | bigint | number;
    idEquivalente?: Prisma.BigIntFilter<"Equivalencia"> | bigint | number;
    grupoAlternativa?: Prisma.IntFilter<"Equivalencia"> | number;
    componente?: Prisma.XOR<Prisma.ComponenteScalarRelationFilter, Prisma.ComponenteWhereInput>;
    equivalente?: Prisma.XOR<Prisma.ComponenteScalarRelationFilter, Prisma.ComponenteWhereInput>;
};
export type EquivalenciaOrderByWithRelationInput = {
    idComponente?: Prisma.SortOrder;
    idEquivalente?: Prisma.SortOrder;
    grupoAlternativa?: Prisma.SortOrder;
    componente?: Prisma.ComponenteOrderByWithRelationInput;
    equivalente?: Prisma.ComponenteOrderByWithRelationInput;
};
export type EquivalenciaWhereUniqueInput = Prisma.AtLeast<{
    idComponente_idEquivalente_grupoAlternativa?: Prisma.EquivalenciaIdComponenteIdEquivalenteGrupoAlternativaCompoundUniqueInput;
    AND?: Prisma.EquivalenciaWhereInput | Prisma.EquivalenciaWhereInput[];
    OR?: Prisma.EquivalenciaWhereInput[];
    NOT?: Prisma.EquivalenciaWhereInput | Prisma.EquivalenciaWhereInput[];
    idComponente?: Prisma.BigIntFilter<"Equivalencia"> | bigint | number;
    idEquivalente?: Prisma.BigIntFilter<"Equivalencia"> | bigint | number;
    grupoAlternativa?: Prisma.IntFilter<"Equivalencia"> | number;
    componente?: Prisma.XOR<Prisma.ComponenteScalarRelationFilter, Prisma.ComponenteWhereInput>;
    equivalente?: Prisma.XOR<Prisma.ComponenteScalarRelationFilter, Prisma.ComponenteWhereInput>;
}, "idComponente_idEquivalente_grupoAlternativa">;
export type EquivalenciaOrderByWithAggregationInput = {
    idComponente?: Prisma.SortOrder;
    idEquivalente?: Prisma.SortOrder;
    grupoAlternativa?: Prisma.SortOrder;
    _count?: Prisma.EquivalenciaCountOrderByAggregateInput;
    _avg?: Prisma.EquivalenciaAvgOrderByAggregateInput;
    _max?: Prisma.EquivalenciaMaxOrderByAggregateInput;
    _min?: Prisma.EquivalenciaMinOrderByAggregateInput;
    _sum?: Prisma.EquivalenciaSumOrderByAggregateInput;
};
export type EquivalenciaScalarWhereWithAggregatesInput = {
    AND?: Prisma.EquivalenciaScalarWhereWithAggregatesInput | Prisma.EquivalenciaScalarWhereWithAggregatesInput[];
    OR?: Prisma.EquivalenciaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EquivalenciaScalarWhereWithAggregatesInput | Prisma.EquivalenciaScalarWhereWithAggregatesInput[];
    idComponente?: Prisma.BigIntWithAggregatesFilter<"Equivalencia"> | bigint | number;
    idEquivalente?: Prisma.BigIntWithAggregatesFilter<"Equivalencia"> | bigint | number;
    grupoAlternativa?: Prisma.IntWithAggregatesFilter<"Equivalencia"> | number;
};
export type EquivalenciaCreateInput = {
    grupoAlternativa: number;
    componente: Prisma.ComponenteCreateNestedOneWithoutEquivalenciasInput;
    equivalente: Prisma.ComponenteCreateNestedOneWithoutEquivalenteDeInput;
};
export type EquivalenciaUncheckedCreateInput = {
    idComponente: bigint | number;
    idEquivalente: bigint | number;
    grupoAlternativa: number;
};
export type EquivalenciaUpdateInput = {
    grupoAlternativa?: Prisma.IntFieldUpdateOperationsInput | number;
    componente?: Prisma.ComponenteUpdateOneRequiredWithoutEquivalenciasNestedInput;
    equivalente?: Prisma.ComponenteUpdateOneRequiredWithoutEquivalenteDeNestedInput;
};
export type EquivalenciaUncheckedUpdateInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    idEquivalente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    grupoAlternativa?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type EquivalenciaCreateManyInput = {
    idComponente: bigint | number;
    idEquivalente: bigint | number;
    grupoAlternativa: number;
};
export type EquivalenciaUpdateManyMutationInput = {
    grupoAlternativa?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type EquivalenciaUncheckedUpdateManyInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    idEquivalente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    grupoAlternativa?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type EquivalenciaListRelationFilter = {
    every?: Prisma.EquivalenciaWhereInput;
    some?: Prisma.EquivalenciaWhereInput;
    none?: Prisma.EquivalenciaWhereInput;
};
export type EquivalenciaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EquivalenciaIdComponenteIdEquivalenteGrupoAlternativaCompoundUniqueInput = {
    idComponente: bigint | number;
    idEquivalente: bigint | number;
    grupoAlternativa: number;
};
export type EquivalenciaCountOrderByAggregateInput = {
    idComponente?: Prisma.SortOrder;
    idEquivalente?: Prisma.SortOrder;
    grupoAlternativa?: Prisma.SortOrder;
};
export type EquivalenciaAvgOrderByAggregateInput = {
    idComponente?: Prisma.SortOrder;
    idEquivalente?: Prisma.SortOrder;
    grupoAlternativa?: Prisma.SortOrder;
};
export type EquivalenciaMaxOrderByAggregateInput = {
    idComponente?: Prisma.SortOrder;
    idEquivalente?: Prisma.SortOrder;
    grupoAlternativa?: Prisma.SortOrder;
};
export type EquivalenciaMinOrderByAggregateInput = {
    idComponente?: Prisma.SortOrder;
    idEquivalente?: Prisma.SortOrder;
    grupoAlternativa?: Prisma.SortOrder;
};
export type EquivalenciaSumOrderByAggregateInput = {
    idComponente?: Prisma.SortOrder;
    idEquivalente?: Prisma.SortOrder;
    grupoAlternativa?: Prisma.SortOrder;
};
export type EquivalenciaCreateNestedManyWithoutComponenteInput = {
    create?: Prisma.XOR<Prisma.EquivalenciaCreateWithoutComponenteInput, Prisma.EquivalenciaUncheckedCreateWithoutComponenteInput> | Prisma.EquivalenciaCreateWithoutComponenteInput[] | Prisma.EquivalenciaUncheckedCreateWithoutComponenteInput[];
    connectOrCreate?: Prisma.EquivalenciaCreateOrConnectWithoutComponenteInput | Prisma.EquivalenciaCreateOrConnectWithoutComponenteInput[];
    createMany?: Prisma.EquivalenciaCreateManyComponenteInputEnvelope;
    connect?: Prisma.EquivalenciaWhereUniqueInput | Prisma.EquivalenciaWhereUniqueInput[];
};
export type EquivalenciaCreateNestedManyWithoutEquivalenteInput = {
    create?: Prisma.XOR<Prisma.EquivalenciaCreateWithoutEquivalenteInput, Prisma.EquivalenciaUncheckedCreateWithoutEquivalenteInput> | Prisma.EquivalenciaCreateWithoutEquivalenteInput[] | Prisma.EquivalenciaUncheckedCreateWithoutEquivalenteInput[];
    connectOrCreate?: Prisma.EquivalenciaCreateOrConnectWithoutEquivalenteInput | Prisma.EquivalenciaCreateOrConnectWithoutEquivalenteInput[];
    createMany?: Prisma.EquivalenciaCreateManyEquivalenteInputEnvelope;
    connect?: Prisma.EquivalenciaWhereUniqueInput | Prisma.EquivalenciaWhereUniqueInput[];
};
export type EquivalenciaUncheckedCreateNestedManyWithoutComponenteInput = {
    create?: Prisma.XOR<Prisma.EquivalenciaCreateWithoutComponenteInput, Prisma.EquivalenciaUncheckedCreateWithoutComponenteInput> | Prisma.EquivalenciaCreateWithoutComponenteInput[] | Prisma.EquivalenciaUncheckedCreateWithoutComponenteInput[];
    connectOrCreate?: Prisma.EquivalenciaCreateOrConnectWithoutComponenteInput | Prisma.EquivalenciaCreateOrConnectWithoutComponenteInput[];
    createMany?: Prisma.EquivalenciaCreateManyComponenteInputEnvelope;
    connect?: Prisma.EquivalenciaWhereUniqueInput | Prisma.EquivalenciaWhereUniqueInput[];
};
export type EquivalenciaUncheckedCreateNestedManyWithoutEquivalenteInput = {
    create?: Prisma.XOR<Prisma.EquivalenciaCreateWithoutEquivalenteInput, Prisma.EquivalenciaUncheckedCreateWithoutEquivalenteInput> | Prisma.EquivalenciaCreateWithoutEquivalenteInput[] | Prisma.EquivalenciaUncheckedCreateWithoutEquivalenteInput[];
    connectOrCreate?: Prisma.EquivalenciaCreateOrConnectWithoutEquivalenteInput | Prisma.EquivalenciaCreateOrConnectWithoutEquivalenteInput[];
    createMany?: Prisma.EquivalenciaCreateManyEquivalenteInputEnvelope;
    connect?: Prisma.EquivalenciaWhereUniqueInput | Prisma.EquivalenciaWhereUniqueInput[];
};
export type EquivalenciaUpdateManyWithoutComponenteNestedInput = {
    create?: Prisma.XOR<Prisma.EquivalenciaCreateWithoutComponenteInput, Prisma.EquivalenciaUncheckedCreateWithoutComponenteInput> | Prisma.EquivalenciaCreateWithoutComponenteInput[] | Prisma.EquivalenciaUncheckedCreateWithoutComponenteInput[];
    connectOrCreate?: Prisma.EquivalenciaCreateOrConnectWithoutComponenteInput | Prisma.EquivalenciaCreateOrConnectWithoutComponenteInput[];
    upsert?: Prisma.EquivalenciaUpsertWithWhereUniqueWithoutComponenteInput | Prisma.EquivalenciaUpsertWithWhereUniqueWithoutComponenteInput[];
    createMany?: Prisma.EquivalenciaCreateManyComponenteInputEnvelope;
    set?: Prisma.EquivalenciaWhereUniqueInput | Prisma.EquivalenciaWhereUniqueInput[];
    disconnect?: Prisma.EquivalenciaWhereUniqueInput | Prisma.EquivalenciaWhereUniqueInput[];
    delete?: Prisma.EquivalenciaWhereUniqueInput | Prisma.EquivalenciaWhereUniqueInput[];
    connect?: Prisma.EquivalenciaWhereUniqueInput | Prisma.EquivalenciaWhereUniqueInput[];
    update?: Prisma.EquivalenciaUpdateWithWhereUniqueWithoutComponenteInput | Prisma.EquivalenciaUpdateWithWhereUniqueWithoutComponenteInput[];
    updateMany?: Prisma.EquivalenciaUpdateManyWithWhereWithoutComponenteInput | Prisma.EquivalenciaUpdateManyWithWhereWithoutComponenteInput[];
    deleteMany?: Prisma.EquivalenciaScalarWhereInput | Prisma.EquivalenciaScalarWhereInput[];
};
export type EquivalenciaUpdateManyWithoutEquivalenteNestedInput = {
    create?: Prisma.XOR<Prisma.EquivalenciaCreateWithoutEquivalenteInput, Prisma.EquivalenciaUncheckedCreateWithoutEquivalenteInput> | Prisma.EquivalenciaCreateWithoutEquivalenteInput[] | Prisma.EquivalenciaUncheckedCreateWithoutEquivalenteInput[];
    connectOrCreate?: Prisma.EquivalenciaCreateOrConnectWithoutEquivalenteInput | Prisma.EquivalenciaCreateOrConnectWithoutEquivalenteInput[];
    upsert?: Prisma.EquivalenciaUpsertWithWhereUniqueWithoutEquivalenteInput | Prisma.EquivalenciaUpsertWithWhereUniqueWithoutEquivalenteInput[];
    createMany?: Prisma.EquivalenciaCreateManyEquivalenteInputEnvelope;
    set?: Prisma.EquivalenciaWhereUniqueInput | Prisma.EquivalenciaWhereUniqueInput[];
    disconnect?: Prisma.EquivalenciaWhereUniqueInput | Prisma.EquivalenciaWhereUniqueInput[];
    delete?: Prisma.EquivalenciaWhereUniqueInput | Prisma.EquivalenciaWhereUniqueInput[];
    connect?: Prisma.EquivalenciaWhereUniqueInput | Prisma.EquivalenciaWhereUniqueInput[];
    update?: Prisma.EquivalenciaUpdateWithWhereUniqueWithoutEquivalenteInput | Prisma.EquivalenciaUpdateWithWhereUniqueWithoutEquivalenteInput[];
    updateMany?: Prisma.EquivalenciaUpdateManyWithWhereWithoutEquivalenteInput | Prisma.EquivalenciaUpdateManyWithWhereWithoutEquivalenteInput[];
    deleteMany?: Prisma.EquivalenciaScalarWhereInput | Prisma.EquivalenciaScalarWhereInput[];
};
export type EquivalenciaUncheckedUpdateManyWithoutComponenteNestedInput = {
    create?: Prisma.XOR<Prisma.EquivalenciaCreateWithoutComponenteInput, Prisma.EquivalenciaUncheckedCreateWithoutComponenteInput> | Prisma.EquivalenciaCreateWithoutComponenteInput[] | Prisma.EquivalenciaUncheckedCreateWithoutComponenteInput[];
    connectOrCreate?: Prisma.EquivalenciaCreateOrConnectWithoutComponenteInput | Prisma.EquivalenciaCreateOrConnectWithoutComponenteInput[];
    upsert?: Prisma.EquivalenciaUpsertWithWhereUniqueWithoutComponenteInput | Prisma.EquivalenciaUpsertWithWhereUniqueWithoutComponenteInput[];
    createMany?: Prisma.EquivalenciaCreateManyComponenteInputEnvelope;
    set?: Prisma.EquivalenciaWhereUniqueInput | Prisma.EquivalenciaWhereUniqueInput[];
    disconnect?: Prisma.EquivalenciaWhereUniqueInput | Prisma.EquivalenciaWhereUniqueInput[];
    delete?: Prisma.EquivalenciaWhereUniqueInput | Prisma.EquivalenciaWhereUniqueInput[];
    connect?: Prisma.EquivalenciaWhereUniqueInput | Prisma.EquivalenciaWhereUniqueInput[];
    update?: Prisma.EquivalenciaUpdateWithWhereUniqueWithoutComponenteInput | Prisma.EquivalenciaUpdateWithWhereUniqueWithoutComponenteInput[];
    updateMany?: Prisma.EquivalenciaUpdateManyWithWhereWithoutComponenteInput | Prisma.EquivalenciaUpdateManyWithWhereWithoutComponenteInput[];
    deleteMany?: Prisma.EquivalenciaScalarWhereInput | Prisma.EquivalenciaScalarWhereInput[];
};
export type EquivalenciaUncheckedUpdateManyWithoutEquivalenteNestedInput = {
    create?: Prisma.XOR<Prisma.EquivalenciaCreateWithoutEquivalenteInput, Prisma.EquivalenciaUncheckedCreateWithoutEquivalenteInput> | Prisma.EquivalenciaCreateWithoutEquivalenteInput[] | Prisma.EquivalenciaUncheckedCreateWithoutEquivalenteInput[];
    connectOrCreate?: Prisma.EquivalenciaCreateOrConnectWithoutEquivalenteInput | Prisma.EquivalenciaCreateOrConnectWithoutEquivalenteInput[];
    upsert?: Prisma.EquivalenciaUpsertWithWhereUniqueWithoutEquivalenteInput | Prisma.EquivalenciaUpsertWithWhereUniqueWithoutEquivalenteInput[];
    createMany?: Prisma.EquivalenciaCreateManyEquivalenteInputEnvelope;
    set?: Prisma.EquivalenciaWhereUniqueInput | Prisma.EquivalenciaWhereUniqueInput[];
    disconnect?: Prisma.EquivalenciaWhereUniqueInput | Prisma.EquivalenciaWhereUniqueInput[];
    delete?: Prisma.EquivalenciaWhereUniqueInput | Prisma.EquivalenciaWhereUniqueInput[];
    connect?: Prisma.EquivalenciaWhereUniqueInput | Prisma.EquivalenciaWhereUniqueInput[];
    update?: Prisma.EquivalenciaUpdateWithWhereUniqueWithoutEquivalenteInput | Prisma.EquivalenciaUpdateWithWhereUniqueWithoutEquivalenteInput[];
    updateMany?: Prisma.EquivalenciaUpdateManyWithWhereWithoutEquivalenteInput | Prisma.EquivalenciaUpdateManyWithWhereWithoutEquivalenteInput[];
    deleteMany?: Prisma.EquivalenciaScalarWhereInput | Prisma.EquivalenciaScalarWhereInput[];
};
export type EquivalenciaCreateWithoutComponenteInput = {
    grupoAlternativa: number;
    equivalente: Prisma.ComponenteCreateNestedOneWithoutEquivalenteDeInput;
};
export type EquivalenciaUncheckedCreateWithoutComponenteInput = {
    idEquivalente: bigint | number;
    grupoAlternativa: number;
};
export type EquivalenciaCreateOrConnectWithoutComponenteInput = {
    where: Prisma.EquivalenciaWhereUniqueInput;
    create: Prisma.XOR<Prisma.EquivalenciaCreateWithoutComponenteInput, Prisma.EquivalenciaUncheckedCreateWithoutComponenteInput>;
};
export type EquivalenciaCreateManyComponenteInputEnvelope = {
    data: Prisma.EquivalenciaCreateManyComponenteInput | Prisma.EquivalenciaCreateManyComponenteInput[];
    skipDuplicates?: boolean;
};
export type EquivalenciaCreateWithoutEquivalenteInput = {
    grupoAlternativa: number;
    componente: Prisma.ComponenteCreateNestedOneWithoutEquivalenciasInput;
};
export type EquivalenciaUncheckedCreateWithoutEquivalenteInput = {
    idComponente: bigint | number;
    grupoAlternativa: number;
};
export type EquivalenciaCreateOrConnectWithoutEquivalenteInput = {
    where: Prisma.EquivalenciaWhereUniqueInput;
    create: Prisma.XOR<Prisma.EquivalenciaCreateWithoutEquivalenteInput, Prisma.EquivalenciaUncheckedCreateWithoutEquivalenteInput>;
};
export type EquivalenciaCreateManyEquivalenteInputEnvelope = {
    data: Prisma.EquivalenciaCreateManyEquivalenteInput | Prisma.EquivalenciaCreateManyEquivalenteInput[];
    skipDuplicates?: boolean;
};
export type EquivalenciaUpsertWithWhereUniqueWithoutComponenteInput = {
    where: Prisma.EquivalenciaWhereUniqueInput;
    update: Prisma.XOR<Prisma.EquivalenciaUpdateWithoutComponenteInput, Prisma.EquivalenciaUncheckedUpdateWithoutComponenteInput>;
    create: Prisma.XOR<Prisma.EquivalenciaCreateWithoutComponenteInput, Prisma.EquivalenciaUncheckedCreateWithoutComponenteInput>;
};
export type EquivalenciaUpdateWithWhereUniqueWithoutComponenteInput = {
    where: Prisma.EquivalenciaWhereUniqueInput;
    data: Prisma.XOR<Prisma.EquivalenciaUpdateWithoutComponenteInput, Prisma.EquivalenciaUncheckedUpdateWithoutComponenteInput>;
};
export type EquivalenciaUpdateManyWithWhereWithoutComponenteInput = {
    where: Prisma.EquivalenciaScalarWhereInput;
    data: Prisma.XOR<Prisma.EquivalenciaUpdateManyMutationInput, Prisma.EquivalenciaUncheckedUpdateManyWithoutComponenteInput>;
};
export type EquivalenciaScalarWhereInput = {
    AND?: Prisma.EquivalenciaScalarWhereInput | Prisma.EquivalenciaScalarWhereInput[];
    OR?: Prisma.EquivalenciaScalarWhereInput[];
    NOT?: Prisma.EquivalenciaScalarWhereInput | Prisma.EquivalenciaScalarWhereInput[];
    idComponente?: Prisma.BigIntFilter<"Equivalencia"> | bigint | number;
    idEquivalente?: Prisma.BigIntFilter<"Equivalencia"> | bigint | number;
    grupoAlternativa?: Prisma.IntFilter<"Equivalencia"> | number;
};
export type EquivalenciaUpsertWithWhereUniqueWithoutEquivalenteInput = {
    where: Prisma.EquivalenciaWhereUniqueInput;
    update: Prisma.XOR<Prisma.EquivalenciaUpdateWithoutEquivalenteInput, Prisma.EquivalenciaUncheckedUpdateWithoutEquivalenteInput>;
    create: Prisma.XOR<Prisma.EquivalenciaCreateWithoutEquivalenteInput, Prisma.EquivalenciaUncheckedCreateWithoutEquivalenteInput>;
};
export type EquivalenciaUpdateWithWhereUniqueWithoutEquivalenteInput = {
    where: Prisma.EquivalenciaWhereUniqueInput;
    data: Prisma.XOR<Prisma.EquivalenciaUpdateWithoutEquivalenteInput, Prisma.EquivalenciaUncheckedUpdateWithoutEquivalenteInput>;
};
export type EquivalenciaUpdateManyWithWhereWithoutEquivalenteInput = {
    where: Prisma.EquivalenciaScalarWhereInput;
    data: Prisma.XOR<Prisma.EquivalenciaUpdateManyMutationInput, Prisma.EquivalenciaUncheckedUpdateManyWithoutEquivalenteInput>;
};
export type EquivalenciaCreateManyComponenteInput = {
    idEquivalente: bigint | number;
    grupoAlternativa: number;
};
export type EquivalenciaCreateManyEquivalenteInput = {
    idComponente: bigint | number;
    grupoAlternativa: number;
};
export type EquivalenciaUpdateWithoutComponenteInput = {
    grupoAlternativa?: Prisma.IntFieldUpdateOperationsInput | number;
    equivalente?: Prisma.ComponenteUpdateOneRequiredWithoutEquivalenteDeNestedInput;
};
export type EquivalenciaUncheckedUpdateWithoutComponenteInput = {
    idEquivalente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    grupoAlternativa?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type EquivalenciaUncheckedUpdateManyWithoutComponenteInput = {
    idEquivalente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    grupoAlternativa?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type EquivalenciaUpdateWithoutEquivalenteInput = {
    grupoAlternativa?: Prisma.IntFieldUpdateOperationsInput | number;
    componente?: Prisma.ComponenteUpdateOneRequiredWithoutEquivalenciasNestedInput;
};
export type EquivalenciaUncheckedUpdateWithoutEquivalenteInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    grupoAlternativa?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type EquivalenciaUncheckedUpdateManyWithoutEquivalenteInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    grupoAlternativa?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type EquivalenciaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idComponente?: boolean;
    idEquivalente?: boolean;
    grupoAlternativa?: boolean;
    componente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
    equivalente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["equivalencia"]>;
export type EquivalenciaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idComponente?: boolean;
    idEquivalente?: boolean;
    grupoAlternativa?: boolean;
    componente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
    equivalente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["equivalencia"]>;
export type EquivalenciaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idComponente?: boolean;
    idEquivalente?: boolean;
    grupoAlternativa?: boolean;
    componente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
    equivalente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["equivalencia"]>;
export type EquivalenciaSelectScalar = {
    idComponente?: boolean;
    idEquivalente?: boolean;
    grupoAlternativa?: boolean;
};
export type EquivalenciaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"idComponente" | "idEquivalente" | "grupoAlternativa", ExtArgs["result"]["equivalencia"]>;
export type EquivalenciaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    componente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
    equivalente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
};
export type EquivalenciaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    componente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
    equivalente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
};
export type EquivalenciaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    componente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
    equivalente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
};
export type $EquivalenciaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Equivalencia";
    objects: {
        componente: Prisma.$ComponentePayload<ExtArgs>;
        equivalente: Prisma.$ComponentePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        idComponente: bigint;
        idEquivalente: bigint;
        grupoAlternativa: number;
    }, ExtArgs["result"]["equivalencia"]>;
    composites: {};
};
export type EquivalenciaGetPayload<S extends boolean | null | undefined | EquivalenciaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EquivalenciaPayload, S>;
export type EquivalenciaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EquivalenciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EquivalenciaCountAggregateInputType | true;
};
export interface EquivalenciaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Equivalencia'];
        meta: {
            name: 'Equivalencia';
        };
    };
    findUnique<T extends EquivalenciaFindUniqueArgs>(args: Prisma.SelectSubset<T, EquivalenciaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EquivalenciaClient<runtime.Types.Result.GetResult<Prisma.$EquivalenciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EquivalenciaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EquivalenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EquivalenciaClient<runtime.Types.Result.GetResult<Prisma.$EquivalenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EquivalenciaFindFirstArgs>(args?: Prisma.SelectSubset<T, EquivalenciaFindFirstArgs<ExtArgs>>): Prisma.Prisma__EquivalenciaClient<runtime.Types.Result.GetResult<Prisma.$EquivalenciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EquivalenciaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EquivalenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EquivalenciaClient<runtime.Types.Result.GetResult<Prisma.$EquivalenciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EquivalenciaFindManyArgs>(args?: Prisma.SelectSubset<T, EquivalenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EquivalenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EquivalenciaCreateArgs>(args: Prisma.SelectSubset<T, EquivalenciaCreateArgs<ExtArgs>>): Prisma.Prisma__EquivalenciaClient<runtime.Types.Result.GetResult<Prisma.$EquivalenciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EquivalenciaCreateManyArgs>(args?: Prisma.SelectSubset<T, EquivalenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EquivalenciaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EquivalenciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EquivalenciaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EquivalenciaDeleteArgs>(args: Prisma.SelectSubset<T, EquivalenciaDeleteArgs<ExtArgs>>): Prisma.Prisma__EquivalenciaClient<runtime.Types.Result.GetResult<Prisma.$EquivalenciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EquivalenciaUpdateArgs>(args: Prisma.SelectSubset<T, EquivalenciaUpdateArgs<ExtArgs>>): Prisma.Prisma__EquivalenciaClient<runtime.Types.Result.GetResult<Prisma.$EquivalenciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EquivalenciaDeleteManyArgs>(args?: Prisma.SelectSubset<T, EquivalenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EquivalenciaUpdateManyArgs>(args: Prisma.SelectSubset<T, EquivalenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EquivalenciaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EquivalenciaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EquivalenciaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EquivalenciaUpsertArgs>(args: Prisma.SelectSubset<T, EquivalenciaUpsertArgs<ExtArgs>>): Prisma.Prisma__EquivalenciaClient<runtime.Types.Result.GetResult<Prisma.$EquivalenciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EquivalenciaCountArgs>(args?: Prisma.Subset<T, EquivalenciaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EquivalenciaCountAggregateOutputType> : number>;
    aggregate<T extends EquivalenciaAggregateArgs>(args: Prisma.Subset<T, EquivalenciaAggregateArgs>): Prisma.PrismaPromise<GetEquivalenciaAggregateType<T>>;
    groupBy<T extends EquivalenciaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EquivalenciaGroupByArgs['orderBy'];
    } : {
        orderBy?: EquivalenciaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EquivalenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquivalenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EquivalenciaFieldRefs;
}
export interface Prisma__EquivalenciaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    componente<T extends Prisma.ComponenteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ComponenteDefaultArgs<ExtArgs>>): Prisma.Prisma__ComponenteClient<runtime.Types.Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    equivalente<T extends Prisma.ComponenteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ComponenteDefaultArgs<ExtArgs>>): Prisma.Prisma__ComponenteClient<runtime.Types.Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EquivalenciaFieldRefs {
    readonly idComponente: Prisma.FieldRef<"Equivalencia", 'BigInt'>;
    readonly idEquivalente: Prisma.FieldRef<"Equivalencia", 'BigInt'>;
    readonly grupoAlternativa: Prisma.FieldRef<"Equivalencia", 'Int'>;
}
export type EquivalenciaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EquivalenciaSelect<ExtArgs> | null;
    omit?: Prisma.EquivalenciaOmit<ExtArgs> | null;
    include?: Prisma.EquivalenciaInclude<ExtArgs> | null;
    where: Prisma.EquivalenciaWhereUniqueInput;
};
export type EquivalenciaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EquivalenciaSelect<ExtArgs> | null;
    omit?: Prisma.EquivalenciaOmit<ExtArgs> | null;
    include?: Prisma.EquivalenciaInclude<ExtArgs> | null;
    where: Prisma.EquivalenciaWhereUniqueInput;
};
export type EquivalenciaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EquivalenciaSelect<ExtArgs> | null;
    omit?: Prisma.EquivalenciaOmit<ExtArgs> | null;
    include?: Prisma.EquivalenciaInclude<ExtArgs> | null;
    where?: Prisma.EquivalenciaWhereInput;
    orderBy?: Prisma.EquivalenciaOrderByWithRelationInput | Prisma.EquivalenciaOrderByWithRelationInput[];
    cursor?: Prisma.EquivalenciaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EquivalenciaScalarFieldEnum | Prisma.EquivalenciaScalarFieldEnum[];
};
export type EquivalenciaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EquivalenciaSelect<ExtArgs> | null;
    omit?: Prisma.EquivalenciaOmit<ExtArgs> | null;
    include?: Prisma.EquivalenciaInclude<ExtArgs> | null;
    where?: Prisma.EquivalenciaWhereInput;
    orderBy?: Prisma.EquivalenciaOrderByWithRelationInput | Prisma.EquivalenciaOrderByWithRelationInput[];
    cursor?: Prisma.EquivalenciaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EquivalenciaScalarFieldEnum | Prisma.EquivalenciaScalarFieldEnum[];
};
export type EquivalenciaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EquivalenciaSelect<ExtArgs> | null;
    omit?: Prisma.EquivalenciaOmit<ExtArgs> | null;
    include?: Prisma.EquivalenciaInclude<ExtArgs> | null;
    where?: Prisma.EquivalenciaWhereInput;
    orderBy?: Prisma.EquivalenciaOrderByWithRelationInput | Prisma.EquivalenciaOrderByWithRelationInput[];
    cursor?: Prisma.EquivalenciaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EquivalenciaScalarFieldEnum | Prisma.EquivalenciaScalarFieldEnum[];
};
export type EquivalenciaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EquivalenciaSelect<ExtArgs> | null;
    omit?: Prisma.EquivalenciaOmit<ExtArgs> | null;
    include?: Prisma.EquivalenciaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EquivalenciaCreateInput, Prisma.EquivalenciaUncheckedCreateInput>;
};
export type EquivalenciaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EquivalenciaCreateManyInput | Prisma.EquivalenciaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EquivalenciaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EquivalenciaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EquivalenciaOmit<ExtArgs> | null;
    data: Prisma.EquivalenciaCreateManyInput | Prisma.EquivalenciaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EquivalenciaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EquivalenciaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EquivalenciaSelect<ExtArgs> | null;
    omit?: Prisma.EquivalenciaOmit<ExtArgs> | null;
    include?: Prisma.EquivalenciaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EquivalenciaUpdateInput, Prisma.EquivalenciaUncheckedUpdateInput>;
    where: Prisma.EquivalenciaWhereUniqueInput;
};
export type EquivalenciaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EquivalenciaUpdateManyMutationInput, Prisma.EquivalenciaUncheckedUpdateManyInput>;
    where?: Prisma.EquivalenciaWhereInput;
    limit?: number;
};
export type EquivalenciaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EquivalenciaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EquivalenciaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EquivalenciaUpdateManyMutationInput, Prisma.EquivalenciaUncheckedUpdateManyInput>;
    where?: Prisma.EquivalenciaWhereInput;
    limit?: number;
    include?: Prisma.EquivalenciaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EquivalenciaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EquivalenciaSelect<ExtArgs> | null;
    omit?: Prisma.EquivalenciaOmit<ExtArgs> | null;
    include?: Prisma.EquivalenciaInclude<ExtArgs> | null;
    where: Prisma.EquivalenciaWhereUniqueInput;
    create: Prisma.XOR<Prisma.EquivalenciaCreateInput, Prisma.EquivalenciaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EquivalenciaUpdateInput, Prisma.EquivalenciaUncheckedUpdateInput>;
};
export type EquivalenciaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EquivalenciaSelect<ExtArgs> | null;
    omit?: Prisma.EquivalenciaOmit<ExtArgs> | null;
    include?: Prisma.EquivalenciaInclude<ExtArgs> | null;
    where: Prisma.EquivalenciaWhereUniqueInput;
};
export type EquivalenciaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EquivalenciaWhereInput;
    limit?: number;
};
export type EquivalenciaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EquivalenciaSelect<ExtArgs> | null;
    omit?: Prisma.EquivalenciaOmit<ExtArgs> | null;
    include?: Prisma.EquivalenciaInclude<ExtArgs> | null;
};
