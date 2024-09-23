
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.17.0
 * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
 */
Prisma.prismaVersion = {
  client: "5.17.0",
  engine: "393aa359c9ad4a4bb28630fb5613f9c281cde053"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ProfessorScalarFieldEnum = {
  id: 'id',
  name: 'name',
  nascimento: 'nascimento',
  telefone: 'telefone',
  email: 'email',
  anoConclusao: 'anoConclusao',
  bairro: 'bairro',
  cidade: 'cidade',
  complemento: 'complemento',
  curso: 'curso',
  estado: 'estado',
  genero: 'genero',
  instituicao: 'instituicao',
  nivelFormacao: 'nivelFormacao',
  numero: 'numero',
  rua: 'rua'
};

exports.Prisma.DisciplinasScalarFieldEnum = {
  id: 'id',
  idProfessor: 'idProfessor',
  nomeDisciplina: 'nomeDisciplina',
  idCurso: 'idCurso'
};

exports.Prisma.CursosScalarFieldEnum = {
  id: 'id',
  nomeCurso: 'nomeCurso'
};

exports.Prisma.AlunoScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  nascimento: 'nascimento',
  cpf: 'cpf',
  rg: 'rg',
  escola: 'escola',
  periodo: 'periodo',
  serie: 'serie',
  telefone: 'telefone',
  rendaFamilia: 'rendaFamilia',
  bairro: 'bairro',
  cidade: 'cidade',
  complemento: 'complemento',
  mae: 'mae',
  numero: 'numero',
  pai: 'pai',
  phoneMae: 'phoneMae',
  phonePai: 'phonePai',
  profMae: 'profMae',
  profPai: 'profPai',
  rua: 'rua',
  uf: 'uf'
};

exports.Prisma.FaltasDisciplinaresScalarFieldEnum = {
  id: 'id',
  idAluno: 'idAluno',
  descricao: 'descricao',
  dataFalta: 'dataFalta'
};

exports.Prisma.MatriculaScalarFieldEnum = {
  id: 'id',
  idAluno: 'idAluno',
  dataInicio: 'dataInicio',
  situacao: 'situacao'
};

exports.Prisma.TurmaScalarFieldEnum = {
  id: 'id',
  idMatricula: 'idMatricula',
  idDisciplina: 'idDisciplina',
  idCurso: 'idCurso',
  nomeTurma: 'nomeTurma'
};

exports.Prisma.ChamadaScalarFieldEnum = {
  id: 'id',
  idTurma: 'idTurma',
  idAtividadeSala: 'idAtividadeSala',
  presenca: 'presenca'
};

exports.Prisma.AtividadeSalaScalarFieldEnum = {
  id: 'id',
  descricao: 'descricao'
};

exports.Prisma.AtividadeExtraSalaScalarFieldEnum = {
  id: 'id',
  descricao: 'descricao',
  dataAtividade: 'dataAtividade'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
