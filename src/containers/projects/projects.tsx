import { useTranslation } from 'next-i18next'

import SectionTitle from '@/components/sectionTitle/sectionTitle'

import { projectsList } from './projects.static'
import { ProjectCard } from './projectCard/projectCard'

export function Projects() {
  const { t: translate } = useTranslation('projects')

  return (
    <div className="pb-16">
      <SectionTitle title={translate('sectionTitle')} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto px-8">
        {projectsList
          .slice(0)
          .reverse()
          .map((project, index) => {
            return <ProjectCard key={index} index={index} {...project} />
          })}
      </div>
    </div>
  )
}
