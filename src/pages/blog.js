import React from 'react';

import { Layout, SEO, PhotoList, PhotoBox } from '../components';

const BlogPage = ({ data: { Photos } }) => (
	<Layout>
		<SEO title='Blog' />
		<div className='container'>
			<h1>Blog</h1>
			<div className='photos'>
				<PhotoList column='2'>
					{Photos.edges.map(({ node }) => {
						return (
							<div>
								{node.formatter.map((item) => (
									<div>{item.title}</div>
								))}
							</div>
						);
					})}
				</PhotoList>
			</div>
		</div>
	</Layout>
);

export const pageQuery = graphql`
	{
		Photos: allMarkdownRemark {
			edges {
				node {
					id
					frontmatter {
						title
						date
						photo
					}
				}
			}
		}
	}
`;

export default BlogPage;
