import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

import SectionTitle from '@/components/sectionTitle/sectionTitle'
import { email } from '@/shared/links'

export function Contact() {
  const t = useTranslations('Contact')

  return (
    <div className="py-16 max-w-7xl flex flex-col items-center text-center mx-auto p-8">
      <SectionTitle title={t('sectionTitle')} />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="max-w-4xl text-center text-lg">{t('description')}</p>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <button
          className="mt-4 px-6 py-2 border border-accent text-accent rounded-full
          hover:bg-emerald-900 transition duration-300 ease-in-out font-semibold"
          onClick={() => window.open(email)}
        >
          {t('buttonText')}
        </button>
      </motion.div>
    </div>
  )
}
