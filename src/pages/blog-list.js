import React from "react";
import { graphql, useStaticQuery, Link } from 'gatsby';
import Layout from '../components/layout';
import { blogPreview, blogTitle, articleLink, date, mobileHiddenHeader } from './pagesStyles/blogPage.module.css';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulArticlePost (
          sort: {
            fields: publishedDate,
            order:DESC
          }
        ) {
          edges{
            node {
              title
              slug
              publishedDate (formatString: "MMMM Do, YYYY")
            }
          }
        }
      }
    `)

    var blogPosts = data.allContentfulArticlePost.edges;
    var blogList = [];

    blogPosts.forEach(blog => {
        let slug = blog.node.slug;
        let blogPath = "/blog/" + slug;
        blogList.push(
            <div className={blogPreview}>
                <Link to={blogPath} className={articleLink}> <h1 className={blogTitle}>{blog.node.title}</h1> </Link>
                 <p className={date}>{blog.node.publishedDate}</p>
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
