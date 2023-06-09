export interface IListaProjetos {
  nome: string
  descricao: string
  github: string
  tecnologias: string[]
}

export const listaProjetos: IListaProjetos[] = [
  {
    nome: 'LaraFlix',
    descricao:
      'Projeto desenvolvido em aula, com o objetivo de criar um projeto de controle de atores e filmes.',
    github: 'https://github.com/RanielliMontagna/LaraFlix',
    tecnologias: ['PHP', 'Laravel', 'AdminLTE'],
  },
  {
    nome: 'RocketHelp',
    descricao:
      'Projeto de um sistema de ajuda na organização de tasks utilizando React Native e Firebase.',
    github: 'https://github.com/RanielliMontagna/rockethelp',
    tecnologias: ['React Native', 'Firebase'],
  },
  {
    nome: 'RM Monorepo',
    descricao: 'Monorepo de componentes utilizados em alguns projetos pessoais.',
    github: 'https://github.com/RanielliMontagna/rm_monorepo',
    tecnologias: ['React', 'Storybook', 'Lerna', 'Jest'],
  },
  {
    nome: 'Quantun',
    descricao:
      'Projeto em processo de criação de um monorepo utilizando o Turborepo como ferramenta.',
    github: 'https://github.com/RanielliMontagna/quantun',
    tecnologias: ['React', 'Typescript', 'Turborepo'],
  },
  {
    nome: 'Olá Venda',
    descricao:
      'Consiste em sistema no formato PDV criado somente para projeto da disciplina de Topicos Especiais.',
    github: 'https://github.com/RanielliMontagna/olavenda',
    tecnologias: ['React', 'Zustand', 'React Hook Form'],
  },
  {
    nome: 'DataIntegra - Backend',
    descricao:
      'Backend de um projeto de controle de receitas e despesas. Feito com o intuito de ensinar o uso de NodeJS com Prisma e Typescript.',
    github: 'https://github.com/RanielliMontagna/apiIntegra',
    tecnologias: ['NodeJS', 'Prisma', 'Jest', 'Swagger'],
  },
  {
    nome: 'DataIntegra - Front',
    descricao:
      'Projeto com controle de receitas e despesas. Feito com o intuito de ensinar o básico de React + Typescript.',
    github: 'https://github.com/RanielliMontagna/webIntegra',
    tecnologias: ['React', 'MaterialUI', 'Zustand'],
  },
  {
    nome: 'NLW eSports',
    descricao:
      'Projeto criado durante a 9º NLW da Rocketseat.  Voltado ao universo de games para conectar pessoas que precisam de um duo para jogar!',
    github: 'https://github.com/RanielliMontagna/nlw_eSports',
    tecnologias: ['React', 'Node', 'Prisma', 'Tailwind'],
  },
  {
    nome: 'Quarto Digital - Backend',
    descricao:
      'Api do sistema interno de gestão hoteleira criado como projeto de conclusão de curso.',
    github: 'https://github.com/RanielliMontagna/api-quarto-digital',
    tecnologias: ['Node', 'Express', 'Postgres', 'Prisma'],
  },
  {
    nome: 'Quarto Digital - Frontend',
    descricao: 'Sistema interno de gestão hoteleira criado como projeto de conclusão de curso.',
    github: 'https://github.com/RanielliMontagna/app-quarto-digital',
    tecnologias: ['React', 'Redux', 'Typescript', 'Context'],
  },
]
