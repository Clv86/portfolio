import '../style/about.css'
import * as reactScroll from 'react-scroll'
// import { Link } from 'react-scroll'

function About() {
  return (
    <div className="about blue">
      <reactScroll.Element name="about">
        <h2>À propos</h2>
        <p>
          J'ai fait ce site pour m'exercer au code et montrer les conditions des
          différents spots susceptibles d'être intéressant sur la côte ouest
          française ! N'hésitez pas à me contacter pour faire des retours sur le
          site ou proposer de nouveaux spots à ajouter !
        </p>
        <div className="aboutGrid">
          <div className="card languages">
            <h3>Languages principaux</h3>
            <ul>
              <li>Javascript/Typescript</li>
              <li>PHP (Symfony)</li>
            </ul>
          </div>
          <div className="card frontend">
            <h3>Frontend</h3>
            <ul>
              <li>HTML/CSS</li>
              <li>React</li>
              <li>CMS : Wordpress, Wix</li>
            </ul>
          </div>
          <div className="card backend">
            <h3>Backend</h3>
            <ul>
              <li>Node.js, Express.js</li>
              <li>MongoDB, MySQL</li>
            </ul>
          </div>
          <div className="card infrastructure">
            <h3>Infrastructure</h3>
            <ul>
              <li>Git, serveur Debian</li>
              <li>Jest, React-test-library</li>
              <li>Apache, Nginx, Vercel</li>
            </ul>
          </div>
        </div>
      </reactScroll.Element>
      <div className="custom-shape-divider-bottom-1722039305">
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
      {/* <Link to="projects" smooth={true} duration={500} className="link">
        Suivant
      </Link> */}
    </div>
  )
}

export default About
