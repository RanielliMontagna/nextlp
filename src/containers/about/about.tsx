import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'

import SectionTitle from '@/components/sectionTitle/sectionTitle'
import useMediaQuery from '@/hooks/useMediaQuery'

import perfilFoto from '@/assets/svgs/foto.svg'

export function About() {
  const { t: translate } = useTranslation('about')
  const isMobile = useMediaQuery('(max-width: 600px)')

  return (
    <div className="pb-16">
      <SectionTitle title={translate('sectionTitle')} />

      <div
        className="flex flex-col relative text-center items-center
      md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto"
      >
        <motion.img
          src={perfilFoto.src}
          width={perfilFoto.width}
          height={perfilFoto.height}
          alt="Foto de perfil"
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1, x: 0 }}
          className=" md:mb-0 flex-shrink-0 object-cover w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />
        <div className="space-y-10 px-0 md:px-10">
          <motion.h4
            initial={{ y: isMobile ? 30 : 0, x: isMobile ? 0 : 200, opacity: 0 }}
            transition={{ duration: 1.0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            className="text-4xl font-semibold mt-8"
          >
            {translate('title')} <span className="text-accent underline">Ranielli</span>
          </motion.h4>
          <motion.div
            initial={{ y: isMobile ? 30 : 0, x: isMobile ? 0 : 100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
          >
            <p className="text-sm md:text-md lg:text-lg text-justify">{translate('description')}</p>
          </motion.div>

          <motion.div
            initial={{ y: isMobile ? 30 : 0, x: isMobile ? 0 : 100, opacity: 0 }}
            transition={{ duration: 1.4 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
          >
            <button
              className="px-6 py-2 border border-gray-500 rounded-full uppercase text-xs 
                         tracking-widest text-gray-100 transition-all hover:border-accent hover:text-accent"
              onClick={() => window.open('/cv.pdf', '_blank')}
            >
              {translate('accessCV')}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
