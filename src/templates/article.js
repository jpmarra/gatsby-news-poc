import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Article from '../components/article';

export const query = graphql`
    query($articleID: String!) {
        article(id: { eq: $articleID }) {
            headline
            body
            date(formatString: "MMMM D, YYYY")
            slug
            localImage {
                childImageSharp {
                    fluid(maxWidth: 1284) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            media {
                video {
                    id
                }
            }
            tokenData {
                html
                subType
                tokenGUID
            }
            contributor {
                contributors {
                    name
                    tagline
                }
            }
        }
    }
`;

const ArticleTemplate = ({ data: { article } }) => (
    <Layout>
        <Article {...article} />
    </Layout>
);
export default ArticleTemplate;
