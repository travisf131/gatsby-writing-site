import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { body, title, date } from './blog.module.css';

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug }}) {
            frontmatter {
                title
                date
            }
            html
        }
    }
`

const Blog = (props) => {
    return (
        <Layout>
            <h2 className={title}>{props.data.markdownRemark.frontmatter.title}</h2>
            <p className={date}>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} className={body}></div>
        </Layout>
    )
}

export default Blog;