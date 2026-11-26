import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EstruturaCurricularModel = runtime.Types.Result.DefaultSelection<Prisma.$EstruturaCurricularPayload>;
export type AggregateEstruturaCurricular = {
    _count: EstruturaCurricularCountAggregateOutputType | null;
    _avg: EstruturaCurricularAvgAggregateOutputType | null;
    _sum: EstruturaCurricularSumAggregateOutputType | null;
    _min: EstruturaCurricularMinAggregateOutputType | null;
    _max: EstruturaCurricularMaxAggregateOutputType | null;
};
export type EstruturaCurricularAvgAggregateOutputType = {
    idEstrutura: number | null;
    anoEntradaVigor: number | null;
    semestreConclusaoIdeal: number | null;
    chTotalMinima: number | null;
    chOptativasMinima: number | null;
};
export type EstruturaCurricularSumAggregateOutputType = {
    idEstrutura: bigint | null;
    anoEntradaVigor: number | null;
    semestreConclusaoIdeal: number | null;
    chTotalMinima: number | null;
    chOptativasMinima: number | null;
};
export type EstruturaCurricularMinAggregateOutputType = {
    idEstrutura: bigint | null;
    codigo: string | null;
    nomeMatriz: string | null;
    anoEntradaVigor: number | null;
    semestreConclusaoIdeal: number | null;
    chTotalMinima: number | null;
    chOptativasMinima: number | null;
};
export type EstruturaCurricularMaxAggregateOutputType = {
    idEstrutura: bigint | null;
    codigo: string | null;
    nomeMatriz: string | null;
    anoEntradaVigor: number | null;
    semestreConclusaoIdeal: number | null;
    chTotalMinima: number | null;
    chOptativasMinima: number | null;
};
export type EstruturaCurricularCountAggregateOutputType = {
    idEstrutura: number;
    codigo: number;
    nomeMatriz: number;
    anoEntradaVigor: number;
    semestreConclusaoIdeal: number;
    chTotalMinima: number;
    chOptativasMinima: number;
    _all: number;
};
export type EstruturaCurricularAvgAggregateInputType = {
    idEstrutura?: true;
    anoEntradaVigor?: true;
    semestreConclusaoIdeal?: true;
    chTotalMinima?: true;
    chOptativasMinima?: true;
};
export type EstruturaCurricularSumAggregateInputType = {
    idEstrutura?: true;
    anoEntradaVigor?: true;
    semestreConclusaoIdeal?: true;
    chTotalMinima?: true;
    chOptativasMinima?: true;
};
export type EstruturaCurricularMinAggregateInputType = {
    idEstrutura?: true;
    codigo?: true;
    nomeMatriz?: true;
    anoEntradaVigor?: true;
    semestreConclusaoIdeal?: true;
    chTotalMinima?: true;
    chOptativasMinima?: true;
};
export type EstruturaCurricularMaxAggregateInputType = {
    idEstrutura?: true;
    codigo?: true;
    nomeMatriz?: true;
    anoEntradaVigor?: true;
    semestreConclusaoIdeal?: true;
    chTotalMinima?: true;
    chOptativasMinima?: true;
};
export type EstruturaCurricularCountAggregateInputType = {
    idEstrutura?: true;
    codigo?: true;
    nomeMatriz?: true;
    anoEntradaVigor?: true;
    semestreConclusaoIdeal?: true;
    chTotalMinima?: true;
    chOptativasMinima?: true;
    _all?: true;
};
export type EstruturaCurricularAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EstruturaCurricularWhereInput;
    orderBy?: Prisma.EstruturaCurricularOrderByWithRelationInput | Prisma.EstruturaCurricularOrderByWithRelationInput[];
    cursor?: Prisma.EstruturaCurricularWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EstruturaCurricularCountAggregateInputType;
    _avg?: EstruturaCurricularAvgAggregateInputType;
    _sum?: EstruturaCurricularSumAggregateInputType;
    _min?: EstruturaCurricularMinAggregateInputType;
    _max?: EstruturaCurricularMaxAggregateInputType;
};
export type GetEstruturaCurricularAggregateType<T extends EstruturaCurricularAggregateArgs> = {
    [P in keyof T & keyof AggregateEstruturaCurricular]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEstruturaCurricular[P]> : Prisma.GetScalarType<T[P], AggregateEstruturaCurricular[P]>;
};
export type EstruturaCurricularGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EstruturaCurricularWhereInput;
    orderBy?: Prisma.EstruturaCurricularOrderByWithAggregationInput | Prisma.EstruturaCurricularOrderByWithAggregationInput[];
    by: Prisma.EstruturaCurricularScalarFieldEnum[] | Prisma.EstruturaCurricularScalarFieldEnum;
    having?: Prisma.EstruturaCurricularScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EstruturaCurricularCountAggregateInputType | true;
    _avg?: EstruturaCurricularAvgAggregateInputType;
    _sum?: EstruturaCurricularSumAggregateInputType;
    _min?: EstruturaCurricularMinAggregateInputType;
    _max?: EstruturaCurricularMaxAggregateInputType;
};
export type EstruturaCurricularGroupByOutputType = {
    idEstrutura: bigint;
    codigo: string | null;
    nomeMatriz: string;
    anoEntradaVigor: number | null;
    semestreConclusaoIdeal: number | null;
    chTotalMinima: number;
    chOptativasMinima: number;
    _count: EstruturaCurricularCountAggregateOutputType | null;
    _avg: EstruturaCurricularAvgAggregateOutputType | null;
    _sum: EstruturaCurricularSumAggregateOutputType | null;
    _min: EstruturaCurricularMinAggregateOutputType | null;
    _max: EstruturaCurricularMaxAggregateOutputType | null;
};
export type GetEstruturaCurricularGroupByPayload<T extends EstruturaCurricularGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EstruturaCurricularGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EstruturaCurricularGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EstruturaCurricularGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EstruturaCurricularGroupByOutputType[P]>;
}>>;
export type EstruturaCurricularWhereInput = {
    AND?: Prisma.EstruturaCurricularWhereInput | Prisma.EstruturaCurricularWhereInput[];
    OR?: Prisma.EstruturaCurricularWhereInput[];
    NOT?: Prisma.EstruturaCurricularWhereInput | Prisma.EstruturaCurricularWhereInput[];
    idEstrutura?: Prisma.BigIntFilter<"EstruturaCurricular"> | bigint | number;
    codigo?: Prisma.StringNullableFilter<"EstruturaCurricular"> | string | null;
    nomeMatriz?: Prisma.StringFilter<"EstruturaCurricular"> | string;
    anoEntradaVigor?: Prisma.IntNullableFilter<"EstruturaCurricular"> | number | null;
    semestreConclusaoIdeal?: Prisma.IntNullableFilter<"EstruturaCurricular"> | number | null;
    chTotalMinima?: Prisma.IntFilter<"EstruturaCurricular"> | number;
    chOptativasMinima?: Prisma.IntFilter<"EstruturaCurricular"> | number;
    alunos?: Prisma.AlunoListRelationFilter;
};
export type EstruturaCurricularOrderByWithRelationInput = {
    idEstrutura?: Prisma.SortOrder;
    codigo?: Prisma.SortOrderInput | Prisma.SortOrder;
    nomeMatriz?: Prisma.SortOrder;
    anoEntradaVigor?: Prisma.SortOrderInput | Prisma.SortOrder;
    semestreConclusaoIdeal?: Prisma.SortOrderInput | Prisma.SortOrder;
    chTotalMinima?: Prisma.SortOrder;
    chOptativasMinima?: Prisma.SortOrder;
    alunos?: Prisma.AlunoOrderByRelationAggregateInput;
};
export type EstruturaCurricularWhereUniqueInput = Prisma.AtLeast<{
    idEstrutura?: bigint | number;
    AND?: Prisma.EstruturaCurricularWhereInput | Prisma.EstruturaCurricularWhereInput[];
    OR?: Prisma.EstruturaCurricularWhereInput[];
    NOT?: Prisma.EstruturaCurricularWhereInput | Prisma.EstruturaCurricularWhereInput[];
    codigo?: Prisma.StringNullableFilter<"EstruturaCurricular"> | string | null;
    nomeMatriz?: Prisma.StringFilter<"EstruturaCurricular"> | string;
    anoEntradaVigor?: Prisma.IntNullableFilter<"EstruturaCurricular"> | number | null;
    semestreConclusaoIdeal?: Prisma.IntNullableFilter<"EstruturaCurricular"> | number | null;
    chTotalMinima?: Prisma.IntFilter<"EstruturaCurricular"> | number;
    chOptativasMinima?: Prisma.IntFilter<"EstruturaCurricular"> | number;
    alunos?: Prisma.AlunoListRelationFilter;
}, "idEstrutura">;
export type EstruturaCurricularOrderByWithAggregationInput = {
    idEstrutura?: Prisma.SortOrder;
    codigo?: Prisma.SortOrderInput | Prisma.SortOrder;
    nomeMatriz?: Prisma.SortOrder;
    anoEntradaVigor?: Prisma.SortOrderInput | Prisma.SortOrder;
    semestreConclusaoIdeal?: Prisma.SortOrderInput | Prisma.SortOrder;
    chTotalMinima?: Prisma.SortOrder;
    chOptativasMinima?: Prisma.SortOrder;
    _count?: Prisma.EstruturaCurricularCountOrderByAggregateInput;
    _avg?: Prisma.EstruturaCurricularAvgOrderByAggregateInput;
    _max?: Prisma.EstruturaCurricularMaxOrderByAggregateInput;
    _min?: Prisma.EstruturaCurricularMinOrderByAggregateInput;
    _sum?: Prisma.EstruturaCurricularSumOrderByAggregateInput;
};
export type EstruturaCurricularScalarWhereWithAggregatesInput = {
    AND?: Prisma.EstruturaCurricularScalarWhereWithAggregatesInput | Prisma.EstruturaCurricularScalarWhereWithAggregatesInput[];
    OR?: Prisma.EstruturaCurricularScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EstruturaCurricularScalarWhereWithAggregatesInput | Prisma.EstruturaCurricularScalarWhereWithAggregatesInput[];
    idEstrutura?: Prisma.BigIntWithAggregatesFilter<"EstruturaCurricular"> | bigint | number;
    codigo?: Prisma.StringNullableWithAggregatesFilter<"EstruturaCurricular"> | string | null;
    nomeMatriz?: Prisma.StringWithAggregatesFilter<"EstruturaCurricular"> | string;
    anoEntradaVigor?: Prisma.IntNullableWithAggregatesFilter<"EstruturaCurricular"> | number | null;
    semestreConclusaoIdeal?: Prisma.IntNullableWithAggregatesFilter<"EstruturaCurricular"> | number | null;
    chTotalMinima?: Prisma.IntWithAggregatesFilter<"EstruturaCurricular"> | number;
    chOptativasMinima?: Prisma.IntWithAggregatesFilter<"EstruturaCurricular"> | number;
};
export type EstruturaCurricularCreateInput = {
    idEstrutura: bigint | number;
    codigo?: string | null;
    nomeMatriz: string;
    anoEntradaVigor?: number | null;
    semestreConclusaoIdeal?: number | null;
    chTotalMinima: number;
    chOptativasMinima: number;
    alunos?: Prisma.AlunoCreateNestedManyWithoutEstruturaInput;
};
export type EstruturaCurricularUncheckedCreateInput = {
    idEstrutura: bigint | number;
    codigo?: string | null;
    nomeMatriz: string;
    anoEntradaVigor?: number | null;
    semestreConclusaoIdeal?: number | null;
    chTotalMinima: number;
    chOptativasMinima: number;
    alunos?: Prisma.AlunoUncheckedCreateNestedManyWithoutEstruturaInput;
};
export type EstruturaCurricularUpdateInput = {
    idEstrutura?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    codigo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nomeMatriz?: Prisma.StringFieldUpdateOperationsInput | string;
    anoEntradaVigor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    semestreConclusaoIdeal?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    chTotalMinima?: Prisma.IntFieldUpdateOperationsInput | number;
    chOptativasMinima?: Prisma.IntFieldUpdateOperationsInput | number;
    alunos?: Prisma.AlunoUpdateManyWithoutEstruturaNestedInput;
};
export type EstruturaCurricularUncheckedUpdateInput = {
    idEstrutura?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    codigo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nomeMatriz?: Prisma.StringFieldUpdateOperationsInput | string;
    anoEntradaVigor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    semestreConclusaoIdeal?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    chTotalMinima?: Prisma.IntFieldUpdateOperationsInput | number;
    chOptativasMinima?: Prisma.IntFieldUpdateOperationsInput | number;
    alunos?: Prisma.AlunoUncheckedUpdateManyWithoutEstruturaNestedInput;
};
export type EstruturaCurricularCreateManyInput = {
    idEstrutura: bigint | number;
    codigo?: string | null;
    nomeMatriz: string;
    anoEntradaVigor?: number | null;
    semestreConclusaoIdeal?: number | null;
    chTotalMinima: number;
    chOptativasMinima: number;
};
export type EstruturaCurricularUpdateManyMutationInput = {
    idEstrutura?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    codigo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nomeMatriz?: Prisma.StringFieldUpdateOperationsInput | string;
    anoEntradaVigor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    semestreConclusaoIdeal?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    chTotalMinima?: Prisma.IntFieldUpdateOperationsInput | number;
    chOptativasMinima?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type EstruturaCurricularUncheckedUpdateManyInput = {
    idEstrutura?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    codigo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nomeMatriz?: Prisma.StringFieldUpdateOperationsInput | string;
    anoEntradaVigor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    semestreConclusaoIdeal?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    chTotalMinima?: Prisma.IntFieldUpdateOperationsInput | number;
    chOptativasMinima?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type EstruturaCurricularCountOrderByAggregateInput = {
    idEstrutura?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nomeMatriz?: Prisma.SortOrder;
    anoEntradaVigor?: Prisma.SortOrder;
    semestreConclusaoIdeal?: Prisma.SortOrder;
    chTotalMinima?: Prisma.SortOrder;
    chOptativasMinima?: Prisma.SortOrder;
};
export type EstruturaCurricularAvgOrderByAggregateInput = {
    idEstrutura?: Prisma.SortOrder;
    anoEntradaVigor?: Prisma.SortOrder;
    semestreConclusaoIdeal?: Prisma.SortOrder;
    chTotalMinima?: Prisma.SortOrder;
    chOptativasMinima?: Prisma.SortOrder;
};
export type EstruturaCurricularMaxOrderByAggregateInput = {
    idEstrutura?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nomeMatriz?: Prisma.SortOrder;
    anoEntradaVigor?: Prisma.SortOrder;
    semestreConclusaoIdeal?: Prisma.SortOrder;
    chTotalMinima?: Prisma.SortOrder;
    chOptativasMinima?: Prisma.SortOrder;
};
export type EstruturaCurricularMinOrderByAggregateInput = {
    idEstrutura?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nomeMatriz?: Prisma.SortOrder;
    anoEntradaVigor?: Prisma.SortOrder;
    semestreConclusaoIdeal?: Prisma.SortOrder;
    chTotalMinima?: Prisma.SortOrder;
    chOptativasMinima?: Prisma.SortOrder;
};
export type EstruturaCurricularSumOrderByAggregateInput = {
    idEstrutura?: Prisma.SortOrder;
    anoEntradaVigor?: Prisma.SortOrder;
    semestreConclusaoIdeal?: Prisma.SortOrder;
    chTotalMinima?: Prisma.SortOrder;
    chOptativasMinima?: Prisma.SortOrder;
};
export type EstruturaCurricularScalarRelationFilter = {
    is?: Prisma.EstruturaCurricularWhereInput;
    isNot?: Prisma.EstruturaCurricularWhereInput;
};
export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EstruturaCurricularCreateNestedOneWithoutAlunosInput = {
    create?: Prisma.XOR<Prisma.EstruturaCurricularCreateWithoutAlunosInput, Prisma.EstruturaCurricularUncheckedCreateWithoutAlunosInput>;
    connectOrCreate?: Prisma.EstruturaCurricularCreateOrConnectWithoutAlunosInput;
    connect?: Prisma.EstruturaCurricularWhereUniqueInput;
};
export type EstruturaCurricularUpdateOneRequiredWithoutAlunosNestedInput = {
    create?: Prisma.XOR<Prisma.EstruturaCurricularCreateWithoutAlunosInput, Prisma.EstruturaCurricularUncheckedCreateWithoutAlunosInput>;
    connectOrCreate?: Prisma.EstruturaCurricularCreateOrConnectWithoutAlunosInput;
    upsert?: Prisma.EstruturaCurricularUpsertWithoutAlunosInput;
    connect?: Prisma.EstruturaCurricularWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EstruturaCurricularUpdateToOneWithWhereWithoutAlunosInput, Prisma.EstruturaCurricularUpdateWithoutAlunosInput>, Prisma.EstruturaCurricularUncheckedUpdateWithoutAlunosInput>;
};
export type EstruturaCurricularCreateWithoutAlunosInput = {
    idEstrutura: bigint | number;
    codigo?: string | null;
    nomeMatriz: string;
    anoEntradaVigor?: number | null;
    semestreConclusaoIdeal?: number | null;
    chTotalMinima: number;
    chOptativasMinima: number;
};
export type EstruturaCurricularUncheckedCreateWithoutAlunosInput = {
    idEstrutura: bigint | number;
    codigo?: string | null;
    nomeMatriz: string;
    anoEntradaVigor?: number | null;
    semestreConclusaoIdeal?: number | null;
    chTotalMinima: number;
    chOptativasMinima: number;
};
export type EstruturaCurricularCreateOrConnectWithoutAlunosInput = {
    where: Prisma.EstruturaCurricularWhereUniqueInput;
    create: Prisma.XOR<Prisma.EstruturaCurricularCreateWithoutAlunosInput, Prisma.EstruturaCurricularUncheckedCreateWithoutAlunosInput>;
};
export type EstruturaCurricularUpsertWithoutAlunosInput = {
    update: Prisma.XOR<Prisma.EstruturaCurricularUpdateWithoutAlunosInput, Prisma.EstruturaCurricularUncheckedUpdateWithoutAlunosInput>;
    create: Prisma.XOR<Prisma.EstruturaCurricularCreateWithoutAlunosInput, Prisma.EstruturaCurricularUncheckedCreateWithoutAlunosInput>;
    where?: Prisma.EstruturaCurricularWhereInput;
};
export type EstruturaCurricularUpdateToOneWithWhereWithoutAlunosInput = {
    where?: Prisma.EstruturaCurricularWhereInput;
    data: Prisma.XOR<Prisma.EstruturaCurricularUpdateWithoutAlunosInput, Prisma.EstruturaCurricularUncheckedUpdateWithoutAlunosInput>;
};
export type EstruturaCurricularUpdateWithoutAlunosInput = {
    idEstrutura?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    codigo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nomeMatriz?: Prisma.StringFieldUpdateOperationsInput | string;
    anoEntradaVigor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    semestreConclusaoIdeal?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    chTotalMinima?: Prisma.IntFieldUpdateOperationsInput | number;
    chOptativasMinima?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type EstruturaCurricularUncheckedUpdateWithoutAlunosInput = {
    idEstrutura?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    codigo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nomeMatriz?: Prisma.StringFieldUpdateOperationsInput | string;
    anoEntradaVigor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    semestreConclusaoIdeal?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    chTotalMinima?: Prisma.IntFieldUpdateOperationsInput | number;
    chOptativasMinima?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type EstruturaCurricularCountOutputType = {
    alunos: number;
};
export type EstruturaCurricularCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    alunos?: boolean | EstruturaCurricularCountOutputTypeCountAlunosArgs;
};
export type EstruturaCurricularCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstruturaCurricularCountOutputTypeSelect<ExtArgs> | null;
};
export type EstruturaCurricularCountOutputTypeCountAlunosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AlunoWhereInput;
};
export type EstruturaCurricularSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idEstrutura?: boolean;
    codigo?: boolean;
    nomeMatriz?: boolean;
    anoEntradaVigor?: boolean;
    semestreConclusaoIdeal?: boolean;
    chTotalMinima?: boolean;
    chOptativasMinima?: boolean;
    alunos?: boolean | Prisma.EstruturaCurricular$alunosArgs<ExtArgs>;
    _count?: boolean | Prisma.EstruturaCurricularCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["estruturaCurricular"]>;
export type EstruturaCurricularSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idEstrutura?: boolean;
    codigo?: boolean;
    nomeMatriz?: boolean;
    anoEntradaVigor?: boolean;
    semestreConclusaoIdeal?: boolean;
    chTotalMinima?: boolean;
    chOptativasMinima?: boolean;
}, ExtArgs["result"]["estruturaCurricular"]>;
export type EstruturaCurricularSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idEstrutura?: boolean;
    codigo?: boolean;
    nomeMatriz?: boolean;
    anoEntradaVigor?: boolean;
    semestreConclusaoIdeal?: boolean;
    chTotalMinima?: boolean;
    chOptativasMinima?: boolean;
}, ExtArgs["result"]["estruturaCurricular"]>;
export type EstruturaCurricularSelectScalar = {
    idEstrutura?: boolean;
    codigo?: boolean;
    nomeMatriz?: boolean;
    anoEntradaVigor?: boolean;
    semestreConclusaoIdeal?: boolean;
    chTotalMinima?: boolean;
    chOptativasMinima?: boolean;
};
export type EstruturaCurricularOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"idEstrutura" | "codigo" | "nomeMatriz" | "anoEntradaVigor" | "semestreConclusaoIdeal" | "chTotalMinima" | "chOptativasMinima", ExtArgs["result"]["estruturaCurricular"]>;
export type EstruturaCurricularInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    alunos?: boolean | Prisma.EstruturaCurricular$alunosArgs<ExtArgs>;
    _count?: boolean | Prisma.EstruturaCurricularCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EstruturaCurricularIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type EstruturaCurricularIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $EstruturaCurricularPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EstruturaCurricular";
    objects: {
        alunos: Prisma.$AlunoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        idEstrutura: bigint;
        codigo: string | null;
        nomeMatriz: string;
        anoEntradaVigor: number | null;
        semestreConclusaoIdeal: number | null;
        chTotalMinima: number;
        chOptativasMinima: number;
    }, ExtArgs["result"]["estruturaCurricular"]>;
    composites: {};
};
export type EstruturaCurricularGetPayload<S extends boolean | null | undefined | EstruturaCurricularDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EstruturaCurricularPayload, S>;
export type EstruturaCurricularCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EstruturaCurricularFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EstruturaCurricularCountAggregateInputType | true;
};
export interface EstruturaCurricularDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EstruturaCurricular'];
        meta: {
            name: 'EstruturaCurricular';
        };
    };
    findUnique<T extends EstruturaCurricularFindUniqueArgs>(args: Prisma.SelectSubset<T, EstruturaCurricularFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EstruturaCurricularClient<runtime.Types.Result.GetResult<Prisma.$EstruturaCurricularPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EstruturaCurricularFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EstruturaCurricularFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EstruturaCurricularClient<runtime.Types.Result.GetResult<Prisma.$EstruturaCurricularPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EstruturaCurricularFindFirstArgs>(args?: Prisma.SelectSubset<T, EstruturaCurricularFindFirstArgs<ExtArgs>>): Prisma.Prisma__EstruturaCurricularClient<runtime.Types.Result.GetResult<Prisma.$EstruturaCurricularPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EstruturaCurricularFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EstruturaCurricularFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EstruturaCurricularClient<runtime.Types.Result.GetResult<Prisma.$EstruturaCurricularPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EstruturaCurricularFindManyArgs>(args?: Prisma.SelectSubset<T, EstruturaCurricularFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EstruturaCurricularPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EstruturaCurricularCreateArgs>(args: Prisma.SelectSubset<T, EstruturaCurricularCreateArgs<ExtArgs>>): Prisma.Prisma__EstruturaCurricularClient<runtime.Types.Result.GetResult<Prisma.$EstruturaCurricularPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EstruturaCurricularCreateManyArgs>(args?: Prisma.SelectSubset<T, EstruturaCurricularCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EstruturaCurricularCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EstruturaCurricularCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EstruturaCurricularPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EstruturaCurricularDeleteArgs>(args: Prisma.SelectSubset<T, EstruturaCurricularDeleteArgs<ExtArgs>>): Prisma.Prisma__EstruturaCurricularClient<runtime.Types.Result.GetResult<Prisma.$EstruturaCurricularPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EstruturaCurricularUpdateArgs>(args: Prisma.SelectSubset<T, EstruturaCurricularUpdateArgs<ExtArgs>>): Prisma.Prisma__EstruturaCurricularClient<runtime.Types.Result.GetResult<Prisma.$EstruturaCurricularPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EstruturaCurricularDeleteManyArgs>(args?: Prisma.SelectSubset<T, EstruturaCurricularDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EstruturaCurricularUpdateManyArgs>(args: Prisma.SelectSubset<T, EstruturaCurricularUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EstruturaCurricularUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EstruturaCurricularUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EstruturaCurricularPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EstruturaCurricularUpsertArgs>(args: Prisma.SelectSubset<T, EstruturaCurricularUpsertArgs<ExtArgs>>): Prisma.Prisma__EstruturaCurricularClient<runtime.Types.Result.GetResult<Prisma.$EstruturaCurricularPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EstruturaCurricularCountArgs>(args?: Prisma.Subset<T, EstruturaCurricularCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EstruturaCurricularCountAggregateOutputType> : number>;
    aggregate<T extends EstruturaCurricularAggregateArgs>(args: Prisma.Subset<T, EstruturaCurricularAggregateArgs>): Prisma.PrismaPromise<GetEstruturaCurricularAggregateType<T>>;
    groupBy<T extends EstruturaCurricularGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EstruturaCurricularGroupByArgs['orderBy'];
    } : {
        orderBy?: EstruturaCurricularGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EstruturaCurricularGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstruturaCurricularGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EstruturaCurricularFieldRefs;
}
export interface Prisma__EstruturaCurricularClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    alunos<T extends Prisma.EstruturaCurricular$alunosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EstruturaCurricular$alunosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EstruturaCurricularFieldRefs {
    readonly idEstrutura: Prisma.FieldRef<"EstruturaCurricular", 'BigInt'>;
    readonly codigo: Prisma.FieldRef<"EstruturaCurricular", 'String'>;
    readonly nomeMatriz: Prisma.FieldRef<"EstruturaCurricular", 'String'>;
    readonly anoEntradaVigor: Prisma.FieldRef<"EstruturaCurricular", 'Int'>;
    readonly semestreConclusaoIdeal: Prisma.FieldRef<"EstruturaCurricular", 'Int'>;
    readonly chTotalMinima: Prisma.FieldRef<"EstruturaCurricular", 'Int'>;
    readonly chOptativasMinima: Prisma.FieldRef<"EstruturaCurricular", 'Int'>;
}
export type EstruturaCurricularFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstruturaCurricularSelect<ExtArgs> | null;
    omit?: Prisma.EstruturaCurricularOmit<ExtArgs> | null;
    include?: Prisma.EstruturaCurricularInclude<ExtArgs> | null;
    where: Prisma.EstruturaCurricularWhereUniqueInput;
};
export type EstruturaCurricularFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstruturaCurricularSelect<ExtArgs> | null;
    omit?: Prisma.EstruturaCurricularOmit<ExtArgs> | null;
    include?: Prisma.EstruturaCurricularInclude<ExtArgs> | null;
    where: Prisma.EstruturaCurricularWhereUniqueInput;
};
export type EstruturaCurricularFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstruturaCurricularSelect<ExtArgs> | null;
    omit?: Prisma.EstruturaCurricularOmit<ExtArgs> | null;
    include?: Prisma.EstruturaCurricularInclude<ExtArgs> | null;
    where?: Prisma.EstruturaCurricularWhereInput;
    orderBy?: Prisma.EstruturaCurricularOrderByWithRelationInput | Prisma.EstruturaCurricularOrderByWithRelationInput[];
    cursor?: Prisma.EstruturaCurricularWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EstruturaCurricularScalarFieldEnum | Prisma.EstruturaCurricularScalarFieldEnum[];
};
export type EstruturaCurricularFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstruturaCurricularSelect<ExtArgs> | null;
    omit?: Prisma.EstruturaCurricularOmit<ExtArgs> | null;
    include?: Prisma.EstruturaCurricularInclude<ExtArgs> | null;
    where?: Prisma.EstruturaCurricularWhereInput;
    orderBy?: Prisma.EstruturaCurricularOrderByWithRelationInput | Prisma.EstruturaCurricularOrderByWithRelationInput[];
    cursor?: Prisma.EstruturaCurricularWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EstruturaCurricularScalarFieldEnum | Prisma.EstruturaCurricularScalarFieldEnum[];
};
export type EstruturaCurricularFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstruturaCurricularSelect<ExtArgs> | null;
    omit?: Prisma.EstruturaCurricularOmit<ExtArgs> | null;
    include?: Prisma.EstruturaCurricularInclude<ExtArgs> | null;
    where?: Prisma.EstruturaCurricularWhereInput;
    orderBy?: Prisma.EstruturaCurricularOrderByWithRelationInput | Prisma.EstruturaCurricularOrderByWithRelationInput[];
    cursor?: Prisma.EstruturaCurricularWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EstruturaCurricularScalarFieldEnum | Prisma.EstruturaCurricularScalarFieldEnum[];
};
export type EstruturaCurricularCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstruturaCurricularSelect<ExtArgs> | null;
    omit?: Prisma.EstruturaCurricularOmit<ExtArgs> | null;
    include?: Prisma.EstruturaCurricularInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EstruturaCurricularCreateInput, Prisma.EstruturaCurricularUncheckedCreateInput>;
};
export type EstruturaCurricularCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EstruturaCurricularCreateManyInput | Prisma.EstruturaCurricularCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EstruturaCurricularCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstruturaCurricularSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EstruturaCurricularOmit<ExtArgs> | null;
    data: Prisma.EstruturaCurricularCreateManyInput | Prisma.EstruturaCurricularCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EstruturaCurricularUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstruturaCurricularSelect<ExtArgs> | null;
    omit?: Prisma.EstruturaCurricularOmit<ExtArgs> | null;
    include?: Prisma.EstruturaCurricularInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EstruturaCurricularUpdateInput, Prisma.EstruturaCurricularUncheckedUpdateInput>;
    where: Prisma.EstruturaCurricularWhereUniqueInput;
};
export type EstruturaCurricularUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EstruturaCurricularUpdateManyMutationInput, Prisma.EstruturaCurricularUncheckedUpdateManyInput>;
    where?: Prisma.EstruturaCurricularWhereInput;
    limit?: number;
};
export type EstruturaCurricularUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstruturaCurricularSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EstruturaCurricularOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EstruturaCurricularUpdateManyMutationInput, Prisma.EstruturaCurricularUncheckedUpdateManyInput>;
    where?: Prisma.EstruturaCurricularWhereInput;
    limit?: number;
};
export type EstruturaCurricularUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstruturaCurricularSelect<ExtArgs> | null;
    omit?: Prisma.EstruturaCurricularOmit<ExtArgs> | null;
    include?: Prisma.EstruturaCurricularInclude<ExtArgs> | null;
    where: Prisma.EstruturaCurricularWhereUniqueInput;
    create: Prisma.XOR<Prisma.EstruturaCurricularCreateInput, Prisma.EstruturaCurricularUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EstruturaCurricularUpdateInput, Prisma.EstruturaCurricularUncheckedUpdateInput>;
};
export type EstruturaCurricularDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstruturaCurricularSelect<ExtArgs> | null;
    omit?: Prisma.EstruturaCurricularOmit<ExtArgs> | null;
    include?: Prisma.EstruturaCurricularInclude<ExtArgs> | null;
    where: Prisma.EstruturaCurricularWhereUniqueInput;
};
export type EstruturaCurricularDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EstruturaCurricularWhereInput;
    limit?: number;
};
export type EstruturaCurricular$alunosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EstruturaCurricularDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstruturaCurricularSelect<ExtArgs> | null;
    omit?: Prisma.EstruturaCurricularOmit<ExtArgs> | null;
    include?: Prisma.EstruturaCurricularInclude<ExtArgs> | null;
};
