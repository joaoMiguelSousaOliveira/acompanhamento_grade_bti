import * as runtime from "@prisma/client/runtime/index-browser";
export const Decimal = runtime.Decimal;
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    EstruturaCurricular: 'EstruturaCurricular',
    Aluno: 'Aluno',
    Credencial: 'Credencial',
    SessaoRefresh: 'SessaoRefresh',
    Enfase: 'Enfase',
    Componente: 'Componente',
    Compoe: 'Compoe',
    Concluiu: 'Concluiu',
    Acompanha: 'Acompanha',
    PreRequisito: 'PreRequisito',
    Equivalencia: 'Equivalencia'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const EstruturaCurricularScalarFieldEnum = {
    idEstrutura: 'idEstrutura',
    codigo: 'codigo',
    nomeMatriz: 'nomeMatriz',
    anoEntradaVigor: 'anoEntradaVigor',
    semestreConclusaoIdeal: 'semestreConclusaoIdeal',
    chTotalMinima: 'chTotalMinima',
    chOptativasMinima: 'chOptativasMinima'
};
export const AlunoScalarFieldEnum = {
    matricula: 'matricula',
    nome: 'nome',
    email: 'email',
    idEstrutura: 'idEstrutura'
};
export const CredencialScalarFieldEnum = {
    matricula: 'matricula',
    senhaHash: 'senhaHash',
    atualizadoEm: 'atualizadoEm'
};
export const SessaoRefreshScalarFieldEnum = {
    id: 'id',
    matricula: 'matricula',
    tokenHash: 'tokenHash',
    criadoEm: 'criadoEm',
    expiraEm: 'expiraEm',
    revogadoEm: 'revogadoEm'
};
export const EnfaseScalarFieldEnum = {
    idEnfase: 'idEnfase',
    nome: 'nome'
};
export const ComponenteScalarFieldEnum = {
    idComponente: 'idComponente',
    codigo: 'codigo',
    nome: 'nome',
    chTotal: 'chTotal',
    modalidade: 'modalidade',
    ativo: 'ativo'
};
export const CompoeScalarFieldEnum = {
    idEnfase: 'idEnfase',
    idComponente: 'idComponente',
    tipo: 'tipo'
};
export const ConcluiuScalarFieldEnum = {
    matricula: 'matricula',
    idComponente: 'idComponente',
    semestreConclusao: 'semestreConclusao'
};
export const AcompanhaScalarFieldEnum = {
    matricula: 'matricula',
    idEnfase: 'idEnfase',
    dataInicio: 'dataInicio'
};
export const PreRequisitoScalarFieldEnum = {
    idComponente: 'idComponente',
    idExigido: 'idExigido',
    grupoAlternativa: 'grupoAlternativa'
};
export const EquivalenciaScalarFieldEnum = {
    idComponente: 'idComponente',
    idEquivalente: 'idEquivalente',
    grupoAlternativa: 'grupoAlternativa'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map