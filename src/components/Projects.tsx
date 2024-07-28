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
            value="Aloha"
            onClick={(e) => handleClick((e.target as HTMLButtonElement).value)}
          >
            Aloha
          </button>
          <button
            className="alohapi project-name"
            value="Specto Média"
            onClick={(e) => handleClick((e.target as HTMLButtonElement).value)}
          >
            Specto Média
          </button>
          <button
            className="specto project-name"
            value="AlohAPI"
            onClick={(e) => handleClick((e.target as HTMLButtonElement).value)}
          >
            AlohAPI
          </button>
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
