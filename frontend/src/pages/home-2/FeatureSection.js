import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

// Categories Image
import featureImg from '../../assets/images/features/feature-2.jpg';

const Feature = () => {

    return (
        <div className="ras-features ras-features-2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <Fade left>
                            <div className="ras-features-image">
                                <img src={featureImg} alt="our-features" />
                            </div>
                        </Fade>
                    </div>
                    <div className="col-lg-6">                        
                        <div className="ras-features-details">
                            <Fade right>
                                <h2>A creative agency of inteligents & creative people</h2>
                                <p>Lorem ipsum dolor seat ameat dui too consecteture elite. Wel
                                are raisn a creative & digital agency who always provideing a
                                huge creative and marketing relatated.</p>                            
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
                                <div className="col-md-6">
                                    <Fade bottom>
                                        <div className="features-item">
                                            <div className="features-icon skyblue-bg-icon">
                                                <i className="flaticon-customer-service"></i>
                                            </div>
                                            <h5>Online Support</h5>
                                        </div>
                                    </Fade>
                                </div>
                                <div className="col-md-6">
                                    <Fade bottom>
                                        <div className="features-item">
                                            <div className="features-icon red-bg-icon">
                                                <i className="flaticon-chat"></i>
                                            </div>
                                            <h5>24/7 Chating</h5>
                                        </div>
                                    </Fade>
                                </div>

                            </div>
                            <Fade bottom>
                                <div className="features-btn text-left">
                                    <Link to="/contact" className="btn btn-large btn-primary">Get Started Tour</Link>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ras-blur-background"></div>
        </div>
    );
}

export default Feature;