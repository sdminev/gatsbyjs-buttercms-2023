import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';

const ProjectList = ({ projects }) => {
  console.log("from comp", projects);
  if (!Array.isArray(projects)) {
    return <div>No projects found</div>;
  }

  return (
    <section id="projects">
      <div className="container mt-5 mb-2 py-5">
        <div className="row d-flex flex-row text-center">
          <h2 className="mb-5">Projects</h2>
          {projects.map((project) => {
            return (
              <div className="col-4" key={project.name}>
                <div className="card text-center">
                  <img
                    className="card-img-top w-100 rounded-3"
                    src={project.image}
                    alt={project.name}
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.description}</p>
                    <Link
                      to={`/projects/${project.name.toLowerCase()}`}
                      className="btn btn-primary bg-dark text-light"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-left mt-5">Gatsby улеснява създаването на страници/нодове с createPages API, както и самата навигация (Link API). Link компонента също подобрява перформънса, използвайки прелоудинг - използва се Intersection Observer API-то на браузъра за да се стартира заявка с нисък приоритет за зареждане на ресурсите на линкнатата страница когато въпросната връзка навлезе във вюпорта на потребителя.</p>
      </div>
    </section>
  );
};

export default ProjectList;
