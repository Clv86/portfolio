import projectList from '../assets/projects.json'
import '../style/ProjectDescription.css'

interface ProjectDescriptionProps {
  name: string
  backToIntro: () => void
}

function ProjectDescription({ name, backToIntro }: ProjectDescriptionProps) {
  const handleClick = () => {
    backToIntro()
  }
  type Project = {
    name: string
    description: string
    type: string
    link: string
  }
  const project: Project = projectList.project.find((p) => p.name === name)!
  if (!project) {
    return <p>Projet non trouvé</p>
  }
  return (
    <div className="description-container">
      {project.name === 'intro' ? '' : <h3>{project.name}</h3>}
      <p>{project.description}</p>
      <div className="bottom-line">
        {project.name === 'intro' ? (
          ''
        ) : (
          <button className="bottom-button" onClick={handleClick}>
            Retour
          </button>
        )}
        {project.type === 'intro' ? (
          ''
        ) : project.type === 'site' ? (
          <button className="bottom-button">
            <a href={project.link}>Accedez au site</a>
          </button>
        ) : (
          <button className="bottom-button">
            <a href={project.link} className="bottom-button">
              Accedez au code
            </a>
          </button>
        )}
      </div>
    </div>
  )
}

export default ProjectDescription
