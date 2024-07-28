import '../style/header.css'
import { Link } from 'react-scroll'
import img from '../assets/webDev3.png'
import github from '../assets/blueGithub.png'
import linkedin from '../assets/blueLinkedin.png'
import mail from '../assets/blueMail.png'

function Header() {
  return (
    <div className="hero white">
      {/* <div className="header-subtitle"> */}
      <div className="hero-header">
        <div className="title">
          <h1>Charles-Louis Velieu</h1>
          <h2>Apprenti développeur Full Stack</h2>
        </div>
        <div className="social">
          <a href="https://github.com/Clv86">
            <img src={github} className="github" />
          </a>
          <a href="https://www.linkedin.com/in/charles-louis-velieu">
            <img src={linkedin} />
          </a>
          <a href="mailto:charleslouis.velieu@gmail.com">
            <img src={mail} />
          </a>
        </div>
      </div>
      {/* </div> */}
      <div className="hero-content">
        <div className="hero-text">
          <div className="intro-text">
            <p>
              Bienvenue sur mon portfolio ! Vous pourrez en apprendre plus
              ci-dessous sur mon parcours et les différents projets que j'ai
              menés.
            </p>
          </div>
          <div className="navbar">
            <ul id="navbar">
              <li>
                <Link to="about" smooth={true} duration={500}>
                  À propos
                </Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="background-image">
          <img src={img} />
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1722031858">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Header
