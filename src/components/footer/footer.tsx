import { FaHeart } from 'react-icons/fa'

export function Footer() {
  return (
    <footer>
      <div className="text-center p-4 text-white">
        <button onClick={() => window.open('https://github.com/RanielliMontagna/nextlp', '_blank')}>
          Feito com <FaHeart className="inline-block text-red-500" /> por <b>Ranielli Montagna</b>
        </button>
      </div>
    </footer>
  )
}
