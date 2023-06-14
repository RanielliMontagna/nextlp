import { Footer } from '@/components/footer/footer'

import { Experiencias } from './experiencias/experiencias'
import { Header } from './header/header'
import { Hero } from './hero/hero'
import { Projetos } from './projetos/projetos'
import { Contact } from './contact/contact'
import { About } from './about/about'
import { Tecnologias } from './tecnologias/tecnologias'

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
        <Tecnologias />
      </section>

      <section id="experiencias">
        <Experiencias />
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
