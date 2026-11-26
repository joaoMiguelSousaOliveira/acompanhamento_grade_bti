import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SessaoRefreshModel = runtime.Types.Result.DefaultSelection<Prisma.$SessaoRefreshPayload>;
export type AggregateSessaoRefresh = {
    _count: SessaoRefreshCountAggregateOutputType | null;
    _min: SessaoRefreshMinAggregateOutputType | null;
    _max: SessaoRefreshMaxAggregateOutputType | null;
};
export type SessaoRefreshMinAggregateOutputType = {
    id: string | null;
    matricula: string | null;
    tokenHash: string | null;
    criadoEm: Date | null;
    expiraEm: Date | null;
    revogadoEm: Date | null;
};
export type SessaoRefreshMaxAggregateOutputType = {
    id: string | null;
    matricula: string | null;
    tokenHash: string | null;
    criadoEm: Date | null;
    expiraEm: Date | null;
    revogadoEm: Date | null;
};
export type SessaoRefreshCountAggregateOutputType = {
    id: number;
    matricula: number;
    tokenHash: number;
    criadoEm: number;
    expiraEm: number;
    revogadoEm: number;
    _all: number;
};
export type SessaoRefreshMinAggregateInputType = {
    id?: true;
    matricula?: true;
    tokenHash?: true;
    criadoEm?: true;
    expiraEm?: true;
    revogadoEm?: true;
};
export type SessaoRefreshMaxAggregateInputType = {
    id?: true;
    matricula?: true;
    tokenHash?: true;
    criadoEm?: true;
    expiraEm?: true;
    revogadoEm?: true;
};
export type SessaoRefreshCountAggregateInputType = {
    id?: true;
    matricula?: true;
    tokenHash?: true;
    criadoEm?: true;
    expiraEm?: true;
    revogadoEm?: true;
    _all?: true;
};
export type SessaoRefreshAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessaoRefreshWhereInput;
    orderBy?: Prisma.SessaoRefreshOrderByWithRelationInput | Prisma.SessaoRefreshOrderByWithRelationInput[];
    cursor?: Prisma.SessaoRefreshWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SessaoRefreshCountAggregateInputType;
    _min?: SessaoRefreshMinAggregateInputType;
    _max?: SessaoRefreshMaxAggregateInputType;
};
export type GetSessaoRefreshAggregateType<T extends SessaoRefreshAggregateArgs> = {
    [P in keyof T & keyof AggregateSessaoRefresh]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSessaoRefresh[P]> : Prisma.GetScalarType<T[P], AggregateSessaoRefresh[P]>;
};
export type SessaoRefreshGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessaoRefreshWhereInput;
    orderBy?: Prisma.SessaoRefreshOrderByWithAggregationInput | Prisma.SessaoRefreshOrderByWithAggregationInput[];
    by: Prisma.SessaoRefreshScalarFieldEnum[] | Prisma.SessaoRefreshScalarFieldEnum;
    having?: Prisma.SessaoRefreshScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SessaoRefreshCountAggregateInputType | true;
    _min?: SessaoRefreshMinAggregateInputType;
    _max?: SessaoRefreshMaxAggregateInputType;
};
export type SessaoRefreshGroupByOutputType = {
    id: string;
    matricula: string;
    tokenHash: string;
    criadoEm: Date;
    expiraEm: Date;
    revogadoEm: Date | null;
    _count: SessaoRefreshCountAggregateOutputType | null;
    _min: SessaoRefreshMinAggregateOutputType | null;
    _max: SessaoRefreshMaxAggregateOutputType | null;
};
export type GetSessaoRefreshGroupByPayload<T extends SessaoRefreshGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SessaoRefreshGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SessaoRefreshGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SessaoRefreshGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SessaoRefreshGroupByOutputType[P]>;
}>>;
export type SessaoRefreshWhereInput = {
    AND?: Prisma.SessaoRefreshWhereInput | Prisma.SessaoRefreshWhereInput[];
    OR?: Prisma.SessaoRefreshWhereInput[];
    NOT?: Prisma.SessaoRefreshWhereInput | Prisma.SessaoRefreshWhereInput[];
    id?: Prisma.UuidFilter<"SessaoRefresh"> | string;
    matricula?: Prisma.StringFilter<"SessaoRefresh"> | string;
    tokenHash?: Prisma.StringFilter<"SessaoRefresh"> | string;
    criadoEm?: Prisma.DateTimeFilter<"SessaoRefresh"> | Date | string;
    expiraEm?: Prisma.DateTimeFilter<"SessaoRefresh"> | Date | string;
    revogadoEm?: Prisma.DateTimeNullableFilter<"SessaoRefresh"> | Date | string | null;
    aluno?: Prisma.XOR<Prisma.AlunoScalarRelationFilter, Prisma.AlunoWhereInput>;
};
export type SessaoRefreshOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
    expiraEm?: Prisma.SortOrder;
    revogadoEm?: Prisma.SortOrderInput | Prisma.SortOrder;
    aluno?: Prisma.AlunoOrderByWithRelationInput;
};
export type SessaoRefreshWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tokenHash?: string;
    AND?: Prisma.SessaoRefreshWhereInput | Prisma.SessaoRefreshWhereInput[];
    OR?: Prisma.SessaoRefreshWhereInput[];
    NOT?: Prisma.SessaoRefreshWhereInput | Prisma.SessaoRefreshWhereInput[];
    matricula?: Prisma.StringFilter<"SessaoRefresh"> | string;
    criadoEm?: Prisma.DateTimeFilter<"SessaoRefresh"> | Date | string;
    expiraEm?: Prisma.DateTimeFilter<"SessaoRefresh"> | Date | string;
    revogadoEm?: Prisma.DateTimeNullableFilter<"SessaoRefresh"> | Date | string | null;
    aluno?: Prisma.XOR<Prisma.AlunoScalarRelationFilter, Prisma.AlunoWhereInput>;
}, "id" | "tokenHash">;
export type SessaoRefreshOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
    expiraEm?: Prisma.SortOrder;
    revogadoEm?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.SessaoRefreshCountOrderByAggregateInput;
    _max?: Prisma.SessaoRefreshMaxOrderByAggregateInput;
    _min?: Prisma.SessaoRefreshMinOrderByAggregateInput;
};
export type SessaoRefreshScalarWhereWithAggregatesInput = {
    AND?: Prisma.SessaoRefreshScalarWhereWithAggregatesInput | Prisma.SessaoRefreshScalarWhereWithAggregatesInput[];
    OR?: Prisma.SessaoRefreshScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SessaoRefreshScalarWhereWithAggregatesInput | Prisma.SessaoRefreshScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"SessaoRefresh"> | string;
    matricula?: Prisma.StringWithAggregatesFilter<"SessaoRefresh"> | string;
    tokenHash?: Prisma.StringWithAggregatesFilter<"SessaoRefresh"> | string;
    criadoEm?: Prisma.DateTimeWithAggregatesFilter<"SessaoRefresh"> | Date | string;
    expiraEm?: Prisma.DateTimeWithAggregatesFilter<"SessaoRefresh"> | Date | string;
    revogadoEm?: Prisma.DateTimeNullableWithAggregatesFilter<"SessaoRefresh"> | Date | string | null;
};
export type SessaoRefreshCreateInput = {
    id?: string;
    tokenHash: string;
    criadoEm?: Date | string;
    expiraEm: Date | string;
    revogadoEm?: Date | string | null;
    aluno: Prisma.AlunoCreateNestedOneWithoutSessoesInput;
};
export type SessaoRefreshUncheckedCreateInput = {
    id?: string;
    matricula: string;
    tokenHash: string;
    criadoEm?: Date | string;
    expiraEm: Date | string;
    revogadoEm?: Date | string | null;
};
export type SessaoRefreshUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiraEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revogadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    aluno?: Prisma.AlunoUpdateOneRequiredWithoutSessoesNestedInput;
};
export type SessaoRefreshUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiraEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revogadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type SessaoRefreshCreateManyInput = {
    id?: string;
    matricula: string;
    tokenHash: string;
    criadoEm?: Date | string;
    expiraEm: Date | string;
    revogadoEm?: Date | string | null;
};
export type SessaoRefreshUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiraEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revogadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type SessaoRefreshUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiraEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revogadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type SessaoRefreshListRelationFilter = {
    every?: Prisma.SessaoRefreshWhereInput;
    some?: Prisma.SessaoRefreshWhereInput;
    none?: Prisma.SessaoRefreshWhereInput;
};
export type SessaoRefreshOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SessaoRefreshCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
    expiraEm?: Prisma.SortOrder;
    revogadoEm?: Prisma.SortOrder;
};
export type SessaoRefreshMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
    expiraEm?: Prisma.SortOrder;
    revogadoEm?: Prisma.SortOrder;
};
export type SessaoRefreshMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
    expiraEm?: Prisma.SortOrder;
    revogadoEm?: Prisma.SortOrder;
};
export type SessaoRefreshCreateNestedManyWithoutAlunoInput = {
    create?: Prisma.XOR<Prisma.SessaoRefreshCreateWithoutAlunoInput, Prisma.SessaoRefreshUncheckedCreateWithoutAlunoInput> | Prisma.SessaoRefreshCreateWithoutAlunoInput[] | Prisma.SessaoRefreshUncheckedCreateWithoutAlunoInput[];
    connectOrCreate?: Prisma.SessaoRefreshCreateOrConnectWithoutAlunoInput | Prisma.SessaoRefreshCreateOrConnectWithoutAlunoInput[];
    createMany?: Prisma.SessaoRefreshCreateManyAlunoInputEnvelope;
    connect?: Prisma.SessaoRefreshWhereUniqueInput | Prisma.SessaoRefreshWhereUniqueInput[];
};
export type SessaoRefreshUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: Prisma.XOR<Prisma.SessaoRefreshCreateWithoutAlunoInput, Prisma.SessaoRefreshUncheckedCreateWithoutAlunoInput> | Prisma.SessaoRefreshCreateWithoutAlunoInput[] | Prisma.SessaoRefreshUncheckedCreateWithoutAlunoInput[];
    connectOrCreate?: Prisma.SessaoRefreshCreateOrConnectWithoutAlunoInput | Prisma.SessaoRefreshCreateOrConnectWithoutAlunoInput[];
    createMany?: Prisma.SessaoRefreshCreateManyAlunoInputEnvelope;
    connect?: Prisma.SessaoRefreshWhereUniqueInput | Prisma.SessaoRefreshWhereUniqueInput[];
};
export type SessaoRefreshUpdateManyWithoutAlunoNestedInput = {
    create?: Prisma.XOR<Prisma.SessaoRefreshCreateWithoutAlunoInput, Prisma.SessaoRefreshUncheckedCreateWithoutAlunoInput> | Prisma.SessaoRefreshCreateWithoutAlunoInput[] | Prisma.SessaoRefreshUncheckedCreateWithoutAlunoInput[];
    connectOrCreate?: Prisma.SessaoRefreshCreateOrConnectWithoutAlunoInput | Prisma.SessaoRefreshCreateOrConnectWithoutAlunoInput[];
    upsert?: Prisma.SessaoRefreshUpsertWithWhereUniqueWithoutAlunoInput | Prisma.SessaoRefreshUpsertWithWhereUniqueWithoutAlunoInput[];
    createMany?: Prisma.SessaoRefreshCreateManyAlunoInputEnvelope;
    set?: Prisma.SessaoRefreshWhereUniqueInput | Prisma.SessaoRefreshWhereUniqueInput[];
    disconnect?: Prisma.SessaoRefreshWhereUniqueInput | Prisma.SessaoRefreshWhereUniqueInput[];
    delete?: Prisma.SessaoRefreshWhereUniqueInput | Prisma.SessaoRefreshWhereUniqueInput[];
    connect?: Prisma.SessaoRefreshWhereUniqueInput | Prisma.SessaoRefreshWhereUniqueInput[];
    update?: Prisma.SessaoRefreshUpdateWithWhereUniqueWithoutAlunoInput | Prisma.SessaoRefreshUpdateWithWhereUniqueWithoutAlunoInput[];
    updateMany?: Prisma.SessaoRefreshUpdateManyWithWhereWithoutAlunoInput | Prisma.SessaoRefreshUpdateManyWithWhereWithoutAlunoInput[];
    deleteMany?: Prisma.SessaoRefreshScalarWhereInput | Prisma.SessaoRefreshScalarWhereInput[];
};
export type SessaoRefreshUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: Prisma.XOR<Prisma.SessaoRefreshCreateWithoutAlunoInput, Prisma.SessaoRefreshUncheckedCreateWithoutAlunoInput> | Prisma.SessaoRefreshCreateWithoutAlunoInput[] | Prisma.SessaoRefreshUncheckedCreateWithoutAlunoInput[];
    connectOrCreate?: Prisma.SessaoRefreshCreateOrConnectWithoutAlunoInput | Prisma.SessaoRefreshCreateOrConnectWithoutAlunoInput[];
    upsert?: Prisma.SessaoRefreshUpsertWithWhereUniqueWithoutAlunoInput | Prisma.SessaoRefreshUpsertWithWhereUniqueWithoutAlunoInput[];
    createMany?: Prisma.SessaoRefreshCreateManyAlunoInputEnvelope;
    set?: Prisma.SessaoRefreshWhereUniqueInput | Prisma.SessaoRefreshWhereUniqueInput[];
    disconnect?: Prisma.SessaoRefreshWhereUniqueInput | Prisma.SessaoRefreshWhereUniqueInput[];
    delete?: Prisma.SessaoRefreshWhereUniqueInput | Prisma.SessaoRefreshWhereUniqueInput[];
    connect?: Prisma.SessaoRefreshWhereUniqueInput | Prisma.SessaoRefreshWhereUniqueInput[];
    update?: Prisma.SessaoRefreshUpdateWithWhereUniqueWithoutAlunoInput | Prisma.SessaoRefreshUpdateWithWhereUniqueWithoutAlunoInput[];
    updateMany?: Prisma.SessaoRefreshUpdateManyWithWhereWithoutAlunoInput | Prisma.SessaoRefreshUpdateManyWithWhereWithoutAlunoInput[];
    deleteMany?: Prisma.SessaoRefreshScalarWhereInput | Prisma.SessaoRefreshScalarWhereInput[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type SessaoRefreshCreateWithoutAlunoInput = {
    id?: string;
    tokenHash: string;
    criadoEm?: Date | string;
    expiraEm: Date | string;
    revogadoEm?: Date | string | null;
};
export type SessaoRefreshUncheckedCreateWithoutAlunoInput = {
    id?: string;
    tokenHash: string;
    criadoEm?: Date | string;
    expiraEm: Date | string;
    revogadoEm?: Date | string | null;
};
export type SessaoRefreshCreateOrConnectWithoutAlunoInput = {
    where: Prisma.SessaoRefreshWhereUniqueInput;
    create: Prisma.XOR<Prisma.SessaoRefreshCreateWithoutAlunoInput, Prisma.SessaoRefreshUncheckedCreateWithoutAlunoInput>;
};
export type SessaoRefreshCreateManyAlunoInputEnvelope = {
    data: Prisma.SessaoRefreshCreateManyAlunoInput | Prisma.SessaoRefreshCreateManyAlunoInput[];
    skipDuplicates?: boolean;
};
export type SessaoRefreshUpsertWithWhereUniqueWithoutAlunoInput = {
    where: Prisma.SessaoRefreshWhereUniqueInput;
    update: Prisma.XOR<Prisma.SessaoRefreshUpdateWithoutAlunoInput, Prisma.SessaoRefreshUncheckedUpdateWithoutAlunoInput>;
    create: Prisma.XOR<Prisma.SessaoRefreshCreateWithoutAlunoInput, Prisma.SessaoRefreshUncheckedCreateWithoutAlunoInput>;
};
export type SessaoRefreshUpdateWithWhereUniqueWithoutAlunoInput = {
    where: Prisma.SessaoRefreshWhereUniqueInput;
    data: Prisma.XOR<Prisma.SessaoRefreshUpdateWithoutAlunoInput, Prisma.SessaoRefreshUncheckedUpdateWithoutAlunoInput>;
};
export type SessaoRefreshUpdateManyWithWhereWithoutAlunoInput = {
    where: Prisma.SessaoRefreshScalarWhereInput;
    data: Prisma.XOR<Prisma.SessaoRefreshUpdateManyMutationInput, Prisma.SessaoRefreshUncheckedUpdateManyWithoutAlunoInput>;
};
export type SessaoRefreshScalarWhereInput = {
    AND?: Prisma.SessaoRefreshScalarWhereInput | Prisma.SessaoRefreshScalarWhereInput[];
    OR?: Prisma.SessaoRefreshScalarWhereInput[];
    NOT?: Prisma.SessaoRefreshScalarWhereInput | Prisma.SessaoRefreshScalarWhereInput[];
    id?: Prisma.UuidFilter<"SessaoRefresh"> | string;
    matricula?: Prisma.StringFilter<"SessaoRefresh"> | string;
    tokenHash?: Prisma.StringFilter<"SessaoRefresh"> | string;
    criadoEm?: Prisma.DateTimeFilter<"SessaoRefresh"> | Date | string;
    expiraEm?: Prisma.DateTimeFilter<"SessaoRefresh"> | Date | string;
    revogadoEm?: Prisma.DateTimeNullableFilter<"SessaoRefresh"> | Date | string | null;
};
export type SessaoRefreshCreateManyAlunoInput = {
    id?: string;
    tokenHash: string;
    criadoEm?: Date | string;
    expiraEm: Date | string;
    revogadoEm?: Date | string | null;
};
export type SessaoRefreshUpdateWithoutAlunoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiraEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revogadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type SessaoRefreshUncheckedUpdateWithoutAlunoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiraEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revogadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type SessaoRefreshUncheckedUpdateManyWithoutAlunoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiraEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revogadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type SessaoRefreshSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    matricula?: boolean;
    tokenHash?: boolean;
    criadoEm?: boolean;
    expiraEm?: boolean;
    revogadoEm?: boolean;
    aluno?: boolean | Prisma.AlunoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sessaoRefresh"]>;
export type SessaoRefreshSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    matricula?: boolean;
    tokenHash?: boolean;
    criadoEm?: boolean;
    expiraEm?: boolean;
    revogadoEm?: boolean;
    aluno?: boolean | Prisma.AlunoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sessaoRefresh"]>;
export type SessaoRefreshSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    matricula?: boolean;
    tokenHash?: boolean;
    criadoEm?: boolean;
    expiraEm?: boolean;
    revogadoEm?: boolean;
    aluno?: boolean | Prisma.AlunoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sessaoRefresh"]>;
export type SessaoRefreshSelectScalar = {
    id?: boolean;
    matricula?: boolean;
    tokenHash?: boolean;
    criadoEm?: boolean;
    expiraEm?: boolean;
    revogadoEm?: boolean;
};
export type SessaoRefreshOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "matricula" | "tokenHash" | "criadoEm" | "expiraEm" | "revogadoEm", ExtArgs["result"]["sessaoRefresh"]>;
export type SessaoRefreshInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    aluno?: boolean | Prisma.AlunoDefaultArgs<ExtArgs>;
};
export type SessaoRefreshIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    aluno?: boolean | Prisma.AlunoDefaultArgs<ExtArgs>;
};
export type SessaoRefreshIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    aluno?: boolean | Prisma.AlunoDefaultArgs<ExtArgs>;
};
export type $SessaoRefreshPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SessaoRefresh";
    objects: {
        aluno: Prisma.$AlunoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        matricula: string;
        tokenHash: string;
        criadoEm: Date;
        expiraEm: Date;
        revogadoEm: Date | null;
    }, ExtArgs["result"]["sessaoRefresh"]>;
    composites: {};
};
export type SessaoRefreshGetPayload<S extends boolean | null | undefined | SessaoRefreshDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SessaoRefreshPayload, S>;
export type SessaoRefreshCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SessaoRefreshFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SessaoRefreshCountAggregateInputType | true;
};
export interface SessaoRefreshDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SessaoRefresh'];
        meta: {
            name: 'SessaoRefresh';
        };
    };
    findUnique<T extends SessaoRefreshFindUniqueArgs>(args: Prisma.SelectSubset<T, SessaoRefreshFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SessaoRefreshClient<runtime.Types.Result.GetResult<Prisma.$SessaoRefreshPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SessaoRefreshFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SessaoRefreshFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SessaoRefreshClient<runtime.Types.Result.GetResult<Prisma.$SessaoRefreshPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SessaoRefreshFindFirstArgs>(args?: Prisma.SelectSubset<T, SessaoRefreshFindFirstArgs<ExtArgs>>): Prisma.Prisma__SessaoRefreshClient<runtime.Types.Result.GetResult<Prisma.$SessaoRefreshPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SessaoRefreshFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SessaoRefreshFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SessaoRefreshClient<runtime.Types.Result.GetResult<Prisma.$SessaoRefreshPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SessaoRefreshFindManyArgs>(args?: Prisma.SelectSubset<T, SessaoRefreshFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessaoRefreshPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SessaoRefreshCreateArgs>(args: Prisma.SelectSubset<T, SessaoRefreshCreateArgs<ExtArgs>>): Prisma.Prisma__SessaoRefreshClient<runtime.Types.Result.GetResult<Prisma.$SessaoRefreshPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SessaoRefreshCreateManyArgs>(args?: Prisma.SelectSubset<T, SessaoRefreshCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SessaoRefreshCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SessaoRefreshCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessaoRefreshPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SessaoRefreshDeleteArgs>(args: Prisma.SelectSubset<T, SessaoRefreshDeleteArgs<ExtArgs>>): Prisma.Prisma__SessaoRefreshClient<runtime.Types.Result.GetResult<Prisma.$SessaoRefreshPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SessaoRefreshUpdateArgs>(args: Prisma.SelectSubset<T, SessaoRefreshUpdateArgs<ExtArgs>>): Prisma.Prisma__SessaoRefreshClient<runtime.Types.Result.GetResult<Prisma.$SessaoRefreshPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SessaoRefreshDeleteManyArgs>(args?: Prisma.SelectSubset<T, SessaoRefreshDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SessaoRefreshUpdateManyArgs>(args: Prisma.SelectSubset<T, SessaoRefreshUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SessaoRefreshUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SessaoRefreshUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessaoRefreshPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SessaoRefreshUpsertArgs>(args: Prisma.SelectSubset<T, SessaoRefreshUpsertArgs<ExtArgs>>): Prisma.Prisma__SessaoRefreshClient<runtime.Types.Result.GetResult<Prisma.$SessaoRefreshPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SessaoRefreshCountArgs>(args?: Prisma.Subset<T, SessaoRefreshCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SessaoRefreshCountAggregateOutputType> : number>;
    aggregate<T extends SessaoRefreshAggregateArgs>(args: Prisma.Subset<T, SessaoRefreshAggregateArgs>): Prisma.PrismaPromise<GetSessaoRefreshAggregateType<T>>;
    groupBy<T extends SessaoRefreshGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SessaoRefreshGroupByArgs['orderBy'];
    } : {
        orderBy?: SessaoRefreshGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SessaoRefreshGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessaoRefreshGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SessaoRefreshFieldRefs;
}
export interface Prisma__SessaoRefreshClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    aluno<T extends Prisma.AlunoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AlunoDefaultArgs<ExtArgs>>): Prisma.Prisma__AlunoClient<runtime.Types.Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SessaoRefreshFieldRefs {
    readonly id: Prisma.FieldRef<"SessaoRefresh", 'String'>;
    readonly matricula: Prisma.FieldRef<"SessaoRefresh", 'String'>;
    readonly tokenHash: Prisma.FieldRef<"SessaoRefresh", 'String'>;
    readonly criadoEm: Prisma.FieldRef<"SessaoRefresh", 'DateTime'>;
    readonly expiraEm: Prisma.FieldRef<"SessaoRefresh", 'DateTime'>;
    readonly revogadoEm: Prisma.FieldRef<"SessaoRefresh", 'DateTime'>;
}
export type SessaoRefreshFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessaoRefreshSelect<ExtArgs> | null;
    omit?: Prisma.SessaoRefreshOmit<ExtArgs> | null;
    include?: Prisma.SessaoRefreshInclude<ExtArgs> | null;
    where: Prisma.SessaoRefreshWhereUniqueInput;
};
export type SessaoRefreshFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessaoRefreshSelect<ExtArgs> | null;
    omit?: Prisma.SessaoRefreshOmit<ExtArgs> | null;
    include?: Prisma.SessaoRefreshInclude<ExtArgs> | null;
    where: Prisma.SessaoRefreshWhereUniqueInput;
};
export type SessaoRefreshFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SessaoRefreshFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SessaoRefreshFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SessaoRefreshCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessaoRefreshSelect<ExtArgs> | null;
    omit?: Prisma.SessaoRefreshOmit<ExtArgs> | null;
    include?: Prisma.SessaoRefreshInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SessaoRefreshCreateInput, Prisma.SessaoRefreshUncheckedCreateInput>;
};
export type SessaoRefreshCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SessaoRefreshCreateManyInput | Prisma.SessaoRefreshCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SessaoRefreshCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessaoRefreshSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SessaoRefreshOmit<ExtArgs> | null;
    data: Prisma.SessaoRefreshCreateManyInput | Prisma.SessaoRefreshCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SessaoRefreshIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SessaoRefreshUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessaoRefreshSelect<ExtArgs> | null;
    omit?: Prisma.SessaoRefreshOmit<ExtArgs> | null;
    include?: Prisma.SessaoRefreshInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SessaoRefreshUpdateInput, Prisma.SessaoRefreshUncheckedUpdateInput>;
    where: Prisma.SessaoRefreshWhereUniqueInput;
};
export type SessaoRefreshUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SessaoRefreshUpdateManyMutationInput, Prisma.SessaoRefreshUncheckedUpdateManyInput>;
    where?: Prisma.SessaoRefreshWhereInput;
    limit?: number;
};
export type SessaoRefreshUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessaoRefreshSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SessaoRefreshOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SessaoRefreshUpdateManyMutationInput, Prisma.SessaoRefreshUncheckedUpdateManyInput>;
    where?: Prisma.SessaoRefreshWhereInput;
    limit?: number;
    include?: Prisma.SessaoRefreshIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SessaoRefreshUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessaoRefreshSelect<ExtArgs> | null;
    omit?: Prisma.SessaoRefreshOmit<ExtArgs> | null;
    include?: Prisma.SessaoRefreshInclude<ExtArgs> | null;
    where: Prisma.SessaoRefreshWhereUniqueInput;
    create: Prisma.XOR<Prisma.SessaoRefreshCreateInput, Prisma.SessaoRefreshUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SessaoRefreshUpdateInput, Prisma.SessaoRefreshUncheckedUpdateInput>;
};
export type SessaoRefreshDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessaoRefreshSelect<ExtArgs> | null;
    omit?: Prisma.SessaoRefreshOmit<ExtArgs> | null;
    include?: Prisma.SessaoRefreshInclude<ExtArgs> | null;
    where: Prisma.SessaoRefreshWhereUniqueInput;
};
export type SessaoRefreshDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessaoRefreshWhereInput;
    limit?: number;
};
export type SessaoRefreshDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessaoRefreshSelect<ExtArgs> | null;
    omit?: Prisma.SessaoRefreshOmit<ExtArgs> | null;
    include?: Prisma.SessaoRefreshInclude<ExtArgs> | null;
};
