import Image, { ImageProps } from 'next/image'
import { motion } from 'framer-motion'

interface CardProps {
  title: string
  logo: ImageProps
  siteUrl: string
  duration?: number
  y?: number
}

export function Card({ title, logo, siteUrl, duration = 1, y = 50 }: CardProps) {
  return (
    <motion.div
      initial={{ y, opacity: 0 }}
      transition={{ duration }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div
        className="flex flex-col items-center mt-4 md:mt-0 md:ml-4 hover:scale-110 transform transition duration-300 cursor-pointer w-20"
        onClick={() => window.open(siteUrl, '_blank')}
      >
        <Image
          src={logo.src}
          width={logo.width}
          height={logo.height}
          alt={title}
          className="w-16 h-16"
        />
        <p className="text-center mt-2">{title}</p>
      </div>
    </motion.div>
  )
}
