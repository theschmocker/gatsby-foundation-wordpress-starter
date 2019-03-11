/**
 * Base component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { GridContainer } from 'react-foundation';

import Header from './Header';

import "typeface-open-sans"
import "../scss/app.scss"

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faBars)

const Base = ({ children }) => { 
  const { wordpressSiteMetadata } = useStaticQuery(graphql`
  {
    wordpressSiteMetadata {
      name
      description
    }
  }
  `);

  return (
    <>
      <Header siteTitle={wordpressSiteMetadata.name} />
      <GridContainer>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
            {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
            {', '}
          <a href="https://wordpress.org">WordPress</a>
            {', and '}
          <a href="https://foundation.zurb.com/sites.html">Foundation for Sites</a>
        </footer>
      </GridContainer>
    </>
  );
}

Base.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Base
