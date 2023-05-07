import React from "react"
import ProjectCard from "./ProjectCard"
import projects from "../data/projects.json" // Import the projects data

const ProjectsList = () => {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default ProjectsList
