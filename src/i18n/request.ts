import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as 'en' | 'pt')) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: (
      await (locale === 'pt'
        ? import('../../messages/pt.json')
        : import(`../../messages/${locale}.json`))
    ).default,
  }
})
