import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AboutMain from './AboutMain';

// Image
import Logo from '../../assets/images/logos/logo-colored.svg';

const About = () => {

    return (
        <React.Fragment>
            <Header
                headerNormalLogo={Logo}
                headerClass="ras-header ras-header-2 ras-header-2-alt"
            />

            {/* About Main */}
            <AboutMain />
            {/* About Main */}
            
            <Footer
                footerClass="ras-footer ras-footer-1 ras-footer-1-fade-bg"
                footerLogo={Logo}
            />
        </React.Fragment>
    );
}

export default About;