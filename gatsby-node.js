const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    const { data: { allWordpressPage } } = await graphql(`
    {
        allWordpressPage(filter: { path: { ne: "/" } }) {
            edges {
                node {
                    id
                    slug
                }
            }
        }
    }
    `);

    allWordpressPage && allWordpressPage.edges.forEach(({ node: page }) => {
        const component = path.resolve('./src/templates/WPPage.js');
        createPage({
            path: `/${page.slug}`,
            component,
            context: {
                id: page.id
            }
        })
    });

    return;
};