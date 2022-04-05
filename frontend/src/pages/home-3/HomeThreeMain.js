import React, { Component } from 'react';
import SliderPart from './SliderSection';
import Feature from './FeatureSection';
import Service from './ServiceSection';
import Faq from './FaqSection';
import Team from './TeamSection';
import Testimonial from './TestimonialSection';
import Newsletter from '../../components/Newsletter';
import Blog from './BlogSection';
import ScrollToTop from '../../components/ScrollTop';

class HomeThreeMain extends Component {

	render() {

		return (
			<div className="home-style3">
				{/* SliderPart-start */}
				<SliderPart />
				{/* SliderPart-end */}

				{/* Feature-area-start */}
				<Feature />
				{/* Feature-area-end */}

				{/* Service-area-start */}
				<Service />
				{/* Service-area-end */}

				{/* Faq-area-start */}
				<Faq />
				{/* Faq-area-end */}

				{/* Team-area-start */}
				<Team />
				{/* Team-area-end */}

				{/* Testimonial-area-start */}
				<Testimonial />
				{/* Testimonial-area-end */}

				{/* Newsletter-area-start */}
				<Newsletter />
				{/* Newsletter-area-end */}

				{/* blog-area-start */}
				<Blog />
				{/* blog-area-end */}

				{/* scrolltop-start */}
				<ScrollToTop />
				{/* scrolltop-end */}
			</div>
		);
	}
}

export default HomeThreeMain;