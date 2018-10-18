import React from 'react'
import { Link } from 'gatsby'

import '../css/Footer.css'
import {Grid, Row, Col} from 'react-flexbox-grid';

const Footer = ({ siteTitle }) => (
  <Grid id="footergrid">
    <Row>
      <Col md={6} xs={6} id="connect">
        <h2>CONNECT WITH US</h2>
        <div id="connect-push">
          <p>ANIA DESIGN LAB 2018. ALL RIGHTS RESERVED.</p>
        </div>
      </Col>
      <Col md={6} xs={6} id="sitemap">
        <h2>SITEMAP</h2>
        <ul>
          <li>WHO WE ARE</li>
          <li>WHAT WE DO</li>
          <li>WHAT WE'VE DONE</li>
          <li>OUR BLOG</li>
        </ul>
      </Col>
    </Row>
  </Grid>
)

export default Footer
