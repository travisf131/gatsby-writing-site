import React from "react";  
import { container, font, link, links, hamburger, HamburgerLink, titleLink } from '../components/styles/header.module.css';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Menu, MenuItem, Button } from '@material-ui/core';

const Header = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
     setAnchorEl(null);
     };

    return (
    
        <div className={container}> 
            <Link to="/" className={titleLink}><span className={font}>{data.site.siteMetadata.title}</span></Link>
            <div className={links}>
                <Link className={link} to="/blog-list">Articles</Link>
                <Link className={link} to="/books">Books</Link>
                <Link className={link} to="/about">About</Link>
            </div> 
            <div className={hamburger}>
            <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                ☰
            </Button>
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}><Link className={HamburgerLink} to="/blog-list">Articles</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link className={HamburgerLink} to="/books">Books</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link className={HamburgerLink} to="/about">About</Link></MenuItem>
            </Menu>
        </div>

    )
}

export default Header