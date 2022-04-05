import React from 'react';
import HomeMain from './HomeMain';
import HeaderStyleTwo from '../../components/Header/HeaderStyleTwo';
import Footer from '../../components/Footer';

import footerLogo from '../../assets/images/logos/logo-white.png';

class HomePage extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <HeaderStyleTwo parentMenu='home' />
        <HomeMain />
        <Footer footerLogo={footerLogo} footerCTA='enable' />
      </React.Fragment>
    );
  }
}

export default HomePage;
