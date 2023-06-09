export interface ExperienciasProps {
  logoUrl: string
  cargo: string
  empresa: string
  empresaUrl: string
  periodo: string
  descricao: string[]
}

export const listaExperiencias: ExperienciasProps[] = [
  {
    logoUrl: '/assets/svgs/empresas/sbsistemas.svg',
    cargo: 'Desenvolvedor Front-end',
    empresa: 'SBSistemas',
    empresaUrl: 'https://www.sbsistemas.com.br/',
    periodo: 'Maio 2021 - Atual',
    descricao: [
      'Como Tech Lead e Desenvolvedor Front-end, lidero uma equipe, garanto a qualidade do código e otimizo a usabilidade das aplicações. Utilizo React, TypeScript, JavaScript e outras ferramentas, seguindo metodologias ágeis e práticas de CI/CD. Meu objetivo é liderar a equipe, entregar projetos consistentes e impulsionar o crescimento da empresa.',
    ],
  },
]
