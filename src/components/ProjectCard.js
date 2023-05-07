import React from "react";

function ProjectCard({ project }) {
  return (
    <div>
      <h2>{project.fields.title}</h2>
      <p>{project.fields.summary}</p>
      <img src={project.fields.featured_image} alt={project.fields.title} />
      <a href={project.fields.url}>View project</a>
    </div>
  );
}

export default ProjectCard;
