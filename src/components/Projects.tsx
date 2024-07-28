import '../style/projects.css'
import { Element } from 'react-scroll'
import { useState } from 'react'
import ProjectDescription from './ProjectDescription'
import ProjectWave from './ProjectWave'

function Projects() {
  const [project, setProject] = useState<string>('intro')

  function handleClick(projectTarget: string) {
    setProject(projectTarget)
  }

  const backToIntro = () => {
    setProject('intro')
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
            <ProjectDescription name={project} backToIntro={backToIntro} />
          </div>
        </div>
      </Element>
      <ProjectWave />
    </div>
  )
}

export default Projects
