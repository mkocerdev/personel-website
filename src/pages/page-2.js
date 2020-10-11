import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({
  data: {
    posts: { edges, totalCount }
  }
}) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <small>Toplam {totalCount} makale</small>
    <ul>
      {edges.map(({ node }) => (
        <li key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <small>{node.frontmatter.date}</small>
          <p>{node.excerpt}</p>
        </li>
      ))}
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

export const pageQuery = graphql`
  query NewestPosts {
    posts: allMarkdownRemark(
      filter: { frontmatter: { title: { ne: "" }, date: { ne: "" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
      skip: 0
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY, HH:mm", locale: "tr")
          }
          excerpt
        }
      }
      totalCount
    }
  }
`
