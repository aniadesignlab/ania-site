import React from 'react'

import '../css/Portfolio.css'
import {Grid, Row, Col} from 'react-flexbox-grid';

var portfolio1a = require('../images/portfolio/dps/portfolio1-1.jpg');
var portfolio1b = require('../images/portfolio/dps/portfolio1-2.jpg');
var portfolio1c = require('../images/portfolio/dps/portfolio1-3.jpg');




const PortfolioContainer = ({ siteTitle }) => (
    <div id="portfoliogrid">
        <Grid>
            <Row id="ourportfolio">
                <Col md={12} xs={12}>
                    <h2>OUR PORTFOLIO</h2>
                </Col>
                <Col md={12} xs={12} id="portfolio-project">
                    <h1>DISASTER PREPAREDNESS SIMULATOR</h1>
                </Col>
                <Col md={12} xs={12} id="portfolio-brief">
                    <p>A Virtual Reality disaster preparedness learning experience where users are immersed in various disasters in a controlled environment. Through the use of simulated experiences, students can understand the effects of actions and decisions they make during various disaster situations while applying the necessary safety measures.</p>
                </Col>
            </Row>
            <Row center="md" id="portfolio-photo">
                <Col md>
                    <img src={portfolio1a} alt="CARE Representatives Using the Disaster Preparedness Simulator"/>
                </Col>
                <Col md>
                    <img src={portfolio1b} alt="Ania Design Lab Representative Assisting Student Tester"/>
                </Col>
                <Col md>
                    <img src={portfolio1c} alt="Student Tester Using the Disaster Preparedness Simulator"/>
                </Col>

            </Row>
        </Grid>
    </div>
)

export default PortfolioContainer
