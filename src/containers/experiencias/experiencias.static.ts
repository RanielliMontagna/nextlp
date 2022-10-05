export interface ExperienciasProps {
  logoUrl: string;
  cargo: string;
  empresa: string;
  empresaUrl: string;
  periodo: string;
  descricao: string[];
}

export const listaExperiencias: ExperienciasProps[] = [
  {
    logoUrl: '/assets/svgs/empresas/sbsistemas.png',
    cargo: 'Desenvolvedor Front-end',
    empresa: 'SBSistemas',
    empresaUrl: 'https://www.sbsistemas.com.br/',
    periodo: 'Julho 2021 - Atual',
    descricao: [
      'Escrever código limpo, reutilizável e de fácil manutenção;',
      'Trabalhar com diversas tecnologias, como React, Next.js, TypeScript e Electron',
      'Colaborar entre equipes de desenvolvimento e design para criar soluções inovadoras.',
      'Criar e manter um design system de qualidade para garantir a consistência de toda a UI.',
    ],
  },
];
