import React from "react";
import Header from './header';
import Footer from './footer';
import './styles/global.css';
import { container } from './styles/layout.module.css';

const Layout = (props) => {
    return (
        <>
        <Header />
            <div className={container}>
            {props.children}
            </div>
        <Footer />
        </>
    )
}

export default Layout;