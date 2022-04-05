import React from 'react';
import BlogMain from './BlogMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import ScrollToTop from '../../components/ScrollTop';

// Image
import Logo from '../../assets/images/logos/logo-colored.svg';

const Blog = () => {
    return (
        <React.Fragment>
            <Header
                headerNormalLogo={Logo}
                headerClass="ras-header ras-header-2 ras-header-2-alt"
            />
            <Breadcrumb
                pageTitle="Blog"
            />

            {/* Blog Main */}
            <BlogMain />
            {/* Blog Main End */}

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


export default Blog;

