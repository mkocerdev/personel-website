import React from "react";
import { graphql } from "gatsby";

import { Layout, SEO, PhotoList, PhotoBox } from "../components";

const PhotosPage = ({ data: { Photos } }) => (
  <Layout>
    <SEO title="Photos" />
    <div className="container">
      <h1>Photos</h1>
      <div className="photos">
        <PhotoList column="2">
          {Photos.nodes.map(({ frontmatter }, index) => {
            return <PhotoBox key={index} {...frontmatter}></PhotoBox>;
          })}
        </PhotoList>
      </div>
    </div>
  </Layout>
);

export const pageQuery = graphql`
  {
    Photos: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/(photos)/" } }
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "DD MMMM YYYY")
          photo {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
export default PhotosPage;
