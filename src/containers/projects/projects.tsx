import { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'

import SectionTitle from '@/components/sectionTitle/sectionTitle'

import { ProjectCard } from './projectCard/projectCard'
import { useAppContext } from '@/contexts/app.context'

export function Projects() {
  const { projects, projectsIsLoading } = useAppContext()
  const { t: translate } = useTranslation('projects')

  // show max 9 projecst, and more button to show more
  const maxProjects = 9
  const [showMore, setShowMore] = useState(false)

  const visibleProjects = showMore ? projects : projects?.slice(0, maxProjects)

  return (
    <div className="pb-16">
      <SectionTitle title={translate('sectionTitle')} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto px-8">
        {projectsIsLoading
          ? Array.from({ length: 3 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 + index * 10 }}
                transition={{ duration: 0.5 + index * 0.1 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Skeleton count={1} height={316} baseColor="#272a30" highlightColor="#3A3D44" />
              </motion.div>
            ))
          : visibleProjects?.map((project, index) => {
              return <ProjectCard key={index} index={index} {...project} />
            })}
      </div>
      {!projectsIsLoading && projects?.length > maxProjects && (
        <motion.div
          initial={{ opacity: 0, y: 50 + maxProjects * 5 }}
          transition={{ duration: 0.5 + maxProjects * 0.1 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-center mt-8"
        >
          <button
            onClick={() => setShowMore((prev) => !prev)}
            className="bg-transparent border-2 border-accent text-accent font-semibold py-2 px-6 rounded-lg hover:bg-accent hover:text-white transition duration-200"
          >
            {showMore ? translate('showLess') : translate('showMore')}
          </button>
        </motion.div>
      )}
    </div>
  )
}
