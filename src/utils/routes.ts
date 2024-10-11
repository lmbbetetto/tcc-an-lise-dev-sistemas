export const routes = {
  auth: {
    home: '/auth-gestor',
  },
  home: {
    home: '/gestor',
  },
  professor: {
    new: '/gestor/professor/create',
    search: '/gestor/professor',
    edit: (id: string): string => `/gestor/professor/edit/${id}`,
  },
  aluno: {
    new: '/gestor/aluno/create',
    search: '/gestor/aluno',
    edit: (id: string): string => `/gestor/aluno/edit/${id}`,
  },
  turma: {
    new: '/gestor/turma/create',
    edit: (id: string): string => `/gestor/turma/edit/${id}`,
    search: '/gestor/turma'
  },
  curso: {
    new: '/gestor/curso/create',
    search: '/gestor/curso',
    edit: (id: string): string => `/gestor/curso/edit/${id}`,
  },
  disciplina: {
    new: '/gestor/disciplina/create',
    search: '/gestor/disciplina',
    edit: (id: string): string => `/gestor/disciplina/edit/${id}`
  },
  faltasDisciplinares: {
    new: '/gestor/faltas-disciplinares/create',
    search: '/gestor/faltas-disciplinares',
    edit: (id: string): string => `/gestor/faltas-disciplinares/edit/${id}`
  },
  userPage: {
    user: (id: string): string => `/gestor/user/${id}`,
  },
  chamada: {
    home: "/gestor/chamada",
    search: "/gestor/chamada/search"
  },
  faltas: {
    faltas: "/gestor/faltas"
  }
};

export const routesProfessor = {
  auth: {
    home: '/auth-professor',
  },
  home: {
    home: '/professor',
  },
  professor: {
    search: '/professor/professor',
  },
  aluno: {
    search: '/professor/aluno',
  },
  faltasDisciplinares: {
    new: '/professor/faltas-disciplinares/create',
    search: '/professor/faltas-disciplinares'
  },
  userPage: {
    user: (id: string): string => `/professor/user/${id}`,
  },
  chamada: {
    home: "/professor/chamada",
    search: "/professor/chamada/search"
  },
  faltas: {
    faltas: "/professor/faltas"
  }
}