import { SectionTitle } from '@/components/sectionTitle/sectionTitle';

import { listaProjetos } from './projetos.static';
import { CardProjeto } from './cardProjeto/cardProjeto';

export function Projetos() {
  return (
    <div className="pb-16">
      <SectionTitle title="Projetos" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto px-8">
        {listaProjetos
          .slice(0)
          .reverse()
          .map((projetos, index) => {
            return <CardProjeto key={index} index={index} {...projetos} />;
          })}
      </div>
    </div>
  );
}
