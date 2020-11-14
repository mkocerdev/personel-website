import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SEO, PhotoList, PhotoBox } from '../components';

const PhotosPage = ({ data: { Photos } }) => (
	<Layout>
		<SEO title='Photos' />
		<div className='container'>
			<h1>Photos</h1>
			<div className='photos'>
				<PhotoList column='2'>
					{Photos.edges.map(({ node }) => {
						return <PhotoBox key={node.id} {...node}></PhotoBox>;
					})}
				</PhotoList>
			</div>
		</div>
	</Layout>
);

export const pageQuery = graphql`
	{
		Photos: allFile(
			filter: { absolutePath: { regex: "//photos//" } }
			limit: 30
			sort: { fields: birthTime, order: DESC }
		) {
			edges {
				node {
					id
					name
					birthTime(formatString: "MMMM DD YYYY MM:SS", locale: "en")
					img: childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
export default PhotosPage;
