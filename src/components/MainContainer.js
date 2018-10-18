import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Footer from './Footer'
import '../css/fonts.css'
import '../css/LandingPage.css'

const MainContainer = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
        >
          <html lang="en"/>
        </Helmet>
        <Header />
        <div
          style={{
            margin: '0 auto',
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

export default MainContainer
