import React, { useEffect, useState } from "react";
import butter from "../butter-client";
import ProjectsList from "../components/ProjectsList";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    butter.content.retrieve(["projects"]).then((resp) => {
      setProjects(resp.data.projects);
    });
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ProjectsList projects={projects} />
    </div>
  );
};

export default ProjectsPage;
