import { Footer } from '@/components/footer/footer'

import { Experiences } from './experiences/experiences'
import { Header } from './header/header'
import { Hero } from './hero/hero'
import { Repos } from './repos/repos'
import { Contact } from './contact/contact'
import { About } from './about/about'
import { Technologies } from './technologies/technologies'
import { Projects } from './projects/projects'

export function Home() {
  return (
    <div className="snap-y snap-mandatory">
      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="technologies">
        <Technologies />
      </section>

      <section id="experiences">
        <Experiences />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="repos">
        <Repos />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  )
}
