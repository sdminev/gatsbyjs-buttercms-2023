import React from "react";
import Layout from "../containers/Layout"

const Project = ({ pageContext: { pageData, menuData} }) => {
  const project = pageData
  const menuItems = menuData.data.butterCollection.value[0].menu_items

  return (
    <Layout menuItems={menuItems}>
      <section id="project" className="my-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img className="w-100" src={project.image} alt={project.name} />
            </div>
            <div className="col-md-6">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <a href={project.link} className="btn btn-primary bg-dark text-light">
                Go nowhere
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Project
