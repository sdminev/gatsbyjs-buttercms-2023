import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const ProjectCard = ({ project }) => {
  const { title, slug, featured_image } = project
  return (
    <div className="project-card">
      {featured_image && (
        <Link to={`/${slug}`}>
          <Img fluid={featured_image} alt={title} />
        </Link>
      )}
      <h3 className="project-title">{title}</h3>
    </div>
  )
}

export default ProjectCard
