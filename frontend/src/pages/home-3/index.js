import React from 'react';
import HomeThreeMain from './HomeThreeMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Logo from '../../assets/images/logos/logo-colored.svg';
import footerLogo from '../../assets/images/logos/logo.svg';

class HomeThree extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header
                    parentMenu='home'
                    headerNormalLogo={Logo}
                    headerClass='ras-header ras-header-2 ras-header-2-alt'
                />
                <HomeThreeMain />
                <Footer
                    footerLogo={footerLogo}
                    footerCTA='enable'
                />
            </React.Fragment>
        );
    }
}

export default HomeThree;
