import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

import SectionTitle from '@/components/sectionTitle/sectionTitle'

import { ExperienceCard, ExperienceProps } from './experienceCard/experienceCard'

export function Experiences() {
  const t = useTranslations('Experiences')
  const experiencesList = t.raw('experiences') as ExperienceProps[]

  return (
    <div className="pb-16 mx-auto max-w-7xl">
      <SectionTitle title={t('sectionTitle')} />

      <motion.div className="flex flex-col-reverse gap-8 mx-auto items-center p-8 text-justify">
        {Array.isArray(experiencesList) &&
          experiencesList.map((experiencia, index) => (
            <ExperienceCard key={index} {...experiencia} />
          ))}
      </motion.div>
    </div>
  )
}
