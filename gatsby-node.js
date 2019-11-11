exports.createPages = async ({ actions, graphql, reporter }, options) => {
    const basePath = '/';

    const result = await graphql(`
        query {
            allArticle(sort: { fields: date, order: ASC }) {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panic('error loading articles', reporter.errors);
        return;
    }
    const articles = result.data.allArticle.edges;

    articles.forEach((article) => {
        actions.createPage({
            path: article.node.slug,
            component: require.resolve('./src/templates/article.js'),
            context: {
                articleID: article.node.id
            }
        });
    });
};
