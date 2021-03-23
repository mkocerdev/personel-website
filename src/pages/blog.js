import React from "react";
import { graphql } from "gatsby";

import { Layout, SEO } from "../components";

const BlogPage = ({ data: { Blog } }) => (
  <Layout>
    <SEO title="Blog" />
    <div className="container">
      <h1>Blog</h1>
      {Blog.nodes.map(({ frontmatter }, index) => {
        return (
          <div key={index}>
            <h3> {frontmatter.title}</h3>
            <p> {frontmatter.descr}</p>
            <p> {frontmatter.date}</p>
          </div>
        );
      })}
    </div>
  </Layout>
);

export const pageQuery = graphql`
  {
    Blog: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/(blog)/" } }
    ) {
      nodes {
        frontmatter {
          title
          descr
          date(formatString: "DD MMMM YYYY")
        }
      }
    }
  }
`;
export default BlogPage;
