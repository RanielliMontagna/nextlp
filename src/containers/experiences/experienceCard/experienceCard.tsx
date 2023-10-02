import { motion } from 'framer-motion'

export interface ExperienceProps {
  company: string
  companyLink: string
  description: string
  logoUrl: string
  period: string
  title: string
}

export function CardExperiencia({
  company,
  companyLink,
  description,
  logoUrl,
  period,
  title,
}: ExperienceProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="bg-[#272a30] rounded-lg shadow-lg p-12 flex flex-col gap-4  max-w-4xl"
    >
      <div className="flex justify-center">
        <img
          src={logoUrl}
          alt={`${company}-logo`}
          className="w-32 h-32 rounded-md"
          width={128}
          height={128}
        />
      </div>
      <div>
        <motion.h2 className="text-2xl font-semibold text-center text-white">
          {title} @{' '}
          <span
            className="text-accent cursor-pointer"
            onClick={() => window.open(companyLink, '_blank')}
          >
            {company}
          </span>
        </motion.h2>
        <motion.h3 className="text-lg font-semibold text-center text-gray-300">{period}</motion.h3>
      </div>
      <div className="flex flex-col gap-2">
        <ul>
          <motion.li className="text-lg text-gray-300">{description}</motion.li>
        </ul>
      </div>
    </motion.div>
  )
}
