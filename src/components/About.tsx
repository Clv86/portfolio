import '../style/about.css'
import * as reactScroll from 'react-scroll'
import SkillGrid from './SkillGrid'
import AboutWave from './AboutWave'

function About() {
  return (
    <div className="about blue">
      <reactScroll.Element name="about">
        <h2>À propos</h2>
        <p>
          Anciennement ingénieur de projets dans l'audiovisuel, je garde de mon
          parcours précédent un grand intérêt pour l'interculturalité et le
          travail en équipe.
          <br />
          Aujourd'hui je développe mes compétences dans le monde du web à
          travers des projets en accord avec mes idéaux et passions !
          Actuellement en quatrième année à Epitech, je suis à la recherche
          d'une alternance dans le secteur.
        </p>
        <SkillGrid />
      </reactScroll.Element>
      <AboutWave />
    </div>
  )
}

export default About
