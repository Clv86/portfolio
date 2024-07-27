import '../style/projects.css'
import { Element } from 'react-scroll'
import { useState } from 'react'
import ProjectDescription from './ProjectDescription'

function Projects() {
  const [project, setProject] = useState<string>('intro')

  function handleClick(projectTarget: string) {
    setProject(projectTarget)
  }
  return (
    <div className="projects white">
      <Element name="projects">
        <h2>Mes projets</h2>
        <div className="main-section">
          <button
            className="aloha project-name"
            value="aloha"
            onClick={(e) => handleClick((e.target as HTMLButtonElement).value)}
          >
            Aloha
          </button>
          <button
            className="alohapi project-name"
            value="specto"
            onClick={(e) => handleClick((e.target as HTMLButtonElement).value)}
          >
            Specto
          </button>
          <button
            className="specto project-name"
            value="alohapi"
            onClick={(e) => handleClick((e.target as HTMLButtonElement).value)}
          >
            AlohAPI
          </button>
          {/* <div className="presentation">
            <h3>Aloha</h3>
            <p>
              J'ai fait ce site pour m'exercer au code et montrer les conditions
              des différents spots susceptibles d'être intéressant sur la côte
              ouest française ! N'hésitez pas à me contacter pour faire des
              retours sur le site ou proposer de nouveaux spots à ajouter !
            </p>
          </div> */}
          <div className="presentation">
            <ProjectDescription name={project} />
          </div>
        </div>
      </Element>
      <div className="custom-shape-divider-bottom-1722035468">
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

export default Projects
