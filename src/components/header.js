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
            <li>WHO WE ARE</li>
            <li>WHO WE DO</li>
            <li>WHAT WE'VE DONE</li>
            <li>OUR BLOG</li>
          </ul>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default Header
