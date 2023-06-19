import { Footer } from '@/components/footer/footer'

import { Experiences } from './experiences/experiences'
import { Header } from './header/header'
import { Hero } from './hero/hero'
import { Projetos } from './projetos/projetos'
import { Contact } from './contact/contact'
import { About } from './about/about'
import { Technologies } from './technologies/technologies'

export function Home() {
  return (
    <div className="snap-y snap-mandatory">
      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section id="sobre">
        <About />
      </section>

      <section id="tecnologias">
        <Technologies />
      </section>

      <section id="experiencias">
        <Experiences />
      </section>

      <section id="projetos">
        <Projetos />
      </section>

      <section id="contato">
        <Contact />
      </section>

      <Footer />
    </div>
  )
}
