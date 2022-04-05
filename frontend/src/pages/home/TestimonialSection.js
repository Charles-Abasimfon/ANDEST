import React from 'react';
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';
import SingleTestimonial from '../../components/Testimonial/SingleTestimonial';


import testiImg1 from '../../assets/images/testimonial/testi-1.jpg';
import testiImg2 from '../../assets/images/testimonial/testi-2.jpg';
import testiImg3 from '../../assets/images/testimonial/testi-3.jpg';
import testiImg4 from '../../assets/images/testimonial/testi-4.jpg';
import testiImg5 from '../../assets/images/testimonial/testi-5.jpg';

const Testimonial = () => {

    const testimonialSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {

                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <div className="ras-testimonial ras-testimonial-1 sec-spacer-bottom-100">
                <div className="container">
                    <Fade bottom>
                        <h2 className="text-center mb-50">Let’s see testimonials to<br /> what clients says</h2>
                    </Fade>
                    <Slider {...testimonialSettings}>
                        <SingleTestimonial
                            itemClass="ras-single-testimonial"
                            itemImg={testiImg1}
                            Title="Backey Tompson"
                            Designation="Ceo of Atardam"
                            Desc="Maboriosam in a nesciung eget magna dapibus disting tloctio in the find it per odiy."
                        />
                        <SingleTestimonial
                            itemClass="ras-single-testimonial"
                            itemImg={testiImg2}
                            Title="Backey Tompson"
                            Designation="Ceo of Atardam"
                            Desc="Maboriosam in a nesciung eget magna dapibus disting tloctio in the find it per odiy."
                        />
                        <SingleTestimonial
                            itemClass="ras-single-testimonial"
                            itemImg={testiImg3}
                            Title="Backey Tompson"
                            Designation="Ceo of Atardam"
                            Desc="Maboriosam in a nesciung eget magna dapibus disting tloctio in the find it per odiy."
                        />
                        <SingleTestimonial
                            itemClass="ras-single-testimonial"
                            itemImg={testiImg4}
                            Title="Backey Tompson"
                            Designation="Ceo of Atardam"
                            Desc="Maboriosam in a nesciung eget magna dapibus disting tloctio in the find it per odiy."
                        />
                        <SingleTestimonial
                            itemClass="ras-single-testimonial"
                            itemImg={testiImg5}
                            Title="Backey Tompson"
                            Designation="Ceo of Atardam"
                            Desc="Maboriosam in a nesciung eget magna dapibus disting tloctio in the find it per odiy."
                        />
                    </Slider>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Testimonial