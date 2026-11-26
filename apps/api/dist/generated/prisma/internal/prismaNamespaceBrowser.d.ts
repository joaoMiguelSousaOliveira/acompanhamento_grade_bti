import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client/runtime/client").DbNullClass;
export declare const JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
export declare const AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
export declare const ModelName: {
    readonly EstruturaCurricular: "EstruturaCurricular";
    readonly Aluno: "Aluno";
    readonly Credencial: "Credencial";
    readonly SessaoRefresh: "SessaoRefresh";
    readonly Enfase: "Enfase";
    readonly Componente: "Componente";
    readonly Compoe: "Compoe";
    readonly Concluiu: "Concluiu";
    readonly Acompanha: "Acompanha";
    readonly PreRequisito: "PreRequisito";
    readonly Equivalencia: "Equivalencia";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const EstruturaCurricularScalarFieldEnum: {
    readonly idEstrutura: "idEstrutura";
    readonly codigo: "codigo";
    readonly nomeMatriz: "nomeMatriz";
    readonly anoEntradaVigor: "anoEntradaVigor";
    readonly semestreConclusaoIdeal: "semestreConclusaoIdeal";
    readonly chTotalMinima: "chTotalMinima";
    readonly chOptativasMinima: "chOptativasMinima";
};
export type EstruturaCurricularScalarFieldEnum = (typeof EstruturaCurricularScalarFieldEnum)[keyof typeof EstruturaCurricularScalarFieldEnum];
export declare const AlunoScalarFieldEnum: {
    readonly matricula: "matricula";
    readonly nome: "nome";
    readonly email: "email";
    readonly idEstrutura: "idEstrutura";
};
export type AlunoScalarFieldEnum = (typeof AlunoScalarFieldEnum)[keyof typeof AlunoScalarFieldEnum];
export declare const CredencialScalarFieldEnum: {
    readonly matricula: "matricula";
    readonly senhaHash: "senhaHash";
    readonly atualizadoEm: "atualizadoEm";
};
export type CredencialScalarFieldEnum = (typeof CredencialScalarFieldEnum)[keyof typeof CredencialScalarFieldEnum];
export declare const SessaoRefreshScalarFieldEnum: {
    readonly id: "id";
    readonly matricula: "matricula";
    readonly tokenHash: "tokenHash";
    readonly criadoEm: "criadoEm";
    readonly expiraEm: "expiraEm";
    readonly revogadoEm: "revogadoEm";
};
export type SessaoRefreshScalarFieldEnum = (typeof SessaoRefreshScalarFieldEnum)[keyof typeof SessaoRefreshScalarFieldEnum];
export declare const EnfaseScalarFieldEnum: {
    readonly idEnfase: "idEnfase";
    readonly nome: "nome";
};
export type EnfaseScalarFieldEnum = (typeof EnfaseScalarFieldEnum)[keyof typeof EnfaseScalarFieldEnum];
export declare const ComponenteScalarFieldEnum: {
    readonly idComponente: "idComponente";
    readonly codigo: "codigo";
    readonly nome: "nome";
    readonly chTotal: "chTotal";
    readonly modalidade: "modalidade";
    readonly ativo: "ativo";
};
export type ComponenteScalarFieldEnum = (typeof ComponenteScalarFieldEnum)[keyof typeof ComponenteScalarFieldEnum];
export declare const CompoeScalarFieldEnum: {
    readonly idEnfase: "idEnfase";
    readonly idComponente: "idComponente";
    readonly tipo: "tipo";
};
export type CompoeScalarFieldEnum = (typeof CompoeScalarFieldEnum)[keyof typeof CompoeScalarFieldEnum];
export declare const ConcluiuScalarFieldEnum: {
    readonly matricula: "matricula";
    readonly idComponente: "idComponente";
    readonly semestreConclusao: "semestreConclusao";
};
export type ConcluiuScalarFieldEnum = (typeof ConcluiuScalarFieldEnum)[keyof typeof ConcluiuScalarFieldEnum];
export declare const AcompanhaScalarFieldEnum: {
    readonly matricula: "matricula";
    readonly idEnfase: "idEnfase";
    readonly dataInicio: "dataInicio";
};
export type AcompanhaScalarFieldEnum = (typeof AcompanhaScalarFieldEnum)[keyof typeof AcompanhaScalarFieldEnum];
export declare const PreRequisitoScalarFieldEnum: {
    readonly idComponente: "idComponente";
    readonly idExigido: "idExigido";
    readonly grupoAlternativa: "grupoAlternativa";
};
export type PreRequisitoScalarFieldEnum = (typeof PreRequisitoScalarFieldEnum)[keyof typeof PreRequisitoScalarFieldEnum];
export declare const EquivalenciaScalarFieldEnum: {
    readonly idComponente: "idComponente";
    readonly idEquivalente: "idEquivalente";
    readonly grupoAlternativa: "grupoAlternativa";
};
export type EquivalenciaScalarFieldEnum = (typeof EquivalenciaScalarFieldEnum)[keyof typeof EquivalenciaScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
