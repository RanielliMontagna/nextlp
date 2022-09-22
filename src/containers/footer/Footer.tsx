const Footer = () => {
  return (
    <div className="text-center p-4">
      <button onClick={() => window.open('https://github.com/RanielliMontagna/nextlp', '_blank')}>
        Projetado e desenvolvido por <span className="font-semibold">Ranielli Montagna</span>
      </button>
    </div>
  );
};

export { Footer };
