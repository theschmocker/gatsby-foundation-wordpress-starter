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
  const { site: { siteMetadata } } = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
  `);

  return (
    <>
      <Header siteTitle={siteMetadata.title} />
      <GridContainer>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
            {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </GridContainer>
    </>
  );
}

Base.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Base
