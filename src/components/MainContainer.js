import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import {Grid, Row, Col} from 'react-flexbox-grid';


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
        <div id="landingcontainer">
          <Grid>
            <div>
              <Row>
                <Col md={12}>
                  <h1>Leveraging Experience Design for an Educated Philippines</h1>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <p>At Ania Design Lab, we develop innovative interventions that change how we learn.</p>
                </Col>
              </Row>
            </div>
          </Grid>
        </div>
      </>
    )}
  />
)

export default MainContainer
