import { Header } from '../components/header/header';
import { Hero } from '../components/hero/hero';
import { Sobre } from '../components/sobre/sobre';

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
    </div>
  );
};

export { Home };
