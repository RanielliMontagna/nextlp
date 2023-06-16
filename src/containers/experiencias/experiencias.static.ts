export interface ExperienciasProps {
  logo: ImageProps
  cargo: string
  empresa: string
  empresaUrl: string
  periodo: string
  descricao: string[]
}
import logosb from '@/assets/svgs/empresas/sbsistemas.svg'
import { ImageProps } from 'next/image'

export const listaExperiencias: ExperienciasProps[] = [
  {
    logo: logosb,
    cargo: 'Desenvolvedor Front-end',
    empresa: 'SBSistemas',
    empresaUrl: 'https://www.sbsistemas.com.br/',
    periodo: 'Julho 2021 - Atual',
    descricao: [
      'Como Tech Lead e Desenvolvedor Front-end, lidero uma equipe, garanto a qualidade do código e otimizo a usabilidade das aplicações. Utilizo React, TypeScript, JavaScript e outras ferramentas, seguindo metodologias ágeis e práticas de CI/CD. Meu objetivo é liderar a equipe, entregar projetos consistentes e impulsionar o crescimento da empresa.',
    ],
  },
]
