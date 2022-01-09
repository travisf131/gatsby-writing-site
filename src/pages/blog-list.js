import React from "react";
import { graphql, useStaticQuery, Link } from 'gatsby';
import Layout from '../components/layout';
import { blogPreview, blogTitle, articleLink, date, mobileHiddenHeader } from './pagesStyles/blogPage.module.css';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        },
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    var blogPosts = data.allMarkdownRemark.edges;
    var blogList = [];

    blogPosts.forEach(blog => {
        let slug = blog.node.fields.slug;
        let blogPath = "/blog/" + slug;
        blogList.push(
            <div className={blogPreview}>
                <Link to={blogPath} className={articleLink}> <h1 className={blogTitle}>{blog.node.frontmatter.title}</h1> </Link>
                 <p className={date}>{blog.node.frontmatter.date}</p>
            </div>
        );
    })

    return (
        <div>
            <Layout>
              <div className={mobileHiddenHeader}><p>~~ Articles ~~</p></div>
              {blogList}
            </Layout>
        </div>
    )
}

export default BlogPage
