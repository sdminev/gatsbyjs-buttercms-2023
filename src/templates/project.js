// project.js

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const Project = ({ data }) => {
  const { title, featured_image, project_description } = data.butter.project
  return (
    <Layout>
      <SEO title={title} />
      <div className="project">
        <h1 className="project-title">{title}</h1>
        {featured_image && (
          <div className="project-image-container">
            <Img fluid={featured_image} alt={title} />
          </div>
        )}
        <div
          className="project-description"
          dangerouslySetInnerHTML={{ __html: project_description }}
        />
      </div>
    </Layout>
  )
}

export default Project

export const query = graphql`
  query($slug: String!) {
    butter {
      project(slug: { eq: $slug }) {
        title
        project_description
        featured_image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
