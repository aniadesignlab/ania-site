import React from 'react'

import '../css/Team.css'
import {Grid, Row, Col} from 'react-flexbox-grid';
import richard from '../images/team/richard.jpg';
import alyzza from '../images/team/alyzza.jpg';
import lara from '../images/team/lara.jpg';
import amiel from '../images/team/amiel.jpg';
import patrick from '../images/team/patrick.jpg';

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
    <Row center="xs" id="team-photo">
      <Col className="team-card" xs>
        <img src={richard} alt="Richard Photo"/>
        <h3>Richard Parayno</h3>
        <p>Operations Manager</p>
      </Col>
      <Col className="team-card" xs>
        <img src={lara} alt="Lara Photo"/>
        <h3>Lara Severino</h3>
        <p>Creative Director</p>
      </Col>
      <Col className="team-card" xs>
        <img src={patrick} alt="Patrick Photo"/>
        <h3>Patrick Naui</h3>
        <p>Founder, Chief Executive Officer</p>
      </Col>
      <Col className="team-card" xs>

        <h3>Alyzza Delgado</h3>
        <p>Lead Experience Designer</p>
      </Col>
      <Col className="team-card" xs>

        <h3>Amiel Bornales</h3>
        <p>Systems Developer</p>
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
