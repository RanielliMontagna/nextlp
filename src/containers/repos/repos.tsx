import { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'

import SectionTitle from '@/components/sectionTitle/sectionTitle'

import { useAppContext } from '@/contexts/app.context'
import { Card } from '@/components/card/card'

export function Repos() {
  const { repos, reposIsLoading } = useAppContext()
  const { t: translate } = useTranslation('repos')

  const maxRepos = 9
  const [showMore, setShowMore] = useState(false)

  const visibleRepos = showMore ? repos : repos?.slice(0, maxRepos)

  return (
    <div className="pb-16">
      <SectionTitle title={translate('sectionTitle')} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto px-8">
        {reposIsLoading
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
          : visibleRepos?.map((repo, index) => {
              return (
                <Card
                  key={index}
                  index={index}
                  description={repo.description}
                  name={repo.name}
                  topics={repo.topics}
                  githubUrl={repo.html_url}
                />
              )
            })}
      </div>
      {!reposIsLoading && repos?.length > maxRepos && (
        <motion.div
          initial={{ opacity: 0, y: 50 + maxRepos * 5 }}
          transition={{ duration: 0.5 + maxRepos * 0.1 }}
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
