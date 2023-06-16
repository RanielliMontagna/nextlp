import { useTranslation } from 'next-i18next'
import Link from 'next/link'

import { Cursor } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

import { theme } from '@/styles/theme'
import perfilFoto from '@/assets/svgs/foto.svg'

import { TypeWriter } from './typewriter'

export function Hero() {
  const { t: translate } = useTranslation('hero')
  const words = translate('words', { returnObjects: true }) as string[]

  const links = [
    {
      text: translate('buttons.about'),
      href: '#sobre',
    },
    {
      text: translate('buttons.experiences'),
      href: '#experiencias',
    },
    {
      text: translate('buttons.technologies'),
      href: '#tecnologias',
    },
    {
      text: translate('buttons.projects'),
      href: '#projetos',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"
    >
      <img
        {...perfilFoto}
        alt="Foto de perfil"
        className="w-32 h-32 rounded-full relative mx-auto object-cover"
      />
      <div>
        <h2 className="text-sm uppercase text-gray-300 pb-2 tracking-[5px]">
          {translate('career')}
        </h2>
        <h1 className="text-2xl lg:text-5xl font-semibold px-10">
          <TypeWriter words={words} />
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
  )
}
