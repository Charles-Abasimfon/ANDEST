import React, { useState, useEffect } from 'react';
import HomeMain from './HomeMain';
import Header from '../../components/Header/';
import Footer from '../../components/Footer';
import footerLogo from '../../assets/images/logos/logo-white.png';
// Image
import Logo from '../../assets/images/logos/logocolored.webp';

function HomePage() {
  return (
    <React.Fragment>
      <Header
        headerNormalLogo={Logo}
        headerClass='ras-header ras-header-2 ras-header-2-alt'
      />
      <HomeMain />
      <Footer footerLogo={footerLogo} footerCTA='enable' />
    </React.Fragment>
  );
}

export default HomePage;
