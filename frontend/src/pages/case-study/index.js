import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import CaseStudyMain from './CaseStudyMain';
import ScrollToTop from '../../components/ScrollTop';

// Image
import Logo from '../../assets/images/logos/logo-colored.svg';

const CaseStudy = () => {
    return (
        <React.Fragment>
            <Header
                parentMenu = 'page'
                headerNormalLogo={Logo}
                headerClass="ras-header ras-header-2 ras-header-2-alt"
            />

            <Breadcrumb
                pageTitle="Case Study"
            />

            <CaseStudyMain />

            {/* scrolltop-start */}
            <ScrollToTop />
            {/* scrolltop-end */}

            <Footer
                footerClass="ras-footer ras-footer-1 ras-footer-1-fade-bg"
                footerLogo={Logo}
            />

        </React.Fragment>
    );
}


export default CaseStudy;

