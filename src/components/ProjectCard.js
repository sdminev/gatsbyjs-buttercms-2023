import React from "react"
import { Card, CardContent, Typography } from "@material-ui/core"

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {project.title}
        </Typography>
        <Typography color="textSecondary">{project.date}</Typography>
        <Typography variant="body2" component="p">
          {project.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
