import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Menu, MenuItem, TitleBar, Breakpoints } from 'react-foundation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';
import logo from '../../images/gatsby-icon.png';

// TODO: drilldown menus

function Navigation({ isOpen, close, siteTitle }) {
    // Get all Wordpress pages except for the front page to build navigation
    const { allWordpressPage } = useStaticQuery(graphql`
    {
        allWordpressPage(filter: { path: { ne: "/" } }) {
            edges {
                node {
                    title
                    slug
                }
            }
        }
    }
    `)
    return (
        <>
            <div className={`off-canvas in-canvas-for-large position-right ${isOpen && 'is-open'}`}>
                <div class="cell shrink site-title show-for-large">
                    <Link to="/">
                        <img className="logo" src={logo} alt={siteTitle} />
                    </Link>
                </div>
                <nav className="cell auto">
                    <Menu isVertical className="large-horizontal">
                        <MenuItem hideFor={Breakpoints.LARGE}><Link onClick={close} to="/">Home</Link></MenuItem>
                        {allWordpressPage.edges.map(({ node: page }) => (
                            <MenuItem><Link onClick={close} to={page.slug}>{page.title}</Link></MenuItem>
                        ))}
                    </Menu>
                </nav>
            </div>
            <div
                class={`js-off-canvas-overlay is-overlay-fixed ${isOpen && 'is-visible is-closable'}`}
                onClick={close}
            />
        </>

    );
}

function Header({ siteTitle }) {
    // Handle menu state. Could be useful as a custom hook
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const openMenu = () => setMenuIsOpen(true);
    const closeMenu = () => setMenuIsOpen(false);

    return (
        <>
            <TitleBar hideFor={Breakpoints.LARGE} className="fixed">
                <div class="title-bar-left"><Link className="text-white" to="/">{siteTitle}</Link></div>
                <div class="title-bar-right">
                    <button onClick={openMenu}>
                        <span class="text-white title-bar-title text-upper">Menu</span>
                        <FontAwesomeIcon className="icon text-white" icon="bars" />
                    </button>
                </div>
            </TitleBar>
            <Navigation isOpen={menuIsOpen} close={closeMenu} siteTitle={siteTitle} />
        </>
    );
}

export default Header;