import { useTranslations } from 'next-intl'
import { github } from '@/shared/links'

export function Footer() {
  const t = useTranslations('Common')

  return (
    <footer>
      <div className="text-center p-4 text-white">
        {t('footer')}{' '}
        <button onClick={() => window.open(github, '_blank')}>
          <b>Ranielli Montagna</b>
        </button>
      </div>
    </footer>
  )
}
