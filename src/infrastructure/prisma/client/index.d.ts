
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model LibraryTrackEntity
 * 
 */
export type LibraryTrackEntity = $Result.DefaultSelection<Prisma.$LibraryTrackEntityPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more LibraryTrackEntities
 * const libraryTrackEntities = await prisma.libraryTrackEntity.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more LibraryTrackEntities
   * const libraryTrackEntities = await prisma.libraryTrackEntity.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.libraryTrackEntity`: Exposes CRUD operations for the **LibraryTrackEntity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LibraryTrackEntities
    * const libraryTrackEntities = await prisma.libraryTrackEntity.findMany()
    * ```
    */
  get libraryTrackEntity(): Prisma.LibraryTrackEntityDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    LibraryTrackEntity: 'LibraryTrackEntity'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'libraryTrackEntity'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      LibraryTrackEntity: {
        payload: Prisma.$LibraryTrackEntityPayload<ExtArgs>
        fields: Prisma.LibraryTrackEntityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LibraryTrackEntityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LibraryTrackEntityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LibraryTrackEntityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LibraryTrackEntityPayload>
          }
          findFirst: {
            args: Prisma.LibraryTrackEntityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LibraryTrackEntityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LibraryTrackEntityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LibraryTrackEntityPayload>
          }
          findMany: {
            args: Prisma.LibraryTrackEntityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LibraryTrackEntityPayload>[]
          }
          create: {
            args: Prisma.LibraryTrackEntityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LibraryTrackEntityPayload>
          }
          delete: {
            args: Prisma.LibraryTrackEntityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LibraryTrackEntityPayload>
          }
          update: {
            args: Prisma.LibraryTrackEntityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LibraryTrackEntityPayload>
          }
          deleteMany: {
            args: Prisma.LibraryTrackEntityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LibraryTrackEntityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LibraryTrackEntityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LibraryTrackEntityPayload>
          }
          aggregate: {
            args: Prisma.LibraryTrackEntityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLibraryTrackEntity>
          }
          groupBy: {
            args: Prisma.LibraryTrackEntityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LibraryTrackEntityGroupByOutputType>[]
          }
          count: {
            args: Prisma.LibraryTrackEntityCountArgs<ExtArgs>,
            result: $Utils.Optional<LibraryTrackEntityCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model LibraryTrackEntity
   */

  export type AggregateLibraryTrackEntity = {
    _count: LibraryTrackEntityCountAggregateOutputType | null
    _avg: LibraryTrackEntityAvgAggregateOutputType | null
    _sum: LibraryTrackEntitySumAggregateOutputType | null
    _min: LibraryTrackEntityMinAggregateOutputType | null
    _max: LibraryTrackEntityMaxAggregateOutputType | null
  }

  export type LibraryTrackEntityAvgAggregateOutputType = {
    id: number | null
  }

  export type LibraryTrackEntitySumAggregateOutputType = {
    id: number | null
  }

  export type LibraryTrackEntityMinAggregateOutputType = {
    id: number | null
    filename: string | null
  }

  export type LibraryTrackEntityMaxAggregateOutputType = {
    id: number | null
    filename: string | null
  }

  export type LibraryTrackEntityCountAggregateOutputType = {
    id: number
    filename: number
    _all: number
  }


  export type LibraryTrackEntityAvgAggregateInputType = {
    id?: true
  }

  export type LibraryTrackEntitySumAggregateInputType = {
    id?: true
  }

  export type LibraryTrackEntityMinAggregateInputType = {
    id?: true
    filename?: true
  }

  export type LibraryTrackEntityMaxAggregateInputType = {
    id?: true
    filename?: true
  }

  export type LibraryTrackEntityCountAggregateInputType = {
    id?: true
    filename?: true
    _all?: true
  }

  export type LibraryTrackEntityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LibraryTrackEntity to aggregate.
     */
    where?: LibraryTrackEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryTrackEntities to fetch.
     */
    orderBy?: LibraryTrackEntityOrderByWithRelationInput | LibraryTrackEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LibraryTrackEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryTrackEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryTrackEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LibraryTrackEntities
    **/
    _count?: true | LibraryTrackEntityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LibraryTrackEntityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LibraryTrackEntitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LibraryTrackEntityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LibraryTrackEntityMaxAggregateInputType
  }

  export type GetLibraryTrackEntityAggregateType<T extends LibraryTrackEntityAggregateArgs> = {
        [P in keyof T & keyof AggregateLibraryTrackEntity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLibraryTrackEntity[P]>
      : GetScalarType<T[P], AggregateLibraryTrackEntity[P]>
  }




  export type LibraryTrackEntityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibraryTrackEntityWhereInput
    orderBy?: LibraryTrackEntityOrderByWithAggregationInput | LibraryTrackEntityOrderByWithAggregationInput[]
    by: LibraryTrackEntityScalarFieldEnum[] | LibraryTrackEntityScalarFieldEnum
    having?: LibraryTrackEntityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LibraryTrackEntityCountAggregateInputType | true
    _avg?: LibraryTrackEntityAvgAggregateInputType
    _sum?: LibraryTrackEntitySumAggregateInputType
    _min?: LibraryTrackEntityMinAggregateInputType
    _max?: LibraryTrackEntityMaxAggregateInputType
  }

  export type LibraryTrackEntityGroupByOutputType = {
    id: number
    filename: string
    _count: LibraryTrackEntityCountAggregateOutputType | null
    _avg: LibraryTrackEntityAvgAggregateOutputType | null
    _sum: LibraryTrackEntitySumAggregateOutputType | null
    _min: LibraryTrackEntityMinAggregateOutputType | null
    _max: LibraryTrackEntityMaxAggregateOutputType | null
  }

  type GetLibraryTrackEntityGroupByPayload<T extends LibraryTrackEntityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LibraryTrackEntityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LibraryTrackEntityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LibraryTrackEntityGroupByOutputType[P]>
            : GetScalarType<T[P], LibraryTrackEntityGroupByOutputType[P]>
        }
      >
    >


  export type LibraryTrackEntitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
  }, ExtArgs["result"]["libraryTrackEntity"]>

  export type LibraryTrackEntitySelectScalar = {
    id?: boolean
    filename?: boolean
  }


  export type $LibraryTrackEntityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LibraryTrackEntity"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      filename: string
    }, ExtArgs["result"]["libraryTrackEntity"]>
    composites: {}
  }


  type LibraryTrackEntityGetPayload<S extends boolean | null | undefined | LibraryTrackEntityDefaultArgs> = $Result.GetResult<Prisma.$LibraryTrackEntityPayload, S>

  type LibraryTrackEntityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LibraryTrackEntityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LibraryTrackEntityCountAggregateInputType | true
    }

  export interface LibraryTrackEntityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LibraryTrackEntity'], meta: { name: 'LibraryTrackEntity' } }
    /**
     * Find zero or one LibraryTrackEntity that matches the filter.
     * @param {LibraryTrackEntityFindUniqueArgs} args - Arguments to find a LibraryTrackEntity
     * @example
     * // Get one LibraryTrackEntity
     * const libraryTrackEntity = await prisma.libraryTrackEntity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LibraryTrackEntityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LibraryTrackEntityFindUniqueArgs<ExtArgs>>
    ): Prisma__LibraryTrackEntityClient<$Result.GetResult<Prisma.$LibraryTrackEntityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LibraryTrackEntity that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LibraryTrackEntityFindUniqueOrThrowArgs} args - Arguments to find a LibraryTrackEntity
     * @example
     * // Get one LibraryTrackEntity
     * const libraryTrackEntity = await prisma.libraryTrackEntity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LibraryTrackEntityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LibraryTrackEntityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LibraryTrackEntityClient<$Result.GetResult<Prisma.$LibraryTrackEntityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LibraryTrackEntity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryTrackEntityFindFirstArgs} args - Arguments to find a LibraryTrackEntity
     * @example
     * // Get one LibraryTrackEntity
     * const libraryTrackEntity = await prisma.libraryTrackEntity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LibraryTrackEntityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LibraryTrackEntityFindFirstArgs<ExtArgs>>
    ): Prisma__LibraryTrackEntityClient<$Result.GetResult<Prisma.$LibraryTrackEntityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LibraryTrackEntity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryTrackEntityFindFirstOrThrowArgs} args - Arguments to find a LibraryTrackEntity
     * @example
     * // Get one LibraryTrackEntity
     * const libraryTrackEntity = await prisma.libraryTrackEntity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LibraryTrackEntityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LibraryTrackEntityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LibraryTrackEntityClient<$Result.GetResult<Prisma.$LibraryTrackEntityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LibraryTrackEntities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryTrackEntityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LibraryTrackEntities
     * const libraryTrackEntities = await prisma.libraryTrackEntity.findMany()
     * 
     * // Get first 10 LibraryTrackEntities
     * const libraryTrackEntities = await prisma.libraryTrackEntity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const libraryTrackEntityWithIdOnly = await prisma.libraryTrackEntity.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LibraryTrackEntityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LibraryTrackEntityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryTrackEntityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LibraryTrackEntity.
     * @param {LibraryTrackEntityCreateArgs} args - Arguments to create a LibraryTrackEntity.
     * @example
     * // Create one LibraryTrackEntity
     * const LibraryTrackEntity = await prisma.libraryTrackEntity.create({
     *   data: {
     *     // ... data to create a LibraryTrackEntity
     *   }
     * })
     * 
    **/
    create<T extends LibraryTrackEntityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LibraryTrackEntityCreateArgs<ExtArgs>>
    ): Prisma__LibraryTrackEntityClient<$Result.GetResult<Prisma.$LibraryTrackEntityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a LibraryTrackEntity.
     * @param {LibraryTrackEntityDeleteArgs} args - Arguments to delete one LibraryTrackEntity.
     * @example
     * // Delete one LibraryTrackEntity
     * const LibraryTrackEntity = await prisma.libraryTrackEntity.delete({
     *   where: {
     *     // ... filter to delete one LibraryTrackEntity
     *   }
     * })
     * 
    **/
    delete<T extends LibraryTrackEntityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LibraryTrackEntityDeleteArgs<ExtArgs>>
    ): Prisma__LibraryTrackEntityClient<$Result.GetResult<Prisma.$LibraryTrackEntityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LibraryTrackEntity.
     * @param {LibraryTrackEntityUpdateArgs} args - Arguments to update one LibraryTrackEntity.
     * @example
     * // Update one LibraryTrackEntity
     * const libraryTrackEntity = await prisma.libraryTrackEntity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LibraryTrackEntityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LibraryTrackEntityUpdateArgs<ExtArgs>>
    ): Prisma__LibraryTrackEntityClient<$Result.GetResult<Prisma.$LibraryTrackEntityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LibraryTrackEntities.
     * @param {LibraryTrackEntityDeleteManyArgs} args - Arguments to filter LibraryTrackEntities to delete.
     * @example
     * // Delete a few LibraryTrackEntities
     * const { count } = await prisma.libraryTrackEntity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LibraryTrackEntityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LibraryTrackEntityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LibraryTrackEntities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryTrackEntityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LibraryTrackEntities
     * const libraryTrackEntity = await prisma.libraryTrackEntity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LibraryTrackEntityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LibraryTrackEntityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LibraryTrackEntity.
     * @param {LibraryTrackEntityUpsertArgs} args - Arguments to update or create a LibraryTrackEntity.
     * @example
     * // Update or create a LibraryTrackEntity
     * const libraryTrackEntity = await prisma.libraryTrackEntity.upsert({
     *   create: {
     *     // ... data to create a LibraryTrackEntity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LibraryTrackEntity we want to update
     *   }
     * })
    **/
    upsert<T extends LibraryTrackEntityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LibraryTrackEntityUpsertArgs<ExtArgs>>
    ): Prisma__LibraryTrackEntityClient<$Result.GetResult<Prisma.$LibraryTrackEntityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LibraryTrackEntities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryTrackEntityCountArgs} args - Arguments to filter LibraryTrackEntities to count.
     * @example
     * // Count the number of LibraryTrackEntities
     * const count = await prisma.libraryTrackEntity.count({
     *   where: {
     *     // ... the filter for the LibraryTrackEntities we want to count
     *   }
     * })
    **/
    count<T extends LibraryTrackEntityCountArgs>(
      args?: Subset<T, LibraryTrackEntityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LibraryTrackEntityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LibraryTrackEntity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryTrackEntityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LibraryTrackEntityAggregateArgs>(args: Subset<T, LibraryTrackEntityAggregateArgs>): Prisma.PrismaPromise<GetLibraryTrackEntityAggregateType<T>>

    /**
     * Group by LibraryTrackEntity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryTrackEntityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LibraryTrackEntityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LibraryTrackEntityGroupByArgs['orderBy'] }
        : { orderBy?: LibraryTrackEntityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LibraryTrackEntityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibraryTrackEntityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LibraryTrackEntity model
   */
  readonly fields: LibraryTrackEntityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LibraryTrackEntity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LibraryTrackEntityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LibraryTrackEntity model
   */ 
  interface LibraryTrackEntityFieldRefs {
    readonly id: FieldRef<"LibraryTrackEntity", 'Int'>
    readonly filename: FieldRef<"LibraryTrackEntity", 'String'>
  }
    

  // Custom InputTypes

  /**
   * LibraryTrackEntity findUnique
   */
  export type LibraryTrackEntityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryTrackEntity
     */
    select?: LibraryTrackEntitySelect<ExtArgs> | null
    /**
     * Filter, which LibraryTrackEntity to fetch.
     */
    where: LibraryTrackEntityWhereUniqueInput
  }


  /**
   * LibraryTrackEntity findUniqueOrThrow
   */
  export type LibraryTrackEntityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryTrackEntity
     */
    select?: LibraryTrackEntitySelect<ExtArgs> | null
    /**
     * Filter, which LibraryTrackEntity to fetch.
     */
    where: LibraryTrackEntityWhereUniqueInput
  }


  /**
   * LibraryTrackEntity findFirst
   */
  export type LibraryTrackEntityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryTrackEntity
     */
    select?: LibraryTrackEntitySelect<ExtArgs> | null
    /**
     * Filter, which LibraryTrackEntity to fetch.
     */
    where?: LibraryTrackEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryTrackEntities to fetch.
     */
    orderBy?: LibraryTrackEntityOrderByWithRelationInput | LibraryTrackEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LibraryTrackEntities.
     */
    cursor?: LibraryTrackEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryTrackEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryTrackEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LibraryTrackEntities.
     */
    distinct?: LibraryTrackEntityScalarFieldEnum | LibraryTrackEntityScalarFieldEnum[]
  }


  /**
   * LibraryTrackEntity findFirstOrThrow
   */
  export type LibraryTrackEntityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryTrackEntity
     */
    select?: LibraryTrackEntitySelect<ExtArgs> | null
    /**
     * Filter, which LibraryTrackEntity to fetch.
     */
    where?: LibraryTrackEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryTrackEntities to fetch.
     */
    orderBy?: LibraryTrackEntityOrderByWithRelationInput | LibraryTrackEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LibraryTrackEntities.
     */
    cursor?: LibraryTrackEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryTrackEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryTrackEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LibraryTrackEntities.
     */
    distinct?: LibraryTrackEntityScalarFieldEnum | LibraryTrackEntityScalarFieldEnum[]
  }


  /**
   * LibraryTrackEntity findMany
   */
  export type LibraryTrackEntityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryTrackEntity
     */
    select?: LibraryTrackEntitySelect<ExtArgs> | null
    /**
     * Filter, which LibraryTrackEntities to fetch.
     */
    where?: LibraryTrackEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryTrackEntities to fetch.
     */
    orderBy?: LibraryTrackEntityOrderByWithRelationInput | LibraryTrackEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LibraryTrackEntities.
     */
    cursor?: LibraryTrackEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryTrackEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryTrackEntities.
     */
    skip?: number
    distinct?: LibraryTrackEntityScalarFieldEnum | LibraryTrackEntityScalarFieldEnum[]
  }


  /**
   * LibraryTrackEntity create
   */
  export type LibraryTrackEntityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryTrackEntity
     */
    select?: LibraryTrackEntitySelect<ExtArgs> | null
    /**
     * The data needed to create a LibraryTrackEntity.
     */
    data: XOR<LibraryTrackEntityCreateInput, LibraryTrackEntityUncheckedCreateInput>
  }


  /**
   * LibraryTrackEntity update
   */
  export type LibraryTrackEntityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryTrackEntity
     */
    select?: LibraryTrackEntitySelect<ExtArgs> | null
    /**
     * The data needed to update a LibraryTrackEntity.
     */
    data: XOR<LibraryTrackEntityUpdateInput, LibraryTrackEntityUncheckedUpdateInput>
    /**
     * Choose, which LibraryTrackEntity to update.
     */
    where: LibraryTrackEntityWhereUniqueInput
  }


  /**
   * LibraryTrackEntity updateMany
   */
  export type LibraryTrackEntityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LibraryTrackEntities.
     */
    data: XOR<LibraryTrackEntityUpdateManyMutationInput, LibraryTrackEntityUncheckedUpdateManyInput>
    /**
     * Filter which LibraryTrackEntities to update
     */
    where?: LibraryTrackEntityWhereInput
  }


  /**
   * LibraryTrackEntity upsert
   */
  export type LibraryTrackEntityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryTrackEntity
     */
    select?: LibraryTrackEntitySelect<ExtArgs> | null
    /**
     * The filter to search for the LibraryTrackEntity to update in case it exists.
     */
    where: LibraryTrackEntityWhereUniqueInput
    /**
     * In case the LibraryTrackEntity found by the `where` argument doesn't exist, create a new LibraryTrackEntity with this data.
     */
    create: XOR<LibraryTrackEntityCreateInput, LibraryTrackEntityUncheckedCreateInput>
    /**
     * In case the LibraryTrackEntity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LibraryTrackEntityUpdateInput, LibraryTrackEntityUncheckedUpdateInput>
  }


  /**
   * LibraryTrackEntity delete
   */
  export type LibraryTrackEntityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryTrackEntity
     */
    select?: LibraryTrackEntitySelect<ExtArgs> | null
    /**
     * Filter which LibraryTrackEntity to delete.
     */
    where: LibraryTrackEntityWhereUniqueInput
  }


  /**
   * LibraryTrackEntity deleteMany
   */
  export type LibraryTrackEntityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LibraryTrackEntities to delete
     */
    where?: LibraryTrackEntityWhereInput
  }


  /**
   * LibraryTrackEntity without action
   */
  export type LibraryTrackEntityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryTrackEntity
     */
    select?: LibraryTrackEntitySelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LibraryTrackEntityScalarFieldEnum: {
    id: 'id',
    filename: 'filename'
  };

  export type LibraryTrackEntityScalarFieldEnum = (typeof LibraryTrackEntityScalarFieldEnum)[keyof typeof LibraryTrackEntityScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type LibraryTrackEntityWhereInput = {
    AND?: LibraryTrackEntityWhereInput | LibraryTrackEntityWhereInput[]
    OR?: LibraryTrackEntityWhereInput[]
    NOT?: LibraryTrackEntityWhereInput | LibraryTrackEntityWhereInput[]
    id?: IntFilter<"LibraryTrackEntity"> | number
    filename?: StringFilter<"LibraryTrackEntity"> | string
  }

  export type LibraryTrackEntityOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
  }

  export type LibraryTrackEntityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LibraryTrackEntityWhereInput | LibraryTrackEntityWhereInput[]
    OR?: LibraryTrackEntityWhereInput[]
    NOT?: LibraryTrackEntityWhereInput | LibraryTrackEntityWhereInput[]
    filename?: StringFilter<"LibraryTrackEntity"> | string
  }, "id">

  export type LibraryTrackEntityOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    _count?: LibraryTrackEntityCountOrderByAggregateInput
    _avg?: LibraryTrackEntityAvgOrderByAggregateInput
    _max?: LibraryTrackEntityMaxOrderByAggregateInput
    _min?: LibraryTrackEntityMinOrderByAggregateInput
    _sum?: LibraryTrackEntitySumOrderByAggregateInput
  }

  export type LibraryTrackEntityScalarWhereWithAggregatesInput = {
    AND?: LibraryTrackEntityScalarWhereWithAggregatesInput | LibraryTrackEntityScalarWhereWithAggregatesInput[]
    OR?: LibraryTrackEntityScalarWhereWithAggregatesInput[]
    NOT?: LibraryTrackEntityScalarWhereWithAggregatesInput | LibraryTrackEntityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LibraryTrackEntity"> | number
    filename?: StringWithAggregatesFilter<"LibraryTrackEntity"> | string
  }

  export type LibraryTrackEntityCreateInput = {
    filename: string
  }

  export type LibraryTrackEntityUncheckedCreateInput = {
    id?: number
    filename: string
  }

  export type LibraryTrackEntityUpdateInput = {
    filename?: StringFieldUpdateOperationsInput | string
  }

  export type LibraryTrackEntityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
  }

  export type LibraryTrackEntityUpdateManyMutationInput = {
    filename?: StringFieldUpdateOperationsInput | string
  }

  export type LibraryTrackEntityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type LibraryTrackEntityCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
  }

  export type LibraryTrackEntityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LibraryTrackEntityMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
  }

  export type LibraryTrackEntityMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
  }

  export type LibraryTrackEntitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use LibraryTrackEntityDefaultArgs instead
     */
    export type LibraryTrackEntityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LibraryTrackEntityDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}