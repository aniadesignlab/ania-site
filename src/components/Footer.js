import React from 'react'
import { Link } from 'gatsby'

import '../css/Footer.css'
import {Grid, Row, Col} from 'react-flexbox-grid';
import logo from '../images/logo-layered.png';

const Footer = ({ siteTitle }) => (
  <div id="footergrid">
    <Grid>
      <Row>
        <Col md={6} xs={6} id="connect">
          <h2>CONNECT WITH US</h2>
          <div id="connect-push">
            <img src={logo} alt="Ania Logo" style={{width: 160, height: 100}}/>
            <p>ANIA DESIGN LAB 2018. ALL RIGHTS RESERVED.</p>
          </div>
        </Col>
        <Col md={6} xs={6} id="sitemap">
          <h2>SITEMAP</h2>
          <ul>
            <li><a href="#team-header">WHO WE ARE</a></li>
            <li><a href="#about-header">WHAT WE DO</a></li>
            <li><a href="#portfolio-header">OUR PORTFOLIO</a></li>
            <li><a href="http://www.medium.com">OUR BLOG</a></li>
          </ul>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default Footer
