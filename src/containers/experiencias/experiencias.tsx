import { motion } from 'framer-motion';

import { SectionTitle } from '../../components/sectionTitle/sectionTitle';
import { CardExperiencia } from './cardExperiencia/cardExperiencia';
import { listaExperiencias } from './experiencias.static';

const Experiencias = () => {
  return (
    <div className="pb-16 mx-auto max-w-7xl">
      <SectionTitle title="Experiências" />

      <motion.div className="flex flex-col gap-8 mx-auto items-center p-8">
        {listaExperiencias?.map((experiencia, index) => {
          return <CardExperiencia key={index} {...experiencia} />;
        })}
      </motion.div>
    </div>
  );
};

export { Experiencias };
