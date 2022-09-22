import { motion } from 'framer-motion';
import { SectionTitle } from '../../components/sectionTitle/sectionTitle';

const Sobre = () => {
  return (
    <div className="pb-16">
      <SectionTitle title="Sobre" />

      <div
        className="flex flex-col relative text-center items-center
      md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto"
      >
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          src="/assets/svg/foto.svg"
          className=" md:mb-0 flex-shrink-0 object-cover w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />
        <div className="space-y-10 px-0 md:px-10">
          <motion.h4
            initial={{
              x: 200,
              opacity: 0,
            }}
            transition={{
              duration: 1.0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl font-semibold mt-8"
          >
            Olá, meu nome é <span className="text-accent underline">Ranielli</span>
          </motion.h4>
          <motion.p
            initial={{
              x: 500,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-sm md:text-md lg:text-lg text-justify"
          >
            sou um desenvolvedor front-end apaixonado por tecnologia e design. Atualmente trabalho
            como desenvolvedor na <span className="font-semibold">SB Sistemas</span>. Sou formado em
            Análise e Desenvolvimento de Sistemas pela{' '}
            <span className="font-semibold">Universidade de Passo Fundo (UPF)</span>. Além disso,
            sou um entusiasta de tecnologias web e mobile, e estou sempre em busca de novos
            conhecimentos. Me considero uma pessoa proativa, comunicativa e que gosta de trabalhar
            em equipe. Criei esse portfólio com o intuito de mostrar um pouco sobre mim. Espero que
            você goste!
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export { Sobre };