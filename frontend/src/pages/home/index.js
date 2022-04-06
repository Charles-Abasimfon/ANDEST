import React, { useState, useEffect } from 'react';
import HomeMain from './HomeMain';
import HeaderStyleTwo from '../../components/Header/HeaderStyleTwo';
import Footer from '../../components/Footer';
import footerLogo from '../../assets/images/logos/logo-white.png';
import PageLoading from '../../components/Loader/PageLoading';

function HomePage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <React.Fragment>
      {/* using a ternary operator to determine which component to display
    based on the loaded state. If loaded is false the Loader is rendered */}
      {!loaded ? (
        <PageLoading />
      ) : (
        <>
          <HeaderStyleTwo parentMenu='home' />
          <HomeMain />
          <Footer footerLogo={footerLogo} footerCTA='enable' />
        </>
      )}
    </React.Fragment>
  );
}

export default HomePage;
