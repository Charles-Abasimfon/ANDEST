import React from 'react';
import Service from './ServiceSection';
import Testimonial from './TestimonialSection';
import Breadcrumb from '../../components/Breadcrumb';
import Newsletter from '../../components/Newsletter';
import ScrollToTop from '../../components/ScrollTop';


const ServiceMain = () => {

    return (
        <React.Fragment>
            {/* Breadcrumb Start */}
            <Breadcrumb 
                pageTitle="Service"
            />
            {/* Breadcrumb End */}

            {/* Service Start */}
            <Service />
            {/* Service End */}

            {/* Newsletter Start */}
            <Newsletter />
            {/* Newsletter End */}

            {/* Testimonial Start */}
            <Testimonial />
            {/* Testimonial End */}

			{/* scrolltop-start */}
			<ScrollToTop />
			{/* scrolltop-end */}

        </React.Fragment>
    )
}

export default ServiceMain;