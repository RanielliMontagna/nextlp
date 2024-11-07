import { ReactNode } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'

import enMessages from '../../messages/en.json'
import ptMessages from '../../messages/pt.json'

const AllProviders = ({
  children,
  locale = 'en',
}: {
  children: ReactNode
  locale?: 'en' | 'pt'
}) => {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={
        locale === 'en'
          ? (enMessages as unknown as AbstractIntlMessages)
          : (ptMessages as unknown as AbstractIntlMessages)
      }
    >
      {children}
    </NextIntlClientProvider>
  )
}

const customRender = (
  ui: React.ReactElement,
  options?: RenderOptions & { locale?: 'en' | 'pt' },
) => {
  const { locale, ...renderOptions } = options || {}

  return render(ui, {
    wrapper: (props) => <AllProviders locale={locale} {...props} />,
    ...renderOptions,
  })
}

export * from '@testing-library/react'
export { customRender as render }
