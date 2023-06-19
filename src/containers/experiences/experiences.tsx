import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'

import SectionTitle from '@/components/sectionTitle/sectionTitle'

import { CardExperiencia, ExperienceProps } from './experienceCard/experienceCard'

export function Experiences() {
  const { t: translate } = useTranslation('experiences')

  const experiencesList = translate('experiences', { returnObjects: true }) as ExperienceProps[]

  return (
    <div className="pb-16 mx-auto max-w-7xl">
      <SectionTitle title="Experiências" />

      <motion.div className="flex flex-col gap-8 mx-auto items-center p-8 text-justify">
        {experiencesList?.map((experiencia, index) => (
          <CardExperiencia key={index} {...experiencia} />
        ))}
      </motion.div>
    </div>
  )
}
