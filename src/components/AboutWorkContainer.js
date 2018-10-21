import React from 'react'

import '../css/About.css'
import {Grid, Row, Col} from 'react-flexbox-grid';

import img1 from '../images/about/about1.jpg';
import img2 from '../images/about/about2.jpg';
import img3 from '../images/about/about3.jpg';

const AboutWorkContainer = ({ siteTitle }) => (
    <div id="aboutgrid">
        <Grid>
            <Row id="about-header">
                <Col md={12} xs={12}>
                    <h2>WHAT WE DO</h2>
                </Col>
                <Col md={12} xs={12}>
                    <p>The team’s expertise in learning experience design, systems development, user experience design, and application of design thinking principles have allowed the team to develop interventions for different sectors in the one country, one of which is the Disaster Preparedness Simulator.</p>
                </Col>
            </Row>
            <Row center="md" id="about-photo">
                <Col md>
                    <img src={img1} alt="Action 1"/>
                </Col>
                <Col md>
                    <img src={img2} alt="Action 2"/>
                </Col>
                <Col md>
                    <img src={img3} alt="Action 3"/>    
                </Col>
            </Row>

        </Grid>
    </div>
)

export default AboutWorkContainer
