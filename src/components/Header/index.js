import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Menu, MenuItem, TitleBar, Breakpoints } from 'react-foundation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

// TODO: drilldown menus

function Navigation({ isOpen, close, siteTitle }) {
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
                        <img src="{{ theme.link }}/img/logo.png" alt={siteTitle} />
                    </Link>
                </div>
                <nav className="cell auto">
                    <Menu isVertical className="large-horizontal">
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
                        <FontAwesomeIcon className="icon" icon="bars" />
                    </button>
                </div>
            </TitleBar>
            <Navigation isOpen={menuIsOpen} close={closeMenu} siteTitle={siteTitle} />
        </>
    );
}

export default Header;