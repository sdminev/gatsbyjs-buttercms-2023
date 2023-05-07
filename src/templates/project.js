import React from "react"
import Layout from "../components/Layout"
import projects from "../data/projects.json" // Import the projects data
import { Typography } from "@material-ui/core"

const project = ({ pageContext }) => {
  const currentProject = projects.find(
    (project) => project.slug === pageContext.slug
  )

  return (
    <Layout>
      <Typography variant="h4" component="h1">
        {currentProject.title}
      </Typography>
      <Typography color="textSecondary">{currentProject.date}</Typography>
      <Typography variant="body1" component="p">
        {currentProject.description}
      </Typography>
    </Layout>
  )
}

export default project
