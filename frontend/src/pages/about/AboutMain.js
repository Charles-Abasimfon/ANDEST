import React from 'react';
import Feature from './FeatureSection';
import WhyChooseUs from './WhyChooseUsSection';
import Faq from './FaqSection';
import AboutVideo from './VideoSection';
import Breadcrumb from '../../components/Breadcrumb';
import ScrollToTop from '../../components/ScrollTop';


const AboutMain = () => {

    return (
        <React.Fragment>
            {/* Breadcrumb Start */}
            <Breadcrumb />
            {/* Breadcrumb End */}

            {/* Feature Start */}
            <Feature />
            {/* Feature End */}

            {/* WhyChooseUs Start */}
            <WhyChooseUs />
            {/* WhyChooseUs End */}

            {/* Faq Start */}
            <Faq />
            {/* Faq End */}

            {/* AboutVideo Start */}
            <AboutVideo />
            {/* AboutVideo End */}

			{/* scrolltop-start */}
			<ScrollToTop />
			{/* scrolltop-end */}

        </React.Fragment>
    )
}

export default AboutMain;