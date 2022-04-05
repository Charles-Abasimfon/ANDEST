import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceMain from './ServiceMain';

// Image
import Logo from '../../assets/images/logos/logo-colored.svg';

const Service = () => {

    return (
        <React.Fragment>
            <Header
                parentMenu = 'page'
                headerNormalLogo={Logo}
                headerClass="ras-header ras-header-2 ras-header-2-alt"
            />

            {/* Service Main */}
            <ServiceMain />
            {/* Service Main */}
            
            <Footer
                footerClass="ras-footer ras-footer-1 ras-footer-1-fade-bg"
                footerLogo={Logo}
            />
        </React.Fragment>
    );
}

export default Service;