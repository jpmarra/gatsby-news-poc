import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => {
  const { allArticle } = useStaticQuery(
    graphql`
      query {
        allArticle(sort: { fields: date, order: ASC }) {
          edges {
            node {
              id
              headline
              slug
            }
          }
        }
      }
    `
  );
  return (
    <Layout>
      <SEO title="News Home" />
      <ul style={{ margin: "0 90px", maxWidth: 1284, width: "100%" }}>
        {allArticle.edges.map(article => (
          <li key={article.node.id}>
            <Link to={article.node.slug}>{article.node.headline}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default IndexPage;
