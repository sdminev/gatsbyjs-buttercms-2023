import React from "react"
import { graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  header: {
    marginBottom: theme.spacing(4),
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    marginBottom: theme.spacing(4),
  },
}))

const Project = ({ data }) => {
  const classes = useStyles()
  const project = data.butterProjects

  return (
    <Container maxWidth="md">
      <Typography variant="h2" component="h1" className={classes.header}>
        {project.name}
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <img
            src={project.featured_image}
            alt={project.name}
            className={classes.image}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" component="h2" gutterBottom>
            Project Summary
          </Typography>
          <Typography variant="body1" component="div">
            <div dangerouslySetInnerHTML={{ __html: project.summary }} />
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Project

export const query = graphql`
  query($slug: String!) {
    butterProjects(slug: { eq: $slug }) {
      name
      summary
      featured_image
    }
  }
`
