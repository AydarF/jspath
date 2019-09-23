/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer";


import "./layout.css"

export const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            author
            keywords
          }
        }
        allContentfulLink(sort: { fields: [createdAt], order: ASC}) {
          edges {
            node {
              title
              url
              createdAt
            }
          }
        }
      }
    `}
    render={data => (
        <>
        <div>
          <Header />
          <div>{children}</div> 
            <Footer data={data}>
              © {new Date().getFullYear()}, Built by <a href="https://www.github.com">Aydar Fayzullin</a> with {` `} <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Footer>
        </div>
          
          
        </>
    )}  
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
