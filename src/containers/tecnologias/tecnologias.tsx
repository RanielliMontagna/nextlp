import { motion } from 'framer-motion';

import { SectionTitle } from '../../components/sectionTitle/sectionTitle';
import { Card } from './card/card';

const Tecnologias = () => {
  return (
    <div className="pb-16">
      <SectionTitle title="Tecnologias" />

      <div className="flex flex-col justify-evenly items-center max-w-7xl px-10 mx-auto">
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          As tecnologias que eu mais uso estão voltadas para o desenvolvimento web, mas também tenho
          experiência com desenvolvimento mobile e desktop. Abaixo estão algumas das tecnologias que
          eu mais uso.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8">
          <div className="flex flex-row justify-center items-center gap-2">
            <Card
              title="React"
              logoUrl="/assets/svgs/tecnologias/react.svg"
              siteUrl="https://reactjs.org/"
              duration={1.2}
              y={50}
            />
            <Card
              title="Typescript"
              logoUrl="/assets/svgs/tecnologias/typescript.svg"
              siteUrl="https://www.typescriptlang.org/"
              duration={1.4}
              y={55}
            />
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            <Card
              title="Javascript"
              logoUrl="/assets/svgs/tecnologias/javascript.svg"
              siteUrl="https://www.javascript.com/"
              duration={1.6}
              y={60}
            />
            <Card
              title="Node"
              logoUrl="/assets/svgs/tecnologias/node.svg"
              siteUrl="https://nodejs.org/en/"
              duration={1.8}
              y={65}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Tecnologias };
