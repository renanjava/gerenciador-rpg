
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
 * Model Personagem
 * 
 */
export type Personagem = $Result.DefaultSelection<Prisma.$PersonagemPayload>
/**
 * Model ItemMagico
 * 
 */
export type ItemMagico = $Result.DefaultSelection<Prisma.$ItemMagicoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ClassesPersonagem: {
  MAGO: 'MAGO',
  ARQUEIRO: 'ARQUEIRO',
  LADINO: 'LADINO',
  BARDO: 'BARDO',
  GUERREIRO: 'GUERREIRO'
};

export type ClassesPersonagem = (typeof ClassesPersonagem)[keyof typeof ClassesPersonagem]


export const TipoItemMagico: {
  ARMA: 'ARMA',
  ARMADURA: 'ARMADURA',
  AMULETO: 'AMULETO'
};

export type TipoItemMagico = (typeof TipoItemMagico)[keyof typeof TipoItemMagico]

}

export type ClassesPersonagem = $Enums.ClassesPersonagem

export const ClassesPersonagem: typeof $Enums.ClassesPersonagem

export type TipoItemMagico = $Enums.TipoItemMagico

export const TipoItemMagico: typeof $Enums.TipoItemMagico

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Personagems
 * const personagems = await prisma.personagem.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Personagems
   * const personagems = await prisma.personagem.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.personagem`: Exposes CRUD operations for the **Personagem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personagems
    * const personagems = await prisma.personagem.findMany()
    * ```
    */
  get personagem(): Prisma.PersonagemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemMagico`: Exposes CRUD operations for the **ItemMagico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemMagicos
    * const itemMagicos = await prisma.itemMagico.findMany()
    * ```
    */
  get itemMagico(): Prisma.ItemMagicoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Personagem: 'Personagem',
    ItemMagico: 'ItemMagico'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "personagem" | "itemMagico"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Personagem: {
        payload: Prisma.$PersonagemPayload<ExtArgs>
        fields: Prisma.PersonagemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonagemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonagemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonagemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonagemPayload>
          }
          findFirst: {
            args: Prisma.PersonagemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonagemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonagemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonagemPayload>
          }
          findMany: {
            args: Prisma.PersonagemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonagemPayload>[]
          }
          create: {
            args: Prisma.PersonagemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonagemPayload>
          }
          createMany: {
            args: Prisma.PersonagemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonagemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonagemPayload>[]
          }
          delete: {
            args: Prisma.PersonagemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonagemPayload>
          }
          update: {
            args: Prisma.PersonagemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonagemPayload>
          }
          deleteMany: {
            args: Prisma.PersonagemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonagemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonagemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonagemPayload>[]
          }
          upsert: {
            args: Prisma.PersonagemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonagemPayload>
          }
          aggregate: {
            args: Prisma.PersonagemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonagem>
          }
          groupBy: {
            args: Prisma.PersonagemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonagemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonagemCountArgs<ExtArgs>
            result: $Utils.Optional<PersonagemCountAggregateOutputType> | number
          }
        }
      }
      ItemMagico: {
        payload: Prisma.$ItemMagicoPayload<ExtArgs>
        fields: Prisma.ItemMagicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemMagicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemMagicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemMagicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemMagicoPayload>
          }
          findFirst: {
            args: Prisma.ItemMagicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemMagicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemMagicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemMagicoPayload>
          }
          findMany: {
            args: Prisma.ItemMagicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemMagicoPayload>[]
          }
          create: {
            args: Prisma.ItemMagicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemMagicoPayload>
          }
          createMany: {
            args: Prisma.ItemMagicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemMagicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemMagicoPayload>[]
          }
          delete: {
            args: Prisma.ItemMagicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemMagicoPayload>
          }
          update: {
            args: Prisma.ItemMagicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemMagicoPayload>
          }
          deleteMany: {
            args: Prisma.ItemMagicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemMagicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemMagicoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemMagicoPayload>[]
          }
          upsert: {
            args: Prisma.ItemMagicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemMagicoPayload>
          }
          aggregate: {
            args: Prisma.ItemMagicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemMagico>
          }
          groupBy: {
            args: Prisma.ItemMagicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemMagicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemMagicoCountArgs<ExtArgs>
            result: $Utils.Optional<ItemMagicoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    personagem?: PersonagemOmit
    itemMagico?: ItemMagicoOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type PersonagemCountOutputType
   */

  export type PersonagemCountOutputType = {
    ItensMagicos: number
  }

  export type PersonagemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ItensMagicos?: boolean | PersonagemCountOutputTypeCountItensMagicosArgs
  }

  // Custom InputTypes
  /**
   * PersonagemCountOutputType without action
   */
  export type PersonagemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonagemCountOutputType
     */
    select?: PersonagemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonagemCountOutputType without action
   */
  export type PersonagemCountOutputTypeCountItensMagicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemMagicoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Personagem
   */

  export type AggregatePersonagem = {
    _count: PersonagemCountAggregateOutputType | null
    _avg: PersonagemAvgAggregateOutputType | null
    _sum: PersonagemSumAggregateOutputType | null
    _min: PersonagemMinAggregateOutputType | null
    _max: PersonagemMaxAggregateOutputType | null
  }

  export type PersonagemAvgAggregateOutputType = {
    level: number | null
    forca: number | null
    defesa: number | null
  }

  export type PersonagemSumAggregateOutputType = {
    level: number | null
    forca: number | null
    defesa: number | null
  }

  export type PersonagemMinAggregateOutputType = {
    id: string | null
    nome: string | null
    nomeAventureiro: string | null
    classe: $Enums.ClassesPersonagem | null
    level: number | null
    forca: number | null
    defesa: number | null
  }

  export type PersonagemMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    nomeAventureiro: string | null
    classe: $Enums.ClassesPersonagem | null
    level: number | null
    forca: number | null
    defesa: number | null
  }

  export type PersonagemCountAggregateOutputType = {
    id: number
    nome: number
    nomeAventureiro: number
    classe: number
    level: number
    forca: number
    defesa: number
    _all: number
  }


  export type PersonagemAvgAggregateInputType = {
    level?: true
    forca?: true
    defesa?: true
  }

  export type PersonagemSumAggregateInputType = {
    level?: true
    forca?: true
    defesa?: true
  }

  export type PersonagemMinAggregateInputType = {
    id?: true
    nome?: true
    nomeAventureiro?: true
    classe?: true
    level?: true
    forca?: true
    defesa?: true
  }

  export type PersonagemMaxAggregateInputType = {
    id?: true
    nome?: true
    nomeAventureiro?: true
    classe?: true
    level?: true
    forca?: true
    defesa?: true
  }

  export type PersonagemCountAggregateInputType = {
    id?: true
    nome?: true
    nomeAventureiro?: true
    classe?: true
    level?: true
    forca?: true
    defesa?: true
    _all?: true
  }

  export type PersonagemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personagem to aggregate.
     */
    where?: PersonagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personagems to fetch.
     */
    orderBy?: PersonagemOrderByWithRelationInput | PersonagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Personagems
    **/
    _count?: true | PersonagemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonagemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonagemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonagemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonagemMaxAggregateInputType
  }

  export type GetPersonagemAggregateType<T extends PersonagemAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonagem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonagem[P]>
      : GetScalarType<T[P], AggregatePersonagem[P]>
  }




  export type PersonagemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonagemWhereInput
    orderBy?: PersonagemOrderByWithAggregationInput | PersonagemOrderByWithAggregationInput[]
    by: PersonagemScalarFieldEnum[] | PersonagemScalarFieldEnum
    having?: PersonagemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonagemCountAggregateInputType | true
    _avg?: PersonagemAvgAggregateInputType
    _sum?: PersonagemSumAggregateInputType
    _min?: PersonagemMinAggregateInputType
    _max?: PersonagemMaxAggregateInputType
  }

  export type PersonagemGroupByOutputType = {
    id: string
    nome: string
    nomeAventureiro: string
    classe: $Enums.ClassesPersonagem
    level: number
    forca: number
    defesa: number
    _count: PersonagemCountAggregateOutputType | null
    _avg: PersonagemAvgAggregateOutputType | null
    _sum: PersonagemSumAggregateOutputType | null
    _min: PersonagemMinAggregateOutputType | null
    _max: PersonagemMaxAggregateOutputType | null
  }

  type GetPersonagemGroupByPayload<T extends PersonagemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonagemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonagemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonagemGroupByOutputType[P]>
            : GetScalarType<T[P], PersonagemGroupByOutputType[P]>
        }
      >
    >


  export type PersonagemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nomeAventureiro?: boolean
    classe?: boolean
    level?: boolean
    forca?: boolean
    defesa?: boolean
    ItensMagicos?: boolean | Personagem$ItensMagicosArgs<ExtArgs>
    _count?: boolean | PersonagemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personagem"]>

  export type PersonagemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nomeAventureiro?: boolean
    classe?: boolean
    level?: boolean
    forca?: boolean
    defesa?: boolean
  }, ExtArgs["result"]["personagem"]>

  export type PersonagemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nomeAventureiro?: boolean
    classe?: boolean
    level?: boolean
    forca?: boolean
    defesa?: boolean
  }, ExtArgs["result"]["personagem"]>

  export type PersonagemSelectScalar = {
    id?: boolean
    nome?: boolean
    nomeAventureiro?: boolean
    classe?: boolean
    level?: boolean
    forca?: boolean
    defesa?: boolean
  }

  export type PersonagemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "nomeAventureiro" | "classe" | "level" | "forca" | "defesa", ExtArgs["result"]["personagem"]>
  export type PersonagemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ItensMagicos?: boolean | Personagem$ItensMagicosArgs<ExtArgs>
    _count?: boolean | PersonagemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PersonagemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PersonagemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PersonagemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Personagem"
    objects: {
      ItensMagicos: Prisma.$ItemMagicoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      nomeAventureiro: string
      classe: $Enums.ClassesPersonagem
      level: number
      forca: number
      defesa: number
    }, ExtArgs["result"]["personagem"]>
    composites: {}
  }

  type PersonagemGetPayload<S extends boolean | null | undefined | PersonagemDefaultArgs> = $Result.GetResult<Prisma.$PersonagemPayload, S>

  type PersonagemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonagemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonagemCountAggregateInputType | true
    }

  export interface PersonagemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Personagem'], meta: { name: 'Personagem' } }
    /**
     * Find zero or one Personagem that matches the filter.
     * @param {PersonagemFindUniqueArgs} args - Arguments to find a Personagem
     * @example
     * // Get one Personagem
     * const personagem = await prisma.personagem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonagemFindUniqueArgs>(args: SelectSubset<T, PersonagemFindUniqueArgs<ExtArgs>>): Prisma__PersonagemClient<$Result.GetResult<Prisma.$PersonagemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Personagem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonagemFindUniqueOrThrowArgs} args - Arguments to find a Personagem
     * @example
     * // Get one Personagem
     * const personagem = await prisma.personagem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonagemFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonagemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonagemClient<$Result.GetResult<Prisma.$PersonagemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personagem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonagemFindFirstArgs} args - Arguments to find a Personagem
     * @example
     * // Get one Personagem
     * const personagem = await prisma.personagem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonagemFindFirstArgs>(args?: SelectSubset<T, PersonagemFindFirstArgs<ExtArgs>>): Prisma__PersonagemClient<$Result.GetResult<Prisma.$PersonagemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personagem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonagemFindFirstOrThrowArgs} args - Arguments to find a Personagem
     * @example
     * // Get one Personagem
     * const personagem = await prisma.personagem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonagemFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonagemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonagemClient<$Result.GetResult<Prisma.$PersonagemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personagems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonagemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personagems
     * const personagems = await prisma.personagem.findMany()
     * 
     * // Get first 10 Personagems
     * const personagems = await prisma.personagem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personagemWithIdOnly = await prisma.personagem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonagemFindManyArgs>(args?: SelectSubset<T, PersonagemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Personagem.
     * @param {PersonagemCreateArgs} args - Arguments to create a Personagem.
     * @example
     * // Create one Personagem
     * const Personagem = await prisma.personagem.create({
     *   data: {
     *     // ... data to create a Personagem
     *   }
     * })
     * 
     */
    create<T extends PersonagemCreateArgs>(args: SelectSubset<T, PersonagemCreateArgs<ExtArgs>>): Prisma__PersonagemClient<$Result.GetResult<Prisma.$PersonagemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personagems.
     * @param {PersonagemCreateManyArgs} args - Arguments to create many Personagems.
     * @example
     * // Create many Personagems
     * const personagem = await prisma.personagem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonagemCreateManyArgs>(args?: SelectSubset<T, PersonagemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Personagems and returns the data saved in the database.
     * @param {PersonagemCreateManyAndReturnArgs} args - Arguments to create many Personagems.
     * @example
     * // Create many Personagems
     * const personagem = await prisma.personagem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Personagems and only return the `id`
     * const personagemWithIdOnly = await prisma.personagem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonagemCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonagemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonagemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Personagem.
     * @param {PersonagemDeleteArgs} args - Arguments to delete one Personagem.
     * @example
     * // Delete one Personagem
     * const Personagem = await prisma.personagem.delete({
     *   where: {
     *     // ... filter to delete one Personagem
     *   }
     * })
     * 
     */
    delete<T extends PersonagemDeleteArgs>(args: SelectSubset<T, PersonagemDeleteArgs<ExtArgs>>): Prisma__PersonagemClient<$Result.GetResult<Prisma.$PersonagemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Personagem.
     * @param {PersonagemUpdateArgs} args - Arguments to update one Personagem.
     * @example
     * // Update one Personagem
     * const personagem = await prisma.personagem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonagemUpdateArgs>(args: SelectSubset<T, PersonagemUpdateArgs<ExtArgs>>): Prisma__PersonagemClient<$Result.GetResult<Prisma.$PersonagemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personagems.
     * @param {PersonagemDeleteManyArgs} args - Arguments to filter Personagems to delete.
     * @example
     * // Delete a few Personagems
     * const { count } = await prisma.personagem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonagemDeleteManyArgs>(args?: SelectSubset<T, PersonagemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonagemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personagems
     * const personagem = await prisma.personagem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonagemUpdateManyArgs>(args: SelectSubset<T, PersonagemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personagems and returns the data updated in the database.
     * @param {PersonagemUpdateManyAndReturnArgs} args - Arguments to update many Personagems.
     * @example
     * // Update many Personagems
     * const personagem = await prisma.personagem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Personagems and only return the `id`
     * const personagemWithIdOnly = await prisma.personagem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonagemUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonagemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonagemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Personagem.
     * @param {PersonagemUpsertArgs} args - Arguments to update or create a Personagem.
     * @example
     * // Update or create a Personagem
     * const personagem = await prisma.personagem.upsert({
     *   create: {
     *     // ... data to create a Personagem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Personagem we want to update
     *   }
     * })
     */
    upsert<T extends PersonagemUpsertArgs>(args: SelectSubset<T, PersonagemUpsertArgs<ExtArgs>>): Prisma__PersonagemClient<$Result.GetResult<Prisma.$PersonagemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonagemCountArgs} args - Arguments to filter Personagems to count.
     * @example
     * // Count the number of Personagems
     * const count = await prisma.personagem.count({
     *   where: {
     *     // ... the filter for the Personagems we want to count
     *   }
     * })
    **/
    count<T extends PersonagemCountArgs>(
      args?: Subset<T, PersonagemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonagemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Personagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonagemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonagemAggregateArgs>(args: Subset<T, PersonagemAggregateArgs>): Prisma.PrismaPromise<GetPersonagemAggregateType<T>>

    /**
     * Group by Personagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonagemGroupByArgs} args - Group by arguments.
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
      T extends PersonagemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonagemGroupByArgs['orderBy'] }
        : { orderBy?: PersonagemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PersonagemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonagemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Personagem model
   */
  readonly fields: PersonagemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Personagem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonagemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ItensMagicos<T extends Personagem$ItensMagicosArgs<ExtArgs> = {}>(args?: Subset<T, Personagem$ItensMagicosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemMagicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Personagem model
   */
  interface PersonagemFieldRefs {
    readonly id: FieldRef<"Personagem", 'String'>
    readonly nome: FieldRef<"Personagem", 'String'>
    readonly nomeAventureiro: FieldRef<"Personagem", 'String'>
    readonly classe: FieldRef<"Personagem", 'ClassesPersonagem'>
    readonly level: FieldRef<"Personagem", 'Int'>
    readonly forca: FieldRef<"Personagem", 'Int'>
    readonly defesa: FieldRef<"Personagem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Personagem findUnique
   */
  export type PersonagemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personagem
     */
    select?: PersonagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personagem
     */
    omit?: PersonagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonagemInclude<ExtArgs> | null
    /**
     * Filter, which Personagem to fetch.
     */
    where: PersonagemWhereUniqueInput
  }

  /**
   * Personagem findUniqueOrThrow
   */
  export type PersonagemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personagem
     */
    select?: PersonagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personagem
     */
    omit?: PersonagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonagemInclude<ExtArgs> | null
    /**
     * Filter, which Personagem to fetch.
     */
    where: PersonagemWhereUniqueInput
  }

  /**
   * Personagem findFirst
   */
  export type PersonagemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personagem
     */
    select?: PersonagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personagem
     */
    omit?: PersonagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonagemInclude<ExtArgs> | null
    /**
     * Filter, which Personagem to fetch.
     */
    where?: PersonagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personagems to fetch.
     */
    orderBy?: PersonagemOrderByWithRelationInput | PersonagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personagems.
     */
    cursor?: PersonagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personagems.
     */
    distinct?: PersonagemScalarFieldEnum | PersonagemScalarFieldEnum[]
  }

  /**
   * Personagem findFirstOrThrow
   */
  export type PersonagemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personagem
     */
    select?: PersonagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personagem
     */
    omit?: PersonagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonagemInclude<ExtArgs> | null
    /**
     * Filter, which Personagem to fetch.
     */
    where?: PersonagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personagems to fetch.
     */
    orderBy?: PersonagemOrderByWithRelationInput | PersonagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personagems.
     */
    cursor?: PersonagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personagems.
     */
    distinct?: PersonagemScalarFieldEnum | PersonagemScalarFieldEnum[]
  }

  /**
   * Personagem findMany
   */
  export type PersonagemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personagem
     */
    select?: PersonagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personagem
     */
    omit?: PersonagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonagemInclude<ExtArgs> | null
    /**
     * Filter, which Personagems to fetch.
     */
    where?: PersonagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personagems to fetch.
     */
    orderBy?: PersonagemOrderByWithRelationInput | PersonagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Personagems.
     */
    cursor?: PersonagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personagems.
     */
    skip?: number
    distinct?: PersonagemScalarFieldEnum | PersonagemScalarFieldEnum[]
  }

  /**
   * Personagem create
   */
  export type PersonagemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personagem
     */
    select?: PersonagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personagem
     */
    omit?: PersonagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonagemInclude<ExtArgs> | null
    /**
     * The data needed to create a Personagem.
     */
    data: XOR<PersonagemCreateInput, PersonagemUncheckedCreateInput>
  }

  /**
   * Personagem createMany
   */
  export type PersonagemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Personagems.
     */
    data: PersonagemCreateManyInput | PersonagemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Personagem createManyAndReturn
   */
  export type PersonagemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personagem
     */
    select?: PersonagemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Personagem
     */
    omit?: PersonagemOmit<ExtArgs> | null
    /**
     * The data used to create many Personagems.
     */
    data: PersonagemCreateManyInput | PersonagemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Personagem update
   */
  export type PersonagemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personagem
     */
    select?: PersonagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personagem
     */
    omit?: PersonagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonagemInclude<ExtArgs> | null
    /**
     * The data needed to update a Personagem.
     */
    data: XOR<PersonagemUpdateInput, PersonagemUncheckedUpdateInput>
    /**
     * Choose, which Personagem to update.
     */
    where: PersonagemWhereUniqueInput
  }

  /**
   * Personagem updateMany
   */
  export type PersonagemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Personagems.
     */
    data: XOR<PersonagemUpdateManyMutationInput, PersonagemUncheckedUpdateManyInput>
    /**
     * Filter which Personagems to update
     */
    where?: PersonagemWhereInput
    /**
     * Limit how many Personagems to update.
     */
    limit?: number
  }

  /**
   * Personagem updateManyAndReturn
   */
  export type PersonagemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personagem
     */
    select?: PersonagemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Personagem
     */
    omit?: PersonagemOmit<ExtArgs> | null
    /**
     * The data used to update Personagems.
     */
    data: XOR<PersonagemUpdateManyMutationInput, PersonagemUncheckedUpdateManyInput>
    /**
     * Filter which Personagems to update
     */
    where?: PersonagemWhereInput
    /**
     * Limit how many Personagems to update.
     */
    limit?: number
  }

  /**
   * Personagem upsert
   */
  export type PersonagemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personagem
     */
    select?: PersonagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personagem
     */
    omit?: PersonagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonagemInclude<ExtArgs> | null
    /**
     * The filter to search for the Personagem to update in case it exists.
     */
    where: PersonagemWhereUniqueInput
    /**
     * In case the Personagem found by the `where` argument doesn't exist, create a new Personagem with this data.
     */
    create: XOR<PersonagemCreateInput, PersonagemUncheckedCreateInput>
    /**
     * In case the Personagem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonagemUpdateInput, PersonagemUncheckedUpdateInput>
  }

  /**
   * Personagem delete
   */
  export type PersonagemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personagem
     */
    select?: PersonagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personagem
     */
    omit?: PersonagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonagemInclude<ExtArgs> | null
    /**
     * Filter which Personagem to delete.
     */
    where: PersonagemWhereUniqueInput
  }

  /**
   * Personagem deleteMany
   */
  export type PersonagemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personagems to delete
     */
    where?: PersonagemWhereInput
    /**
     * Limit how many Personagems to delete.
     */
    limit?: number
  }

  /**
   * Personagem.ItensMagicos
   */
  export type Personagem$ItensMagicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemMagico
     */
    select?: ItemMagicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemMagico
     */
    omit?: ItemMagicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemMagicoInclude<ExtArgs> | null
    where?: ItemMagicoWhereInput
    orderBy?: ItemMagicoOrderByWithRelationInput | ItemMagicoOrderByWithRelationInput[]
    cursor?: ItemMagicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemMagicoScalarFieldEnum | ItemMagicoScalarFieldEnum[]
  }

  /**
   * Personagem without action
   */
  export type PersonagemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personagem
     */
    select?: PersonagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personagem
     */
    omit?: PersonagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonagemInclude<ExtArgs> | null
  }


  /**
   * Model ItemMagico
   */

  export type AggregateItemMagico = {
    _count: ItemMagicoCountAggregateOutputType | null
    _avg: ItemMagicoAvgAggregateOutputType | null
    _sum: ItemMagicoSumAggregateOutputType | null
    _min: ItemMagicoMinAggregateOutputType | null
    _max: ItemMagicoMaxAggregateOutputType | null
  }

  export type ItemMagicoAvgAggregateOutputType = {
    forca: number | null
    defesa: number | null
  }

  export type ItemMagicoSumAggregateOutputType = {
    forca: number | null
    defesa: number | null
  }

  export type ItemMagicoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    tipoItemMagico: $Enums.TipoItemMagico | null
    forca: number | null
    defesa: number | null
    personagemId: string | null
  }

  export type ItemMagicoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    tipoItemMagico: $Enums.TipoItemMagico | null
    forca: number | null
    defesa: number | null
    personagemId: string | null
  }

  export type ItemMagicoCountAggregateOutputType = {
    id: number
    nome: number
    tipoItemMagico: number
    forca: number
    defesa: number
    personagemId: number
    _all: number
  }


  export type ItemMagicoAvgAggregateInputType = {
    forca?: true
    defesa?: true
  }

  export type ItemMagicoSumAggregateInputType = {
    forca?: true
    defesa?: true
  }

  export type ItemMagicoMinAggregateInputType = {
    id?: true
    nome?: true
    tipoItemMagico?: true
    forca?: true
    defesa?: true
    personagemId?: true
  }

  export type ItemMagicoMaxAggregateInputType = {
    id?: true
    nome?: true
    tipoItemMagico?: true
    forca?: true
    defesa?: true
    personagemId?: true
  }

  export type ItemMagicoCountAggregateInputType = {
    id?: true
    nome?: true
    tipoItemMagico?: true
    forca?: true
    defesa?: true
    personagemId?: true
    _all?: true
  }

  export type ItemMagicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemMagico to aggregate.
     */
    where?: ItemMagicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemMagicos to fetch.
     */
    orderBy?: ItemMagicoOrderByWithRelationInput | ItemMagicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemMagicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemMagicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemMagicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemMagicos
    **/
    _count?: true | ItemMagicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemMagicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemMagicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMagicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMagicoMaxAggregateInputType
  }

  export type GetItemMagicoAggregateType<T extends ItemMagicoAggregateArgs> = {
        [P in keyof T & keyof AggregateItemMagico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemMagico[P]>
      : GetScalarType<T[P], AggregateItemMagico[P]>
  }




  export type ItemMagicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemMagicoWhereInput
    orderBy?: ItemMagicoOrderByWithAggregationInput | ItemMagicoOrderByWithAggregationInput[]
    by: ItemMagicoScalarFieldEnum[] | ItemMagicoScalarFieldEnum
    having?: ItemMagicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemMagicoCountAggregateInputType | true
    _avg?: ItemMagicoAvgAggregateInputType
    _sum?: ItemMagicoSumAggregateInputType
    _min?: ItemMagicoMinAggregateInputType
    _max?: ItemMagicoMaxAggregateInputType
  }

  export type ItemMagicoGroupByOutputType = {
    id: string
    nome: string
    tipoItemMagico: $Enums.TipoItemMagico
    forca: number
    defesa: number
    personagemId: string
    _count: ItemMagicoCountAggregateOutputType | null
    _avg: ItemMagicoAvgAggregateOutputType | null
    _sum: ItemMagicoSumAggregateOutputType | null
    _min: ItemMagicoMinAggregateOutputType | null
    _max: ItemMagicoMaxAggregateOutputType | null
  }

  type GetItemMagicoGroupByPayload<T extends ItemMagicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemMagicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemMagicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemMagicoGroupByOutputType[P]>
            : GetScalarType<T[P], ItemMagicoGroupByOutputType[P]>
        }
      >
    >


  export type ItemMagicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipoItemMagico?: boolean
    forca?: boolean
    defesa?: boolean
    personagemId?: boolean
    personagem?: boolean | PersonagemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemMagico"]>

  export type ItemMagicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipoItemMagico?: boolean
    forca?: boolean
    defesa?: boolean
    personagemId?: boolean
    personagem?: boolean | PersonagemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemMagico"]>

  export type ItemMagicoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipoItemMagico?: boolean
    forca?: boolean
    defesa?: boolean
    personagemId?: boolean
    personagem?: boolean | PersonagemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemMagico"]>

  export type ItemMagicoSelectScalar = {
    id?: boolean
    nome?: boolean
    tipoItemMagico?: boolean
    forca?: boolean
    defesa?: boolean
    personagemId?: boolean
  }

  export type ItemMagicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "tipoItemMagico" | "forca" | "defesa" | "personagemId", ExtArgs["result"]["itemMagico"]>
  export type ItemMagicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personagem?: boolean | PersonagemDefaultArgs<ExtArgs>
  }
  export type ItemMagicoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personagem?: boolean | PersonagemDefaultArgs<ExtArgs>
  }
  export type ItemMagicoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personagem?: boolean | PersonagemDefaultArgs<ExtArgs>
  }

  export type $ItemMagicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemMagico"
    objects: {
      personagem: Prisma.$PersonagemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      tipoItemMagico: $Enums.TipoItemMagico
      forca: number
      defesa: number
      personagemId: string
    }, ExtArgs["result"]["itemMagico"]>
    composites: {}
  }

  type ItemMagicoGetPayload<S extends boolean | null | undefined | ItemMagicoDefaultArgs> = $Result.GetResult<Prisma.$ItemMagicoPayload, S>

  type ItemMagicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemMagicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemMagicoCountAggregateInputType | true
    }

  export interface ItemMagicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemMagico'], meta: { name: 'ItemMagico' } }
    /**
     * Find zero or one ItemMagico that matches the filter.
     * @param {ItemMagicoFindUniqueArgs} args - Arguments to find a ItemMagico
     * @example
     * // Get one ItemMagico
     * const itemMagico = await prisma.itemMagico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemMagicoFindUniqueArgs>(args: SelectSubset<T, ItemMagicoFindUniqueArgs<ExtArgs>>): Prisma__ItemMagicoClient<$Result.GetResult<Prisma.$ItemMagicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemMagico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemMagicoFindUniqueOrThrowArgs} args - Arguments to find a ItemMagico
     * @example
     * // Get one ItemMagico
     * const itemMagico = await prisma.itemMagico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemMagicoFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemMagicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemMagicoClient<$Result.GetResult<Prisma.$ItemMagicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemMagico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemMagicoFindFirstArgs} args - Arguments to find a ItemMagico
     * @example
     * // Get one ItemMagico
     * const itemMagico = await prisma.itemMagico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemMagicoFindFirstArgs>(args?: SelectSubset<T, ItemMagicoFindFirstArgs<ExtArgs>>): Prisma__ItemMagicoClient<$Result.GetResult<Prisma.$ItemMagicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemMagico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemMagicoFindFirstOrThrowArgs} args - Arguments to find a ItemMagico
     * @example
     * // Get one ItemMagico
     * const itemMagico = await prisma.itemMagico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemMagicoFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemMagicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemMagicoClient<$Result.GetResult<Prisma.$ItemMagicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemMagicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemMagicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemMagicos
     * const itemMagicos = await prisma.itemMagico.findMany()
     * 
     * // Get first 10 ItemMagicos
     * const itemMagicos = await prisma.itemMagico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemMagicoWithIdOnly = await prisma.itemMagico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemMagicoFindManyArgs>(args?: SelectSubset<T, ItemMagicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemMagicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemMagico.
     * @param {ItemMagicoCreateArgs} args - Arguments to create a ItemMagico.
     * @example
     * // Create one ItemMagico
     * const ItemMagico = await prisma.itemMagico.create({
     *   data: {
     *     // ... data to create a ItemMagico
     *   }
     * })
     * 
     */
    create<T extends ItemMagicoCreateArgs>(args: SelectSubset<T, ItemMagicoCreateArgs<ExtArgs>>): Prisma__ItemMagicoClient<$Result.GetResult<Prisma.$ItemMagicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemMagicos.
     * @param {ItemMagicoCreateManyArgs} args - Arguments to create many ItemMagicos.
     * @example
     * // Create many ItemMagicos
     * const itemMagico = await prisma.itemMagico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemMagicoCreateManyArgs>(args?: SelectSubset<T, ItemMagicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemMagicos and returns the data saved in the database.
     * @param {ItemMagicoCreateManyAndReturnArgs} args - Arguments to create many ItemMagicos.
     * @example
     * // Create many ItemMagicos
     * const itemMagico = await prisma.itemMagico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemMagicos and only return the `id`
     * const itemMagicoWithIdOnly = await prisma.itemMagico.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemMagicoCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemMagicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemMagicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemMagico.
     * @param {ItemMagicoDeleteArgs} args - Arguments to delete one ItemMagico.
     * @example
     * // Delete one ItemMagico
     * const ItemMagico = await prisma.itemMagico.delete({
     *   where: {
     *     // ... filter to delete one ItemMagico
     *   }
     * })
     * 
     */
    delete<T extends ItemMagicoDeleteArgs>(args: SelectSubset<T, ItemMagicoDeleteArgs<ExtArgs>>): Prisma__ItemMagicoClient<$Result.GetResult<Prisma.$ItemMagicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemMagico.
     * @param {ItemMagicoUpdateArgs} args - Arguments to update one ItemMagico.
     * @example
     * // Update one ItemMagico
     * const itemMagico = await prisma.itemMagico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemMagicoUpdateArgs>(args: SelectSubset<T, ItemMagicoUpdateArgs<ExtArgs>>): Prisma__ItemMagicoClient<$Result.GetResult<Prisma.$ItemMagicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemMagicos.
     * @param {ItemMagicoDeleteManyArgs} args - Arguments to filter ItemMagicos to delete.
     * @example
     * // Delete a few ItemMagicos
     * const { count } = await prisma.itemMagico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemMagicoDeleteManyArgs>(args?: SelectSubset<T, ItemMagicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemMagicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemMagicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemMagicos
     * const itemMagico = await prisma.itemMagico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemMagicoUpdateManyArgs>(args: SelectSubset<T, ItemMagicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemMagicos and returns the data updated in the database.
     * @param {ItemMagicoUpdateManyAndReturnArgs} args - Arguments to update many ItemMagicos.
     * @example
     * // Update many ItemMagicos
     * const itemMagico = await prisma.itemMagico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemMagicos and only return the `id`
     * const itemMagicoWithIdOnly = await prisma.itemMagico.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemMagicoUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemMagicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemMagicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemMagico.
     * @param {ItemMagicoUpsertArgs} args - Arguments to update or create a ItemMagico.
     * @example
     * // Update or create a ItemMagico
     * const itemMagico = await prisma.itemMagico.upsert({
     *   create: {
     *     // ... data to create a ItemMagico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemMagico we want to update
     *   }
     * })
     */
    upsert<T extends ItemMagicoUpsertArgs>(args: SelectSubset<T, ItemMagicoUpsertArgs<ExtArgs>>): Prisma__ItemMagicoClient<$Result.GetResult<Prisma.$ItemMagicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemMagicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemMagicoCountArgs} args - Arguments to filter ItemMagicos to count.
     * @example
     * // Count the number of ItemMagicos
     * const count = await prisma.itemMagico.count({
     *   where: {
     *     // ... the filter for the ItemMagicos we want to count
     *   }
     * })
    **/
    count<T extends ItemMagicoCountArgs>(
      args?: Subset<T, ItemMagicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemMagicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemMagico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemMagicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemMagicoAggregateArgs>(args: Subset<T, ItemMagicoAggregateArgs>): Prisma.PrismaPromise<GetItemMagicoAggregateType<T>>

    /**
     * Group by ItemMagico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemMagicoGroupByArgs} args - Group by arguments.
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
      T extends ItemMagicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemMagicoGroupByArgs['orderBy'] }
        : { orderBy?: ItemMagicoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemMagicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemMagicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemMagico model
   */
  readonly fields: ItemMagicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemMagico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemMagicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    personagem<T extends PersonagemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonagemDefaultArgs<ExtArgs>>): Prisma__PersonagemClient<$Result.GetResult<Prisma.$PersonagemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemMagico model
   */
  interface ItemMagicoFieldRefs {
    readonly id: FieldRef<"ItemMagico", 'String'>
    readonly nome: FieldRef<"ItemMagico", 'String'>
    readonly tipoItemMagico: FieldRef<"ItemMagico", 'TipoItemMagico'>
    readonly forca: FieldRef<"ItemMagico", 'Int'>
    readonly defesa: FieldRef<"ItemMagico", 'Int'>
    readonly personagemId: FieldRef<"ItemMagico", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ItemMagico findUnique
   */
  export type ItemMagicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemMagico
     */
    select?: ItemMagicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemMagico
     */
    omit?: ItemMagicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemMagicoInclude<ExtArgs> | null
    /**
     * Filter, which ItemMagico to fetch.
     */
    where: ItemMagicoWhereUniqueInput
  }

  /**
   * ItemMagico findUniqueOrThrow
   */
  export type ItemMagicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemMagico
     */
    select?: ItemMagicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemMagico
     */
    omit?: ItemMagicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemMagicoInclude<ExtArgs> | null
    /**
     * Filter, which ItemMagico to fetch.
     */
    where: ItemMagicoWhereUniqueInput
  }

  /**
   * ItemMagico findFirst
   */
  export type ItemMagicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemMagico
     */
    select?: ItemMagicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemMagico
     */
    omit?: ItemMagicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemMagicoInclude<ExtArgs> | null
    /**
     * Filter, which ItemMagico to fetch.
     */
    where?: ItemMagicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemMagicos to fetch.
     */
    orderBy?: ItemMagicoOrderByWithRelationInput | ItemMagicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemMagicos.
     */
    cursor?: ItemMagicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemMagicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemMagicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemMagicos.
     */
    distinct?: ItemMagicoScalarFieldEnum | ItemMagicoScalarFieldEnum[]
  }

  /**
   * ItemMagico findFirstOrThrow
   */
  export type ItemMagicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemMagico
     */
    select?: ItemMagicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemMagico
     */
    omit?: ItemMagicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemMagicoInclude<ExtArgs> | null
    /**
     * Filter, which ItemMagico to fetch.
     */
    where?: ItemMagicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemMagicos to fetch.
     */
    orderBy?: ItemMagicoOrderByWithRelationInput | ItemMagicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemMagicos.
     */
    cursor?: ItemMagicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemMagicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemMagicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemMagicos.
     */
    distinct?: ItemMagicoScalarFieldEnum | ItemMagicoScalarFieldEnum[]
  }

  /**
   * ItemMagico findMany
   */
  export type ItemMagicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemMagico
     */
    select?: ItemMagicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemMagico
     */
    omit?: ItemMagicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemMagicoInclude<ExtArgs> | null
    /**
     * Filter, which ItemMagicos to fetch.
     */
    where?: ItemMagicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemMagicos to fetch.
     */
    orderBy?: ItemMagicoOrderByWithRelationInput | ItemMagicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemMagicos.
     */
    cursor?: ItemMagicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemMagicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemMagicos.
     */
    skip?: number
    distinct?: ItemMagicoScalarFieldEnum | ItemMagicoScalarFieldEnum[]
  }

  /**
   * ItemMagico create
   */
  export type ItemMagicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemMagico
     */
    select?: ItemMagicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemMagico
     */
    omit?: ItemMagicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemMagicoInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemMagico.
     */
    data: XOR<ItemMagicoCreateInput, ItemMagicoUncheckedCreateInput>
  }

  /**
   * ItemMagico createMany
   */
  export type ItemMagicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemMagicos.
     */
    data: ItemMagicoCreateManyInput | ItemMagicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemMagico createManyAndReturn
   */
  export type ItemMagicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemMagico
     */
    select?: ItemMagicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemMagico
     */
    omit?: ItemMagicoOmit<ExtArgs> | null
    /**
     * The data used to create many ItemMagicos.
     */
    data: ItemMagicoCreateManyInput | ItemMagicoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemMagicoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemMagico update
   */
  export type ItemMagicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemMagico
     */
    select?: ItemMagicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemMagico
     */
    omit?: ItemMagicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemMagicoInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemMagico.
     */
    data: XOR<ItemMagicoUpdateInput, ItemMagicoUncheckedUpdateInput>
    /**
     * Choose, which ItemMagico to update.
     */
    where: ItemMagicoWhereUniqueInput
  }

  /**
   * ItemMagico updateMany
   */
  export type ItemMagicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemMagicos.
     */
    data: XOR<ItemMagicoUpdateManyMutationInput, ItemMagicoUncheckedUpdateManyInput>
    /**
     * Filter which ItemMagicos to update
     */
    where?: ItemMagicoWhereInput
    /**
     * Limit how many ItemMagicos to update.
     */
    limit?: number
  }

  /**
   * ItemMagico updateManyAndReturn
   */
  export type ItemMagicoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemMagico
     */
    select?: ItemMagicoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemMagico
     */
    omit?: ItemMagicoOmit<ExtArgs> | null
    /**
     * The data used to update ItemMagicos.
     */
    data: XOR<ItemMagicoUpdateManyMutationInput, ItemMagicoUncheckedUpdateManyInput>
    /**
     * Filter which ItemMagicos to update
     */
    where?: ItemMagicoWhereInput
    /**
     * Limit how many ItemMagicos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemMagicoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemMagico upsert
   */
  export type ItemMagicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemMagico
     */
    select?: ItemMagicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemMagico
     */
    omit?: ItemMagicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemMagicoInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemMagico to update in case it exists.
     */
    where: ItemMagicoWhereUniqueInput
    /**
     * In case the ItemMagico found by the `where` argument doesn't exist, create a new ItemMagico with this data.
     */
    create: XOR<ItemMagicoCreateInput, ItemMagicoUncheckedCreateInput>
    /**
     * In case the ItemMagico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemMagicoUpdateInput, ItemMagicoUncheckedUpdateInput>
  }

  /**
   * ItemMagico delete
   */
  export type ItemMagicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemMagico
     */
    select?: ItemMagicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemMagico
     */
    omit?: ItemMagicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemMagicoInclude<ExtArgs> | null
    /**
     * Filter which ItemMagico to delete.
     */
    where: ItemMagicoWhereUniqueInput
  }

  /**
   * ItemMagico deleteMany
   */
  export type ItemMagicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemMagicos to delete
     */
    where?: ItemMagicoWhereInput
    /**
     * Limit how many ItemMagicos to delete.
     */
    limit?: number
  }

  /**
   * ItemMagico without action
   */
  export type ItemMagicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemMagico
     */
    select?: ItemMagicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemMagico
     */
    omit?: ItemMagicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemMagicoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PersonagemScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    nomeAventureiro: 'nomeAventureiro',
    classe: 'classe',
    level: 'level',
    forca: 'forca',
    defesa: 'defesa'
  };

  export type PersonagemScalarFieldEnum = (typeof PersonagemScalarFieldEnum)[keyof typeof PersonagemScalarFieldEnum]


  export const ItemMagicoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    tipoItemMagico: 'tipoItemMagico',
    forca: 'forca',
    defesa: 'defesa',
    personagemId: 'personagemId'
  };

  export type ItemMagicoScalarFieldEnum = (typeof ItemMagicoScalarFieldEnum)[keyof typeof ItemMagicoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'ClassesPersonagem'
   */
  export type EnumClassesPersonagemFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClassesPersonagem'>
    


  /**
   * Reference to a field of type 'ClassesPersonagem[]'
   */
  export type ListEnumClassesPersonagemFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClassesPersonagem[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TipoItemMagico'
   */
  export type EnumTipoItemMagicoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoItemMagico'>
    


  /**
   * Reference to a field of type 'TipoItemMagico[]'
   */
  export type ListEnumTipoItemMagicoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoItemMagico[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PersonagemWhereInput = {
    AND?: PersonagemWhereInput | PersonagemWhereInput[]
    OR?: PersonagemWhereInput[]
    NOT?: PersonagemWhereInput | PersonagemWhereInput[]
    id?: StringFilter<"Personagem"> | string
    nome?: StringFilter<"Personagem"> | string
    nomeAventureiro?: StringFilter<"Personagem"> | string
    classe?: EnumClassesPersonagemFilter<"Personagem"> | $Enums.ClassesPersonagem
    level?: IntFilter<"Personagem"> | number
    forca?: IntFilter<"Personagem"> | number
    defesa?: IntFilter<"Personagem"> | number
    ItensMagicos?: ItemMagicoListRelationFilter
  }

  export type PersonagemOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    nomeAventureiro?: SortOrder
    classe?: SortOrder
    level?: SortOrder
    forca?: SortOrder
    defesa?: SortOrder
    ItensMagicos?: ItemMagicoOrderByRelationAggregateInput
  }

  export type PersonagemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PersonagemWhereInput | PersonagemWhereInput[]
    OR?: PersonagemWhereInput[]
    NOT?: PersonagemWhereInput | PersonagemWhereInput[]
    nome?: StringFilter<"Personagem"> | string
    nomeAventureiro?: StringFilter<"Personagem"> | string
    classe?: EnumClassesPersonagemFilter<"Personagem"> | $Enums.ClassesPersonagem
    level?: IntFilter<"Personagem"> | number
    forca?: IntFilter<"Personagem"> | number
    defesa?: IntFilter<"Personagem"> | number
    ItensMagicos?: ItemMagicoListRelationFilter
  }, "id">

  export type PersonagemOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    nomeAventureiro?: SortOrder
    classe?: SortOrder
    level?: SortOrder
    forca?: SortOrder
    defesa?: SortOrder
    _count?: PersonagemCountOrderByAggregateInput
    _avg?: PersonagemAvgOrderByAggregateInput
    _max?: PersonagemMaxOrderByAggregateInput
    _min?: PersonagemMinOrderByAggregateInput
    _sum?: PersonagemSumOrderByAggregateInput
  }

  export type PersonagemScalarWhereWithAggregatesInput = {
    AND?: PersonagemScalarWhereWithAggregatesInput | PersonagemScalarWhereWithAggregatesInput[]
    OR?: PersonagemScalarWhereWithAggregatesInput[]
    NOT?: PersonagemScalarWhereWithAggregatesInput | PersonagemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Personagem"> | string
    nome?: StringWithAggregatesFilter<"Personagem"> | string
    nomeAventureiro?: StringWithAggregatesFilter<"Personagem"> | string
    classe?: EnumClassesPersonagemWithAggregatesFilter<"Personagem"> | $Enums.ClassesPersonagem
    level?: IntWithAggregatesFilter<"Personagem"> | number
    forca?: IntWithAggregatesFilter<"Personagem"> | number
    defesa?: IntWithAggregatesFilter<"Personagem"> | number
  }

  export type ItemMagicoWhereInput = {
    AND?: ItemMagicoWhereInput | ItemMagicoWhereInput[]
    OR?: ItemMagicoWhereInput[]
    NOT?: ItemMagicoWhereInput | ItemMagicoWhereInput[]
    id?: StringFilter<"ItemMagico"> | string
    nome?: StringFilter<"ItemMagico"> | string
    tipoItemMagico?: EnumTipoItemMagicoFilter<"ItemMagico"> | $Enums.TipoItemMagico
    forca?: IntFilter<"ItemMagico"> | number
    defesa?: IntFilter<"ItemMagico"> | number
    personagemId?: StringFilter<"ItemMagico"> | string
    personagem?: XOR<PersonagemScalarRelationFilter, PersonagemWhereInput>
  }

  export type ItemMagicoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipoItemMagico?: SortOrder
    forca?: SortOrder
    defesa?: SortOrder
    personagemId?: SortOrder
    personagem?: PersonagemOrderByWithRelationInput
  }

  export type ItemMagicoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemMagicoWhereInput | ItemMagicoWhereInput[]
    OR?: ItemMagicoWhereInput[]
    NOT?: ItemMagicoWhereInput | ItemMagicoWhereInput[]
    nome?: StringFilter<"ItemMagico"> | string
    tipoItemMagico?: EnumTipoItemMagicoFilter<"ItemMagico"> | $Enums.TipoItemMagico
    forca?: IntFilter<"ItemMagico"> | number
    defesa?: IntFilter<"ItemMagico"> | number
    personagemId?: StringFilter<"ItemMagico"> | string
    personagem?: XOR<PersonagemScalarRelationFilter, PersonagemWhereInput>
  }, "id">

  export type ItemMagicoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipoItemMagico?: SortOrder
    forca?: SortOrder
    defesa?: SortOrder
    personagemId?: SortOrder
    _count?: ItemMagicoCountOrderByAggregateInput
    _avg?: ItemMagicoAvgOrderByAggregateInput
    _max?: ItemMagicoMaxOrderByAggregateInput
    _min?: ItemMagicoMinOrderByAggregateInput
    _sum?: ItemMagicoSumOrderByAggregateInput
  }

  export type ItemMagicoScalarWhereWithAggregatesInput = {
    AND?: ItemMagicoScalarWhereWithAggregatesInput | ItemMagicoScalarWhereWithAggregatesInput[]
    OR?: ItemMagicoScalarWhereWithAggregatesInput[]
    NOT?: ItemMagicoScalarWhereWithAggregatesInput | ItemMagicoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ItemMagico"> | string
    nome?: StringWithAggregatesFilter<"ItemMagico"> | string
    tipoItemMagico?: EnumTipoItemMagicoWithAggregatesFilter<"ItemMagico"> | $Enums.TipoItemMagico
    forca?: IntWithAggregatesFilter<"ItemMagico"> | number
    defesa?: IntWithAggregatesFilter<"ItemMagico"> | number
    personagemId?: StringWithAggregatesFilter<"ItemMagico"> | string
  }

  export type PersonagemCreateInput = {
    id?: string
    nome: string
    nomeAventureiro: string
    classe: $Enums.ClassesPersonagem
    level: number
    forca: number
    defesa: number
    ItensMagicos?: ItemMagicoCreateNestedManyWithoutPersonagemInput
  }

  export type PersonagemUncheckedCreateInput = {
    id?: string
    nome: string
    nomeAventureiro: string
    classe: $Enums.ClassesPersonagem
    level: number
    forca: number
    defesa: number
    ItensMagicos?: ItemMagicoUncheckedCreateNestedManyWithoutPersonagemInput
  }

  export type PersonagemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nomeAventureiro?: StringFieldUpdateOperationsInput | string
    classe?: EnumClassesPersonagemFieldUpdateOperationsInput | $Enums.ClassesPersonagem
    level?: IntFieldUpdateOperationsInput | number
    forca?: IntFieldUpdateOperationsInput | number
    defesa?: IntFieldUpdateOperationsInput | number
    ItensMagicos?: ItemMagicoUpdateManyWithoutPersonagemNestedInput
  }

  export type PersonagemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nomeAventureiro?: StringFieldUpdateOperationsInput | string
    classe?: EnumClassesPersonagemFieldUpdateOperationsInput | $Enums.ClassesPersonagem
    level?: IntFieldUpdateOperationsInput | number
    forca?: IntFieldUpdateOperationsInput | number
    defesa?: IntFieldUpdateOperationsInput | number
    ItensMagicos?: ItemMagicoUncheckedUpdateManyWithoutPersonagemNestedInput
  }

  export type PersonagemCreateManyInput = {
    id?: string
    nome: string
    nomeAventureiro: string
    classe: $Enums.ClassesPersonagem
    level: number
    forca: number
    defesa: number
  }

  export type PersonagemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nomeAventureiro?: StringFieldUpdateOperationsInput | string
    classe?: EnumClassesPersonagemFieldUpdateOperationsInput | $Enums.ClassesPersonagem
    level?: IntFieldUpdateOperationsInput | number
    forca?: IntFieldUpdateOperationsInput | number
    defesa?: IntFieldUpdateOperationsInput | number
  }

  export type PersonagemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nomeAventureiro?: StringFieldUpdateOperationsInput | string
    classe?: EnumClassesPersonagemFieldUpdateOperationsInput | $Enums.ClassesPersonagem
    level?: IntFieldUpdateOperationsInput | number
    forca?: IntFieldUpdateOperationsInput | number
    defesa?: IntFieldUpdateOperationsInput | number
  }

  export type ItemMagicoCreateInput = {
    id?: string
    nome: string
    tipoItemMagico: $Enums.TipoItemMagico
    forca: number
    defesa: number
    personagem: PersonagemCreateNestedOneWithoutItensMagicosInput
  }

  export type ItemMagicoUncheckedCreateInput = {
    id?: string
    nome: string
    tipoItemMagico: $Enums.TipoItemMagico
    forca: number
    defesa: number
    personagemId: string
  }

  export type ItemMagicoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipoItemMagico?: EnumTipoItemMagicoFieldUpdateOperationsInput | $Enums.TipoItemMagico
    forca?: IntFieldUpdateOperationsInput | number
    defesa?: IntFieldUpdateOperationsInput | number
    personagem?: PersonagemUpdateOneRequiredWithoutItensMagicosNestedInput
  }

  export type ItemMagicoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipoItemMagico?: EnumTipoItemMagicoFieldUpdateOperationsInput | $Enums.TipoItemMagico
    forca?: IntFieldUpdateOperationsInput | number
    defesa?: IntFieldUpdateOperationsInput | number
    personagemId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemMagicoCreateManyInput = {
    id?: string
    nome: string
    tipoItemMagico: $Enums.TipoItemMagico
    forca: number
    defesa: number
    personagemId: string
  }

  export type ItemMagicoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipoItemMagico?: EnumTipoItemMagicoFieldUpdateOperationsInput | $Enums.TipoItemMagico
    forca?: IntFieldUpdateOperationsInput | number
    defesa?: IntFieldUpdateOperationsInput | number
  }

  export type ItemMagicoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipoItemMagico?: EnumTipoItemMagicoFieldUpdateOperationsInput | $Enums.TipoItemMagico
    forca?: IntFieldUpdateOperationsInput | number
    defesa?: IntFieldUpdateOperationsInput | number
    personagemId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumClassesPersonagemFilter<$PrismaModel = never> = {
    equals?: $Enums.ClassesPersonagem | EnumClassesPersonagemFieldRefInput<$PrismaModel>
    in?: $Enums.ClassesPersonagem[] | ListEnumClassesPersonagemFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClassesPersonagem[] | ListEnumClassesPersonagemFieldRefInput<$PrismaModel>
    not?: NestedEnumClassesPersonagemFilter<$PrismaModel> | $Enums.ClassesPersonagem
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ItemMagicoListRelationFilter = {
    every?: ItemMagicoWhereInput
    some?: ItemMagicoWhereInput
    none?: ItemMagicoWhereInput
  }

  export type ItemMagicoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonagemCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nomeAventureiro?: SortOrder
    classe?: SortOrder
    level?: SortOrder
    forca?: SortOrder
    defesa?: SortOrder
  }

  export type PersonagemAvgOrderByAggregateInput = {
    level?: SortOrder
    forca?: SortOrder
    defesa?: SortOrder
  }

  export type PersonagemMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nomeAventureiro?: SortOrder
    classe?: SortOrder
    level?: SortOrder
    forca?: SortOrder
    defesa?: SortOrder
  }

  export type PersonagemMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nomeAventureiro?: SortOrder
    classe?: SortOrder
    level?: SortOrder
    forca?: SortOrder
    defesa?: SortOrder
  }

  export type PersonagemSumOrderByAggregateInput = {
    level?: SortOrder
    forca?: SortOrder
    defesa?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumClassesPersonagemWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClassesPersonagem | EnumClassesPersonagemFieldRefInput<$PrismaModel>
    in?: $Enums.ClassesPersonagem[] | ListEnumClassesPersonagemFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClassesPersonagem[] | ListEnumClassesPersonagemFieldRefInput<$PrismaModel>
    not?: NestedEnumClassesPersonagemWithAggregatesFilter<$PrismaModel> | $Enums.ClassesPersonagem
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClassesPersonagemFilter<$PrismaModel>
    _max?: NestedEnumClassesPersonagemFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumTipoItemMagicoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoItemMagico | EnumTipoItemMagicoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoItemMagico[] | ListEnumTipoItemMagicoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoItemMagico[] | ListEnumTipoItemMagicoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoItemMagicoFilter<$PrismaModel> | $Enums.TipoItemMagico
  }

  export type PersonagemScalarRelationFilter = {
    is?: PersonagemWhereInput
    isNot?: PersonagemWhereInput
  }

  export type ItemMagicoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipoItemMagico?: SortOrder
    forca?: SortOrder
    defesa?: SortOrder
    personagemId?: SortOrder
  }

  export type ItemMagicoAvgOrderByAggregateInput = {
    forca?: SortOrder
    defesa?: SortOrder
  }

  export type ItemMagicoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipoItemMagico?: SortOrder
    forca?: SortOrder
    defesa?: SortOrder
    personagemId?: SortOrder
  }

  export type ItemMagicoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipoItemMagico?: SortOrder
    forca?: SortOrder
    defesa?: SortOrder
    personagemId?: SortOrder
  }

  export type ItemMagicoSumOrderByAggregateInput = {
    forca?: SortOrder
    defesa?: SortOrder
  }

  export type EnumTipoItemMagicoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoItemMagico | EnumTipoItemMagicoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoItemMagico[] | ListEnumTipoItemMagicoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoItemMagico[] | ListEnumTipoItemMagicoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoItemMagicoWithAggregatesFilter<$PrismaModel> | $Enums.TipoItemMagico
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoItemMagicoFilter<$PrismaModel>
    _max?: NestedEnumTipoItemMagicoFilter<$PrismaModel>
  }

  export type ItemMagicoCreateNestedManyWithoutPersonagemInput = {
    create?: XOR<ItemMagicoCreateWithoutPersonagemInput, ItemMagicoUncheckedCreateWithoutPersonagemInput> | ItemMagicoCreateWithoutPersonagemInput[] | ItemMagicoUncheckedCreateWithoutPersonagemInput[]
    connectOrCreate?: ItemMagicoCreateOrConnectWithoutPersonagemInput | ItemMagicoCreateOrConnectWithoutPersonagemInput[]
    createMany?: ItemMagicoCreateManyPersonagemInputEnvelope
    connect?: ItemMagicoWhereUniqueInput | ItemMagicoWhereUniqueInput[]
  }

  export type ItemMagicoUncheckedCreateNestedManyWithoutPersonagemInput = {
    create?: XOR<ItemMagicoCreateWithoutPersonagemInput, ItemMagicoUncheckedCreateWithoutPersonagemInput> | ItemMagicoCreateWithoutPersonagemInput[] | ItemMagicoUncheckedCreateWithoutPersonagemInput[]
    connectOrCreate?: ItemMagicoCreateOrConnectWithoutPersonagemInput | ItemMagicoCreateOrConnectWithoutPersonagemInput[]
    createMany?: ItemMagicoCreateManyPersonagemInputEnvelope
    connect?: ItemMagicoWhereUniqueInput | ItemMagicoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumClassesPersonagemFieldUpdateOperationsInput = {
    set?: $Enums.ClassesPersonagem
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ItemMagicoUpdateManyWithoutPersonagemNestedInput = {
    create?: XOR<ItemMagicoCreateWithoutPersonagemInput, ItemMagicoUncheckedCreateWithoutPersonagemInput> | ItemMagicoCreateWithoutPersonagemInput[] | ItemMagicoUncheckedCreateWithoutPersonagemInput[]
    connectOrCreate?: ItemMagicoCreateOrConnectWithoutPersonagemInput | ItemMagicoCreateOrConnectWithoutPersonagemInput[]
    upsert?: ItemMagicoUpsertWithWhereUniqueWithoutPersonagemInput | ItemMagicoUpsertWithWhereUniqueWithoutPersonagemInput[]
    createMany?: ItemMagicoCreateManyPersonagemInputEnvelope
    set?: ItemMagicoWhereUniqueInput | ItemMagicoWhereUniqueInput[]
    disconnect?: ItemMagicoWhereUniqueInput | ItemMagicoWhereUniqueInput[]
    delete?: ItemMagicoWhereUniqueInput | ItemMagicoWhereUniqueInput[]
    connect?: ItemMagicoWhereUniqueInput | ItemMagicoWhereUniqueInput[]
    update?: ItemMagicoUpdateWithWhereUniqueWithoutPersonagemInput | ItemMagicoUpdateWithWhereUniqueWithoutPersonagemInput[]
    updateMany?: ItemMagicoUpdateManyWithWhereWithoutPersonagemInput | ItemMagicoUpdateManyWithWhereWithoutPersonagemInput[]
    deleteMany?: ItemMagicoScalarWhereInput | ItemMagicoScalarWhereInput[]
  }

  export type ItemMagicoUncheckedUpdateManyWithoutPersonagemNestedInput = {
    create?: XOR<ItemMagicoCreateWithoutPersonagemInput, ItemMagicoUncheckedCreateWithoutPersonagemInput> | ItemMagicoCreateWithoutPersonagemInput[] | ItemMagicoUncheckedCreateWithoutPersonagemInput[]
    connectOrCreate?: ItemMagicoCreateOrConnectWithoutPersonagemInput | ItemMagicoCreateOrConnectWithoutPersonagemInput[]
    upsert?: ItemMagicoUpsertWithWhereUniqueWithoutPersonagemInput | ItemMagicoUpsertWithWhereUniqueWithoutPersonagemInput[]
    createMany?: ItemMagicoCreateManyPersonagemInputEnvelope
    set?: ItemMagicoWhereUniqueInput | ItemMagicoWhereUniqueInput[]
    disconnect?: ItemMagicoWhereUniqueInput | ItemMagicoWhereUniqueInput[]
    delete?: ItemMagicoWhereUniqueInput | ItemMagicoWhereUniqueInput[]
    connect?: ItemMagicoWhereUniqueInput | ItemMagicoWhereUniqueInput[]
    update?: ItemMagicoUpdateWithWhereUniqueWithoutPersonagemInput | ItemMagicoUpdateWithWhereUniqueWithoutPersonagemInput[]
    updateMany?: ItemMagicoUpdateManyWithWhereWithoutPersonagemInput | ItemMagicoUpdateManyWithWhereWithoutPersonagemInput[]
    deleteMany?: ItemMagicoScalarWhereInput | ItemMagicoScalarWhereInput[]
  }

  export type PersonagemCreateNestedOneWithoutItensMagicosInput = {
    create?: XOR<PersonagemCreateWithoutItensMagicosInput, PersonagemUncheckedCreateWithoutItensMagicosInput>
    connectOrCreate?: PersonagemCreateOrConnectWithoutItensMagicosInput
    connect?: PersonagemWhereUniqueInput
  }

  export type EnumTipoItemMagicoFieldUpdateOperationsInput = {
    set?: $Enums.TipoItemMagico
  }

  export type PersonagemUpdateOneRequiredWithoutItensMagicosNestedInput = {
    create?: XOR<PersonagemCreateWithoutItensMagicosInput, PersonagemUncheckedCreateWithoutItensMagicosInput>
    connectOrCreate?: PersonagemCreateOrConnectWithoutItensMagicosInput
    upsert?: PersonagemUpsertWithoutItensMagicosInput
    connect?: PersonagemWhereUniqueInput
    update?: XOR<XOR<PersonagemUpdateToOneWithWhereWithoutItensMagicosInput, PersonagemUpdateWithoutItensMagicosInput>, PersonagemUncheckedUpdateWithoutItensMagicosInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumClassesPersonagemFilter<$PrismaModel = never> = {
    equals?: $Enums.ClassesPersonagem | EnumClassesPersonagemFieldRefInput<$PrismaModel>
    in?: $Enums.ClassesPersonagem[] | ListEnumClassesPersonagemFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClassesPersonagem[] | ListEnumClassesPersonagemFieldRefInput<$PrismaModel>
    not?: NestedEnumClassesPersonagemFilter<$PrismaModel> | $Enums.ClassesPersonagem
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedEnumClassesPersonagemWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClassesPersonagem | EnumClassesPersonagemFieldRefInput<$PrismaModel>
    in?: $Enums.ClassesPersonagem[] | ListEnumClassesPersonagemFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClassesPersonagem[] | ListEnumClassesPersonagemFieldRefInput<$PrismaModel>
    not?: NestedEnumClassesPersonagemWithAggregatesFilter<$PrismaModel> | $Enums.ClassesPersonagem
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClassesPersonagemFilter<$PrismaModel>
    _max?: NestedEnumClassesPersonagemFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTipoItemMagicoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoItemMagico | EnumTipoItemMagicoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoItemMagico[] | ListEnumTipoItemMagicoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoItemMagico[] | ListEnumTipoItemMagicoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoItemMagicoFilter<$PrismaModel> | $Enums.TipoItemMagico
  }

  export type NestedEnumTipoItemMagicoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoItemMagico | EnumTipoItemMagicoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoItemMagico[] | ListEnumTipoItemMagicoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoItemMagico[] | ListEnumTipoItemMagicoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoItemMagicoWithAggregatesFilter<$PrismaModel> | $Enums.TipoItemMagico
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoItemMagicoFilter<$PrismaModel>
    _max?: NestedEnumTipoItemMagicoFilter<$PrismaModel>
  }

  export type ItemMagicoCreateWithoutPersonagemInput = {
    id?: string
    nome: string
    tipoItemMagico: $Enums.TipoItemMagico
    forca: number
    defesa: number
  }

  export type ItemMagicoUncheckedCreateWithoutPersonagemInput = {
    id?: string
    nome: string
    tipoItemMagico: $Enums.TipoItemMagico
    forca: number
    defesa: number
  }

  export type ItemMagicoCreateOrConnectWithoutPersonagemInput = {
    where: ItemMagicoWhereUniqueInput
    create: XOR<ItemMagicoCreateWithoutPersonagemInput, ItemMagicoUncheckedCreateWithoutPersonagemInput>
  }

  export type ItemMagicoCreateManyPersonagemInputEnvelope = {
    data: ItemMagicoCreateManyPersonagemInput | ItemMagicoCreateManyPersonagemInput[]
    skipDuplicates?: boolean
  }

  export type ItemMagicoUpsertWithWhereUniqueWithoutPersonagemInput = {
    where: ItemMagicoWhereUniqueInput
    update: XOR<ItemMagicoUpdateWithoutPersonagemInput, ItemMagicoUncheckedUpdateWithoutPersonagemInput>
    create: XOR<ItemMagicoCreateWithoutPersonagemInput, ItemMagicoUncheckedCreateWithoutPersonagemInput>
  }

  export type ItemMagicoUpdateWithWhereUniqueWithoutPersonagemInput = {
    where: ItemMagicoWhereUniqueInput
    data: XOR<ItemMagicoUpdateWithoutPersonagemInput, ItemMagicoUncheckedUpdateWithoutPersonagemInput>
  }

  export type ItemMagicoUpdateManyWithWhereWithoutPersonagemInput = {
    where: ItemMagicoScalarWhereInput
    data: XOR<ItemMagicoUpdateManyMutationInput, ItemMagicoUncheckedUpdateManyWithoutPersonagemInput>
  }

  export type ItemMagicoScalarWhereInput = {
    AND?: ItemMagicoScalarWhereInput | ItemMagicoScalarWhereInput[]
    OR?: ItemMagicoScalarWhereInput[]
    NOT?: ItemMagicoScalarWhereInput | ItemMagicoScalarWhereInput[]
    id?: StringFilter<"ItemMagico"> | string
    nome?: StringFilter<"ItemMagico"> | string
    tipoItemMagico?: EnumTipoItemMagicoFilter<"ItemMagico"> | $Enums.TipoItemMagico
    forca?: IntFilter<"ItemMagico"> | number
    defesa?: IntFilter<"ItemMagico"> | number
    personagemId?: StringFilter<"ItemMagico"> | string
  }

  export type PersonagemCreateWithoutItensMagicosInput = {
    id?: string
    nome: string
    nomeAventureiro: string
    classe: $Enums.ClassesPersonagem
    level: number
    forca: number
    defesa: number
  }

  export type PersonagemUncheckedCreateWithoutItensMagicosInput = {
    id?: string
    nome: string
    nomeAventureiro: string
    classe: $Enums.ClassesPersonagem
    level: number
    forca: number
    defesa: number
  }

  export type PersonagemCreateOrConnectWithoutItensMagicosInput = {
    where: PersonagemWhereUniqueInput
    create: XOR<PersonagemCreateWithoutItensMagicosInput, PersonagemUncheckedCreateWithoutItensMagicosInput>
  }

  export type PersonagemUpsertWithoutItensMagicosInput = {
    update: XOR<PersonagemUpdateWithoutItensMagicosInput, PersonagemUncheckedUpdateWithoutItensMagicosInput>
    create: XOR<PersonagemCreateWithoutItensMagicosInput, PersonagemUncheckedCreateWithoutItensMagicosInput>
    where?: PersonagemWhereInput
  }

  export type PersonagemUpdateToOneWithWhereWithoutItensMagicosInput = {
    where?: PersonagemWhereInput
    data: XOR<PersonagemUpdateWithoutItensMagicosInput, PersonagemUncheckedUpdateWithoutItensMagicosInput>
  }

  export type PersonagemUpdateWithoutItensMagicosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nomeAventureiro?: StringFieldUpdateOperationsInput | string
    classe?: EnumClassesPersonagemFieldUpdateOperationsInput | $Enums.ClassesPersonagem
    level?: IntFieldUpdateOperationsInput | number
    forca?: IntFieldUpdateOperationsInput | number
    defesa?: IntFieldUpdateOperationsInput | number
  }

  export type PersonagemUncheckedUpdateWithoutItensMagicosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nomeAventureiro?: StringFieldUpdateOperationsInput | string
    classe?: EnumClassesPersonagemFieldUpdateOperationsInput | $Enums.ClassesPersonagem
    level?: IntFieldUpdateOperationsInput | number
    forca?: IntFieldUpdateOperationsInput | number
    defesa?: IntFieldUpdateOperationsInput | number
  }

  export type ItemMagicoCreateManyPersonagemInput = {
    id?: string
    nome: string
    tipoItemMagico: $Enums.TipoItemMagico
    forca: number
    defesa: number
  }

  export type ItemMagicoUpdateWithoutPersonagemInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipoItemMagico?: EnumTipoItemMagicoFieldUpdateOperationsInput | $Enums.TipoItemMagico
    forca?: IntFieldUpdateOperationsInput | number
    defesa?: IntFieldUpdateOperationsInput | number
  }

  export type ItemMagicoUncheckedUpdateWithoutPersonagemInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipoItemMagico?: EnumTipoItemMagicoFieldUpdateOperationsInput | $Enums.TipoItemMagico
    forca?: IntFieldUpdateOperationsInput | number
    defesa?: IntFieldUpdateOperationsInput | number
  }

  export type ItemMagicoUncheckedUpdateManyWithoutPersonagemInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipoItemMagico?: EnumTipoItemMagicoFieldUpdateOperationsInput | $Enums.TipoItemMagico
    forca?: IntFieldUpdateOperationsInput | number
    defesa?: IntFieldUpdateOperationsInput | number
  }



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