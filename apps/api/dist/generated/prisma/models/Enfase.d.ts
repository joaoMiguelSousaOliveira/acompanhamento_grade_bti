import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EnfaseModel = runtime.Types.Result.DefaultSelection<Prisma.$EnfasePayload>;
export type AggregateEnfase = {
    _count: EnfaseCountAggregateOutputType | null;
    _avg: EnfaseAvgAggregateOutputType | null;
    _sum: EnfaseSumAggregateOutputType | null;
    _min: EnfaseMinAggregateOutputType | null;
    _max: EnfaseMaxAggregateOutputType | null;
};
export type EnfaseAvgAggregateOutputType = {
    idEnfase: number | null;
};
export type EnfaseSumAggregateOutputType = {
    idEnfase: number | null;
};
export type EnfaseMinAggregateOutputType = {
    idEnfase: number | null;
    nome: string | null;
};
export type EnfaseMaxAggregateOutputType = {
    idEnfase: number | null;
    nome: string | null;
};
export type EnfaseCountAggregateOutputType = {
    idEnfase: number;
    nome: number;
    _all: number;
};
export type EnfaseAvgAggregateInputType = {
    idEnfase?: true;
};
export type EnfaseSumAggregateInputType = {
    idEnfase?: true;
};
export type EnfaseMinAggregateInputType = {
    idEnfase?: true;
    nome?: true;
};
export type EnfaseMaxAggregateInputType = {
    idEnfase?: true;
    nome?: true;
};
export type EnfaseCountAggregateInputType = {
    idEnfase?: true;
    nome?: true;
    _all?: true;
};
export type EnfaseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnfaseWhereInput;
    orderBy?: Prisma.EnfaseOrderByWithRelationInput | Prisma.EnfaseOrderByWithRelationInput[];
    cursor?: Prisma.EnfaseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EnfaseCountAggregateInputType;
    _avg?: EnfaseAvgAggregateInputType;
    _sum?: EnfaseSumAggregateInputType;
    _min?: EnfaseMinAggregateInputType;
    _max?: EnfaseMaxAggregateInputType;
};
export type GetEnfaseAggregateType<T extends EnfaseAggregateArgs> = {
    [P in keyof T & keyof AggregateEnfase]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEnfase[P]> : Prisma.GetScalarType<T[P], AggregateEnfase[P]>;
};
export type EnfaseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnfaseWhereInput;
    orderBy?: Prisma.EnfaseOrderByWithAggregationInput | Prisma.EnfaseOrderByWithAggregationInput[];
    by: Prisma.EnfaseScalarFieldEnum[] | Prisma.EnfaseScalarFieldEnum;
    having?: Prisma.EnfaseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EnfaseCountAggregateInputType | true;
    _avg?: EnfaseAvgAggregateInputType;
    _sum?: EnfaseSumAggregateInputType;
    _min?: EnfaseMinAggregateInputType;
    _max?: EnfaseMaxAggregateInputType;
};
export type EnfaseGroupByOutputType = {
    idEnfase: number;
    nome: string;
    _count: EnfaseCountAggregateOutputType | null;
    _avg: EnfaseAvgAggregateOutputType | null;
    _sum: EnfaseSumAggregateOutputType | null;
    _min: EnfaseMinAggregateOutputType | null;
    _max: EnfaseMaxAggregateOutputType | null;
};
export type GetEnfaseGroupByPayload<T extends EnfaseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EnfaseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EnfaseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EnfaseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EnfaseGroupByOutputType[P]>;
}>>;
export type EnfaseWhereInput = {
    AND?: Prisma.EnfaseWhereInput | Prisma.EnfaseWhereInput[];
    OR?: Prisma.EnfaseWhereInput[];
    NOT?: Prisma.EnfaseWhereInput | Prisma.EnfaseWhereInput[];
    idEnfase?: Prisma.IntFilter<"Enfase"> | number;
    nome?: Prisma.StringFilter<"Enfase"> | string;
    componentes?: Prisma.CompoeListRelationFilter;
    acompanhamentos?: Prisma.AcompanhaListRelationFilter;
};
export type EnfaseOrderByWithRelationInput = {
    idEnfase?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    componentes?: Prisma.CompoeOrderByRelationAggregateInput;
    acompanhamentos?: Prisma.AcompanhaOrderByRelationAggregateInput;
};
export type EnfaseWhereUniqueInput = Prisma.AtLeast<{
    idEnfase?: number;
    nome?: string;
    AND?: Prisma.EnfaseWhereInput | Prisma.EnfaseWhereInput[];
    OR?: Prisma.EnfaseWhereInput[];
    NOT?: Prisma.EnfaseWhereInput | Prisma.EnfaseWhereInput[];
    componentes?: Prisma.CompoeListRelationFilter;
    acompanhamentos?: Prisma.AcompanhaListRelationFilter;
}, "idEnfase" | "nome">;
export type EnfaseOrderByWithAggregationInput = {
    idEnfase?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    _count?: Prisma.EnfaseCountOrderByAggregateInput;
    _avg?: Prisma.EnfaseAvgOrderByAggregateInput;
    _max?: Prisma.EnfaseMaxOrderByAggregateInput;
    _min?: Prisma.EnfaseMinOrderByAggregateInput;
    _sum?: Prisma.EnfaseSumOrderByAggregateInput;
};
export type EnfaseScalarWhereWithAggregatesInput = {
    AND?: Prisma.EnfaseScalarWhereWithAggregatesInput | Prisma.EnfaseScalarWhereWithAggregatesInput[];
    OR?: Prisma.EnfaseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EnfaseScalarWhereWithAggregatesInput | Prisma.EnfaseScalarWhereWithAggregatesInput[];
    idEnfase?: Prisma.IntWithAggregatesFilter<"Enfase"> | number;
    nome?: Prisma.StringWithAggregatesFilter<"Enfase"> | string;
};
export type EnfaseCreateInput = {
    nome: string;
    componentes?: Prisma.CompoeCreateNestedManyWithoutEnfaseInput;
    acompanhamentos?: Prisma.AcompanhaCreateNestedManyWithoutEnfaseInput;
};
export type EnfaseUncheckedCreateInput = {
    idEnfase?: number;
    nome: string;
    componentes?: Prisma.CompoeUncheckedCreateNestedManyWithoutEnfaseInput;
    acompanhamentos?: Prisma.AcompanhaUncheckedCreateNestedManyWithoutEnfaseInput;
};
export type EnfaseUpdateInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    componentes?: Prisma.CompoeUpdateManyWithoutEnfaseNestedInput;
    acompanhamentos?: Prisma.AcompanhaUpdateManyWithoutEnfaseNestedInput;
};
export type EnfaseUncheckedUpdateInput = {
    idEnfase?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    componentes?: Prisma.CompoeUncheckedUpdateManyWithoutEnfaseNestedInput;
    acompanhamentos?: Prisma.AcompanhaUncheckedUpdateManyWithoutEnfaseNestedInput;
};
export type EnfaseCreateManyInput = {
    idEnfase?: number;
    nome: string;
};
export type EnfaseUpdateManyMutationInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EnfaseUncheckedUpdateManyInput = {
    idEnfase?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EnfaseCountOrderByAggregateInput = {
    idEnfase?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
};
export type EnfaseAvgOrderByAggregateInput = {
    idEnfase?: Prisma.SortOrder;
};
export type EnfaseMaxOrderByAggregateInput = {
    idEnfase?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
};
export type EnfaseMinOrderByAggregateInput = {
    idEnfase?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
};
export type EnfaseSumOrderByAggregateInput = {
    idEnfase?: Prisma.SortOrder;
};
export type EnfaseScalarRelationFilter = {
    is?: Prisma.EnfaseWhereInput;
    isNot?: Prisma.EnfaseWhereInput;
};
export type EnfaseCreateNestedOneWithoutComponentesInput = {
    create?: Prisma.XOR<Prisma.EnfaseCreateWithoutComponentesInput, Prisma.EnfaseUncheckedCreateWithoutComponentesInput>;
    connectOrCreate?: Prisma.EnfaseCreateOrConnectWithoutComponentesInput;
    connect?: Prisma.EnfaseWhereUniqueInput;
};
export type EnfaseUpdateOneRequiredWithoutComponentesNestedInput = {
    create?: Prisma.XOR<Prisma.EnfaseCreateWithoutComponentesInput, Prisma.EnfaseUncheckedCreateWithoutComponentesInput>;
    connectOrCreate?: Prisma.EnfaseCreateOrConnectWithoutComponentesInput;
    upsert?: Prisma.EnfaseUpsertWithoutComponentesInput;
    connect?: Prisma.EnfaseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EnfaseUpdateToOneWithWhereWithoutComponentesInput, Prisma.EnfaseUpdateWithoutComponentesInput>, Prisma.EnfaseUncheckedUpdateWithoutComponentesInput>;
};
export type EnfaseCreateNestedOneWithoutAcompanhamentosInput = {
    create?: Prisma.XOR<Prisma.EnfaseCreateWithoutAcompanhamentosInput, Prisma.EnfaseUncheckedCreateWithoutAcompanhamentosInput>;
    connectOrCreate?: Prisma.EnfaseCreateOrConnectWithoutAcompanhamentosInput;
    connect?: Prisma.EnfaseWhereUniqueInput;
};
export type EnfaseUpdateOneRequiredWithoutAcompanhamentosNestedInput = {
    create?: Prisma.XOR<Prisma.EnfaseCreateWithoutAcompanhamentosInput, Prisma.EnfaseUncheckedCreateWithoutAcompanhamentosInput>;
    connectOrCreate?: Prisma.EnfaseCreateOrConnectWithoutAcompanhamentosInput;
    upsert?: Prisma.EnfaseUpsertWithoutAcompanhamentosInput;
    connect?: Prisma.EnfaseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EnfaseUpdateToOneWithWhereWithoutAcompanhamentosInput, Prisma.EnfaseUpdateWithoutAcompanhamentosInput>, Prisma.EnfaseUncheckedUpdateWithoutAcompanhamentosInput>;
};
export type EnfaseCreateWithoutComponentesInput = {
    nome: string;
    acompanhamentos?: Prisma.AcompanhaCreateNestedManyWithoutEnfaseInput;
};
export type EnfaseUncheckedCreateWithoutComponentesInput = {
    idEnfase?: number;
    nome: string;
    acompanhamentos?: Prisma.AcompanhaUncheckedCreateNestedManyWithoutEnfaseInput;
};
export type EnfaseCreateOrConnectWithoutComponentesInput = {
    where: Prisma.EnfaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.EnfaseCreateWithoutComponentesInput, Prisma.EnfaseUncheckedCreateWithoutComponentesInput>;
};
export type EnfaseUpsertWithoutComponentesInput = {
    update: Prisma.XOR<Prisma.EnfaseUpdateWithoutComponentesInput, Prisma.EnfaseUncheckedUpdateWithoutComponentesInput>;
    create: Prisma.XOR<Prisma.EnfaseCreateWithoutComponentesInput, Prisma.EnfaseUncheckedCreateWithoutComponentesInput>;
    where?: Prisma.EnfaseWhereInput;
};
export type EnfaseUpdateToOneWithWhereWithoutComponentesInput = {
    where?: Prisma.EnfaseWhereInput;
    data: Prisma.XOR<Prisma.EnfaseUpdateWithoutComponentesInput, Prisma.EnfaseUncheckedUpdateWithoutComponentesInput>;
};
export type EnfaseUpdateWithoutComponentesInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    acompanhamentos?: Prisma.AcompanhaUpdateManyWithoutEnfaseNestedInput;
};
export type EnfaseUncheckedUpdateWithoutComponentesInput = {
    idEnfase?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    acompanhamentos?: Prisma.AcompanhaUncheckedUpdateManyWithoutEnfaseNestedInput;
};
export type EnfaseCreateWithoutAcompanhamentosInput = {
    nome: string;
    componentes?: Prisma.CompoeCreateNestedManyWithoutEnfaseInput;
};
export type EnfaseUncheckedCreateWithoutAcompanhamentosInput = {
    idEnfase?: number;
    nome: string;
    componentes?: Prisma.CompoeUncheckedCreateNestedManyWithoutEnfaseInput;
};
export type EnfaseCreateOrConnectWithoutAcompanhamentosInput = {
    where: Prisma.EnfaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.EnfaseCreateWithoutAcompanhamentosInput, Prisma.EnfaseUncheckedCreateWithoutAcompanhamentosInput>;
};
export type EnfaseUpsertWithoutAcompanhamentosInput = {
    update: Prisma.XOR<Prisma.EnfaseUpdateWithoutAcompanhamentosInput, Prisma.EnfaseUncheckedUpdateWithoutAcompanhamentosInput>;
    create: Prisma.XOR<Prisma.EnfaseCreateWithoutAcompanhamentosInput, Prisma.EnfaseUncheckedCreateWithoutAcompanhamentosInput>;
    where?: Prisma.EnfaseWhereInput;
};
export type EnfaseUpdateToOneWithWhereWithoutAcompanhamentosInput = {
    where?: Prisma.EnfaseWhereInput;
    data: Prisma.XOR<Prisma.EnfaseUpdateWithoutAcompanhamentosInput, Prisma.EnfaseUncheckedUpdateWithoutAcompanhamentosInput>;
};
export type EnfaseUpdateWithoutAcompanhamentosInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    componentes?: Prisma.CompoeUpdateManyWithoutEnfaseNestedInput;
};
export type EnfaseUncheckedUpdateWithoutAcompanhamentosInput = {
    idEnfase?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    componentes?: Prisma.CompoeUncheckedUpdateManyWithoutEnfaseNestedInput;
};
export type EnfaseCountOutputType = {
    componentes: number;
    acompanhamentos: number;
};
export type EnfaseCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    componentes?: boolean | EnfaseCountOutputTypeCountComponentesArgs;
    acompanhamentos?: boolean | EnfaseCountOutputTypeCountAcompanhamentosArgs;
};
export type EnfaseCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnfaseCountOutputTypeSelect<ExtArgs> | null;
};
export type EnfaseCountOutputTypeCountComponentesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CompoeWhereInput;
};
export type EnfaseCountOutputTypeCountAcompanhamentosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AcompanhaWhereInput;
};
export type EnfaseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idEnfase?: boolean;
    nome?: boolean;
    componentes?: boolean | Prisma.Enfase$componentesArgs<ExtArgs>;
    acompanhamentos?: boolean | Prisma.Enfase$acompanhamentosArgs<ExtArgs>;
    _count?: boolean | Prisma.EnfaseCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["enfase"]>;
export type EnfaseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idEnfase?: boolean;
    nome?: boolean;
}, ExtArgs["result"]["enfase"]>;
export type EnfaseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idEnfase?: boolean;
    nome?: boolean;
}, ExtArgs["result"]["enfase"]>;
export type EnfaseSelectScalar = {
    idEnfase?: boolean;
    nome?: boolean;
};
export type EnfaseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"idEnfase" | "nome", ExtArgs["result"]["enfase"]>;
export type EnfaseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    componentes?: boolean | Prisma.Enfase$componentesArgs<ExtArgs>;
    acompanhamentos?: boolean | Prisma.Enfase$acompanhamentosArgs<ExtArgs>;
    _count?: boolean | Prisma.EnfaseCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EnfaseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type EnfaseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $EnfasePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Enfase";
    objects: {
        componentes: Prisma.$CompoePayload<ExtArgs>[];
        acompanhamentos: Prisma.$AcompanhaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        idEnfase: number;
        nome: string;
    }, ExtArgs["result"]["enfase"]>;
    composites: {};
};
export type EnfaseGetPayload<S extends boolean | null | undefined | EnfaseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EnfasePayload, S>;
export type EnfaseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EnfaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EnfaseCountAggregateInputType | true;
};
export interface EnfaseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Enfase'];
        meta: {
            name: 'Enfase';
        };
    };
    findUnique<T extends EnfaseFindUniqueArgs>(args: Prisma.SelectSubset<T, EnfaseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EnfaseClient<runtime.Types.Result.GetResult<Prisma.$EnfasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EnfaseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EnfaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EnfaseClient<runtime.Types.Result.GetResult<Prisma.$EnfasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EnfaseFindFirstArgs>(args?: Prisma.SelectSubset<T, EnfaseFindFirstArgs<ExtArgs>>): Prisma.Prisma__EnfaseClient<runtime.Types.Result.GetResult<Prisma.$EnfasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EnfaseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EnfaseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EnfaseClient<runtime.Types.Result.GetResult<Prisma.$EnfasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EnfaseFindManyArgs>(args?: Prisma.SelectSubset<T, EnfaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnfasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EnfaseCreateArgs>(args: Prisma.SelectSubset<T, EnfaseCreateArgs<ExtArgs>>): Prisma.Prisma__EnfaseClient<runtime.Types.Result.GetResult<Prisma.$EnfasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EnfaseCreateManyArgs>(args?: Prisma.SelectSubset<T, EnfaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EnfaseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EnfaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnfasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EnfaseDeleteArgs>(args: Prisma.SelectSubset<T, EnfaseDeleteArgs<ExtArgs>>): Prisma.Prisma__EnfaseClient<runtime.Types.Result.GetResult<Prisma.$EnfasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EnfaseUpdateArgs>(args: Prisma.SelectSubset<T, EnfaseUpdateArgs<ExtArgs>>): Prisma.Prisma__EnfaseClient<runtime.Types.Result.GetResult<Prisma.$EnfasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EnfaseDeleteManyArgs>(args?: Prisma.SelectSubset<T, EnfaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EnfaseUpdateManyArgs>(args: Prisma.SelectSubset<T, EnfaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EnfaseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EnfaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnfasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EnfaseUpsertArgs>(args: Prisma.SelectSubset<T, EnfaseUpsertArgs<ExtArgs>>): Prisma.Prisma__EnfaseClient<runtime.Types.Result.GetResult<Prisma.$EnfasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EnfaseCountArgs>(args?: Prisma.Subset<T, EnfaseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EnfaseCountAggregateOutputType> : number>;
    aggregate<T extends EnfaseAggregateArgs>(args: Prisma.Subset<T, EnfaseAggregateArgs>): Prisma.PrismaPromise<GetEnfaseAggregateType<T>>;
    groupBy<T extends EnfaseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EnfaseGroupByArgs['orderBy'];
    } : {
        orderBy?: EnfaseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EnfaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnfaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EnfaseFieldRefs;
}
export interface Prisma__EnfaseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    componentes<T extends Prisma.Enfase$componentesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Enfase$componentesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CompoePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    acompanhamentos<T extends Prisma.Enfase$acompanhamentosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Enfase$acompanhamentosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AcompanhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EnfaseFieldRefs {
    readonly idEnfase: Prisma.FieldRef<"Enfase", 'Int'>;
    readonly nome: Prisma.FieldRef<"Enfase", 'String'>;
}
export type EnfaseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnfaseSelect<ExtArgs> | null;
    omit?: Prisma.EnfaseOmit<ExtArgs> | null;
    include?: Prisma.EnfaseInclude<ExtArgs> | null;
    where: Prisma.EnfaseWhereUniqueInput;
};
export type EnfaseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnfaseSelect<ExtArgs> | null;
    omit?: Prisma.EnfaseOmit<ExtArgs> | null;
    include?: Prisma.EnfaseInclude<ExtArgs> | null;
    where: Prisma.EnfaseWhereUniqueInput;
};
export type EnfaseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnfaseSelect<ExtArgs> | null;
    omit?: Prisma.EnfaseOmit<ExtArgs> | null;
    include?: Prisma.EnfaseInclude<ExtArgs> | null;
    where?: Prisma.EnfaseWhereInput;
    orderBy?: Prisma.EnfaseOrderByWithRelationInput | Prisma.EnfaseOrderByWithRelationInput[];
    cursor?: Prisma.EnfaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnfaseScalarFieldEnum | Prisma.EnfaseScalarFieldEnum[];
};
export type EnfaseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnfaseSelect<ExtArgs> | null;
    omit?: Prisma.EnfaseOmit<ExtArgs> | null;
    include?: Prisma.EnfaseInclude<ExtArgs> | null;
    where?: Prisma.EnfaseWhereInput;
    orderBy?: Prisma.EnfaseOrderByWithRelationInput | Prisma.EnfaseOrderByWithRelationInput[];
    cursor?: Prisma.EnfaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnfaseScalarFieldEnum | Prisma.EnfaseScalarFieldEnum[];
};
export type EnfaseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnfaseSelect<ExtArgs> | null;
    omit?: Prisma.EnfaseOmit<ExtArgs> | null;
    include?: Prisma.EnfaseInclude<ExtArgs> | null;
    where?: Prisma.EnfaseWhereInput;
    orderBy?: Prisma.EnfaseOrderByWithRelationInput | Prisma.EnfaseOrderByWithRelationInput[];
    cursor?: Prisma.EnfaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnfaseScalarFieldEnum | Prisma.EnfaseScalarFieldEnum[];
};
export type EnfaseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnfaseSelect<ExtArgs> | null;
    omit?: Prisma.EnfaseOmit<ExtArgs> | null;
    include?: Prisma.EnfaseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EnfaseCreateInput, Prisma.EnfaseUncheckedCreateInput>;
};
export type EnfaseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EnfaseCreateManyInput | Prisma.EnfaseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EnfaseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnfaseSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EnfaseOmit<ExtArgs> | null;
    data: Prisma.EnfaseCreateManyInput | Prisma.EnfaseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EnfaseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnfaseSelect<ExtArgs> | null;
    omit?: Prisma.EnfaseOmit<ExtArgs> | null;
    include?: Prisma.EnfaseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EnfaseUpdateInput, Prisma.EnfaseUncheckedUpdateInput>;
    where: Prisma.EnfaseWhereUniqueInput;
};
export type EnfaseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EnfaseUpdateManyMutationInput, Prisma.EnfaseUncheckedUpdateManyInput>;
    where?: Prisma.EnfaseWhereInput;
    limit?: number;
};
export type EnfaseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnfaseSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EnfaseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EnfaseUpdateManyMutationInput, Prisma.EnfaseUncheckedUpdateManyInput>;
    where?: Prisma.EnfaseWhereInput;
    limit?: number;
};
export type EnfaseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnfaseSelect<ExtArgs> | null;
    omit?: Prisma.EnfaseOmit<ExtArgs> | null;
    include?: Prisma.EnfaseInclude<ExtArgs> | null;
    where: Prisma.EnfaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.EnfaseCreateInput, Prisma.EnfaseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EnfaseUpdateInput, Prisma.EnfaseUncheckedUpdateInput>;
};
export type EnfaseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnfaseSelect<ExtArgs> | null;
    omit?: Prisma.EnfaseOmit<ExtArgs> | null;
    include?: Prisma.EnfaseInclude<ExtArgs> | null;
    where: Prisma.EnfaseWhereUniqueInput;
};
export type EnfaseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnfaseWhereInput;
    limit?: number;
};
export type Enfase$componentesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Enfase$acompanhamentosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EnfaseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnfaseSelect<ExtArgs> | null;
    omit?: Prisma.EnfaseOmit<ExtArgs> | null;
    include?: Prisma.EnfaseInclude<ExtArgs> | null;
};
