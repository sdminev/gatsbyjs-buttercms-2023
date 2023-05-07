import React, { useEffect, useState } from "react";
import butter from "../butter-client";
import ProjectCard from "./ProjectCard";

function ProjectsList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    butter.content
      .retrieve("projects")
      .then((resp) => {
        setProjects(resp.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}

export default ProjectsList;
