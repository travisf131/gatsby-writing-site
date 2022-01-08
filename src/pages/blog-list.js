import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import { blogPreview, blogTitle } from './pagesStyles/blogPage.module.css';

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
            <div className={blogPreview}>
                <h1 className={blogTitle}>{blog.node.frontmatter.title}</h1>
                 <p>{blog.node.frontmatter.date}</p>
            </div>
        );
    })

    return (
        <div>
            <Layout>
              {blogList}
            </Layout>
        </div>
    )
}

export default BlogPage
