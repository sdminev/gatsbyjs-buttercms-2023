import React from "react";
import { graphql } from "gatsby";

const Project = ({ data }) => {
  const project = data.butter.project;

  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </div>
  );
};

export default Project;

export const query = graphql`
  query($slug: String!) {
    butter {
      project(slug: { eq: $slug }) {
        name
        description
      }
    }
  }
`;
