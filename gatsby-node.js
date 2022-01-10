const { create } = require('domain');
const path = require('path');

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })


// this is used to dynamically create new pages for each new Contentful post
 module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    // 1. Get path to template
    const blogTemplate = path.resolve('./src/templates/blog.js');

    // 2. Get markdown data
    const res = await graphql(`
        query {
            allContentfulArticlePost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    // 3. Create new pages
    res.data.allContentfulArticlePost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
 }