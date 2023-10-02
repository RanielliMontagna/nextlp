import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Home as HomeContainer } from '../src/containers/home'

const Home: NextPage = HomeContainer

export async function getStaticProps({ locale }: GetStaticProps & { locale: string }) {
  const translations = await serverSideTranslations(locale, [
    'common',
    'about',
    'contact',
    'hero',
    'technologies',
    'experiences',
    'projects',
  ])

  return {
    props: {
      ...translations,
    },
  }
}

export default Home
