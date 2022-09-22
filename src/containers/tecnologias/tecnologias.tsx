import { motion } from 'framer-motion';

import { SectionTitle } from '../../components/sectionTitle/sectionTitle';

const Tecnologias = () => {
  return (
    <div className="pb-16">
      <SectionTitle title="Tecnologias" />

      <motion.p
        initial={{ x: -500, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-2xl text-center mt-4 font-light"
      >
        🚧 Em breve, mais informaçõe sobre minhas tecnologias. 🚧
      </motion.p>
    </div>
  );
};

export { Tecnologias };
