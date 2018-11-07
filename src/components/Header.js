import React from 'react'
import { Link } from 'gatsby'

import '../css/Header.css'
import anialogo from '../images/logo-layered.png';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ResponsiveMenu from 'react-responsive-navbar';

import { FiMenu, FiX } from 'react-icons/fi';

const Header = ({ siteTitle }) => (
  <div id="header">
    <Grid>
      <Row start="xs" middle="md">
        <Col xs={12} md={12}>
          <ResponsiveMenu
            menuOpenButton={<FiMenu className="menuButton"/>}
            menuCloseButton={<FiX className="menuButton"/>}
            changeMenuOn="770px"
            largeMenuClassName="large-menu-classname"
            smallMenuClassName="small-menu-classname"
            menu={
              <ul>
                <li><a href="#whoweare">WHO WE ARE</a></li>
                <li><a href="#whatwedo">WHAT WE DO</a></li>
                <li><a href="#ourportfolio">OUR PORTFOLIO</a></li>
                <li><a href="https://medium.com/ania-design-lab">OUR BLOG</a></li>
              </ul>
            }
          />
        </Col>
      </Row>
    </Grid>
  </div>
)

export default Header
