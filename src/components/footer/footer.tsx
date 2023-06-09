export function Footer() {
  return (
    <footer>
      <div className="text-center p-4 text-white">
        <button onClick={() => window.open('https://github.com/RanielliMontagna/nextlp', '_blank')}>
          Projetado e desenvolvido por <span className="font-semibold">Ranielli Montagna</span>
        </button>
      </div>
    </footer>
  );
}
