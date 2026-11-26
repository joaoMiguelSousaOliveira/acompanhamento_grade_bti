import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CredencialModel = runtime.Types.Result.DefaultSelection<Prisma.$CredencialPayload>;
export type AggregateCredencial = {
    _count: CredencialCountAggregateOutputType | null;
    _min: CredencialMinAggregateOutputType | null;
    _max: CredencialMaxAggregateOutputType | null;
};
export type CredencialMinAggregateOutputType = {
    matricula: string | null;
    senhaHash: string | null;
    atualizadoEm: Date | null;
};
export type CredencialMaxAggregateOutputType = {
    matricula: string | null;
    senhaHash: string | null;
    atualizadoEm: Date | null;
};
export type CredencialCountAggregateOutputType = {
    matricula: number;
    senhaHash: number;
    atualizadoEm: number;
    _all: number;
};
export type CredencialMinAggregateInputType = {
    matricula?: true;
    senhaHash?: true;
    atualizadoEm?: true;
};
export type CredencialMaxAggregateInputType = {
    matricula?: true;
    senhaHash?: true;
    atualizadoEm?: true;
};
export type CredencialCountAggregateInputType = {
    matricula?: true;
    senhaHash?: true;
    atualizadoEm?: true;
    _all?: true;
};
export type CredencialAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CredencialWhereInput;
    orderBy?: Prisma.CredencialOrderByWithRelationInput | Prisma.CredencialOrderByWithRelationInput[];
    cursor?: Prisma.CredencialWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CredencialCountAggregateInputType;
    _min?: CredencialMinAggregateInputType;
    _max?: CredencialMaxAggregateInputType;
};
export type GetCredencialAggregateType<T extends CredencialAggregateArgs> = {
    [P in keyof T & keyof AggregateCredencial]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCredencial[P]> : Prisma.GetScalarType<T[P], AggregateCredencial[P]>;
};
export type CredencialGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CredencialWhereInput;
    orderBy?: Prisma.CredencialOrderByWithAggregationInput | Prisma.CredencialOrderByWithAggregationInput[];
    by: Prisma.CredencialScalarFieldEnum[] | Prisma.CredencialScalarFieldEnum;
    having?: Prisma.CredencialScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CredencialCountAggregateInputType | true;
    _min?: CredencialMinAggregateInputType;
    _max?: CredencialMaxAggregateInputType;
};
export type CredencialGroupByOutputType = {
    matricula: string;
    senhaHash: string;
    atualizadoEm: Date;
    _count: CredencialCountAggregateOutputType | null;
    _min: CredencialMinAggregateOutputType | null;
    _max: CredencialMaxAggregateOutputType | null;
};
export type GetCredencialGroupByPayload<T extends CredencialGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CredencialGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CredencialGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CredencialGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CredencialGroupByOutputType[P]>;
}>>;
export type CredencialWhereInput = {
    AND?: Prisma.CredencialWhereInput | Prisma.CredencialWhereInput[];
    OR?: Prisma.CredencialWhereInput[];
    NOT?: Prisma.CredencialWhereInput | Prisma.CredencialWhereInput[];
    matricula?: Prisma.StringFilter<"Credencial"> | string;
    senhaHash?: Prisma.StringFilter<"Credencial"> | string;
    atualizadoEm?: Prisma.DateTimeFilter<"Credencial"> | Date | string;
    aluno?: Prisma.XOR<Prisma.AlunoScalarRelationFilter, Prisma.AlunoWhereInput>;
};
export type CredencialOrderByWithRelationInput = {
    matricula?: Prisma.SortOrder;
    senhaHash?: Prisma.SortOrder;
    atualizadoEm?: Prisma.SortOrder;
    aluno?: Prisma.AlunoOrderByWithRelationInput;
};
export type CredencialWhereUniqueInput = Prisma.AtLeast<{
    matricula?: string;
    AND?: Prisma.CredencialWhereInput | Prisma.CredencialWhereInput[];
    OR?: Prisma.CredencialWhereInput[];
    NOT?: Prisma.CredencialWhereInput | Prisma.CredencialWhereInput[];
    senhaHash?: Prisma.StringFilter<"Credencial"> | string;
    atualizadoEm?: Prisma.DateTimeFilter<"Credencial"> | Date | string;
    aluno?: Prisma.XOR<Prisma.AlunoScalarRelationFilter, Prisma.AlunoWhereInput>;
}, "matricula">;
export type CredencialOrderByWithAggregationInput = {
    matricula?: Prisma.SortOrder;
    senhaHash?: Prisma.SortOrder;
    atualizadoEm?: Prisma.SortOrder;
    _count?: Prisma.CredencialCountOrderByAggregateInput;
    _max?: Prisma.CredencialMaxOrderByAggregateInput;
    _min?: Prisma.CredencialMinOrderByAggregateInput;
};
export type CredencialScalarWhereWithAggregatesInput = {
    AND?: Prisma.CredencialScalarWhereWithAggregatesInput | Prisma.CredencialScalarWhereWithAggregatesInput[];
    OR?: Prisma.CredencialScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CredencialScalarWhereWithAggregatesInput | Prisma.CredencialScalarWhereWithAggregatesInput[];
    matricula?: Prisma.StringWithAggregatesFilter<"Credencial"> | string;
    senhaHash?: Prisma.StringWithAggregatesFilter<"Credencial"> | string;
    atualizadoEm?: Prisma.DateTimeWithAggregatesFilter<"Credencial"> | Date | string;
};
export type CredencialCreateInput = {
    senhaHash: string;
    atualizadoEm?: Date | string;
    aluno: Prisma.AlunoCreateNestedOneWithoutCredencialInput;
};
export type CredencialUncheckedCreateInput = {
    matricula: string;
    senhaHash: string;
    atualizadoEm?: Date | string;
};
export type CredencialUpdateInput = {
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    atualizadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    aluno?: Prisma.AlunoUpdateOneRequiredWithoutCredencialNestedInput;
};
export type CredencialUncheckedUpdateInput = {
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    atualizadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CredencialCreateManyInput = {
    matricula: string;
    senhaHash: string;
    atualizadoEm?: Date | string;
};
export type CredencialUpdateManyMutationInput = {
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    atualizadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CredencialUncheckedUpdateManyInput = {
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    atualizadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CredencialNullableScalarRelationFilter = {
    is?: Prisma.CredencialWhereInput | null;
    isNot?: Prisma.CredencialWhereInput | null;
};
export type CredencialCountOrderByAggregateInput = {
    matricula?: Prisma.SortOrder;
    senhaHash?: Prisma.SortOrder;
    atualizadoEm?: Prisma.SortOrder;
};
export type CredencialMaxOrderByAggregateInput = {
    matricula?: Prisma.SortOrder;
    senhaHash?: Prisma.SortOrder;
    atualizadoEm?: Prisma.SortOrder;
};
export type CredencialMinOrderByAggregateInput = {
    matricula?: Prisma.SortOrder;
    senhaHash?: Prisma.SortOrder;
    atualizadoEm?: Prisma.SortOrder;
};
export type CredencialCreateNestedOneWithoutAlunoInput = {
    create?: Prisma.XOR<Prisma.CredencialCreateWithoutAlunoInput, Prisma.CredencialUncheckedCreateWithoutAlunoInput>;
    connectOrCreate?: Prisma.CredencialCreateOrConnectWithoutAlunoInput;
    connect?: Prisma.CredencialWhereUniqueInput;
};
export type CredencialUncheckedCreateNestedOneWithoutAlunoInput = {
    create?: Prisma.XOR<Prisma.CredencialCreateWithoutAlunoInput, Prisma.CredencialUncheckedCreateWithoutAlunoInput>;
    connectOrCreate?: Prisma.CredencialCreateOrConnectWithoutAlunoInput;
    connect?: Prisma.CredencialWhereUniqueInput;
};
export type CredencialUpdateOneWithoutAlunoNestedInput = {
    create?: Prisma.XOR<Prisma.CredencialCreateWithoutAlunoInput, Prisma.CredencialUncheckedCreateWithoutAlunoInput>;
    connectOrCreate?: Prisma.CredencialCreateOrConnectWithoutAlunoInput;
    upsert?: Prisma.CredencialUpsertWithoutAlunoInput;
    disconnect?: Prisma.CredencialWhereInput | boolean;
    delete?: Prisma.CredencialWhereInput | boolean;
    connect?: Prisma.CredencialWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CredencialUpdateToOneWithWhereWithoutAlunoInput, Prisma.CredencialUpdateWithoutAlunoInput>, Prisma.CredencialUncheckedUpdateWithoutAlunoInput>;
};
export type CredencialUncheckedUpdateOneWithoutAlunoNestedInput = {
    create?: Prisma.XOR<Prisma.CredencialCreateWithoutAlunoInput, Prisma.CredencialUncheckedCreateWithoutAlunoInput>;
    connectOrCreate?: Prisma.CredencialCreateOrConnectWithoutAlunoInput;
    upsert?: Prisma.CredencialUpsertWithoutAlunoInput;
    disconnect?: Prisma.CredencialWhereInput | boolean;
    delete?: Prisma.CredencialWhereInput | boolean;
    connect?: Prisma.CredencialWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CredencialUpdateToOneWithWhereWithoutAlunoInput, Prisma.CredencialUpdateWithoutAlunoInput>, Prisma.CredencialUncheckedUpdateWithoutAlunoInput>;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type CredencialCreateWithoutAlunoInput = {
    senhaHash: string;
    atualizadoEm?: Date | string;
};
export type CredencialUncheckedCreateWithoutAlunoInput = {
    senhaHash: string;
    atualizadoEm?: Date | string;
};
export type CredencialCreateOrConnectWithoutAlunoInput = {
    where: Prisma.CredencialWhereUniqueInput;
    create: Prisma.XOR<Prisma.CredencialCreateWithoutAlunoInput, Prisma.CredencialUncheckedCreateWithoutAlunoInput>;
};
export type CredencialUpsertWithoutAlunoInput = {
    update: Prisma.XOR<Prisma.CredencialUpdateWithoutAlunoInput, Prisma.CredencialUncheckedUpdateWithoutAlunoInput>;
    create: Prisma.XOR<Prisma.CredencialCreateWithoutAlunoInput, Prisma.CredencialUncheckedCreateWithoutAlunoInput>;
    where?: Prisma.CredencialWhereInput;
};
export type CredencialUpdateToOneWithWhereWithoutAlunoInput = {
    where?: Prisma.CredencialWhereInput;
    data: Prisma.XOR<Prisma.CredencialUpdateWithoutAlunoInput, Prisma.CredencialUncheckedUpdateWithoutAlunoInput>;
};
export type CredencialUpdateWithoutAlunoInput = {
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    atualizadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CredencialUncheckedUpdateWithoutAlunoInput = {
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    atualizadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CredencialSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    matricula?: boolean;
    senhaHash?: boolean;
    atualizadoEm?: boolean;
    aluno?: boolean | Prisma.AlunoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["credencial"]>;
export type CredencialSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    matricula?: boolean;
    senhaHash?: boolean;
    atualizadoEm?: boolean;
    aluno?: boolean | Prisma.AlunoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["credencial"]>;
export type CredencialSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    matricula?: boolean;
    senhaHash?: boolean;
    atualizadoEm?: boolean;
    aluno?: boolean | Prisma.AlunoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["credencial"]>;
export type CredencialSelectScalar = {
    matricula?: boolean;
    senhaHash?: boolean;
    atualizadoEm?: boolean;
};
export type CredencialOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"matricula" | "senhaHash" | "atualizadoEm", ExtArgs["result"]["credencial"]>;
export type CredencialInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    aluno?: boolean | Prisma.AlunoDefaultArgs<ExtArgs>;
};
export type CredencialIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    aluno?: boolean | Prisma.AlunoDefaultArgs<ExtArgs>;
};
export type CredencialIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    aluno?: boolean | Prisma.AlunoDefaultArgs<ExtArgs>;
};
export type $CredencialPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Credencial";
    objects: {
        aluno: Prisma.$AlunoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        matricula: string;
        senhaHash: string;
        atualizadoEm: Date;
    }, ExtArgs["result"]["credencial"]>;
    composites: {};
};
export type CredencialGetPayload<S extends boolean | null | undefined | CredencialDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CredencialPayload, S>;
export type CredencialCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CredencialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CredencialCountAggregateInputType | true;
};
export interface CredencialDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Credencial'];
        meta: {
            name: 'Credencial';
        };
    };
    findUnique<T extends CredencialFindUniqueArgs>(args: Prisma.SelectSubset<T, CredencialFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CredencialClient<runtime.Types.Result.GetResult<Prisma.$CredencialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CredencialFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CredencialFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CredencialClient<runtime.Types.Result.GetResult<Prisma.$CredencialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CredencialFindFirstArgs>(args?: Prisma.SelectSubset<T, CredencialFindFirstArgs<ExtArgs>>): Prisma.Prisma__CredencialClient<runtime.Types.Result.GetResult<Prisma.$CredencialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CredencialFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CredencialFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CredencialClient<runtime.Types.Result.GetResult<Prisma.$CredencialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CredencialFindManyArgs>(args?: Prisma.SelectSubset<T, CredencialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CredencialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CredencialCreateArgs>(args: Prisma.SelectSubset<T, CredencialCreateArgs<ExtArgs>>): Prisma.Prisma__CredencialClient<runtime.Types.Result.GetResult<Prisma.$CredencialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CredencialCreateManyArgs>(args?: Prisma.SelectSubset<T, CredencialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CredencialCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CredencialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CredencialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CredencialDeleteArgs>(args: Prisma.SelectSubset<T, CredencialDeleteArgs<ExtArgs>>): Prisma.Prisma__CredencialClient<runtime.Types.Result.GetResult<Prisma.$CredencialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CredencialUpdateArgs>(args: Prisma.SelectSubset<T, CredencialUpdateArgs<ExtArgs>>): Prisma.Prisma__CredencialClient<runtime.Types.Result.GetResult<Prisma.$CredencialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CredencialDeleteManyArgs>(args?: Prisma.SelectSubset<T, CredencialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CredencialUpdateManyArgs>(args: Prisma.SelectSubset<T, CredencialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CredencialUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CredencialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CredencialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CredencialUpsertArgs>(args: Prisma.SelectSubset<T, CredencialUpsertArgs<ExtArgs>>): Prisma.Prisma__CredencialClient<runtime.Types.Result.GetResult<Prisma.$CredencialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CredencialCountArgs>(args?: Prisma.Subset<T, CredencialCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CredencialCountAggregateOutputType> : number>;
    aggregate<T extends CredencialAggregateArgs>(args: Prisma.Subset<T, CredencialAggregateArgs>): Prisma.PrismaPromise<GetCredencialAggregateType<T>>;
    groupBy<T extends CredencialGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CredencialGroupByArgs['orderBy'];
    } : {
        orderBy?: CredencialGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CredencialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCredencialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CredencialFieldRefs;
}
export interface Prisma__CredencialClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    aluno<T extends Prisma.AlunoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AlunoDefaultArgs<ExtArgs>>): Prisma.Prisma__AlunoClient<runtime.Types.Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CredencialFieldRefs {
    readonly matricula: Prisma.FieldRef<"Credencial", 'String'>;
    readonly senhaHash: Prisma.FieldRef<"Credencial", 'String'>;
    readonly atualizadoEm: Prisma.FieldRef<"Credencial", 'DateTime'>;
}
export type CredencialFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredencialSelect<ExtArgs> | null;
    omit?: Prisma.CredencialOmit<ExtArgs> | null;
    include?: Prisma.CredencialInclude<ExtArgs> | null;
    where: Prisma.CredencialWhereUniqueInput;
};
export type CredencialFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredencialSelect<ExtArgs> | null;
    omit?: Prisma.CredencialOmit<ExtArgs> | null;
    include?: Prisma.CredencialInclude<ExtArgs> | null;
    where: Prisma.CredencialWhereUniqueInput;
};
export type CredencialFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredencialSelect<ExtArgs> | null;
    omit?: Prisma.CredencialOmit<ExtArgs> | null;
    include?: Prisma.CredencialInclude<ExtArgs> | null;
    where?: Prisma.CredencialWhereInput;
    orderBy?: Prisma.CredencialOrderByWithRelationInput | Prisma.CredencialOrderByWithRelationInput[];
    cursor?: Prisma.CredencialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CredencialScalarFieldEnum | Prisma.CredencialScalarFieldEnum[];
};
export type CredencialFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredencialSelect<ExtArgs> | null;
    omit?: Prisma.CredencialOmit<ExtArgs> | null;
    include?: Prisma.CredencialInclude<ExtArgs> | null;
    where?: Prisma.CredencialWhereInput;
    orderBy?: Prisma.CredencialOrderByWithRelationInput | Prisma.CredencialOrderByWithRelationInput[];
    cursor?: Prisma.CredencialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CredencialScalarFieldEnum | Prisma.CredencialScalarFieldEnum[];
};
export type CredencialFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredencialSelect<ExtArgs> | null;
    omit?: Prisma.CredencialOmit<ExtArgs> | null;
    include?: Prisma.CredencialInclude<ExtArgs> | null;
    where?: Prisma.CredencialWhereInput;
    orderBy?: Prisma.CredencialOrderByWithRelationInput | Prisma.CredencialOrderByWithRelationInput[];
    cursor?: Prisma.CredencialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CredencialScalarFieldEnum | Prisma.CredencialScalarFieldEnum[];
};
export type CredencialCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredencialSelect<ExtArgs> | null;
    omit?: Prisma.CredencialOmit<ExtArgs> | null;
    include?: Prisma.CredencialInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CredencialCreateInput, Prisma.CredencialUncheckedCreateInput>;
};
export type CredencialCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CredencialCreateManyInput | Prisma.CredencialCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CredencialCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredencialSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CredencialOmit<ExtArgs> | null;
    data: Prisma.CredencialCreateManyInput | Prisma.CredencialCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CredencialIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CredencialUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredencialSelect<ExtArgs> | null;
    omit?: Prisma.CredencialOmit<ExtArgs> | null;
    include?: Prisma.CredencialInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CredencialUpdateInput, Prisma.CredencialUncheckedUpdateInput>;
    where: Prisma.CredencialWhereUniqueInput;
};
export type CredencialUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CredencialUpdateManyMutationInput, Prisma.CredencialUncheckedUpdateManyInput>;
    where?: Prisma.CredencialWhereInput;
    limit?: number;
};
export type CredencialUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredencialSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CredencialOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CredencialUpdateManyMutationInput, Prisma.CredencialUncheckedUpdateManyInput>;
    where?: Prisma.CredencialWhereInput;
    limit?: number;
    include?: Prisma.CredencialIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CredencialUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredencialSelect<ExtArgs> | null;
    omit?: Prisma.CredencialOmit<ExtArgs> | null;
    include?: Prisma.CredencialInclude<ExtArgs> | null;
    where: Prisma.CredencialWhereUniqueInput;
    create: Prisma.XOR<Prisma.CredencialCreateInput, Prisma.CredencialUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CredencialUpdateInput, Prisma.CredencialUncheckedUpdateInput>;
};
export type CredencialDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredencialSelect<ExtArgs> | null;
    omit?: Prisma.CredencialOmit<ExtArgs> | null;
    include?: Prisma.CredencialInclude<ExtArgs> | null;
    where: Prisma.CredencialWhereUniqueInput;
};
export type CredencialDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CredencialWhereInput;
    limit?: number;
};
export type CredencialDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredencialSelect<ExtArgs> | null;
    omit?: Prisma.CredencialOmit<ExtArgs> | null;
    include?: Prisma.CredencialInclude<ExtArgs> | null;
};
