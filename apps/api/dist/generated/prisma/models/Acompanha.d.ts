import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AcompanhaModel = runtime.Types.Result.DefaultSelection<Prisma.$AcompanhaPayload>;
export type AggregateAcompanha = {
    _count: AcompanhaCountAggregateOutputType | null;
    _avg: AcompanhaAvgAggregateOutputType | null;
    _sum: AcompanhaSumAggregateOutputType | null;
    _min: AcompanhaMinAggregateOutputType | null;
    _max: AcompanhaMaxAggregateOutputType | null;
};
export type AcompanhaAvgAggregateOutputType = {
    idEnfase: number | null;
};
export type AcompanhaSumAggregateOutputType = {
    idEnfase: number | null;
};
export type AcompanhaMinAggregateOutputType = {
    matricula: string | null;
    idEnfase: number | null;
    dataInicio: Date | null;
};
export type AcompanhaMaxAggregateOutputType = {
    matricula: string | null;
    idEnfase: number | null;
    dataInicio: Date | null;
};
export type AcompanhaCountAggregateOutputType = {
    matricula: number;
    idEnfase: number;
    dataInicio: number;
    _all: number;
};
export type AcompanhaAvgAggregateInputType = {
    idEnfase?: true;
};
export type AcompanhaSumAggregateInputType = {
    idEnfase?: true;
};
export type AcompanhaMinAggregateInputType = {
    matricula?: true;
    idEnfase?: true;
    dataInicio?: true;
};
export type AcompanhaMaxAggregateInputType = {
    matricula?: true;
    idEnfase?: true;
    dataInicio?: true;
};
export type AcompanhaCountAggregateInputType = {
    matricula?: true;
    idEnfase?: true;
    dataInicio?: true;
    _all?: true;
};
export type AcompanhaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AcompanhaWhereInput;
    orderBy?: Prisma.AcompanhaOrderByWithRelationInput | Prisma.AcompanhaOrderByWithRelationInput[];
    cursor?: Prisma.AcompanhaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AcompanhaCountAggregateInputType;
    _avg?: AcompanhaAvgAggregateInputType;
    _sum?: AcompanhaSumAggregateInputType;
    _min?: AcompanhaMinAggregateInputType;
    _max?: AcompanhaMaxAggregateInputType;
};
export type GetAcompanhaAggregateType<T extends AcompanhaAggregateArgs> = {
    [P in keyof T & keyof AggregateAcompanha]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAcompanha[P]> : Prisma.GetScalarType<T[P], AggregateAcompanha[P]>;
};
export type AcompanhaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AcompanhaWhereInput;
    orderBy?: Prisma.AcompanhaOrderByWithAggregationInput | Prisma.AcompanhaOrderByWithAggregationInput[];
    by: Prisma.AcompanhaScalarFieldEnum[] | Prisma.AcompanhaScalarFieldEnum;
    having?: Prisma.AcompanhaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AcompanhaCountAggregateInputType | true;
    _avg?: AcompanhaAvgAggregateInputType;
    _sum?: AcompanhaSumAggregateInputType;
    _min?: AcompanhaMinAggregateInputType;
    _max?: AcompanhaMaxAggregateInputType;
};
export type AcompanhaGroupByOutputType = {
    matricula: string;
    idEnfase: number;
    dataInicio: Date;
    _count: AcompanhaCountAggregateOutputType | null;
    _avg: AcompanhaAvgAggregateOutputType | null;
    _sum: AcompanhaSumAggregateOutputType | null;
    _min: AcompanhaMinAggregateOutputType | null;
    _max: AcompanhaMaxAggregateOutputType | null;
};
export type GetAcompanhaGroupByPayload<T extends AcompanhaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AcompanhaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AcompanhaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AcompanhaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AcompanhaGroupByOutputType[P]>;
}>>;
export type AcompanhaWhereInput = {
    AND?: Prisma.AcompanhaWhereInput | Prisma.AcompanhaWhereInput[];
    OR?: Prisma.AcompanhaWhereInput[];
    NOT?: Prisma.AcompanhaWhereInput | Prisma.AcompanhaWhereInput[];
    matricula?: Prisma.StringFilter<"Acompanha"> | string;
    idEnfase?: Prisma.IntFilter<"Acompanha"> | number;
    dataInicio?: Prisma.DateTimeFilter<"Acompanha"> | Date | string;
    aluno?: Prisma.XOR<Prisma.AlunoScalarRelationFilter, Prisma.AlunoWhereInput>;
    enfase?: Prisma.XOR<Prisma.EnfaseScalarRelationFilter, Prisma.EnfaseWhereInput>;
};
export type AcompanhaOrderByWithRelationInput = {
    matricula?: Prisma.SortOrder;
    idEnfase?: Prisma.SortOrder;
    dataInicio?: Prisma.SortOrder;
    aluno?: Prisma.AlunoOrderByWithRelationInput;
    enfase?: Prisma.EnfaseOrderByWithRelationInput;
};
export type AcompanhaWhereUniqueInput = Prisma.AtLeast<{
    matricula_idEnfase?: Prisma.AcompanhaMatriculaIdEnfaseCompoundUniqueInput;
    AND?: Prisma.AcompanhaWhereInput | Prisma.AcompanhaWhereInput[];
    OR?: Prisma.AcompanhaWhereInput[];
    NOT?: Prisma.AcompanhaWhereInput | Prisma.AcompanhaWhereInput[];
    matricula?: Prisma.StringFilter<"Acompanha"> | string;
    idEnfase?: Prisma.IntFilter<"Acompanha"> | number;
    dataInicio?: Prisma.DateTimeFilter<"Acompanha"> | Date | string;
    aluno?: Prisma.XOR<Prisma.AlunoScalarRelationFilter, Prisma.AlunoWhereInput>;
    enfase?: Prisma.XOR<Prisma.EnfaseScalarRelationFilter, Prisma.EnfaseWhereInput>;
}, "matricula_idEnfase">;
export type AcompanhaOrderByWithAggregationInput = {
    matricula?: Prisma.SortOrder;
    idEnfase?: Prisma.SortOrder;
    dataInicio?: Prisma.SortOrder;
    _count?: Prisma.AcompanhaCountOrderByAggregateInput;
    _avg?: Prisma.AcompanhaAvgOrderByAggregateInput;
    _max?: Prisma.AcompanhaMaxOrderByAggregateInput;
    _min?: Prisma.AcompanhaMinOrderByAggregateInput;
    _sum?: Prisma.AcompanhaSumOrderByAggregateInput;
};
export type AcompanhaScalarWhereWithAggregatesInput = {
    AND?: Prisma.AcompanhaScalarWhereWithAggregatesInput | Prisma.AcompanhaScalarWhereWithAggregatesInput[];
    OR?: Prisma.AcompanhaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AcompanhaScalarWhereWithAggregatesInput | Prisma.AcompanhaScalarWhereWithAggregatesInput[];
    matricula?: Prisma.StringWithAggregatesFilter<"Acompanha"> | string;
    idEnfase?: Prisma.IntWithAggregatesFilter<"Acompanha"> | number;
    dataInicio?: Prisma.DateTimeWithAggregatesFilter<"Acompanha"> | Date | string;
};
export type AcompanhaCreateInput = {
    dataInicio?: Date | string;
    aluno: Prisma.AlunoCreateNestedOneWithoutAcompanhamentosInput;
    enfase: Prisma.EnfaseCreateNestedOneWithoutAcompanhamentosInput;
};
export type AcompanhaUncheckedCreateInput = {
    matricula: string;
    idEnfase: number;
    dataInicio?: Date | string;
};
export type AcompanhaUpdateInput = {
    dataInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    aluno?: Prisma.AlunoUpdateOneRequiredWithoutAcompanhamentosNestedInput;
    enfase?: Prisma.EnfaseUpdateOneRequiredWithoutAcompanhamentosNestedInput;
};
export type AcompanhaUncheckedUpdateInput = {
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    idEnfase?: Prisma.IntFieldUpdateOperationsInput | number;
    dataInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AcompanhaCreateManyInput = {
    matricula: string;
    idEnfase: number;
    dataInicio?: Date | string;
};
export type AcompanhaUpdateManyMutationInput = {
    dataInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AcompanhaUncheckedUpdateManyInput = {
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    idEnfase?: Prisma.IntFieldUpdateOperationsInput | number;
    dataInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AcompanhaListRelationFilter = {
    every?: Prisma.AcompanhaWhereInput;
    some?: Prisma.AcompanhaWhereInput;
    none?: Prisma.AcompanhaWhereInput;
};
export type AcompanhaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AcompanhaMatriculaIdEnfaseCompoundUniqueInput = {
    matricula: string;
    idEnfase: number;
};
export type AcompanhaCountOrderByAggregateInput = {
    matricula?: Prisma.SortOrder;
    idEnfase?: Prisma.SortOrder;
    dataInicio?: Prisma.SortOrder;
};
export type AcompanhaAvgOrderByAggregateInput = {
    idEnfase?: Prisma.SortOrder;
};
export type AcompanhaMaxOrderByAggregateInput = {
    matricula?: Prisma.SortOrder;
    idEnfase?: Prisma.SortOrder;
    dataInicio?: Prisma.SortOrder;
};
export type AcompanhaMinOrderByAggregateInput = {
    matricula?: Prisma.SortOrder;
    idEnfase?: Prisma.SortOrder;
    dataInicio?: Prisma.SortOrder;
};
export type AcompanhaSumOrderByAggregateInput = {
    idEnfase?: Prisma.SortOrder;
};
export type AcompanhaCreateNestedManyWithoutAlunoInput = {
    create?: Prisma.XOR<Prisma.AcompanhaCreateWithoutAlunoInput, Prisma.AcompanhaUncheckedCreateWithoutAlunoInput> | Prisma.AcompanhaCreateWithoutAlunoInput[] | Prisma.AcompanhaUncheckedCreateWithoutAlunoInput[];
    connectOrCreate?: Prisma.AcompanhaCreateOrConnectWithoutAlunoInput | Prisma.AcompanhaCreateOrConnectWithoutAlunoInput[];
    createMany?: Prisma.AcompanhaCreateManyAlunoInputEnvelope;
    connect?: Prisma.AcompanhaWhereUniqueInput | Prisma.AcompanhaWhereUniqueInput[];
};
export type AcompanhaUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: Prisma.XOR<Prisma.AcompanhaCreateWithoutAlunoInput, Prisma.AcompanhaUncheckedCreateWithoutAlunoInput> | Prisma.AcompanhaCreateWithoutAlunoInput[] | Prisma.AcompanhaUncheckedCreateWithoutAlunoInput[];
    connectOrCreate?: Prisma.AcompanhaCreateOrConnectWithoutAlunoInput | Prisma.AcompanhaCreateOrConnectWithoutAlunoInput[];
    createMany?: Prisma.AcompanhaCreateManyAlunoInputEnvelope;
    connect?: Prisma.AcompanhaWhereUniqueInput | Prisma.AcompanhaWhereUniqueInput[];
};
export type AcompanhaUpdateManyWithoutAlunoNestedInput = {
    create?: Prisma.XOR<Prisma.AcompanhaCreateWithoutAlunoInput, Prisma.AcompanhaUncheckedCreateWithoutAlunoInput> | Prisma.AcompanhaCreateWithoutAlunoInput[] | Prisma.AcompanhaUncheckedCreateWithoutAlunoInput[];
    connectOrCreate?: Prisma.AcompanhaCreateOrConnectWithoutAlunoInput | Prisma.AcompanhaCreateOrConnectWithoutAlunoInput[];
    upsert?: Prisma.AcompanhaUpsertWithWhereUniqueWithoutAlunoInput | Prisma.AcompanhaUpsertWithWhereUniqueWithoutAlunoInput[];
    createMany?: Prisma.AcompanhaCreateManyAlunoInputEnvelope;
    set?: Prisma.AcompanhaWhereUniqueInput | Prisma.AcompanhaWhereUniqueInput[];
    disconnect?: Prisma.AcompanhaWhereUniqueInput | Prisma.AcompanhaWhereUniqueInput[];
    delete?: Prisma.AcompanhaWhereUniqueInput | Prisma.AcompanhaWhereUniqueInput[];
    connect?: Prisma.AcompanhaWhereUniqueInput | Prisma.AcompanhaWhereUniqueInput[];
    update?: Prisma.AcompanhaUpdateWithWhereUniqueWithoutAlunoInput | Prisma.AcompanhaUpdateWithWhereUniqueWithoutAlunoInput[];
    updateMany?: Prisma.AcompanhaUpdateManyWithWhereWithoutAlunoInput | Prisma.AcompanhaUpdateManyWithWhereWithoutAlunoInput[];
    deleteMany?: Prisma.AcompanhaScalarWhereInput | Prisma.AcompanhaScalarWhereInput[];
};
export type AcompanhaUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: Prisma.XOR<Prisma.AcompanhaCreateWithoutAlunoInput, Prisma.AcompanhaUncheckedCreateWithoutAlunoInput> | Prisma.AcompanhaCreateWithoutAlunoInput[] | Prisma.AcompanhaUncheckedCreateWithoutAlunoInput[];
    connectOrCreate?: Prisma.AcompanhaCreateOrConnectWithoutAlunoInput | Prisma.AcompanhaCreateOrConnectWithoutAlunoInput[];
    upsert?: Prisma.AcompanhaUpsertWithWhereUniqueWithoutAlunoInput | Prisma.AcompanhaUpsertWithWhereUniqueWithoutAlunoInput[];
    createMany?: Prisma.AcompanhaCreateManyAlunoInputEnvelope;
    set?: Prisma.AcompanhaWhereUniqueInput | Prisma.AcompanhaWhereUniqueInput[];
    disconnect?: Prisma.AcompanhaWhereUniqueInput | Prisma.AcompanhaWhereUniqueInput[];
    delete?: Prisma.AcompanhaWhereUniqueInput | Prisma.AcompanhaWhereUniqueInput[];
    connect?: Prisma.AcompanhaWhereUniqueInput | Prisma.AcompanhaWhereUniqueInput[];
    update?: Prisma.AcompanhaUpdateWithWhereUniqueWithoutAlunoInput | Prisma.AcompanhaUpdateWithWhereUniqueWithoutAlunoInput[];
    updateMany?: Prisma.AcompanhaUpdateManyWithWhereWithoutAlunoInput | Prisma.AcompanhaUpdateManyWithWhereWithoutAlunoInput[];
    deleteMany?: Prisma.AcompanhaScalarWhereInput | Prisma.AcompanhaScalarWhereInput[];
};
export type AcompanhaCreateNestedManyWithoutEnfaseInput = {
    create?: Prisma.XOR<Prisma.AcompanhaCreateWithoutEnfaseInput, Prisma.AcompanhaUncheckedCreateWithoutEnfaseInput> | Prisma.AcompanhaCreateWithoutEnfaseInput[] | Prisma.AcompanhaUncheckedCreateWithoutEnfaseInput[];
    connectOrCreate?: Prisma.AcompanhaCreateOrConnectWithoutEnfaseInput | Prisma.AcompanhaCreateOrConnectWithoutEnfaseInput[];
    createMany?: Prisma.AcompanhaCreateManyEnfaseInputEnvelope;
    connect?: Prisma.AcompanhaWhereUniqueInput | Prisma.AcompanhaWhereUniqueInput[];
};
export type AcompanhaUncheckedCreateNestedManyWithoutEnfaseInput = {
    create?: Prisma.XOR<Prisma.AcompanhaCreateWithoutEnfaseInput, Prisma.AcompanhaUncheckedCreateWithoutEnfaseInput> | Prisma.AcompanhaCreateWithoutEnfaseInput[] | Prisma.AcompanhaUncheckedCreateWithoutEnfaseInput[];
    connectOrCreate?: Prisma.AcompanhaCreateOrConnectWithoutEnfaseInput | Prisma.AcompanhaCreateOrConnectWithoutEnfaseInput[];
    createMany?: Prisma.AcompanhaCreateManyEnfaseInputEnvelope;
    connect?: Prisma.AcompanhaWhereUniqueInput | Prisma.AcompanhaWhereUniqueInput[];
};
export type AcompanhaUpdateManyWithoutEnfaseNestedInput = {
    create?: Prisma.XOR<Prisma.AcompanhaCreateWithoutEnfaseInput, Prisma.AcompanhaUncheckedCreateWithoutEnfaseInput> | Prisma.AcompanhaCreateWithoutEnfaseInput[] | Prisma.AcompanhaUncheckedCreateWithoutEnfaseInput[];
    connectOrCreate?: Prisma.AcompanhaCreateOrConnectWithoutEnfaseInput | Prisma.AcompanhaCreateOrConnectWithoutEnfaseInput[];
    upsert?: Prisma.AcompanhaUpsertWithWhereUniqueWithoutEnfaseInput | Prisma.AcompanhaUpsertWithWhereUniqueWithoutEnfaseInput[];
    createMany?: Prisma.AcompanhaCreateManyEnfaseInputEnvelope;
    set?: Prisma.AcompanhaWhereUniqueInput | Prisma.AcompanhaWhereUniqueInput[];
    disconnect?: Prisma.AcompanhaWhereUniqueInput | Prisma.AcompanhaWhereUniqueInput[];
    delete?: Prisma.AcompanhaWhereUniqueInput | Prisma.AcompanhaWhereUniqueInput[];
    connect?: Prisma.AcompanhaWhereUniqueInput | Prisma.AcompanhaWhereUniqueInput[];
    update?: Prisma.AcompanhaUpdateWithWhereUniqueWithoutEnfaseInput | Prisma.AcompanhaUpdateWithWhereUniqueWithoutEnfaseInput[];
    updateMany?: Prisma.AcompanhaUpdateManyWithWhereWithoutEnfaseInput | Prisma.AcompanhaUpdateManyWithWhereWithoutEnfaseInput[];
    deleteMany?: Prisma.AcompanhaScalarWhereInput | Prisma.AcompanhaScalarWhereInput[];
};
export type AcompanhaUncheckedUpdateManyWithoutEnfaseNestedInput = {
    create?: Prisma.XOR<Prisma.AcompanhaCreateWithoutEnfaseInput, Prisma.AcompanhaUncheckedCreateWithoutEnfaseInput> | Prisma.AcompanhaCreateWithoutEnfaseInput[] | Prisma.AcompanhaUncheckedCreateWithoutEnfaseInput[];
    connectOrCreate?: Prisma.AcompanhaCreateOrConnectWithoutEnfaseInput | Prisma.AcompanhaCreateOrConnectWithoutEnfaseInput[];
    upsert?: Prisma.AcompanhaUpsertWithWhereUniqueWithoutEnfaseInput | Prisma.AcompanhaUpsertWithWhereUniqueWithoutEnfaseInput[];
    createMany?: Prisma.AcompanhaCreateManyEnfaseInputEnvelope;
    set?: Prisma.AcompanhaWhereUniqueInput | Prisma.AcompanhaWhereUniqueInput[];
    disconnect?: Prisma.AcompanhaWhereUniqueInput | Prisma.AcompanhaWhereUniqueInput[];
    delete?: Prisma.AcompanhaWhereUniqueInput | Prisma.AcompanhaWhereUniqueInput[];
    connect?: Prisma.AcompanhaWhereUniqueInput | Prisma.AcompanhaWhereUniqueInput[];
    update?: Prisma.AcompanhaUpdateWithWhereUniqueWithoutEnfaseInput | Prisma.AcompanhaUpdateWithWhereUniqueWithoutEnfaseInput[];
    updateMany?: Prisma.AcompanhaUpdateManyWithWhereWithoutEnfaseInput | Prisma.AcompanhaUpdateManyWithWhereWithoutEnfaseInput[];
    deleteMany?: Prisma.AcompanhaScalarWhereInput | Prisma.AcompanhaScalarWhereInput[];
};
export type AcompanhaCreateWithoutAlunoInput = {
    dataInicio?: Date | string;
    enfase: Prisma.EnfaseCreateNestedOneWithoutAcompanhamentosInput;
};
export type AcompanhaUncheckedCreateWithoutAlunoInput = {
    idEnfase: number;
    dataInicio?: Date | string;
};
export type AcompanhaCreateOrConnectWithoutAlunoInput = {
    where: Prisma.AcompanhaWhereUniqueInput;
    create: Prisma.XOR<Prisma.AcompanhaCreateWithoutAlunoInput, Prisma.AcompanhaUncheckedCreateWithoutAlunoInput>;
};
export type AcompanhaCreateManyAlunoInputEnvelope = {
    data: Prisma.AcompanhaCreateManyAlunoInput | Prisma.AcompanhaCreateManyAlunoInput[];
    skipDuplicates?: boolean;
};
export type AcompanhaUpsertWithWhereUniqueWithoutAlunoInput = {
    where: Prisma.AcompanhaWhereUniqueInput;
    update: Prisma.XOR<Prisma.AcompanhaUpdateWithoutAlunoInput, Prisma.AcompanhaUncheckedUpdateWithoutAlunoInput>;
    create: Prisma.XOR<Prisma.AcompanhaCreateWithoutAlunoInput, Prisma.AcompanhaUncheckedCreateWithoutAlunoInput>;
};
export type AcompanhaUpdateWithWhereUniqueWithoutAlunoInput = {
    where: Prisma.AcompanhaWhereUniqueInput;
    data: Prisma.XOR<Prisma.AcompanhaUpdateWithoutAlunoInput, Prisma.AcompanhaUncheckedUpdateWithoutAlunoInput>;
};
export type AcompanhaUpdateManyWithWhereWithoutAlunoInput = {
    where: Prisma.AcompanhaScalarWhereInput;
    data: Prisma.XOR<Prisma.AcompanhaUpdateManyMutationInput, Prisma.AcompanhaUncheckedUpdateManyWithoutAlunoInput>;
};
export type AcompanhaScalarWhereInput = {
    AND?: Prisma.AcompanhaScalarWhereInput | Prisma.AcompanhaScalarWhereInput[];
    OR?: Prisma.AcompanhaScalarWhereInput[];
    NOT?: Prisma.AcompanhaScalarWhereInput | Prisma.AcompanhaScalarWhereInput[];
    matricula?: Prisma.StringFilter<"Acompanha"> | string;
    idEnfase?: Prisma.IntFilter<"Acompanha"> | number;
    dataInicio?: Prisma.DateTimeFilter<"Acompanha"> | Date | string;
};
export type AcompanhaCreateWithoutEnfaseInput = {
    dataInicio?: Date | string;
    aluno: Prisma.AlunoCreateNestedOneWithoutAcompanhamentosInput;
};
export type AcompanhaUncheckedCreateWithoutEnfaseInput = {
    matricula: string;
    dataInicio?: Date | string;
};
export type AcompanhaCreateOrConnectWithoutEnfaseInput = {
    where: Prisma.AcompanhaWhereUniqueInput;
    create: Prisma.XOR<Prisma.AcompanhaCreateWithoutEnfaseInput, Prisma.AcompanhaUncheckedCreateWithoutEnfaseInput>;
};
export type AcompanhaCreateManyEnfaseInputEnvelope = {
    data: Prisma.AcompanhaCreateManyEnfaseInput | Prisma.AcompanhaCreateManyEnfaseInput[];
    skipDuplicates?: boolean;
};
export type AcompanhaUpsertWithWhereUniqueWithoutEnfaseInput = {
    where: Prisma.AcompanhaWhereUniqueInput;
    update: Prisma.XOR<Prisma.AcompanhaUpdateWithoutEnfaseInput, Prisma.AcompanhaUncheckedUpdateWithoutEnfaseInput>;
    create: Prisma.XOR<Prisma.AcompanhaCreateWithoutEnfaseInput, Prisma.AcompanhaUncheckedCreateWithoutEnfaseInput>;
};
export type AcompanhaUpdateWithWhereUniqueWithoutEnfaseInput = {
    where: Prisma.AcompanhaWhereUniqueInput;
    data: Prisma.XOR<Prisma.AcompanhaUpdateWithoutEnfaseInput, Prisma.AcompanhaUncheckedUpdateWithoutEnfaseInput>;
};
export type AcompanhaUpdateManyWithWhereWithoutEnfaseInput = {
    where: Prisma.AcompanhaScalarWhereInput;
    data: Prisma.XOR<Prisma.AcompanhaUpdateManyMutationInput, Prisma.AcompanhaUncheckedUpdateManyWithoutEnfaseInput>;
};
export type AcompanhaCreateManyAlunoInput = {
    idEnfase: number;
    dataInicio?: Date | string;
};
export type AcompanhaUpdateWithoutAlunoInput = {
    dataInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    enfase?: Prisma.EnfaseUpdateOneRequiredWithoutAcompanhamentosNestedInput;
};
export type AcompanhaUncheckedUpdateWithoutAlunoInput = {
    idEnfase?: Prisma.IntFieldUpdateOperationsInput | number;
    dataInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AcompanhaUncheckedUpdateManyWithoutAlunoInput = {
    idEnfase?: Prisma.IntFieldUpdateOperationsInput | number;
    dataInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AcompanhaCreateManyEnfaseInput = {
    matricula: string;
    dataInicio?: Date | string;
};
export type AcompanhaUpdateWithoutEnfaseInput = {
    dataInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    aluno?: Prisma.AlunoUpdateOneRequiredWithoutAcompanhamentosNestedInput;
};
export type AcompanhaUncheckedUpdateWithoutEnfaseInput = {
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    dataInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AcompanhaUncheckedUpdateManyWithoutEnfaseInput = {
    matricula?: Prisma.StringFieldUpdateOperationsInput | string;
    dataInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AcompanhaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    matricula?: boolean;
    idEnfase?: boolean;
    dataInicio?: boolean;
    aluno?: boolean | Prisma.AlunoDefaultArgs<ExtArgs>;
    enfase?: boolean | Prisma.EnfaseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["acompanha"]>;
export type AcompanhaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    matricula?: boolean;
    idEnfase?: boolean;
    dataInicio?: boolean;
    aluno?: boolean | Prisma.AlunoDefaultArgs<ExtArgs>;
    enfase?: boolean | Prisma.EnfaseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["acompanha"]>;
export type AcompanhaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    matricula?: boolean;
    idEnfase?: boolean;
    dataInicio?: boolean;
    aluno?: boolean | Prisma.AlunoDefaultArgs<ExtArgs>;
    enfase?: boolean | Prisma.EnfaseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["acompanha"]>;
export type AcompanhaSelectScalar = {
    matricula?: boolean;
    idEnfase?: boolean;
    dataInicio?: boolean;
};
export type AcompanhaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"matricula" | "idEnfase" | "dataInicio", ExtArgs["result"]["acompanha"]>;
export type AcompanhaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    aluno?: boolean | Prisma.AlunoDefaultArgs<ExtArgs>;
    enfase?: boolean | Prisma.EnfaseDefaultArgs<ExtArgs>;
};
export type AcompanhaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    aluno?: boolean | Prisma.AlunoDefaultArgs<ExtArgs>;
    enfase?: boolean | Prisma.EnfaseDefaultArgs<ExtArgs>;
};
export type AcompanhaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    aluno?: boolean | Prisma.AlunoDefaultArgs<ExtArgs>;
    enfase?: boolean | Prisma.EnfaseDefaultArgs<ExtArgs>;
};
export type $AcompanhaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Acompanha";
    objects: {
        aluno: Prisma.$AlunoPayload<ExtArgs>;
        enfase: Prisma.$EnfasePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        matricula: string;
        idEnfase: number;
        dataInicio: Date;
    }, ExtArgs["result"]["acompanha"]>;
    composites: {};
};
export type AcompanhaGetPayload<S extends boolean | null | undefined | AcompanhaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AcompanhaPayload, S>;
export type AcompanhaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AcompanhaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AcompanhaCountAggregateInputType | true;
};
export interface AcompanhaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Acompanha'];
        meta: {
            name: 'Acompanha';
        };
    };
    findUnique<T extends AcompanhaFindUniqueArgs>(args: Prisma.SelectSubset<T, AcompanhaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AcompanhaClient<runtime.Types.Result.GetResult<Prisma.$AcompanhaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AcompanhaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AcompanhaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AcompanhaClient<runtime.Types.Result.GetResult<Prisma.$AcompanhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AcompanhaFindFirstArgs>(args?: Prisma.SelectSubset<T, AcompanhaFindFirstArgs<ExtArgs>>): Prisma.Prisma__AcompanhaClient<runtime.Types.Result.GetResult<Prisma.$AcompanhaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AcompanhaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AcompanhaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AcompanhaClient<runtime.Types.Result.GetResult<Prisma.$AcompanhaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AcompanhaFindManyArgs>(args?: Prisma.SelectSubset<T, AcompanhaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AcompanhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AcompanhaCreateArgs>(args: Prisma.SelectSubset<T, AcompanhaCreateArgs<ExtArgs>>): Prisma.Prisma__AcompanhaClient<runtime.Types.Result.GetResult<Prisma.$AcompanhaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AcompanhaCreateManyArgs>(args?: Prisma.SelectSubset<T, AcompanhaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AcompanhaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AcompanhaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AcompanhaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AcompanhaDeleteArgs>(args: Prisma.SelectSubset<T, AcompanhaDeleteArgs<ExtArgs>>): Prisma.Prisma__AcompanhaClient<runtime.Types.Result.GetResult<Prisma.$AcompanhaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AcompanhaUpdateArgs>(args: Prisma.SelectSubset<T, AcompanhaUpdateArgs<ExtArgs>>): Prisma.Prisma__AcompanhaClient<runtime.Types.Result.GetResult<Prisma.$AcompanhaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AcompanhaDeleteManyArgs>(args?: Prisma.SelectSubset<T, AcompanhaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AcompanhaUpdateManyArgs>(args: Prisma.SelectSubset<T, AcompanhaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AcompanhaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AcompanhaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AcompanhaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AcompanhaUpsertArgs>(args: Prisma.SelectSubset<T, AcompanhaUpsertArgs<ExtArgs>>): Prisma.Prisma__AcompanhaClient<runtime.Types.Result.GetResult<Prisma.$AcompanhaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AcompanhaCountArgs>(args?: Prisma.Subset<T, AcompanhaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AcompanhaCountAggregateOutputType> : number>;
    aggregate<T extends AcompanhaAggregateArgs>(args: Prisma.Subset<T, AcompanhaAggregateArgs>): Prisma.PrismaPromise<GetAcompanhaAggregateType<T>>;
    groupBy<T extends AcompanhaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AcompanhaGroupByArgs['orderBy'];
    } : {
        orderBy?: AcompanhaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AcompanhaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcompanhaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AcompanhaFieldRefs;
}
export interface Prisma__AcompanhaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    aluno<T extends Prisma.AlunoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AlunoDefaultArgs<ExtArgs>>): Prisma.Prisma__AlunoClient<runtime.Types.Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    enfase<T extends Prisma.EnfaseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EnfaseDefaultArgs<ExtArgs>>): Prisma.Prisma__EnfaseClient<runtime.Types.Result.GetResult<Prisma.$EnfasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AcompanhaFieldRefs {
    readonly matricula: Prisma.FieldRef<"Acompanha", 'String'>;
    readonly idEnfase: Prisma.FieldRef<"Acompanha", 'Int'>;
    readonly dataInicio: Prisma.FieldRef<"Acompanha", 'DateTime'>;
}
export type AcompanhaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AcompanhaSelect<ExtArgs> | null;
    omit?: Prisma.AcompanhaOmit<ExtArgs> | null;
    include?: Prisma.AcompanhaInclude<ExtArgs> | null;
    where: Prisma.AcompanhaWhereUniqueInput;
};
export type AcompanhaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AcompanhaSelect<ExtArgs> | null;
    omit?: Prisma.AcompanhaOmit<ExtArgs> | null;
    include?: Prisma.AcompanhaInclude<ExtArgs> | null;
    where: Prisma.AcompanhaWhereUniqueInput;
};
export type AcompanhaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AcompanhaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AcompanhaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AcompanhaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AcompanhaSelect<ExtArgs> | null;
    omit?: Prisma.AcompanhaOmit<ExtArgs> | null;
    include?: Prisma.AcompanhaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AcompanhaCreateInput, Prisma.AcompanhaUncheckedCreateInput>;
};
export type AcompanhaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AcompanhaCreateManyInput | Prisma.AcompanhaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AcompanhaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AcompanhaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AcompanhaOmit<ExtArgs> | null;
    data: Prisma.AcompanhaCreateManyInput | Prisma.AcompanhaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AcompanhaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AcompanhaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AcompanhaSelect<ExtArgs> | null;
    omit?: Prisma.AcompanhaOmit<ExtArgs> | null;
    include?: Prisma.AcompanhaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AcompanhaUpdateInput, Prisma.AcompanhaUncheckedUpdateInput>;
    where: Prisma.AcompanhaWhereUniqueInput;
};
export type AcompanhaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AcompanhaUpdateManyMutationInput, Prisma.AcompanhaUncheckedUpdateManyInput>;
    where?: Prisma.AcompanhaWhereInput;
    limit?: number;
};
export type AcompanhaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AcompanhaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AcompanhaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AcompanhaUpdateManyMutationInput, Prisma.AcompanhaUncheckedUpdateManyInput>;
    where?: Prisma.AcompanhaWhereInput;
    limit?: number;
    include?: Prisma.AcompanhaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AcompanhaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AcompanhaSelect<ExtArgs> | null;
    omit?: Prisma.AcompanhaOmit<ExtArgs> | null;
    include?: Prisma.AcompanhaInclude<ExtArgs> | null;
    where: Prisma.AcompanhaWhereUniqueInput;
    create: Prisma.XOR<Prisma.AcompanhaCreateInput, Prisma.AcompanhaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AcompanhaUpdateInput, Prisma.AcompanhaUncheckedUpdateInput>;
};
export type AcompanhaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AcompanhaSelect<ExtArgs> | null;
    omit?: Prisma.AcompanhaOmit<ExtArgs> | null;
    include?: Prisma.AcompanhaInclude<ExtArgs> | null;
    where: Prisma.AcompanhaWhereUniqueInput;
};
export type AcompanhaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AcompanhaWhereInput;
    limit?: number;
};
export type AcompanhaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AcompanhaSelect<ExtArgs> | null;
    omit?: Prisma.AcompanhaOmit<ExtArgs> | null;
    include?: Prisma.AcompanhaInclude<ExtArgs> | null;
};
