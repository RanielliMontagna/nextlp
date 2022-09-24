import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

import Link from 'next/link';
import { theme } from '../../styles/theme';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Olá, meu nome é', 'Ranielli Montagna', 'Bem-vindo ao meu portfólio!'],
    loop: true,
    delaySpeed: 1000,
  });

  const links = [
    {
      text: 'Sobre',
      href: '#sobre',
    },
    {
      text: 'Experiências',
      href: '#experiencias',
    },
    {
      text: 'Tecnologias',
      href: '#tecnologias',
    },
    {
      text: 'Projetos',
      href: '#projetos',
    },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: 0.5,
      }}
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"
    >
      <img
        className="w-32 h-32 rounded-full relative mx-auto object-cover"
        src="/assets/svgs/foto.svg"
        alt="Foto de perfil"
      />
      <div>
        <h2 className="text-sm uppercase text-gray-300 pb-2 tracking-[5px]">
          Desenvolvedor Front-end
        </h2>
        <h1 className="text-2xl lg:text-5xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor={theme.colors.accent} />
        </h1>
      </div>
      <div className="pt-5 flex gap-2 flex-col sm:flex-row">
        {links.map((link, index) => (
          <motion.div
            initial={{
              x: index % 2 === 0 ? -200 : 200,
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            key={link.href}
          >
            <Link href={link.href}>
              <button
                className="px-6 py-2 border border-gray-500 rounded-full uppercase text-xs 
                         tracking-widest text-gray-100 transition-all hover:border-accent hover:text-accent"
              >
                {link.text}
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export { Hero };
