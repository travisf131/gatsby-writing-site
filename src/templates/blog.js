import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { bodyText, title, date } from './blog.module.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const query = graphql`
    query($slug: String!) {
        contentfulArticlePost(slug: { eq: $slug }) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            articleBody {
                raw
            }
        }
    }
`

const Blog = (props) => {

    // take the raw body content and turn it into JSON
    let body = JSON.parse(props.data.contentfulArticlePost.articleBody.raw);
    return (
        <Layout>
            <h2 className={title}>{props.data.contentfulArticlePost.title}</h2>
            <p className={date}>{props.data.contentfulArticlePost.publishedDate}</p>
            <div className={bodyText}>{documentToReactComponents(body)}</div>
        </Layout>
    )
}

export default Blog;
