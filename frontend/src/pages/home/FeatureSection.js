import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

// Categories Image
import featureImg from '../../assets/images/features/feature-1.jpg';

const Feature = () => {

    return (
        <div className="ras-features ras-features-1 sec-spacer-bottom-120">
            <div className="container relative">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <Fade left>
                            <div className="ras-features-image">
                                <img src={featureImg} alt="our-features" />
                                <a className="support-mail" href="mailto:support@raisn.com">support@raisn.com</a>
                                <div className="features-color-dots"></div>
                                <div className="features-white-dots"></div>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-lg-6">
                        <div className="ras-features-details">                                
                            <Fade right>
                                <h2>A creative agency of inteligents & creative people</h2>
                                <p>Lorem ipsum dolor seat ameat dui too consecteture elite. Wel are raisn a creative & digital agency who always provideing a huge creative and marketing relatated.</p>
                            </Fade>
                            <Fade bottom cascade>
                                <div className="row features-items-wrapper">
                                    <div className="col-sm-6 col-6">
                                        <div className="features-item">
                                            <div className="features-icon purple-bg-icon">
                                                <i className="flaticon-man"></i>
                                            </div>
                                            <h5>Experienced advisor</h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-6">
                                        <div className="features-item">
                                            <div className="features-icon orange-bg-icon">
                                                <i className="flaticon-checked"></i>
                                            </div>
                                            <h5>Safe & Sceure</h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-6">
                                        <div className="features-item">
                                            <div className="features-icon skyblue-bg-icon">
                                                <i className="flaticon-customer-service"></i>
                                            </div>
                                            <h5>Online Support</h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-6">
                                        <div className="features-item">
                                            <div className="features-icon red-bg-icon">
                                                <i className="flaticon-chat"></i>
                                            </div>
                                            <h5>24/7 Chating</h5>
                                        </div>
                                    </div>
                                </div> 
                            </Fade>                               
                            <Fade bottom>
                                <div className="features-btn text-left mt-4">
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