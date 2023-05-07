import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Grid from "@material-ui/core/Grid"
import ProjectCard from "./ProjectCard"

const ProjectList = () => {
  const data = useStaticQuery(graphql`
    {
      allButterProjects {
        edges {
          node {
            id
            slug
            name
            summary
            featured_image
          }
        }
      }
    }
  `)

  const projects = data.allButterProjects.edges.map(edge => edge.node)

  return (
    <Grid container spacing={3}>
      {projects.map(project => (
        <Grid item xs={12} md={6} key={project.id}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  )
}

export default ProjectList
