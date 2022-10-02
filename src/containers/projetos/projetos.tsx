import { motion } from 'framer-motion';

import { SectionTitle } from '../../components/sectionTitle/sectionTitle';

const Projetos = () => {
  return (
    <div className="pb-16">
      <SectionTitle title="Projetos" />

      <motion.div
        initial={{ x: 0, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <p className="text-2xl text-center mt-4 font-light">
          🚧 Em breve, mais informações sobre meus projetos. 🚧
        </p>
      </motion.div>
    </div>
  );
};

export { Projetos };
