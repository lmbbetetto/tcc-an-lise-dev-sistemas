export const routes = {
  auth: {
    home: '/auth',
  },
  home: {
    home: '/',
  },
  professor: {
    new: '/professor/create',
    search: '/professor/search',
    edit: (id: string): string => `/professor/edit/${id}`,
  },
  aluno: {
    new: '/aluno/create',
    search: '/aluno/search',
    edit: (id: string): string => `/aluno/edit/${id}`,
  },
  turma: {
    new: '/turma/create',
    search: '/turma/search'
  },
  curso: {
    new: '/curso/create',
    search: '/curso/search',
    edit: (id: string): string => `/curso/edit/${id}`,
  },
  disciplina: {
    new: '/disciplina/create',
    search: '/disciplina/search'
  },
  faltasDisciplinares: {
    new: '/faltas-disciplinares/create',
    search: '/faltas-disciplinares/search'
  },
  userPage: {
    user: (id: string): string => `/user/${id}`,
  },
  chamada: {
    home: "/chamada"
  }
};
