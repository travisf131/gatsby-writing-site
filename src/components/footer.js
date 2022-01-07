import React from "react";  
import { footer, divider, footerLinks, link } from '../components/styles/footer.module.css';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Menu, MenuItem, Button } from '@material-ui/core';

const Footer = () => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `)

    return (
       <>
         <div className={divider}>______________________________________________________ </div>
         <div className={footer}>Created by {data.site.siteMetadata.author}, © 2021 </div>
         <div className={footerLinks}>
           <div>
           <Link className={link} to="../contact"> Contact me</Link>
           <Link className={link} to="../about"> About</Link>
           <Link className={link} to="../"> Home</Link></div>
         </div>
       </>
    )
}

export default Footer;