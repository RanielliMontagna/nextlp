import { useTranslation } from 'next-i18next'

export function Footer() {
  const { t: translate } = useTranslation()

  return (
    <footer>
      <div className="text-center p-4 text-white">
        {translate('footer')}{' '}
        <button onClick={() => window.open('https://github.com/RanielliMontagna', '_blank')}>
          <b>Ranielli Montagna</b>
        </button>
      </div>
    </footer>
  )
}
