import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import {Grid, Row, Col} from 'react-flexbox-grid';

import illu from '../images/undraw_interaction_design_odgc.svg';

import anialogo from '../images/logo-layered.png';
import ogimage from '../images/logo-og.jpg';


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
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="author" content="Richard Parayno - 2018"/>
          <meta name="robots" content="index, follow"/>
          <meta name="description" content="Developing innovative interventions to change the way we learn." />
          <meta property="og:type" content="profile"/>
          <meta property="og:url" content="https://aniadesignlab.org/" />
          <meta property="og:title" content="Ania Design Lab" />
          <meta property="og:description" content="Developing innovative interventions to change the way we learn." />
          <meta property="og:image" content={ogimage} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Ania Design Lab" />
          <meta name="twitter:description" content="Developing innovative interventions to change the way we learn." />
          <meta name="twitter:image" content={ogimage} />
        </Helmet>
        <div id="landingcontainer">
          <Grid>
            <div>
              <Row>
                <Col start="md" xs={12} md={6}>
                  <h1>Leveraging Experience Design for an Educated Philippines</h1>
                </Col>
                <Col middle="md" md={5}>
                  <img src={anialogo}/>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <p>At Ania Design Lab, we create innovative interventions that change how we learn.</p>
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
