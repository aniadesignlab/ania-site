import React from 'react'

import '../css/Team.css'
import {Grid, Row, Col} from 'react-flexbox-grid';

const TeamContainer = ({ siteTitle }) => (
  <Grid id="teamgrid">
    <Row id="team-header">
      <Col md={12} xs={12}>
        <h2>WHO WE ARE</h2>
      </Col>
      <Col md={12} xs={12}>
        <p>We are an educational technology company committed in developing innovative interventions that will change how we learn.</p>
      </Col>
    </Row>
    <Row id="team-photo">
      <Col>
        
      </Col>
      <Col>
        
      </Col>
      <Col>
        
      </Col>
      <Col>
        
      </Col>
      <Col>
        
      </Col>
    </Row>
    <Row id="team-about">
      <Col md={6} xs={6}>
        <h2>HOW WE DO IT</h2>
        <p>We are constantly looking for opportunities to improve the learning experience of the Filipino people through the application of design thinking principles and research on emerging technologies.</p>
      </Col>
      <Col md={6} xs={6}>
        <h2>OUR MISSION</h2>
        <p>Our mission is to design, develop, and deliver interventions to problems that hinder the learning experience of the stakeholders involved with our projects.</p>
      </Col>
    </Row>
  </Grid>
)

export default TeamContainer
