import React from 'react'
import { Link } from 'gatsby'

import '../css/Footer.css'
import {Grid, Row, Col} from 'react-flexbox-grid';
import logo from '../images/logo-layered.png';

const Footer = ({ siteTitle }) => (
  <div id="footergrid">
    <Grid>
      <Row>
        <Col md={6} xs={12} id="connect">
          <h2>CONNECT WITH US</h2>
          
        </Col>
        <Col md={6} xs={12} id="sitemap">
          <h2>SITEMAP</h2>
          <ul>
            <li><a href="#whoweare">WHO WE ARE</a></li>
            <li><a href="#whatwedo">WHAT WE DO</a></li>
            <li><a href="#ourportfolio">OUR PORTFOLIO</a></li>
            <li><a href="https://medium.com/ania-design-lab">OUR BLOG</a></li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md={12} xs={12}>
            <img className="footerlogo" src={logo} alt="Ania Design Lab"/>
            <p>Designed and Developed with 💙 by <a href="https://richardparayno.design">Richard Parayno</a> for Ania Design Lab. ALL RIGHTS RESERVED.</p>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default Footer
