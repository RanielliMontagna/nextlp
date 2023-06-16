import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'

import svg from '@/assets/svgs/404.svg'

export const errorType = {
  NotFound: '404',
  InternalServerError: '500',
} as const

interface ErrorProps {
  /**
   * The type of error to display (404 or 500)
   * @default 404
   *
   * @type {('404' | '500')}
   * @memberof ErrorProps
   *
   * @example
   * <Error type="404" />
   */
  type: (typeof errorType)[keyof typeof errorType]
}

export function Error({ type = errorType.NotFound }: ErrorProps) {
  const { t: translate } = useTranslation('error')

  return (
    <div className="flex flex-col items-center justify-center h-screen py-2 gap-4 p-4">
      <motion.img
        {...svg}
        alt="404 Image - Page not found"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="w-96"
      />
      <div className="text-center gap-1 flex flex-col">
        <motion.h1
          className="text-4xl font-bold text-gray-200"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {type === errorType.NotFound ? translate('404.title') : translate('500.title')}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          transition={{ delay: 0.2, duration: 1 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {type === errorType.NotFound
            ? translate('404.description')
            : translate('500.description')}
        </motion.h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        transition={{ delay: 0.4, duration: 1 }}
        animate={{ opacity: 1, y: 0 }}
        className="pb-4"
      >
        <button
          className="px-6 py-2 border border-gray-500 rounded-full uppercase text-xs 
                       tracking-widest text-gray-100 transition-all hover:border-accent hover:text-accent"
          onClick={() => (window.location.href = '/')}
        >
          {type === errorType.NotFound ? translate('404.button') : translate('500.button')}
        </button>
      </motion.div>
    </div>
  )
}
