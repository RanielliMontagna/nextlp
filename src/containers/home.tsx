import { Header } from '../containers/header/header';
import { Hero } from '../containers/hero/hero';
import { Sobre } from '../containers/sobre/sobre';
import { Contato } from './contato/contato';

const Home = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-x-hidden">
      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section id="sobre">
        <Sobre />
      </section>

      {/* <section id="tecnologias">
        <Tecnologias />
      </section> */}

      {/* <section id="projetos">
        <Projetos />
      </section> */}

      <section id="contato">
        <Contato />
      </section>

      <footer>
        Feito por <span>Ranielli Montagna</span>
      </footer>
    </div>
  );
};

export { Home };
