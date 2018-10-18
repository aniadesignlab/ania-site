import React from 'react'
import { Link } from 'gatsby'

import MainContainer from '../components/MainContainer';
import Footer from '../components/Footer';
import {Grid, Row, Col} from 'react-flexbox-grid';

const IndexPage = () => (
  <div>
    <MainContainer>
        <Grid>
          <div id="landingcontainer">
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
    </MainContainer>
    <Footer />
  </div>
)

export default IndexPage
