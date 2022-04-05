import React from 'react';
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';
import SingleTestimonialTwo from '../../components/Testimonial/SingleTestimonialTwo';

import dotShape1 from '../../assets/images/testimonial/testimonial-3-dot-shape-1.svg';
import dotShape2 from '../../assets/images/testimonial/testimonial-3-dot-shape-2.svg';

import testiImg1 from '../../assets/images/testimonial/testimonial-3-user-1.jpg';
import testiImg2 from '../../assets/images/testimonial/testimonial-3-user-1.jpg';
import testiImg3 from '../../assets/images/testimonial/testimonial-3-user-1.jpg';
import testiImg4 from '../../assets/images/testimonial/testimonial-3-user-1.jpg';
import testiImg5 from '../../assets/images/testimonial/testimonial-3-user-1.jpg';

const Testimonial = () => {

    const testimonialSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <div className="ras-testimonial-2 ras-testimonial-2-mask-image">
            <img src={dotShape2} alt="testimonial-dot-shape-2" className="testimonial-dot-shape-2" />
            <img src={dotShape1} alt="testimonial-dot-shape-1" className="testimonial-dot-shape-1" />
                <div className="container">
                    <div className="ras-slider-one-col">
                        <Slider {...testimonialSettings}>
                            <SingleTestimonialTwo
                                itemClass="ras-single-testimonial"
                                itemImg={testiImg1}
                                Title="Backey Tompson"
                                Designation="Ceo of Atardam"
                                Desc="Maboriosam in a nesciung eget magna dapibus disting tloctio in the find it per odiy."
                            />
                            <SingleTestimonialTwo
                                itemClass="ras-single-testimonial"
                                itemImg={testiImg2}
                                Title="Backey Tompson"
                                Designation="Ceo of Atardam"
                                Desc="Maboriosam in a nesciung eget magna dapibus disting tloctio in the find it per odiy."
                            />
                            <SingleTestimonialTwo
                                itemClass="ras-single-testimonial"
                                itemImg={testiImg3}
                                Title="Backey Tompson"
                                Designation="Ceo of Atardam"
                                Desc="Maboriosam in a nesciung eget magna dapibus disting tloctio in the find it per odiy."
                            />
                            <SingleTestimonialTwo
                                itemClass="ras-single-testimonial"
                                itemImg={testiImg4}
                                Title="Backey Tompson"
                                Designation="Ceo of Atardam"
                                Desc="Maboriosam in a nesciung eget magna dapibus disting tloctio in the find it per odiy."
                            />
                            <SingleTestimonialTwo
                                itemClass="ras-single-testimonial"
                                itemImg={testiImg5}
                                Title="Backey Tompson"
                                Designation="Ceo of Atardam"
                                Desc="Maboriosam in a nesciung eget magna dapibus disting tloctio in the find it per odiy."
                            />
                        </Slider>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Testimonial