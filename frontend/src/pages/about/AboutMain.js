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
      <Breadcrumb pageTitle='About ANDEST LLC' />
      {/* Breadcrumb End */}

      {/* Feature Start */}
      <Feature />
      {/* Feature End */}

      {/* scrolltop-start */}
      <ScrollToTop />
      {/* scrolltop-end */}
    </React.Fragment>
  );
};

export default AboutMain;
