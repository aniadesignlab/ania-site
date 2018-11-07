import React from 'react'

import '../css/Team.css'
import {Grid, Row, Col} from 'react-flexbox-grid';
var richard = require('../images/team/richard.jpg');
var alyzza = require('../images/team/alyzza.jpg');
var lara = require('../images/team/lara.jpg');
var amiel = require('../images/team/amiel.jpg');
var patrick =  require('../images/team/patrick.jpg');

const TeamContainer = ({ siteTitle }) => (
  <Grid id="teamgrid">
    <Row id="whoweare">
      <Col md={12} xs={12}>
        <h2>WHO WE ARE</h2>
      </Col>
      <Col md={12} xs={12}>
        <p>We are an educational technology company committed to developing innovative interventions that change how we learn.</p>
      </Col>
    </Row>
    <Row center="xs" id="team-photo">
      <Col className="team-card" md>
        <img src={richard} alt="Richard"/>
        <h3>Richard Parayno</h3>
        <p>Operations Manager</p>
      </Col>
      <Col className="team-card" md>
        <img src={lara} alt="Lara"/>
        <h3>Lara Severino</h3>
        <p>Creative Director</p>
      </Col>
      <Col className="team-card" md>
        <img src={patrick} alt="Patrick"/>
        <h3>Patrick Naui</h3>
        <p>Founder, Chief Executive Officer</p>
      </Col>
      <Col className="team-card" md>

        <h3>Alyzza Delgado</h3>
        <p>Lead Experience Designer</p>
      </Col>
      <Col className="team-card" md>

        <h3>Amiel Bornales</h3>
        <p>Systems Developer</p>
      </Col>
    </Row>
    <Row id="team-about">
      <Col md={6} xs={12}>
        <h2>HOW WE DO IT</h2>
        <p>We are constantly looking for opportunities to improve the learning experience of the Filipino people through the application of design thinking principles and research on emerging technologies.</p>
      </Col>
      <Col md={6} xs={12}>
        <h2>OUR MISSION</h2>
        <p>Our mission is to design, develop, and deliver interventions to problems that hinder the learning experience of the stakeholders involved with our projects.</p>
      </Col>
    </Row>
  </Grid>
)

export default TeamContainer
