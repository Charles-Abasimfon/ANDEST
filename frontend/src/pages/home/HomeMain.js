import React, { Component } from 'react';
import Blog from './BlogSection';
import Feature from './FeatureSection';
import Service from './ServiceSection';
import HomeSlider from './SliderSection';
import VideoSection from './VideoSection';
import CaseStudy from './CaseStudySection';
import Newsletter from '../../components/Newsletter';
import WhyChooseUs from './WhyChooseUsSection';
import Testimonial from './TestimonialSection';
import ScrollToTop from '../../components/ScrollTop';

class HomeMain extends Component {

	render() {

		return (
			<React.Fragment>
				<div className="ras-main-content">
					{/* SliderSection-start */}
					<HomeSlider />
					{/* SliderSection-start */}

					{/* Video-area-start */}
					<VideoSection />
					{/* Video-area-end */}

					{/* Service-area-start */}
					<Service />
					{/* Service-area-end */}

					{/* Feature-area-start */}
					<Feature />
					{/* Feature-area-end */}

					{/* CaseStudy-area-start */}
					<CaseStudy />
					{/* CaseStudy-area-end */}

					{/* WhyChooseUs-area-start */}
					<WhyChooseUs />
					{/* WhyChooseUs-area-end */}

					{/* testmonial-area-start */}
					<Testimonial />
					{/* testmonial-area-end */}

					{/* Newsletter-area-start */}
					<Newsletter />
					{/* Newsletter-area-end */}

					{/* blog-area-start */}
					<Blog />
					{/* blog-area-end */}

					{/* scrolltop-start */}
					<ScrollToTop
						scrollClassName="scrollup orange-color"
					/>
					{/* scrolltop-end */}
				</div>

			</React.Fragment>
		);
	}
}

export default HomeMain;