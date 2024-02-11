import { useTranslation } from 'next-i18next'

import SectionTitle from '@/components/sectionTitle/sectionTitle'
import { Card, ICard } from '@/components/card/card'

export function Projects() {
  const { t: translate } = useTranslation('projects')

  const projectsList = translate('projects', { returnObjects: true }) as ICard[]

  return (
    <div className="pb-16">
      <SectionTitle title={translate('sectionTitle')} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto px-8">
        {Array.isArray(projectsList) &&
          projectsList.map((project, index) => <Card key={index} index={index} {...project} />)}
      </div>
    </div>
  )
}
