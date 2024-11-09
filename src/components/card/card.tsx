import { motion } from 'framer-motion'

import { BsFolder } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'

export interface ICard {
  name: string
  description: string
  topics: string[]
  githubUrl?: string
}

interface CardProps extends ICard {
  index: number
}

export function Card({ name, description, topics, githubUrl, index }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 + index * 10 }}
      transition={{ duration: 0.5 + index * 0.1 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="flex"
    >
      <motion.div
        initial={{ y: 0 }}
        whileHover={{ y: -5 }}
        className={`bg-[#272a30] rounded-lg shadow-lg p-8 flex flex-col space-y-4 relative w-full ${
          githubUrl ? 'cursor-pointer' : ''
        }`}
        onClick={() => githubUrl && window.open(githubUrl, '_blank')}
      >
        <div className="flex items-center justify-between">
          <BsFolder size={32} className="text-accent" />
          {githubUrl && (
            <div>
              <FiGithub
                size={24}
                className="text-white hover:text-accent transform hover:scale-110 transition duration-200"
              />
            </div>
          )}
        </div>
        <div className="flex flex-col h-full">
          <div className="flex flex-col flex-1">
            <h2 className="text-lg font-semibold ">{name}</h2>
            <p className="text-gray-300">{description}</p>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap bottom-0">
            {topics?.slice(0, 3)?.map((topic, index) => {
              return (
                <div
                  key={index}
                  className="px-2 py-1 bg-[#1e2126] rounded-lg text-gray-300 text-sm"
                >
                  {topic}
                </div>
              )
            })}
            {topics?.length > 3 && (
              <div className="px-2 py-1 bg-[#1e2126] rounded-lg text-gray-300 text-sm">
                +{topics.length - 3}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
