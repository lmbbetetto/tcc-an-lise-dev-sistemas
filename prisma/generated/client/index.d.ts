
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
 * Model Professor
 * 
 */
export type Professor = $Result.DefaultSelection<Prisma.$ProfessorPayload>
/**
 * Model Disciplinas
 * 
 */
export type Disciplinas = $Result.DefaultSelection<Prisma.$DisciplinasPayload>
/**
 * Model Cursos
 * 
 */
export type Cursos = $Result.DefaultSelection<Prisma.$CursosPayload>
/**
 * Model Aluno
 * 
 */
export type Aluno = $Result.DefaultSelection<Prisma.$AlunoPayload>
/**
 * Model FaltasDisciplinares
 * 
 */
export type FaltasDisciplinares = $Result.DefaultSelection<Prisma.$FaltasDisciplinaresPayload>
/**
 * Model Matricula
 * 
 */
export type Matricula = $Result.DefaultSelection<Prisma.$MatriculaPayload>
/**
 * Model Turma
 * 
 */
export type Turma = $Result.DefaultSelection<Prisma.$TurmaPayload>
/**
 * Model Chamada
 * 
 */
export type Chamada = $Result.DefaultSelection<Prisma.$ChamadaPayload>
/**
 * Model AtividadeSala
 * 
 */
export type AtividadeSala = $Result.DefaultSelection<Prisma.$AtividadeSalaPayload>
/**
 * Model AtividadeExtraSala
 * 
 */
export type AtividadeExtraSala = $Result.DefaultSelection<Prisma.$AtividadeExtraSalaPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Professors
 * const professors = await prisma.professor.findMany()
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
   * // Fetch zero or more Professors
   * const professors = await prisma.professor.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.professor`: Exposes CRUD operations for the **Professor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professors
    * const professors = await prisma.professor.findMany()
    * ```
    */
  get professor(): Prisma.ProfessorDelegate<ExtArgs>;

  /**
   * `prisma.disciplinas`: Exposes CRUD operations for the **Disciplinas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disciplinas
    * const disciplinas = await prisma.disciplinas.findMany()
    * ```
    */
  get disciplinas(): Prisma.DisciplinasDelegate<ExtArgs>;

  /**
   * `prisma.cursos`: Exposes CRUD operations for the **Cursos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cursos
    * const cursos = await prisma.cursos.findMany()
    * ```
    */
  get cursos(): Prisma.CursosDelegate<ExtArgs>;

  /**
   * `prisma.aluno`: Exposes CRUD operations for the **Aluno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alunos
    * const alunos = await prisma.aluno.findMany()
    * ```
    */
  get aluno(): Prisma.AlunoDelegate<ExtArgs>;

  /**
   * `prisma.faltasDisciplinares`: Exposes CRUD operations for the **FaltasDisciplinares** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FaltasDisciplinares
    * const faltasDisciplinares = await prisma.faltasDisciplinares.findMany()
    * ```
    */
  get faltasDisciplinares(): Prisma.FaltasDisciplinaresDelegate<ExtArgs>;

  /**
   * `prisma.matricula`: Exposes CRUD operations for the **Matricula** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matriculas
    * const matriculas = await prisma.matricula.findMany()
    * ```
    */
  get matricula(): Prisma.MatriculaDelegate<ExtArgs>;

  /**
   * `prisma.turma`: Exposes CRUD operations for the **Turma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Turmas
    * const turmas = await prisma.turma.findMany()
    * ```
    */
  get turma(): Prisma.TurmaDelegate<ExtArgs>;

  /**
   * `prisma.chamada`: Exposes CRUD operations for the **Chamada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chamadas
    * const chamadas = await prisma.chamada.findMany()
    * ```
    */
  get chamada(): Prisma.ChamadaDelegate<ExtArgs>;

  /**
   * `prisma.atividadeSala`: Exposes CRUD operations for the **AtividadeSala** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AtividadeSalas
    * const atividadeSalas = await prisma.atividadeSala.findMany()
    * ```
    */
  get atividadeSala(): Prisma.AtividadeSalaDelegate<ExtArgs>;

  /**
   * `prisma.atividadeExtraSala`: Exposes CRUD operations for the **AtividadeExtraSala** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AtividadeExtraSalas
    * const atividadeExtraSalas = await prisma.atividadeExtraSala.findMany()
    * ```
    */
  get atividadeExtraSala(): Prisma.AtividadeExtraSalaDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.17.0
   * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
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
    Professor: 'Professor',
    Disciplinas: 'Disciplinas',
    Cursos: 'Cursos',
    Aluno: 'Aluno',
    FaltasDisciplinares: 'FaltasDisciplinares',
    Matricula: 'Matricula',
    Turma: 'Turma',
    Chamada: 'Chamada',
    AtividadeSala: 'AtividadeSala',
    AtividadeExtraSala: 'AtividadeExtraSala'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "professor" | "disciplinas" | "cursos" | "aluno" | "faltasDisciplinares" | "matricula" | "turma" | "chamada" | "atividadeSala" | "atividadeExtraSala"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Professor: {
        payload: Prisma.$ProfessorPayload<ExtArgs>
        fields: Prisma.ProfessorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findFirst: {
            args: Prisma.ProfessorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findMany: {
            args: Prisma.ProfessorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          create: {
            args: Prisma.ProfessorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          createMany: {
            args: Prisma.ProfessorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          delete: {
            args: Prisma.ProfessorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          update: {
            args: Prisma.ProfessorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          deleteMany: {
            args: Prisma.ProfessorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfessorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          aggregate: {
            args: Prisma.ProfessorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessor>
          }
          groupBy: {
            args: Prisma.ProfessorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessorCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessorCountAggregateOutputType> | number
          }
        }
      }
      Disciplinas: {
        payload: Prisma.$DisciplinasPayload<ExtArgs>
        fields: Prisma.DisciplinasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisciplinasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisciplinasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinasPayload>
          }
          findFirst: {
            args: Prisma.DisciplinasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisciplinasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinasPayload>
          }
          findMany: {
            args: Prisma.DisciplinasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinasPayload>[]
          }
          create: {
            args: Prisma.DisciplinasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinasPayload>
          }
          createMany: {
            args: Prisma.DisciplinasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisciplinasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinasPayload>[]
          }
          delete: {
            args: Prisma.DisciplinasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinasPayload>
          }
          update: {
            args: Prisma.DisciplinasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinasPayload>
          }
          deleteMany: {
            args: Prisma.DisciplinasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisciplinasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DisciplinasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinasPayload>
          }
          aggregate: {
            args: Prisma.DisciplinasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisciplinas>
          }
          groupBy: {
            args: Prisma.DisciplinasGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisciplinasGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisciplinasCountArgs<ExtArgs>
            result: $Utils.Optional<DisciplinasCountAggregateOutputType> | number
          }
        }
      }
      Cursos: {
        payload: Prisma.$CursosPayload<ExtArgs>
        fields: Prisma.CursosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CursosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CursosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursosPayload>
          }
          findFirst: {
            args: Prisma.CursosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CursosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursosPayload>
          }
          findMany: {
            args: Prisma.CursosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursosPayload>[]
          }
          create: {
            args: Prisma.CursosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursosPayload>
          }
          createMany: {
            args: Prisma.CursosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CursosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursosPayload>[]
          }
          delete: {
            args: Prisma.CursosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursosPayload>
          }
          update: {
            args: Prisma.CursosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursosPayload>
          }
          deleteMany: {
            args: Prisma.CursosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CursosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CursosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursosPayload>
          }
          aggregate: {
            args: Prisma.CursosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCursos>
          }
          groupBy: {
            args: Prisma.CursosGroupByArgs<ExtArgs>
            result: $Utils.Optional<CursosGroupByOutputType>[]
          }
          count: {
            args: Prisma.CursosCountArgs<ExtArgs>
            result: $Utils.Optional<CursosCountAggregateOutputType> | number
          }
        }
      }
      Aluno: {
        payload: Prisma.$AlunoPayload<ExtArgs>
        fields: Prisma.AlunoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlunoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlunoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          findFirst: {
            args: Prisma.AlunoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlunoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          findMany: {
            args: Prisma.AlunoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>[]
          }
          create: {
            args: Prisma.AlunoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          createMany: {
            args: Prisma.AlunoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlunoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>[]
          }
          delete: {
            args: Prisma.AlunoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          update: {
            args: Prisma.AlunoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          deleteMany: {
            args: Prisma.AlunoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlunoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlunoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          aggregate: {
            args: Prisma.AlunoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAluno>
          }
          groupBy: {
            args: Prisma.AlunoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlunoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlunoCountArgs<ExtArgs>
            result: $Utils.Optional<AlunoCountAggregateOutputType> | number
          }
        }
      }
      FaltasDisciplinares: {
        payload: Prisma.$FaltasDisciplinaresPayload<ExtArgs>
        fields: Prisma.FaltasDisciplinaresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FaltasDisciplinaresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaltasDisciplinaresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FaltasDisciplinaresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaltasDisciplinaresPayload>
          }
          findFirst: {
            args: Prisma.FaltasDisciplinaresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaltasDisciplinaresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FaltasDisciplinaresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaltasDisciplinaresPayload>
          }
          findMany: {
            args: Prisma.FaltasDisciplinaresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaltasDisciplinaresPayload>[]
          }
          create: {
            args: Prisma.FaltasDisciplinaresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaltasDisciplinaresPayload>
          }
          createMany: {
            args: Prisma.FaltasDisciplinaresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FaltasDisciplinaresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaltasDisciplinaresPayload>[]
          }
          delete: {
            args: Prisma.FaltasDisciplinaresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaltasDisciplinaresPayload>
          }
          update: {
            args: Prisma.FaltasDisciplinaresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaltasDisciplinaresPayload>
          }
          deleteMany: {
            args: Prisma.FaltasDisciplinaresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FaltasDisciplinaresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FaltasDisciplinaresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaltasDisciplinaresPayload>
          }
          aggregate: {
            args: Prisma.FaltasDisciplinaresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFaltasDisciplinares>
          }
          groupBy: {
            args: Prisma.FaltasDisciplinaresGroupByArgs<ExtArgs>
            result: $Utils.Optional<FaltasDisciplinaresGroupByOutputType>[]
          }
          count: {
            args: Prisma.FaltasDisciplinaresCountArgs<ExtArgs>
            result: $Utils.Optional<FaltasDisciplinaresCountAggregateOutputType> | number
          }
        }
      }
      Matricula: {
        payload: Prisma.$MatriculaPayload<ExtArgs>
        fields: Prisma.MatriculaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatriculaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatriculaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          findFirst: {
            args: Prisma.MatriculaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatriculaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          findMany: {
            args: Prisma.MatriculaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>[]
          }
          create: {
            args: Prisma.MatriculaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          createMany: {
            args: Prisma.MatriculaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatriculaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>[]
          }
          delete: {
            args: Prisma.MatriculaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          update: {
            args: Prisma.MatriculaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          deleteMany: {
            args: Prisma.MatriculaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatriculaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MatriculaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          aggregate: {
            args: Prisma.MatriculaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatricula>
          }
          groupBy: {
            args: Prisma.MatriculaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatriculaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatriculaCountArgs<ExtArgs>
            result: $Utils.Optional<MatriculaCountAggregateOutputType> | number
          }
        }
      }
      Turma: {
        payload: Prisma.$TurmaPayload<ExtArgs>
        fields: Prisma.TurmaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TurmaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TurmaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          findFirst: {
            args: Prisma.TurmaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TurmaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          findMany: {
            args: Prisma.TurmaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>[]
          }
          create: {
            args: Prisma.TurmaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          createMany: {
            args: Prisma.TurmaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TurmaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>[]
          }
          delete: {
            args: Prisma.TurmaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          update: {
            args: Prisma.TurmaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          deleteMany: {
            args: Prisma.TurmaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TurmaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TurmaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          aggregate: {
            args: Prisma.TurmaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTurma>
          }
          groupBy: {
            args: Prisma.TurmaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TurmaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TurmaCountArgs<ExtArgs>
            result: $Utils.Optional<TurmaCountAggregateOutputType> | number
          }
        }
      }
      Chamada: {
        payload: Prisma.$ChamadaPayload<ExtArgs>
        fields: Prisma.ChamadaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChamadaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChamadaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadaPayload>
          }
          findFirst: {
            args: Prisma.ChamadaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChamadaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadaPayload>
          }
          findMany: {
            args: Prisma.ChamadaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadaPayload>[]
          }
          create: {
            args: Prisma.ChamadaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadaPayload>
          }
          createMany: {
            args: Prisma.ChamadaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChamadaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadaPayload>[]
          }
          delete: {
            args: Prisma.ChamadaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadaPayload>
          }
          update: {
            args: Prisma.ChamadaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadaPayload>
          }
          deleteMany: {
            args: Prisma.ChamadaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChamadaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChamadaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadaPayload>
          }
          aggregate: {
            args: Prisma.ChamadaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChamada>
          }
          groupBy: {
            args: Prisma.ChamadaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChamadaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChamadaCountArgs<ExtArgs>
            result: $Utils.Optional<ChamadaCountAggregateOutputType> | number
          }
        }
      }
      AtividadeSala: {
        payload: Prisma.$AtividadeSalaPayload<ExtArgs>
        fields: Prisma.AtividadeSalaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtividadeSalaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeSalaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtividadeSalaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeSalaPayload>
          }
          findFirst: {
            args: Prisma.AtividadeSalaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeSalaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtividadeSalaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeSalaPayload>
          }
          findMany: {
            args: Prisma.AtividadeSalaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeSalaPayload>[]
          }
          create: {
            args: Prisma.AtividadeSalaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeSalaPayload>
          }
          createMany: {
            args: Prisma.AtividadeSalaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AtividadeSalaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeSalaPayload>[]
          }
          delete: {
            args: Prisma.AtividadeSalaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeSalaPayload>
          }
          update: {
            args: Prisma.AtividadeSalaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeSalaPayload>
          }
          deleteMany: {
            args: Prisma.AtividadeSalaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtividadeSalaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AtividadeSalaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeSalaPayload>
          }
          aggregate: {
            args: Prisma.AtividadeSalaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtividadeSala>
          }
          groupBy: {
            args: Prisma.AtividadeSalaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtividadeSalaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtividadeSalaCountArgs<ExtArgs>
            result: $Utils.Optional<AtividadeSalaCountAggregateOutputType> | number
          }
        }
      }
      AtividadeExtraSala: {
        payload: Prisma.$AtividadeExtraSalaPayload<ExtArgs>
        fields: Prisma.AtividadeExtraSalaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtividadeExtraSalaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeExtraSalaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtividadeExtraSalaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeExtraSalaPayload>
          }
          findFirst: {
            args: Prisma.AtividadeExtraSalaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeExtraSalaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtividadeExtraSalaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeExtraSalaPayload>
          }
          findMany: {
            args: Prisma.AtividadeExtraSalaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeExtraSalaPayload>[]
          }
          create: {
            args: Prisma.AtividadeExtraSalaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeExtraSalaPayload>
          }
          createMany: {
            args: Prisma.AtividadeExtraSalaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AtividadeExtraSalaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeExtraSalaPayload>[]
          }
          delete: {
            args: Prisma.AtividadeExtraSalaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeExtraSalaPayload>
          }
          update: {
            args: Prisma.AtividadeExtraSalaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeExtraSalaPayload>
          }
          deleteMany: {
            args: Prisma.AtividadeExtraSalaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtividadeExtraSalaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AtividadeExtraSalaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeExtraSalaPayload>
          }
          aggregate: {
            args: Prisma.AtividadeExtraSalaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtividadeExtraSala>
          }
          groupBy: {
            args: Prisma.AtividadeExtraSalaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtividadeExtraSalaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtividadeExtraSalaCountArgs<ExtArgs>
            result: $Utils.Optional<AtividadeExtraSalaCountAggregateOutputType> | number
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
   * Count Type ProfessorCountOutputType
   */

  export type ProfessorCountOutputType = {
    disciplina: number
  }

  export type ProfessorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplina?: boolean | ProfessorCountOutputTypeCountDisciplinaArgs
  }

  // Custom InputTypes
  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCountOutputType
     */
    select?: ProfessorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeCountDisciplinaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplinasWhereInput
  }


  /**
   * Count Type DisciplinasCountOutputType
   */

  export type DisciplinasCountOutputType = {
    Turma: number
  }

  export type DisciplinasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Turma?: boolean | DisciplinasCountOutputTypeCountTurmaArgs
  }

  // Custom InputTypes
  /**
   * DisciplinasCountOutputType without action
   */
  export type DisciplinasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplinasCountOutputType
     */
    select?: DisciplinasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DisciplinasCountOutputType without action
   */
  export type DisciplinasCountOutputTypeCountTurmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurmaWhereInput
  }


  /**
   * Count Type CursosCountOutputType
   */

  export type CursosCountOutputType = {
    Turma: number
  }

  export type CursosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Turma?: boolean | CursosCountOutputTypeCountTurmaArgs
  }

  // Custom InputTypes
  /**
   * CursosCountOutputType without action
   */
  export type CursosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CursosCountOutputType
     */
    select?: CursosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CursosCountOutputType without action
   */
  export type CursosCountOutputTypeCountTurmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurmaWhereInput
  }


  /**
   * Count Type AlunoCountOutputType
   */

  export type AlunoCountOutputType = {
    faltaDisciplinar: number
    Matricula: number
  }

  export type AlunoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faltaDisciplinar?: boolean | AlunoCountOutputTypeCountFaltaDisciplinarArgs
    Matricula?: boolean | AlunoCountOutputTypeCountMatriculaArgs
  }

  // Custom InputTypes
  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoCountOutputType
     */
    select?: AlunoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeCountFaltaDisciplinarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaltasDisciplinaresWhereInput
  }

  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeCountMatriculaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatriculaWhereInput
  }


  /**
   * Count Type MatriculaCountOutputType
   */

  export type MatriculaCountOutputType = {
    Turma: number
  }

  export type MatriculaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Turma?: boolean | MatriculaCountOutputTypeCountTurmaArgs
  }

  // Custom InputTypes
  /**
   * MatriculaCountOutputType without action
   */
  export type MatriculaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatriculaCountOutputType
     */
    select?: MatriculaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatriculaCountOutputType without action
   */
  export type MatriculaCountOutputTypeCountTurmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurmaWhereInput
  }


  /**
   * Count Type TurmaCountOutputType
   */

  export type TurmaCountOutputType = {
    Chamada: number
  }

  export type TurmaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chamada?: boolean | TurmaCountOutputTypeCountChamadaArgs
  }

  // Custom InputTypes
  /**
   * TurmaCountOutputType without action
   */
  export type TurmaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurmaCountOutputType
     */
    select?: TurmaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TurmaCountOutputType without action
   */
  export type TurmaCountOutputTypeCountChamadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChamadaWhereInput
  }


  /**
   * Count Type AtividadeSalaCountOutputType
   */

  export type AtividadeSalaCountOutputType = {
    Chamada: number
  }

  export type AtividadeSalaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chamada?: boolean | AtividadeSalaCountOutputTypeCountChamadaArgs
  }

  // Custom InputTypes
  /**
   * AtividadeSalaCountOutputType without action
   */
  export type AtividadeSalaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeSalaCountOutputType
     */
    select?: AtividadeSalaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AtividadeSalaCountOutputType without action
   */
  export type AtividadeSalaCountOutputTypeCountChamadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChamadaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Professor
   */

  export type AggregateProfessor = {
    _count: ProfessorCountAggregateOutputType | null
    _avg: ProfessorAvgAggregateOutputType | null
    _sum: ProfessorSumAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  export type ProfessorAvgAggregateOutputType = {
    id: number | null
  }

  export type ProfessorSumAggregateOutputType = {
    id: number | null
  }

  export type ProfessorMinAggregateOutputType = {
    id: number | null
    name: string | null
    telefone: string | null
    email: string | null
    genero: string | null
    nascimento: string | null
    rua: string | null
    numero: string | null
    complemento: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
    curso: string | null
    instituicao: string | null
    anoConclusao: string | null
    nivelFormacao: string | null
  }

  export type ProfessorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    telefone: string | null
    email: string | null
    genero: string | null
    nascimento: string | null
    rua: string | null
    numero: string | null
    complemento: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
    curso: string | null
    instituicao: string | null
    anoConclusao: string | null
    nivelFormacao: string | null
  }

  export type ProfessorCountAggregateOutputType = {
    id: number
    name: number
    telefone: number
    email: number
    genero: number
    nascimento: number
    rua: number
    numero: number
    complemento: number
    bairro: number
    cidade: number
    estado: number
    curso: number
    instituicao: number
    anoConclusao: number
    nivelFormacao: number
    _all: number
  }


  export type ProfessorAvgAggregateInputType = {
    id?: true
  }

  export type ProfessorSumAggregateInputType = {
    id?: true
  }

  export type ProfessorMinAggregateInputType = {
    id?: true
    name?: true
    telefone?: true
    email?: true
    genero?: true
    nascimento?: true
    rua?: true
    numero?: true
    complemento?: true
    bairro?: true
    cidade?: true
    estado?: true
    curso?: true
    instituicao?: true
    anoConclusao?: true
    nivelFormacao?: true
  }

  export type ProfessorMaxAggregateInputType = {
    id?: true
    name?: true
    telefone?: true
    email?: true
    genero?: true
    nascimento?: true
    rua?: true
    numero?: true
    complemento?: true
    bairro?: true
    cidade?: true
    estado?: true
    curso?: true
    instituicao?: true
    anoConclusao?: true
    nivelFormacao?: true
  }

  export type ProfessorCountAggregateInputType = {
    id?: true
    name?: true
    telefone?: true
    email?: true
    genero?: true
    nascimento?: true
    rua?: true
    numero?: true
    complemento?: true
    bairro?: true
    cidade?: true
    estado?: true
    curso?: true
    instituicao?: true
    anoConclusao?: true
    nivelFormacao?: true
    _all?: true
  }

  export type ProfessorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professor to aggregate.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professors
    **/
    _count?: true | ProfessorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessorMaxAggregateInputType
  }

  export type GetProfessorAggregateType<T extends ProfessorAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessor[P]>
      : GetScalarType<T[P], AggregateProfessor[P]>
  }




  export type ProfessorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessorWhereInput
    orderBy?: ProfessorOrderByWithAggregationInput | ProfessorOrderByWithAggregationInput[]
    by: ProfessorScalarFieldEnum[] | ProfessorScalarFieldEnum
    having?: ProfessorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessorCountAggregateInputType | true
    _avg?: ProfessorAvgAggregateInputType
    _sum?: ProfessorSumAggregateInputType
    _min?: ProfessorMinAggregateInputType
    _max?: ProfessorMaxAggregateInputType
  }

  export type ProfessorGroupByOutputType = {
    id: number
    name: string
    telefone: string
    email: string
    genero: string
    nascimento: string
    rua: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    estado: string
    curso: string
    instituicao: string
    anoConclusao: string
    nivelFormacao: string
    _count: ProfessorCountAggregateOutputType | null
    _avg: ProfessorAvgAggregateOutputType | null
    _sum: ProfessorSumAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  type GetProfessorGroupByPayload<T extends ProfessorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
        }
      >
    >


  export type ProfessorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    telefone?: boolean
    email?: boolean
    genero?: boolean
    nascimento?: boolean
    rua?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    curso?: boolean
    instituicao?: boolean
    anoConclusao?: boolean
    nivelFormacao?: boolean
    disciplina?: boolean | Professor$disciplinaArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    telefone?: boolean
    email?: boolean
    genero?: boolean
    nascimento?: boolean
    rua?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    curso?: boolean
    instituicao?: boolean
    anoConclusao?: boolean
    nivelFormacao?: boolean
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectScalar = {
    id?: boolean
    name?: boolean
    telefone?: boolean
    email?: boolean
    genero?: boolean
    nascimento?: boolean
    rua?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    curso?: boolean
    instituicao?: boolean
    anoConclusao?: boolean
    nivelFormacao?: boolean
  }

  export type ProfessorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplina?: boolean | Professor$disciplinaArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfessorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfessorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Professor"
    objects: {
      disciplina: Prisma.$DisciplinasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      telefone: string
      email: string
      genero: string
      nascimento: string
      rua: string
      numero: string
      complemento: string
      bairro: string
      cidade: string
      estado: string
      curso: string
      instituicao: string
      anoConclusao: string
      nivelFormacao: string
    }, ExtArgs["result"]["professor"]>
    composites: {}
  }

  type ProfessorGetPayload<S extends boolean | null | undefined | ProfessorDefaultArgs> = $Result.GetResult<Prisma.$ProfessorPayload, S>

  type ProfessorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProfessorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProfessorCountAggregateInputType | true
    }

  export interface ProfessorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Professor'], meta: { name: 'Professor' } }
    /**
     * Find zero or one Professor that matches the filter.
     * @param {ProfessorFindUniqueArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessorFindUniqueArgs>(args: SelectSubset<T, ProfessorFindUniqueArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Professor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProfessorFindUniqueOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Professor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessorFindFirstArgs>(args?: SelectSubset<T, ProfessorFindFirstArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Professor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Professors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professors
     * const professors = await prisma.professor.findMany()
     * 
     * // Get first 10 Professors
     * const professors = await prisma.professor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professorWithIdOnly = await prisma.professor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfessorFindManyArgs>(args?: SelectSubset<T, ProfessorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Professor.
     * @param {ProfessorCreateArgs} args - Arguments to create a Professor.
     * @example
     * // Create one Professor
     * const Professor = await prisma.professor.create({
     *   data: {
     *     // ... data to create a Professor
     *   }
     * })
     * 
     */
    create<T extends ProfessorCreateArgs>(args: SelectSubset<T, ProfessorCreateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Professors.
     * @param {ProfessorCreateManyArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessorCreateManyArgs>(args?: SelectSubset<T, ProfessorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Professors and returns the data saved in the database.
     * @param {ProfessorCreateManyAndReturnArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Professors and only return the `id`
     * const professorWithIdOnly = await prisma.professor.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessorCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Professor.
     * @param {ProfessorDeleteArgs} args - Arguments to delete one Professor.
     * @example
     * // Delete one Professor
     * const Professor = await prisma.professor.delete({
     *   where: {
     *     // ... filter to delete one Professor
     *   }
     * })
     * 
     */
    delete<T extends ProfessorDeleteArgs>(args: SelectSubset<T, ProfessorDeleteArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Professor.
     * @param {ProfessorUpdateArgs} args - Arguments to update one Professor.
     * @example
     * // Update one Professor
     * const professor = await prisma.professor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessorUpdateArgs>(args: SelectSubset<T, ProfessorUpdateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Professors.
     * @param {ProfessorDeleteManyArgs} args - Arguments to filter Professors to delete.
     * @example
     * // Delete a few Professors
     * const { count } = await prisma.professor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessorDeleteManyArgs>(args?: SelectSubset<T, ProfessorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessorUpdateManyArgs>(args: SelectSubset<T, ProfessorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Professor.
     * @param {ProfessorUpsertArgs} args - Arguments to update or create a Professor.
     * @example
     * // Update or create a Professor
     * const professor = await prisma.professor.upsert({
     *   create: {
     *     // ... data to create a Professor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professor we want to update
     *   }
     * })
     */
    upsert<T extends ProfessorUpsertArgs>(args: SelectSubset<T, ProfessorUpsertArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorCountArgs} args - Arguments to filter Professors to count.
     * @example
     * // Count the number of Professors
     * const count = await prisma.professor.count({
     *   where: {
     *     // ... the filter for the Professors we want to count
     *   }
     * })
    **/
    count<T extends ProfessorCountArgs>(
      args?: Subset<T, ProfessorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfessorAggregateArgs>(args: Subset<T, ProfessorAggregateArgs>): Prisma.PrismaPromise<GetProfessorAggregateType<T>>

    /**
     * Group by Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorGroupByArgs} args - Group by arguments.
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
      T extends ProfessorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessorGroupByArgs['orderBy'] }
        : { orderBy?: ProfessorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfessorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Professor model
   */
  readonly fields: ProfessorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Professor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    disciplina<T extends Professor$disciplinaArgs<ExtArgs> = {}>(args?: Subset<T, Professor$disciplinaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinasPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Professor model
   */ 
  interface ProfessorFieldRefs {
    readonly id: FieldRef<"Professor", 'Int'>
    readonly name: FieldRef<"Professor", 'String'>
    readonly telefone: FieldRef<"Professor", 'String'>
    readonly email: FieldRef<"Professor", 'String'>
    readonly genero: FieldRef<"Professor", 'String'>
    readonly nascimento: FieldRef<"Professor", 'String'>
    readonly rua: FieldRef<"Professor", 'String'>
    readonly numero: FieldRef<"Professor", 'String'>
    readonly complemento: FieldRef<"Professor", 'String'>
    readonly bairro: FieldRef<"Professor", 'String'>
    readonly cidade: FieldRef<"Professor", 'String'>
    readonly estado: FieldRef<"Professor", 'String'>
    readonly curso: FieldRef<"Professor", 'String'>
    readonly instituicao: FieldRef<"Professor", 'String'>
    readonly anoConclusao: FieldRef<"Professor", 'String'>
    readonly nivelFormacao: FieldRef<"Professor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Professor findUnique
   */
  export type ProfessorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findUniqueOrThrow
   */
  export type ProfessorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findFirst
   */
  export type ProfessorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findFirstOrThrow
   */
  export type ProfessorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findMany
   */
  export type ProfessorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professors to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor create
   */
  export type ProfessorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The data needed to create a Professor.
     */
    data: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
  }

  /**
   * Professor createMany
   */
  export type ProfessorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Professors.
     */
    data: ProfessorCreateManyInput | ProfessorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Professor createManyAndReturn
   */
  export type ProfessorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Professors.
     */
    data: ProfessorCreateManyInput | ProfessorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Professor update
   */
  export type ProfessorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The data needed to update a Professor.
     */
    data: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
    /**
     * Choose, which Professor to update.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor updateMany
   */
  export type ProfessorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professors.
     */
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyInput>
    /**
     * Filter which Professors to update
     */
    where?: ProfessorWhereInput
  }

  /**
   * Professor upsert
   */
  export type ProfessorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The filter to search for the Professor to update in case it exists.
     */
    where: ProfessorWhereUniqueInput
    /**
     * In case the Professor found by the `where` argument doesn't exist, create a new Professor with this data.
     */
    create: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
    /**
     * In case the Professor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
  }

  /**
   * Professor delete
   */
  export type ProfessorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter which Professor to delete.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor deleteMany
   */
  export type ProfessorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professors to delete
     */
    where?: ProfessorWhereInput
  }

  /**
   * Professor.disciplina
   */
  export type Professor$disciplinaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplinas
     */
    select?: DisciplinasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinasInclude<ExtArgs> | null
    where?: DisciplinasWhereInput
    orderBy?: DisciplinasOrderByWithRelationInput | DisciplinasOrderByWithRelationInput[]
    cursor?: DisciplinasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisciplinasScalarFieldEnum | DisciplinasScalarFieldEnum[]
  }

  /**
   * Professor without action
   */
  export type ProfessorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
  }


  /**
   * Model Disciplinas
   */

  export type AggregateDisciplinas = {
    _count: DisciplinasCountAggregateOutputType | null
    _avg: DisciplinasAvgAggregateOutputType | null
    _sum: DisciplinasSumAggregateOutputType | null
    _min: DisciplinasMinAggregateOutputType | null
    _max: DisciplinasMaxAggregateOutputType | null
  }

  export type DisciplinasAvgAggregateOutputType = {
    id: number | null
    idProfessor: number | null
  }

  export type DisciplinasSumAggregateOutputType = {
    id: number | null
    idProfessor: number | null
  }

  export type DisciplinasMinAggregateOutputType = {
    id: number | null
    idProfessor: number | null
    nomeDisciplina: string | null
  }

  export type DisciplinasMaxAggregateOutputType = {
    id: number | null
    idProfessor: number | null
    nomeDisciplina: string | null
  }

  export type DisciplinasCountAggregateOutputType = {
    id: number
    idProfessor: number
    nomeDisciplina: number
    _all: number
  }


  export type DisciplinasAvgAggregateInputType = {
    id?: true
    idProfessor?: true
  }

  export type DisciplinasSumAggregateInputType = {
    id?: true
    idProfessor?: true
  }

  export type DisciplinasMinAggregateInputType = {
    id?: true
    idProfessor?: true
    nomeDisciplina?: true
  }

  export type DisciplinasMaxAggregateInputType = {
    id?: true
    idProfessor?: true
    nomeDisciplina?: true
  }

  export type DisciplinasCountAggregateInputType = {
    id?: true
    idProfessor?: true
    nomeDisciplina?: true
    _all?: true
  }

  export type DisciplinasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disciplinas to aggregate.
     */
    where?: DisciplinasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinasOrderByWithRelationInput | DisciplinasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisciplinasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disciplinas
    **/
    _count?: true | DisciplinasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisciplinasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisciplinasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisciplinasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisciplinasMaxAggregateInputType
  }

  export type GetDisciplinasAggregateType<T extends DisciplinasAggregateArgs> = {
        [P in keyof T & keyof AggregateDisciplinas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisciplinas[P]>
      : GetScalarType<T[P], AggregateDisciplinas[P]>
  }




  export type DisciplinasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplinasWhereInput
    orderBy?: DisciplinasOrderByWithAggregationInput | DisciplinasOrderByWithAggregationInput[]
    by: DisciplinasScalarFieldEnum[] | DisciplinasScalarFieldEnum
    having?: DisciplinasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisciplinasCountAggregateInputType | true
    _avg?: DisciplinasAvgAggregateInputType
    _sum?: DisciplinasSumAggregateInputType
    _min?: DisciplinasMinAggregateInputType
    _max?: DisciplinasMaxAggregateInputType
  }

  export type DisciplinasGroupByOutputType = {
    id: number
    idProfessor: number
    nomeDisciplina: string
    _count: DisciplinasCountAggregateOutputType | null
    _avg: DisciplinasAvgAggregateOutputType | null
    _sum: DisciplinasSumAggregateOutputType | null
    _min: DisciplinasMinAggregateOutputType | null
    _max: DisciplinasMaxAggregateOutputType | null
  }

  type GetDisciplinasGroupByPayload<T extends DisciplinasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisciplinasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisciplinasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisciplinasGroupByOutputType[P]>
            : GetScalarType<T[P], DisciplinasGroupByOutputType[P]>
        }
      >
    >


  export type DisciplinasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idProfessor?: boolean
    nomeDisciplina?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    Turma?: boolean | Disciplinas$TurmaArgs<ExtArgs>
    _count?: boolean | DisciplinasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplinas"]>

  export type DisciplinasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idProfessor?: boolean
    nomeDisciplina?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplinas"]>

  export type DisciplinasSelectScalar = {
    id?: boolean
    idProfessor?: boolean
    nomeDisciplina?: boolean
  }

  export type DisciplinasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    Turma?: boolean | Disciplinas$TurmaArgs<ExtArgs>
    _count?: boolean | DisciplinasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DisciplinasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }

  export type $DisciplinasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disciplinas"
    objects: {
      professor: Prisma.$ProfessorPayload<ExtArgs>
      Turma: Prisma.$TurmaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idProfessor: number
      nomeDisciplina: string
    }, ExtArgs["result"]["disciplinas"]>
    composites: {}
  }

  type DisciplinasGetPayload<S extends boolean | null | undefined | DisciplinasDefaultArgs> = $Result.GetResult<Prisma.$DisciplinasPayload, S>

  type DisciplinasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DisciplinasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DisciplinasCountAggregateInputType | true
    }

  export interface DisciplinasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disciplinas'], meta: { name: 'Disciplinas' } }
    /**
     * Find zero or one Disciplinas that matches the filter.
     * @param {DisciplinasFindUniqueArgs} args - Arguments to find a Disciplinas
     * @example
     * // Get one Disciplinas
     * const disciplinas = await prisma.disciplinas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisciplinasFindUniqueArgs>(args: SelectSubset<T, DisciplinasFindUniqueArgs<ExtArgs>>): Prisma__DisciplinasClient<$Result.GetResult<Prisma.$DisciplinasPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Disciplinas that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DisciplinasFindUniqueOrThrowArgs} args - Arguments to find a Disciplinas
     * @example
     * // Get one Disciplinas
     * const disciplinas = await prisma.disciplinas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisciplinasFindUniqueOrThrowArgs>(args: SelectSubset<T, DisciplinasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisciplinasClient<$Result.GetResult<Prisma.$DisciplinasPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Disciplinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinasFindFirstArgs} args - Arguments to find a Disciplinas
     * @example
     * // Get one Disciplinas
     * const disciplinas = await prisma.disciplinas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisciplinasFindFirstArgs>(args?: SelectSubset<T, DisciplinasFindFirstArgs<ExtArgs>>): Prisma__DisciplinasClient<$Result.GetResult<Prisma.$DisciplinasPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Disciplinas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinasFindFirstOrThrowArgs} args - Arguments to find a Disciplinas
     * @example
     * // Get one Disciplinas
     * const disciplinas = await prisma.disciplinas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisciplinasFindFirstOrThrowArgs>(args?: SelectSubset<T, DisciplinasFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisciplinasClient<$Result.GetResult<Prisma.$DisciplinasPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Disciplinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disciplinas
     * const disciplinas = await prisma.disciplinas.findMany()
     * 
     * // Get first 10 Disciplinas
     * const disciplinas = await prisma.disciplinas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disciplinasWithIdOnly = await prisma.disciplinas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisciplinasFindManyArgs>(args?: SelectSubset<T, DisciplinasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinasPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Disciplinas.
     * @param {DisciplinasCreateArgs} args - Arguments to create a Disciplinas.
     * @example
     * // Create one Disciplinas
     * const Disciplinas = await prisma.disciplinas.create({
     *   data: {
     *     // ... data to create a Disciplinas
     *   }
     * })
     * 
     */
    create<T extends DisciplinasCreateArgs>(args: SelectSubset<T, DisciplinasCreateArgs<ExtArgs>>): Prisma__DisciplinasClient<$Result.GetResult<Prisma.$DisciplinasPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Disciplinas.
     * @param {DisciplinasCreateManyArgs} args - Arguments to create many Disciplinas.
     * @example
     * // Create many Disciplinas
     * const disciplinas = await prisma.disciplinas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisciplinasCreateManyArgs>(args?: SelectSubset<T, DisciplinasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Disciplinas and returns the data saved in the database.
     * @param {DisciplinasCreateManyAndReturnArgs} args - Arguments to create many Disciplinas.
     * @example
     * // Create many Disciplinas
     * const disciplinas = await prisma.disciplinas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Disciplinas and only return the `id`
     * const disciplinasWithIdOnly = await prisma.disciplinas.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisciplinasCreateManyAndReturnArgs>(args?: SelectSubset<T, DisciplinasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinasPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Disciplinas.
     * @param {DisciplinasDeleteArgs} args - Arguments to delete one Disciplinas.
     * @example
     * // Delete one Disciplinas
     * const Disciplinas = await prisma.disciplinas.delete({
     *   where: {
     *     // ... filter to delete one Disciplinas
     *   }
     * })
     * 
     */
    delete<T extends DisciplinasDeleteArgs>(args: SelectSubset<T, DisciplinasDeleteArgs<ExtArgs>>): Prisma__DisciplinasClient<$Result.GetResult<Prisma.$DisciplinasPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Disciplinas.
     * @param {DisciplinasUpdateArgs} args - Arguments to update one Disciplinas.
     * @example
     * // Update one Disciplinas
     * const disciplinas = await prisma.disciplinas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisciplinasUpdateArgs>(args: SelectSubset<T, DisciplinasUpdateArgs<ExtArgs>>): Prisma__DisciplinasClient<$Result.GetResult<Prisma.$DisciplinasPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Disciplinas.
     * @param {DisciplinasDeleteManyArgs} args - Arguments to filter Disciplinas to delete.
     * @example
     * // Delete a few Disciplinas
     * const { count } = await prisma.disciplinas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisciplinasDeleteManyArgs>(args?: SelectSubset<T, DisciplinasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disciplinas
     * const disciplinas = await prisma.disciplinas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisciplinasUpdateManyArgs>(args: SelectSubset<T, DisciplinasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Disciplinas.
     * @param {DisciplinasUpsertArgs} args - Arguments to update or create a Disciplinas.
     * @example
     * // Update or create a Disciplinas
     * const disciplinas = await prisma.disciplinas.upsert({
     *   create: {
     *     // ... data to create a Disciplinas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disciplinas we want to update
     *   }
     * })
     */
    upsert<T extends DisciplinasUpsertArgs>(args: SelectSubset<T, DisciplinasUpsertArgs<ExtArgs>>): Prisma__DisciplinasClient<$Result.GetResult<Prisma.$DisciplinasPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinasCountArgs} args - Arguments to filter Disciplinas to count.
     * @example
     * // Count the number of Disciplinas
     * const count = await prisma.disciplinas.count({
     *   where: {
     *     // ... the filter for the Disciplinas we want to count
     *   }
     * })
    **/
    count<T extends DisciplinasCountArgs>(
      args?: Subset<T, DisciplinasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisciplinasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DisciplinasAggregateArgs>(args: Subset<T, DisciplinasAggregateArgs>): Prisma.PrismaPromise<GetDisciplinasAggregateType<T>>

    /**
     * Group by Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinasGroupByArgs} args - Group by arguments.
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
      T extends DisciplinasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisciplinasGroupByArgs['orderBy'] }
        : { orderBy?: DisciplinasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DisciplinasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplinasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disciplinas model
   */
  readonly fields: DisciplinasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disciplinas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisciplinasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professor<T extends ProfessorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessorDefaultArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Turma<T extends Disciplinas$TurmaArgs<ExtArgs> = {}>(args?: Subset<T, Disciplinas$TurmaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Disciplinas model
   */ 
  interface DisciplinasFieldRefs {
    readonly id: FieldRef<"Disciplinas", 'Int'>
    readonly idProfessor: FieldRef<"Disciplinas", 'Int'>
    readonly nomeDisciplina: FieldRef<"Disciplinas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Disciplinas findUnique
   */
  export type DisciplinasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplinas
     */
    select?: DisciplinasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinasInclude<ExtArgs> | null
    /**
     * Filter, which Disciplinas to fetch.
     */
    where: DisciplinasWhereUniqueInput
  }

  /**
   * Disciplinas findUniqueOrThrow
   */
  export type DisciplinasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplinas
     */
    select?: DisciplinasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinasInclude<ExtArgs> | null
    /**
     * Filter, which Disciplinas to fetch.
     */
    where: DisciplinasWhereUniqueInput
  }

  /**
   * Disciplinas findFirst
   */
  export type DisciplinasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplinas
     */
    select?: DisciplinasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinasInclude<ExtArgs> | null
    /**
     * Filter, which Disciplinas to fetch.
     */
    where?: DisciplinasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinasOrderByWithRelationInput | DisciplinasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disciplinas.
     */
    cursor?: DisciplinasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplinas.
     */
    distinct?: DisciplinasScalarFieldEnum | DisciplinasScalarFieldEnum[]
  }

  /**
   * Disciplinas findFirstOrThrow
   */
  export type DisciplinasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplinas
     */
    select?: DisciplinasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinasInclude<ExtArgs> | null
    /**
     * Filter, which Disciplinas to fetch.
     */
    where?: DisciplinasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinasOrderByWithRelationInput | DisciplinasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disciplinas.
     */
    cursor?: DisciplinasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplinas.
     */
    distinct?: DisciplinasScalarFieldEnum | DisciplinasScalarFieldEnum[]
  }

  /**
   * Disciplinas findMany
   */
  export type DisciplinasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplinas
     */
    select?: DisciplinasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinasInclude<ExtArgs> | null
    /**
     * Filter, which Disciplinas to fetch.
     */
    where?: DisciplinasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinasOrderByWithRelationInput | DisciplinasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disciplinas.
     */
    cursor?: DisciplinasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    distinct?: DisciplinasScalarFieldEnum | DisciplinasScalarFieldEnum[]
  }

  /**
   * Disciplinas create
   */
  export type DisciplinasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplinas
     */
    select?: DisciplinasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinasInclude<ExtArgs> | null
    /**
     * The data needed to create a Disciplinas.
     */
    data: XOR<DisciplinasCreateInput, DisciplinasUncheckedCreateInput>
  }

  /**
   * Disciplinas createMany
   */
  export type DisciplinasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disciplinas.
     */
    data: DisciplinasCreateManyInput | DisciplinasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disciplinas createManyAndReturn
   */
  export type DisciplinasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplinas
     */
    select?: DisciplinasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Disciplinas.
     */
    data: DisciplinasCreateManyInput | DisciplinasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Disciplinas update
   */
  export type DisciplinasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplinas
     */
    select?: DisciplinasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinasInclude<ExtArgs> | null
    /**
     * The data needed to update a Disciplinas.
     */
    data: XOR<DisciplinasUpdateInput, DisciplinasUncheckedUpdateInput>
    /**
     * Choose, which Disciplinas to update.
     */
    where: DisciplinasWhereUniqueInput
  }

  /**
   * Disciplinas updateMany
   */
  export type DisciplinasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disciplinas.
     */
    data: XOR<DisciplinasUpdateManyMutationInput, DisciplinasUncheckedUpdateManyInput>
    /**
     * Filter which Disciplinas to update
     */
    where?: DisciplinasWhereInput
  }

  /**
   * Disciplinas upsert
   */
  export type DisciplinasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplinas
     */
    select?: DisciplinasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinasInclude<ExtArgs> | null
    /**
     * The filter to search for the Disciplinas to update in case it exists.
     */
    where: DisciplinasWhereUniqueInput
    /**
     * In case the Disciplinas found by the `where` argument doesn't exist, create a new Disciplinas with this data.
     */
    create: XOR<DisciplinasCreateInput, DisciplinasUncheckedCreateInput>
    /**
     * In case the Disciplinas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisciplinasUpdateInput, DisciplinasUncheckedUpdateInput>
  }

  /**
   * Disciplinas delete
   */
  export type DisciplinasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplinas
     */
    select?: DisciplinasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinasInclude<ExtArgs> | null
    /**
     * Filter which Disciplinas to delete.
     */
    where: DisciplinasWhereUniqueInput
  }

  /**
   * Disciplinas deleteMany
   */
  export type DisciplinasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disciplinas to delete
     */
    where?: DisciplinasWhereInput
  }

  /**
   * Disciplinas.Turma
   */
  export type Disciplinas$TurmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    where?: TurmaWhereInput
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    cursor?: TurmaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Disciplinas without action
   */
  export type DisciplinasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplinas
     */
    select?: DisciplinasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinasInclude<ExtArgs> | null
  }


  /**
   * Model Cursos
   */

  export type AggregateCursos = {
    _count: CursosCountAggregateOutputType | null
    _avg: CursosAvgAggregateOutputType | null
    _sum: CursosSumAggregateOutputType | null
    _min: CursosMinAggregateOutputType | null
    _max: CursosMaxAggregateOutputType | null
  }

  export type CursosAvgAggregateOutputType = {
    id: number | null
  }

  export type CursosSumAggregateOutputType = {
    id: number | null
  }

  export type CursosMinAggregateOutputType = {
    id: number | null
    nomeCurso: string | null
  }

  export type CursosMaxAggregateOutputType = {
    id: number | null
    nomeCurso: string | null
  }

  export type CursosCountAggregateOutputType = {
    id: number
    nomeCurso: number
    _all: number
  }


  export type CursosAvgAggregateInputType = {
    id?: true
  }

  export type CursosSumAggregateInputType = {
    id?: true
  }

  export type CursosMinAggregateInputType = {
    id?: true
    nomeCurso?: true
  }

  export type CursosMaxAggregateInputType = {
    id?: true
    nomeCurso?: true
  }

  export type CursosCountAggregateInputType = {
    id?: true
    nomeCurso?: true
    _all?: true
  }

  export type CursosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cursos to aggregate.
     */
    where?: CursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursosOrderByWithRelationInput | CursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cursos
    **/
    _count?: true | CursosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CursosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CursosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CursosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CursosMaxAggregateInputType
  }

  export type GetCursosAggregateType<T extends CursosAggregateArgs> = {
        [P in keyof T & keyof AggregateCursos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCursos[P]>
      : GetScalarType<T[P], AggregateCursos[P]>
  }




  export type CursosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursosWhereInput
    orderBy?: CursosOrderByWithAggregationInput | CursosOrderByWithAggregationInput[]
    by: CursosScalarFieldEnum[] | CursosScalarFieldEnum
    having?: CursosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CursosCountAggregateInputType | true
    _avg?: CursosAvgAggregateInputType
    _sum?: CursosSumAggregateInputType
    _min?: CursosMinAggregateInputType
    _max?: CursosMaxAggregateInputType
  }

  export type CursosGroupByOutputType = {
    id: number
    nomeCurso: string
    _count: CursosCountAggregateOutputType | null
    _avg: CursosAvgAggregateOutputType | null
    _sum: CursosSumAggregateOutputType | null
    _min: CursosMinAggregateOutputType | null
    _max: CursosMaxAggregateOutputType | null
  }

  type GetCursosGroupByPayload<T extends CursosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CursosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CursosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CursosGroupByOutputType[P]>
            : GetScalarType<T[P], CursosGroupByOutputType[P]>
        }
      >
    >


  export type CursosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeCurso?: boolean
    Turma?: boolean | Cursos$TurmaArgs<ExtArgs>
    _count?: boolean | CursosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cursos"]>

  export type CursosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeCurso?: boolean
  }, ExtArgs["result"]["cursos"]>

  export type CursosSelectScalar = {
    id?: boolean
    nomeCurso?: boolean
  }

  export type CursosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Turma?: boolean | Cursos$TurmaArgs<ExtArgs>
    _count?: boolean | CursosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CursosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CursosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cursos"
    objects: {
      Turma: Prisma.$TurmaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nomeCurso: string
    }, ExtArgs["result"]["cursos"]>
    composites: {}
  }

  type CursosGetPayload<S extends boolean | null | undefined | CursosDefaultArgs> = $Result.GetResult<Prisma.$CursosPayload, S>

  type CursosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CursosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CursosCountAggregateInputType | true
    }

  export interface CursosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cursos'], meta: { name: 'Cursos' } }
    /**
     * Find zero or one Cursos that matches the filter.
     * @param {CursosFindUniqueArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CursosFindUniqueArgs>(args: SelectSubset<T, CursosFindUniqueArgs<ExtArgs>>): Prisma__CursosClient<$Result.GetResult<Prisma.$CursosPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cursos that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CursosFindUniqueOrThrowArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CursosFindUniqueOrThrowArgs>(args: SelectSubset<T, CursosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CursosClient<$Result.GetResult<Prisma.$CursosPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursosFindFirstArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CursosFindFirstArgs>(args?: SelectSubset<T, CursosFindFirstArgs<ExtArgs>>): Prisma__CursosClient<$Result.GetResult<Prisma.$CursosPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cursos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursosFindFirstOrThrowArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CursosFindFirstOrThrowArgs>(args?: SelectSubset<T, CursosFindFirstOrThrowArgs<ExtArgs>>): Prisma__CursosClient<$Result.GetResult<Prisma.$CursosPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cursos
     * const cursos = await prisma.cursos.findMany()
     * 
     * // Get first 10 Cursos
     * const cursos = await prisma.cursos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cursosWithIdOnly = await prisma.cursos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CursosFindManyArgs>(args?: SelectSubset<T, CursosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursosPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cursos.
     * @param {CursosCreateArgs} args - Arguments to create a Cursos.
     * @example
     * // Create one Cursos
     * const Cursos = await prisma.cursos.create({
     *   data: {
     *     // ... data to create a Cursos
     *   }
     * })
     * 
     */
    create<T extends CursosCreateArgs>(args: SelectSubset<T, CursosCreateArgs<ExtArgs>>): Prisma__CursosClient<$Result.GetResult<Prisma.$CursosPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Cursos.
     * @param {CursosCreateManyArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const cursos = await prisma.cursos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CursosCreateManyArgs>(args?: SelectSubset<T, CursosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cursos and returns the data saved in the database.
     * @param {CursosCreateManyAndReturnArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const cursos = await prisma.cursos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cursos and only return the `id`
     * const cursosWithIdOnly = await prisma.cursos.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CursosCreateManyAndReturnArgs>(args?: SelectSubset<T, CursosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursosPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Cursos.
     * @param {CursosDeleteArgs} args - Arguments to delete one Cursos.
     * @example
     * // Delete one Cursos
     * const Cursos = await prisma.cursos.delete({
     *   where: {
     *     // ... filter to delete one Cursos
     *   }
     * })
     * 
     */
    delete<T extends CursosDeleteArgs>(args: SelectSubset<T, CursosDeleteArgs<ExtArgs>>): Prisma__CursosClient<$Result.GetResult<Prisma.$CursosPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cursos.
     * @param {CursosUpdateArgs} args - Arguments to update one Cursos.
     * @example
     * // Update one Cursos
     * const cursos = await prisma.cursos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CursosUpdateArgs>(args: SelectSubset<T, CursosUpdateArgs<ExtArgs>>): Prisma__CursosClient<$Result.GetResult<Prisma.$CursosPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Cursos.
     * @param {CursosDeleteManyArgs} args - Arguments to filter Cursos to delete.
     * @example
     * // Delete a few Cursos
     * const { count } = await prisma.cursos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CursosDeleteManyArgs>(args?: SelectSubset<T, CursosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cursos
     * const cursos = await prisma.cursos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CursosUpdateManyArgs>(args: SelectSubset<T, CursosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cursos.
     * @param {CursosUpsertArgs} args - Arguments to update or create a Cursos.
     * @example
     * // Update or create a Cursos
     * const cursos = await prisma.cursos.upsert({
     *   create: {
     *     // ... data to create a Cursos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cursos we want to update
     *   }
     * })
     */
    upsert<T extends CursosUpsertArgs>(args: SelectSubset<T, CursosUpsertArgs<ExtArgs>>): Prisma__CursosClient<$Result.GetResult<Prisma.$CursosPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursosCountArgs} args - Arguments to filter Cursos to count.
     * @example
     * // Count the number of Cursos
     * const count = await prisma.cursos.count({
     *   where: {
     *     // ... the filter for the Cursos we want to count
     *   }
     * })
    **/
    count<T extends CursosCountArgs>(
      args?: Subset<T, CursosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CursosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CursosAggregateArgs>(args: Subset<T, CursosAggregateArgs>): Prisma.PrismaPromise<GetCursosAggregateType<T>>

    /**
     * Group by Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursosGroupByArgs} args - Group by arguments.
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
      T extends CursosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CursosGroupByArgs['orderBy'] }
        : { orderBy?: CursosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CursosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cursos model
   */
  readonly fields: CursosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cursos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CursosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Turma<T extends Cursos$TurmaArgs<ExtArgs> = {}>(args?: Subset<T, Cursos$TurmaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Cursos model
   */ 
  interface CursosFieldRefs {
    readonly id: FieldRef<"Cursos", 'Int'>
    readonly nomeCurso: FieldRef<"Cursos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cursos findUnique
   */
  export type CursosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursos
     */
    select?: CursosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursosInclude<ExtArgs> | null
    /**
     * Filter, which Cursos to fetch.
     */
    where: CursosWhereUniqueInput
  }

  /**
   * Cursos findUniqueOrThrow
   */
  export type CursosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursos
     */
    select?: CursosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursosInclude<ExtArgs> | null
    /**
     * Filter, which Cursos to fetch.
     */
    where: CursosWhereUniqueInput
  }

  /**
   * Cursos findFirst
   */
  export type CursosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursos
     */
    select?: CursosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursosInclude<ExtArgs> | null
    /**
     * Filter, which Cursos to fetch.
     */
    where?: CursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursosOrderByWithRelationInput | CursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursosScalarFieldEnum | CursosScalarFieldEnum[]
  }

  /**
   * Cursos findFirstOrThrow
   */
  export type CursosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursos
     */
    select?: CursosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursosInclude<ExtArgs> | null
    /**
     * Filter, which Cursos to fetch.
     */
    where?: CursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursosOrderByWithRelationInput | CursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursosScalarFieldEnum | CursosScalarFieldEnum[]
  }

  /**
   * Cursos findMany
   */
  export type CursosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursos
     */
    select?: CursosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursosInclude<ExtArgs> | null
    /**
     * Filter, which Cursos to fetch.
     */
    where?: CursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursosOrderByWithRelationInput | CursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cursos.
     */
    cursor?: CursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    distinct?: CursosScalarFieldEnum | CursosScalarFieldEnum[]
  }

  /**
   * Cursos create
   */
  export type CursosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursos
     */
    select?: CursosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursosInclude<ExtArgs> | null
    /**
     * The data needed to create a Cursos.
     */
    data: XOR<CursosCreateInput, CursosUncheckedCreateInput>
  }

  /**
   * Cursos createMany
   */
  export type CursosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cursos.
     */
    data: CursosCreateManyInput | CursosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cursos createManyAndReturn
   */
  export type CursosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursos
     */
    select?: CursosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Cursos.
     */
    data: CursosCreateManyInput | CursosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cursos update
   */
  export type CursosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursos
     */
    select?: CursosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursosInclude<ExtArgs> | null
    /**
     * The data needed to update a Cursos.
     */
    data: XOR<CursosUpdateInput, CursosUncheckedUpdateInput>
    /**
     * Choose, which Cursos to update.
     */
    where: CursosWhereUniqueInput
  }

  /**
   * Cursos updateMany
   */
  export type CursosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cursos.
     */
    data: XOR<CursosUpdateManyMutationInput, CursosUncheckedUpdateManyInput>
    /**
     * Filter which Cursos to update
     */
    where?: CursosWhereInput
  }

  /**
   * Cursos upsert
   */
  export type CursosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursos
     */
    select?: CursosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursosInclude<ExtArgs> | null
    /**
     * The filter to search for the Cursos to update in case it exists.
     */
    where: CursosWhereUniqueInput
    /**
     * In case the Cursos found by the `where` argument doesn't exist, create a new Cursos with this data.
     */
    create: XOR<CursosCreateInput, CursosUncheckedCreateInput>
    /**
     * In case the Cursos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CursosUpdateInput, CursosUncheckedUpdateInput>
  }

  /**
   * Cursos delete
   */
  export type CursosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursos
     */
    select?: CursosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursosInclude<ExtArgs> | null
    /**
     * Filter which Cursos to delete.
     */
    where: CursosWhereUniqueInput
  }

  /**
   * Cursos deleteMany
   */
  export type CursosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cursos to delete
     */
    where?: CursosWhereInput
  }

  /**
   * Cursos.Turma
   */
  export type Cursos$TurmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    where?: TurmaWhereInput
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    cursor?: TurmaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Cursos without action
   */
  export type CursosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursos
     */
    select?: CursosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursosInclude<ExtArgs> | null
  }


  /**
   * Model Aluno
   */

  export type AggregateAluno = {
    _count: AlunoCountAggregateOutputType | null
    _avg: AlunoAvgAggregateOutputType | null
    _sum: AlunoSumAggregateOutputType | null
    _min: AlunoMinAggregateOutputType | null
    _max: AlunoMaxAggregateOutputType | null
  }

  export type AlunoAvgAggregateOutputType = {
    id: number | null
    rendaFamilia: Decimal | null
  }

  export type AlunoSumAggregateOutputType = {
    id: number | null
    rendaFamilia: Decimal | null
  }

  export type AlunoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    nascimento: Date | null
    cpf: string | null
    rg: string | null
    escola: string | null
    periodo: string | null
    serie: string | null
    telefone: string | null
    rendaFamilia: Decimal | null
  }

  export type AlunoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    nascimento: Date | null
    cpf: string | null
    rg: string | null
    escola: string | null
    periodo: string | null
    serie: string | null
    telefone: string | null
    rendaFamilia: Decimal | null
  }

  export type AlunoCountAggregateOutputType = {
    id: number
    nome: number
    nascimento: number
    cpf: number
    rg: number
    escola: number
    periodo: number
    serie: number
    telefone: number
    rendaFamilia: number
    _all: number
  }


  export type AlunoAvgAggregateInputType = {
    id?: true
    rendaFamilia?: true
  }

  export type AlunoSumAggregateInputType = {
    id?: true
    rendaFamilia?: true
  }

  export type AlunoMinAggregateInputType = {
    id?: true
    nome?: true
    nascimento?: true
    cpf?: true
    rg?: true
    escola?: true
    periodo?: true
    serie?: true
    telefone?: true
    rendaFamilia?: true
  }

  export type AlunoMaxAggregateInputType = {
    id?: true
    nome?: true
    nascimento?: true
    cpf?: true
    rg?: true
    escola?: true
    periodo?: true
    serie?: true
    telefone?: true
    rendaFamilia?: true
  }

  export type AlunoCountAggregateInputType = {
    id?: true
    nome?: true
    nascimento?: true
    cpf?: true
    rg?: true
    escola?: true
    periodo?: true
    serie?: true
    telefone?: true
    rendaFamilia?: true
    _all?: true
  }

  export type AlunoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aluno to aggregate.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alunos
    **/
    _count?: true | AlunoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlunoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlunoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlunoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlunoMaxAggregateInputType
  }

  export type GetAlunoAggregateType<T extends AlunoAggregateArgs> = {
        [P in keyof T & keyof AggregateAluno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAluno[P]>
      : GetScalarType<T[P], AggregateAluno[P]>
  }




  export type AlunoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunoWhereInput
    orderBy?: AlunoOrderByWithAggregationInput | AlunoOrderByWithAggregationInput[]
    by: AlunoScalarFieldEnum[] | AlunoScalarFieldEnum
    having?: AlunoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlunoCountAggregateInputType | true
    _avg?: AlunoAvgAggregateInputType
    _sum?: AlunoSumAggregateInputType
    _min?: AlunoMinAggregateInputType
    _max?: AlunoMaxAggregateInputType
  }

  export type AlunoGroupByOutputType = {
    id: number
    nome: string
    nascimento: Date
    cpf: string
    rg: string
    escola: string
    periodo: string
    serie: string
    telefone: string
    rendaFamilia: Decimal
    _count: AlunoCountAggregateOutputType | null
    _avg: AlunoAvgAggregateOutputType | null
    _sum: AlunoSumAggregateOutputType | null
    _min: AlunoMinAggregateOutputType | null
    _max: AlunoMaxAggregateOutputType | null
  }

  type GetAlunoGroupByPayload<T extends AlunoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlunoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlunoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlunoGroupByOutputType[P]>
            : GetScalarType<T[P], AlunoGroupByOutputType[P]>
        }
      >
    >


  export type AlunoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nascimento?: boolean
    cpf?: boolean
    rg?: boolean
    escola?: boolean
    periodo?: boolean
    serie?: boolean
    telefone?: boolean
    rendaFamilia?: boolean
    faltaDisciplinar?: boolean | Aluno$faltaDisciplinarArgs<ExtArgs>
    Matricula?: boolean | Aluno$MatriculaArgs<ExtArgs>
    _count?: boolean | AlunoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aluno"]>

  export type AlunoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nascimento?: boolean
    cpf?: boolean
    rg?: boolean
    escola?: boolean
    periodo?: boolean
    serie?: boolean
    telefone?: boolean
    rendaFamilia?: boolean
  }, ExtArgs["result"]["aluno"]>

  export type AlunoSelectScalar = {
    id?: boolean
    nome?: boolean
    nascimento?: boolean
    cpf?: boolean
    rg?: boolean
    escola?: boolean
    periodo?: boolean
    serie?: boolean
    telefone?: boolean
    rendaFamilia?: boolean
  }

  export type AlunoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faltaDisciplinar?: boolean | Aluno$faltaDisciplinarArgs<ExtArgs>
    Matricula?: boolean | Aluno$MatriculaArgs<ExtArgs>
    _count?: boolean | AlunoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlunoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AlunoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aluno"
    objects: {
      faltaDisciplinar: Prisma.$FaltasDisciplinaresPayload<ExtArgs>[]
      Matricula: Prisma.$MatriculaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      nascimento: Date
      cpf: string
      rg: string
      escola: string
      periodo: string
      serie: string
      telefone: string
      rendaFamilia: Prisma.Decimal
    }, ExtArgs["result"]["aluno"]>
    composites: {}
  }

  type AlunoGetPayload<S extends boolean | null | undefined | AlunoDefaultArgs> = $Result.GetResult<Prisma.$AlunoPayload, S>

  type AlunoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AlunoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AlunoCountAggregateInputType | true
    }

  export interface AlunoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aluno'], meta: { name: 'Aluno' } }
    /**
     * Find zero or one Aluno that matches the filter.
     * @param {AlunoFindUniqueArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlunoFindUniqueArgs>(args: SelectSubset<T, AlunoFindUniqueArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Aluno that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AlunoFindUniqueOrThrowArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlunoFindUniqueOrThrowArgs>(args: SelectSubset<T, AlunoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Aluno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindFirstArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlunoFindFirstArgs>(args?: SelectSubset<T, AlunoFindFirstArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Aluno that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindFirstOrThrowArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlunoFindFirstOrThrowArgs>(args?: SelectSubset<T, AlunoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Alunos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alunos
     * const alunos = await prisma.aluno.findMany()
     * 
     * // Get first 10 Alunos
     * const alunos = await prisma.aluno.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alunoWithIdOnly = await prisma.aluno.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlunoFindManyArgs>(args?: SelectSubset<T, AlunoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Aluno.
     * @param {AlunoCreateArgs} args - Arguments to create a Aluno.
     * @example
     * // Create one Aluno
     * const Aluno = await prisma.aluno.create({
     *   data: {
     *     // ... data to create a Aluno
     *   }
     * })
     * 
     */
    create<T extends AlunoCreateArgs>(args: SelectSubset<T, AlunoCreateArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Alunos.
     * @param {AlunoCreateManyArgs} args - Arguments to create many Alunos.
     * @example
     * // Create many Alunos
     * const aluno = await prisma.aluno.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlunoCreateManyArgs>(args?: SelectSubset<T, AlunoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alunos and returns the data saved in the database.
     * @param {AlunoCreateManyAndReturnArgs} args - Arguments to create many Alunos.
     * @example
     * // Create many Alunos
     * const aluno = await prisma.aluno.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alunos and only return the `id`
     * const alunoWithIdOnly = await prisma.aluno.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlunoCreateManyAndReturnArgs>(args?: SelectSubset<T, AlunoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Aluno.
     * @param {AlunoDeleteArgs} args - Arguments to delete one Aluno.
     * @example
     * // Delete one Aluno
     * const Aluno = await prisma.aluno.delete({
     *   where: {
     *     // ... filter to delete one Aluno
     *   }
     * })
     * 
     */
    delete<T extends AlunoDeleteArgs>(args: SelectSubset<T, AlunoDeleteArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Aluno.
     * @param {AlunoUpdateArgs} args - Arguments to update one Aluno.
     * @example
     * // Update one Aluno
     * const aluno = await prisma.aluno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlunoUpdateArgs>(args: SelectSubset<T, AlunoUpdateArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Alunos.
     * @param {AlunoDeleteManyArgs} args - Arguments to filter Alunos to delete.
     * @example
     * // Delete a few Alunos
     * const { count } = await prisma.aluno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlunoDeleteManyArgs>(args?: SelectSubset<T, AlunoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alunos
     * const aluno = await prisma.aluno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlunoUpdateManyArgs>(args: SelectSubset<T, AlunoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Aluno.
     * @param {AlunoUpsertArgs} args - Arguments to update or create a Aluno.
     * @example
     * // Update or create a Aluno
     * const aluno = await prisma.aluno.upsert({
     *   create: {
     *     // ... data to create a Aluno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aluno we want to update
     *   }
     * })
     */
    upsert<T extends AlunoUpsertArgs>(args: SelectSubset<T, AlunoUpsertArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoCountArgs} args - Arguments to filter Alunos to count.
     * @example
     * // Count the number of Alunos
     * const count = await prisma.aluno.count({
     *   where: {
     *     // ... the filter for the Alunos we want to count
     *   }
     * })
    **/
    count<T extends AlunoCountArgs>(
      args?: Subset<T, AlunoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlunoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlunoAggregateArgs>(args: Subset<T, AlunoAggregateArgs>): Prisma.PrismaPromise<GetAlunoAggregateType<T>>

    /**
     * Group by Aluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoGroupByArgs} args - Group by arguments.
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
      T extends AlunoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlunoGroupByArgs['orderBy'] }
        : { orderBy?: AlunoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlunoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlunoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aluno model
   */
  readonly fields: AlunoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aluno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlunoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    faltaDisciplinar<T extends Aluno$faltaDisciplinarArgs<ExtArgs> = {}>(args?: Subset<T, Aluno$faltaDisciplinarArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaltasDisciplinaresPayload<ExtArgs>, T, "findMany"> | Null>
    Matricula<T extends Aluno$MatriculaArgs<ExtArgs> = {}>(args?: Subset<T, Aluno$MatriculaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Aluno model
   */ 
  interface AlunoFieldRefs {
    readonly id: FieldRef<"Aluno", 'Int'>
    readonly nome: FieldRef<"Aluno", 'String'>
    readonly nascimento: FieldRef<"Aluno", 'DateTime'>
    readonly cpf: FieldRef<"Aluno", 'String'>
    readonly rg: FieldRef<"Aluno", 'String'>
    readonly escola: FieldRef<"Aluno", 'String'>
    readonly periodo: FieldRef<"Aluno", 'String'>
    readonly serie: FieldRef<"Aluno", 'String'>
    readonly telefone: FieldRef<"Aluno", 'String'>
    readonly rendaFamilia: FieldRef<"Aluno", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Aluno findUnique
   */
  export type AlunoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno findUniqueOrThrow
   */
  export type AlunoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno findFirst
   */
  export type AlunoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunos.
     */
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno findFirstOrThrow
   */
  export type AlunoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunos.
     */
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno findMany
   */
  export type AlunoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Alunos to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno create
   */
  export type AlunoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The data needed to create a Aluno.
     */
    data: XOR<AlunoCreateInput, AlunoUncheckedCreateInput>
  }

  /**
   * Aluno createMany
   */
  export type AlunoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alunos.
     */
    data: AlunoCreateManyInput | AlunoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aluno createManyAndReturn
   */
  export type AlunoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Alunos.
     */
    data: AlunoCreateManyInput | AlunoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aluno update
   */
  export type AlunoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The data needed to update a Aluno.
     */
    data: XOR<AlunoUpdateInput, AlunoUncheckedUpdateInput>
    /**
     * Choose, which Aluno to update.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno updateMany
   */
  export type AlunoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alunos.
     */
    data: XOR<AlunoUpdateManyMutationInput, AlunoUncheckedUpdateManyInput>
    /**
     * Filter which Alunos to update
     */
    where?: AlunoWhereInput
  }

  /**
   * Aluno upsert
   */
  export type AlunoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The filter to search for the Aluno to update in case it exists.
     */
    where: AlunoWhereUniqueInput
    /**
     * In case the Aluno found by the `where` argument doesn't exist, create a new Aluno with this data.
     */
    create: XOR<AlunoCreateInput, AlunoUncheckedCreateInput>
    /**
     * In case the Aluno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlunoUpdateInput, AlunoUncheckedUpdateInput>
  }

  /**
   * Aluno delete
   */
  export type AlunoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter which Aluno to delete.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno deleteMany
   */
  export type AlunoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alunos to delete
     */
    where?: AlunoWhereInput
  }

  /**
   * Aluno.faltaDisciplinar
   */
  export type Aluno$faltaDisciplinarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaltasDisciplinares
     */
    select?: FaltasDisciplinaresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaltasDisciplinaresInclude<ExtArgs> | null
    where?: FaltasDisciplinaresWhereInput
    orderBy?: FaltasDisciplinaresOrderByWithRelationInput | FaltasDisciplinaresOrderByWithRelationInput[]
    cursor?: FaltasDisciplinaresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FaltasDisciplinaresScalarFieldEnum | FaltasDisciplinaresScalarFieldEnum[]
  }

  /**
   * Aluno.Matricula
   */
  export type Aluno$MatriculaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    where?: MatriculaWhereInput
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    cursor?: MatriculaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatriculaScalarFieldEnum | MatriculaScalarFieldEnum[]
  }

  /**
   * Aluno without action
   */
  export type AlunoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
  }


  /**
   * Model FaltasDisciplinares
   */

  export type AggregateFaltasDisciplinares = {
    _count: FaltasDisciplinaresCountAggregateOutputType | null
    _avg: FaltasDisciplinaresAvgAggregateOutputType | null
    _sum: FaltasDisciplinaresSumAggregateOutputType | null
    _min: FaltasDisciplinaresMinAggregateOutputType | null
    _max: FaltasDisciplinaresMaxAggregateOutputType | null
  }

  export type FaltasDisciplinaresAvgAggregateOutputType = {
    id: number | null
    idAluno: number | null
  }

  export type FaltasDisciplinaresSumAggregateOutputType = {
    id: number | null
    idAluno: number | null
  }

  export type FaltasDisciplinaresMinAggregateOutputType = {
    id: number | null
    idAluno: number | null
    descricao: string | null
    dataFalta: Date | null
  }

  export type FaltasDisciplinaresMaxAggregateOutputType = {
    id: number | null
    idAluno: number | null
    descricao: string | null
    dataFalta: Date | null
  }

  export type FaltasDisciplinaresCountAggregateOutputType = {
    id: number
    idAluno: number
    descricao: number
    dataFalta: number
    _all: number
  }


  export type FaltasDisciplinaresAvgAggregateInputType = {
    id?: true
    idAluno?: true
  }

  export type FaltasDisciplinaresSumAggregateInputType = {
    id?: true
    idAluno?: true
  }

  export type FaltasDisciplinaresMinAggregateInputType = {
    id?: true
    idAluno?: true
    descricao?: true
    dataFalta?: true
  }

  export type FaltasDisciplinaresMaxAggregateInputType = {
    id?: true
    idAluno?: true
    descricao?: true
    dataFalta?: true
  }

  export type FaltasDisciplinaresCountAggregateInputType = {
    id?: true
    idAluno?: true
    descricao?: true
    dataFalta?: true
    _all?: true
  }

  export type FaltasDisciplinaresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FaltasDisciplinares to aggregate.
     */
    where?: FaltasDisciplinaresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FaltasDisciplinares to fetch.
     */
    orderBy?: FaltasDisciplinaresOrderByWithRelationInput | FaltasDisciplinaresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FaltasDisciplinaresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FaltasDisciplinares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FaltasDisciplinares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FaltasDisciplinares
    **/
    _count?: true | FaltasDisciplinaresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FaltasDisciplinaresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FaltasDisciplinaresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FaltasDisciplinaresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FaltasDisciplinaresMaxAggregateInputType
  }

  export type GetFaltasDisciplinaresAggregateType<T extends FaltasDisciplinaresAggregateArgs> = {
        [P in keyof T & keyof AggregateFaltasDisciplinares]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFaltasDisciplinares[P]>
      : GetScalarType<T[P], AggregateFaltasDisciplinares[P]>
  }




  export type FaltasDisciplinaresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaltasDisciplinaresWhereInput
    orderBy?: FaltasDisciplinaresOrderByWithAggregationInput | FaltasDisciplinaresOrderByWithAggregationInput[]
    by: FaltasDisciplinaresScalarFieldEnum[] | FaltasDisciplinaresScalarFieldEnum
    having?: FaltasDisciplinaresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FaltasDisciplinaresCountAggregateInputType | true
    _avg?: FaltasDisciplinaresAvgAggregateInputType
    _sum?: FaltasDisciplinaresSumAggregateInputType
    _min?: FaltasDisciplinaresMinAggregateInputType
    _max?: FaltasDisciplinaresMaxAggregateInputType
  }

  export type FaltasDisciplinaresGroupByOutputType = {
    id: number
    idAluno: number
    descricao: string
    dataFalta: Date
    _count: FaltasDisciplinaresCountAggregateOutputType | null
    _avg: FaltasDisciplinaresAvgAggregateOutputType | null
    _sum: FaltasDisciplinaresSumAggregateOutputType | null
    _min: FaltasDisciplinaresMinAggregateOutputType | null
    _max: FaltasDisciplinaresMaxAggregateOutputType | null
  }

  type GetFaltasDisciplinaresGroupByPayload<T extends FaltasDisciplinaresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FaltasDisciplinaresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FaltasDisciplinaresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FaltasDisciplinaresGroupByOutputType[P]>
            : GetScalarType<T[P], FaltasDisciplinaresGroupByOutputType[P]>
        }
      >
    >


  export type FaltasDisciplinaresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idAluno?: boolean
    descricao?: boolean
    dataFalta?: boolean
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["faltasDisciplinares"]>

  export type FaltasDisciplinaresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idAluno?: boolean
    descricao?: boolean
    dataFalta?: boolean
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["faltasDisciplinares"]>

  export type FaltasDisciplinaresSelectScalar = {
    id?: boolean
    idAluno?: boolean
    descricao?: boolean
    dataFalta?: boolean
  }

  export type FaltasDisciplinaresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }
  export type FaltasDisciplinaresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }

  export type $FaltasDisciplinaresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FaltasDisciplinares"
    objects: {
      aluno: Prisma.$AlunoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idAluno: number
      descricao: string
      dataFalta: Date
    }, ExtArgs["result"]["faltasDisciplinares"]>
    composites: {}
  }

  type FaltasDisciplinaresGetPayload<S extends boolean | null | undefined | FaltasDisciplinaresDefaultArgs> = $Result.GetResult<Prisma.$FaltasDisciplinaresPayload, S>

  type FaltasDisciplinaresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FaltasDisciplinaresFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FaltasDisciplinaresCountAggregateInputType | true
    }

  export interface FaltasDisciplinaresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FaltasDisciplinares'], meta: { name: 'FaltasDisciplinares' } }
    /**
     * Find zero or one FaltasDisciplinares that matches the filter.
     * @param {FaltasDisciplinaresFindUniqueArgs} args - Arguments to find a FaltasDisciplinares
     * @example
     * // Get one FaltasDisciplinares
     * const faltasDisciplinares = await prisma.faltasDisciplinares.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FaltasDisciplinaresFindUniqueArgs>(args: SelectSubset<T, FaltasDisciplinaresFindUniqueArgs<ExtArgs>>): Prisma__FaltasDisciplinaresClient<$Result.GetResult<Prisma.$FaltasDisciplinaresPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FaltasDisciplinares that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FaltasDisciplinaresFindUniqueOrThrowArgs} args - Arguments to find a FaltasDisciplinares
     * @example
     * // Get one FaltasDisciplinares
     * const faltasDisciplinares = await prisma.faltasDisciplinares.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FaltasDisciplinaresFindUniqueOrThrowArgs>(args: SelectSubset<T, FaltasDisciplinaresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FaltasDisciplinaresClient<$Result.GetResult<Prisma.$FaltasDisciplinaresPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FaltasDisciplinares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaltasDisciplinaresFindFirstArgs} args - Arguments to find a FaltasDisciplinares
     * @example
     * // Get one FaltasDisciplinares
     * const faltasDisciplinares = await prisma.faltasDisciplinares.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FaltasDisciplinaresFindFirstArgs>(args?: SelectSubset<T, FaltasDisciplinaresFindFirstArgs<ExtArgs>>): Prisma__FaltasDisciplinaresClient<$Result.GetResult<Prisma.$FaltasDisciplinaresPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FaltasDisciplinares that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaltasDisciplinaresFindFirstOrThrowArgs} args - Arguments to find a FaltasDisciplinares
     * @example
     * // Get one FaltasDisciplinares
     * const faltasDisciplinares = await prisma.faltasDisciplinares.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FaltasDisciplinaresFindFirstOrThrowArgs>(args?: SelectSubset<T, FaltasDisciplinaresFindFirstOrThrowArgs<ExtArgs>>): Prisma__FaltasDisciplinaresClient<$Result.GetResult<Prisma.$FaltasDisciplinaresPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FaltasDisciplinares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaltasDisciplinaresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FaltasDisciplinares
     * const faltasDisciplinares = await prisma.faltasDisciplinares.findMany()
     * 
     * // Get first 10 FaltasDisciplinares
     * const faltasDisciplinares = await prisma.faltasDisciplinares.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const faltasDisciplinaresWithIdOnly = await prisma.faltasDisciplinares.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FaltasDisciplinaresFindManyArgs>(args?: SelectSubset<T, FaltasDisciplinaresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaltasDisciplinaresPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FaltasDisciplinares.
     * @param {FaltasDisciplinaresCreateArgs} args - Arguments to create a FaltasDisciplinares.
     * @example
     * // Create one FaltasDisciplinares
     * const FaltasDisciplinares = await prisma.faltasDisciplinares.create({
     *   data: {
     *     // ... data to create a FaltasDisciplinares
     *   }
     * })
     * 
     */
    create<T extends FaltasDisciplinaresCreateArgs>(args: SelectSubset<T, FaltasDisciplinaresCreateArgs<ExtArgs>>): Prisma__FaltasDisciplinaresClient<$Result.GetResult<Prisma.$FaltasDisciplinaresPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FaltasDisciplinares.
     * @param {FaltasDisciplinaresCreateManyArgs} args - Arguments to create many FaltasDisciplinares.
     * @example
     * // Create many FaltasDisciplinares
     * const faltasDisciplinares = await prisma.faltasDisciplinares.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FaltasDisciplinaresCreateManyArgs>(args?: SelectSubset<T, FaltasDisciplinaresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FaltasDisciplinares and returns the data saved in the database.
     * @param {FaltasDisciplinaresCreateManyAndReturnArgs} args - Arguments to create many FaltasDisciplinares.
     * @example
     * // Create many FaltasDisciplinares
     * const faltasDisciplinares = await prisma.faltasDisciplinares.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FaltasDisciplinares and only return the `id`
     * const faltasDisciplinaresWithIdOnly = await prisma.faltasDisciplinares.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FaltasDisciplinaresCreateManyAndReturnArgs>(args?: SelectSubset<T, FaltasDisciplinaresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaltasDisciplinaresPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FaltasDisciplinares.
     * @param {FaltasDisciplinaresDeleteArgs} args - Arguments to delete one FaltasDisciplinares.
     * @example
     * // Delete one FaltasDisciplinares
     * const FaltasDisciplinares = await prisma.faltasDisciplinares.delete({
     *   where: {
     *     // ... filter to delete one FaltasDisciplinares
     *   }
     * })
     * 
     */
    delete<T extends FaltasDisciplinaresDeleteArgs>(args: SelectSubset<T, FaltasDisciplinaresDeleteArgs<ExtArgs>>): Prisma__FaltasDisciplinaresClient<$Result.GetResult<Prisma.$FaltasDisciplinaresPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FaltasDisciplinares.
     * @param {FaltasDisciplinaresUpdateArgs} args - Arguments to update one FaltasDisciplinares.
     * @example
     * // Update one FaltasDisciplinares
     * const faltasDisciplinares = await prisma.faltasDisciplinares.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FaltasDisciplinaresUpdateArgs>(args: SelectSubset<T, FaltasDisciplinaresUpdateArgs<ExtArgs>>): Prisma__FaltasDisciplinaresClient<$Result.GetResult<Prisma.$FaltasDisciplinaresPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FaltasDisciplinares.
     * @param {FaltasDisciplinaresDeleteManyArgs} args - Arguments to filter FaltasDisciplinares to delete.
     * @example
     * // Delete a few FaltasDisciplinares
     * const { count } = await prisma.faltasDisciplinares.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FaltasDisciplinaresDeleteManyArgs>(args?: SelectSubset<T, FaltasDisciplinaresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FaltasDisciplinares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaltasDisciplinaresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FaltasDisciplinares
     * const faltasDisciplinares = await prisma.faltasDisciplinares.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FaltasDisciplinaresUpdateManyArgs>(args: SelectSubset<T, FaltasDisciplinaresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FaltasDisciplinares.
     * @param {FaltasDisciplinaresUpsertArgs} args - Arguments to update or create a FaltasDisciplinares.
     * @example
     * // Update or create a FaltasDisciplinares
     * const faltasDisciplinares = await prisma.faltasDisciplinares.upsert({
     *   create: {
     *     // ... data to create a FaltasDisciplinares
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FaltasDisciplinares we want to update
     *   }
     * })
     */
    upsert<T extends FaltasDisciplinaresUpsertArgs>(args: SelectSubset<T, FaltasDisciplinaresUpsertArgs<ExtArgs>>): Prisma__FaltasDisciplinaresClient<$Result.GetResult<Prisma.$FaltasDisciplinaresPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FaltasDisciplinares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaltasDisciplinaresCountArgs} args - Arguments to filter FaltasDisciplinares to count.
     * @example
     * // Count the number of FaltasDisciplinares
     * const count = await prisma.faltasDisciplinares.count({
     *   where: {
     *     // ... the filter for the FaltasDisciplinares we want to count
     *   }
     * })
    **/
    count<T extends FaltasDisciplinaresCountArgs>(
      args?: Subset<T, FaltasDisciplinaresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FaltasDisciplinaresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FaltasDisciplinares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaltasDisciplinaresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FaltasDisciplinaresAggregateArgs>(args: Subset<T, FaltasDisciplinaresAggregateArgs>): Prisma.PrismaPromise<GetFaltasDisciplinaresAggregateType<T>>

    /**
     * Group by FaltasDisciplinares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaltasDisciplinaresGroupByArgs} args - Group by arguments.
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
      T extends FaltasDisciplinaresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FaltasDisciplinaresGroupByArgs['orderBy'] }
        : { orderBy?: FaltasDisciplinaresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FaltasDisciplinaresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaltasDisciplinaresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FaltasDisciplinares model
   */
  readonly fields: FaltasDisciplinaresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FaltasDisciplinares.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FaltasDisciplinaresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aluno<T extends AlunoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlunoDefaultArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the FaltasDisciplinares model
   */ 
  interface FaltasDisciplinaresFieldRefs {
    readonly id: FieldRef<"FaltasDisciplinares", 'Int'>
    readonly idAluno: FieldRef<"FaltasDisciplinares", 'Int'>
    readonly descricao: FieldRef<"FaltasDisciplinares", 'String'>
    readonly dataFalta: FieldRef<"FaltasDisciplinares", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FaltasDisciplinares findUnique
   */
  export type FaltasDisciplinaresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaltasDisciplinares
     */
    select?: FaltasDisciplinaresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaltasDisciplinaresInclude<ExtArgs> | null
    /**
     * Filter, which FaltasDisciplinares to fetch.
     */
    where: FaltasDisciplinaresWhereUniqueInput
  }

  /**
   * FaltasDisciplinares findUniqueOrThrow
   */
  export type FaltasDisciplinaresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaltasDisciplinares
     */
    select?: FaltasDisciplinaresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaltasDisciplinaresInclude<ExtArgs> | null
    /**
     * Filter, which FaltasDisciplinares to fetch.
     */
    where: FaltasDisciplinaresWhereUniqueInput
  }

  /**
   * FaltasDisciplinares findFirst
   */
  export type FaltasDisciplinaresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaltasDisciplinares
     */
    select?: FaltasDisciplinaresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaltasDisciplinaresInclude<ExtArgs> | null
    /**
     * Filter, which FaltasDisciplinares to fetch.
     */
    where?: FaltasDisciplinaresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FaltasDisciplinares to fetch.
     */
    orderBy?: FaltasDisciplinaresOrderByWithRelationInput | FaltasDisciplinaresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FaltasDisciplinares.
     */
    cursor?: FaltasDisciplinaresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FaltasDisciplinares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FaltasDisciplinares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FaltasDisciplinares.
     */
    distinct?: FaltasDisciplinaresScalarFieldEnum | FaltasDisciplinaresScalarFieldEnum[]
  }

  /**
   * FaltasDisciplinares findFirstOrThrow
   */
  export type FaltasDisciplinaresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaltasDisciplinares
     */
    select?: FaltasDisciplinaresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaltasDisciplinaresInclude<ExtArgs> | null
    /**
     * Filter, which FaltasDisciplinares to fetch.
     */
    where?: FaltasDisciplinaresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FaltasDisciplinares to fetch.
     */
    orderBy?: FaltasDisciplinaresOrderByWithRelationInput | FaltasDisciplinaresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FaltasDisciplinares.
     */
    cursor?: FaltasDisciplinaresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FaltasDisciplinares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FaltasDisciplinares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FaltasDisciplinares.
     */
    distinct?: FaltasDisciplinaresScalarFieldEnum | FaltasDisciplinaresScalarFieldEnum[]
  }

  /**
   * FaltasDisciplinares findMany
   */
  export type FaltasDisciplinaresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaltasDisciplinares
     */
    select?: FaltasDisciplinaresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaltasDisciplinaresInclude<ExtArgs> | null
    /**
     * Filter, which FaltasDisciplinares to fetch.
     */
    where?: FaltasDisciplinaresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FaltasDisciplinares to fetch.
     */
    orderBy?: FaltasDisciplinaresOrderByWithRelationInput | FaltasDisciplinaresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FaltasDisciplinares.
     */
    cursor?: FaltasDisciplinaresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FaltasDisciplinares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FaltasDisciplinares.
     */
    skip?: number
    distinct?: FaltasDisciplinaresScalarFieldEnum | FaltasDisciplinaresScalarFieldEnum[]
  }

  /**
   * FaltasDisciplinares create
   */
  export type FaltasDisciplinaresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaltasDisciplinares
     */
    select?: FaltasDisciplinaresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaltasDisciplinaresInclude<ExtArgs> | null
    /**
     * The data needed to create a FaltasDisciplinares.
     */
    data: XOR<FaltasDisciplinaresCreateInput, FaltasDisciplinaresUncheckedCreateInput>
  }

  /**
   * FaltasDisciplinares createMany
   */
  export type FaltasDisciplinaresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FaltasDisciplinares.
     */
    data: FaltasDisciplinaresCreateManyInput | FaltasDisciplinaresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FaltasDisciplinares createManyAndReturn
   */
  export type FaltasDisciplinaresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaltasDisciplinares
     */
    select?: FaltasDisciplinaresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FaltasDisciplinares.
     */
    data: FaltasDisciplinaresCreateManyInput | FaltasDisciplinaresCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaltasDisciplinaresIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FaltasDisciplinares update
   */
  export type FaltasDisciplinaresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaltasDisciplinares
     */
    select?: FaltasDisciplinaresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaltasDisciplinaresInclude<ExtArgs> | null
    /**
     * The data needed to update a FaltasDisciplinares.
     */
    data: XOR<FaltasDisciplinaresUpdateInput, FaltasDisciplinaresUncheckedUpdateInput>
    /**
     * Choose, which FaltasDisciplinares to update.
     */
    where: FaltasDisciplinaresWhereUniqueInput
  }

  /**
   * FaltasDisciplinares updateMany
   */
  export type FaltasDisciplinaresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FaltasDisciplinares.
     */
    data: XOR<FaltasDisciplinaresUpdateManyMutationInput, FaltasDisciplinaresUncheckedUpdateManyInput>
    /**
     * Filter which FaltasDisciplinares to update
     */
    where?: FaltasDisciplinaresWhereInput
  }

  /**
   * FaltasDisciplinares upsert
   */
  export type FaltasDisciplinaresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaltasDisciplinares
     */
    select?: FaltasDisciplinaresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaltasDisciplinaresInclude<ExtArgs> | null
    /**
     * The filter to search for the FaltasDisciplinares to update in case it exists.
     */
    where: FaltasDisciplinaresWhereUniqueInput
    /**
     * In case the FaltasDisciplinares found by the `where` argument doesn't exist, create a new FaltasDisciplinares with this data.
     */
    create: XOR<FaltasDisciplinaresCreateInput, FaltasDisciplinaresUncheckedCreateInput>
    /**
     * In case the FaltasDisciplinares was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FaltasDisciplinaresUpdateInput, FaltasDisciplinaresUncheckedUpdateInput>
  }

  /**
   * FaltasDisciplinares delete
   */
  export type FaltasDisciplinaresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaltasDisciplinares
     */
    select?: FaltasDisciplinaresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaltasDisciplinaresInclude<ExtArgs> | null
    /**
     * Filter which FaltasDisciplinares to delete.
     */
    where: FaltasDisciplinaresWhereUniqueInput
  }

  /**
   * FaltasDisciplinares deleteMany
   */
  export type FaltasDisciplinaresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FaltasDisciplinares to delete
     */
    where?: FaltasDisciplinaresWhereInput
  }

  /**
   * FaltasDisciplinares without action
   */
  export type FaltasDisciplinaresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaltasDisciplinares
     */
    select?: FaltasDisciplinaresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaltasDisciplinaresInclude<ExtArgs> | null
  }


  /**
   * Model Matricula
   */

  export type AggregateMatricula = {
    _count: MatriculaCountAggregateOutputType | null
    _avg: MatriculaAvgAggregateOutputType | null
    _sum: MatriculaSumAggregateOutputType | null
    _min: MatriculaMinAggregateOutputType | null
    _max: MatriculaMaxAggregateOutputType | null
  }

  export type MatriculaAvgAggregateOutputType = {
    id: number | null
    idAluno: number | null
  }

  export type MatriculaSumAggregateOutputType = {
    id: number | null
    idAluno: number | null
  }

  export type MatriculaMinAggregateOutputType = {
    id: number | null
    idAluno: number | null
    dataInicio: Date | null
    situacao: string | null
  }

  export type MatriculaMaxAggregateOutputType = {
    id: number | null
    idAluno: number | null
    dataInicio: Date | null
    situacao: string | null
  }

  export type MatriculaCountAggregateOutputType = {
    id: number
    idAluno: number
    dataInicio: number
    situacao: number
    _all: number
  }


  export type MatriculaAvgAggregateInputType = {
    id?: true
    idAluno?: true
  }

  export type MatriculaSumAggregateInputType = {
    id?: true
    idAluno?: true
  }

  export type MatriculaMinAggregateInputType = {
    id?: true
    idAluno?: true
    dataInicio?: true
    situacao?: true
  }

  export type MatriculaMaxAggregateInputType = {
    id?: true
    idAluno?: true
    dataInicio?: true
    situacao?: true
  }

  export type MatriculaCountAggregateInputType = {
    id?: true
    idAluno?: true
    dataInicio?: true
    situacao?: true
    _all?: true
  }

  export type MatriculaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matricula to aggregate.
     */
    where?: MatriculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matriculas to fetch.
     */
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatriculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matriculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matriculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matriculas
    **/
    _count?: true | MatriculaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatriculaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatriculaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatriculaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatriculaMaxAggregateInputType
  }

  export type GetMatriculaAggregateType<T extends MatriculaAggregateArgs> = {
        [P in keyof T & keyof AggregateMatricula]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatricula[P]>
      : GetScalarType<T[P], AggregateMatricula[P]>
  }




  export type MatriculaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatriculaWhereInput
    orderBy?: MatriculaOrderByWithAggregationInput | MatriculaOrderByWithAggregationInput[]
    by: MatriculaScalarFieldEnum[] | MatriculaScalarFieldEnum
    having?: MatriculaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatriculaCountAggregateInputType | true
    _avg?: MatriculaAvgAggregateInputType
    _sum?: MatriculaSumAggregateInputType
    _min?: MatriculaMinAggregateInputType
    _max?: MatriculaMaxAggregateInputType
  }

  export type MatriculaGroupByOutputType = {
    id: number
    idAluno: number
    dataInicio: Date
    situacao: string
    _count: MatriculaCountAggregateOutputType | null
    _avg: MatriculaAvgAggregateOutputType | null
    _sum: MatriculaSumAggregateOutputType | null
    _min: MatriculaMinAggregateOutputType | null
    _max: MatriculaMaxAggregateOutputType | null
  }

  type GetMatriculaGroupByPayload<T extends MatriculaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatriculaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatriculaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatriculaGroupByOutputType[P]>
            : GetScalarType<T[P], MatriculaGroupByOutputType[P]>
        }
      >
    >


  export type MatriculaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idAluno?: boolean
    dataInicio?: boolean
    situacao?: boolean
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
    Turma?: boolean | Matricula$TurmaArgs<ExtArgs>
    _count?: boolean | MatriculaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matricula"]>

  export type MatriculaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idAluno?: boolean
    dataInicio?: boolean
    situacao?: boolean
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matricula"]>

  export type MatriculaSelectScalar = {
    id?: boolean
    idAluno?: boolean
    dataInicio?: boolean
    situacao?: boolean
  }

  export type MatriculaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
    Turma?: boolean | Matricula$TurmaArgs<ExtArgs>
    _count?: boolean | MatriculaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MatriculaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }

  export type $MatriculaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Matricula"
    objects: {
      aluno: Prisma.$AlunoPayload<ExtArgs>
      Turma: Prisma.$TurmaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idAluno: number
      dataInicio: Date
      situacao: string
    }, ExtArgs["result"]["matricula"]>
    composites: {}
  }

  type MatriculaGetPayload<S extends boolean | null | undefined | MatriculaDefaultArgs> = $Result.GetResult<Prisma.$MatriculaPayload, S>

  type MatriculaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MatriculaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MatriculaCountAggregateInputType | true
    }

  export interface MatriculaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Matricula'], meta: { name: 'Matricula' } }
    /**
     * Find zero or one Matricula that matches the filter.
     * @param {MatriculaFindUniqueArgs} args - Arguments to find a Matricula
     * @example
     * // Get one Matricula
     * const matricula = await prisma.matricula.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatriculaFindUniqueArgs>(args: SelectSubset<T, MatriculaFindUniqueArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Matricula that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MatriculaFindUniqueOrThrowArgs} args - Arguments to find a Matricula
     * @example
     * // Get one Matricula
     * const matricula = await prisma.matricula.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatriculaFindUniqueOrThrowArgs>(args: SelectSubset<T, MatriculaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Matricula that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaFindFirstArgs} args - Arguments to find a Matricula
     * @example
     * // Get one Matricula
     * const matricula = await prisma.matricula.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatriculaFindFirstArgs>(args?: SelectSubset<T, MatriculaFindFirstArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Matricula that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaFindFirstOrThrowArgs} args - Arguments to find a Matricula
     * @example
     * // Get one Matricula
     * const matricula = await prisma.matricula.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatriculaFindFirstOrThrowArgs>(args?: SelectSubset<T, MatriculaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Matriculas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matriculas
     * const matriculas = await prisma.matricula.findMany()
     * 
     * // Get first 10 Matriculas
     * const matriculas = await prisma.matricula.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matriculaWithIdOnly = await prisma.matricula.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatriculaFindManyArgs>(args?: SelectSubset<T, MatriculaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Matricula.
     * @param {MatriculaCreateArgs} args - Arguments to create a Matricula.
     * @example
     * // Create one Matricula
     * const Matricula = await prisma.matricula.create({
     *   data: {
     *     // ... data to create a Matricula
     *   }
     * })
     * 
     */
    create<T extends MatriculaCreateArgs>(args: SelectSubset<T, MatriculaCreateArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Matriculas.
     * @param {MatriculaCreateManyArgs} args - Arguments to create many Matriculas.
     * @example
     * // Create many Matriculas
     * const matricula = await prisma.matricula.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatriculaCreateManyArgs>(args?: SelectSubset<T, MatriculaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matriculas and returns the data saved in the database.
     * @param {MatriculaCreateManyAndReturnArgs} args - Arguments to create many Matriculas.
     * @example
     * // Create many Matriculas
     * const matricula = await prisma.matricula.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matriculas and only return the `id`
     * const matriculaWithIdOnly = await prisma.matricula.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatriculaCreateManyAndReturnArgs>(args?: SelectSubset<T, MatriculaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Matricula.
     * @param {MatriculaDeleteArgs} args - Arguments to delete one Matricula.
     * @example
     * // Delete one Matricula
     * const Matricula = await prisma.matricula.delete({
     *   where: {
     *     // ... filter to delete one Matricula
     *   }
     * })
     * 
     */
    delete<T extends MatriculaDeleteArgs>(args: SelectSubset<T, MatriculaDeleteArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Matricula.
     * @param {MatriculaUpdateArgs} args - Arguments to update one Matricula.
     * @example
     * // Update one Matricula
     * const matricula = await prisma.matricula.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatriculaUpdateArgs>(args: SelectSubset<T, MatriculaUpdateArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Matriculas.
     * @param {MatriculaDeleteManyArgs} args - Arguments to filter Matriculas to delete.
     * @example
     * // Delete a few Matriculas
     * const { count } = await prisma.matricula.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatriculaDeleteManyArgs>(args?: SelectSubset<T, MatriculaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matriculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matriculas
     * const matricula = await prisma.matricula.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatriculaUpdateManyArgs>(args: SelectSubset<T, MatriculaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Matricula.
     * @param {MatriculaUpsertArgs} args - Arguments to update or create a Matricula.
     * @example
     * // Update or create a Matricula
     * const matricula = await prisma.matricula.upsert({
     *   create: {
     *     // ... data to create a Matricula
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matricula we want to update
     *   }
     * })
     */
    upsert<T extends MatriculaUpsertArgs>(args: SelectSubset<T, MatriculaUpsertArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Matriculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaCountArgs} args - Arguments to filter Matriculas to count.
     * @example
     * // Count the number of Matriculas
     * const count = await prisma.matricula.count({
     *   where: {
     *     // ... the filter for the Matriculas we want to count
     *   }
     * })
    **/
    count<T extends MatriculaCountArgs>(
      args?: Subset<T, MatriculaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatriculaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Matricula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatriculaAggregateArgs>(args: Subset<T, MatriculaAggregateArgs>): Prisma.PrismaPromise<GetMatriculaAggregateType<T>>

    /**
     * Group by Matricula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaGroupByArgs} args - Group by arguments.
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
      T extends MatriculaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatriculaGroupByArgs['orderBy'] }
        : { orderBy?: MatriculaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatriculaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatriculaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Matricula model
   */
  readonly fields: MatriculaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Matricula.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatriculaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aluno<T extends AlunoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlunoDefaultArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Turma<T extends Matricula$TurmaArgs<ExtArgs> = {}>(args?: Subset<T, Matricula$TurmaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Matricula model
   */ 
  interface MatriculaFieldRefs {
    readonly id: FieldRef<"Matricula", 'Int'>
    readonly idAluno: FieldRef<"Matricula", 'Int'>
    readonly dataInicio: FieldRef<"Matricula", 'DateTime'>
    readonly situacao: FieldRef<"Matricula", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Matricula findUnique
   */
  export type MatriculaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter, which Matricula to fetch.
     */
    where: MatriculaWhereUniqueInput
  }

  /**
   * Matricula findUniqueOrThrow
   */
  export type MatriculaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter, which Matricula to fetch.
     */
    where: MatriculaWhereUniqueInput
  }

  /**
   * Matricula findFirst
   */
  export type MatriculaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter, which Matricula to fetch.
     */
    where?: MatriculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matriculas to fetch.
     */
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matriculas.
     */
    cursor?: MatriculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matriculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matriculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matriculas.
     */
    distinct?: MatriculaScalarFieldEnum | MatriculaScalarFieldEnum[]
  }

  /**
   * Matricula findFirstOrThrow
   */
  export type MatriculaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter, which Matricula to fetch.
     */
    where?: MatriculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matriculas to fetch.
     */
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matriculas.
     */
    cursor?: MatriculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matriculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matriculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matriculas.
     */
    distinct?: MatriculaScalarFieldEnum | MatriculaScalarFieldEnum[]
  }

  /**
   * Matricula findMany
   */
  export type MatriculaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter, which Matriculas to fetch.
     */
    where?: MatriculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matriculas to fetch.
     */
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matriculas.
     */
    cursor?: MatriculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matriculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matriculas.
     */
    skip?: number
    distinct?: MatriculaScalarFieldEnum | MatriculaScalarFieldEnum[]
  }

  /**
   * Matricula create
   */
  export type MatriculaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * The data needed to create a Matricula.
     */
    data: XOR<MatriculaCreateInput, MatriculaUncheckedCreateInput>
  }

  /**
   * Matricula createMany
   */
  export type MatriculaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matriculas.
     */
    data: MatriculaCreateManyInput | MatriculaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Matricula createManyAndReturn
   */
  export type MatriculaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Matriculas.
     */
    data: MatriculaCreateManyInput | MatriculaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Matricula update
   */
  export type MatriculaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * The data needed to update a Matricula.
     */
    data: XOR<MatriculaUpdateInput, MatriculaUncheckedUpdateInput>
    /**
     * Choose, which Matricula to update.
     */
    where: MatriculaWhereUniqueInput
  }

  /**
   * Matricula updateMany
   */
  export type MatriculaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matriculas.
     */
    data: XOR<MatriculaUpdateManyMutationInput, MatriculaUncheckedUpdateManyInput>
    /**
     * Filter which Matriculas to update
     */
    where?: MatriculaWhereInput
  }

  /**
   * Matricula upsert
   */
  export type MatriculaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * The filter to search for the Matricula to update in case it exists.
     */
    where: MatriculaWhereUniqueInput
    /**
     * In case the Matricula found by the `where` argument doesn't exist, create a new Matricula with this data.
     */
    create: XOR<MatriculaCreateInput, MatriculaUncheckedCreateInput>
    /**
     * In case the Matricula was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatriculaUpdateInput, MatriculaUncheckedUpdateInput>
  }

  /**
   * Matricula delete
   */
  export type MatriculaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter which Matricula to delete.
     */
    where: MatriculaWhereUniqueInput
  }

  /**
   * Matricula deleteMany
   */
  export type MatriculaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matriculas to delete
     */
    where?: MatriculaWhereInput
  }

  /**
   * Matricula.Turma
   */
  export type Matricula$TurmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    where?: TurmaWhereInput
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    cursor?: TurmaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Matricula without action
   */
  export type MatriculaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
  }


  /**
   * Model Turma
   */

  export type AggregateTurma = {
    _count: TurmaCountAggregateOutputType | null
    _avg: TurmaAvgAggregateOutputType | null
    _sum: TurmaSumAggregateOutputType | null
    _min: TurmaMinAggregateOutputType | null
    _max: TurmaMaxAggregateOutputType | null
  }

  export type TurmaAvgAggregateOutputType = {
    id: number | null
    idMatricula: number | null
    idDisciplina: number | null
    idCurso: number | null
  }

  export type TurmaSumAggregateOutputType = {
    id: number | null
    idMatricula: number | null
    idDisciplina: number | null
    idCurso: number | null
  }

  export type TurmaMinAggregateOutputType = {
    id: number | null
    idMatricula: number | null
    idDisciplina: number | null
    idCurso: number | null
    nomeTurma: string | null
  }

  export type TurmaMaxAggregateOutputType = {
    id: number | null
    idMatricula: number | null
    idDisciplina: number | null
    idCurso: number | null
    nomeTurma: string | null
  }

  export type TurmaCountAggregateOutputType = {
    id: number
    idMatricula: number
    idDisciplina: number
    idCurso: number
    nomeTurma: number
    _all: number
  }


  export type TurmaAvgAggregateInputType = {
    id?: true
    idMatricula?: true
    idDisciplina?: true
    idCurso?: true
  }

  export type TurmaSumAggregateInputType = {
    id?: true
    idMatricula?: true
    idDisciplina?: true
    idCurso?: true
  }

  export type TurmaMinAggregateInputType = {
    id?: true
    idMatricula?: true
    idDisciplina?: true
    idCurso?: true
    nomeTurma?: true
  }

  export type TurmaMaxAggregateInputType = {
    id?: true
    idMatricula?: true
    idDisciplina?: true
    idCurso?: true
    nomeTurma?: true
  }

  export type TurmaCountAggregateInputType = {
    id?: true
    idMatricula?: true
    idDisciplina?: true
    idCurso?: true
    nomeTurma?: true
    _all?: true
  }

  export type TurmaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turma to aggregate.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Turmas
    **/
    _count?: true | TurmaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TurmaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TurmaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurmaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurmaMaxAggregateInputType
  }

  export type GetTurmaAggregateType<T extends TurmaAggregateArgs> = {
        [P in keyof T & keyof AggregateTurma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurma[P]>
      : GetScalarType<T[P], AggregateTurma[P]>
  }




  export type TurmaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurmaWhereInput
    orderBy?: TurmaOrderByWithAggregationInput | TurmaOrderByWithAggregationInput[]
    by: TurmaScalarFieldEnum[] | TurmaScalarFieldEnum
    having?: TurmaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurmaCountAggregateInputType | true
    _avg?: TurmaAvgAggregateInputType
    _sum?: TurmaSumAggregateInputType
    _min?: TurmaMinAggregateInputType
    _max?: TurmaMaxAggregateInputType
  }

  export type TurmaGroupByOutputType = {
    id: number
    idMatricula: number
    idDisciplina: number
    idCurso: number
    nomeTurma: string
    _count: TurmaCountAggregateOutputType | null
    _avg: TurmaAvgAggregateOutputType | null
    _sum: TurmaSumAggregateOutputType | null
    _min: TurmaMinAggregateOutputType | null
    _max: TurmaMaxAggregateOutputType | null
  }

  type GetTurmaGroupByPayload<T extends TurmaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TurmaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurmaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurmaGroupByOutputType[P]>
            : GetScalarType<T[P], TurmaGroupByOutputType[P]>
        }
      >
    >


  export type TurmaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idMatricula?: boolean
    idDisciplina?: boolean
    idCurso?: boolean
    nomeTurma?: boolean
    matricula?: boolean | MatriculaDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinasDefaultArgs<ExtArgs>
    curso?: boolean | CursosDefaultArgs<ExtArgs>
    Chamada?: boolean | Turma$ChamadaArgs<ExtArgs>
    _count?: boolean | TurmaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turma"]>

  export type TurmaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idMatricula?: boolean
    idDisciplina?: boolean
    idCurso?: boolean
    nomeTurma?: boolean
    matricula?: boolean | MatriculaDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinasDefaultArgs<ExtArgs>
    curso?: boolean | CursosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turma"]>

  export type TurmaSelectScalar = {
    id?: boolean
    idMatricula?: boolean
    idDisciplina?: boolean
    idCurso?: boolean
    nomeTurma?: boolean
  }

  export type TurmaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matricula?: boolean | MatriculaDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinasDefaultArgs<ExtArgs>
    curso?: boolean | CursosDefaultArgs<ExtArgs>
    Chamada?: boolean | Turma$ChamadaArgs<ExtArgs>
    _count?: boolean | TurmaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TurmaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matricula?: boolean | MatriculaDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinasDefaultArgs<ExtArgs>
    curso?: boolean | CursosDefaultArgs<ExtArgs>
  }

  export type $TurmaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Turma"
    objects: {
      matricula: Prisma.$MatriculaPayload<ExtArgs>
      disciplina: Prisma.$DisciplinasPayload<ExtArgs>
      curso: Prisma.$CursosPayload<ExtArgs>
      Chamada: Prisma.$ChamadaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idMatricula: number
      idDisciplina: number
      idCurso: number
      nomeTurma: string
    }, ExtArgs["result"]["turma"]>
    composites: {}
  }

  type TurmaGetPayload<S extends boolean | null | undefined | TurmaDefaultArgs> = $Result.GetResult<Prisma.$TurmaPayload, S>

  type TurmaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TurmaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TurmaCountAggregateInputType | true
    }

  export interface TurmaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Turma'], meta: { name: 'Turma' } }
    /**
     * Find zero or one Turma that matches the filter.
     * @param {TurmaFindUniqueArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TurmaFindUniqueArgs>(args: SelectSubset<T, TurmaFindUniqueArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Turma that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TurmaFindUniqueOrThrowArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TurmaFindUniqueOrThrowArgs>(args: SelectSubset<T, TurmaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Turma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaFindFirstArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TurmaFindFirstArgs>(args?: SelectSubset<T, TurmaFindFirstArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Turma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaFindFirstOrThrowArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TurmaFindFirstOrThrowArgs>(args?: SelectSubset<T, TurmaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Turmas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Turmas
     * const turmas = await prisma.turma.findMany()
     * 
     * // Get first 10 Turmas
     * const turmas = await prisma.turma.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const turmaWithIdOnly = await prisma.turma.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TurmaFindManyArgs>(args?: SelectSubset<T, TurmaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Turma.
     * @param {TurmaCreateArgs} args - Arguments to create a Turma.
     * @example
     * // Create one Turma
     * const Turma = await prisma.turma.create({
     *   data: {
     *     // ... data to create a Turma
     *   }
     * })
     * 
     */
    create<T extends TurmaCreateArgs>(args: SelectSubset<T, TurmaCreateArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Turmas.
     * @param {TurmaCreateManyArgs} args - Arguments to create many Turmas.
     * @example
     * // Create many Turmas
     * const turma = await prisma.turma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TurmaCreateManyArgs>(args?: SelectSubset<T, TurmaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Turmas and returns the data saved in the database.
     * @param {TurmaCreateManyAndReturnArgs} args - Arguments to create many Turmas.
     * @example
     * // Create many Turmas
     * const turma = await prisma.turma.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Turmas and only return the `id`
     * const turmaWithIdOnly = await prisma.turma.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TurmaCreateManyAndReturnArgs>(args?: SelectSubset<T, TurmaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Turma.
     * @param {TurmaDeleteArgs} args - Arguments to delete one Turma.
     * @example
     * // Delete one Turma
     * const Turma = await prisma.turma.delete({
     *   where: {
     *     // ... filter to delete one Turma
     *   }
     * })
     * 
     */
    delete<T extends TurmaDeleteArgs>(args: SelectSubset<T, TurmaDeleteArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Turma.
     * @param {TurmaUpdateArgs} args - Arguments to update one Turma.
     * @example
     * // Update one Turma
     * const turma = await prisma.turma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TurmaUpdateArgs>(args: SelectSubset<T, TurmaUpdateArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Turmas.
     * @param {TurmaDeleteManyArgs} args - Arguments to filter Turmas to delete.
     * @example
     * // Delete a few Turmas
     * const { count } = await prisma.turma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TurmaDeleteManyArgs>(args?: SelectSubset<T, TurmaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Turmas
     * const turma = await prisma.turma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TurmaUpdateManyArgs>(args: SelectSubset<T, TurmaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Turma.
     * @param {TurmaUpsertArgs} args - Arguments to update or create a Turma.
     * @example
     * // Update or create a Turma
     * const turma = await prisma.turma.upsert({
     *   create: {
     *     // ... data to create a Turma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Turma we want to update
     *   }
     * })
     */
    upsert<T extends TurmaUpsertArgs>(args: SelectSubset<T, TurmaUpsertArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaCountArgs} args - Arguments to filter Turmas to count.
     * @example
     * // Count the number of Turmas
     * const count = await prisma.turma.count({
     *   where: {
     *     // ... the filter for the Turmas we want to count
     *   }
     * })
    **/
    count<T extends TurmaCountArgs>(
      args?: Subset<T, TurmaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurmaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Turma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TurmaAggregateArgs>(args: Subset<T, TurmaAggregateArgs>): Prisma.PrismaPromise<GetTurmaAggregateType<T>>

    /**
     * Group by Turma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaGroupByArgs} args - Group by arguments.
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
      T extends TurmaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TurmaGroupByArgs['orderBy'] }
        : { orderBy?: TurmaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TurmaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurmaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Turma model
   */
  readonly fields: TurmaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Turma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TurmaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matricula<T extends MatriculaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatriculaDefaultArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    disciplina<T extends DisciplinasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisciplinasDefaultArgs<ExtArgs>>): Prisma__DisciplinasClient<$Result.GetResult<Prisma.$DisciplinasPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    curso<T extends CursosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursosDefaultArgs<ExtArgs>>): Prisma__CursosClient<$Result.GetResult<Prisma.$CursosPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Chamada<T extends Turma$ChamadaArgs<ExtArgs> = {}>(args?: Subset<T, Turma$ChamadaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChamadaPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Turma model
   */ 
  interface TurmaFieldRefs {
    readonly id: FieldRef<"Turma", 'Int'>
    readonly idMatricula: FieldRef<"Turma", 'Int'>
    readonly idDisciplina: FieldRef<"Turma", 'Int'>
    readonly idCurso: FieldRef<"Turma", 'Int'>
    readonly nomeTurma: FieldRef<"Turma", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Turma findUnique
   */
  export type TurmaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma findUniqueOrThrow
   */
  export type TurmaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma findFirst
   */
  export type TurmaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turmas.
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turmas.
     */
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Turma findFirstOrThrow
   */
  export type TurmaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turmas.
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turmas.
     */
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Turma findMany
   */
  export type TurmaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turmas to fetch.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Turmas.
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Turma create
   */
  export type TurmaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * The data needed to create a Turma.
     */
    data: XOR<TurmaCreateInput, TurmaUncheckedCreateInput>
  }

  /**
   * Turma createMany
   */
  export type TurmaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Turmas.
     */
    data: TurmaCreateManyInput | TurmaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Turma createManyAndReturn
   */
  export type TurmaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Turmas.
     */
    data: TurmaCreateManyInput | TurmaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Turma update
   */
  export type TurmaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * The data needed to update a Turma.
     */
    data: XOR<TurmaUpdateInput, TurmaUncheckedUpdateInput>
    /**
     * Choose, which Turma to update.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma updateMany
   */
  export type TurmaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Turmas.
     */
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyInput>
    /**
     * Filter which Turmas to update
     */
    where?: TurmaWhereInput
  }

  /**
   * Turma upsert
   */
  export type TurmaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * The filter to search for the Turma to update in case it exists.
     */
    where: TurmaWhereUniqueInput
    /**
     * In case the Turma found by the `where` argument doesn't exist, create a new Turma with this data.
     */
    create: XOR<TurmaCreateInput, TurmaUncheckedCreateInput>
    /**
     * In case the Turma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TurmaUpdateInput, TurmaUncheckedUpdateInput>
  }

  /**
   * Turma delete
   */
  export type TurmaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter which Turma to delete.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma deleteMany
   */
  export type TurmaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turmas to delete
     */
    where?: TurmaWhereInput
  }

  /**
   * Turma.Chamada
   */
  export type Turma$ChamadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamada
     */
    select?: ChamadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadaInclude<ExtArgs> | null
    where?: ChamadaWhereInput
    orderBy?: ChamadaOrderByWithRelationInput | ChamadaOrderByWithRelationInput[]
    cursor?: ChamadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChamadaScalarFieldEnum | ChamadaScalarFieldEnum[]
  }

  /**
   * Turma without action
   */
  export type TurmaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
  }


  /**
   * Model Chamada
   */

  export type AggregateChamada = {
    _count: ChamadaCountAggregateOutputType | null
    _avg: ChamadaAvgAggregateOutputType | null
    _sum: ChamadaSumAggregateOutputType | null
    _min: ChamadaMinAggregateOutputType | null
    _max: ChamadaMaxAggregateOutputType | null
  }

  export type ChamadaAvgAggregateOutputType = {
    id: number | null
    idTurma: number | null
    idAtividadeSala: number | null
  }

  export type ChamadaSumAggregateOutputType = {
    id: number | null
    idTurma: number | null
    idAtividadeSala: number | null
  }

  export type ChamadaMinAggregateOutputType = {
    id: number | null
    idTurma: number | null
    idAtividadeSala: number | null
    presenca: string | null
  }

  export type ChamadaMaxAggregateOutputType = {
    id: number | null
    idTurma: number | null
    idAtividadeSala: number | null
    presenca: string | null
  }

  export type ChamadaCountAggregateOutputType = {
    id: number
    idTurma: number
    idAtividadeSala: number
    presenca: number
    _all: number
  }


  export type ChamadaAvgAggregateInputType = {
    id?: true
    idTurma?: true
    idAtividadeSala?: true
  }

  export type ChamadaSumAggregateInputType = {
    id?: true
    idTurma?: true
    idAtividadeSala?: true
  }

  export type ChamadaMinAggregateInputType = {
    id?: true
    idTurma?: true
    idAtividadeSala?: true
    presenca?: true
  }

  export type ChamadaMaxAggregateInputType = {
    id?: true
    idTurma?: true
    idAtividadeSala?: true
    presenca?: true
  }

  export type ChamadaCountAggregateInputType = {
    id?: true
    idTurma?: true
    idAtividadeSala?: true
    presenca?: true
    _all?: true
  }

  export type ChamadaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chamada to aggregate.
     */
    where?: ChamadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chamadas to fetch.
     */
    orderBy?: ChamadaOrderByWithRelationInput | ChamadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChamadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chamadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chamadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chamadas
    **/
    _count?: true | ChamadaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChamadaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChamadaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChamadaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChamadaMaxAggregateInputType
  }

  export type GetChamadaAggregateType<T extends ChamadaAggregateArgs> = {
        [P in keyof T & keyof AggregateChamada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChamada[P]>
      : GetScalarType<T[P], AggregateChamada[P]>
  }




  export type ChamadaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChamadaWhereInput
    orderBy?: ChamadaOrderByWithAggregationInput | ChamadaOrderByWithAggregationInput[]
    by: ChamadaScalarFieldEnum[] | ChamadaScalarFieldEnum
    having?: ChamadaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChamadaCountAggregateInputType | true
    _avg?: ChamadaAvgAggregateInputType
    _sum?: ChamadaSumAggregateInputType
    _min?: ChamadaMinAggregateInputType
    _max?: ChamadaMaxAggregateInputType
  }

  export type ChamadaGroupByOutputType = {
    id: number
    idTurma: number
    idAtividadeSala: number
    presenca: string
    _count: ChamadaCountAggregateOutputType | null
    _avg: ChamadaAvgAggregateOutputType | null
    _sum: ChamadaSumAggregateOutputType | null
    _min: ChamadaMinAggregateOutputType | null
    _max: ChamadaMaxAggregateOutputType | null
  }

  type GetChamadaGroupByPayload<T extends ChamadaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChamadaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChamadaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChamadaGroupByOutputType[P]>
            : GetScalarType<T[P], ChamadaGroupByOutputType[P]>
        }
      >
    >


  export type ChamadaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idTurma?: boolean
    idAtividadeSala?: boolean
    presenca?: boolean
    turma?: boolean | TurmaDefaultArgs<ExtArgs>
    atividadeSala?: boolean | AtividadeSalaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chamada"]>

  export type ChamadaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idTurma?: boolean
    idAtividadeSala?: boolean
    presenca?: boolean
    turma?: boolean | TurmaDefaultArgs<ExtArgs>
    atividadeSala?: boolean | AtividadeSalaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chamada"]>

  export type ChamadaSelectScalar = {
    id?: boolean
    idTurma?: boolean
    idAtividadeSala?: boolean
    presenca?: boolean
  }

  export type ChamadaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turma?: boolean | TurmaDefaultArgs<ExtArgs>
    atividadeSala?: boolean | AtividadeSalaDefaultArgs<ExtArgs>
  }
  export type ChamadaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turma?: boolean | TurmaDefaultArgs<ExtArgs>
    atividadeSala?: boolean | AtividadeSalaDefaultArgs<ExtArgs>
  }

  export type $ChamadaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chamada"
    objects: {
      turma: Prisma.$TurmaPayload<ExtArgs>
      atividadeSala: Prisma.$AtividadeSalaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idTurma: number
      idAtividadeSala: number
      presenca: string
    }, ExtArgs["result"]["chamada"]>
    composites: {}
  }

  type ChamadaGetPayload<S extends boolean | null | undefined | ChamadaDefaultArgs> = $Result.GetResult<Prisma.$ChamadaPayload, S>

  type ChamadaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChamadaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChamadaCountAggregateInputType | true
    }

  export interface ChamadaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chamada'], meta: { name: 'Chamada' } }
    /**
     * Find zero or one Chamada that matches the filter.
     * @param {ChamadaFindUniqueArgs} args - Arguments to find a Chamada
     * @example
     * // Get one Chamada
     * const chamada = await prisma.chamada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChamadaFindUniqueArgs>(args: SelectSubset<T, ChamadaFindUniqueArgs<ExtArgs>>): Prisma__ChamadaClient<$Result.GetResult<Prisma.$ChamadaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Chamada that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChamadaFindUniqueOrThrowArgs} args - Arguments to find a Chamada
     * @example
     * // Get one Chamada
     * const chamada = await prisma.chamada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChamadaFindUniqueOrThrowArgs>(args: SelectSubset<T, ChamadaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChamadaClient<$Result.GetResult<Prisma.$ChamadaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Chamada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadaFindFirstArgs} args - Arguments to find a Chamada
     * @example
     * // Get one Chamada
     * const chamada = await prisma.chamada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChamadaFindFirstArgs>(args?: SelectSubset<T, ChamadaFindFirstArgs<ExtArgs>>): Prisma__ChamadaClient<$Result.GetResult<Prisma.$ChamadaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Chamada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadaFindFirstOrThrowArgs} args - Arguments to find a Chamada
     * @example
     * // Get one Chamada
     * const chamada = await prisma.chamada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChamadaFindFirstOrThrowArgs>(args?: SelectSubset<T, ChamadaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChamadaClient<$Result.GetResult<Prisma.$ChamadaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Chamadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chamadas
     * const chamadas = await prisma.chamada.findMany()
     * 
     * // Get first 10 Chamadas
     * const chamadas = await prisma.chamada.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chamadaWithIdOnly = await prisma.chamada.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChamadaFindManyArgs>(args?: SelectSubset<T, ChamadaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChamadaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Chamada.
     * @param {ChamadaCreateArgs} args - Arguments to create a Chamada.
     * @example
     * // Create one Chamada
     * const Chamada = await prisma.chamada.create({
     *   data: {
     *     // ... data to create a Chamada
     *   }
     * })
     * 
     */
    create<T extends ChamadaCreateArgs>(args: SelectSubset<T, ChamadaCreateArgs<ExtArgs>>): Prisma__ChamadaClient<$Result.GetResult<Prisma.$ChamadaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Chamadas.
     * @param {ChamadaCreateManyArgs} args - Arguments to create many Chamadas.
     * @example
     * // Create many Chamadas
     * const chamada = await prisma.chamada.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChamadaCreateManyArgs>(args?: SelectSubset<T, ChamadaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chamadas and returns the data saved in the database.
     * @param {ChamadaCreateManyAndReturnArgs} args - Arguments to create many Chamadas.
     * @example
     * // Create many Chamadas
     * const chamada = await prisma.chamada.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chamadas and only return the `id`
     * const chamadaWithIdOnly = await prisma.chamada.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChamadaCreateManyAndReturnArgs>(args?: SelectSubset<T, ChamadaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChamadaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Chamada.
     * @param {ChamadaDeleteArgs} args - Arguments to delete one Chamada.
     * @example
     * // Delete one Chamada
     * const Chamada = await prisma.chamada.delete({
     *   where: {
     *     // ... filter to delete one Chamada
     *   }
     * })
     * 
     */
    delete<T extends ChamadaDeleteArgs>(args: SelectSubset<T, ChamadaDeleteArgs<ExtArgs>>): Prisma__ChamadaClient<$Result.GetResult<Prisma.$ChamadaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Chamada.
     * @param {ChamadaUpdateArgs} args - Arguments to update one Chamada.
     * @example
     * // Update one Chamada
     * const chamada = await prisma.chamada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChamadaUpdateArgs>(args: SelectSubset<T, ChamadaUpdateArgs<ExtArgs>>): Prisma__ChamadaClient<$Result.GetResult<Prisma.$ChamadaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Chamadas.
     * @param {ChamadaDeleteManyArgs} args - Arguments to filter Chamadas to delete.
     * @example
     * // Delete a few Chamadas
     * const { count } = await prisma.chamada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChamadaDeleteManyArgs>(args?: SelectSubset<T, ChamadaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chamadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chamadas
     * const chamada = await prisma.chamada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChamadaUpdateManyArgs>(args: SelectSubset<T, ChamadaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chamada.
     * @param {ChamadaUpsertArgs} args - Arguments to update or create a Chamada.
     * @example
     * // Update or create a Chamada
     * const chamada = await prisma.chamada.upsert({
     *   create: {
     *     // ... data to create a Chamada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chamada we want to update
     *   }
     * })
     */
    upsert<T extends ChamadaUpsertArgs>(args: SelectSubset<T, ChamadaUpsertArgs<ExtArgs>>): Prisma__ChamadaClient<$Result.GetResult<Prisma.$ChamadaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Chamadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadaCountArgs} args - Arguments to filter Chamadas to count.
     * @example
     * // Count the number of Chamadas
     * const count = await prisma.chamada.count({
     *   where: {
     *     // ... the filter for the Chamadas we want to count
     *   }
     * })
    **/
    count<T extends ChamadaCountArgs>(
      args?: Subset<T, ChamadaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChamadaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chamada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChamadaAggregateArgs>(args: Subset<T, ChamadaAggregateArgs>): Prisma.PrismaPromise<GetChamadaAggregateType<T>>

    /**
     * Group by Chamada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadaGroupByArgs} args - Group by arguments.
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
      T extends ChamadaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChamadaGroupByArgs['orderBy'] }
        : { orderBy?: ChamadaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChamadaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChamadaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chamada model
   */
  readonly fields: ChamadaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chamada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChamadaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    turma<T extends TurmaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TurmaDefaultArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    atividadeSala<T extends AtividadeSalaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AtividadeSalaDefaultArgs<ExtArgs>>): Prisma__AtividadeSalaClient<$Result.GetResult<Prisma.$AtividadeSalaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Chamada model
   */ 
  interface ChamadaFieldRefs {
    readonly id: FieldRef<"Chamada", 'Int'>
    readonly idTurma: FieldRef<"Chamada", 'Int'>
    readonly idAtividadeSala: FieldRef<"Chamada", 'Int'>
    readonly presenca: FieldRef<"Chamada", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Chamada findUnique
   */
  export type ChamadaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamada
     */
    select?: ChamadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadaInclude<ExtArgs> | null
    /**
     * Filter, which Chamada to fetch.
     */
    where: ChamadaWhereUniqueInput
  }

  /**
   * Chamada findUniqueOrThrow
   */
  export type ChamadaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamada
     */
    select?: ChamadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadaInclude<ExtArgs> | null
    /**
     * Filter, which Chamada to fetch.
     */
    where: ChamadaWhereUniqueInput
  }

  /**
   * Chamada findFirst
   */
  export type ChamadaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamada
     */
    select?: ChamadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadaInclude<ExtArgs> | null
    /**
     * Filter, which Chamada to fetch.
     */
    where?: ChamadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chamadas to fetch.
     */
    orderBy?: ChamadaOrderByWithRelationInput | ChamadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chamadas.
     */
    cursor?: ChamadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chamadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chamadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chamadas.
     */
    distinct?: ChamadaScalarFieldEnum | ChamadaScalarFieldEnum[]
  }

  /**
   * Chamada findFirstOrThrow
   */
  export type ChamadaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamada
     */
    select?: ChamadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadaInclude<ExtArgs> | null
    /**
     * Filter, which Chamada to fetch.
     */
    where?: ChamadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chamadas to fetch.
     */
    orderBy?: ChamadaOrderByWithRelationInput | ChamadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chamadas.
     */
    cursor?: ChamadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chamadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chamadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chamadas.
     */
    distinct?: ChamadaScalarFieldEnum | ChamadaScalarFieldEnum[]
  }

  /**
   * Chamada findMany
   */
  export type ChamadaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamada
     */
    select?: ChamadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadaInclude<ExtArgs> | null
    /**
     * Filter, which Chamadas to fetch.
     */
    where?: ChamadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chamadas to fetch.
     */
    orderBy?: ChamadaOrderByWithRelationInput | ChamadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chamadas.
     */
    cursor?: ChamadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chamadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chamadas.
     */
    skip?: number
    distinct?: ChamadaScalarFieldEnum | ChamadaScalarFieldEnum[]
  }

  /**
   * Chamada create
   */
  export type ChamadaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamada
     */
    select?: ChamadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadaInclude<ExtArgs> | null
    /**
     * The data needed to create a Chamada.
     */
    data: XOR<ChamadaCreateInput, ChamadaUncheckedCreateInput>
  }

  /**
   * Chamada createMany
   */
  export type ChamadaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chamadas.
     */
    data: ChamadaCreateManyInput | ChamadaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chamada createManyAndReturn
   */
  export type ChamadaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamada
     */
    select?: ChamadaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Chamadas.
     */
    data: ChamadaCreateManyInput | ChamadaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chamada update
   */
  export type ChamadaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamada
     */
    select?: ChamadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadaInclude<ExtArgs> | null
    /**
     * The data needed to update a Chamada.
     */
    data: XOR<ChamadaUpdateInput, ChamadaUncheckedUpdateInput>
    /**
     * Choose, which Chamada to update.
     */
    where: ChamadaWhereUniqueInput
  }

  /**
   * Chamada updateMany
   */
  export type ChamadaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chamadas.
     */
    data: XOR<ChamadaUpdateManyMutationInput, ChamadaUncheckedUpdateManyInput>
    /**
     * Filter which Chamadas to update
     */
    where?: ChamadaWhereInput
  }

  /**
   * Chamada upsert
   */
  export type ChamadaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamada
     */
    select?: ChamadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadaInclude<ExtArgs> | null
    /**
     * The filter to search for the Chamada to update in case it exists.
     */
    where: ChamadaWhereUniqueInput
    /**
     * In case the Chamada found by the `where` argument doesn't exist, create a new Chamada with this data.
     */
    create: XOR<ChamadaCreateInput, ChamadaUncheckedCreateInput>
    /**
     * In case the Chamada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChamadaUpdateInput, ChamadaUncheckedUpdateInput>
  }

  /**
   * Chamada delete
   */
  export type ChamadaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamada
     */
    select?: ChamadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadaInclude<ExtArgs> | null
    /**
     * Filter which Chamada to delete.
     */
    where: ChamadaWhereUniqueInput
  }

  /**
   * Chamada deleteMany
   */
  export type ChamadaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chamadas to delete
     */
    where?: ChamadaWhereInput
  }

  /**
   * Chamada without action
   */
  export type ChamadaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamada
     */
    select?: ChamadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadaInclude<ExtArgs> | null
  }


  /**
   * Model AtividadeSala
   */

  export type AggregateAtividadeSala = {
    _count: AtividadeSalaCountAggregateOutputType | null
    _avg: AtividadeSalaAvgAggregateOutputType | null
    _sum: AtividadeSalaSumAggregateOutputType | null
    _min: AtividadeSalaMinAggregateOutputType | null
    _max: AtividadeSalaMaxAggregateOutputType | null
  }

  export type AtividadeSalaAvgAggregateOutputType = {
    id: number | null
  }

  export type AtividadeSalaSumAggregateOutputType = {
    id: number | null
  }

  export type AtividadeSalaMinAggregateOutputType = {
    id: number | null
    descricao: string | null
  }

  export type AtividadeSalaMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
  }

  export type AtividadeSalaCountAggregateOutputType = {
    id: number
    descricao: number
    _all: number
  }


  export type AtividadeSalaAvgAggregateInputType = {
    id?: true
  }

  export type AtividadeSalaSumAggregateInputType = {
    id?: true
  }

  export type AtividadeSalaMinAggregateInputType = {
    id?: true
    descricao?: true
  }

  export type AtividadeSalaMaxAggregateInputType = {
    id?: true
    descricao?: true
  }

  export type AtividadeSalaCountAggregateInputType = {
    id?: true
    descricao?: true
    _all?: true
  }

  export type AtividadeSalaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AtividadeSala to aggregate.
     */
    where?: AtividadeSalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtividadeSalas to fetch.
     */
    orderBy?: AtividadeSalaOrderByWithRelationInput | AtividadeSalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtividadeSalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtividadeSalas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtividadeSalas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AtividadeSalas
    **/
    _count?: true | AtividadeSalaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtividadeSalaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtividadeSalaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtividadeSalaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtividadeSalaMaxAggregateInputType
  }

  export type GetAtividadeSalaAggregateType<T extends AtividadeSalaAggregateArgs> = {
        [P in keyof T & keyof AggregateAtividadeSala]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtividadeSala[P]>
      : GetScalarType<T[P], AggregateAtividadeSala[P]>
  }




  export type AtividadeSalaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtividadeSalaWhereInput
    orderBy?: AtividadeSalaOrderByWithAggregationInput | AtividadeSalaOrderByWithAggregationInput[]
    by: AtividadeSalaScalarFieldEnum[] | AtividadeSalaScalarFieldEnum
    having?: AtividadeSalaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtividadeSalaCountAggregateInputType | true
    _avg?: AtividadeSalaAvgAggregateInputType
    _sum?: AtividadeSalaSumAggregateInputType
    _min?: AtividadeSalaMinAggregateInputType
    _max?: AtividadeSalaMaxAggregateInputType
  }

  export type AtividadeSalaGroupByOutputType = {
    id: number
    descricao: string
    _count: AtividadeSalaCountAggregateOutputType | null
    _avg: AtividadeSalaAvgAggregateOutputType | null
    _sum: AtividadeSalaSumAggregateOutputType | null
    _min: AtividadeSalaMinAggregateOutputType | null
    _max: AtividadeSalaMaxAggregateOutputType | null
  }

  type GetAtividadeSalaGroupByPayload<T extends AtividadeSalaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtividadeSalaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtividadeSalaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtividadeSalaGroupByOutputType[P]>
            : GetScalarType<T[P], AtividadeSalaGroupByOutputType[P]>
        }
      >
    >


  export type AtividadeSalaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    Chamada?: boolean | AtividadeSala$ChamadaArgs<ExtArgs>
    _count?: boolean | AtividadeSalaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atividadeSala"]>

  export type AtividadeSalaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["atividadeSala"]>

  export type AtividadeSalaSelectScalar = {
    id?: boolean
    descricao?: boolean
  }

  export type AtividadeSalaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chamada?: boolean | AtividadeSala$ChamadaArgs<ExtArgs>
    _count?: boolean | AtividadeSalaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AtividadeSalaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AtividadeSalaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AtividadeSala"
    objects: {
      Chamada: Prisma.$ChamadaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string
    }, ExtArgs["result"]["atividadeSala"]>
    composites: {}
  }

  type AtividadeSalaGetPayload<S extends boolean | null | undefined | AtividadeSalaDefaultArgs> = $Result.GetResult<Prisma.$AtividadeSalaPayload, S>

  type AtividadeSalaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AtividadeSalaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AtividadeSalaCountAggregateInputType | true
    }

  export interface AtividadeSalaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AtividadeSala'], meta: { name: 'AtividadeSala' } }
    /**
     * Find zero or one AtividadeSala that matches the filter.
     * @param {AtividadeSalaFindUniqueArgs} args - Arguments to find a AtividadeSala
     * @example
     * // Get one AtividadeSala
     * const atividadeSala = await prisma.atividadeSala.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtividadeSalaFindUniqueArgs>(args: SelectSubset<T, AtividadeSalaFindUniqueArgs<ExtArgs>>): Prisma__AtividadeSalaClient<$Result.GetResult<Prisma.$AtividadeSalaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AtividadeSala that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AtividadeSalaFindUniqueOrThrowArgs} args - Arguments to find a AtividadeSala
     * @example
     * // Get one AtividadeSala
     * const atividadeSala = await prisma.atividadeSala.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtividadeSalaFindUniqueOrThrowArgs>(args: SelectSubset<T, AtividadeSalaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtividadeSalaClient<$Result.GetResult<Prisma.$AtividadeSalaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AtividadeSala that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeSalaFindFirstArgs} args - Arguments to find a AtividadeSala
     * @example
     * // Get one AtividadeSala
     * const atividadeSala = await prisma.atividadeSala.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtividadeSalaFindFirstArgs>(args?: SelectSubset<T, AtividadeSalaFindFirstArgs<ExtArgs>>): Prisma__AtividadeSalaClient<$Result.GetResult<Prisma.$AtividadeSalaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AtividadeSala that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeSalaFindFirstOrThrowArgs} args - Arguments to find a AtividadeSala
     * @example
     * // Get one AtividadeSala
     * const atividadeSala = await prisma.atividadeSala.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtividadeSalaFindFirstOrThrowArgs>(args?: SelectSubset<T, AtividadeSalaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtividadeSalaClient<$Result.GetResult<Prisma.$AtividadeSalaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AtividadeSalas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeSalaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AtividadeSalas
     * const atividadeSalas = await prisma.atividadeSala.findMany()
     * 
     * // Get first 10 AtividadeSalas
     * const atividadeSalas = await prisma.atividadeSala.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atividadeSalaWithIdOnly = await prisma.atividadeSala.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtividadeSalaFindManyArgs>(args?: SelectSubset<T, AtividadeSalaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadeSalaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AtividadeSala.
     * @param {AtividadeSalaCreateArgs} args - Arguments to create a AtividadeSala.
     * @example
     * // Create one AtividadeSala
     * const AtividadeSala = await prisma.atividadeSala.create({
     *   data: {
     *     // ... data to create a AtividadeSala
     *   }
     * })
     * 
     */
    create<T extends AtividadeSalaCreateArgs>(args: SelectSubset<T, AtividadeSalaCreateArgs<ExtArgs>>): Prisma__AtividadeSalaClient<$Result.GetResult<Prisma.$AtividadeSalaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AtividadeSalas.
     * @param {AtividadeSalaCreateManyArgs} args - Arguments to create many AtividadeSalas.
     * @example
     * // Create many AtividadeSalas
     * const atividadeSala = await prisma.atividadeSala.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtividadeSalaCreateManyArgs>(args?: SelectSubset<T, AtividadeSalaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AtividadeSalas and returns the data saved in the database.
     * @param {AtividadeSalaCreateManyAndReturnArgs} args - Arguments to create many AtividadeSalas.
     * @example
     * // Create many AtividadeSalas
     * const atividadeSala = await prisma.atividadeSala.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AtividadeSalas and only return the `id`
     * const atividadeSalaWithIdOnly = await prisma.atividadeSala.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AtividadeSalaCreateManyAndReturnArgs>(args?: SelectSubset<T, AtividadeSalaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadeSalaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AtividadeSala.
     * @param {AtividadeSalaDeleteArgs} args - Arguments to delete one AtividadeSala.
     * @example
     * // Delete one AtividadeSala
     * const AtividadeSala = await prisma.atividadeSala.delete({
     *   where: {
     *     // ... filter to delete one AtividadeSala
     *   }
     * })
     * 
     */
    delete<T extends AtividadeSalaDeleteArgs>(args: SelectSubset<T, AtividadeSalaDeleteArgs<ExtArgs>>): Prisma__AtividadeSalaClient<$Result.GetResult<Prisma.$AtividadeSalaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AtividadeSala.
     * @param {AtividadeSalaUpdateArgs} args - Arguments to update one AtividadeSala.
     * @example
     * // Update one AtividadeSala
     * const atividadeSala = await prisma.atividadeSala.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtividadeSalaUpdateArgs>(args: SelectSubset<T, AtividadeSalaUpdateArgs<ExtArgs>>): Prisma__AtividadeSalaClient<$Result.GetResult<Prisma.$AtividadeSalaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AtividadeSalas.
     * @param {AtividadeSalaDeleteManyArgs} args - Arguments to filter AtividadeSalas to delete.
     * @example
     * // Delete a few AtividadeSalas
     * const { count } = await prisma.atividadeSala.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtividadeSalaDeleteManyArgs>(args?: SelectSubset<T, AtividadeSalaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AtividadeSalas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeSalaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AtividadeSalas
     * const atividadeSala = await prisma.atividadeSala.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtividadeSalaUpdateManyArgs>(args: SelectSubset<T, AtividadeSalaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AtividadeSala.
     * @param {AtividadeSalaUpsertArgs} args - Arguments to update or create a AtividadeSala.
     * @example
     * // Update or create a AtividadeSala
     * const atividadeSala = await prisma.atividadeSala.upsert({
     *   create: {
     *     // ... data to create a AtividadeSala
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AtividadeSala we want to update
     *   }
     * })
     */
    upsert<T extends AtividadeSalaUpsertArgs>(args: SelectSubset<T, AtividadeSalaUpsertArgs<ExtArgs>>): Prisma__AtividadeSalaClient<$Result.GetResult<Prisma.$AtividadeSalaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AtividadeSalas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeSalaCountArgs} args - Arguments to filter AtividadeSalas to count.
     * @example
     * // Count the number of AtividadeSalas
     * const count = await prisma.atividadeSala.count({
     *   where: {
     *     // ... the filter for the AtividadeSalas we want to count
     *   }
     * })
    **/
    count<T extends AtividadeSalaCountArgs>(
      args?: Subset<T, AtividadeSalaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtividadeSalaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AtividadeSala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeSalaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AtividadeSalaAggregateArgs>(args: Subset<T, AtividadeSalaAggregateArgs>): Prisma.PrismaPromise<GetAtividadeSalaAggregateType<T>>

    /**
     * Group by AtividadeSala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeSalaGroupByArgs} args - Group by arguments.
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
      T extends AtividadeSalaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtividadeSalaGroupByArgs['orderBy'] }
        : { orderBy?: AtividadeSalaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AtividadeSalaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtividadeSalaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AtividadeSala model
   */
  readonly fields: AtividadeSalaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AtividadeSala.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtividadeSalaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Chamada<T extends AtividadeSala$ChamadaArgs<ExtArgs> = {}>(args?: Subset<T, AtividadeSala$ChamadaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChamadaPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the AtividadeSala model
   */ 
  interface AtividadeSalaFieldRefs {
    readonly id: FieldRef<"AtividadeSala", 'Int'>
    readonly descricao: FieldRef<"AtividadeSala", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AtividadeSala findUnique
   */
  export type AtividadeSalaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeSala
     */
    select?: AtividadeSalaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeSalaInclude<ExtArgs> | null
    /**
     * Filter, which AtividadeSala to fetch.
     */
    where: AtividadeSalaWhereUniqueInput
  }

  /**
   * AtividadeSala findUniqueOrThrow
   */
  export type AtividadeSalaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeSala
     */
    select?: AtividadeSalaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeSalaInclude<ExtArgs> | null
    /**
     * Filter, which AtividadeSala to fetch.
     */
    where: AtividadeSalaWhereUniqueInput
  }

  /**
   * AtividadeSala findFirst
   */
  export type AtividadeSalaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeSala
     */
    select?: AtividadeSalaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeSalaInclude<ExtArgs> | null
    /**
     * Filter, which AtividadeSala to fetch.
     */
    where?: AtividadeSalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtividadeSalas to fetch.
     */
    orderBy?: AtividadeSalaOrderByWithRelationInput | AtividadeSalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AtividadeSalas.
     */
    cursor?: AtividadeSalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtividadeSalas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtividadeSalas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtividadeSalas.
     */
    distinct?: AtividadeSalaScalarFieldEnum | AtividadeSalaScalarFieldEnum[]
  }

  /**
   * AtividadeSala findFirstOrThrow
   */
  export type AtividadeSalaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeSala
     */
    select?: AtividadeSalaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeSalaInclude<ExtArgs> | null
    /**
     * Filter, which AtividadeSala to fetch.
     */
    where?: AtividadeSalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtividadeSalas to fetch.
     */
    orderBy?: AtividadeSalaOrderByWithRelationInput | AtividadeSalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AtividadeSalas.
     */
    cursor?: AtividadeSalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtividadeSalas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtividadeSalas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtividadeSalas.
     */
    distinct?: AtividadeSalaScalarFieldEnum | AtividadeSalaScalarFieldEnum[]
  }

  /**
   * AtividadeSala findMany
   */
  export type AtividadeSalaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeSala
     */
    select?: AtividadeSalaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeSalaInclude<ExtArgs> | null
    /**
     * Filter, which AtividadeSalas to fetch.
     */
    where?: AtividadeSalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtividadeSalas to fetch.
     */
    orderBy?: AtividadeSalaOrderByWithRelationInput | AtividadeSalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AtividadeSalas.
     */
    cursor?: AtividadeSalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtividadeSalas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtividadeSalas.
     */
    skip?: number
    distinct?: AtividadeSalaScalarFieldEnum | AtividadeSalaScalarFieldEnum[]
  }

  /**
   * AtividadeSala create
   */
  export type AtividadeSalaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeSala
     */
    select?: AtividadeSalaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeSalaInclude<ExtArgs> | null
    /**
     * The data needed to create a AtividadeSala.
     */
    data: XOR<AtividadeSalaCreateInput, AtividadeSalaUncheckedCreateInput>
  }

  /**
   * AtividadeSala createMany
   */
  export type AtividadeSalaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AtividadeSalas.
     */
    data: AtividadeSalaCreateManyInput | AtividadeSalaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AtividadeSala createManyAndReturn
   */
  export type AtividadeSalaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeSala
     */
    select?: AtividadeSalaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AtividadeSalas.
     */
    data: AtividadeSalaCreateManyInput | AtividadeSalaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AtividadeSala update
   */
  export type AtividadeSalaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeSala
     */
    select?: AtividadeSalaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeSalaInclude<ExtArgs> | null
    /**
     * The data needed to update a AtividadeSala.
     */
    data: XOR<AtividadeSalaUpdateInput, AtividadeSalaUncheckedUpdateInput>
    /**
     * Choose, which AtividadeSala to update.
     */
    where: AtividadeSalaWhereUniqueInput
  }

  /**
   * AtividadeSala updateMany
   */
  export type AtividadeSalaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AtividadeSalas.
     */
    data: XOR<AtividadeSalaUpdateManyMutationInput, AtividadeSalaUncheckedUpdateManyInput>
    /**
     * Filter which AtividadeSalas to update
     */
    where?: AtividadeSalaWhereInput
  }

  /**
   * AtividadeSala upsert
   */
  export type AtividadeSalaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeSala
     */
    select?: AtividadeSalaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeSalaInclude<ExtArgs> | null
    /**
     * The filter to search for the AtividadeSala to update in case it exists.
     */
    where: AtividadeSalaWhereUniqueInput
    /**
     * In case the AtividadeSala found by the `where` argument doesn't exist, create a new AtividadeSala with this data.
     */
    create: XOR<AtividadeSalaCreateInput, AtividadeSalaUncheckedCreateInput>
    /**
     * In case the AtividadeSala was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtividadeSalaUpdateInput, AtividadeSalaUncheckedUpdateInput>
  }

  /**
   * AtividadeSala delete
   */
  export type AtividadeSalaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeSala
     */
    select?: AtividadeSalaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeSalaInclude<ExtArgs> | null
    /**
     * Filter which AtividadeSala to delete.
     */
    where: AtividadeSalaWhereUniqueInput
  }

  /**
   * AtividadeSala deleteMany
   */
  export type AtividadeSalaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AtividadeSalas to delete
     */
    where?: AtividadeSalaWhereInput
  }

  /**
   * AtividadeSala.Chamada
   */
  export type AtividadeSala$ChamadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamada
     */
    select?: ChamadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadaInclude<ExtArgs> | null
    where?: ChamadaWhereInput
    orderBy?: ChamadaOrderByWithRelationInput | ChamadaOrderByWithRelationInput[]
    cursor?: ChamadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChamadaScalarFieldEnum | ChamadaScalarFieldEnum[]
  }

  /**
   * AtividadeSala without action
   */
  export type AtividadeSalaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeSala
     */
    select?: AtividadeSalaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeSalaInclude<ExtArgs> | null
  }


  /**
   * Model AtividadeExtraSala
   */

  export type AggregateAtividadeExtraSala = {
    _count: AtividadeExtraSalaCountAggregateOutputType | null
    _avg: AtividadeExtraSalaAvgAggregateOutputType | null
    _sum: AtividadeExtraSalaSumAggregateOutputType | null
    _min: AtividadeExtraSalaMinAggregateOutputType | null
    _max: AtividadeExtraSalaMaxAggregateOutputType | null
  }

  export type AtividadeExtraSalaAvgAggregateOutputType = {
    id: number | null
  }

  export type AtividadeExtraSalaSumAggregateOutputType = {
    id: number | null
  }

  export type AtividadeExtraSalaMinAggregateOutputType = {
    id: number | null
    descricao: string | null
    dataAtividade: Date | null
  }

  export type AtividadeExtraSalaMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
    dataAtividade: Date | null
  }

  export type AtividadeExtraSalaCountAggregateOutputType = {
    id: number
    descricao: number
    dataAtividade: number
    _all: number
  }


  export type AtividadeExtraSalaAvgAggregateInputType = {
    id?: true
  }

  export type AtividadeExtraSalaSumAggregateInputType = {
    id?: true
  }

  export type AtividadeExtraSalaMinAggregateInputType = {
    id?: true
    descricao?: true
    dataAtividade?: true
  }

  export type AtividadeExtraSalaMaxAggregateInputType = {
    id?: true
    descricao?: true
    dataAtividade?: true
  }

  export type AtividadeExtraSalaCountAggregateInputType = {
    id?: true
    descricao?: true
    dataAtividade?: true
    _all?: true
  }

  export type AtividadeExtraSalaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AtividadeExtraSala to aggregate.
     */
    where?: AtividadeExtraSalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtividadeExtraSalas to fetch.
     */
    orderBy?: AtividadeExtraSalaOrderByWithRelationInput | AtividadeExtraSalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtividadeExtraSalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtividadeExtraSalas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtividadeExtraSalas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AtividadeExtraSalas
    **/
    _count?: true | AtividadeExtraSalaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtividadeExtraSalaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtividadeExtraSalaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtividadeExtraSalaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtividadeExtraSalaMaxAggregateInputType
  }

  export type GetAtividadeExtraSalaAggregateType<T extends AtividadeExtraSalaAggregateArgs> = {
        [P in keyof T & keyof AggregateAtividadeExtraSala]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtividadeExtraSala[P]>
      : GetScalarType<T[P], AggregateAtividadeExtraSala[P]>
  }




  export type AtividadeExtraSalaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtividadeExtraSalaWhereInput
    orderBy?: AtividadeExtraSalaOrderByWithAggregationInput | AtividadeExtraSalaOrderByWithAggregationInput[]
    by: AtividadeExtraSalaScalarFieldEnum[] | AtividadeExtraSalaScalarFieldEnum
    having?: AtividadeExtraSalaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtividadeExtraSalaCountAggregateInputType | true
    _avg?: AtividadeExtraSalaAvgAggregateInputType
    _sum?: AtividadeExtraSalaSumAggregateInputType
    _min?: AtividadeExtraSalaMinAggregateInputType
    _max?: AtividadeExtraSalaMaxAggregateInputType
  }

  export type AtividadeExtraSalaGroupByOutputType = {
    id: number
    descricao: string
    dataAtividade: Date
    _count: AtividadeExtraSalaCountAggregateOutputType | null
    _avg: AtividadeExtraSalaAvgAggregateOutputType | null
    _sum: AtividadeExtraSalaSumAggregateOutputType | null
    _min: AtividadeExtraSalaMinAggregateOutputType | null
    _max: AtividadeExtraSalaMaxAggregateOutputType | null
  }

  type GetAtividadeExtraSalaGroupByPayload<T extends AtividadeExtraSalaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtividadeExtraSalaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtividadeExtraSalaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtividadeExtraSalaGroupByOutputType[P]>
            : GetScalarType<T[P], AtividadeExtraSalaGroupByOutputType[P]>
        }
      >
    >


  export type AtividadeExtraSalaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    dataAtividade?: boolean
  }, ExtArgs["result"]["atividadeExtraSala"]>

  export type AtividadeExtraSalaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    dataAtividade?: boolean
  }, ExtArgs["result"]["atividadeExtraSala"]>

  export type AtividadeExtraSalaSelectScalar = {
    id?: boolean
    descricao?: boolean
    dataAtividade?: boolean
  }


  export type $AtividadeExtraSalaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AtividadeExtraSala"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string
      dataAtividade: Date
    }, ExtArgs["result"]["atividadeExtraSala"]>
    composites: {}
  }

  type AtividadeExtraSalaGetPayload<S extends boolean | null | undefined | AtividadeExtraSalaDefaultArgs> = $Result.GetResult<Prisma.$AtividadeExtraSalaPayload, S>

  type AtividadeExtraSalaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AtividadeExtraSalaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AtividadeExtraSalaCountAggregateInputType | true
    }

  export interface AtividadeExtraSalaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AtividadeExtraSala'], meta: { name: 'AtividadeExtraSala' } }
    /**
     * Find zero or one AtividadeExtraSala that matches the filter.
     * @param {AtividadeExtraSalaFindUniqueArgs} args - Arguments to find a AtividadeExtraSala
     * @example
     * // Get one AtividadeExtraSala
     * const atividadeExtraSala = await prisma.atividadeExtraSala.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtividadeExtraSalaFindUniqueArgs>(args: SelectSubset<T, AtividadeExtraSalaFindUniqueArgs<ExtArgs>>): Prisma__AtividadeExtraSalaClient<$Result.GetResult<Prisma.$AtividadeExtraSalaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AtividadeExtraSala that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AtividadeExtraSalaFindUniqueOrThrowArgs} args - Arguments to find a AtividadeExtraSala
     * @example
     * // Get one AtividadeExtraSala
     * const atividadeExtraSala = await prisma.atividadeExtraSala.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtividadeExtraSalaFindUniqueOrThrowArgs>(args: SelectSubset<T, AtividadeExtraSalaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtividadeExtraSalaClient<$Result.GetResult<Prisma.$AtividadeExtraSalaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AtividadeExtraSala that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeExtraSalaFindFirstArgs} args - Arguments to find a AtividadeExtraSala
     * @example
     * // Get one AtividadeExtraSala
     * const atividadeExtraSala = await prisma.atividadeExtraSala.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtividadeExtraSalaFindFirstArgs>(args?: SelectSubset<T, AtividadeExtraSalaFindFirstArgs<ExtArgs>>): Prisma__AtividadeExtraSalaClient<$Result.GetResult<Prisma.$AtividadeExtraSalaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AtividadeExtraSala that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeExtraSalaFindFirstOrThrowArgs} args - Arguments to find a AtividadeExtraSala
     * @example
     * // Get one AtividadeExtraSala
     * const atividadeExtraSala = await prisma.atividadeExtraSala.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtividadeExtraSalaFindFirstOrThrowArgs>(args?: SelectSubset<T, AtividadeExtraSalaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtividadeExtraSalaClient<$Result.GetResult<Prisma.$AtividadeExtraSalaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AtividadeExtraSalas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeExtraSalaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AtividadeExtraSalas
     * const atividadeExtraSalas = await prisma.atividadeExtraSala.findMany()
     * 
     * // Get first 10 AtividadeExtraSalas
     * const atividadeExtraSalas = await prisma.atividadeExtraSala.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atividadeExtraSalaWithIdOnly = await prisma.atividadeExtraSala.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtividadeExtraSalaFindManyArgs>(args?: SelectSubset<T, AtividadeExtraSalaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadeExtraSalaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AtividadeExtraSala.
     * @param {AtividadeExtraSalaCreateArgs} args - Arguments to create a AtividadeExtraSala.
     * @example
     * // Create one AtividadeExtraSala
     * const AtividadeExtraSala = await prisma.atividadeExtraSala.create({
     *   data: {
     *     // ... data to create a AtividadeExtraSala
     *   }
     * })
     * 
     */
    create<T extends AtividadeExtraSalaCreateArgs>(args: SelectSubset<T, AtividadeExtraSalaCreateArgs<ExtArgs>>): Prisma__AtividadeExtraSalaClient<$Result.GetResult<Prisma.$AtividadeExtraSalaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AtividadeExtraSalas.
     * @param {AtividadeExtraSalaCreateManyArgs} args - Arguments to create many AtividadeExtraSalas.
     * @example
     * // Create many AtividadeExtraSalas
     * const atividadeExtraSala = await prisma.atividadeExtraSala.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtividadeExtraSalaCreateManyArgs>(args?: SelectSubset<T, AtividadeExtraSalaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AtividadeExtraSalas and returns the data saved in the database.
     * @param {AtividadeExtraSalaCreateManyAndReturnArgs} args - Arguments to create many AtividadeExtraSalas.
     * @example
     * // Create many AtividadeExtraSalas
     * const atividadeExtraSala = await prisma.atividadeExtraSala.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AtividadeExtraSalas and only return the `id`
     * const atividadeExtraSalaWithIdOnly = await prisma.atividadeExtraSala.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AtividadeExtraSalaCreateManyAndReturnArgs>(args?: SelectSubset<T, AtividadeExtraSalaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadeExtraSalaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AtividadeExtraSala.
     * @param {AtividadeExtraSalaDeleteArgs} args - Arguments to delete one AtividadeExtraSala.
     * @example
     * // Delete one AtividadeExtraSala
     * const AtividadeExtraSala = await prisma.atividadeExtraSala.delete({
     *   where: {
     *     // ... filter to delete one AtividadeExtraSala
     *   }
     * })
     * 
     */
    delete<T extends AtividadeExtraSalaDeleteArgs>(args: SelectSubset<T, AtividadeExtraSalaDeleteArgs<ExtArgs>>): Prisma__AtividadeExtraSalaClient<$Result.GetResult<Prisma.$AtividadeExtraSalaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AtividadeExtraSala.
     * @param {AtividadeExtraSalaUpdateArgs} args - Arguments to update one AtividadeExtraSala.
     * @example
     * // Update one AtividadeExtraSala
     * const atividadeExtraSala = await prisma.atividadeExtraSala.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtividadeExtraSalaUpdateArgs>(args: SelectSubset<T, AtividadeExtraSalaUpdateArgs<ExtArgs>>): Prisma__AtividadeExtraSalaClient<$Result.GetResult<Prisma.$AtividadeExtraSalaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AtividadeExtraSalas.
     * @param {AtividadeExtraSalaDeleteManyArgs} args - Arguments to filter AtividadeExtraSalas to delete.
     * @example
     * // Delete a few AtividadeExtraSalas
     * const { count } = await prisma.atividadeExtraSala.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtividadeExtraSalaDeleteManyArgs>(args?: SelectSubset<T, AtividadeExtraSalaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AtividadeExtraSalas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeExtraSalaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AtividadeExtraSalas
     * const atividadeExtraSala = await prisma.atividadeExtraSala.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtividadeExtraSalaUpdateManyArgs>(args: SelectSubset<T, AtividadeExtraSalaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AtividadeExtraSala.
     * @param {AtividadeExtraSalaUpsertArgs} args - Arguments to update or create a AtividadeExtraSala.
     * @example
     * // Update or create a AtividadeExtraSala
     * const atividadeExtraSala = await prisma.atividadeExtraSala.upsert({
     *   create: {
     *     // ... data to create a AtividadeExtraSala
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AtividadeExtraSala we want to update
     *   }
     * })
     */
    upsert<T extends AtividadeExtraSalaUpsertArgs>(args: SelectSubset<T, AtividadeExtraSalaUpsertArgs<ExtArgs>>): Prisma__AtividadeExtraSalaClient<$Result.GetResult<Prisma.$AtividadeExtraSalaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AtividadeExtraSalas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeExtraSalaCountArgs} args - Arguments to filter AtividadeExtraSalas to count.
     * @example
     * // Count the number of AtividadeExtraSalas
     * const count = await prisma.atividadeExtraSala.count({
     *   where: {
     *     // ... the filter for the AtividadeExtraSalas we want to count
     *   }
     * })
    **/
    count<T extends AtividadeExtraSalaCountArgs>(
      args?: Subset<T, AtividadeExtraSalaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtividadeExtraSalaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AtividadeExtraSala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeExtraSalaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AtividadeExtraSalaAggregateArgs>(args: Subset<T, AtividadeExtraSalaAggregateArgs>): Prisma.PrismaPromise<GetAtividadeExtraSalaAggregateType<T>>

    /**
     * Group by AtividadeExtraSala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeExtraSalaGroupByArgs} args - Group by arguments.
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
      T extends AtividadeExtraSalaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtividadeExtraSalaGroupByArgs['orderBy'] }
        : { orderBy?: AtividadeExtraSalaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AtividadeExtraSalaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtividadeExtraSalaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AtividadeExtraSala model
   */
  readonly fields: AtividadeExtraSalaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AtividadeExtraSala.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtividadeExtraSalaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AtividadeExtraSala model
   */ 
  interface AtividadeExtraSalaFieldRefs {
    readonly id: FieldRef<"AtividadeExtraSala", 'Int'>
    readonly descricao: FieldRef<"AtividadeExtraSala", 'String'>
    readonly dataAtividade: FieldRef<"AtividadeExtraSala", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AtividadeExtraSala findUnique
   */
  export type AtividadeExtraSalaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeExtraSala
     */
    select?: AtividadeExtraSalaSelect<ExtArgs> | null
    /**
     * Filter, which AtividadeExtraSala to fetch.
     */
    where: AtividadeExtraSalaWhereUniqueInput
  }

  /**
   * AtividadeExtraSala findUniqueOrThrow
   */
  export type AtividadeExtraSalaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeExtraSala
     */
    select?: AtividadeExtraSalaSelect<ExtArgs> | null
    /**
     * Filter, which AtividadeExtraSala to fetch.
     */
    where: AtividadeExtraSalaWhereUniqueInput
  }

  /**
   * AtividadeExtraSala findFirst
   */
  export type AtividadeExtraSalaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeExtraSala
     */
    select?: AtividadeExtraSalaSelect<ExtArgs> | null
    /**
     * Filter, which AtividadeExtraSala to fetch.
     */
    where?: AtividadeExtraSalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtividadeExtraSalas to fetch.
     */
    orderBy?: AtividadeExtraSalaOrderByWithRelationInput | AtividadeExtraSalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AtividadeExtraSalas.
     */
    cursor?: AtividadeExtraSalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtividadeExtraSalas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtividadeExtraSalas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtividadeExtraSalas.
     */
    distinct?: AtividadeExtraSalaScalarFieldEnum | AtividadeExtraSalaScalarFieldEnum[]
  }

  /**
   * AtividadeExtraSala findFirstOrThrow
   */
  export type AtividadeExtraSalaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeExtraSala
     */
    select?: AtividadeExtraSalaSelect<ExtArgs> | null
    /**
     * Filter, which AtividadeExtraSala to fetch.
     */
    where?: AtividadeExtraSalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtividadeExtraSalas to fetch.
     */
    orderBy?: AtividadeExtraSalaOrderByWithRelationInput | AtividadeExtraSalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AtividadeExtraSalas.
     */
    cursor?: AtividadeExtraSalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtividadeExtraSalas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtividadeExtraSalas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtividadeExtraSalas.
     */
    distinct?: AtividadeExtraSalaScalarFieldEnum | AtividadeExtraSalaScalarFieldEnum[]
  }

  /**
   * AtividadeExtraSala findMany
   */
  export type AtividadeExtraSalaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeExtraSala
     */
    select?: AtividadeExtraSalaSelect<ExtArgs> | null
    /**
     * Filter, which AtividadeExtraSalas to fetch.
     */
    where?: AtividadeExtraSalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtividadeExtraSalas to fetch.
     */
    orderBy?: AtividadeExtraSalaOrderByWithRelationInput | AtividadeExtraSalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AtividadeExtraSalas.
     */
    cursor?: AtividadeExtraSalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtividadeExtraSalas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtividadeExtraSalas.
     */
    skip?: number
    distinct?: AtividadeExtraSalaScalarFieldEnum | AtividadeExtraSalaScalarFieldEnum[]
  }

  /**
   * AtividadeExtraSala create
   */
  export type AtividadeExtraSalaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeExtraSala
     */
    select?: AtividadeExtraSalaSelect<ExtArgs> | null
    /**
     * The data needed to create a AtividadeExtraSala.
     */
    data: XOR<AtividadeExtraSalaCreateInput, AtividadeExtraSalaUncheckedCreateInput>
  }

  /**
   * AtividadeExtraSala createMany
   */
  export type AtividadeExtraSalaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AtividadeExtraSalas.
     */
    data: AtividadeExtraSalaCreateManyInput | AtividadeExtraSalaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AtividadeExtraSala createManyAndReturn
   */
  export type AtividadeExtraSalaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeExtraSala
     */
    select?: AtividadeExtraSalaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AtividadeExtraSalas.
     */
    data: AtividadeExtraSalaCreateManyInput | AtividadeExtraSalaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AtividadeExtraSala update
   */
  export type AtividadeExtraSalaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeExtraSala
     */
    select?: AtividadeExtraSalaSelect<ExtArgs> | null
    /**
     * The data needed to update a AtividadeExtraSala.
     */
    data: XOR<AtividadeExtraSalaUpdateInput, AtividadeExtraSalaUncheckedUpdateInput>
    /**
     * Choose, which AtividadeExtraSala to update.
     */
    where: AtividadeExtraSalaWhereUniqueInput
  }

  /**
   * AtividadeExtraSala updateMany
   */
  export type AtividadeExtraSalaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AtividadeExtraSalas.
     */
    data: XOR<AtividadeExtraSalaUpdateManyMutationInput, AtividadeExtraSalaUncheckedUpdateManyInput>
    /**
     * Filter which AtividadeExtraSalas to update
     */
    where?: AtividadeExtraSalaWhereInput
  }

  /**
   * AtividadeExtraSala upsert
   */
  export type AtividadeExtraSalaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeExtraSala
     */
    select?: AtividadeExtraSalaSelect<ExtArgs> | null
    /**
     * The filter to search for the AtividadeExtraSala to update in case it exists.
     */
    where: AtividadeExtraSalaWhereUniqueInput
    /**
     * In case the AtividadeExtraSala found by the `where` argument doesn't exist, create a new AtividadeExtraSala with this data.
     */
    create: XOR<AtividadeExtraSalaCreateInput, AtividadeExtraSalaUncheckedCreateInput>
    /**
     * In case the AtividadeExtraSala was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtividadeExtraSalaUpdateInput, AtividadeExtraSalaUncheckedUpdateInput>
  }

  /**
   * AtividadeExtraSala delete
   */
  export type AtividadeExtraSalaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeExtraSala
     */
    select?: AtividadeExtraSalaSelect<ExtArgs> | null
    /**
     * Filter which AtividadeExtraSala to delete.
     */
    where: AtividadeExtraSalaWhereUniqueInput
  }

  /**
   * AtividadeExtraSala deleteMany
   */
  export type AtividadeExtraSalaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AtividadeExtraSalas to delete
     */
    where?: AtividadeExtraSalaWhereInput
  }

  /**
   * AtividadeExtraSala without action
   */
  export type AtividadeExtraSalaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeExtraSala
     */
    select?: AtividadeExtraSalaSelect<ExtArgs> | null
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


  export const ProfessorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    telefone: 'telefone',
    email: 'email',
    genero: 'genero',
    nascimento: 'nascimento',
    rua: 'rua',
    numero: 'numero',
    complemento: 'complemento',
    bairro: 'bairro',
    cidade: 'cidade',
    estado: 'estado',
    curso: 'curso',
    instituicao: 'instituicao',
    anoConclusao: 'anoConclusao',
    nivelFormacao: 'nivelFormacao'
  };

  export type ProfessorScalarFieldEnum = (typeof ProfessorScalarFieldEnum)[keyof typeof ProfessorScalarFieldEnum]


  export const DisciplinasScalarFieldEnum: {
    id: 'id',
    idProfessor: 'idProfessor',
    nomeDisciplina: 'nomeDisciplina'
  };

  export type DisciplinasScalarFieldEnum = (typeof DisciplinasScalarFieldEnum)[keyof typeof DisciplinasScalarFieldEnum]


  export const CursosScalarFieldEnum: {
    id: 'id',
    nomeCurso: 'nomeCurso'
  };

  export type CursosScalarFieldEnum = (typeof CursosScalarFieldEnum)[keyof typeof CursosScalarFieldEnum]


  export const AlunoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    nascimento: 'nascimento',
    cpf: 'cpf',
    rg: 'rg',
    escola: 'escola',
    periodo: 'periodo',
    serie: 'serie',
    telefone: 'telefone',
    rendaFamilia: 'rendaFamilia'
  };

  export type AlunoScalarFieldEnum = (typeof AlunoScalarFieldEnum)[keyof typeof AlunoScalarFieldEnum]


  export const FaltasDisciplinaresScalarFieldEnum: {
    id: 'id',
    idAluno: 'idAluno',
    descricao: 'descricao',
    dataFalta: 'dataFalta'
  };

  export type FaltasDisciplinaresScalarFieldEnum = (typeof FaltasDisciplinaresScalarFieldEnum)[keyof typeof FaltasDisciplinaresScalarFieldEnum]


  export const MatriculaScalarFieldEnum: {
    id: 'id',
    idAluno: 'idAluno',
    dataInicio: 'dataInicio',
    situacao: 'situacao'
  };

  export type MatriculaScalarFieldEnum = (typeof MatriculaScalarFieldEnum)[keyof typeof MatriculaScalarFieldEnum]


  export const TurmaScalarFieldEnum: {
    id: 'id',
    idMatricula: 'idMatricula',
    idDisciplina: 'idDisciplina',
    idCurso: 'idCurso',
    nomeTurma: 'nomeTurma'
  };

  export type TurmaScalarFieldEnum = (typeof TurmaScalarFieldEnum)[keyof typeof TurmaScalarFieldEnum]


  export const ChamadaScalarFieldEnum: {
    id: 'id',
    idTurma: 'idTurma',
    idAtividadeSala: 'idAtividadeSala',
    presenca: 'presenca'
  };

  export type ChamadaScalarFieldEnum = (typeof ChamadaScalarFieldEnum)[keyof typeof ChamadaScalarFieldEnum]


  export const AtividadeSalaScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao'
  };

  export type AtividadeSalaScalarFieldEnum = (typeof AtividadeSalaScalarFieldEnum)[keyof typeof AtividadeSalaScalarFieldEnum]


  export const AtividadeExtraSalaScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    dataAtividade: 'dataAtividade'
  };

  export type AtividadeExtraSalaScalarFieldEnum = (typeof AtividadeExtraSalaScalarFieldEnum)[keyof typeof AtividadeExtraSalaScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type ProfessorWhereInput = {
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    id?: IntFilter<"Professor"> | number
    name?: StringFilter<"Professor"> | string
    telefone?: StringFilter<"Professor"> | string
    email?: StringFilter<"Professor"> | string
    genero?: StringFilter<"Professor"> | string
    nascimento?: StringFilter<"Professor"> | string
    rua?: StringFilter<"Professor"> | string
    numero?: StringFilter<"Professor"> | string
    complemento?: StringFilter<"Professor"> | string
    bairro?: StringFilter<"Professor"> | string
    cidade?: StringFilter<"Professor"> | string
    estado?: StringFilter<"Professor"> | string
    curso?: StringFilter<"Professor"> | string
    instituicao?: StringFilter<"Professor"> | string
    anoConclusao?: StringFilter<"Professor"> | string
    nivelFormacao?: StringFilter<"Professor"> | string
    disciplina?: DisciplinasListRelationFilter
  }

  export type ProfessorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    genero?: SortOrder
    nascimento?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    curso?: SortOrder
    instituicao?: SortOrder
    anoConclusao?: SortOrder
    nivelFormacao?: SortOrder
    disciplina?: DisciplinasOrderByRelationAggregateInput
  }

  export type ProfessorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    name?: StringFilter<"Professor"> | string
    telefone?: StringFilter<"Professor"> | string
    email?: StringFilter<"Professor"> | string
    genero?: StringFilter<"Professor"> | string
    nascimento?: StringFilter<"Professor"> | string
    rua?: StringFilter<"Professor"> | string
    numero?: StringFilter<"Professor"> | string
    complemento?: StringFilter<"Professor"> | string
    bairro?: StringFilter<"Professor"> | string
    cidade?: StringFilter<"Professor"> | string
    estado?: StringFilter<"Professor"> | string
    curso?: StringFilter<"Professor"> | string
    instituicao?: StringFilter<"Professor"> | string
    anoConclusao?: StringFilter<"Professor"> | string
    nivelFormacao?: StringFilter<"Professor"> | string
    disciplina?: DisciplinasListRelationFilter
  }, "id">

  export type ProfessorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    genero?: SortOrder
    nascimento?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    curso?: SortOrder
    instituicao?: SortOrder
    anoConclusao?: SortOrder
    nivelFormacao?: SortOrder
    _count?: ProfessorCountOrderByAggregateInput
    _avg?: ProfessorAvgOrderByAggregateInput
    _max?: ProfessorMaxOrderByAggregateInput
    _min?: ProfessorMinOrderByAggregateInput
    _sum?: ProfessorSumOrderByAggregateInput
  }

  export type ProfessorScalarWhereWithAggregatesInput = {
    AND?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    OR?: ProfessorScalarWhereWithAggregatesInput[]
    NOT?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Professor"> | number
    name?: StringWithAggregatesFilter<"Professor"> | string
    telefone?: StringWithAggregatesFilter<"Professor"> | string
    email?: StringWithAggregatesFilter<"Professor"> | string
    genero?: StringWithAggregatesFilter<"Professor"> | string
    nascimento?: StringWithAggregatesFilter<"Professor"> | string
    rua?: StringWithAggregatesFilter<"Professor"> | string
    numero?: StringWithAggregatesFilter<"Professor"> | string
    complemento?: StringWithAggregatesFilter<"Professor"> | string
    bairro?: StringWithAggregatesFilter<"Professor"> | string
    cidade?: StringWithAggregatesFilter<"Professor"> | string
    estado?: StringWithAggregatesFilter<"Professor"> | string
    curso?: StringWithAggregatesFilter<"Professor"> | string
    instituicao?: StringWithAggregatesFilter<"Professor"> | string
    anoConclusao?: StringWithAggregatesFilter<"Professor"> | string
    nivelFormacao?: StringWithAggregatesFilter<"Professor"> | string
  }

  export type DisciplinasWhereInput = {
    AND?: DisciplinasWhereInput | DisciplinasWhereInput[]
    OR?: DisciplinasWhereInput[]
    NOT?: DisciplinasWhereInput | DisciplinasWhereInput[]
    id?: IntFilter<"Disciplinas"> | number
    idProfessor?: IntFilter<"Disciplinas"> | number
    nomeDisciplina?: StringFilter<"Disciplinas"> | string
    professor?: XOR<ProfessorRelationFilter, ProfessorWhereInput>
    Turma?: TurmaListRelationFilter
  }

  export type DisciplinasOrderByWithRelationInput = {
    id?: SortOrder
    idProfessor?: SortOrder
    nomeDisciplina?: SortOrder
    professor?: ProfessorOrderByWithRelationInput
    Turma?: TurmaOrderByRelationAggregateInput
  }

  export type DisciplinasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DisciplinasWhereInput | DisciplinasWhereInput[]
    OR?: DisciplinasWhereInput[]
    NOT?: DisciplinasWhereInput | DisciplinasWhereInput[]
    idProfessor?: IntFilter<"Disciplinas"> | number
    nomeDisciplina?: StringFilter<"Disciplinas"> | string
    professor?: XOR<ProfessorRelationFilter, ProfessorWhereInput>
    Turma?: TurmaListRelationFilter
  }, "id">

  export type DisciplinasOrderByWithAggregationInput = {
    id?: SortOrder
    idProfessor?: SortOrder
    nomeDisciplina?: SortOrder
    _count?: DisciplinasCountOrderByAggregateInput
    _avg?: DisciplinasAvgOrderByAggregateInput
    _max?: DisciplinasMaxOrderByAggregateInput
    _min?: DisciplinasMinOrderByAggregateInput
    _sum?: DisciplinasSumOrderByAggregateInput
  }

  export type DisciplinasScalarWhereWithAggregatesInput = {
    AND?: DisciplinasScalarWhereWithAggregatesInput | DisciplinasScalarWhereWithAggregatesInput[]
    OR?: DisciplinasScalarWhereWithAggregatesInput[]
    NOT?: DisciplinasScalarWhereWithAggregatesInput | DisciplinasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Disciplinas"> | number
    idProfessor?: IntWithAggregatesFilter<"Disciplinas"> | number
    nomeDisciplina?: StringWithAggregatesFilter<"Disciplinas"> | string
  }

  export type CursosWhereInput = {
    AND?: CursosWhereInput | CursosWhereInput[]
    OR?: CursosWhereInput[]
    NOT?: CursosWhereInput | CursosWhereInput[]
    id?: IntFilter<"Cursos"> | number
    nomeCurso?: StringFilter<"Cursos"> | string
    Turma?: TurmaListRelationFilter
  }

  export type CursosOrderByWithRelationInput = {
    id?: SortOrder
    nomeCurso?: SortOrder
    Turma?: TurmaOrderByRelationAggregateInput
  }

  export type CursosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CursosWhereInput | CursosWhereInput[]
    OR?: CursosWhereInput[]
    NOT?: CursosWhereInput | CursosWhereInput[]
    nomeCurso?: StringFilter<"Cursos"> | string
    Turma?: TurmaListRelationFilter
  }, "id">

  export type CursosOrderByWithAggregationInput = {
    id?: SortOrder
    nomeCurso?: SortOrder
    _count?: CursosCountOrderByAggregateInput
    _avg?: CursosAvgOrderByAggregateInput
    _max?: CursosMaxOrderByAggregateInput
    _min?: CursosMinOrderByAggregateInput
    _sum?: CursosSumOrderByAggregateInput
  }

  export type CursosScalarWhereWithAggregatesInput = {
    AND?: CursosScalarWhereWithAggregatesInput | CursosScalarWhereWithAggregatesInput[]
    OR?: CursosScalarWhereWithAggregatesInput[]
    NOT?: CursosScalarWhereWithAggregatesInput | CursosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cursos"> | number
    nomeCurso?: StringWithAggregatesFilter<"Cursos"> | string
  }

  export type AlunoWhereInput = {
    AND?: AlunoWhereInput | AlunoWhereInput[]
    OR?: AlunoWhereInput[]
    NOT?: AlunoWhereInput | AlunoWhereInput[]
    id?: IntFilter<"Aluno"> | number
    nome?: StringFilter<"Aluno"> | string
    nascimento?: DateTimeFilter<"Aluno"> | Date | string
    cpf?: StringFilter<"Aluno"> | string
    rg?: StringFilter<"Aluno"> | string
    escola?: StringFilter<"Aluno"> | string
    periodo?: StringFilter<"Aluno"> | string
    serie?: StringFilter<"Aluno"> | string
    telefone?: StringFilter<"Aluno"> | string
    rendaFamilia?: DecimalFilter<"Aluno"> | Decimal | DecimalJsLike | number | string
    faltaDisciplinar?: FaltasDisciplinaresListRelationFilter
    Matricula?: MatriculaListRelationFilter
  }

  export type AlunoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    nascimento?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    escola?: SortOrder
    periodo?: SortOrder
    serie?: SortOrder
    telefone?: SortOrder
    rendaFamilia?: SortOrder
    faltaDisciplinar?: FaltasDisciplinaresOrderByRelationAggregateInput
    Matricula?: MatriculaOrderByRelationAggregateInput
  }

  export type AlunoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlunoWhereInput | AlunoWhereInput[]
    OR?: AlunoWhereInput[]
    NOT?: AlunoWhereInput | AlunoWhereInput[]
    nome?: StringFilter<"Aluno"> | string
    nascimento?: DateTimeFilter<"Aluno"> | Date | string
    cpf?: StringFilter<"Aluno"> | string
    rg?: StringFilter<"Aluno"> | string
    escola?: StringFilter<"Aluno"> | string
    periodo?: StringFilter<"Aluno"> | string
    serie?: StringFilter<"Aluno"> | string
    telefone?: StringFilter<"Aluno"> | string
    rendaFamilia?: DecimalFilter<"Aluno"> | Decimal | DecimalJsLike | number | string
    faltaDisciplinar?: FaltasDisciplinaresListRelationFilter
    Matricula?: MatriculaListRelationFilter
  }, "id">

  export type AlunoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    nascimento?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    escola?: SortOrder
    periodo?: SortOrder
    serie?: SortOrder
    telefone?: SortOrder
    rendaFamilia?: SortOrder
    _count?: AlunoCountOrderByAggregateInput
    _avg?: AlunoAvgOrderByAggregateInput
    _max?: AlunoMaxOrderByAggregateInput
    _min?: AlunoMinOrderByAggregateInput
    _sum?: AlunoSumOrderByAggregateInput
  }

  export type AlunoScalarWhereWithAggregatesInput = {
    AND?: AlunoScalarWhereWithAggregatesInput | AlunoScalarWhereWithAggregatesInput[]
    OR?: AlunoScalarWhereWithAggregatesInput[]
    NOT?: AlunoScalarWhereWithAggregatesInput | AlunoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Aluno"> | number
    nome?: StringWithAggregatesFilter<"Aluno"> | string
    nascimento?: DateTimeWithAggregatesFilter<"Aluno"> | Date | string
    cpf?: StringWithAggregatesFilter<"Aluno"> | string
    rg?: StringWithAggregatesFilter<"Aluno"> | string
    escola?: StringWithAggregatesFilter<"Aluno"> | string
    periodo?: StringWithAggregatesFilter<"Aluno"> | string
    serie?: StringWithAggregatesFilter<"Aluno"> | string
    telefone?: StringWithAggregatesFilter<"Aluno"> | string
    rendaFamilia?: DecimalWithAggregatesFilter<"Aluno"> | Decimal | DecimalJsLike | number | string
  }

  export type FaltasDisciplinaresWhereInput = {
    AND?: FaltasDisciplinaresWhereInput | FaltasDisciplinaresWhereInput[]
    OR?: FaltasDisciplinaresWhereInput[]
    NOT?: FaltasDisciplinaresWhereInput | FaltasDisciplinaresWhereInput[]
    id?: IntFilter<"FaltasDisciplinares"> | number
    idAluno?: IntFilter<"FaltasDisciplinares"> | number
    descricao?: StringFilter<"FaltasDisciplinares"> | string
    dataFalta?: DateTimeFilter<"FaltasDisciplinares"> | Date | string
    aluno?: XOR<AlunoRelationFilter, AlunoWhereInput>
  }

  export type FaltasDisciplinaresOrderByWithRelationInput = {
    id?: SortOrder
    idAluno?: SortOrder
    descricao?: SortOrder
    dataFalta?: SortOrder
    aluno?: AlunoOrderByWithRelationInput
  }

  export type FaltasDisciplinaresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FaltasDisciplinaresWhereInput | FaltasDisciplinaresWhereInput[]
    OR?: FaltasDisciplinaresWhereInput[]
    NOT?: FaltasDisciplinaresWhereInput | FaltasDisciplinaresWhereInput[]
    idAluno?: IntFilter<"FaltasDisciplinares"> | number
    descricao?: StringFilter<"FaltasDisciplinares"> | string
    dataFalta?: DateTimeFilter<"FaltasDisciplinares"> | Date | string
    aluno?: XOR<AlunoRelationFilter, AlunoWhereInput>
  }, "id">

  export type FaltasDisciplinaresOrderByWithAggregationInput = {
    id?: SortOrder
    idAluno?: SortOrder
    descricao?: SortOrder
    dataFalta?: SortOrder
    _count?: FaltasDisciplinaresCountOrderByAggregateInput
    _avg?: FaltasDisciplinaresAvgOrderByAggregateInput
    _max?: FaltasDisciplinaresMaxOrderByAggregateInput
    _min?: FaltasDisciplinaresMinOrderByAggregateInput
    _sum?: FaltasDisciplinaresSumOrderByAggregateInput
  }

  export type FaltasDisciplinaresScalarWhereWithAggregatesInput = {
    AND?: FaltasDisciplinaresScalarWhereWithAggregatesInput | FaltasDisciplinaresScalarWhereWithAggregatesInput[]
    OR?: FaltasDisciplinaresScalarWhereWithAggregatesInput[]
    NOT?: FaltasDisciplinaresScalarWhereWithAggregatesInput | FaltasDisciplinaresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FaltasDisciplinares"> | number
    idAluno?: IntWithAggregatesFilter<"FaltasDisciplinares"> | number
    descricao?: StringWithAggregatesFilter<"FaltasDisciplinares"> | string
    dataFalta?: DateTimeWithAggregatesFilter<"FaltasDisciplinares"> | Date | string
  }

  export type MatriculaWhereInput = {
    AND?: MatriculaWhereInput | MatriculaWhereInput[]
    OR?: MatriculaWhereInput[]
    NOT?: MatriculaWhereInput | MatriculaWhereInput[]
    id?: IntFilter<"Matricula"> | number
    idAluno?: IntFilter<"Matricula"> | number
    dataInicio?: DateTimeFilter<"Matricula"> | Date | string
    situacao?: StringFilter<"Matricula"> | string
    aluno?: XOR<AlunoRelationFilter, AlunoWhereInput>
    Turma?: TurmaListRelationFilter
  }

  export type MatriculaOrderByWithRelationInput = {
    id?: SortOrder
    idAluno?: SortOrder
    dataInicio?: SortOrder
    situacao?: SortOrder
    aluno?: AlunoOrderByWithRelationInput
    Turma?: TurmaOrderByRelationAggregateInput
  }

  export type MatriculaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MatriculaWhereInput | MatriculaWhereInput[]
    OR?: MatriculaWhereInput[]
    NOT?: MatriculaWhereInput | MatriculaWhereInput[]
    idAluno?: IntFilter<"Matricula"> | number
    dataInicio?: DateTimeFilter<"Matricula"> | Date | string
    situacao?: StringFilter<"Matricula"> | string
    aluno?: XOR<AlunoRelationFilter, AlunoWhereInput>
    Turma?: TurmaListRelationFilter
  }, "id">

  export type MatriculaOrderByWithAggregationInput = {
    id?: SortOrder
    idAluno?: SortOrder
    dataInicio?: SortOrder
    situacao?: SortOrder
    _count?: MatriculaCountOrderByAggregateInput
    _avg?: MatriculaAvgOrderByAggregateInput
    _max?: MatriculaMaxOrderByAggregateInput
    _min?: MatriculaMinOrderByAggregateInput
    _sum?: MatriculaSumOrderByAggregateInput
  }

  export type MatriculaScalarWhereWithAggregatesInput = {
    AND?: MatriculaScalarWhereWithAggregatesInput | MatriculaScalarWhereWithAggregatesInput[]
    OR?: MatriculaScalarWhereWithAggregatesInput[]
    NOT?: MatriculaScalarWhereWithAggregatesInput | MatriculaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Matricula"> | number
    idAluno?: IntWithAggregatesFilter<"Matricula"> | number
    dataInicio?: DateTimeWithAggregatesFilter<"Matricula"> | Date | string
    situacao?: StringWithAggregatesFilter<"Matricula"> | string
  }

  export type TurmaWhereInput = {
    AND?: TurmaWhereInput | TurmaWhereInput[]
    OR?: TurmaWhereInput[]
    NOT?: TurmaWhereInput | TurmaWhereInput[]
    id?: IntFilter<"Turma"> | number
    idMatricula?: IntFilter<"Turma"> | number
    idDisciplina?: IntFilter<"Turma"> | number
    idCurso?: IntFilter<"Turma"> | number
    nomeTurma?: StringFilter<"Turma"> | string
    matricula?: XOR<MatriculaRelationFilter, MatriculaWhereInput>
    disciplina?: XOR<DisciplinasRelationFilter, DisciplinasWhereInput>
    curso?: XOR<CursosRelationFilter, CursosWhereInput>
    Chamada?: ChamadaListRelationFilter
  }

  export type TurmaOrderByWithRelationInput = {
    id?: SortOrder
    idMatricula?: SortOrder
    idDisciplina?: SortOrder
    idCurso?: SortOrder
    nomeTurma?: SortOrder
    matricula?: MatriculaOrderByWithRelationInput
    disciplina?: DisciplinasOrderByWithRelationInput
    curso?: CursosOrderByWithRelationInput
    Chamada?: ChamadaOrderByRelationAggregateInput
  }

  export type TurmaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TurmaWhereInput | TurmaWhereInput[]
    OR?: TurmaWhereInput[]
    NOT?: TurmaWhereInput | TurmaWhereInput[]
    idMatricula?: IntFilter<"Turma"> | number
    idDisciplina?: IntFilter<"Turma"> | number
    idCurso?: IntFilter<"Turma"> | number
    nomeTurma?: StringFilter<"Turma"> | string
    matricula?: XOR<MatriculaRelationFilter, MatriculaWhereInput>
    disciplina?: XOR<DisciplinasRelationFilter, DisciplinasWhereInput>
    curso?: XOR<CursosRelationFilter, CursosWhereInput>
    Chamada?: ChamadaListRelationFilter
  }, "id">

  export type TurmaOrderByWithAggregationInput = {
    id?: SortOrder
    idMatricula?: SortOrder
    idDisciplina?: SortOrder
    idCurso?: SortOrder
    nomeTurma?: SortOrder
    _count?: TurmaCountOrderByAggregateInput
    _avg?: TurmaAvgOrderByAggregateInput
    _max?: TurmaMaxOrderByAggregateInput
    _min?: TurmaMinOrderByAggregateInput
    _sum?: TurmaSumOrderByAggregateInput
  }

  export type TurmaScalarWhereWithAggregatesInput = {
    AND?: TurmaScalarWhereWithAggregatesInput | TurmaScalarWhereWithAggregatesInput[]
    OR?: TurmaScalarWhereWithAggregatesInput[]
    NOT?: TurmaScalarWhereWithAggregatesInput | TurmaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Turma"> | number
    idMatricula?: IntWithAggregatesFilter<"Turma"> | number
    idDisciplina?: IntWithAggregatesFilter<"Turma"> | number
    idCurso?: IntWithAggregatesFilter<"Turma"> | number
    nomeTurma?: StringWithAggregatesFilter<"Turma"> | string
  }

  export type ChamadaWhereInput = {
    AND?: ChamadaWhereInput | ChamadaWhereInput[]
    OR?: ChamadaWhereInput[]
    NOT?: ChamadaWhereInput | ChamadaWhereInput[]
    id?: IntFilter<"Chamada"> | number
    idTurma?: IntFilter<"Chamada"> | number
    idAtividadeSala?: IntFilter<"Chamada"> | number
    presenca?: StringFilter<"Chamada"> | string
    turma?: XOR<TurmaRelationFilter, TurmaWhereInput>
    atividadeSala?: XOR<AtividadeSalaRelationFilter, AtividadeSalaWhereInput>
  }

  export type ChamadaOrderByWithRelationInput = {
    id?: SortOrder
    idTurma?: SortOrder
    idAtividadeSala?: SortOrder
    presenca?: SortOrder
    turma?: TurmaOrderByWithRelationInput
    atividadeSala?: AtividadeSalaOrderByWithRelationInput
  }

  export type ChamadaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChamadaWhereInput | ChamadaWhereInput[]
    OR?: ChamadaWhereInput[]
    NOT?: ChamadaWhereInput | ChamadaWhereInput[]
    idTurma?: IntFilter<"Chamada"> | number
    idAtividadeSala?: IntFilter<"Chamada"> | number
    presenca?: StringFilter<"Chamada"> | string
    turma?: XOR<TurmaRelationFilter, TurmaWhereInput>
    atividadeSala?: XOR<AtividadeSalaRelationFilter, AtividadeSalaWhereInput>
  }, "id">

  export type ChamadaOrderByWithAggregationInput = {
    id?: SortOrder
    idTurma?: SortOrder
    idAtividadeSala?: SortOrder
    presenca?: SortOrder
    _count?: ChamadaCountOrderByAggregateInput
    _avg?: ChamadaAvgOrderByAggregateInput
    _max?: ChamadaMaxOrderByAggregateInput
    _min?: ChamadaMinOrderByAggregateInput
    _sum?: ChamadaSumOrderByAggregateInput
  }

  export type ChamadaScalarWhereWithAggregatesInput = {
    AND?: ChamadaScalarWhereWithAggregatesInput | ChamadaScalarWhereWithAggregatesInput[]
    OR?: ChamadaScalarWhereWithAggregatesInput[]
    NOT?: ChamadaScalarWhereWithAggregatesInput | ChamadaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chamada"> | number
    idTurma?: IntWithAggregatesFilter<"Chamada"> | number
    idAtividadeSala?: IntWithAggregatesFilter<"Chamada"> | number
    presenca?: StringWithAggregatesFilter<"Chamada"> | string
  }

  export type AtividadeSalaWhereInput = {
    AND?: AtividadeSalaWhereInput | AtividadeSalaWhereInput[]
    OR?: AtividadeSalaWhereInput[]
    NOT?: AtividadeSalaWhereInput | AtividadeSalaWhereInput[]
    id?: IntFilter<"AtividadeSala"> | number
    descricao?: StringFilter<"AtividadeSala"> | string
    Chamada?: ChamadaListRelationFilter
  }

  export type AtividadeSalaOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    Chamada?: ChamadaOrderByRelationAggregateInput
  }

  export type AtividadeSalaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AtividadeSalaWhereInput | AtividadeSalaWhereInput[]
    OR?: AtividadeSalaWhereInput[]
    NOT?: AtividadeSalaWhereInput | AtividadeSalaWhereInput[]
    descricao?: StringFilter<"AtividadeSala"> | string
    Chamada?: ChamadaListRelationFilter
  }, "id">

  export type AtividadeSalaOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    _count?: AtividadeSalaCountOrderByAggregateInput
    _avg?: AtividadeSalaAvgOrderByAggregateInput
    _max?: AtividadeSalaMaxOrderByAggregateInput
    _min?: AtividadeSalaMinOrderByAggregateInput
    _sum?: AtividadeSalaSumOrderByAggregateInput
  }

  export type AtividadeSalaScalarWhereWithAggregatesInput = {
    AND?: AtividadeSalaScalarWhereWithAggregatesInput | AtividadeSalaScalarWhereWithAggregatesInput[]
    OR?: AtividadeSalaScalarWhereWithAggregatesInput[]
    NOT?: AtividadeSalaScalarWhereWithAggregatesInput | AtividadeSalaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AtividadeSala"> | number
    descricao?: StringWithAggregatesFilter<"AtividadeSala"> | string
  }

  export type AtividadeExtraSalaWhereInput = {
    AND?: AtividadeExtraSalaWhereInput | AtividadeExtraSalaWhereInput[]
    OR?: AtividadeExtraSalaWhereInput[]
    NOT?: AtividadeExtraSalaWhereInput | AtividadeExtraSalaWhereInput[]
    id?: IntFilter<"AtividadeExtraSala"> | number
    descricao?: StringFilter<"AtividadeExtraSala"> | string
    dataAtividade?: DateTimeFilter<"AtividadeExtraSala"> | Date | string
  }

  export type AtividadeExtraSalaOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    dataAtividade?: SortOrder
  }

  export type AtividadeExtraSalaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AtividadeExtraSalaWhereInput | AtividadeExtraSalaWhereInput[]
    OR?: AtividadeExtraSalaWhereInput[]
    NOT?: AtividadeExtraSalaWhereInput | AtividadeExtraSalaWhereInput[]
    descricao?: StringFilter<"AtividadeExtraSala"> | string
    dataAtividade?: DateTimeFilter<"AtividadeExtraSala"> | Date | string
  }, "id">

  export type AtividadeExtraSalaOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    dataAtividade?: SortOrder
    _count?: AtividadeExtraSalaCountOrderByAggregateInput
    _avg?: AtividadeExtraSalaAvgOrderByAggregateInput
    _max?: AtividadeExtraSalaMaxOrderByAggregateInput
    _min?: AtividadeExtraSalaMinOrderByAggregateInput
    _sum?: AtividadeExtraSalaSumOrderByAggregateInput
  }

  export type AtividadeExtraSalaScalarWhereWithAggregatesInput = {
    AND?: AtividadeExtraSalaScalarWhereWithAggregatesInput | AtividadeExtraSalaScalarWhereWithAggregatesInput[]
    OR?: AtividadeExtraSalaScalarWhereWithAggregatesInput[]
    NOT?: AtividadeExtraSalaScalarWhereWithAggregatesInput | AtividadeExtraSalaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AtividadeExtraSala"> | number
    descricao?: StringWithAggregatesFilter<"AtividadeExtraSala"> | string
    dataAtividade?: DateTimeWithAggregatesFilter<"AtividadeExtraSala"> | Date | string
  }

  export type ProfessorCreateInput = {
    name: string
    telefone: string
    email: string
    genero: string
    nascimento: string
    rua: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    estado: string
    curso: string
    instituicao: string
    anoConclusao: string
    nivelFormacao: string
    disciplina?: DisciplinasCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateInput = {
    id?: number
    name: string
    telefone: string
    email: string
    genero: string
    nascimento: string
    rua: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    estado: string
    curso: string
    instituicao: string
    anoConclusao: string
    nivelFormacao: string
    disciplina?: DisciplinasUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nascimento?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    instituicao?: StringFieldUpdateOperationsInput | string
    anoConclusao?: StringFieldUpdateOperationsInput | string
    nivelFormacao?: StringFieldUpdateOperationsInput | string
    disciplina?: DisciplinasUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nascimento?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    instituicao?: StringFieldUpdateOperationsInput | string
    anoConclusao?: StringFieldUpdateOperationsInput | string
    nivelFormacao?: StringFieldUpdateOperationsInput | string
    disciplina?: DisciplinasUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorCreateManyInput = {
    id?: number
    name: string
    telefone: string
    email: string
    genero: string
    nascimento: string
    rua: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    estado: string
    curso: string
    instituicao: string
    anoConclusao: string
    nivelFormacao: string
  }

  export type ProfessorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nascimento?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    instituicao?: StringFieldUpdateOperationsInput | string
    anoConclusao?: StringFieldUpdateOperationsInput | string
    nivelFormacao?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nascimento?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    instituicao?: StringFieldUpdateOperationsInput | string
    anoConclusao?: StringFieldUpdateOperationsInput | string
    nivelFormacao?: StringFieldUpdateOperationsInput | string
  }

  export type DisciplinasCreateInput = {
    nomeDisciplina: string
    professor: ProfessorCreateNestedOneWithoutDisciplinaInput
    Turma?: TurmaCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinasUncheckedCreateInput = {
    id?: number
    idProfessor: number
    nomeDisciplina: string
    Turma?: TurmaUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinasUpdateInput = {
    nomeDisciplina?: StringFieldUpdateOperationsInput | string
    professor?: ProfessorUpdateOneRequiredWithoutDisciplinaNestedInput
    Turma?: TurmaUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idProfessor?: IntFieldUpdateOperationsInput | number
    nomeDisciplina?: StringFieldUpdateOperationsInput | string
    Turma?: TurmaUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinasCreateManyInput = {
    id?: number
    idProfessor: number
    nomeDisciplina: string
  }

  export type DisciplinasUpdateManyMutationInput = {
    nomeDisciplina?: StringFieldUpdateOperationsInput | string
  }

  export type DisciplinasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idProfessor?: IntFieldUpdateOperationsInput | number
    nomeDisciplina?: StringFieldUpdateOperationsInput | string
  }

  export type CursosCreateInput = {
    nomeCurso: string
    Turma?: TurmaCreateNestedManyWithoutCursoInput
  }

  export type CursosUncheckedCreateInput = {
    id?: number
    nomeCurso: string
    Turma?: TurmaUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursosUpdateInput = {
    nomeCurso?: StringFieldUpdateOperationsInput | string
    Turma?: TurmaUpdateManyWithoutCursoNestedInput
  }

  export type CursosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeCurso?: StringFieldUpdateOperationsInput | string
    Turma?: TurmaUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type CursosCreateManyInput = {
    id?: number
    nomeCurso: string
  }

  export type CursosUpdateManyMutationInput = {
    nomeCurso?: StringFieldUpdateOperationsInput | string
  }

  export type CursosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeCurso?: StringFieldUpdateOperationsInput | string
  }

  export type AlunoCreateInput = {
    nome: string
    nascimento: Date | string
    cpf: string
    rg: string
    escola: string
    periodo: string
    serie: string
    telefone: string
    rendaFamilia: Decimal | DecimalJsLike | number | string
    faltaDisciplinar?: FaltasDisciplinaresCreateNestedManyWithoutAlunoInput
    Matricula?: MatriculaCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateInput = {
    id?: number
    nome: string
    nascimento: Date | string
    cpf: string
    rg: string
    escola: string
    periodo: string
    serie: string
    telefone: string
    rendaFamilia: Decimal | DecimalJsLike | number | string
    faltaDisciplinar?: FaltasDisciplinaresUncheckedCreateNestedManyWithoutAlunoInput
    Matricula?: MatriculaUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    escola?: StringFieldUpdateOperationsInput | string
    periodo?: StringFieldUpdateOperationsInput | string
    serie?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    rendaFamilia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    faltaDisciplinar?: FaltasDisciplinaresUpdateManyWithoutAlunoNestedInput
    Matricula?: MatriculaUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    escola?: StringFieldUpdateOperationsInput | string
    periodo?: StringFieldUpdateOperationsInput | string
    serie?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    rendaFamilia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    faltaDisciplinar?: FaltasDisciplinaresUncheckedUpdateManyWithoutAlunoNestedInput
    Matricula?: MatriculaUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoCreateManyInput = {
    id?: number
    nome: string
    nascimento: Date | string
    cpf: string
    rg: string
    escola: string
    periodo: string
    serie: string
    telefone: string
    rendaFamilia: Decimal | DecimalJsLike | number | string
  }

  export type AlunoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    escola?: StringFieldUpdateOperationsInput | string
    periodo?: StringFieldUpdateOperationsInput | string
    serie?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    rendaFamilia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type AlunoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    escola?: StringFieldUpdateOperationsInput | string
    periodo?: StringFieldUpdateOperationsInput | string
    serie?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    rendaFamilia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type FaltasDisciplinaresCreateInput = {
    descricao: string
    dataFalta: Date | string
    aluno: AlunoCreateNestedOneWithoutFaltaDisciplinarInput
  }

  export type FaltasDisciplinaresUncheckedCreateInput = {
    id?: number
    idAluno: number
    descricao: string
    dataFalta: Date | string
  }

  export type FaltasDisciplinaresUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    dataFalta?: DateTimeFieldUpdateOperationsInput | Date | string
    aluno?: AlunoUpdateOneRequiredWithoutFaltaDisciplinarNestedInput
  }

  export type FaltasDisciplinaresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idAluno?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    dataFalta?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaltasDisciplinaresCreateManyInput = {
    id?: number
    idAluno: number
    descricao: string
    dataFalta: Date | string
  }

  export type FaltasDisciplinaresUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    dataFalta?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaltasDisciplinaresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idAluno?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    dataFalta?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatriculaCreateInput = {
    dataInicio: Date | string
    situacao: string
    aluno: AlunoCreateNestedOneWithoutMatriculaInput
    Turma?: TurmaCreateNestedManyWithoutMatriculaInput
  }

  export type MatriculaUncheckedCreateInput = {
    id?: number
    idAluno: number
    dataInicio: Date | string
    situacao: string
    Turma?: TurmaUncheckedCreateNestedManyWithoutMatriculaInput
  }

  export type MatriculaUpdateInput = {
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    situacao?: StringFieldUpdateOperationsInput | string
    aluno?: AlunoUpdateOneRequiredWithoutMatriculaNestedInput
    Turma?: TurmaUpdateManyWithoutMatriculaNestedInput
  }

  export type MatriculaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idAluno?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    situacao?: StringFieldUpdateOperationsInput | string
    Turma?: TurmaUncheckedUpdateManyWithoutMatriculaNestedInput
  }

  export type MatriculaCreateManyInput = {
    id?: number
    idAluno: number
    dataInicio: Date | string
    situacao: string
  }

  export type MatriculaUpdateManyMutationInput = {
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    situacao?: StringFieldUpdateOperationsInput | string
  }

  export type MatriculaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idAluno?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    situacao?: StringFieldUpdateOperationsInput | string
  }

  export type TurmaCreateInput = {
    nomeTurma: string
    matricula: MatriculaCreateNestedOneWithoutTurmaInput
    disciplina: DisciplinasCreateNestedOneWithoutTurmaInput
    curso: CursosCreateNestedOneWithoutTurmaInput
    Chamada?: ChamadaCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateInput = {
    id?: number
    idMatricula: number
    idDisciplina: number
    idCurso: number
    nomeTurma: string
    Chamada?: ChamadaUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUpdateInput = {
    nomeTurma?: StringFieldUpdateOperationsInput | string
    matricula?: MatriculaUpdateOneRequiredWithoutTurmaNestedInput
    disciplina?: DisciplinasUpdateOneRequiredWithoutTurmaNestedInput
    curso?: CursosUpdateOneRequiredWithoutTurmaNestedInput
    Chamada?: ChamadaUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idMatricula?: IntFieldUpdateOperationsInput | number
    idDisciplina?: IntFieldUpdateOperationsInput | number
    idCurso?: IntFieldUpdateOperationsInput | number
    nomeTurma?: StringFieldUpdateOperationsInput | string
    Chamada?: ChamadaUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaCreateManyInput = {
    id?: number
    idMatricula: number
    idDisciplina: number
    idCurso: number
    nomeTurma: string
  }

  export type TurmaUpdateManyMutationInput = {
    nomeTurma?: StringFieldUpdateOperationsInput | string
  }

  export type TurmaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idMatricula?: IntFieldUpdateOperationsInput | number
    idDisciplina?: IntFieldUpdateOperationsInput | number
    idCurso?: IntFieldUpdateOperationsInput | number
    nomeTurma?: StringFieldUpdateOperationsInput | string
  }

  export type ChamadaCreateInput = {
    presenca: string
    turma: TurmaCreateNestedOneWithoutChamadaInput
    atividadeSala: AtividadeSalaCreateNestedOneWithoutChamadaInput
  }

  export type ChamadaUncheckedCreateInput = {
    id?: number
    idTurma: number
    idAtividadeSala: number
    presenca: string
  }

  export type ChamadaUpdateInput = {
    presenca?: StringFieldUpdateOperationsInput | string
    turma?: TurmaUpdateOneRequiredWithoutChamadaNestedInput
    atividadeSala?: AtividadeSalaUpdateOneRequiredWithoutChamadaNestedInput
  }

  export type ChamadaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTurma?: IntFieldUpdateOperationsInput | number
    idAtividadeSala?: IntFieldUpdateOperationsInput | number
    presenca?: StringFieldUpdateOperationsInput | string
  }

  export type ChamadaCreateManyInput = {
    id?: number
    idTurma: number
    idAtividadeSala: number
    presenca: string
  }

  export type ChamadaUpdateManyMutationInput = {
    presenca?: StringFieldUpdateOperationsInput | string
  }

  export type ChamadaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTurma?: IntFieldUpdateOperationsInput | number
    idAtividadeSala?: IntFieldUpdateOperationsInput | number
    presenca?: StringFieldUpdateOperationsInput | string
  }

  export type AtividadeSalaCreateInput = {
    descricao: string
    Chamada?: ChamadaCreateNestedManyWithoutAtividadeSalaInput
  }

  export type AtividadeSalaUncheckedCreateInput = {
    id?: number
    descricao: string
    Chamada?: ChamadaUncheckedCreateNestedManyWithoutAtividadeSalaInput
  }

  export type AtividadeSalaUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    Chamada?: ChamadaUpdateManyWithoutAtividadeSalaNestedInput
  }

  export type AtividadeSalaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    Chamada?: ChamadaUncheckedUpdateManyWithoutAtividadeSalaNestedInput
  }

  export type AtividadeSalaCreateManyInput = {
    id?: number
    descricao: string
  }

  export type AtividadeSalaUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type AtividadeSalaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type AtividadeExtraSalaCreateInput = {
    descricao: string
    dataAtividade: Date | string
  }

  export type AtividadeExtraSalaUncheckedCreateInput = {
    id?: number
    descricao: string
    dataAtividade: Date | string
  }

  export type AtividadeExtraSalaUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    dataAtividade?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtividadeExtraSalaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    dataAtividade?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtividadeExtraSalaCreateManyInput = {
    id?: number
    descricao: string
    dataAtividade: Date | string
  }

  export type AtividadeExtraSalaUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    dataAtividade?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtividadeExtraSalaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    dataAtividade?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DisciplinasListRelationFilter = {
    every?: DisciplinasWhereInput
    some?: DisciplinasWhereInput
    none?: DisciplinasWhereInput
  }

  export type DisciplinasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfessorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    genero?: SortOrder
    nascimento?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    curso?: SortOrder
    instituicao?: SortOrder
    anoConclusao?: SortOrder
    nivelFormacao?: SortOrder
  }

  export type ProfessorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProfessorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    genero?: SortOrder
    nascimento?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    curso?: SortOrder
    instituicao?: SortOrder
    anoConclusao?: SortOrder
    nivelFormacao?: SortOrder
  }

  export type ProfessorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    genero?: SortOrder
    nascimento?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    curso?: SortOrder
    instituicao?: SortOrder
    anoConclusao?: SortOrder
    nivelFormacao?: SortOrder
  }

  export type ProfessorSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ProfessorRelationFilter = {
    is?: ProfessorWhereInput
    isNot?: ProfessorWhereInput
  }

  export type TurmaListRelationFilter = {
    every?: TurmaWhereInput
    some?: TurmaWhereInput
    none?: TurmaWhereInput
  }

  export type TurmaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DisciplinasCountOrderByAggregateInput = {
    id?: SortOrder
    idProfessor?: SortOrder
    nomeDisciplina?: SortOrder
  }

  export type DisciplinasAvgOrderByAggregateInput = {
    id?: SortOrder
    idProfessor?: SortOrder
  }

  export type DisciplinasMaxOrderByAggregateInput = {
    id?: SortOrder
    idProfessor?: SortOrder
    nomeDisciplina?: SortOrder
  }

  export type DisciplinasMinOrderByAggregateInput = {
    id?: SortOrder
    idProfessor?: SortOrder
    nomeDisciplina?: SortOrder
  }

  export type DisciplinasSumOrderByAggregateInput = {
    id?: SortOrder
    idProfessor?: SortOrder
  }

  export type CursosCountOrderByAggregateInput = {
    id?: SortOrder
    nomeCurso?: SortOrder
  }

  export type CursosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CursosMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeCurso?: SortOrder
  }

  export type CursosMinOrderByAggregateInput = {
    id?: SortOrder
    nomeCurso?: SortOrder
  }

  export type CursosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type FaltasDisciplinaresListRelationFilter = {
    every?: FaltasDisciplinaresWhereInput
    some?: FaltasDisciplinaresWhereInput
    none?: FaltasDisciplinaresWhereInput
  }

  export type MatriculaListRelationFilter = {
    every?: MatriculaWhereInput
    some?: MatriculaWhereInput
    none?: MatriculaWhereInput
  }

  export type FaltasDisciplinaresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatriculaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlunoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nascimento?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    escola?: SortOrder
    periodo?: SortOrder
    serie?: SortOrder
    telefone?: SortOrder
    rendaFamilia?: SortOrder
  }

  export type AlunoAvgOrderByAggregateInput = {
    id?: SortOrder
    rendaFamilia?: SortOrder
  }

  export type AlunoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nascimento?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    escola?: SortOrder
    periodo?: SortOrder
    serie?: SortOrder
    telefone?: SortOrder
    rendaFamilia?: SortOrder
  }

  export type AlunoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nascimento?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    escola?: SortOrder
    periodo?: SortOrder
    serie?: SortOrder
    telefone?: SortOrder
    rendaFamilia?: SortOrder
  }

  export type AlunoSumOrderByAggregateInput = {
    id?: SortOrder
    rendaFamilia?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type AlunoRelationFilter = {
    is?: AlunoWhereInput
    isNot?: AlunoWhereInput
  }

  export type FaltasDisciplinaresCountOrderByAggregateInput = {
    id?: SortOrder
    idAluno?: SortOrder
    descricao?: SortOrder
    dataFalta?: SortOrder
  }

  export type FaltasDisciplinaresAvgOrderByAggregateInput = {
    id?: SortOrder
    idAluno?: SortOrder
  }

  export type FaltasDisciplinaresMaxOrderByAggregateInput = {
    id?: SortOrder
    idAluno?: SortOrder
    descricao?: SortOrder
    dataFalta?: SortOrder
  }

  export type FaltasDisciplinaresMinOrderByAggregateInput = {
    id?: SortOrder
    idAluno?: SortOrder
    descricao?: SortOrder
    dataFalta?: SortOrder
  }

  export type FaltasDisciplinaresSumOrderByAggregateInput = {
    id?: SortOrder
    idAluno?: SortOrder
  }

  export type MatriculaCountOrderByAggregateInput = {
    id?: SortOrder
    idAluno?: SortOrder
    dataInicio?: SortOrder
    situacao?: SortOrder
  }

  export type MatriculaAvgOrderByAggregateInput = {
    id?: SortOrder
    idAluno?: SortOrder
  }

  export type MatriculaMaxOrderByAggregateInput = {
    id?: SortOrder
    idAluno?: SortOrder
    dataInicio?: SortOrder
    situacao?: SortOrder
  }

  export type MatriculaMinOrderByAggregateInput = {
    id?: SortOrder
    idAluno?: SortOrder
    dataInicio?: SortOrder
    situacao?: SortOrder
  }

  export type MatriculaSumOrderByAggregateInput = {
    id?: SortOrder
    idAluno?: SortOrder
  }

  export type MatriculaRelationFilter = {
    is?: MatriculaWhereInput
    isNot?: MatriculaWhereInput
  }

  export type DisciplinasRelationFilter = {
    is?: DisciplinasWhereInput
    isNot?: DisciplinasWhereInput
  }

  export type CursosRelationFilter = {
    is?: CursosWhereInput
    isNot?: CursosWhereInput
  }

  export type ChamadaListRelationFilter = {
    every?: ChamadaWhereInput
    some?: ChamadaWhereInput
    none?: ChamadaWhereInput
  }

  export type ChamadaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TurmaCountOrderByAggregateInput = {
    id?: SortOrder
    idMatricula?: SortOrder
    idDisciplina?: SortOrder
    idCurso?: SortOrder
    nomeTurma?: SortOrder
  }

  export type TurmaAvgOrderByAggregateInput = {
    id?: SortOrder
    idMatricula?: SortOrder
    idDisciplina?: SortOrder
    idCurso?: SortOrder
  }

  export type TurmaMaxOrderByAggregateInput = {
    id?: SortOrder
    idMatricula?: SortOrder
    idDisciplina?: SortOrder
    idCurso?: SortOrder
    nomeTurma?: SortOrder
  }

  export type TurmaMinOrderByAggregateInput = {
    id?: SortOrder
    idMatricula?: SortOrder
    idDisciplina?: SortOrder
    idCurso?: SortOrder
    nomeTurma?: SortOrder
  }

  export type TurmaSumOrderByAggregateInput = {
    id?: SortOrder
    idMatricula?: SortOrder
    idDisciplina?: SortOrder
    idCurso?: SortOrder
  }

  export type TurmaRelationFilter = {
    is?: TurmaWhereInput
    isNot?: TurmaWhereInput
  }

  export type AtividadeSalaRelationFilter = {
    is?: AtividadeSalaWhereInput
    isNot?: AtividadeSalaWhereInput
  }

  export type ChamadaCountOrderByAggregateInput = {
    id?: SortOrder
    idTurma?: SortOrder
    idAtividadeSala?: SortOrder
    presenca?: SortOrder
  }

  export type ChamadaAvgOrderByAggregateInput = {
    id?: SortOrder
    idTurma?: SortOrder
    idAtividadeSala?: SortOrder
  }

  export type ChamadaMaxOrderByAggregateInput = {
    id?: SortOrder
    idTurma?: SortOrder
    idAtividadeSala?: SortOrder
    presenca?: SortOrder
  }

  export type ChamadaMinOrderByAggregateInput = {
    id?: SortOrder
    idTurma?: SortOrder
    idAtividadeSala?: SortOrder
    presenca?: SortOrder
  }

  export type ChamadaSumOrderByAggregateInput = {
    id?: SortOrder
    idTurma?: SortOrder
    idAtividadeSala?: SortOrder
  }

  export type AtividadeSalaCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type AtividadeSalaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AtividadeSalaMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type AtividadeSalaMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type AtividadeSalaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AtividadeExtraSalaCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    dataAtividade?: SortOrder
  }

  export type AtividadeExtraSalaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AtividadeExtraSalaMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    dataAtividade?: SortOrder
  }

  export type AtividadeExtraSalaMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    dataAtividade?: SortOrder
  }

  export type AtividadeExtraSalaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DisciplinasCreateNestedManyWithoutProfessorInput = {
    create?: XOR<DisciplinasCreateWithoutProfessorInput, DisciplinasUncheckedCreateWithoutProfessorInput> | DisciplinasCreateWithoutProfessorInput[] | DisciplinasUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: DisciplinasCreateOrConnectWithoutProfessorInput | DisciplinasCreateOrConnectWithoutProfessorInput[]
    createMany?: DisciplinasCreateManyProfessorInputEnvelope
    connect?: DisciplinasWhereUniqueInput | DisciplinasWhereUniqueInput[]
  }

  export type DisciplinasUncheckedCreateNestedManyWithoutProfessorInput = {
    create?: XOR<DisciplinasCreateWithoutProfessorInput, DisciplinasUncheckedCreateWithoutProfessorInput> | DisciplinasCreateWithoutProfessorInput[] | DisciplinasUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: DisciplinasCreateOrConnectWithoutProfessorInput | DisciplinasCreateOrConnectWithoutProfessorInput[]
    createMany?: DisciplinasCreateManyProfessorInputEnvelope
    connect?: DisciplinasWhereUniqueInput | DisciplinasWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DisciplinasUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<DisciplinasCreateWithoutProfessorInput, DisciplinasUncheckedCreateWithoutProfessorInput> | DisciplinasCreateWithoutProfessorInput[] | DisciplinasUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: DisciplinasCreateOrConnectWithoutProfessorInput | DisciplinasCreateOrConnectWithoutProfessorInput[]
    upsert?: DisciplinasUpsertWithWhereUniqueWithoutProfessorInput | DisciplinasUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: DisciplinasCreateManyProfessorInputEnvelope
    set?: DisciplinasWhereUniqueInput | DisciplinasWhereUniqueInput[]
    disconnect?: DisciplinasWhereUniqueInput | DisciplinasWhereUniqueInput[]
    delete?: DisciplinasWhereUniqueInput | DisciplinasWhereUniqueInput[]
    connect?: DisciplinasWhereUniqueInput | DisciplinasWhereUniqueInput[]
    update?: DisciplinasUpdateWithWhereUniqueWithoutProfessorInput | DisciplinasUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: DisciplinasUpdateManyWithWhereWithoutProfessorInput | DisciplinasUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: DisciplinasScalarWhereInput | DisciplinasScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DisciplinasUncheckedUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<DisciplinasCreateWithoutProfessorInput, DisciplinasUncheckedCreateWithoutProfessorInput> | DisciplinasCreateWithoutProfessorInput[] | DisciplinasUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: DisciplinasCreateOrConnectWithoutProfessorInput | DisciplinasCreateOrConnectWithoutProfessorInput[]
    upsert?: DisciplinasUpsertWithWhereUniqueWithoutProfessorInput | DisciplinasUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: DisciplinasCreateManyProfessorInputEnvelope
    set?: DisciplinasWhereUniqueInput | DisciplinasWhereUniqueInput[]
    disconnect?: DisciplinasWhereUniqueInput | DisciplinasWhereUniqueInput[]
    delete?: DisciplinasWhereUniqueInput | DisciplinasWhereUniqueInput[]
    connect?: DisciplinasWhereUniqueInput | DisciplinasWhereUniqueInput[]
    update?: DisciplinasUpdateWithWhereUniqueWithoutProfessorInput | DisciplinasUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: DisciplinasUpdateManyWithWhereWithoutProfessorInput | DisciplinasUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: DisciplinasScalarWhereInput | DisciplinasScalarWhereInput[]
  }

  export type ProfessorCreateNestedOneWithoutDisciplinaInput = {
    create?: XOR<ProfessorCreateWithoutDisciplinaInput, ProfessorUncheckedCreateWithoutDisciplinaInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutDisciplinaInput
    connect?: ProfessorWhereUniqueInput
  }

  export type TurmaCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<TurmaCreateWithoutDisciplinaInput, TurmaUncheckedCreateWithoutDisciplinaInput> | TurmaCreateWithoutDisciplinaInput[] | TurmaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutDisciplinaInput | TurmaCreateOrConnectWithoutDisciplinaInput[]
    createMany?: TurmaCreateManyDisciplinaInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type TurmaUncheckedCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<TurmaCreateWithoutDisciplinaInput, TurmaUncheckedCreateWithoutDisciplinaInput> | TurmaCreateWithoutDisciplinaInput[] | TurmaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutDisciplinaInput | TurmaCreateOrConnectWithoutDisciplinaInput[]
    createMany?: TurmaCreateManyDisciplinaInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type ProfessorUpdateOneRequiredWithoutDisciplinaNestedInput = {
    create?: XOR<ProfessorCreateWithoutDisciplinaInput, ProfessorUncheckedCreateWithoutDisciplinaInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutDisciplinaInput
    upsert?: ProfessorUpsertWithoutDisciplinaInput
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutDisciplinaInput, ProfessorUpdateWithoutDisciplinaInput>, ProfessorUncheckedUpdateWithoutDisciplinaInput>
  }

  export type TurmaUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<TurmaCreateWithoutDisciplinaInput, TurmaUncheckedCreateWithoutDisciplinaInput> | TurmaCreateWithoutDisciplinaInput[] | TurmaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutDisciplinaInput | TurmaCreateOrConnectWithoutDisciplinaInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutDisciplinaInput | TurmaUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: TurmaCreateManyDisciplinaInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutDisciplinaInput | TurmaUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutDisciplinaInput | TurmaUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type TurmaUncheckedUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<TurmaCreateWithoutDisciplinaInput, TurmaUncheckedCreateWithoutDisciplinaInput> | TurmaCreateWithoutDisciplinaInput[] | TurmaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutDisciplinaInput | TurmaCreateOrConnectWithoutDisciplinaInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutDisciplinaInput | TurmaUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: TurmaCreateManyDisciplinaInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutDisciplinaInput | TurmaUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutDisciplinaInput | TurmaUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type TurmaCreateNestedManyWithoutCursoInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type TurmaUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type TurmaUpdateManyWithoutCursoNestedInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutCursoInput | TurmaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutCursoInput | TurmaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutCursoInput | TurmaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type TurmaUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutCursoInput | TurmaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutCursoInput | TurmaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutCursoInput | TurmaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type FaltasDisciplinaresCreateNestedManyWithoutAlunoInput = {
    create?: XOR<FaltasDisciplinaresCreateWithoutAlunoInput, FaltasDisciplinaresUncheckedCreateWithoutAlunoInput> | FaltasDisciplinaresCreateWithoutAlunoInput[] | FaltasDisciplinaresUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: FaltasDisciplinaresCreateOrConnectWithoutAlunoInput | FaltasDisciplinaresCreateOrConnectWithoutAlunoInput[]
    createMany?: FaltasDisciplinaresCreateManyAlunoInputEnvelope
    connect?: FaltasDisciplinaresWhereUniqueInput | FaltasDisciplinaresWhereUniqueInput[]
  }

  export type MatriculaCreateNestedManyWithoutAlunoInput = {
    create?: XOR<MatriculaCreateWithoutAlunoInput, MatriculaUncheckedCreateWithoutAlunoInput> | MatriculaCreateWithoutAlunoInput[] | MatriculaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutAlunoInput | MatriculaCreateOrConnectWithoutAlunoInput[]
    createMany?: MatriculaCreateManyAlunoInputEnvelope
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
  }

  export type FaltasDisciplinaresUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<FaltasDisciplinaresCreateWithoutAlunoInput, FaltasDisciplinaresUncheckedCreateWithoutAlunoInput> | FaltasDisciplinaresCreateWithoutAlunoInput[] | FaltasDisciplinaresUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: FaltasDisciplinaresCreateOrConnectWithoutAlunoInput | FaltasDisciplinaresCreateOrConnectWithoutAlunoInput[]
    createMany?: FaltasDisciplinaresCreateManyAlunoInputEnvelope
    connect?: FaltasDisciplinaresWhereUniqueInput | FaltasDisciplinaresWhereUniqueInput[]
  }

  export type MatriculaUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<MatriculaCreateWithoutAlunoInput, MatriculaUncheckedCreateWithoutAlunoInput> | MatriculaCreateWithoutAlunoInput[] | MatriculaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutAlunoInput | MatriculaCreateOrConnectWithoutAlunoInput[]
    createMany?: MatriculaCreateManyAlunoInputEnvelope
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type FaltasDisciplinaresUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<FaltasDisciplinaresCreateWithoutAlunoInput, FaltasDisciplinaresUncheckedCreateWithoutAlunoInput> | FaltasDisciplinaresCreateWithoutAlunoInput[] | FaltasDisciplinaresUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: FaltasDisciplinaresCreateOrConnectWithoutAlunoInput | FaltasDisciplinaresCreateOrConnectWithoutAlunoInput[]
    upsert?: FaltasDisciplinaresUpsertWithWhereUniqueWithoutAlunoInput | FaltasDisciplinaresUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: FaltasDisciplinaresCreateManyAlunoInputEnvelope
    set?: FaltasDisciplinaresWhereUniqueInput | FaltasDisciplinaresWhereUniqueInput[]
    disconnect?: FaltasDisciplinaresWhereUniqueInput | FaltasDisciplinaresWhereUniqueInput[]
    delete?: FaltasDisciplinaresWhereUniqueInput | FaltasDisciplinaresWhereUniqueInput[]
    connect?: FaltasDisciplinaresWhereUniqueInput | FaltasDisciplinaresWhereUniqueInput[]
    update?: FaltasDisciplinaresUpdateWithWhereUniqueWithoutAlunoInput | FaltasDisciplinaresUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: FaltasDisciplinaresUpdateManyWithWhereWithoutAlunoInput | FaltasDisciplinaresUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: FaltasDisciplinaresScalarWhereInput | FaltasDisciplinaresScalarWhereInput[]
  }

  export type MatriculaUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<MatriculaCreateWithoutAlunoInput, MatriculaUncheckedCreateWithoutAlunoInput> | MatriculaCreateWithoutAlunoInput[] | MatriculaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutAlunoInput | MatriculaCreateOrConnectWithoutAlunoInput[]
    upsert?: MatriculaUpsertWithWhereUniqueWithoutAlunoInput | MatriculaUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: MatriculaCreateManyAlunoInputEnvelope
    set?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    disconnect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    delete?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    update?: MatriculaUpdateWithWhereUniqueWithoutAlunoInput | MatriculaUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: MatriculaUpdateManyWithWhereWithoutAlunoInput | MatriculaUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: MatriculaScalarWhereInput | MatriculaScalarWhereInput[]
  }

  export type FaltasDisciplinaresUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<FaltasDisciplinaresCreateWithoutAlunoInput, FaltasDisciplinaresUncheckedCreateWithoutAlunoInput> | FaltasDisciplinaresCreateWithoutAlunoInput[] | FaltasDisciplinaresUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: FaltasDisciplinaresCreateOrConnectWithoutAlunoInput | FaltasDisciplinaresCreateOrConnectWithoutAlunoInput[]
    upsert?: FaltasDisciplinaresUpsertWithWhereUniqueWithoutAlunoInput | FaltasDisciplinaresUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: FaltasDisciplinaresCreateManyAlunoInputEnvelope
    set?: FaltasDisciplinaresWhereUniqueInput | FaltasDisciplinaresWhereUniqueInput[]
    disconnect?: FaltasDisciplinaresWhereUniqueInput | FaltasDisciplinaresWhereUniqueInput[]
    delete?: FaltasDisciplinaresWhereUniqueInput | FaltasDisciplinaresWhereUniqueInput[]
    connect?: FaltasDisciplinaresWhereUniqueInput | FaltasDisciplinaresWhereUniqueInput[]
    update?: FaltasDisciplinaresUpdateWithWhereUniqueWithoutAlunoInput | FaltasDisciplinaresUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: FaltasDisciplinaresUpdateManyWithWhereWithoutAlunoInput | FaltasDisciplinaresUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: FaltasDisciplinaresScalarWhereInput | FaltasDisciplinaresScalarWhereInput[]
  }

  export type MatriculaUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<MatriculaCreateWithoutAlunoInput, MatriculaUncheckedCreateWithoutAlunoInput> | MatriculaCreateWithoutAlunoInput[] | MatriculaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutAlunoInput | MatriculaCreateOrConnectWithoutAlunoInput[]
    upsert?: MatriculaUpsertWithWhereUniqueWithoutAlunoInput | MatriculaUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: MatriculaCreateManyAlunoInputEnvelope
    set?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    disconnect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    delete?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    update?: MatriculaUpdateWithWhereUniqueWithoutAlunoInput | MatriculaUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: MatriculaUpdateManyWithWhereWithoutAlunoInput | MatriculaUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: MatriculaScalarWhereInput | MatriculaScalarWhereInput[]
  }

  export type AlunoCreateNestedOneWithoutFaltaDisciplinarInput = {
    create?: XOR<AlunoCreateWithoutFaltaDisciplinarInput, AlunoUncheckedCreateWithoutFaltaDisciplinarInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutFaltaDisciplinarInput
    connect?: AlunoWhereUniqueInput
  }

  export type AlunoUpdateOneRequiredWithoutFaltaDisciplinarNestedInput = {
    create?: XOR<AlunoCreateWithoutFaltaDisciplinarInput, AlunoUncheckedCreateWithoutFaltaDisciplinarInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutFaltaDisciplinarInput
    upsert?: AlunoUpsertWithoutFaltaDisciplinarInput
    connect?: AlunoWhereUniqueInput
    update?: XOR<XOR<AlunoUpdateToOneWithWhereWithoutFaltaDisciplinarInput, AlunoUpdateWithoutFaltaDisciplinarInput>, AlunoUncheckedUpdateWithoutFaltaDisciplinarInput>
  }

  export type AlunoCreateNestedOneWithoutMatriculaInput = {
    create?: XOR<AlunoCreateWithoutMatriculaInput, AlunoUncheckedCreateWithoutMatriculaInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutMatriculaInput
    connect?: AlunoWhereUniqueInput
  }

  export type TurmaCreateNestedManyWithoutMatriculaInput = {
    create?: XOR<TurmaCreateWithoutMatriculaInput, TurmaUncheckedCreateWithoutMatriculaInput> | TurmaCreateWithoutMatriculaInput[] | TurmaUncheckedCreateWithoutMatriculaInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutMatriculaInput | TurmaCreateOrConnectWithoutMatriculaInput[]
    createMany?: TurmaCreateManyMatriculaInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type TurmaUncheckedCreateNestedManyWithoutMatriculaInput = {
    create?: XOR<TurmaCreateWithoutMatriculaInput, TurmaUncheckedCreateWithoutMatriculaInput> | TurmaCreateWithoutMatriculaInput[] | TurmaUncheckedCreateWithoutMatriculaInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutMatriculaInput | TurmaCreateOrConnectWithoutMatriculaInput[]
    createMany?: TurmaCreateManyMatriculaInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type AlunoUpdateOneRequiredWithoutMatriculaNestedInput = {
    create?: XOR<AlunoCreateWithoutMatriculaInput, AlunoUncheckedCreateWithoutMatriculaInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutMatriculaInput
    upsert?: AlunoUpsertWithoutMatriculaInput
    connect?: AlunoWhereUniqueInput
    update?: XOR<XOR<AlunoUpdateToOneWithWhereWithoutMatriculaInput, AlunoUpdateWithoutMatriculaInput>, AlunoUncheckedUpdateWithoutMatriculaInput>
  }

  export type TurmaUpdateManyWithoutMatriculaNestedInput = {
    create?: XOR<TurmaCreateWithoutMatriculaInput, TurmaUncheckedCreateWithoutMatriculaInput> | TurmaCreateWithoutMatriculaInput[] | TurmaUncheckedCreateWithoutMatriculaInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutMatriculaInput | TurmaCreateOrConnectWithoutMatriculaInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutMatriculaInput | TurmaUpsertWithWhereUniqueWithoutMatriculaInput[]
    createMany?: TurmaCreateManyMatriculaInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutMatriculaInput | TurmaUpdateWithWhereUniqueWithoutMatriculaInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutMatriculaInput | TurmaUpdateManyWithWhereWithoutMatriculaInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type TurmaUncheckedUpdateManyWithoutMatriculaNestedInput = {
    create?: XOR<TurmaCreateWithoutMatriculaInput, TurmaUncheckedCreateWithoutMatriculaInput> | TurmaCreateWithoutMatriculaInput[] | TurmaUncheckedCreateWithoutMatriculaInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutMatriculaInput | TurmaCreateOrConnectWithoutMatriculaInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutMatriculaInput | TurmaUpsertWithWhereUniqueWithoutMatriculaInput[]
    createMany?: TurmaCreateManyMatriculaInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutMatriculaInput | TurmaUpdateWithWhereUniqueWithoutMatriculaInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutMatriculaInput | TurmaUpdateManyWithWhereWithoutMatriculaInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type MatriculaCreateNestedOneWithoutTurmaInput = {
    create?: XOR<MatriculaCreateWithoutTurmaInput, MatriculaUncheckedCreateWithoutTurmaInput>
    connectOrCreate?: MatriculaCreateOrConnectWithoutTurmaInput
    connect?: MatriculaWhereUniqueInput
  }

  export type DisciplinasCreateNestedOneWithoutTurmaInput = {
    create?: XOR<DisciplinasCreateWithoutTurmaInput, DisciplinasUncheckedCreateWithoutTurmaInput>
    connectOrCreate?: DisciplinasCreateOrConnectWithoutTurmaInput
    connect?: DisciplinasWhereUniqueInput
  }

  export type CursosCreateNestedOneWithoutTurmaInput = {
    create?: XOR<CursosCreateWithoutTurmaInput, CursosUncheckedCreateWithoutTurmaInput>
    connectOrCreate?: CursosCreateOrConnectWithoutTurmaInput
    connect?: CursosWhereUniqueInput
  }

  export type ChamadaCreateNestedManyWithoutTurmaInput = {
    create?: XOR<ChamadaCreateWithoutTurmaInput, ChamadaUncheckedCreateWithoutTurmaInput> | ChamadaCreateWithoutTurmaInput[] | ChamadaUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: ChamadaCreateOrConnectWithoutTurmaInput | ChamadaCreateOrConnectWithoutTurmaInput[]
    createMany?: ChamadaCreateManyTurmaInputEnvelope
    connect?: ChamadaWhereUniqueInput | ChamadaWhereUniqueInput[]
  }

  export type ChamadaUncheckedCreateNestedManyWithoutTurmaInput = {
    create?: XOR<ChamadaCreateWithoutTurmaInput, ChamadaUncheckedCreateWithoutTurmaInput> | ChamadaCreateWithoutTurmaInput[] | ChamadaUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: ChamadaCreateOrConnectWithoutTurmaInput | ChamadaCreateOrConnectWithoutTurmaInput[]
    createMany?: ChamadaCreateManyTurmaInputEnvelope
    connect?: ChamadaWhereUniqueInput | ChamadaWhereUniqueInput[]
  }

  export type MatriculaUpdateOneRequiredWithoutTurmaNestedInput = {
    create?: XOR<MatriculaCreateWithoutTurmaInput, MatriculaUncheckedCreateWithoutTurmaInput>
    connectOrCreate?: MatriculaCreateOrConnectWithoutTurmaInput
    upsert?: MatriculaUpsertWithoutTurmaInput
    connect?: MatriculaWhereUniqueInput
    update?: XOR<XOR<MatriculaUpdateToOneWithWhereWithoutTurmaInput, MatriculaUpdateWithoutTurmaInput>, MatriculaUncheckedUpdateWithoutTurmaInput>
  }

  export type DisciplinasUpdateOneRequiredWithoutTurmaNestedInput = {
    create?: XOR<DisciplinasCreateWithoutTurmaInput, DisciplinasUncheckedCreateWithoutTurmaInput>
    connectOrCreate?: DisciplinasCreateOrConnectWithoutTurmaInput
    upsert?: DisciplinasUpsertWithoutTurmaInput
    connect?: DisciplinasWhereUniqueInput
    update?: XOR<XOR<DisciplinasUpdateToOneWithWhereWithoutTurmaInput, DisciplinasUpdateWithoutTurmaInput>, DisciplinasUncheckedUpdateWithoutTurmaInput>
  }

  export type CursosUpdateOneRequiredWithoutTurmaNestedInput = {
    create?: XOR<CursosCreateWithoutTurmaInput, CursosUncheckedCreateWithoutTurmaInput>
    connectOrCreate?: CursosCreateOrConnectWithoutTurmaInput
    upsert?: CursosUpsertWithoutTurmaInput
    connect?: CursosWhereUniqueInput
    update?: XOR<XOR<CursosUpdateToOneWithWhereWithoutTurmaInput, CursosUpdateWithoutTurmaInput>, CursosUncheckedUpdateWithoutTurmaInput>
  }

  export type ChamadaUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<ChamadaCreateWithoutTurmaInput, ChamadaUncheckedCreateWithoutTurmaInput> | ChamadaCreateWithoutTurmaInput[] | ChamadaUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: ChamadaCreateOrConnectWithoutTurmaInput | ChamadaCreateOrConnectWithoutTurmaInput[]
    upsert?: ChamadaUpsertWithWhereUniqueWithoutTurmaInput | ChamadaUpsertWithWhereUniqueWithoutTurmaInput[]
    createMany?: ChamadaCreateManyTurmaInputEnvelope
    set?: ChamadaWhereUniqueInput | ChamadaWhereUniqueInput[]
    disconnect?: ChamadaWhereUniqueInput | ChamadaWhereUniqueInput[]
    delete?: ChamadaWhereUniqueInput | ChamadaWhereUniqueInput[]
    connect?: ChamadaWhereUniqueInput | ChamadaWhereUniqueInput[]
    update?: ChamadaUpdateWithWhereUniqueWithoutTurmaInput | ChamadaUpdateWithWhereUniqueWithoutTurmaInput[]
    updateMany?: ChamadaUpdateManyWithWhereWithoutTurmaInput | ChamadaUpdateManyWithWhereWithoutTurmaInput[]
    deleteMany?: ChamadaScalarWhereInput | ChamadaScalarWhereInput[]
  }

  export type ChamadaUncheckedUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<ChamadaCreateWithoutTurmaInput, ChamadaUncheckedCreateWithoutTurmaInput> | ChamadaCreateWithoutTurmaInput[] | ChamadaUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: ChamadaCreateOrConnectWithoutTurmaInput | ChamadaCreateOrConnectWithoutTurmaInput[]
    upsert?: ChamadaUpsertWithWhereUniqueWithoutTurmaInput | ChamadaUpsertWithWhereUniqueWithoutTurmaInput[]
    createMany?: ChamadaCreateManyTurmaInputEnvelope
    set?: ChamadaWhereUniqueInput | ChamadaWhereUniqueInput[]
    disconnect?: ChamadaWhereUniqueInput | ChamadaWhereUniqueInput[]
    delete?: ChamadaWhereUniqueInput | ChamadaWhereUniqueInput[]
    connect?: ChamadaWhereUniqueInput | ChamadaWhereUniqueInput[]
    update?: ChamadaUpdateWithWhereUniqueWithoutTurmaInput | ChamadaUpdateWithWhereUniqueWithoutTurmaInput[]
    updateMany?: ChamadaUpdateManyWithWhereWithoutTurmaInput | ChamadaUpdateManyWithWhereWithoutTurmaInput[]
    deleteMany?: ChamadaScalarWhereInput | ChamadaScalarWhereInput[]
  }

  export type TurmaCreateNestedOneWithoutChamadaInput = {
    create?: XOR<TurmaCreateWithoutChamadaInput, TurmaUncheckedCreateWithoutChamadaInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutChamadaInput
    connect?: TurmaWhereUniqueInput
  }

  export type AtividadeSalaCreateNestedOneWithoutChamadaInput = {
    create?: XOR<AtividadeSalaCreateWithoutChamadaInput, AtividadeSalaUncheckedCreateWithoutChamadaInput>
    connectOrCreate?: AtividadeSalaCreateOrConnectWithoutChamadaInput
    connect?: AtividadeSalaWhereUniqueInput
  }

  export type TurmaUpdateOneRequiredWithoutChamadaNestedInput = {
    create?: XOR<TurmaCreateWithoutChamadaInput, TurmaUncheckedCreateWithoutChamadaInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutChamadaInput
    upsert?: TurmaUpsertWithoutChamadaInput
    connect?: TurmaWhereUniqueInput
    update?: XOR<XOR<TurmaUpdateToOneWithWhereWithoutChamadaInput, TurmaUpdateWithoutChamadaInput>, TurmaUncheckedUpdateWithoutChamadaInput>
  }

  export type AtividadeSalaUpdateOneRequiredWithoutChamadaNestedInput = {
    create?: XOR<AtividadeSalaCreateWithoutChamadaInput, AtividadeSalaUncheckedCreateWithoutChamadaInput>
    connectOrCreate?: AtividadeSalaCreateOrConnectWithoutChamadaInput
    upsert?: AtividadeSalaUpsertWithoutChamadaInput
    connect?: AtividadeSalaWhereUniqueInput
    update?: XOR<XOR<AtividadeSalaUpdateToOneWithWhereWithoutChamadaInput, AtividadeSalaUpdateWithoutChamadaInput>, AtividadeSalaUncheckedUpdateWithoutChamadaInput>
  }

  export type ChamadaCreateNestedManyWithoutAtividadeSalaInput = {
    create?: XOR<ChamadaCreateWithoutAtividadeSalaInput, ChamadaUncheckedCreateWithoutAtividadeSalaInput> | ChamadaCreateWithoutAtividadeSalaInput[] | ChamadaUncheckedCreateWithoutAtividadeSalaInput[]
    connectOrCreate?: ChamadaCreateOrConnectWithoutAtividadeSalaInput | ChamadaCreateOrConnectWithoutAtividadeSalaInput[]
    createMany?: ChamadaCreateManyAtividadeSalaInputEnvelope
    connect?: ChamadaWhereUniqueInput | ChamadaWhereUniqueInput[]
  }

  export type ChamadaUncheckedCreateNestedManyWithoutAtividadeSalaInput = {
    create?: XOR<ChamadaCreateWithoutAtividadeSalaInput, ChamadaUncheckedCreateWithoutAtividadeSalaInput> | ChamadaCreateWithoutAtividadeSalaInput[] | ChamadaUncheckedCreateWithoutAtividadeSalaInput[]
    connectOrCreate?: ChamadaCreateOrConnectWithoutAtividadeSalaInput | ChamadaCreateOrConnectWithoutAtividadeSalaInput[]
    createMany?: ChamadaCreateManyAtividadeSalaInputEnvelope
    connect?: ChamadaWhereUniqueInput | ChamadaWhereUniqueInput[]
  }

  export type ChamadaUpdateManyWithoutAtividadeSalaNestedInput = {
    create?: XOR<ChamadaCreateWithoutAtividadeSalaInput, ChamadaUncheckedCreateWithoutAtividadeSalaInput> | ChamadaCreateWithoutAtividadeSalaInput[] | ChamadaUncheckedCreateWithoutAtividadeSalaInput[]
    connectOrCreate?: ChamadaCreateOrConnectWithoutAtividadeSalaInput | ChamadaCreateOrConnectWithoutAtividadeSalaInput[]
    upsert?: ChamadaUpsertWithWhereUniqueWithoutAtividadeSalaInput | ChamadaUpsertWithWhereUniqueWithoutAtividadeSalaInput[]
    createMany?: ChamadaCreateManyAtividadeSalaInputEnvelope
    set?: ChamadaWhereUniqueInput | ChamadaWhereUniqueInput[]
    disconnect?: ChamadaWhereUniqueInput | ChamadaWhereUniqueInput[]
    delete?: ChamadaWhereUniqueInput | ChamadaWhereUniqueInput[]
    connect?: ChamadaWhereUniqueInput | ChamadaWhereUniqueInput[]
    update?: ChamadaUpdateWithWhereUniqueWithoutAtividadeSalaInput | ChamadaUpdateWithWhereUniqueWithoutAtividadeSalaInput[]
    updateMany?: ChamadaUpdateManyWithWhereWithoutAtividadeSalaInput | ChamadaUpdateManyWithWhereWithoutAtividadeSalaInput[]
    deleteMany?: ChamadaScalarWhereInput | ChamadaScalarWhereInput[]
  }

  export type ChamadaUncheckedUpdateManyWithoutAtividadeSalaNestedInput = {
    create?: XOR<ChamadaCreateWithoutAtividadeSalaInput, ChamadaUncheckedCreateWithoutAtividadeSalaInput> | ChamadaCreateWithoutAtividadeSalaInput[] | ChamadaUncheckedCreateWithoutAtividadeSalaInput[]
    connectOrCreate?: ChamadaCreateOrConnectWithoutAtividadeSalaInput | ChamadaCreateOrConnectWithoutAtividadeSalaInput[]
    upsert?: ChamadaUpsertWithWhereUniqueWithoutAtividadeSalaInput | ChamadaUpsertWithWhereUniqueWithoutAtividadeSalaInput[]
    createMany?: ChamadaCreateManyAtividadeSalaInputEnvelope
    set?: ChamadaWhereUniqueInput | ChamadaWhereUniqueInput[]
    disconnect?: ChamadaWhereUniqueInput | ChamadaWhereUniqueInput[]
    delete?: ChamadaWhereUniqueInput | ChamadaWhereUniqueInput[]
    connect?: ChamadaWhereUniqueInput | ChamadaWhereUniqueInput[]
    update?: ChamadaUpdateWithWhereUniqueWithoutAtividadeSalaInput | ChamadaUpdateWithWhereUniqueWithoutAtividadeSalaInput[]
    updateMany?: ChamadaUpdateManyWithWhereWithoutAtividadeSalaInput | ChamadaUpdateManyWithWhereWithoutAtividadeSalaInput[]
    deleteMany?: ChamadaScalarWhereInput | ChamadaScalarWhereInput[]
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DisciplinasCreateWithoutProfessorInput = {
    nomeDisciplina: string
    Turma?: TurmaCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinasUncheckedCreateWithoutProfessorInput = {
    id?: number
    nomeDisciplina: string
    Turma?: TurmaUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinasCreateOrConnectWithoutProfessorInput = {
    where: DisciplinasWhereUniqueInput
    create: XOR<DisciplinasCreateWithoutProfessorInput, DisciplinasUncheckedCreateWithoutProfessorInput>
  }

  export type DisciplinasCreateManyProfessorInputEnvelope = {
    data: DisciplinasCreateManyProfessorInput | DisciplinasCreateManyProfessorInput[]
    skipDuplicates?: boolean
  }

  export type DisciplinasUpsertWithWhereUniqueWithoutProfessorInput = {
    where: DisciplinasWhereUniqueInput
    update: XOR<DisciplinasUpdateWithoutProfessorInput, DisciplinasUncheckedUpdateWithoutProfessorInput>
    create: XOR<DisciplinasCreateWithoutProfessorInput, DisciplinasUncheckedCreateWithoutProfessorInput>
  }

  export type DisciplinasUpdateWithWhereUniqueWithoutProfessorInput = {
    where: DisciplinasWhereUniqueInput
    data: XOR<DisciplinasUpdateWithoutProfessorInput, DisciplinasUncheckedUpdateWithoutProfessorInput>
  }

  export type DisciplinasUpdateManyWithWhereWithoutProfessorInput = {
    where: DisciplinasScalarWhereInput
    data: XOR<DisciplinasUpdateManyMutationInput, DisciplinasUncheckedUpdateManyWithoutProfessorInput>
  }

  export type DisciplinasScalarWhereInput = {
    AND?: DisciplinasScalarWhereInput | DisciplinasScalarWhereInput[]
    OR?: DisciplinasScalarWhereInput[]
    NOT?: DisciplinasScalarWhereInput | DisciplinasScalarWhereInput[]
    id?: IntFilter<"Disciplinas"> | number
    idProfessor?: IntFilter<"Disciplinas"> | number
    nomeDisciplina?: StringFilter<"Disciplinas"> | string
  }

  export type ProfessorCreateWithoutDisciplinaInput = {
    name: string
    telefone: string
    email: string
    genero: string
    nascimento: string
    rua: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    estado: string
    curso: string
    instituicao: string
    anoConclusao: string
    nivelFormacao: string
  }

  export type ProfessorUncheckedCreateWithoutDisciplinaInput = {
    id?: number
    name: string
    telefone: string
    email: string
    genero: string
    nascimento: string
    rua: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    estado: string
    curso: string
    instituicao: string
    anoConclusao: string
    nivelFormacao: string
  }

  export type ProfessorCreateOrConnectWithoutDisciplinaInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutDisciplinaInput, ProfessorUncheckedCreateWithoutDisciplinaInput>
  }

  export type TurmaCreateWithoutDisciplinaInput = {
    nomeTurma: string
    matricula: MatriculaCreateNestedOneWithoutTurmaInput
    curso: CursosCreateNestedOneWithoutTurmaInput
    Chamada?: ChamadaCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateWithoutDisciplinaInput = {
    id?: number
    idMatricula: number
    idCurso: number
    nomeTurma: string
    Chamada?: ChamadaUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaCreateOrConnectWithoutDisciplinaInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutDisciplinaInput, TurmaUncheckedCreateWithoutDisciplinaInput>
  }

  export type TurmaCreateManyDisciplinaInputEnvelope = {
    data: TurmaCreateManyDisciplinaInput | TurmaCreateManyDisciplinaInput[]
    skipDuplicates?: boolean
  }

  export type ProfessorUpsertWithoutDisciplinaInput = {
    update: XOR<ProfessorUpdateWithoutDisciplinaInput, ProfessorUncheckedUpdateWithoutDisciplinaInput>
    create: XOR<ProfessorCreateWithoutDisciplinaInput, ProfessorUncheckedCreateWithoutDisciplinaInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutDisciplinaInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutDisciplinaInput, ProfessorUncheckedUpdateWithoutDisciplinaInput>
  }

  export type ProfessorUpdateWithoutDisciplinaInput = {
    name?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nascimento?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    instituicao?: StringFieldUpdateOperationsInput | string
    anoConclusao?: StringFieldUpdateOperationsInput | string
    nivelFormacao?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessorUncheckedUpdateWithoutDisciplinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nascimento?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    instituicao?: StringFieldUpdateOperationsInput | string
    anoConclusao?: StringFieldUpdateOperationsInput | string
    nivelFormacao?: StringFieldUpdateOperationsInput | string
  }

  export type TurmaUpsertWithWhereUniqueWithoutDisciplinaInput = {
    where: TurmaWhereUniqueInput
    update: XOR<TurmaUpdateWithoutDisciplinaInput, TurmaUncheckedUpdateWithoutDisciplinaInput>
    create: XOR<TurmaCreateWithoutDisciplinaInput, TurmaUncheckedCreateWithoutDisciplinaInput>
  }

  export type TurmaUpdateWithWhereUniqueWithoutDisciplinaInput = {
    where: TurmaWhereUniqueInput
    data: XOR<TurmaUpdateWithoutDisciplinaInput, TurmaUncheckedUpdateWithoutDisciplinaInput>
  }

  export type TurmaUpdateManyWithWhereWithoutDisciplinaInput = {
    where: TurmaScalarWhereInput
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyWithoutDisciplinaInput>
  }

  export type TurmaScalarWhereInput = {
    AND?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
    OR?: TurmaScalarWhereInput[]
    NOT?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
    id?: IntFilter<"Turma"> | number
    idMatricula?: IntFilter<"Turma"> | number
    idDisciplina?: IntFilter<"Turma"> | number
    idCurso?: IntFilter<"Turma"> | number
    nomeTurma?: StringFilter<"Turma"> | string
  }

  export type TurmaCreateWithoutCursoInput = {
    nomeTurma: string
    matricula: MatriculaCreateNestedOneWithoutTurmaInput
    disciplina: DisciplinasCreateNestedOneWithoutTurmaInput
    Chamada?: ChamadaCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateWithoutCursoInput = {
    id?: number
    idMatricula: number
    idDisciplina: number
    nomeTurma: string
    Chamada?: ChamadaUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaCreateOrConnectWithoutCursoInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput>
  }

  export type TurmaCreateManyCursoInputEnvelope = {
    data: TurmaCreateManyCursoInput | TurmaCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type TurmaUpsertWithWhereUniqueWithoutCursoInput = {
    where: TurmaWhereUniqueInput
    update: XOR<TurmaUpdateWithoutCursoInput, TurmaUncheckedUpdateWithoutCursoInput>
    create: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput>
  }

  export type TurmaUpdateWithWhereUniqueWithoutCursoInput = {
    where: TurmaWhereUniqueInput
    data: XOR<TurmaUpdateWithoutCursoInput, TurmaUncheckedUpdateWithoutCursoInput>
  }

  export type TurmaUpdateManyWithWhereWithoutCursoInput = {
    where: TurmaScalarWhereInput
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyWithoutCursoInput>
  }

  export type FaltasDisciplinaresCreateWithoutAlunoInput = {
    descricao: string
    dataFalta: Date | string
  }

  export type FaltasDisciplinaresUncheckedCreateWithoutAlunoInput = {
    id?: number
    descricao: string
    dataFalta: Date | string
  }

  export type FaltasDisciplinaresCreateOrConnectWithoutAlunoInput = {
    where: FaltasDisciplinaresWhereUniqueInput
    create: XOR<FaltasDisciplinaresCreateWithoutAlunoInput, FaltasDisciplinaresUncheckedCreateWithoutAlunoInput>
  }

  export type FaltasDisciplinaresCreateManyAlunoInputEnvelope = {
    data: FaltasDisciplinaresCreateManyAlunoInput | FaltasDisciplinaresCreateManyAlunoInput[]
    skipDuplicates?: boolean
  }

  export type MatriculaCreateWithoutAlunoInput = {
    dataInicio: Date | string
    situacao: string
    Turma?: TurmaCreateNestedManyWithoutMatriculaInput
  }

  export type MatriculaUncheckedCreateWithoutAlunoInput = {
    id?: number
    dataInicio: Date | string
    situacao: string
    Turma?: TurmaUncheckedCreateNestedManyWithoutMatriculaInput
  }

  export type MatriculaCreateOrConnectWithoutAlunoInput = {
    where: MatriculaWhereUniqueInput
    create: XOR<MatriculaCreateWithoutAlunoInput, MatriculaUncheckedCreateWithoutAlunoInput>
  }

  export type MatriculaCreateManyAlunoInputEnvelope = {
    data: MatriculaCreateManyAlunoInput | MatriculaCreateManyAlunoInput[]
    skipDuplicates?: boolean
  }

  export type FaltasDisciplinaresUpsertWithWhereUniqueWithoutAlunoInput = {
    where: FaltasDisciplinaresWhereUniqueInput
    update: XOR<FaltasDisciplinaresUpdateWithoutAlunoInput, FaltasDisciplinaresUncheckedUpdateWithoutAlunoInput>
    create: XOR<FaltasDisciplinaresCreateWithoutAlunoInput, FaltasDisciplinaresUncheckedCreateWithoutAlunoInput>
  }

  export type FaltasDisciplinaresUpdateWithWhereUniqueWithoutAlunoInput = {
    where: FaltasDisciplinaresWhereUniqueInput
    data: XOR<FaltasDisciplinaresUpdateWithoutAlunoInput, FaltasDisciplinaresUncheckedUpdateWithoutAlunoInput>
  }

  export type FaltasDisciplinaresUpdateManyWithWhereWithoutAlunoInput = {
    where: FaltasDisciplinaresScalarWhereInput
    data: XOR<FaltasDisciplinaresUpdateManyMutationInput, FaltasDisciplinaresUncheckedUpdateManyWithoutAlunoInput>
  }

  export type FaltasDisciplinaresScalarWhereInput = {
    AND?: FaltasDisciplinaresScalarWhereInput | FaltasDisciplinaresScalarWhereInput[]
    OR?: FaltasDisciplinaresScalarWhereInput[]
    NOT?: FaltasDisciplinaresScalarWhereInput | FaltasDisciplinaresScalarWhereInput[]
    id?: IntFilter<"FaltasDisciplinares"> | number
    idAluno?: IntFilter<"FaltasDisciplinares"> | number
    descricao?: StringFilter<"FaltasDisciplinares"> | string
    dataFalta?: DateTimeFilter<"FaltasDisciplinares"> | Date | string
  }

  export type MatriculaUpsertWithWhereUniqueWithoutAlunoInput = {
    where: MatriculaWhereUniqueInput
    update: XOR<MatriculaUpdateWithoutAlunoInput, MatriculaUncheckedUpdateWithoutAlunoInput>
    create: XOR<MatriculaCreateWithoutAlunoInput, MatriculaUncheckedCreateWithoutAlunoInput>
  }

  export type MatriculaUpdateWithWhereUniqueWithoutAlunoInput = {
    where: MatriculaWhereUniqueInput
    data: XOR<MatriculaUpdateWithoutAlunoInput, MatriculaUncheckedUpdateWithoutAlunoInput>
  }

  export type MatriculaUpdateManyWithWhereWithoutAlunoInput = {
    where: MatriculaScalarWhereInput
    data: XOR<MatriculaUpdateManyMutationInput, MatriculaUncheckedUpdateManyWithoutAlunoInput>
  }

  export type MatriculaScalarWhereInput = {
    AND?: MatriculaScalarWhereInput | MatriculaScalarWhereInput[]
    OR?: MatriculaScalarWhereInput[]
    NOT?: MatriculaScalarWhereInput | MatriculaScalarWhereInput[]
    id?: IntFilter<"Matricula"> | number
    idAluno?: IntFilter<"Matricula"> | number
    dataInicio?: DateTimeFilter<"Matricula"> | Date | string
    situacao?: StringFilter<"Matricula"> | string
  }

  export type AlunoCreateWithoutFaltaDisciplinarInput = {
    nome: string
    nascimento: Date | string
    cpf: string
    rg: string
    escola: string
    periodo: string
    serie: string
    telefone: string
    rendaFamilia: Decimal | DecimalJsLike | number | string
    Matricula?: MatriculaCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateWithoutFaltaDisciplinarInput = {
    id?: number
    nome: string
    nascimento: Date | string
    cpf: string
    rg: string
    escola: string
    periodo: string
    serie: string
    telefone: string
    rendaFamilia: Decimal | DecimalJsLike | number | string
    Matricula?: MatriculaUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoCreateOrConnectWithoutFaltaDisciplinarInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutFaltaDisciplinarInput, AlunoUncheckedCreateWithoutFaltaDisciplinarInput>
  }

  export type AlunoUpsertWithoutFaltaDisciplinarInput = {
    update: XOR<AlunoUpdateWithoutFaltaDisciplinarInput, AlunoUncheckedUpdateWithoutFaltaDisciplinarInput>
    create: XOR<AlunoCreateWithoutFaltaDisciplinarInput, AlunoUncheckedCreateWithoutFaltaDisciplinarInput>
    where?: AlunoWhereInput
  }

  export type AlunoUpdateToOneWithWhereWithoutFaltaDisciplinarInput = {
    where?: AlunoWhereInput
    data: XOR<AlunoUpdateWithoutFaltaDisciplinarInput, AlunoUncheckedUpdateWithoutFaltaDisciplinarInput>
  }

  export type AlunoUpdateWithoutFaltaDisciplinarInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    escola?: StringFieldUpdateOperationsInput | string
    periodo?: StringFieldUpdateOperationsInput | string
    serie?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    rendaFamilia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Matricula?: MatriculaUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateWithoutFaltaDisciplinarInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    escola?: StringFieldUpdateOperationsInput | string
    periodo?: StringFieldUpdateOperationsInput | string
    serie?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    rendaFamilia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Matricula?: MatriculaUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoCreateWithoutMatriculaInput = {
    nome: string
    nascimento: Date | string
    cpf: string
    rg: string
    escola: string
    periodo: string
    serie: string
    telefone: string
    rendaFamilia: Decimal | DecimalJsLike | number | string
    faltaDisciplinar?: FaltasDisciplinaresCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateWithoutMatriculaInput = {
    id?: number
    nome: string
    nascimento: Date | string
    cpf: string
    rg: string
    escola: string
    periodo: string
    serie: string
    telefone: string
    rendaFamilia: Decimal | DecimalJsLike | number | string
    faltaDisciplinar?: FaltasDisciplinaresUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoCreateOrConnectWithoutMatriculaInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutMatriculaInput, AlunoUncheckedCreateWithoutMatriculaInput>
  }

  export type TurmaCreateWithoutMatriculaInput = {
    nomeTurma: string
    disciplina: DisciplinasCreateNestedOneWithoutTurmaInput
    curso: CursosCreateNestedOneWithoutTurmaInput
    Chamada?: ChamadaCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateWithoutMatriculaInput = {
    id?: number
    idDisciplina: number
    idCurso: number
    nomeTurma: string
    Chamada?: ChamadaUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaCreateOrConnectWithoutMatriculaInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutMatriculaInput, TurmaUncheckedCreateWithoutMatriculaInput>
  }

  export type TurmaCreateManyMatriculaInputEnvelope = {
    data: TurmaCreateManyMatriculaInput | TurmaCreateManyMatriculaInput[]
    skipDuplicates?: boolean
  }

  export type AlunoUpsertWithoutMatriculaInput = {
    update: XOR<AlunoUpdateWithoutMatriculaInput, AlunoUncheckedUpdateWithoutMatriculaInput>
    create: XOR<AlunoCreateWithoutMatriculaInput, AlunoUncheckedCreateWithoutMatriculaInput>
    where?: AlunoWhereInput
  }

  export type AlunoUpdateToOneWithWhereWithoutMatriculaInput = {
    where?: AlunoWhereInput
    data: XOR<AlunoUpdateWithoutMatriculaInput, AlunoUncheckedUpdateWithoutMatriculaInput>
  }

  export type AlunoUpdateWithoutMatriculaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    escola?: StringFieldUpdateOperationsInput | string
    periodo?: StringFieldUpdateOperationsInput | string
    serie?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    rendaFamilia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    faltaDisciplinar?: FaltasDisciplinaresUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateWithoutMatriculaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    escola?: StringFieldUpdateOperationsInput | string
    periodo?: StringFieldUpdateOperationsInput | string
    serie?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    rendaFamilia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    faltaDisciplinar?: FaltasDisciplinaresUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type TurmaUpsertWithWhereUniqueWithoutMatriculaInput = {
    where: TurmaWhereUniqueInput
    update: XOR<TurmaUpdateWithoutMatriculaInput, TurmaUncheckedUpdateWithoutMatriculaInput>
    create: XOR<TurmaCreateWithoutMatriculaInput, TurmaUncheckedCreateWithoutMatriculaInput>
  }

  export type TurmaUpdateWithWhereUniqueWithoutMatriculaInput = {
    where: TurmaWhereUniqueInput
    data: XOR<TurmaUpdateWithoutMatriculaInput, TurmaUncheckedUpdateWithoutMatriculaInput>
  }

  export type TurmaUpdateManyWithWhereWithoutMatriculaInput = {
    where: TurmaScalarWhereInput
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyWithoutMatriculaInput>
  }

  export type MatriculaCreateWithoutTurmaInput = {
    dataInicio: Date | string
    situacao: string
    aluno: AlunoCreateNestedOneWithoutMatriculaInput
  }

  export type MatriculaUncheckedCreateWithoutTurmaInput = {
    id?: number
    idAluno: number
    dataInicio: Date | string
    situacao: string
  }

  export type MatriculaCreateOrConnectWithoutTurmaInput = {
    where: MatriculaWhereUniqueInput
    create: XOR<MatriculaCreateWithoutTurmaInput, MatriculaUncheckedCreateWithoutTurmaInput>
  }

  export type DisciplinasCreateWithoutTurmaInput = {
    nomeDisciplina: string
    professor: ProfessorCreateNestedOneWithoutDisciplinaInput
  }

  export type DisciplinasUncheckedCreateWithoutTurmaInput = {
    id?: number
    idProfessor: number
    nomeDisciplina: string
  }

  export type DisciplinasCreateOrConnectWithoutTurmaInput = {
    where: DisciplinasWhereUniqueInput
    create: XOR<DisciplinasCreateWithoutTurmaInput, DisciplinasUncheckedCreateWithoutTurmaInput>
  }

  export type CursosCreateWithoutTurmaInput = {
    nomeCurso: string
  }

  export type CursosUncheckedCreateWithoutTurmaInput = {
    id?: number
    nomeCurso: string
  }

  export type CursosCreateOrConnectWithoutTurmaInput = {
    where: CursosWhereUniqueInput
    create: XOR<CursosCreateWithoutTurmaInput, CursosUncheckedCreateWithoutTurmaInput>
  }

  export type ChamadaCreateWithoutTurmaInput = {
    presenca: string
    atividadeSala: AtividadeSalaCreateNestedOneWithoutChamadaInput
  }

  export type ChamadaUncheckedCreateWithoutTurmaInput = {
    id?: number
    idAtividadeSala: number
    presenca: string
  }

  export type ChamadaCreateOrConnectWithoutTurmaInput = {
    where: ChamadaWhereUniqueInput
    create: XOR<ChamadaCreateWithoutTurmaInput, ChamadaUncheckedCreateWithoutTurmaInput>
  }

  export type ChamadaCreateManyTurmaInputEnvelope = {
    data: ChamadaCreateManyTurmaInput | ChamadaCreateManyTurmaInput[]
    skipDuplicates?: boolean
  }

  export type MatriculaUpsertWithoutTurmaInput = {
    update: XOR<MatriculaUpdateWithoutTurmaInput, MatriculaUncheckedUpdateWithoutTurmaInput>
    create: XOR<MatriculaCreateWithoutTurmaInput, MatriculaUncheckedCreateWithoutTurmaInput>
    where?: MatriculaWhereInput
  }

  export type MatriculaUpdateToOneWithWhereWithoutTurmaInput = {
    where?: MatriculaWhereInput
    data: XOR<MatriculaUpdateWithoutTurmaInput, MatriculaUncheckedUpdateWithoutTurmaInput>
  }

  export type MatriculaUpdateWithoutTurmaInput = {
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    situacao?: StringFieldUpdateOperationsInput | string
    aluno?: AlunoUpdateOneRequiredWithoutMatriculaNestedInput
  }

  export type MatriculaUncheckedUpdateWithoutTurmaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idAluno?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    situacao?: StringFieldUpdateOperationsInput | string
  }

  export type DisciplinasUpsertWithoutTurmaInput = {
    update: XOR<DisciplinasUpdateWithoutTurmaInput, DisciplinasUncheckedUpdateWithoutTurmaInput>
    create: XOR<DisciplinasCreateWithoutTurmaInput, DisciplinasUncheckedCreateWithoutTurmaInput>
    where?: DisciplinasWhereInput
  }

  export type DisciplinasUpdateToOneWithWhereWithoutTurmaInput = {
    where?: DisciplinasWhereInput
    data: XOR<DisciplinasUpdateWithoutTurmaInput, DisciplinasUncheckedUpdateWithoutTurmaInput>
  }

  export type DisciplinasUpdateWithoutTurmaInput = {
    nomeDisciplina?: StringFieldUpdateOperationsInput | string
    professor?: ProfessorUpdateOneRequiredWithoutDisciplinaNestedInput
  }

  export type DisciplinasUncheckedUpdateWithoutTurmaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idProfessor?: IntFieldUpdateOperationsInput | number
    nomeDisciplina?: StringFieldUpdateOperationsInput | string
  }

  export type CursosUpsertWithoutTurmaInput = {
    update: XOR<CursosUpdateWithoutTurmaInput, CursosUncheckedUpdateWithoutTurmaInput>
    create: XOR<CursosCreateWithoutTurmaInput, CursosUncheckedCreateWithoutTurmaInput>
    where?: CursosWhereInput
  }

  export type CursosUpdateToOneWithWhereWithoutTurmaInput = {
    where?: CursosWhereInput
    data: XOR<CursosUpdateWithoutTurmaInput, CursosUncheckedUpdateWithoutTurmaInput>
  }

  export type CursosUpdateWithoutTurmaInput = {
    nomeCurso?: StringFieldUpdateOperationsInput | string
  }

  export type CursosUncheckedUpdateWithoutTurmaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeCurso?: StringFieldUpdateOperationsInput | string
  }

  export type ChamadaUpsertWithWhereUniqueWithoutTurmaInput = {
    where: ChamadaWhereUniqueInput
    update: XOR<ChamadaUpdateWithoutTurmaInput, ChamadaUncheckedUpdateWithoutTurmaInput>
    create: XOR<ChamadaCreateWithoutTurmaInput, ChamadaUncheckedCreateWithoutTurmaInput>
  }

  export type ChamadaUpdateWithWhereUniqueWithoutTurmaInput = {
    where: ChamadaWhereUniqueInput
    data: XOR<ChamadaUpdateWithoutTurmaInput, ChamadaUncheckedUpdateWithoutTurmaInput>
  }

  export type ChamadaUpdateManyWithWhereWithoutTurmaInput = {
    where: ChamadaScalarWhereInput
    data: XOR<ChamadaUpdateManyMutationInput, ChamadaUncheckedUpdateManyWithoutTurmaInput>
  }

  export type ChamadaScalarWhereInput = {
    AND?: ChamadaScalarWhereInput | ChamadaScalarWhereInput[]
    OR?: ChamadaScalarWhereInput[]
    NOT?: ChamadaScalarWhereInput | ChamadaScalarWhereInput[]
    id?: IntFilter<"Chamada"> | number
    idTurma?: IntFilter<"Chamada"> | number
    idAtividadeSala?: IntFilter<"Chamada"> | number
    presenca?: StringFilter<"Chamada"> | string
  }

  export type TurmaCreateWithoutChamadaInput = {
    nomeTurma: string
    matricula: MatriculaCreateNestedOneWithoutTurmaInput
    disciplina: DisciplinasCreateNestedOneWithoutTurmaInput
    curso: CursosCreateNestedOneWithoutTurmaInput
  }

  export type TurmaUncheckedCreateWithoutChamadaInput = {
    id?: number
    idMatricula: number
    idDisciplina: number
    idCurso: number
    nomeTurma: string
  }

  export type TurmaCreateOrConnectWithoutChamadaInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutChamadaInput, TurmaUncheckedCreateWithoutChamadaInput>
  }

  export type AtividadeSalaCreateWithoutChamadaInput = {
    descricao: string
  }

  export type AtividadeSalaUncheckedCreateWithoutChamadaInput = {
    id?: number
    descricao: string
  }

  export type AtividadeSalaCreateOrConnectWithoutChamadaInput = {
    where: AtividadeSalaWhereUniqueInput
    create: XOR<AtividadeSalaCreateWithoutChamadaInput, AtividadeSalaUncheckedCreateWithoutChamadaInput>
  }

  export type TurmaUpsertWithoutChamadaInput = {
    update: XOR<TurmaUpdateWithoutChamadaInput, TurmaUncheckedUpdateWithoutChamadaInput>
    create: XOR<TurmaCreateWithoutChamadaInput, TurmaUncheckedCreateWithoutChamadaInput>
    where?: TurmaWhereInput
  }

  export type TurmaUpdateToOneWithWhereWithoutChamadaInput = {
    where?: TurmaWhereInput
    data: XOR<TurmaUpdateWithoutChamadaInput, TurmaUncheckedUpdateWithoutChamadaInput>
  }

  export type TurmaUpdateWithoutChamadaInput = {
    nomeTurma?: StringFieldUpdateOperationsInput | string
    matricula?: MatriculaUpdateOneRequiredWithoutTurmaNestedInput
    disciplina?: DisciplinasUpdateOneRequiredWithoutTurmaNestedInput
    curso?: CursosUpdateOneRequiredWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateWithoutChamadaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idMatricula?: IntFieldUpdateOperationsInput | number
    idDisciplina?: IntFieldUpdateOperationsInput | number
    idCurso?: IntFieldUpdateOperationsInput | number
    nomeTurma?: StringFieldUpdateOperationsInput | string
  }

  export type AtividadeSalaUpsertWithoutChamadaInput = {
    update: XOR<AtividadeSalaUpdateWithoutChamadaInput, AtividadeSalaUncheckedUpdateWithoutChamadaInput>
    create: XOR<AtividadeSalaCreateWithoutChamadaInput, AtividadeSalaUncheckedCreateWithoutChamadaInput>
    where?: AtividadeSalaWhereInput
  }

  export type AtividadeSalaUpdateToOneWithWhereWithoutChamadaInput = {
    where?: AtividadeSalaWhereInput
    data: XOR<AtividadeSalaUpdateWithoutChamadaInput, AtividadeSalaUncheckedUpdateWithoutChamadaInput>
  }

  export type AtividadeSalaUpdateWithoutChamadaInput = {
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type AtividadeSalaUncheckedUpdateWithoutChamadaInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type ChamadaCreateWithoutAtividadeSalaInput = {
    presenca: string
    turma: TurmaCreateNestedOneWithoutChamadaInput
  }

  export type ChamadaUncheckedCreateWithoutAtividadeSalaInput = {
    id?: number
    idTurma: number
    presenca: string
  }

  export type ChamadaCreateOrConnectWithoutAtividadeSalaInput = {
    where: ChamadaWhereUniqueInput
    create: XOR<ChamadaCreateWithoutAtividadeSalaInput, ChamadaUncheckedCreateWithoutAtividadeSalaInput>
  }

  export type ChamadaCreateManyAtividadeSalaInputEnvelope = {
    data: ChamadaCreateManyAtividadeSalaInput | ChamadaCreateManyAtividadeSalaInput[]
    skipDuplicates?: boolean
  }

  export type ChamadaUpsertWithWhereUniqueWithoutAtividadeSalaInput = {
    where: ChamadaWhereUniqueInput
    update: XOR<ChamadaUpdateWithoutAtividadeSalaInput, ChamadaUncheckedUpdateWithoutAtividadeSalaInput>
    create: XOR<ChamadaCreateWithoutAtividadeSalaInput, ChamadaUncheckedCreateWithoutAtividadeSalaInput>
  }

  export type ChamadaUpdateWithWhereUniqueWithoutAtividadeSalaInput = {
    where: ChamadaWhereUniqueInput
    data: XOR<ChamadaUpdateWithoutAtividadeSalaInput, ChamadaUncheckedUpdateWithoutAtividadeSalaInput>
  }

  export type ChamadaUpdateManyWithWhereWithoutAtividadeSalaInput = {
    where: ChamadaScalarWhereInput
    data: XOR<ChamadaUpdateManyMutationInput, ChamadaUncheckedUpdateManyWithoutAtividadeSalaInput>
  }

  export type DisciplinasCreateManyProfessorInput = {
    id?: number
    nomeDisciplina: string
  }

  export type DisciplinasUpdateWithoutProfessorInput = {
    nomeDisciplina?: StringFieldUpdateOperationsInput | string
    Turma?: TurmaUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinasUncheckedUpdateWithoutProfessorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeDisciplina?: StringFieldUpdateOperationsInput | string
    Turma?: TurmaUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinasUncheckedUpdateManyWithoutProfessorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeDisciplina?: StringFieldUpdateOperationsInput | string
  }

  export type TurmaCreateManyDisciplinaInput = {
    id?: number
    idMatricula: number
    idCurso: number
    nomeTurma: string
  }

  export type TurmaUpdateWithoutDisciplinaInput = {
    nomeTurma?: StringFieldUpdateOperationsInput | string
    matricula?: MatriculaUpdateOneRequiredWithoutTurmaNestedInput
    curso?: CursosUpdateOneRequiredWithoutTurmaNestedInput
    Chamada?: ChamadaUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateWithoutDisciplinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idMatricula?: IntFieldUpdateOperationsInput | number
    idCurso?: IntFieldUpdateOperationsInput | number
    nomeTurma?: StringFieldUpdateOperationsInput | string
    Chamada?: ChamadaUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateManyWithoutDisciplinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idMatricula?: IntFieldUpdateOperationsInput | number
    idCurso?: IntFieldUpdateOperationsInput | number
    nomeTurma?: StringFieldUpdateOperationsInput | string
  }

  export type TurmaCreateManyCursoInput = {
    id?: number
    idMatricula: number
    idDisciplina: number
    nomeTurma: string
  }

  export type TurmaUpdateWithoutCursoInput = {
    nomeTurma?: StringFieldUpdateOperationsInput | string
    matricula?: MatriculaUpdateOneRequiredWithoutTurmaNestedInput
    disciplina?: DisciplinasUpdateOneRequiredWithoutTurmaNestedInput
    Chamada?: ChamadaUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idMatricula?: IntFieldUpdateOperationsInput | number
    idDisciplina?: IntFieldUpdateOperationsInput | number
    nomeTurma?: StringFieldUpdateOperationsInput | string
    Chamada?: ChamadaUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateManyWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idMatricula?: IntFieldUpdateOperationsInput | number
    idDisciplina?: IntFieldUpdateOperationsInput | number
    nomeTurma?: StringFieldUpdateOperationsInput | string
  }

  export type FaltasDisciplinaresCreateManyAlunoInput = {
    id?: number
    descricao: string
    dataFalta: Date | string
  }

  export type MatriculaCreateManyAlunoInput = {
    id?: number
    dataInicio: Date | string
    situacao: string
  }

  export type FaltasDisciplinaresUpdateWithoutAlunoInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    dataFalta?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaltasDisciplinaresUncheckedUpdateWithoutAlunoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    dataFalta?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaltasDisciplinaresUncheckedUpdateManyWithoutAlunoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    dataFalta?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatriculaUpdateWithoutAlunoInput = {
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    situacao?: StringFieldUpdateOperationsInput | string
    Turma?: TurmaUpdateManyWithoutMatriculaNestedInput
  }

  export type MatriculaUncheckedUpdateWithoutAlunoInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    situacao?: StringFieldUpdateOperationsInput | string
    Turma?: TurmaUncheckedUpdateManyWithoutMatriculaNestedInput
  }

  export type MatriculaUncheckedUpdateManyWithoutAlunoInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    situacao?: StringFieldUpdateOperationsInput | string
  }

  export type TurmaCreateManyMatriculaInput = {
    id?: number
    idDisciplina: number
    idCurso: number
    nomeTurma: string
  }

  export type TurmaUpdateWithoutMatriculaInput = {
    nomeTurma?: StringFieldUpdateOperationsInput | string
    disciplina?: DisciplinasUpdateOneRequiredWithoutTurmaNestedInput
    curso?: CursosUpdateOneRequiredWithoutTurmaNestedInput
    Chamada?: ChamadaUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateWithoutMatriculaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idDisciplina?: IntFieldUpdateOperationsInput | number
    idCurso?: IntFieldUpdateOperationsInput | number
    nomeTurma?: StringFieldUpdateOperationsInput | string
    Chamada?: ChamadaUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateManyWithoutMatriculaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idDisciplina?: IntFieldUpdateOperationsInput | number
    idCurso?: IntFieldUpdateOperationsInput | number
    nomeTurma?: StringFieldUpdateOperationsInput | string
  }

  export type ChamadaCreateManyTurmaInput = {
    id?: number
    idAtividadeSala: number
    presenca: string
  }

  export type ChamadaUpdateWithoutTurmaInput = {
    presenca?: StringFieldUpdateOperationsInput | string
    atividadeSala?: AtividadeSalaUpdateOneRequiredWithoutChamadaNestedInput
  }

  export type ChamadaUncheckedUpdateWithoutTurmaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idAtividadeSala?: IntFieldUpdateOperationsInput | number
    presenca?: StringFieldUpdateOperationsInput | string
  }

  export type ChamadaUncheckedUpdateManyWithoutTurmaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idAtividadeSala?: IntFieldUpdateOperationsInput | number
    presenca?: StringFieldUpdateOperationsInput | string
  }

  export type ChamadaCreateManyAtividadeSalaInput = {
    id?: number
    idTurma: number
    presenca: string
  }

  export type ChamadaUpdateWithoutAtividadeSalaInput = {
    presenca?: StringFieldUpdateOperationsInput | string
    turma?: TurmaUpdateOneRequiredWithoutChamadaNestedInput
  }

  export type ChamadaUncheckedUpdateWithoutAtividadeSalaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTurma?: IntFieldUpdateOperationsInput | number
    presenca?: StringFieldUpdateOperationsInput | string
  }

  export type ChamadaUncheckedUpdateManyWithoutAtividadeSalaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTurma?: IntFieldUpdateOperationsInput | number
    presenca?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ProfessorCountOutputTypeDefaultArgs instead
     */
    export type ProfessorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProfessorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DisciplinasCountOutputTypeDefaultArgs instead
     */
    export type DisciplinasCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DisciplinasCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CursosCountOutputTypeDefaultArgs instead
     */
    export type CursosCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CursosCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlunoCountOutputTypeDefaultArgs instead
     */
    export type AlunoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlunoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MatriculaCountOutputTypeDefaultArgs instead
     */
    export type MatriculaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MatriculaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TurmaCountOutputTypeDefaultArgs instead
     */
    export type TurmaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TurmaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AtividadeSalaCountOutputTypeDefaultArgs instead
     */
    export type AtividadeSalaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AtividadeSalaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProfessorDefaultArgs instead
     */
    export type ProfessorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProfessorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DisciplinasDefaultArgs instead
     */
    export type DisciplinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DisciplinasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CursosDefaultArgs instead
     */
    export type CursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CursosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlunoDefaultArgs instead
     */
    export type AlunoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlunoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FaltasDisciplinaresDefaultArgs instead
     */
    export type FaltasDisciplinaresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FaltasDisciplinaresDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MatriculaDefaultArgs instead
     */
    export type MatriculaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MatriculaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TurmaDefaultArgs instead
     */
    export type TurmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TurmaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChamadaDefaultArgs instead
     */
    export type ChamadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChamadaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AtividadeSalaDefaultArgs instead
     */
    export type AtividadeSalaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AtividadeSalaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AtividadeExtraSalaDefaultArgs instead
     */
    export type AtividadeExtraSalaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AtividadeExtraSalaDefaultArgs<ExtArgs>

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