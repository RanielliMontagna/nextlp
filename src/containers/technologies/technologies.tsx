import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

import SectionTitle from '@/components/sectionTitle/sectionTitle'

import { Card } from './card/card'

import reactLogo from '@/assets/technologies/react.svg'
import typescriptLogo from '@/assets/technologies/typescript.svg'
import javascriptLogo from '@/assets/technologies/javascript.svg'
import nodeLogo from '@/assets/technologies/node.svg'

export function Technologies() {
  const t = useTranslations('Technologies')

  return (
    <div className="pb-16">
      <SectionTitle title={t('sectionTitle')} />

      <div className="flex flex-col justify-evenly items-center max-w-7xl px-10 mx-auto">
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          {t('description')}
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8">
          <div className="flex flex-row justify-center items-center gap-2">
            <Card
              title="React"
              logo={reactLogo}
              siteUrl="https://reactjs.org/"
              duration={1.2}
              y={50}
            />
            <Card
              title="Typescript"
              logo={typescriptLogo}
              siteUrl="https://www.typescriptlang.org/"
              duration={1.4}
              y={55}
            />
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            <Card
              title="Javascript"
              logo={javascriptLogo}
              siteUrl="https://www.javascript.com/"
              duration={1.6}
              y={60}
            />
            <Card
              title="Node"
              logo={nodeLogo}
              siteUrl="https://nodejs.org/en/"
              duration={1.8}
              y={65}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
