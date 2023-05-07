import React from "react"
import Layout from "../containers/Layout"
import FeaturesSection from "../components/FeaturesSection"
import HeroSection from "../components/HeroSection"
import ProjectList from "../components/ProjectList"
import TestimonialsSection from "../components/TestimonialsSection"
import BlogSection from "../components/BlogSection"
import TwoColumnWithImageSection from "../components/TwoColumnWithImageSection"
import SEO from "../components/SEO"
import { graphql, useStaticQuery } from "gatsby"

const IndexPage = ({ pageContext: { pageData, menuData, blogPosts } }) => {
  const bodyElements = pageData.body
  const menuItems = menuData.data.butterCollection.value[0].menu_items

  return (
    <Layout menuItems={menuItems}>
      <SEO { ...pageData.seo } />

      <HeroSection fields={bodyElements[0].fields} />
      <ProjectList />
      {bodyElements.map((bodyElement, i) => {
        switch (bodyElement.type) {
          case "two_column_with_image":
            return <TwoColumnWithImageSection fields={bodyElement.fields} key={i}/>
          case "features":
            return <FeaturesSection fields={bodyElement.fields} key={i}/>
          case "testimonials":
            return <TestimonialsSection fields={bodyElement.fields} key={i}/>
          default:
            return null
        }
      })}
      <BlogSection blogPosts={blogPosts} />
    </Layout>
  )
}

export default IndexPage
