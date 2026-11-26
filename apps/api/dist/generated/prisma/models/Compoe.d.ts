import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CompoeModel = runtime.Types.Result.DefaultSelection<Prisma.$CompoePayload>;
export type AggregateCompoe = {
    _count: CompoeCountAggregateOutputType | null;
    _avg: CompoeAvgAggregateOutputType | null;
    _sum: CompoeSumAggregateOutputType | null;
    _min: CompoeMinAggregateOutputType | null;
    _max: CompoeMaxAggregateOutputType | null;
};
export type CompoeAvgAggregateOutputType = {
    idEnfase: number | null;
    idComponente: number | null;
};
export type CompoeSumAggregateOutputType = {
    idEnfase: number | null;
    idComponente: bigint | null;
};
export type CompoeMinAggregateOutputType = {
    idEnfase: number | null;
    idComponente: bigint | null;
    tipo: string | null;
};
export type CompoeMaxAggregateOutputType = {
    idEnfase: number | null;
    idComponente: bigint | null;
    tipo: string | null;
};
export type CompoeCountAggregateOutputType = {
    idEnfase: number;
    idComponente: number;
    tipo: number;
    _all: number;
};
export type CompoeAvgAggregateInputType = {
    idEnfase?: true;
    idComponente?: true;
};
export type CompoeSumAggregateInputType = {
    idEnfase?: true;
    idComponente?: true;
};
export type CompoeMinAggregateInputType = {
    idEnfase?: true;
    idComponente?: true;
    tipo?: true;
};
export type CompoeMaxAggregateInputType = {
    idEnfase?: true;
    idComponente?: true;
    tipo?: true;
};
export type CompoeCountAggregateInputType = {
    idEnfase?: true;
    idComponente?: true;
    tipo?: true;
    _all?: true;
};
export type CompoeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CompoeWhereInput;
    orderBy?: Prisma.CompoeOrderByWithRelationInput | Prisma.CompoeOrderByWithRelationInput[];
    cursor?: Prisma.CompoeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CompoeCountAggregateInputType;
    _avg?: CompoeAvgAggregateInputType;
    _sum?: CompoeSumAggregateInputType;
    _min?: CompoeMinAggregateInputType;
    _max?: CompoeMaxAggregateInputType;
};
export type GetCompoeAggregateType<T extends CompoeAggregateArgs> = {
    [P in keyof T & keyof AggregateCompoe]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCompoe[P]> : Prisma.GetScalarType<T[P], AggregateCompoe[P]>;
};
export type CompoeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CompoeWhereInput;
    orderBy?: Prisma.CompoeOrderByWithAggregationInput | Prisma.CompoeOrderByWithAggregationInput[];
    by: Prisma.CompoeScalarFieldEnum[] | Prisma.CompoeScalarFieldEnum;
    having?: Prisma.CompoeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompoeCountAggregateInputType | true;
    _avg?: CompoeAvgAggregateInputType;
    _sum?: CompoeSumAggregateInputType;
    _min?: CompoeMinAggregateInputType;
    _max?: CompoeMaxAggregateInputType;
};
export type CompoeGroupByOutputType = {
    idEnfase: number;
    idComponente: bigint;
    tipo: string;
    _count: CompoeCountAggregateOutputType | null;
    _avg: CompoeAvgAggregateOutputType | null;
    _sum: CompoeSumAggregateOutputType | null;
    _min: CompoeMinAggregateOutputType | null;
    _max: CompoeMaxAggregateOutputType | null;
};
export type GetCompoeGroupByPayload<T extends CompoeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CompoeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CompoeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CompoeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CompoeGroupByOutputType[P]>;
}>>;
export type CompoeWhereInput = {
    AND?: Prisma.CompoeWhereInput | Prisma.CompoeWhereInput[];
    OR?: Prisma.CompoeWhereInput[];
    NOT?: Prisma.CompoeWhereInput | Prisma.CompoeWhereInput[];
    idEnfase?: Prisma.IntFilter<"Compoe"> | number;
    idComponente?: Prisma.BigIntFilter<"Compoe"> | bigint | number;
    tipo?: Prisma.StringFilter<"Compoe"> | string;
    enfase?: Prisma.XOR<Prisma.EnfaseScalarRelationFilter, Prisma.EnfaseWhereInput>;
    componente?: Prisma.XOR<Prisma.ComponenteScalarRelationFilter, Prisma.ComponenteWhereInput>;
};
export type CompoeOrderByWithRelationInput = {
    idEnfase?: Prisma.SortOrder;
    idComponente?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    enfase?: Prisma.EnfaseOrderByWithRelationInput;
    componente?: Prisma.ComponenteOrderByWithRelationInput;
};
export type CompoeWhereUniqueInput = Prisma.AtLeast<{
    idEnfase_idComponente?: Prisma.CompoeIdEnfaseIdComponenteCompoundUniqueInput;
    AND?: Prisma.CompoeWhereInput | Prisma.CompoeWhereInput[];
    OR?: Prisma.CompoeWhereInput[];
    NOT?: Prisma.CompoeWhereInput | Prisma.CompoeWhereInput[];
    idEnfase?: Prisma.IntFilter<"Compoe"> | number;
    idComponente?: Prisma.BigIntFilter<"Compoe"> | bigint | number;
    tipo?: Prisma.StringFilter<"Compoe"> | string;
    enfase?: Prisma.XOR<Prisma.EnfaseScalarRelationFilter, Prisma.EnfaseWhereInput>;
    componente?: Prisma.XOR<Prisma.ComponenteScalarRelationFilter, Prisma.ComponenteWhereInput>;
}, "idEnfase_idComponente">;
export type CompoeOrderByWithAggregationInput = {
    idEnfase?: Prisma.SortOrder;
    idComponente?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    _count?: Prisma.CompoeCountOrderByAggregateInput;
    _avg?: Prisma.CompoeAvgOrderByAggregateInput;
    _max?: Prisma.CompoeMaxOrderByAggregateInput;
    _min?: Prisma.CompoeMinOrderByAggregateInput;
    _sum?: Prisma.CompoeSumOrderByAggregateInput;
};
export type CompoeScalarWhereWithAggregatesInput = {
    AND?: Prisma.CompoeScalarWhereWithAggregatesInput | Prisma.CompoeScalarWhereWithAggregatesInput[];
    OR?: Prisma.CompoeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CompoeScalarWhereWithAggregatesInput | Prisma.CompoeScalarWhereWithAggregatesInput[];
    idEnfase?: Prisma.IntWithAggregatesFilter<"Compoe"> | number;
    idComponente?: Prisma.BigIntWithAggregatesFilter<"Compoe"> | bigint | number;
    tipo?: Prisma.StringWithAggregatesFilter<"Compoe"> | string;
};
export type CompoeCreateInput = {
    tipo: string;
    enfase: Prisma.EnfaseCreateNestedOneWithoutComponentesInput;
    componente: Prisma.ComponenteCreateNestedOneWithoutEnfasesInput;
};
export type CompoeUncheckedCreateInput = {
    idEnfase: number;
    idComponente: bigint | number;
    tipo: string;
};
export type CompoeUpdateInput = {
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    enfase?: Prisma.EnfaseUpdateOneRequiredWithoutComponentesNestedInput;
    componente?: Prisma.ComponenteUpdateOneRequiredWithoutEnfasesNestedInput;
};
export type CompoeUncheckedUpdateInput = {
    idEnfase?: Prisma.IntFieldUpdateOperationsInput | number;
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CompoeCreateManyInput = {
    idEnfase: number;
    idComponente: bigint | number;
    tipo: string;
};
export type CompoeUpdateManyMutationInput = {
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CompoeUncheckedUpdateManyInput = {
    idEnfase?: Prisma.IntFieldUpdateOperationsInput | number;
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CompoeListRelationFilter = {
    every?: Prisma.CompoeWhereInput;
    some?: Prisma.CompoeWhereInput;
    none?: Prisma.CompoeWhereInput;
};
export type CompoeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CompoeIdEnfaseIdComponenteCompoundUniqueInput = {
    idEnfase: number;
    idComponente: bigint | number;
};
export type CompoeCountOrderByAggregateInput = {
    idEnfase?: Prisma.SortOrder;
    idComponente?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
};
export type CompoeAvgOrderByAggregateInput = {
    idEnfase?: Prisma.SortOrder;
    idComponente?: Prisma.SortOrder;
};
export type CompoeMaxOrderByAggregateInput = {
    idEnfase?: Prisma.SortOrder;
    idComponente?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
};
export type CompoeMinOrderByAggregateInput = {
    idEnfase?: Prisma.SortOrder;
    idComponente?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
};
export type CompoeSumOrderByAggregateInput = {
    idEnfase?: Prisma.SortOrder;
    idComponente?: Prisma.SortOrder;
};
export type CompoeCreateNestedManyWithoutEnfaseInput = {
    create?: Prisma.XOR<Prisma.CompoeCreateWithoutEnfaseInput, Prisma.CompoeUncheckedCreateWithoutEnfaseInput> | Prisma.CompoeCreateWithoutEnfaseInput[] | Prisma.CompoeUncheckedCreateWithoutEnfaseInput[];
    connectOrCreate?: Prisma.CompoeCreateOrConnectWithoutEnfaseInput | Prisma.CompoeCreateOrConnectWithoutEnfaseInput[];
    createMany?: Prisma.CompoeCreateManyEnfaseInputEnvelope;
    connect?: Prisma.CompoeWhereUniqueInput | Prisma.CompoeWhereUniqueInput[];
};
export type CompoeUncheckedCreateNestedManyWithoutEnfaseInput = {
    create?: Prisma.XOR<Prisma.CompoeCreateWithoutEnfaseInput, Prisma.CompoeUncheckedCreateWithoutEnfaseInput> | Prisma.CompoeCreateWithoutEnfaseInput[] | Prisma.CompoeUncheckedCreateWithoutEnfaseInput[];
    connectOrCreate?: Prisma.CompoeCreateOrConnectWithoutEnfaseInput | Prisma.CompoeCreateOrConnectWithoutEnfaseInput[];
    createMany?: Prisma.CompoeCreateManyEnfaseInputEnvelope;
    connect?: Prisma.CompoeWhereUniqueInput | Prisma.CompoeWhereUniqueInput[];
};
export type CompoeUpdateManyWithoutEnfaseNestedInput = {
    create?: Prisma.XOR<Prisma.CompoeCreateWithoutEnfaseInput, Prisma.CompoeUncheckedCreateWithoutEnfaseInput> | Prisma.CompoeCreateWithoutEnfaseInput[] | Prisma.CompoeUncheckedCreateWithoutEnfaseInput[];
    connectOrCreate?: Prisma.CompoeCreateOrConnectWithoutEnfaseInput | Prisma.CompoeCreateOrConnectWithoutEnfaseInput[];
    upsert?: Prisma.CompoeUpsertWithWhereUniqueWithoutEnfaseInput | Prisma.CompoeUpsertWithWhereUniqueWithoutEnfaseInput[];
    createMany?: Prisma.CompoeCreateManyEnfaseInputEnvelope;
    set?: Prisma.CompoeWhereUniqueInput | Prisma.CompoeWhereUniqueInput[];
    disconnect?: Prisma.CompoeWhereUniqueInput | Prisma.CompoeWhereUniqueInput[];
    delete?: Prisma.CompoeWhereUniqueInput | Prisma.CompoeWhereUniqueInput[];
    connect?: Prisma.CompoeWhereUniqueInput | Prisma.CompoeWhereUniqueInput[];
    update?: Prisma.CompoeUpdateWithWhereUniqueWithoutEnfaseInput | Prisma.CompoeUpdateWithWhereUniqueWithoutEnfaseInput[];
    updateMany?: Prisma.CompoeUpdateManyWithWhereWithoutEnfaseInput | Prisma.CompoeUpdateManyWithWhereWithoutEnfaseInput[];
    deleteMany?: Prisma.CompoeScalarWhereInput | Prisma.CompoeScalarWhereInput[];
};
export type CompoeUncheckedUpdateManyWithoutEnfaseNestedInput = {
    create?: Prisma.XOR<Prisma.CompoeCreateWithoutEnfaseInput, Prisma.CompoeUncheckedCreateWithoutEnfaseInput> | Prisma.CompoeCreateWithoutEnfaseInput[] | Prisma.CompoeUncheckedCreateWithoutEnfaseInput[];
    connectOrCreate?: Prisma.CompoeCreateOrConnectWithoutEnfaseInput | Prisma.CompoeCreateOrConnectWithoutEnfaseInput[];
    upsert?: Prisma.CompoeUpsertWithWhereUniqueWithoutEnfaseInput | Prisma.CompoeUpsertWithWhereUniqueWithoutEnfaseInput[];
    createMany?: Prisma.CompoeCreateManyEnfaseInputEnvelope;
    set?: Prisma.CompoeWhereUniqueInput | Prisma.CompoeWhereUniqueInput[];
    disconnect?: Prisma.CompoeWhereUniqueInput | Prisma.CompoeWhereUniqueInput[];
    delete?: Prisma.CompoeWhereUniqueInput | Prisma.CompoeWhereUniqueInput[];
    connect?: Prisma.CompoeWhereUniqueInput | Prisma.CompoeWhereUniqueInput[];
    update?: Prisma.CompoeUpdateWithWhereUniqueWithoutEnfaseInput | Prisma.CompoeUpdateWithWhereUniqueWithoutEnfaseInput[];
    updateMany?: Prisma.CompoeUpdateManyWithWhereWithoutEnfaseInput | Prisma.CompoeUpdateManyWithWhereWithoutEnfaseInput[];
    deleteMany?: Prisma.CompoeScalarWhereInput | Prisma.CompoeScalarWhereInput[];
};
export type CompoeCreateNestedManyWithoutComponenteInput = {
    create?: Prisma.XOR<Prisma.CompoeCreateWithoutComponenteInput, Prisma.CompoeUncheckedCreateWithoutComponenteInput> | Prisma.CompoeCreateWithoutComponenteInput[] | Prisma.CompoeUncheckedCreateWithoutComponenteInput[];
    connectOrCreate?: Prisma.CompoeCreateOrConnectWithoutComponenteInput | Prisma.CompoeCreateOrConnectWithoutComponenteInput[];
    createMany?: Prisma.CompoeCreateManyComponenteInputEnvelope;
    connect?: Prisma.CompoeWhereUniqueInput | Prisma.CompoeWhereUniqueInput[];
};
export type CompoeUncheckedCreateNestedManyWithoutComponenteInput = {
    create?: Prisma.XOR<Prisma.CompoeCreateWithoutComponenteInput, Prisma.CompoeUncheckedCreateWithoutComponenteInput> | Prisma.CompoeCreateWithoutComponenteInput[] | Prisma.CompoeUncheckedCreateWithoutComponenteInput[];
    connectOrCreate?: Prisma.CompoeCreateOrConnectWithoutComponenteInput | Prisma.CompoeCreateOrConnectWithoutComponenteInput[];
    createMany?: Prisma.CompoeCreateManyComponenteInputEnvelope;
    connect?: Prisma.CompoeWhereUniqueInput | Prisma.CompoeWhereUniqueInput[];
};
export type CompoeUpdateManyWithoutComponenteNestedInput = {
    create?: Prisma.XOR<Prisma.CompoeCreateWithoutComponenteInput, Prisma.CompoeUncheckedCreateWithoutComponenteInput> | Prisma.CompoeCreateWithoutComponenteInput[] | Prisma.CompoeUncheckedCreateWithoutComponenteInput[];
    connectOrCreate?: Prisma.CompoeCreateOrConnectWithoutComponenteInput | Prisma.CompoeCreateOrConnectWithoutComponenteInput[];
    upsert?: Prisma.CompoeUpsertWithWhereUniqueWithoutComponenteInput | Prisma.CompoeUpsertWithWhereUniqueWithoutComponenteInput[];
    createMany?: Prisma.CompoeCreateManyComponenteInputEnvelope;
    set?: Prisma.CompoeWhereUniqueInput | Prisma.CompoeWhereUniqueInput[];
    disconnect?: Prisma.CompoeWhereUniqueInput | Prisma.CompoeWhereUniqueInput[];
    delete?: Prisma.CompoeWhereUniqueInput | Prisma.CompoeWhereUniqueInput[];
    connect?: Prisma.CompoeWhereUniqueInput | Prisma.CompoeWhereUniqueInput[];
    update?: Prisma.CompoeUpdateWithWhereUniqueWithoutComponenteInput | Prisma.CompoeUpdateWithWhereUniqueWithoutComponenteInput[];
    updateMany?: Prisma.CompoeUpdateManyWithWhereWithoutComponenteInput | Prisma.CompoeUpdateManyWithWhereWithoutComponenteInput[];
    deleteMany?: Prisma.CompoeScalarWhereInput | Prisma.CompoeScalarWhereInput[];
};
export type CompoeUncheckedUpdateManyWithoutComponenteNestedInput = {
    create?: Prisma.XOR<Prisma.CompoeCreateWithoutComponenteInput, Prisma.CompoeUncheckedCreateWithoutComponenteInput> | Prisma.CompoeCreateWithoutComponenteInput[] | Prisma.CompoeUncheckedCreateWithoutComponenteInput[];
    connectOrCreate?: Prisma.CompoeCreateOrConnectWithoutComponenteInput | Prisma.CompoeCreateOrConnectWithoutComponenteInput[];
    upsert?: Prisma.CompoeUpsertWithWhereUniqueWithoutComponenteInput | Prisma.CompoeUpsertWithWhereUniqueWithoutComponenteInput[];
    createMany?: Prisma.CompoeCreateManyComponenteInputEnvelope;
    set?: Prisma.CompoeWhereUniqueInput | Prisma.CompoeWhereUniqueInput[];
    disconnect?: Prisma.CompoeWhereUniqueInput | Prisma.CompoeWhereUniqueInput[];
    delete?: Prisma.CompoeWhereUniqueInput | Prisma.CompoeWhereUniqueInput[];
    connect?: Prisma.CompoeWhereUniqueInput | Prisma.CompoeWhereUniqueInput[];
    update?: Prisma.CompoeUpdateWithWhereUniqueWithoutComponenteInput | Prisma.CompoeUpdateWithWhereUniqueWithoutComponenteInput[];
    updateMany?: Prisma.CompoeUpdateManyWithWhereWithoutComponenteInput | Prisma.CompoeUpdateManyWithWhereWithoutComponenteInput[];
    deleteMany?: Prisma.CompoeScalarWhereInput | Prisma.CompoeScalarWhereInput[];
};
export type CompoeCreateWithoutEnfaseInput = {
    tipo: string;
    componente: Prisma.ComponenteCreateNestedOneWithoutEnfasesInput;
};
export type CompoeUncheckedCreateWithoutEnfaseInput = {
    idComponente: bigint | number;
    tipo: string;
};
export type CompoeCreateOrConnectWithoutEnfaseInput = {
    where: Prisma.CompoeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CompoeCreateWithoutEnfaseInput, Prisma.CompoeUncheckedCreateWithoutEnfaseInput>;
};
export type CompoeCreateManyEnfaseInputEnvelope = {
    data: Prisma.CompoeCreateManyEnfaseInput | Prisma.CompoeCreateManyEnfaseInput[];
    skipDuplicates?: boolean;
};
export type CompoeUpsertWithWhereUniqueWithoutEnfaseInput = {
    where: Prisma.CompoeWhereUniqueInput;
    update: Prisma.XOR<Prisma.CompoeUpdateWithoutEnfaseInput, Prisma.CompoeUncheckedUpdateWithoutEnfaseInput>;
    create: Prisma.XOR<Prisma.CompoeCreateWithoutEnfaseInput, Prisma.CompoeUncheckedCreateWithoutEnfaseInput>;
};
export type CompoeUpdateWithWhereUniqueWithoutEnfaseInput = {
    where: Prisma.CompoeWhereUniqueInput;
    data: Prisma.XOR<Prisma.CompoeUpdateWithoutEnfaseInput, Prisma.CompoeUncheckedUpdateWithoutEnfaseInput>;
};
export type CompoeUpdateManyWithWhereWithoutEnfaseInput = {
    where: Prisma.CompoeScalarWhereInput;
    data: Prisma.XOR<Prisma.CompoeUpdateManyMutationInput, Prisma.CompoeUncheckedUpdateManyWithoutEnfaseInput>;
};
export type CompoeScalarWhereInput = {
    AND?: Prisma.CompoeScalarWhereInput | Prisma.CompoeScalarWhereInput[];
    OR?: Prisma.CompoeScalarWhereInput[];
    NOT?: Prisma.CompoeScalarWhereInput | Prisma.CompoeScalarWhereInput[];
    idEnfase?: Prisma.IntFilter<"Compoe"> | number;
    idComponente?: Prisma.BigIntFilter<"Compoe"> | bigint | number;
    tipo?: Prisma.StringFilter<"Compoe"> | string;
};
export type CompoeCreateWithoutComponenteInput = {
    tipo: string;
    enfase: Prisma.EnfaseCreateNestedOneWithoutComponentesInput;
};
export type CompoeUncheckedCreateWithoutComponenteInput = {
    idEnfase: number;
    tipo: string;
};
export type CompoeCreateOrConnectWithoutComponenteInput = {
    where: Prisma.CompoeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CompoeCreateWithoutComponenteInput, Prisma.CompoeUncheckedCreateWithoutComponenteInput>;
};
export type CompoeCreateManyComponenteInputEnvelope = {
    data: Prisma.CompoeCreateManyComponenteInput | Prisma.CompoeCreateManyComponenteInput[];
    skipDuplicates?: boolean;
};
export type CompoeUpsertWithWhereUniqueWithoutComponenteInput = {
    where: Prisma.CompoeWhereUniqueInput;
    update: Prisma.XOR<Prisma.CompoeUpdateWithoutComponenteInput, Prisma.CompoeUncheckedUpdateWithoutComponenteInput>;
    create: Prisma.XOR<Prisma.CompoeCreateWithoutComponenteInput, Prisma.CompoeUncheckedCreateWithoutComponenteInput>;
};
export type CompoeUpdateWithWhereUniqueWithoutComponenteInput = {
    where: Prisma.CompoeWhereUniqueInput;
    data: Prisma.XOR<Prisma.CompoeUpdateWithoutComponenteInput, Prisma.CompoeUncheckedUpdateWithoutComponenteInput>;
};
export type CompoeUpdateManyWithWhereWithoutComponenteInput = {
    where: Prisma.CompoeScalarWhereInput;
    data: Prisma.XOR<Prisma.CompoeUpdateManyMutationInput, Prisma.CompoeUncheckedUpdateManyWithoutComponenteInput>;
};
export type CompoeCreateManyEnfaseInput = {
    idComponente: bigint | number;
    tipo: string;
};
export type CompoeUpdateWithoutEnfaseInput = {
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    componente?: Prisma.ComponenteUpdateOneRequiredWithoutEnfasesNestedInput;
};
export type CompoeUncheckedUpdateWithoutEnfaseInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CompoeUncheckedUpdateManyWithoutEnfaseInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CompoeCreateManyComponenteInput = {
    idEnfase: number;
    tipo: string;
};
export type CompoeUpdateWithoutComponenteInput = {
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    enfase?: Prisma.EnfaseUpdateOneRequiredWithoutComponentesNestedInput;
};
export type CompoeUncheckedUpdateWithoutComponenteInput = {
    idEnfase?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CompoeUncheckedUpdateManyWithoutComponenteInput = {
    idEnfase?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CompoeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idEnfase?: boolean;
    idComponente?: boolean;
    tipo?: boolean;
    enfase?: boolean | Prisma.EnfaseDefaultArgs<ExtArgs>;
    componente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["compoe"]>;
export type CompoeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idEnfase?: boolean;
    idComponente?: boolean;
    tipo?: boolean;
    enfase?: boolean | Prisma.EnfaseDefaultArgs<ExtArgs>;
    componente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["compoe"]>;
export type CompoeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idEnfase?: boolean;
    idComponente?: boolean;
    tipo?: boolean;
    enfase?: boolean | Prisma.EnfaseDefaultArgs<ExtArgs>;
    componente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["compoe"]>;
export type CompoeSelectScalar = {
    idEnfase?: boolean;
    idComponente?: boolean;
    tipo?: boolean;
};
export type CompoeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"idEnfase" | "idComponente" | "tipo", ExtArgs["result"]["compoe"]>;
export type CompoeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    enfase?: boolean | Prisma.EnfaseDefaultArgs<ExtArgs>;
    componente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
};
export type CompoeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    enfase?: boolean | Prisma.EnfaseDefaultArgs<ExtArgs>;
    componente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
};
export type CompoeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    enfase?: boolean | Prisma.EnfaseDefaultArgs<ExtArgs>;
    componente?: boolean | Prisma.ComponenteDefaultArgs<ExtArgs>;
};
export type $CompoePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Compoe";
    objects: {
        enfase: Prisma.$EnfasePayload<ExtArgs>;
        componente: Prisma.$ComponentePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        idEnfase: number;
        idComponente: bigint;
        tipo: string;
    }, ExtArgs["result"]["compoe"]>;
    composites: {};
};
export type CompoeGetPayload<S extends boolean | null | undefined | CompoeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CompoePayload, S>;
export type CompoeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CompoeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CompoeCountAggregateInputType | true;
};
export interface CompoeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Compoe'];
        meta: {
            name: 'Compoe';
        };
    };
    findUnique<T extends CompoeFindUniqueArgs>(args: Prisma.SelectSubset<T, CompoeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CompoeClient<runtime.Types.Result.GetResult<Prisma.$CompoePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CompoeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CompoeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CompoeClient<runtime.Types.Result.GetResult<Prisma.$CompoePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CompoeFindFirstArgs>(args?: Prisma.SelectSubset<T, CompoeFindFirstArgs<ExtArgs>>): Prisma.Prisma__CompoeClient<runtime.Types.Result.GetResult<Prisma.$CompoePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CompoeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CompoeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CompoeClient<runtime.Types.Result.GetResult<Prisma.$CompoePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CompoeFindManyArgs>(args?: Prisma.SelectSubset<T, CompoeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CompoePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CompoeCreateArgs>(args: Prisma.SelectSubset<T, CompoeCreateArgs<ExtArgs>>): Prisma.Prisma__CompoeClient<runtime.Types.Result.GetResult<Prisma.$CompoePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CompoeCreateManyArgs>(args?: Prisma.SelectSubset<T, CompoeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CompoeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CompoeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CompoePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CompoeDeleteArgs>(args: Prisma.SelectSubset<T, CompoeDeleteArgs<ExtArgs>>): Prisma.Prisma__CompoeClient<runtime.Types.Result.GetResult<Prisma.$CompoePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CompoeUpdateArgs>(args: Prisma.SelectSubset<T, CompoeUpdateArgs<ExtArgs>>): Prisma.Prisma__CompoeClient<runtime.Types.Result.GetResult<Prisma.$CompoePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CompoeDeleteManyArgs>(args?: Prisma.SelectSubset<T, CompoeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CompoeUpdateManyArgs>(args: Prisma.SelectSubset<T, CompoeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CompoeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CompoeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CompoePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CompoeUpsertArgs>(args: Prisma.SelectSubset<T, CompoeUpsertArgs<ExtArgs>>): Prisma.Prisma__CompoeClient<runtime.Types.Result.GetResult<Prisma.$CompoePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CompoeCountArgs>(args?: Prisma.Subset<T, CompoeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CompoeCountAggregateOutputType> : number>;
    aggregate<T extends CompoeAggregateArgs>(args: Prisma.Subset<T, CompoeAggregateArgs>): Prisma.PrismaPromise<GetCompoeAggregateType<T>>;
    groupBy<T extends CompoeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CompoeGroupByArgs['orderBy'];
    } : {
        orderBy?: CompoeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CompoeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompoeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CompoeFieldRefs;
}
export interface Prisma__CompoeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    enfase<T extends Prisma.EnfaseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EnfaseDefaultArgs<ExtArgs>>): Prisma.Prisma__EnfaseClient<runtime.Types.Result.GetResult<Prisma.$EnfasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    componente<T extends Prisma.ComponenteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ComponenteDefaultArgs<ExtArgs>>): Prisma.Prisma__ComponenteClient<runtime.Types.Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CompoeFieldRefs {
    readonly idEnfase: Prisma.FieldRef<"Compoe", 'Int'>;
    readonly idComponente: Prisma.FieldRef<"Compoe", 'BigInt'>;
    readonly tipo: Prisma.FieldRef<"Compoe", 'String'>;
}
export type CompoeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompoeSelect<ExtArgs> | null;
    omit?: Prisma.CompoeOmit<ExtArgs> | null;
    include?: Prisma.CompoeInclude<ExtArgs> | null;
    where: Prisma.CompoeWhereUniqueInput;
};
export type CompoeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompoeSelect<ExtArgs> | null;
    omit?: Prisma.CompoeOmit<ExtArgs> | null;
    include?: Prisma.CompoeInclude<ExtArgs> | null;
    where: Prisma.CompoeWhereUniqueInput;
};
export type CompoeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompoeSelect<ExtArgs> | null;
    omit?: Prisma.CompoeOmit<ExtArgs> | null;
    include?: Prisma.CompoeInclude<ExtArgs> | null;
    where?: Prisma.CompoeWhereInput;
    orderBy?: Prisma.CompoeOrderByWithRelationInput | Prisma.CompoeOrderByWithRelationInput[];
    cursor?: Prisma.CompoeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CompoeScalarFieldEnum | Prisma.CompoeScalarFieldEnum[];
};
export type CompoeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompoeSelect<ExtArgs> | null;
    omit?: Prisma.CompoeOmit<ExtArgs> | null;
    include?: Prisma.CompoeInclude<ExtArgs> | null;
    where?: Prisma.CompoeWhereInput;
    orderBy?: Prisma.CompoeOrderByWithRelationInput | Prisma.CompoeOrderByWithRelationInput[];
    cursor?: Prisma.CompoeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CompoeScalarFieldEnum | Prisma.CompoeScalarFieldEnum[];
};
export type CompoeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompoeSelect<ExtArgs> | null;
    omit?: Prisma.CompoeOmit<ExtArgs> | null;
    include?: Prisma.CompoeInclude<ExtArgs> | null;
    where?: Prisma.CompoeWhereInput;
    orderBy?: Prisma.CompoeOrderByWithRelationInput | Prisma.CompoeOrderByWithRelationInput[];
    cursor?: Prisma.CompoeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CompoeScalarFieldEnum | Prisma.CompoeScalarFieldEnum[];
};
export type CompoeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompoeSelect<ExtArgs> | null;
    omit?: Prisma.CompoeOmit<ExtArgs> | null;
    include?: Prisma.CompoeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CompoeCreateInput, Prisma.CompoeUncheckedCreateInput>;
};
export type CompoeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CompoeCreateManyInput | Prisma.CompoeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CompoeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompoeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CompoeOmit<ExtArgs> | null;
    data: Prisma.CompoeCreateManyInput | Prisma.CompoeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CompoeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CompoeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompoeSelect<ExtArgs> | null;
    omit?: Prisma.CompoeOmit<ExtArgs> | null;
    include?: Prisma.CompoeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CompoeUpdateInput, Prisma.CompoeUncheckedUpdateInput>;
    where: Prisma.CompoeWhereUniqueInput;
};
export type CompoeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CompoeUpdateManyMutationInput, Prisma.CompoeUncheckedUpdateManyInput>;
    where?: Prisma.CompoeWhereInput;
    limit?: number;
};
export type CompoeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompoeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CompoeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CompoeUpdateManyMutationInput, Prisma.CompoeUncheckedUpdateManyInput>;
    where?: Prisma.CompoeWhereInput;
    limit?: number;
    include?: Prisma.CompoeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CompoeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompoeSelect<ExtArgs> | null;
    omit?: Prisma.CompoeOmit<ExtArgs> | null;
    include?: Prisma.CompoeInclude<ExtArgs> | null;
    where: Prisma.CompoeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CompoeCreateInput, Prisma.CompoeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CompoeUpdateInput, Prisma.CompoeUncheckedUpdateInput>;
};
export type CompoeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompoeSelect<ExtArgs> | null;
    omit?: Prisma.CompoeOmit<ExtArgs> | null;
    include?: Prisma.CompoeInclude<ExtArgs> | null;
    where: Prisma.CompoeWhereUniqueInput;
};
export type CompoeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CompoeWhereInput;
    limit?: number;
};
export type CompoeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompoeSelect<ExtArgs> | null;
    omit?: Prisma.CompoeOmit<ExtArgs> | null;
    include?: Prisma.CompoeInclude<ExtArgs> | null;
};
