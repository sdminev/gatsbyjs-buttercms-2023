import React from "react"
import ProjectCard from "./ProjectCard"

const ProjectsList = ({ projects }) => {
  return (
    <div className="projects-list">
      {projects.map(project => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}

export default ProjectsList
