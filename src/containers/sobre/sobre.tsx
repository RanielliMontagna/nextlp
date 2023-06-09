import { motion } from 'framer-motion'

import { SectionTitle } from '@/components/sectionTitle/sectionTitle'
import useMediaQuery from '@/hooks/useMediaQuery'

export function Sobre() {
  const isMobile = useMediaQuery('(max-width: 600px)')

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
          alt="Foto de perfil"
          transition={{
            duration: 0.8,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          src="/assets/svgs/foto.svg"
          className=" md:mb-0 flex-shrink-0 object-cover w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />
        <div className="space-y-10 px-0 md:px-10">
          <motion.h4
            initial={{
              y: isMobile ? 30 : 0,
              x: isMobile ? 0 : 200,
              opacity: 0,
            }}
            transition={{
              duration: 1.0,
            }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            className="text-4xl font-semibold mt-8"
          >
            Olá, meu nome é <span className="text-accent underline">Ranielli</span>
          </motion.h4>
          <motion.div
            initial={{
              y: isMobile ? 30 : 0,
              x: isMobile ? 0 : 100,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
          >
            <p className="text-sm md:text-md lg:text-lg text-justify">
              Sou um entusiasta do desenvolvimento front-end, com 2 anos de experiência na área.
              Tenho ampla experiência em criar aplicações web utilizando React e Typescript como
              principais ferramentas. Tenho paixão por criar interfaces de usuário responsivas,
              intuitivas e de alta qualidade. Tenho um forte senso de detalhes e uma abordagem
              orientada a resultados no desenvolvimento de projetos. Tenho habilidades de resolução
              de problemas e sou proativo em encontrar soluções eficazes para desafios técnicos. Sou
              comprometido em me manter atualizado com as últimas tendências e melhores práticas do
              desenvolvimento front-end. Além do meu conhecimento técnico, sou uma pessoa
              colaborativa, com facilidade em trabalhar em equipe e em comunicação. Tenho a
              habilidade de entender as necessidades dos usuários finais e de criar experiências de
              usuário excepcionais, focadas na usabilidade e na estética.
            </p>
          </motion.div>

          <motion.div
            initial={{
              y: isMobile ? 30 : 0,
              x: isMobile ? 0 : 100,
              opacity: 0,
            }}
            transition={{
              duration: 1.4,
            }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
          >
            <button
              className="px-6 py-2 border border-gray-500 rounded-full uppercase text-xs 
                         tracking-widest text-gray-100 transition-all hover:border-accent hover:text-accent"
              onClick={() => window.open('/cv.pdf', '_blank')}
            >
              Acesse meu currículo
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
