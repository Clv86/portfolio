import projectList from '../assets/projects.json'

function ProjectDescription({ name }: { name: string }) {
  type Project = {
    name: string
    description: string
  }
  const project: Project = projectList.project.find((p) => p.name === name)
  if (!project) {
    return <p>Projet non trouvé</p>
  }
  return (
    <div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
    </div>
  )
}

export default ProjectDescription
