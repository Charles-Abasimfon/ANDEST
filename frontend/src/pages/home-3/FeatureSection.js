import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Counter from './CounterSection';

// Image
import aboutImg from '../../assets/images/about/about.jpg';

const Feature = () => {

    return (
        <div className="ras-features ras-features-2 ras-features-with-calltoaction zIndex">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div class="ras-calltoaction">
                            <Counter />
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <Fade bottom>
                            <div className="ras-features-image bordered-image">
                                <img src={aboutImg} alt="our-features" />
                            </div>
                        </Fade>
                    </div>
                    <div className="col-lg-6">
                        <div className="ras-features-details">
                            <Fade bottom>
                                <h2>A creative agency of some<br /><span className="color-title">Creative & inteligents </span>people</h2>
                            </Fade>
                            <Fade bottom>
                                <p>Lorem ipsum dolor seat ameat dui too consecteture elite. Wel are raisn a creative & digital agency who always provideing a huge creative and marketing relatated.</p>
                            </Fade>
                            <div className="row features-items-wrapper">
                                <div className="col-md-6">
                                    <Fade bottom>
                                        <div className="features-item">
                                            <div className="features-icon purple-bg-icon">
                                                <i className="flaticon-start-up"></i>
                                            </div>
                                            <div className="features-content">
                                                <h5>Top Rated</h5>
                                                <p>Creative Agency </p>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                                <div className="col-md-6">
                                    <Fade bottom>
                                        <div className="features-item">
                                            <div className="features-icon orange-bg-icon">
                                                <i className="flaticon-smiling-girl"></i>
                                            </div>
                                            <div className="features-content">
                                                <h5>Happy Clients</h5>
                                                <p>5K+ Happy Clients</p>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                            <Fade bottom>
                                <div className="features-btn text-left">
                                    <Link to="/contact" className="btn btn-large btn-primary">Explore More<i className="icofont-long-arrow-right"></i></Link>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature;