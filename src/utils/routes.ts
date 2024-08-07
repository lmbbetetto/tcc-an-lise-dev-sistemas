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
        search: '/aluno/search'
    },
    turma: {
        new: '/turma/create',
        search: '/turma/search'
    },
    curso: {
      new: '/curso/create',
      search: '/curso/search'
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
    }
  };
