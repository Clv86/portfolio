import '../style/hero.css'
import img from '../assets/webDev3.png'
import Navbar from './Navbar'
import HeroWave from './HeroWave'
import Header from './Header'
function Hero() {
  return (
    <div className="hero white">
      <Header />
      <div className="hero-content">
        <div className="hero-text">
          <div className="intro-text">
            <p>
              Bienvenue sur mon portfolio ! Vous pourrez en apprendre plus sur
              mon parcours et les différents projets que j'ai menés.
            </p>
          </div>
          <Navbar />
        </div>
        <div className="background-image">
          <img src={img} alt="hero-image" />
        </div>
      </div>
      <HeroWave />
    </div>
  )
}

export default Hero
