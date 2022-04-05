import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlogDetailsMain from './BlogDetailsMain';
import Breadcrumb from '../../components/Breadcrumb';
import ScrollToTop from '../../components/ScrollTop';

// Image
import Logo from '../../assets/images/logos/logo-colored.svg';

const BlogDetails = () => {
    return (
        <React.Fragment>
            <div className="single-post">
                <Header
                    parentMenu = 'page'
                    headerNormalLogo={Logo}
                    headerClass="ras-header ras-header-2 ras-header-2-alt"
                />
                <Breadcrumb
                    pageTitle="Blog Details"
                />

                {/* Blog Main */}
                <BlogDetailsMain />
                {/* Blog Main End */}

                {/* scrolltop-start */}
                <ScrollToTop />
                {/* scrolltop-end */}

                <Footer
                    footerClass="ras-footer ras-footer-1 ras-footer-1-fade-bg"
                    footerLogo={Logo}
                />
            </div>

        </React.Fragment>
    );
}


export default BlogDetails;

