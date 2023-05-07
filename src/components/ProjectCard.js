import React from 'react'
import { Link } from 'gatsby'

const ProjectCard = ({ project }) => {
  const { title, description, slug } = project

  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <Link to={`/projects/${slug}`}>Read More</Link>
      </div>
    </div>
  )
}

export default ProjectCard
