import React from "react";  
import { container, font, link, links, hamburger, HamburgerLink } from '../components/styles/header.module.css';
import { Link } from 'gatsby';
import { Menu, MenuItem, Button } from '@material-ui/core';

const Header = () => {
    
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
            <span className={font}>Existence is weird</span>
            <div className={links}>
                <Link className={link} to="../blog">Articles</Link>
                <Link className={link} to="../books">Books</Link>
                <Link className={link} to="../about">About</Link>
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
                <MenuItem onClick={handleClose}><Link className={HamburgerLink} to="../pages/blog">Articles</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link className={HamburgerLink} to="../pages/books">Books</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link className={HamburgerLink} to="../pages/about">About</Link></MenuItem>
            </Menu>
        </div>

    )
}

export default Header