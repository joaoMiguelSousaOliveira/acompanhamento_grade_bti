import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ComponenteModel = runtime.Types.Result.DefaultSelection<Prisma.$ComponentePayload>;
export type AggregateComponente = {
    _count: ComponenteCountAggregateOutputType | null;
    _avg: ComponenteAvgAggregateOutputType | null;
    _sum: ComponenteSumAggregateOutputType | null;
    _min: ComponenteMinAggregateOutputType | null;
    _max: ComponenteMaxAggregateOutputType | null;
};
export type ComponenteAvgAggregateOutputType = {
    idComponente: number | null;
    chTotal: number | null;
};
export type ComponenteSumAggregateOutputType = {
    idComponente: bigint | null;
    chTotal: number | null;
};
export type ComponenteMinAggregateOutputType = {
    idComponente: bigint | null;
    codigo: string | null;
    nome: string | null;
    chTotal: number | null;
    modalidade: string | null;
    ativo: boolean | null;
};
export type ComponenteMaxAggregateOutputType = {
    idComponente: bigint | null;
    codigo: string | null;
    nome: string | null;
    chTotal: number | null;
    modalidade: string | null;
    ativo: boolean | null;
};
export type ComponenteCountAggregateOutputType = {
    idComponente: number;
    codigo: number;
    nome: number;
    chTotal: number;
    modalidade: number;
    ativo: number;
    _all: number;
};
export type ComponenteAvgAggregateInputType = {
    idComponente?: true;
    chTotal?: true;
};
export type ComponenteSumAggregateInputType = {
    idComponente?: true;
    chTotal?: true;
};
export type ComponenteMinAggregateInputType = {
    idComponente?: true;
    codigo?: true;
    nome?: true;
    chTotal?: true;
    modalidade?: true;
    ativo?: true;
};
export type ComponenteMaxAggregateInputType = {
    idComponente?: true;
    codigo?: true;
    nome?: true;
    chTotal?: true;
    modalidade?: true;
    ativo?: true;
};
export type ComponenteCountAggregateInputType = {
    idComponente?: true;
    codigo?: true;
    nome?: true;
    chTotal?: true;
    modalidade?: true;
    ativo?: true;
    _all?: true;
};
export type ComponenteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComponenteWhereInput;
    orderBy?: Prisma.ComponenteOrderByWithRelationInput | Prisma.ComponenteOrderByWithRelationInput[];
    cursor?: Prisma.ComponenteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ComponenteCountAggregateInputType;
    _avg?: ComponenteAvgAggregateInputType;
    _sum?: ComponenteSumAggregateInputType;
    _min?: ComponenteMinAggregateInputType;
    _max?: ComponenteMaxAggregateInputType;
};
export type GetComponenteAggregateType<T extends ComponenteAggregateArgs> = {
    [P in keyof T & keyof AggregateComponente]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateComponente[P]> : Prisma.GetScalarType<T[P], AggregateComponente[P]>;
};
export type ComponenteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComponenteWhereInput;
    orderBy?: Prisma.ComponenteOrderByWithAggregationInput | Prisma.ComponenteOrderByWithAggregationInput[];
    by: Prisma.ComponenteScalarFieldEnum[] | Prisma.ComponenteScalarFieldEnum;
    having?: Prisma.ComponenteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ComponenteCountAggregateInputType | true;
    _avg?: ComponenteAvgAggregateInputType;
    _sum?: ComponenteSumAggregateInputType;
    _min?: ComponenteMinAggregateInputType;
    _max?: ComponenteMaxAggregateInputType;
};
export type ComponenteGroupByOutputType = {
    idComponente: bigint;
    codigo: string;
    nome: string;
    chTotal: number;
    modalidade: string;
    ativo: boolean;
    _count: ComponenteCountAggregateOutputType | null;
    _avg: ComponenteAvgAggregateOutputType | null;
    _sum: ComponenteSumAggregateOutputType | null;
    _min: ComponenteMinAggregateOutputType | null;
    _max: ComponenteMaxAggregateOutputType | null;
};
export type GetComponenteGroupByPayload<T extends ComponenteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ComponenteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ComponenteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ComponenteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ComponenteGroupByOutputType[P]>;
}>>;
export type ComponenteWhereInput = {
    AND?: Prisma.ComponenteWhereInput | Prisma.ComponenteWhereInput[];
    OR?: Prisma.ComponenteWhereInput[];
    NOT?: Prisma.ComponenteWhereInput | Prisma.ComponenteWhereInput[];
    idComponente?: Prisma.BigIntFilter<"Componente"> | bigint | number;
    codigo?: Prisma.StringFilter<"Componente"> | string;
    nome?: Prisma.StringFilter<"Componente"> | string;
    chTotal?: Prisma.IntFilter<"Componente"> | number;
    modalidade?: Prisma.StringFilter<"Componente"> | string;
    ativo?: Prisma.BoolFilter<"Componente"> | boolean;
    enfases?: Prisma.CompoeListRelationFilter;
    concluidos?: Prisma.ConcluiuListRelationFilter;
    preRequisitos?: Prisma.PreRequisitoListRelationFilter;
    exigidoPor?: Prisma.PreRequisitoListRelationFilter;
    equivalencias?: Prisma.EquivalenciaListRelationFilter;
    equivalenteDe?: Prisma.EquivalenciaListRelationFilter;
};
export type ComponenteOrderByWithRelationInput = {
    idComponente?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    chTotal?: Prisma.SortOrder;
    modalidade?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    enfases?: Prisma.CompoeOrderByRelationAggregateInput;
    concluidos?: Prisma.ConcluiuOrderByRelationAggregateInput;
    preRequisitos?: Prisma.PreRequisitoOrderByRelationAggregateInput;
    exigidoPor?: Prisma.PreRequisitoOrderByRelationAggregateInput;
    equivalencias?: Prisma.EquivalenciaOrderByRelationAggregateInput;
    equivalenteDe?: Prisma.EquivalenciaOrderByRelationAggregateInput;
};
export type ComponenteWhereUniqueInput = Prisma.AtLeast<{
    idComponente?: bigint | number;
    AND?: Prisma.ComponenteWhereInput | Prisma.ComponenteWhereInput[];
    OR?: Prisma.ComponenteWhereInput[];
    NOT?: Prisma.ComponenteWhereInput | Prisma.ComponenteWhereInput[];
    codigo?: Prisma.StringFilter<"Componente"> | string;
    nome?: Prisma.StringFilter<"Componente"> | string;
    chTotal?: Prisma.IntFilter<"Componente"> | number;
    modalidade?: Prisma.StringFilter<"Componente"> | string;
    ativo?: Prisma.BoolFilter<"Componente"> | boolean;
    enfases?: Prisma.CompoeListRelationFilter;
    concluidos?: Prisma.ConcluiuListRelationFilter;
    preRequisitos?: Prisma.PreRequisitoListRelationFilter;
    exigidoPor?: Prisma.PreRequisitoListRelationFilter;
    equivalencias?: Prisma.EquivalenciaListRelationFilter;
    equivalenteDe?: Prisma.EquivalenciaListRelationFilter;
}, "idComponente">;
export type ComponenteOrderByWithAggregationInput = {
    idComponente?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    chTotal?: Prisma.SortOrder;
    modalidade?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    _count?: Prisma.ComponenteCountOrderByAggregateInput;
    _avg?: Prisma.ComponenteAvgOrderByAggregateInput;
    _max?: Prisma.ComponenteMaxOrderByAggregateInput;
    _min?: Prisma.ComponenteMinOrderByAggregateInput;
    _sum?: Prisma.ComponenteSumOrderByAggregateInput;
};
export type ComponenteScalarWhereWithAggregatesInput = {
    AND?: Prisma.ComponenteScalarWhereWithAggregatesInput | Prisma.ComponenteScalarWhereWithAggregatesInput[];
    OR?: Prisma.ComponenteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ComponenteScalarWhereWithAggregatesInput | Prisma.ComponenteScalarWhereWithAggregatesInput[];
    idComponente?: Prisma.BigIntWithAggregatesFilter<"Componente"> | bigint | number;
    codigo?: Prisma.StringWithAggregatesFilter<"Componente"> | string;
    nome?: Prisma.StringWithAggregatesFilter<"Componente"> | string;
    chTotal?: Prisma.IntWithAggregatesFilter<"Componente"> | number;
    modalidade?: Prisma.StringWithAggregatesFilter<"Componente"> | string;
    ativo?: Prisma.BoolWithAggregatesFilter<"Componente"> | boolean;
};
export type ComponenteCreateInput = {
    idComponente: bigint | number;
    codigo: string;
    nome: string;
    chTotal: number;
    modalidade: string;
    ativo?: boolean;
    enfases?: Prisma.CompoeCreateNestedManyWithoutComponenteInput;
    concluidos?: Prisma.ConcluiuCreateNestedManyWithoutComponenteInput;
    preRequisitos?: Prisma.PreRequisitoCreateNestedManyWithoutComponenteInput;
    exigidoPor?: Prisma.PreRequisitoCreateNestedManyWithoutExigidoInput;
    equivalencias?: Prisma.EquivalenciaCreateNestedManyWithoutComponenteInput;
    equivalenteDe?: Prisma.EquivalenciaCreateNestedManyWithoutEquivalenteInput;
};
export type ComponenteUncheckedCreateInput = {
    idComponente: bigint | number;
    codigo: string;
    nome: string;
    chTotal: number;
    modalidade: string;
    ativo?: boolean;
    enfases?: Prisma.CompoeUncheckedCreateNestedManyWithoutComponenteInput;
    concluidos?: Prisma.ConcluiuUncheckedCreateNestedManyWithoutComponenteInput;
    preRequisitos?: Prisma.PreRequisitoUncheckedCreateNestedManyWithoutComponenteInput;
    exigidoPor?: Prisma.PreRequisitoUncheckedCreateNestedManyWithoutExigidoInput;
    equivalencias?: Prisma.EquivalenciaUncheckedCreateNestedManyWithoutComponenteInput;
    equivalenteDe?: Prisma.EquivalenciaUncheckedCreateNestedManyWithoutEquivalenteInput;
};
export type ComponenteUpdateInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    chTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    modalidade?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    enfases?: Prisma.CompoeUpdateManyWithoutComponenteNestedInput;
    concluidos?: Prisma.ConcluiuUpdateManyWithoutComponenteNestedInput;
    preRequisitos?: Prisma.PreRequisitoUpdateManyWithoutComponenteNestedInput;
    exigidoPor?: Prisma.PreRequisitoUpdateManyWithoutExigidoNestedInput;
    equivalencias?: Prisma.EquivalenciaUpdateManyWithoutComponenteNestedInput;
    equivalenteDe?: Prisma.EquivalenciaUpdateManyWithoutEquivalenteNestedInput;
};
export type ComponenteUncheckedUpdateInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    chTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    modalidade?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    enfases?: Prisma.CompoeUncheckedUpdateManyWithoutComponenteNestedInput;
    concluidos?: Prisma.ConcluiuUncheckedUpdateManyWithoutComponenteNestedInput;
    preRequisitos?: Prisma.PreRequisitoUncheckedUpdateManyWithoutComponenteNestedInput;
    exigidoPor?: Prisma.PreRequisitoUncheckedUpdateManyWithoutExigidoNestedInput;
    equivalencias?: Prisma.EquivalenciaUncheckedUpdateManyWithoutComponenteNestedInput;
    equivalenteDe?: Prisma.EquivalenciaUncheckedUpdateManyWithoutEquivalenteNestedInput;
};
export type ComponenteCreateManyInput = {
    idComponente: bigint | number;
    codigo: string;
    nome: string;
    chTotal: number;
    modalidade: string;
    ativo?: boolean;
};
export type ComponenteUpdateManyMutationInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    chTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    modalidade?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ComponenteUncheckedUpdateManyInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    chTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    modalidade?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ComponenteCountOrderByAggregateInput = {
    idComponente?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    chTotal?: Prisma.SortOrder;
    modalidade?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
};
export type ComponenteAvgOrderByAggregateInput = {
    idComponente?: Prisma.SortOrder;
    chTotal?: Prisma.SortOrder;
};
export type ComponenteMaxOrderByAggregateInput = {
    idComponente?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    chTotal?: Prisma.SortOrder;
    modalidade?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
};
export type ComponenteMinOrderByAggregateInput = {
    idComponente?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    chTotal?: Prisma.SortOrder;
    modalidade?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
};
export type ComponenteSumOrderByAggregateInput = {
    idComponente?: Prisma.SortOrder;
    chTotal?: Prisma.SortOrder;
};
export type ComponenteScalarRelationFilter = {
    is?: Prisma.ComponenteWhereInput;
    isNot?: Prisma.ComponenteWhereInput;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type ComponenteCreateNestedOneWithoutEnfasesInput = {
    create?: Prisma.XOR<Prisma.ComponenteCreateWithoutEnfasesInput, Prisma.ComponenteUncheckedCreateWithoutEnfasesInput>;
    connectOrCreate?: Prisma.ComponenteCreateOrConnectWithoutEnfasesInput;
    connect?: Prisma.ComponenteWhereUniqueInput;
};
export type ComponenteUpdateOneRequiredWithoutEnfasesNestedInput = {
    create?: Prisma.XOR<Prisma.ComponenteCreateWithoutEnfasesInput, Prisma.ComponenteUncheckedCreateWithoutEnfasesInput>;
    connectOrCreate?: Prisma.ComponenteCreateOrConnectWithoutEnfasesInput;
    upsert?: Prisma.ComponenteUpsertWithoutEnfasesInput;
    connect?: Prisma.ComponenteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ComponenteUpdateToOneWithWhereWithoutEnfasesInput, Prisma.ComponenteUpdateWithoutEnfasesInput>, Prisma.ComponenteUncheckedUpdateWithoutEnfasesInput>;
};
export type ComponenteCreateNestedOneWithoutConcluidosInput = {
    create?: Prisma.XOR<Prisma.ComponenteCreateWithoutConcluidosInput, Prisma.ComponenteUncheckedCreateWithoutConcluidosInput>;
    connectOrCreate?: Prisma.ComponenteCreateOrConnectWithoutConcluidosInput;
    connect?: Prisma.ComponenteWhereUniqueInput;
};
export type ComponenteUpdateOneRequiredWithoutConcluidosNestedInput = {
    create?: Prisma.XOR<Prisma.ComponenteCreateWithoutConcluidosInput, Prisma.ComponenteUncheckedCreateWithoutConcluidosInput>;
    connectOrCreate?: Prisma.ComponenteCreateOrConnectWithoutConcluidosInput;
    upsert?: Prisma.ComponenteUpsertWithoutConcluidosInput;
    connect?: Prisma.ComponenteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ComponenteUpdateToOneWithWhereWithoutConcluidosInput, Prisma.ComponenteUpdateWithoutConcluidosInput>, Prisma.ComponenteUncheckedUpdateWithoutConcluidosInput>;
};
export type ComponenteCreateNestedOneWithoutPreRequisitosInput = {
    create?: Prisma.XOR<Prisma.ComponenteCreateWithoutPreRequisitosInput, Prisma.ComponenteUncheckedCreateWithoutPreRequisitosInput>;
    connectOrCreate?: Prisma.ComponenteCreateOrConnectWithoutPreRequisitosInput;
    connect?: Prisma.ComponenteWhereUniqueInput;
};
export type ComponenteCreateNestedOneWithoutExigidoPorInput = {
    create?: Prisma.XOR<Prisma.ComponenteCreateWithoutExigidoPorInput, Prisma.ComponenteUncheckedCreateWithoutExigidoPorInput>;
    connectOrCreate?: Prisma.ComponenteCreateOrConnectWithoutExigidoPorInput;
    connect?: Prisma.ComponenteWhereUniqueInput;
};
export type ComponenteUpdateOneRequiredWithoutPreRequisitosNestedInput = {
    create?: Prisma.XOR<Prisma.ComponenteCreateWithoutPreRequisitosInput, Prisma.ComponenteUncheckedCreateWithoutPreRequisitosInput>;
    connectOrCreate?: Prisma.ComponenteCreateOrConnectWithoutPreRequisitosInput;
    upsert?: Prisma.ComponenteUpsertWithoutPreRequisitosInput;
    connect?: Prisma.ComponenteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ComponenteUpdateToOneWithWhereWithoutPreRequisitosInput, Prisma.ComponenteUpdateWithoutPreRequisitosInput>, Prisma.ComponenteUncheckedUpdateWithoutPreRequisitosInput>;
};
export type ComponenteUpdateOneRequiredWithoutExigidoPorNestedInput = {
    create?: Prisma.XOR<Prisma.ComponenteCreateWithoutExigidoPorInput, Prisma.ComponenteUncheckedCreateWithoutExigidoPorInput>;
    connectOrCreate?: Prisma.ComponenteCreateOrConnectWithoutExigidoPorInput;
    upsert?: Prisma.ComponenteUpsertWithoutExigidoPorInput;
    connect?: Prisma.ComponenteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ComponenteUpdateToOneWithWhereWithoutExigidoPorInput, Prisma.ComponenteUpdateWithoutExigidoPorInput>, Prisma.ComponenteUncheckedUpdateWithoutExigidoPorInput>;
};
export type ComponenteCreateNestedOneWithoutEquivalenciasInput = {
    create?: Prisma.XOR<Prisma.ComponenteCreateWithoutEquivalenciasInput, Prisma.ComponenteUncheckedCreateWithoutEquivalenciasInput>;
    connectOrCreate?: Prisma.ComponenteCreateOrConnectWithoutEquivalenciasInput;
    connect?: Prisma.ComponenteWhereUniqueInput;
};
export type ComponenteCreateNestedOneWithoutEquivalenteDeInput = {
    create?: Prisma.XOR<Prisma.ComponenteCreateWithoutEquivalenteDeInput, Prisma.ComponenteUncheckedCreateWithoutEquivalenteDeInput>;
    connectOrCreate?: Prisma.ComponenteCreateOrConnectWithoutEquivalenteDeInput;
    connect?: Prisma.ComponenteWhereUniqueInput;
};
export type ComponenteUpdateOneRequiredWithoutEquivalenciasNestedInput = {
    create?: Prisma.XOR<Prisma.ComponenteCreateWithoutEquivalenciasInput, Prisma.ComponenteUncheckedCreateWithoutEquivalenciasInput>;
    connectOrCreate?: Prisma.ComponenteCreateOrConnectWithoutEquivalenciasInput;
    upsert?: Prisma.ComponenteUpsertWithoutEquivalenciasInput;
    connect?: Prisma.ComponenteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ComponenteUpdateToOneWithWhereWithoutEquivalenciasInput, Prisma.ComponenteUpdateWithoutEquivalenciasInput>, Prisma.ComponenteUncheckedUpdateWithoutEquivalenciasInput>;
};
export type ComponenteUpdateOneRequiredWithoutEquivalenteDeNestedInput = {
    create?: Prisma.XOR<Prisma.ComponenteCreateWithoutEquivalenteDeInput, Prisma.ComponenteUncheckedCreateWithoutEquivalenteDeInput>;
    connectOrCreate?: Prisma.ComponenteCreateOrConnectWithoutEquivalenteDeInput;
    upsert?: Prisma.ComponenteUpsertWithoutEquivalenteDeInput;
    connect?: Prisma.ComponenteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ComponenteUpdateToOneWithWhereWithoutEquivalenteDeInput, Prisma.ComponenteUpdateWithoutEquivalenteDeInput>, Prisma.ComponenteUncheckedUpdateWithoutEquivalenteDeInput>;
};
export type ComponenteCreateWithoutEnfasesInput = {
    idComponente: bigint | number;
    codigo: string;
    nome: string;
    chTotal: number;
    modalidade: string;
    ativo?: boolean;
    concluidos?: Prisma.ConcluiuCreateNestedManyWithoutComponenteInput;
    preRequisitos?: Prisma.PreRequisitoCreateNestedManyWithoutComponenteInput;
    exigidoPor?: Prisma.PreRequisitoCreateNestedManyWithoutExigidoInput;
    equivalencias?: Prisma.EquivalenciaCreateNestedManyWithoutComponenteInput;
    equivalenteDe?: Prisma.EquivalenciaCreateNestedManyWithoutEquivalenteInput;
};
export type ComponenteUncheckedCreateWithoutEnfasesInput = {
    idComponente: bigint | number;
    codigo: string;
    nome: string;
    chTotal: number;
    modalidade: string;
    ativo?: boolean;
    concluidos?: Prisma.ConcluiuUncheckedCreateNestedManyWithoutComponenteInput;
    preRequisitos?: Prisma.PreRequisitoUncheckedCreateNestedManyWithoutComponenteInput;
    exigidoPor?: Prisma.PreRequisitoUncheckedCreateNestedManyWithoutExigidoInput;
    equivalencias?: Prisma.EquivalenciaUncheckedCreateNestedManyWithoutComponenteInput;
    equivalenteDe?: Prisma.EquivalenciaUncheckedCreateNestedManyWithoutEquivalenteInput;
};
export type ComponenteCreateOrConnectWithoutEnfasesInput = {
    where: Prisma.ComponenteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ComponenteCreateWithoutEnfasesInput, Prisma.ComponenteUncheckedCreateWithoutEnfasesInput>;
};
export type ComponenteUpsertWithoutEnfasesInput = {
    update: Prisma.XOR<Prisma.ComponenteUpdateWithoutEnfasesInput, Prisma.ComponenteUncheckedUpdateWithoutEnfasesInput>;
    create: Prisma.XOR<Prisma.ComponenteCreateWithoutEnfasesInput, Prisma.ComponenteUncheckedCreateWithoutEnfasesInput>;
    where?: Prisma.ComponenteWhereInput;
};
export type ComponenteUpdateToOneWithWhereWithoutEnfasesInput = {
    where?: Prisma.ComponenteWhereInput;
    data: Prisma.XOR<Prisma.ComponenteUpdateWithoutEnfasesInput, Prisma.ComponenteUncheckedUpdateWithoutEnfasesInput>;
};
export type ComponenteUpdateWithoutEnfasesInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    chTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    modalidade?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    concluidos?: Prisma.ConcluiuUpdateManyWithoutComponenteNestedInput;
    preRequisitos?: Prisma.PreRequisitoUpdateManyWithoutComponenteNestedInput;
    exigidoPor?: Prisma.PreRequisitoUpdateManyWithoutExigidoNestedInput;
    equivalencias?: Prisma.EquivalenciaUpdateManyWithoutComponenteNestedInput;
    equivalenteDe?: Prisma.EquivalenciaUpdateManyWithoutEquivalenteNestedInput;
};
export type ComponenteUncheckedUpdateWithoutEnfasesInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    chTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    modalidade?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    concluidos?: Prisma.ConcluiuUncheckedUpdateManyWithoutComponenteNestedInput;
    preRequisitos?: Prisma.PreRequisitoUncheckedUpdateManyWithoutComponenteNestedInput;
    exigidoPor?: Prisma.PreRequisitoUncheckedUpdateManyWithoutExigidoNestedInput;
    equivalencias?: Prisma.EquivalenciaUncheckedUpdateManyWithoutComponenteNestedInput;
    equivalenteDe?: Prisma.EquivalenciaUncheckedUpdateManyWithoutEquivalenteNestedInput;
};
export type ComponenteCreateWithoutConcluidosInput = {
    idComponente: bigint | number;
    codigo: string;
    nome: string;
    chTotal: number;
    modalidade: string;
    ativo?: boolean;
    enfases?: Prisma.CompoeCreateNestedManyWithoutComponenteInput;
    preRequisitos?: Prisma.PreRequisitoCreateNestedManyWithoutComponenteInput;
    exigidoPor?: Prisma.PreRequisitoCreateNestedManyWithoutExigidoInput;
    equivalencias?: Prisma.EquivalenciaCreateNestedManyWithoutComponenteInput;
    equivalenteDe?: Prisma.EquivalenciaCreateNestedManyWithoutEquivalenteInput;
};
export type ComponenteUncheckedCreateWithoutConcluidosInput = {
    idComponente: bigint | number;
    codigo: string;
    nome: string;
    chTotal: number;
    modalidade: string;
    ativo?: boolean;
    enfases?: Prisma.CompoeUncheckedCreateNestedManyWithoutComponenteInput;
    preRequisitos?: Prisma.PreRequisitoUncheckedCreateNestedManyWithoutComponenteInput;
    exigidoPor?: Prisma.PreRequisitoUncheckedCreateNestedManyWithoutExigidoInput;
    equivalencias?: Prisma.EquivalenciaUncheckedCreateNestedManyWithoutComponenteInput;
    equivalenteDe?: Prisma.EquivalenciaUncheckedCreateNestedManyWithoutEquivalenteInput;
};
export type ComponenteCreateOrConnectWithoutConcluidosInput = {
    where: Prisma.ComponenteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ComponenteCreateWithoutConcluidosInput, Prisma.ComponenteUncheckedCreateWithoutConcluidosInput>;
};
export type ComponenteUpsertWithoutConcluidosInput = {
    update: Prisma.XOR<Prisma.ComponenteUpdateWithoutConcluidosInput, Prisma.ComponenteUncheckedUpdateWithoutConcluidosInput>;
    create: Prisma.XOR<Prisma.ComponenteCreateWithoutConcluidosInput, Prisma.ComponenteUncheckedCreateWithoutConcluidosInput>;
    where?: Prisma.ComponenteWhereInput;
};
export type ComponenteUpdateToOneWithWhereWithoutConcluidosInput = {
    where?: Prisma.ComponenteWhereInput;
    data: Prisma.XOR<Prisma.ComponenteUpdateWithoutConcluidosInput, Prisma.ComponenteUncheckedUpdateWithoutConcluidosInput>;
};
export type ComponenteUpdateWithoutConcluidosInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    chTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    modalidade?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    enfases?: Prisma.CompoeUpdateManyWithoutComponenteNestedInput;
    preRequisitos?: Prisma.PreRequisitoUpdateManyWithoutComponenteNestedInput;
    exigidoPor?: Prisma.PreRequisitoUpdateManyWithoutExigidoNestedInput;
    equivalencias?: Prisma.EquivalenciaUpdateManyWithoutComponenteNestedInput;
    equivalenteDe?: Prisma.EquivalenciaUpdateManyWithoutEquivalenteNestedInput;
};
export type ComponenteUncheckedUpdateWithoutConcluidosInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    chTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    modalidade?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    enfases?: Prisma.CompoeUncheckedUpdateManyWithoutComponenteNestedInput;
    preRequisitos?: Prisma.PreRequisitoUncheckedUpdateManyWithoutComponenteNestedInput;
    exigidoPor?: Prisma.PreRequisitoUncheckedUpdateManyWithoutExigidoNestedInput;
    equivalencias?: Prisma.EquivalenciaUncheckedUpdateManyWithoutComponenteNestedInput;
    equivalenteDe?: Prisma.EquivalenciaUncheckedUpdateManyWithoutEquivalenteNestedInput;
};
export type ComponenteCreateWithoutPreRequisitosInput = {
    idComponente: bigint | number;
    codigo: string;
    nome: string;
    chTotal: number;
    modalidade: string;
    ativo?: boolean;
    enfases?: Prisma.CompoeCreateNestedManyWithoutComponenteInput;
    concluidos?: Prisma.ConcluiuCreateNestedManyWithoutComponenteInput;
    exigidoPor?: Prisma.PreRequisitoCreateNestedManyWithoutExigidoInput;
    equivalencias?: Prisma.EquivalenciaCreateNestedManyWithoutComponenteInput;
    equivalenteDe?: Prisma.EquivalenciaCreateNestedManyWithoutEquivalenteInput;
};
export type ComponenteUncheckedCreateWithoutPreRequisitosInput = {
    idComponente: bigint | number;
    codigo: string;
    nome: string;
    chTotal: number;
    modalidade: string;
    ativo?: boolean;
    enfases?: Prisma.CompoeUncheckedCreateNestedManyWithoutComponenteInput;
    concluidos?: Prisma.ConcluiuUncheckedCreateNestedManyWithoutComponenteInput;
    exigidoPor?: Prisma.PreRequisitoUncheckedCreateNestedManyWithoutExigidoInput;
    equivalencias?: Prisma.EquivalenciaUncheckedCreateNestedManyWithoutComponenteInput;
    equivalenteDe?: Prisma.EquivalenciaUncheckedCreateNestedManyWithoutEquivalenteInput;
};
export type ComponenteCreateOrConnectWithoutPreRequisitosInput = {
    where: Prisma.ComponenteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ComponenteCreateWithoutPreRequisitosInput, Prisma.ComponenteUncheckedCreateWithoutPreRequisitosInput>;
};
export type ComponenteCreateWithoutExigidoPorInput = {
    idComponente: bigint | number;
    codigo: string;
    nome: string;
    chTotal: number;
    modalidade: string;
    ativo?: boolean;
    enfases?: Prisma.CompoeCreateNestedManyWithoutComponenteInput;
    concluidos?: Prisma.ConcluiuCreateNestedManyWithoutComponenteInput;
    preRequisitos?: Prisma.PreRequisitoCreateNestedManyWithoutComponenteInput;
    equivalencias?: Prisma.EquivalenciaCreateNestedManyWithoutComponenteInput;
    equivalenteDe?: Prisma.EquivalenciaCreateNestedManyWithoutEquivalenteInput;
};
export type ComponenteUncheckedCreateWithoutExigidoPorInput = {
    idComponente: bigint | number;
    codigo: string;
    nome: string;
    chTotal: number;
    modalidade: string;
    ativo?: boolean;
    enfases?: Prisma.CompoeUncheckedCreateNestedManyWithoutComponenteInput;
    concluidos?: Prisma.ConcluiuUncheckedCreateNestedManyWithoutComponenteInput;
    preRequisitos?: Prisma.PreRequisitoUncheckedCreateNestedManyWithoutComponenteInput;
    equivalencias?: Prisma.EquivalenciaUncheckedCreateNestedManyWithoutComponenteInput;
    equivalenteDe?: Prisma.EquivalenciaUncheckedCreateNestedManyWithoutEquivalenteInput;
};
export type ComponenteCreateOrConnectWithoutExigidoPorInput = {
    where: Prisma.ComponenteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ComponenteCreateWithoutExigidoPorInput, Prisma.ComponenteUncheckedCreateWithoutExigidoPorInput>;
};
export type ComponenteUpsertWithoutPreRequisitosInput = {
    update: Prisma.XOR<Prisma.ComponenteUpdateWithoutPreRequisitosInput, Prisma.ComponenteUncheckedUpdateWithoutPreRequisitosInput>;
    create: Prisma.XOR<Prisma.ComponenteCreateWithoutPreRequisitosInput, Prisma.ComponenteUncheckedCreateWithoutPreRequisitosInput>;
    where?: Prisma.ComponenteWhereInput;
};
export type ComponenteUpdateToOneWithWhereWithoutPreRequisitosInput = {
    where?: Prisma.ComponenteWhereInput;
    data: Prisma.XOR<Prisma.ComponenteUpdateWithoutPreRequisitosInput, Prisma.ComponenteUncheckedUpdateWithoutPreRequisitosInput>;
};
export type ComponenteUpdateWithoutPreRequisitosInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    chTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    modalidade?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    enfases?: Prisma.CompoeUpdateManyWithoutComponenteNestedInput;
    concluidos?: Prisma.ConcluiuUpdateManyWithoutComponenteNestedInput;
    exigidoPor?: Prisma.PreRequisitoUpdateManyWithoutExigidoNestedInput;
    equivalencias?: Prisma.EquivalenciaUpdateManyWithoutComponenteNestedInput;
    equivalenteDe?: Prisma.EquivalenciaUpdateManyWithoutEquivalenteNestedInput;
};
export type ComponenteUncheckedUpdateWithoutPreRequisitosInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    chTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    modalidade?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    enfases?: Prisma.CompoeUncheckedUpdateManyWithoutComponenteNestedInput;
    concluidos?: Prisma.ConcluiuUncheckedUpdateManyWithoutComponenteNestedInput;
    exigidoPor?: Prisma.PreRequisitoUncheckedUpdateManyWithoutExigidoNestedInput;
    equivalencias?: Prisma.EquivalenciaUncheckedUpdateManyWithoutComponenteNestedInput;
    equivalenteDe?: Prisma.EquivalenciaUncheckedUpdateManyWithoutEquivalenteNestedInput;
};
export type ComponenteUpsertWithoutExigidoPorInput = {
    update: Prisma.XOR<Prisma.ComponenteUpdateWithoutExigidoPorInput, Prisma.ComponenteUncheckedUpdateWithoutExigidoPorInput>;
    create: Prisma.XOR<Prisma.ComponenteCreateWithoutExigidoPorInput, Prisma.ComponenteUncheckedCreateWithoutExigidoPorInput>;
    where?: Prisma.ComponenteWhereInput;
};
export type ComponenteUpdateToOneWithWhereWithoutExigidoPorInput = {
    where?: Prisma.ComponenteWhereInput;
    data: Prisma.XOR<Prisma.ComponenteUpdateWithoutExigidoPorInput, Prisma.ComponenteUncheckedUpdateWithoutExigidoPorInput>;
};
export type ComponenteUpdateWithoutExigidoPorInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    chTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    modalidade?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    enfases?: Prisma.CompoeUpdateManyWithoutComponenteNestedInput;
    concluidos?: Prisma.ConcluiuUpdateManyWithoutComponenteNestedInput;
    preRequisitos?: Prisma.PreRequisitoUpdateManyWithoutComponenteNestedInput;
    equivalencias?: Prisma.EquivalenciaUpdateManyWithoutComponenteNestedInput;
    equivalenteDe?: Prisma.EquivalenciaUpdateManyWithoutEquivalenteNestedInput;
};
export type ComponenteUncheckedUpdateWithoutExigidoPorInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    chTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    modalidade?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    enfases?: Prisma.CompoeUncheckedUpdateManyWithoutComponenteNestedInput;
    concluidos?: Prisma.ConcluiuUncheckedUpdateManyWithoutComponenteNestedInput;
    preRequisitos?: Prisma.PreRequisitoUncheckedUpdateManyWithoutComponenteNestedInput;
    equivalencias?: Prisma.EquivalenciaUncheckedUpdateManyWithoutComponenteNestedInput;
    equivalenteDe?: Prisma.EquivalenciaUncheckedUpdateManyWithoutEquivalenteNestedInput;
};
export type ComponenteCreateWithoutEquivalenciasInput = {
    idComponente: bigint | number;
    codigo: string;
    nome: string;
    chTotal: number;
    modalidade: string;
    ativo?: boolean;
    enfases?: Prisma.CompoeCreateNestedManyWithoutComponenteInput;
    concluidos?: Prisma.ConcluiuCreateNestedManyWithoutComponenteInput;
    preRequisitos?: Prisma.PreRequisitoCreateNestedManyWithoutComponenteInput;
    exigidoPor?: Prisma.PreRequisitoCreateNestedManyWithoutExigidoInput;
    equivalenteDe?: Prisma.EquivalenciaCreateNestedManyWithoutEquivalenteInput;
};
export type ComponenteUncheckedCreateWithoutEquivalenciasInput = {
    idComponente: bigint | number;
    codigo: string;
    nome: string;
    chTotal: number;
    modalidade: string;
    ativo?: boolean;
    enfases?: Prisma.CompoeUncheckedCreateNestedManyWithoutComponenteInput;
    concluidos?: Prisma.ConcluiuUncheckedCreateNestedManyWithoutComponenteInput;
    preRequisitos?: Prisma.PreRequisitoUncheckedCreateNestedManyWithoutComponenteInput;
    exigidoPor?: Prisma.PreRequisitoUncheckedCreateNestedManyWithoutExigidoInput;
    equivalenteDe?: Prisma.EquivalenciaUncheckedCreateNestedManyWithoutEquivalenteInput;
};
export type ComponenteCreateOrConnectWithoutEquivalenciasInput = {
    where: Prisma.ComponenteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ComponenteCreateWithoutEquivalenciasInput, Prisma.ComponenteUncheckedCreateWithoutEquivalenciasInput>;
};
export type ComponenteCreateWithoutEquivalenteDeInput = {
    idComponente: bigint | number;
    codigo: string;
    nome: string;
    chTotal: number;
    modalidade: string;
    ativo?: boolean;
    enfases?: Prisma.CompoeCreateNestedManyWithoutComponenteInput;
    concluidos?: Prisma.ConcluiuCreateNestedManyWithoutComponenteInput;
    preRequisitos?: Prisma.PreRequisitoCreateNestedManyWithoutComponenteInput;
    exigidoPor?: Prisma.PreRequisitoCreateNestedManyWithoutExigidoInput;
    equivalencias?: Prisma.EquivalenciaCreateNestedManyWithoutComponenteInput;
};
export type ComponenteUncheckedCreateWithoutEquivalenteDeInput = {
    idComponente: bigint | number;
    codigo: string;
    nome: string;
    chTotal: number;
    modalidade: string;
    ativo?: boolean;
    enfases?: Prisma.CompoeUncheckedCreateNestedManyWithoutComponenteInput;
    concluidos?: Prisma.ConcluiuUncheckedCreateNestedManyWithoutComponenteInput;
    preRequisitos?: Prisma.PreRequisitoUncheckedCreateNestedManyWithoutComponenteInput;
    exigidoPor?: Prisma.PreRequisitoUncheckedCreateNestedManyWithoutExigidoInput;
    equivalencias?: Prisma.EquivalenciaUncheckedCreateNestedManyWithoutComponenteInput;
};
export type ComponenteCreateOrConnectWithoutEquivalenteDeInput = {
    where: Prisma.ComponenteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ComponenteCreateWithoutEquivalenteDeInput, Prisma.ComponenteUncheckedCreateWithoutEquivalenteDeInput>;
};
export type ComponenteUpsertWithoutEquivalenciasInput = {
    update: Prisma.XOR<Prisma.ComponenteUpdateWithoutEquivalenciasInput, Prisma.ComponenteUncheckedUpdateWithoutEquivalenciasInput>;
    create: Prisma.XOR<Prisma.ComponenteCreateWithoutEquivalenciasInput, Prisma.ComponenteUncheckedCreateWithoutEquivalenciasInput>;
    where?: Prisma.ComponenteWhereInput;
};
export type ComponenteUpdateToOneWithWhereWithoutEquivalenciasInput = {
    where?: Prisma.ComponenteWhereInput;
    data: Prisma.XOR<Prisma.ComponenteUpdateWithoutEquivalenciasInput, Prisma.ComponenteUncheckedUpdateWithoutEquivalenciasInput>;
};
export type ComponenteUpdateWithoutEquivalenciasInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    chTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    modalidade?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    enfases?: Prisma.CompoeUpdateManyWithoutComponenteNestedInput;
    concluidos?: Prisma.ConcluiuUpdateManyWithoutComponenteNestedInput;
    preRequisitos?: Prisma.PreRequisitoUpdateManyWithoutComponenteNestedInput;
    exigidoPor?: Prisma.PreRequisitoUpdateManyWithoutExigidoNestedInput;
    equivalenteDe?: Prisma.EquivalenciaUpdateManyWithoutEquivalenteNestedInput;
};
export type ComponenteUncheckedUpdateWithoutEquivalenciasInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    chTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    modalidade?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    enfases?: Prisma.CompoeUncheckedUpdateManyWithoutComponenteNestedInput;
    concluidos?: Prisma.ConcluiuUncheckedUpdateManyWithoutComponenteNestedInput;
    preRequisitos?: Prisma.PreRequisitoUncheckedUpdateManyWithoutComponenteNestedInput;
    exigidoPor?: Prisma.PreRequisitoUncheckedUpdateManyWithoutExigidoNestedInput;
    equivalenteDe?: Prisma.EquivalenciaUncheckedUpdateManyWithoutEquivalenteNestedInput;
};
export type ComponenteUpsertWithoutEquivalenteDeInput = {
    update: Prisma.XOR<Prisma.ComponenteUpdateWithoutEquivalenteDeInput, Prisma.ComponenteUncheckedUpdateWithoutEquivalenteDeInput>;
    create: Prisma.XOR<Prisma.ComponenteCreateWithoutEquivalenteDeInput, Prisma.ComponenteUncheckedCreateWithoutEquivalenteDeInput>;
    where?: Prisma.ComponenteWhereInput;
};
export type ComponenteUpdateToOneWithWhereWithoutEquivalenteDeInput = {
    where?: Prisma.ComponenteWhereInput;
    data: Prisma.XOR<Prisma.ComponenteUpdateWithoutEquivalenteDeInput, Prisma.ComponenteUncheckedUpdateWithoutEquivalenteDeInput>;
};
export type ComponenteUpdateWithoutEquivalenteDeInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    chTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    modalidade?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    enfases?: Prisma.CompoeUpdateManyWithoutComponenteNestedInput;
    concluidos?: Prisma.ConcluiuUpdateManyWithoutComponenteNestedInput;
    preRequisitos?: Prisma.PreRequisitoUpdateManyWithoutComponenteNestedInput;
    exigidoPor?: Prisma.PreRequisitoUpdateManyWithoutExigidoNestedInput;
    equivalencias?: Prisma.EquivalenciaUpdateManyWithoutComponenteNestedInput;
};
export type ComponenteUncheckedUpdateWithoutEquivalenteDeInput = {
    idComponente?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    chTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    modalidade?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    enfases?: Prisma.CompoeUncheckedUpdateManyWithoutComponenteNestedInput;
    concluidos?: Prisma.ConcluiuUncheckedUpdateManyWithoutComponenteNestedInput;
    preRequisitos?: Prisma.PreRequisitoUncheckedUpdateManyWithoutComponenteNestedInput;
    exigidoPor?: Prisma.PreRequisitoUncheckedUpdateManyWithoutExigidoNestedInput;
    equivalencias?: Prisma.EquivalenciaUncheckedUpdateManyWithoutComponenteNestedInput;
};
export type ComponenteCountOutputType = {
    enfases: number;
    concluidos: number;
    preRequisitos: number;
    exigidoPor: number;
    equivalencias: number;
    equivalenteDe: number;
};
export type ComponenteCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    enfases?: boolean | ComponenteCountOutputTypeCountEnfasesArgs;
    concluidos?: boolean | ComponenteCountOutputTypeCountConcluidosArgs;
    preRequisitos?: boolean | ComponenteCountOutputTypeCountPreRequisitosArgs;
    exigidoPor?: boolean | ComponenteCountOutputTypeCountExigidoPorArgs;
    equivalencias?: boolean | ComponenteCountOutputTypeCountEquivalenciasArgs;
    equivalenteDe?: boolean | ComponenteCountOutputTypeCountEquivalenteDeArgs;
};
export type ComponenteCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComponenteCountOutputTypeSelect<ExtArgs> | null;
};
export type ComponenteCountOutputTypeCountEnfasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CompoeWhereInput;
};
export type ComponenteCountOutputTypeCountConcluidosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConcluiuWhereInput;
};
export type ComponenteCountOutputTypeCountPreRequisitosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PreRequisitoWhereInput;
};
export type ComponenteCountOutputTypeCountExigidoPorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PreRequisitoWhereInput;
};
export type ComponenteCountOutputTypeCountEquivalenciasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EquivalenciaWhereInput;
};
export type ComponenteCountOutputTypeCountEquivalenteDeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EquivalenciaWhereInput;
};
export type ComponenteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idComponente?: boolean;
    codigo?: boolean;
    nome?: boolean;
    chTotal?: boolean;
    modalidade?: boolean;
    ativo?: boolean;
    enfases?: boolean | Prisma.Componente$enfasesArgs<ExtArgs>;
    concluidos?: boolean | Prisma.Componente$concluidosArgs<ExtArgs>;
    preRequisitos?: boolean | Prisma.Componente$preRequisitosArgs<ExtArgs>;
    exigidoPor?: boolean | Prisma.Componente$exigidoPorArgs<ExtArgs>;
    equivalencias?: boolean | Prisma.Componente$equivalenciasArgs<ExtArgs>;
    equivalenteDe?: boolean | Prisma.Componente$equivalenteDeArgs<ExtArgs>;
    _count?: boolean | Prisma.ComponenteCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["componente"]>;
export type ComponenteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idComponente?: boolean;
    codigo?: boolean;
    nome?: boolean;
    chTotal?: boolean;
    modalidade?: boolean;
    ativo?: boolean;
}, ExtArgs["result"]["componente"]>;
export type ComponenteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idComponente?: boolean;
    codigo?: boolean;
    nome?: boolean;
    chTotal?: boolean;
    modalidade?: boolean;
    ativo?: boolean;
}, ExtArgs["result"]["componente"]>;
export type ComponenteSelectScalar = {
    idComponente?: boolean;
    codigo?: boolean;
    nome?: boolean;
    chTotal?: boolean;
    modalidade?: boolean;
    ativo?: boolean;
};
export type ComponenteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"idComponente" | "codigo" | "nome" | "chTotal" | "modalidade" | "ativo", ExtArgs["result"]["componente"]>;
export type ComponenteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    enfases?: boolean | Prisma.Componente$enfasesArgs<ExtArgs>;
    concluidos?: boolean | Prisma.Componente$concluidosArgs<ExtArgs>;
    preRequisitos?: boolean | Prisma.Componente$preRequisitosArgs<ExtArgs>;
    exigidoPor?: boolean | Prisma.Componente$exigidoPorArgs<ExtArgs>;
    equivalencias?: boolean | Prisma.Componente$equivalenciasArgs<ExtArgs>;
    equivalenteDe?: boolean | Prisma.Componente$equivalenteDeArgs<ExtArgs>;
    _count?: boolean | Prisma.ComponenteCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ComponenteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ComponenteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ComponentePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Componente";
    objects: {
        enfases: Prisma.$CompoePayload<ExtArgs>[];
        concluidos: Prisma.$ConcluiuPayload<ExtArgs>[];
        preRequisitos: Prisma.$PreRequisitoPayload<ExtArgs>[];
        exigidoPor: Prisma.$PreRequisitoPayload<ExtArgs>[];
        equivalencias: Prisma.$EquivalenciaPayload<ExtArgs>[];
        equivalenteDe: Prisma.$EquivalenciaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        idComponente: bigint;
        codigo: string;
        nome: string;
        chTotal: number;
        modalidade: string;
        ativo: boolean;
    }, ExtArgs["result"]["componente"]>;
    composites: {};
};
export type ComponenteGetPayload<S extends boolean | null | undefined | ComponenteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ComponentePayload, S>;
export type ComponenteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ComponenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ComponenteCountAggregateInputType | true;
};
export interface ComponenteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Componente'];
        meta: {
            name: 'Componente';
        };
    };
    findUnique<T extends ComponenteFindUniqueArgs>(args: Prisma.SelectSubset<T, ComponenteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ComponenteClient<runtime.Types.Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ComponenteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ComponenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ComponenteClient<runtime.Types.Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ComponenteFindFirstArgs>(args?: Prisma.SelectSubset<T, ComponenteFindFirstArgs<ExtArgs>>): Prisma.Prisma__ComponenteClient<runtime.Types.Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ComponenteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ComponenteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ComponenteClient<runtime.Types.Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ComponenteFindManyArgs>(args?: Prisma.SelectSubset<T, ComponenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ComponenteCreateArgs>(args: Prisma.SelectSubset<T, ComponenteCreateArgs<ExtArgs>>): Prisma.Prisma__ComponenteClient<runtime.Types.Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ComponenteCreateManyArgs>(args?: Prisma.SelectSubset<T, ComponenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ComponenteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ComponenteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ComponenteDeleteArgs>(args: Prisma.SelectSubset<T, ComponenteDeleteArgs<ExtArgs>>): Prisma.Prisma__ComponenteClient<runtime.Types.Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ComponenteUpdateArgs>(args: Prisma.SelectSubset<T, ComponenteUpdateArgs<ExtArgs>>): Prisma.Prisma__ComponenteClient<runtime.Types.Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ComponenteDeleteManyArgs>(args?: Prisma.SelectSubset<T, ComponenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ComponenteUpdateManyArgs>(args: Prisma.SelectSubset<T, ComponenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ComponenteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ComponenteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ComponenteUpsertArgs>(args: Prisma.SelectSubset<T, ComponenteUpsertArgs<ExtArgs>>): Prisma.Prisma__ComponenteClient<runtime.Types.Result.GetResult<Prisma.$ComponentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ComponenteCountArgs>(args?: Prisma.Subset<T, ComponenteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ComponenteCountAggregateOutputType> : number>;
    aggregate<T extends ComponenteAggregateArgs>(args: Prisma.Subset<T, ComponenteAggregateArgs>): Prisma.PrismaPromise<GetComponenteAggregateType<T>>;
    groupBy<T extends ComponenteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ComponenteGroupByArgs['orderBy'];
    } : {
        orderBy?: ComponenteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ComponenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComponenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ComponenteFieldRefs;
}
export interface Prisma__ComponenteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    enfases<T extends Prisma.Componente$enfasesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Componente$enfasesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CompoePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    concluidos<T extends Prisma.Componente$concluidosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Componente$concluidosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConcluiuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    preRequisitos<T extends Prisma.Componente$preRequisitosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Componente$preRequisitosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PreRequisitoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    exigidoPor<T extends Prisma.Componente$exigidoPorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Componente$exigidoPorArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PreRequisitoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    equivalencias<T extends Prisma.Componente$equivalenciasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Componente$equivalenciasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EquivalenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    equivalenteDe<T extends Prisma.Componente$equivalenteDeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Componente$equivalenteDeArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EquivalenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ComponenteFieldRefs {
    readonly idComponente: Prisma.FieldRef<"Componente", 'BigInt'>;
    readonly codigo: Prisma.FieldRef<"Componente", 'String'>;
    readonly nome: Prisma.FieldRef<"Componente", 'String'>;
    readonly chTotal: Prisma.FieldRef<"Componente", 'Int'>;
    readonly modalidade: Prisma.FieldRef<"Componente", 'String'>;
    readonly ativo: Prisma.FieldRef<"Componente", 'Boolean'>;
}
export type ComponenteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComponenteSelect<ExtArgs> | null;
    omit?: Prisma.ComponenteOmit<ExtArgs> | null;
    include?: Prisma.ComponenteInclude<ExtArgs> | null;
    where: Prisma.ComponenteWhereUniqueInput;
};
export type ComponenteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComponenteSelect<ExtArgs> | null;
    omit?: Prisma.ComponenteOmit<ExtArgs> | null;
    include?: Prisma.ComponenteInclude<ExtArgs> | null;
    where: Prisma.ComponenteWhereUniqueInput;
};
export type ComponenteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComponenteSelect<ExtArgs> | null;
    omit?: Prisma.ComponenteOmit<ExtArgs> | null;
    include?: Prisma.ComponenteInclude<ExtArgs> | null;
    where?: Prisma.ComponenteWhereInput;
    orderBy?: Prisma.ComponenteOrderByWithRelationInput | Prisma.ComponenteOrderByWithRelationInput[];
    cursor?: Prisma.ComponenteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ComponenteScalarFieldEnum | Prisma.ComponenteScalarFieldEnum[];
};
export type ComponenteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComponenteSelect<ExtArgs> | null;
    omit?: Prisma.ComponenteOmit<ExtArgs> | null;
    include?: Prisma.ComponenteInclude<ExtArgs> | null;
    where?: Prisma.ComponenteWhereInput;
    orderBy?: Prisma.ComponenteOrderByWithRelationInput | Prisma.ComponenteOrderByWithRelationInput[];
    cursor?: Prisma.ComponenteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ComponenteScalarFieldEnum | Prisma.ComponenteScalarFieldEnum[];
};
export type ComponenteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComponenteSelect<ExtArgs> | null;
    omit?: Prisma.ComponenteOmit<ExtArgs> | null;
    include?: Prisma.ComponenteInclude<ExtArgs> | null;
    where?: Prisma.ComponenteWhereInput;
    orderBy?: Prisma.ComponenteOrderByWithRelationInput | Prisma.ComponenteOrderByWithRelationInput[];
    cursor?: Prisma.ComponenteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ComponenteScalarFieldEnum | Prisma.ComponenteScalarFieldEnum[];
};
export type ComponenteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComponenteSelect<ExtArgs> | null;
    omit?: Prisma.ComponenteOmit<ExtArgs> | null;
    include?: Prisma.ComponenteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ComponenteCreateInput, Prisma.ComponenteUncheckedCreateInput>;
};
export type ComponenteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ComponenteCreateManyInput | Prisma.ComponenteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ComponenteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComponenteSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ComponenteOmit<ExtArgs> | null;
    data: Prisma.ComponenteCreateManyInput | Prisma.ComponenteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ComponenteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComponenteSelect<ExtArgs> | null;
    omit?: Prisma.ComponenteOmit<ExtArgs> | null;
    include?: Prisma.ComponenteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ComponenteUpdateInput, Prisma.ComponenteUncheckedUpdateInput>;
    where: Prisma.ComponenteWhereUniqueInput;
};
export type ComponenteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ComponenteUpdateManyMutationInput, Prisma.ComponenteUncheckedUpdateManyInput>;
    where?: Prisma.ComponenteWhereInput;
    limit?: number;
};
export type ComponenteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComponenteSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ComponenteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ComponenteUpdateManyMutationInput, Prisma.ComponenteUncheckedUpdateManyInput>;
    where?: Prisma.ComponenteWhereInput;
    limit?: number;
};
export type ComponenteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComponenteSelect<ExtArgs> | null;
    omit?: Prisma.ComponenteOmit<ExtArgs> | null;
    include?: Prisma.ComponenteInclude<ExtArgs> | null;
    where: Prisma.ComponenteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ComponenteCreateInput, Prisma.ComponenteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ComponenteUpdateInput, Prisma.ComponenteUncheckedUpdateInput>;
};
export type ComponenteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComponenteSelect<ExtArgs> | null;
    omit?: Prisma.ComponenteOmit<ExtArgs> | null;
    include?: Prisma.ComponenteInclude<ExtArgs> | null;
    where: Prisma.ComponenteWhereUniqueInput;
};
export type ComponenteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComponenteWhereInput;
    limit?: number;
};
export type Componente$enfasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Componente$concluidosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Componente$preRequisitosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Componente$exigidoPorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Componente$equivalenciasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Componente$equivalenteDeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ComponenteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComponenteSelect<ExtArgs> | null;
    omit?: Prisma.ComponenteOmit<ExtArgs> | null;
    include?: Prisma.ComponenteInclude<ExtArgs> | null;
};
