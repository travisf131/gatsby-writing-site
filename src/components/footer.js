import React from "react";  
import { footer, divider, footerLinks, link } from '../components/styles/footer.module.css';
import { Link } from 'gatsby';
import { Menu, MenuItem, Button } from '@material-ui/core';

const Footer = () => {
    return (
       <>
         <div className={divider}>______________________________________________________ </div>
         <div className={footer}>Created by Trevor Flanagan, © 2021 </div>
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