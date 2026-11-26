import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "estruturaCurricular" | "aluno" | "credencial" | "sessaoRefresh" | "enfase" | "componente" | "compoe" | "concluiu" | "acompanha" | "preRequisito" | "equivalencia";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        EstruturaCurricular: {
            payload: Prisma.$EstruturaCurricularPayload<ExtArgs>;
            fields: Prisma.EstruturaCurricularFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EstruturaCurricularFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstruturaCurricularPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EstruturaCurricularFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstruturaCurricularPayload>;
                };
                findFirst: {
                    args: Prisma.EstruturaCurricularFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstruturaCurricularPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EstruturaCurricularFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstruturaCurricularPayload>;
                };
                findMany: {
                    args: Prisma.EstruturaCurricularFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstruturaCurricularPayload>[];
                };
                create: {
                    args: Prisma.EstruturaCurricularCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstruturaCurricularPayload>;
                };
                createMany: {
                    args: Prisma.EstruturaCurricularCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EstruturaCurricularCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstruturaCurricularPayload>[];
                };
                delete: {
                    args: Prisma.EstruturaCurricularDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstruturaCurricularPayload>;
                };
                update: {
                    args: Prisma.EstruturaCurricularUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstruturaCurricularPayload>;
                };
                deleteMany: {
                    args: Prisma.EstruturaCurricularDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EstruturaCurricularUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EstruturaCurricularUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstruturaCurricularPayload>[];
                };
                upsert: {
                    args: Prisma.EstruturaCurricularUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstruturaCurricularPayload>;
                };
                aggregate: {
                    args: Prisma.EstruturaCurricularAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEstruturaCurricular>;
                };
                groupBy: {
                    args: Prisma.EstruturaCurricularGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EstruturaCurricularGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EstruturaCurricularCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EstruturaCurricularCountAggregateOutputType> | number;
                };
            };
        };
        Aluno: {
            payload: Prisma.$AlunoPayload<ExtArgs>;
            fields: Prisma.AlunoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AlunoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlunoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AlunoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlunoPayload>;
                };
                findFirst: {
                    args: Prisma.AlunoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlunoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AlunoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlunoPayload>;
                };
                findMany: {
                    args: Prisma.AlunoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlunoPayload>[];
                };
                create: {
                    args: Prisma.AlunoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlunoPayload>;
                };
                createMany: {
                    args: Prisma.AlunoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AlunoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlunoPayload>[];
                };
                delete: {
                    args: Prisma.AlunoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlunoPayload>;
                };
                update: {
                    args: Prisma.AlunoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlunoPayload>;
                };
                deleteMany: {
                    args: Prisma.AlunoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AlunoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AlunoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlunoPayload>[];
                };
                upsert: {
                    args: Prisma.AlunoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlunoPayload>;
                };
                aggregate: {
                    args: Prisma.AlunoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAluno>;
                };
                groupBy: {
                    args: Prisma.AlunoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AlunoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AlunoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AlunoCountAggregateOutputType> | number;
                };
            };
        };
        Credencial: {
            payload: Prisma.$CredencialPayload<ExtArgs>;
            fields: Prisma.CredencialFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CredencialFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CredencialPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CredencialFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CredencialPayload>;
                };
                findFirst: {
                    args: Prisma.CredencialFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CredencialPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CredencialFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CredencialPayload>;
                };
                findMany: {
                    args: Prisma.CredencialFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CredencialPayload>[];
                };
                create: {
                    args: Prisma.CredencialCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CredencialPayload>;
                };
                createMany: {
                    args: Prisma.CredencialCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CredencialCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CredencialPayload>[];
                };
                delete: {
                    args: Prisma.CredencialDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CredencialPayload>;
                };
                update: {
                    args: Prisma.CredencialUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CredencialPayload>;
                };
                deleteMany: {
                    args: Prisma.CredencialDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CredencialUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CredencialUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CredencialPayload>[];
                };
                upsert: {
                    args: Prisma.CredencialUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CredencialPayload>;
                };
                aggregate: {
                    args: Prisma.CredencialAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCredencial>;
                };
                groupBy: {
                    args: Prisma.CredencialGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CredencialGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CredencialCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CredencialCountAggregateOutputType> | number;
                };
            };
        };
        SessaoRefresh: {
            payload: Prisma.$SessaoRefreshPayload<ExtArgs>;
            fields: Prisma.SessaoRefreshFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SessaoRefreshFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessaoRefreshPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SessaoRefreshFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessaoRefreshPayload>;
                };
                findFirst: {
                    args: Prisma.SessaoRefreshFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessaoRefreshPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SessaoRefreshFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessaoRefreshPayload>;
                };
                findMany: {
                    args: Prisma.SessaoRefreshFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessaoRefreshPayload>[];
                };
                create: {
                    args: Prisma.SessaoRefreshCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessaoRefreshPayload>;
                };
                createMany: {
                    args: Prisma.SessaoRefreshCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SessaoRefreshCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessaoRefreshPayload>[];
                };
                delete: {
                    args: Prisma.SessaoRefreshDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessaoRefreshPayload>;
                };
                update: {
                    args: Prisma.SessaoRefreshUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessaoRefreshPayload>;
                };
                deleteMany: {
                    args: Prisma.SessaoRefreshDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SessaoRefreshUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SessaoRefreshUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessaoRefreshPayload>[];
                };
                upsert: {
                    args: Prisma.SessaoRefreshUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessaoRefreshPayload>;
                };
                aggregate: {
                    args: Prisma.SessaoRefreshAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSessaoRefresh>;
                };
                groupBy: {
                    args: Prisma.SessaoRefreshGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessaoRefreshGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SessaoRefreshCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessaoRefreshCountAggregateOutputType> | number;
                };
            };
        };
        Enfase: {
            payload: Prisma.$EnfasePayload<ExtArgs>;
            fields: Prisma.EnfaseFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EnfaseFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnfasePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EnfaseFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnfasePayload>;
                };
                findFirst: {
                    args: Prisma.EnfaseFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnfasePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EnfaseFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnfasePayload>;
                };
                findMany: {
                    args: Prisma.EnfaseFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnfasePayload>[];
                };
                create: {
                    args: Prisma.EnfaseCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnfasePayload>;
                };
                createMany: {
                    args: Prisma.EnfaseCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EnfaseCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnfasePayload>[];
                };
                delete: {
                    args: Prisma.EnfaseDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnfasePayload>;
                };
                update: {
                    args: Prisma.EnfaseUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnfasePayload>;
                };
                deleteMany: {
                    args: Prisma.EnfaseDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EnfaseUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EnfaseUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnfasePayload>[];
                };
                upsert: {
                    args: Prisma.EnfaseUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnfasePayload>;
                };
                aggregate: {
                    args: Prisma.EnfaseAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEnfase>;
                };
                groupBy: {
                    args: Prisma.EnfaseGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EnfaseGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EnfaseCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EnfaseCountAggregateOutputType> | number;
                };
            };
        };
        Componente: {
            payload: Prisma.$ComponentePayload<ExtArgs>;
            fields: Prisma.ComponenteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ComponenteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComponentePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ComponenteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComponentePayload>;
                };
                findFirst: {
                    args: Prisma.ComponenteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComponentePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ComponenteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComponentePayload>;
                };
                findMany: {
                    args: Prisma.ComponenteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComponentePayload>[];
                };
                create: {
                    args: Prisma.ComponenteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComponentePayload>;
                };
                createMany: {
                    args: Prisma.ComponenteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ComponenteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComponentePayload>[];
                };
                delete: {
                    args: Prisma.ComponenteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComponentePayload>;
                };
                update: {
                    args: Prisma.ComponenteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComponentePayload>;
                };
                deleteMany: {
                    args: Prisma.ComponenteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ComponenteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ComponenteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComponentePayload>[];
                };
                upsert: {
                    args: Prisma.ComponenteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComponentePayload>;
                };
                aggregate: {
                    args: Prisma.ComponenteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateComponente>;
                };
                groupBy: {
                    args: Prisma.ComponenteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ComponenteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ComponenteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ComponenteCountAggregateOutputType> | number;
                };
            };
        };
        Compoe: {
            payload: Prisma.$CompoePayload<ExtArgs>;
            fields: Prisma.CompoeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CompoeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompoePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CompoeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompoePayload>;
                };
                findFirst: {
                    args: Prisma.CompoeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompoePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CompoeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompoePayload>;
                };
                findMany: {
                    args: Prisma.CompoeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompoePayload>[];
                };
                create: {
                    args: Prisma.CompoeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompoePayload>;
                };
                createMany: {
                    args: Prisma.CompoeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CompoeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompoePayload>[];
                };
                delete: {
                    args: Prisma.CompoeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompoePayload>;
                };
                update: {
                    args: Prisma.CompoeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompoePayload>;
                };
                deleteMany: {
                    args: Prisma.CompoeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CompoeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CompoeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompoePayload>[];
                };
                upsert: {
                    args: Prisma.CompoeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompoePayload>;
                };
                aggregate: {
                    args: Prisma.CompoeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCompoe>;
                };
                groupBy: {
                    args: Prisma.CompoeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CompoeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CompoeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CompoeCountAggregateOutputType> | number;
                };
            };
        };
        Concluiu: {
            payload: Prisma.$ConcluiuPayload<ExtArgs>;
            fields: Prisma.ConcluiuFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ConcluiuFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConcluiuPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ConcluiuFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConcluiuPayload>;
                };
                findFirst: {
                    args: Prisma.ConcluiuFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConcluiuPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ConcluiuFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConcluiuPayload>;
                };
                findMany: {
                    args: Prisma.ConcluiuFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConcluiuPayload>[];
                };
                create: {
                    args: Prisma.ConcluiuCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConcluiuPayload>;
                };
                createMany: {
                    args: Prisma.ConcluiuCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ConcluiuCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConcluiuPayload>[];
                };
                delete: {
                    args: Prisma.ConcluiuDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConcluiuPayload>;
                };
                update: {
                    args: Prisma.ConcluiuUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConcluiuPayload>;
                };
                deleteMany: {
                    args: Prisma.ConcluiuDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ConcluiuUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ConcluiuUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConcluiuPayload>[];
                };
                upsert: {
                    args: Prisma.ConcluiuUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConcluiuPayload>;
                };
                aggregate: {
                    args: Prisma.ConcluiuAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateConcluiu>;
                };
                groupBy: {
                    args: Prisma.ConcluiuGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConcluiuGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ConcluiuCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConcluiuCountAggregateOutputType> | number;
                };
            };
        };
        Acompanha: {
            payload: Prisma.$AcompanhaPayload<ExtArgs>;
            fields: Prisma.AcompanhaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AcompanhaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcompanhaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AcompanhaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcompanhaPayload>;
                };
                findFirst: {
                    args: Prisma.AcompanhaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcompanhaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AcompanhaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcompanhaPayload>;
                };
                findMany: {
                    args: Prisma.AcompanhaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcompanhaPayload>[];
                };
                create: {
                    args: Prisma.AcompanhaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcompanhaPayload>;
                };
                createMany: {
                    args: Prisma.AcompanhaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AcompanhaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcompanhaPayload>[];
                };
                delete: {
                    args: Prisma.AcompanhaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcompanhaPayload>;
                };
                update: {
                    args: Prisma.AcompanhaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcompanhaPayload>;
                };
                deleteMany: {
                    args: Prisma.AcompanhaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AcompanhaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AcompanhaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcompanhaPayload>[];
                };
                upsert: {
                    args: Prisma.AcompanhaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcompanhaPayload>;
                };
                aggregate: {
                    args: Prisma.AcompanhaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAcompanha>;
                };
                groupBy: {
                    args: Prisma.AcompanhaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AcompanhaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AcompanhaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AcompanhaCountAggregateOutputType> | number;
                };
            };
        };
        PreRequisito: {
            payload: Prisma.$PreRequisitoPayload<ExtArgs>;
            fields: Prisma.PreRequisitoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PreRequisitoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreRequisitoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PreRequisitoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreRequisitoPayload>;
                };
                findFirst: {
                    args: Prisma.PreRequisitoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreRequisitoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PreRequisitoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreRequisitoPayload>;
                };
                findMany: {
                    args: Prisma.PreRequisitoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreRequisitoPayload>[];
                };
                create: {
                    args: Prisma.PreRequisitoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreRequisitoPayload>;
                };
                createMany: {
                    args: Prisma.PreRequisitoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PreRequisitoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreRequisitoPayload>[];
                };
                delete: {
                    args: Prisma.PreRequisitoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreRequisitoPayload>;
                };
                update: {
                    args: Prisma.PreRequisitoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreRequisitoPayload>;
                };
                deleteMany: {
                    args: Prisma.PreRequisitoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PreRequisitoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PreRequisitoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreRequisitoPayload>[];
                };
                upsert: {
                    args: Prisma.PreRequisitoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreRequisitoPayload>;
                };
                aggregate: {
                    args: Prisma.PreRequisitoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePreRequisito>;
                };
                groupBy: {
                    args: Prisma.PreRequisitoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PreRequisitoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PreRequisitoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PreRequisitoCountAggregateOutputType> | number;
                };
            };
        };
        Equivalencia: {
            payload: Prisma.$EquivalenciaPayload<ExtArgs>;
            fields: Prisma.EquivalenciaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EquivalenciaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EquivalenciaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EquivalenciaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EquivalenciaPayload>;
                };
                findFirst: {
                    args: Prisma.EquivalenciaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EquivalenciaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EquivalenciaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EquivalenciaPayload>;
                };
                findMany: {
                    args: Prisma.EquivalenciaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EquivalenciaPayload>[];
                };
                create: {
                    args: Prisma.EquivalenciaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EquivalenciaPayload>;
                };
                createMany: {
                    args: Prisma.EquivalenciaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EquivalenciaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EquivalenciaPayload>[];
                };
                delete: {
                    args: Prisma.EquivalenciaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EquivalenciaPayload>;
                };
                update: {
                    args: Prisma.EquivalenciaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EquivalenciaPayload>;
                };
                deleteMany: {
                    args: Prisma.EquivalenciaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EquivalenciaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EquivalenciaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EquivalenciaPayload>[];
                };
                upsert: {
                    args: Prisma.EquivalenciaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EquivalenciaPayload>;
                };
                aggregate: {
                    args: Prisma.EquivalenciaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEquivalencia>;
                };
                groupBy: {
                    args: Prisma.EquivalenciaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EquivalenciaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EquivalenciaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EquivalenciaCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>;
export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    estruturaCurricular?: Prisma.EstruturaCurricularOmit;
    aluno?: Prisma.AlunoOmit;
    credencial?: Prisma.CredencialOmit;
    sessaoRefresh?: Prisma.SessaoRefreshOmit;
    enfase?: Prisma.EnfaseOmit;
    componente?: Prisma.ComponenteOmit;
    compoe?: Prisma.CompoeOmit;
    concluiu?: Prisma.ConcluiuOmit;
    acompanha?: Prisma.AcompanhaOmit;
    preRequisito?: Prisma.PreRequisitoOmit;
    equivalencia?: Prisma.EquivalenciaOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
