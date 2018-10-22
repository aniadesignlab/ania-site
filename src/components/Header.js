import React from 'react'
import { Link } from 'gatsby'

import '../css/Header.css'
import anialogo from '../images/logo-layered.png';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Header = ({ siteTitle }) => (
  <div id="header">
    <Grid>
      <Row>
        <Col md={3}>
          <img src={anialogo} alt="Ania Logo" style={{width: 160, height: 100}}/>
        </Col>
        <Col md={9}>
          <ul>
            <li><a href="#team-header">WHO WE ARE</a></li>
            <li><a href="#about-header">WHAT WE DO</a></li>
            <li><a href="#portfolio-header">OUR PORTFOLIO</a></li>
            <li><a href="https://medium.com/ania-design-lab">OUR BLOG</a></li>
          </ul>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default Header
