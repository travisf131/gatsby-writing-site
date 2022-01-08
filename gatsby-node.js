const { create } = require('domain');
const path = require('path');

module.exports.onCreateNode = ({node, actions}) => {
    const { createNodeField } = actions;

    if (node.internal.type === "MarkdownRemark") {
        const slug = path.basename(node.fileAbsolutePath, '.md');

        createNodeField({
            node,
            name: "slug",
            value: slug
        })
    }
}

// this is used to dynamically create new pages for each new post
 module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    // 1. Get path to template
    const blogTemplate = path.resolve('./src/templates/blog.js');

    // 2. Get markdown data
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    // 3. Create new pages
    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
 }