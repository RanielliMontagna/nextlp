import { GetStaticProps } from 'next'
import { Error } from '@/containers/error/error'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const NotFound = Error

export async function getStaticProps({ locale }: GetStaticProps & { locale: string }) {
  const translations = await serverSideTranslations(locale, ['error'])

  return {
    props: {
      ...translations,
    },
  }
}

export default NotFound
