import { useTranslations } from 'next-intl'
import Link from 'next/link'

import { motion } from 'framer-motion'

import perfilFoto from '@/assets/others/photo.jpeg'

import { TypeWriter } from './typewriter'
import Image from 'next/image'

export function Hero() {
  const t = useTranslations('Hero')
  const words = t.raw('words')

  const links = [
    { text: t('buttons.about'), href: '#about' },
    { text: t('buttons.experiences'), href: '#experiences' },
    { text: t('buttons.technologies'), href: '#technologies' },
    { text: t('buttons.projects'), href: '#projects' },
    { text: t('buttons.repositories'), href: '#repos' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"
    >
      <Image
        priority={true}
        src={perfilFoto.src}
        width={perfilFoto.width}
        height={perfilFoto.height}
        alt="Foto de perfil"
        className="w-32 h-32 rounded-full relative mx-auto object-cover shadow-lg lg:w-48 lg:h-48"
      />
      <div>
        <h2 className="text-sm uppercase text-gray-300 pb-2 tracking-[5px]">{t('career')}</h2>
        <h1 className="text-2xl lg:text-5xl font-semibold px-10">
          <TypeWriter words={words} />
        </h1>
      </div>
      <div className="pt-5 px-4 flex gap-2 flex-col sm:flex-row flex-wrap justify-center">
        {links.map((link, index) => (
          <motion.div
            initial={{
              x: index % 2 === 0 ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 0.5 }}
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
