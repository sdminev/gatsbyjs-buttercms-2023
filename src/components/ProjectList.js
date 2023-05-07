import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsList = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
