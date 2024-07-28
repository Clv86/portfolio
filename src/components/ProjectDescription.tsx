import projectList from '../assets/projects.json'
import '../style/ProjectDescription.css'

function ProjectDescription({ name }: { name: string }) {
  type Project = {
    name: string
    description: string
    type: string
    link: string
  }
  const project: Project = projectList.project.find((p) => p.name === name)
  if (!project) {
    return <p>Projet non trouvé</p>
  }
  return (
    <div className="description-container">
      {project.name === 'intro' ? '' : <h3>{project.name}</h3>}
      <p>{project.description}</p>
      {project.type === 'intro' ? (
        ''
      ) : project.type === 'site' ? (
        <a href={project.link}>Accedez au site</a>
      ) : (
        <a href={project.link}>Accedez au code</a>
      )}
    </div>
  )
}

export default ProjectDescription
