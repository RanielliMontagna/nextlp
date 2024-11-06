import { useTranslations } from 'next-intl'

import SectionTitle from '@/components/sectionTitle/sectionTitle'
import { Card, ICard } from '@/components/card/card'

export function Projects() {
  const t = useTranslations('Projects')

  const projectsList = t.raw('projects') as ICard[]

  return (
    <div className="pb-16">
      <SectionTitle title={t('sectionTitle')} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto px-8">
        {Array.isArray(projectsList) &&
          projectsList.map((project, index) => <Card key={index} index={index} {...project} />)}
      </div>
    </div>
  )
}
