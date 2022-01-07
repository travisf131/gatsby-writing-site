import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                    }
                }
            }
        }
    `)

    var blogPosts = data.allMarkdownRemark.edges;
    var blogList = [];

    blogPosts.forEach(blog => {
        blogList.push(
            <li>
                 <h2>{blog.node.frontmatter.title}</h2>
                 <p>{blog.node.frontmatter.date}</p>
            </li>
        );
    })

    return (
        <div>
            <Layout>
                <ul>
                    {blogList}
                </ul>
            </Layout>
        </div>
    )
}

export default BlogPage
