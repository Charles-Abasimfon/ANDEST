import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import bannerImage from "../../assets/images/sliders/banner-2-slide.jpg";

import diamondShape from "../../assets/images/diamond-shape.svg";
import curlyShape from "../../assets/images/curly-shape.svg";
import bannerDots1 from "../../assets/images/banner-dots-1.svg";
import circleShape1 from "../../assets/images/circle-shape-1.svg";
import circleShape2 from "../../assets/images/circle-shape-2.svg";

const SliderPart = () => {

    const sliderSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        margin: 0,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <div className="ras-banner ras-banner-3 gradient-bg">
                <div className="slider-active">
                    <Slider {...sliderSettings}>
                        <div className="ras-slide">
                            <div className="container">
                                <div className="row align-items-center ras-slide-content-wrapper">
                                    <div className="col-lg-7">
                                        <div className="ras-slide-content fadeInleft">
                                            <h3 className="ras-slide-sub-heading primary-text-color">Rasin Agency</h3>
                                            <h2 className="ras-slide-heading">Digital & Cretive Agency  Providing Solution</h2>
                                            <p className="ras-slide-desc mb-50">Lorem ipsum dolor consecteture elite we’re a creative digital agency to to your business growing up.
                                            </p>
                                            <Link to="/contact" className="btn btn-primary btn-large">Let’s Get Started<i className="icofont-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                    <div class="col-lg-5">
                                        <div class="ras-slide-image fadeInRight">
                                            <img src={bannerImage} alt="A Digital & Cretive Agency of Inteligent People." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ras-slide">
                            <div className="container">
                                <div className="row align-items-center ras-slide-content-wrapper">
                                    <div className="col-lg-7">
                                        <div className="ras-slide-content fadeInleft">
                                            <h3 className="ras-slide-sub-heading primary-text-color">Rasin Agency</h3>
                                            <h2 className="ras-slide-heading">Digital & Cretive Agency  Providing Solution</h2>
                                            <p className="ras-slide-desc mb-50">Lorem ipsum dolor consecteture elite we’re a creative digital agency to to your business growing up.
                                            </p>
                                            <Link to="/contact" className="btn btn-primary btn-large">Let’s Get Started<i className="icofont-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                    <div class="col-lg-5">
                                        <div class="ras-slide-image fadeInRight">
                                            <img src={bannerImage} alt="A Digital & Cretive Agency of Inteligent People." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ras-slide">
                            <div className="container">
                                <div className="row align-items-center ras-slide-content-wrapper">
                                    <div className="col-lg-7">
                                        <div className="ras-slide-content fadeInleft">
                                            <h3 className="ras-slide-sub-heading primary-text-color">Rasin Agency</h3>
                                            <h2 className="ras-slide-heading">Digital & Cretive Agency  Providing Solution</h2>
                                            <p className="ras-slide-desc mb-50">Lorem ipsum dolor consecteture elite we’re a creative digital agency to to your business growing up.
                                            </p>
                                            <Link to="/contact" className="btn btn-primary btn-large">Let’s Get Started<i className="icofont-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                    <div class="col-lg-5">
                                        <div class="ras-slide-image fadeInRight">
                                            <img src={bannerImage} alt="A Digital & Cretive Agency of Inteligent People." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="banner-3-shapes">
                    <img src={curlyShape} alt="curly-shape" className="banner-3-curly-shape" />
                    <img src={circleShape1} alt="circle-shape" className="banner-3-circle-shape-1" />
                    <img src={circleShape2} alt="circle-shape" className="banner-3-circle-shape-2" />
                    <img src={diamondShape} alt="diamond-shape" className="banner-3-diamond-shape" />
                    <img src={bannerDots1} alt="diamond-shape" className="banner-3-dot-shape" />
                </div>
            </div>
        </React.Fragment>
    );
}

export default SliderPart;