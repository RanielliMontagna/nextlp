import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

import Link from 'next/link';
import { theme } from '../../styles/theme';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Olá, meu nome é Ranielli Montagna', 'Bem-vindo ao meu portfólio'],
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
      text: 'Habilidades',
      href: '#habilidades',
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
        src="/assets/svg/foto.svg"
        alt="Profile"
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[5px]">
          Desenvolvedor Front-end
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor={theme.colors.accent} />
        </h1>
      </div>
      <div className="pt-5 flex gap-2">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            <button
              className="px-6 py-2 border border-[#242424] rounded-full uppercase text-xs 
                         tracking-widest text-gray-500 transition-all hover:border-accent hover:text-accent"
            >
              {link.text}
            </button>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export { Hero };
