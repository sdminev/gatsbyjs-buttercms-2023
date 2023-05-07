import React from "react";
import { Link } from "gatsby";

const ProjectCard = ({ project }) => {
  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <Link to={`/projects/${project.slug}`}>Read more</Link>
    </div>
  );
};

export default ProjectCard;
