import React from "react";  
import { container, font, link, links, hamburger, HamburgerLink } from '../components/styles/header.module.css';
import { Link } from 'gatsby';
import { Menu, MenuItem, Button } from '@material-ui/core';

const Footer = () => {
    return (
        <div>Created by Trevor Flanagan --- Contact me <Link to="../contact">here</Link></div>
    )
}

export default Footer;