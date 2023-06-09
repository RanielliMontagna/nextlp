import { Header } from '../containers/header/header';
import { Hero } from '../containers/hero/hero';
import { Sobre } from '../containers/sobre/sobre';
import { Contato } from './contato/contato';
import { Experiencias } from './experiencias/experiencias';
import { Footer } from '../components/footer/footer';
import { Projetos } from './projetos/projetos';
import { Tecnologias } from './tecnologias/tecnologias';

export function Home() {
  return (
    <div className="snap-y snap-mandatory">
      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section id="sobre">
        <Sobre />
      </section>

      <section id="tecnologias">
        <Tecnologias />
      </section>

      <section id="experiencias">
        <Experiencias />
      </section>

      <section id="projetos">
        <Projetos />
      </section>

      <section id="contato">
        <Contato />
      </section>

      <Footer />
    </div>
  );
}
