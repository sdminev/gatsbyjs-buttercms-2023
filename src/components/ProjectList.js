import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map(project => (
        <div className="project" key={project.id}>
          <Link to={project.slug}>
            <GatsbyImage image={getImage(project.thumbnail)} alt={project.title} />
          </Link>
          <h2 className="project-title">
            <Link to={project.slug}>{project.title}</Link>
          </h2>
          <p className="project-description">{project.description}</p>
          <a className="project-link" href={project.link} target="_blank" rel="noreferrer">View Project</a>
        </div>
      ))}
    </div>
  )
}

export default ProjectList