import React from 'react'

import MainContainer from '../components/MainContainer';
import Header from '../components/Header'
import TeamContainer from '../components/TeamContainer';
import Footer from '../components/Footer';
import AboutWorkContainer from '../components/AboutWorkContainer';
import PortfolioContainer from '../components/PortfolioContainer';

const IndexPage = () => (
  <div>
    <Header/>
    <MainContainer/>
    <TeamContainer/>
    <AboutWorkContainer/>
    <PortfolioContainer/>
    <Footer />
  </div>
)

export default IndexPage
