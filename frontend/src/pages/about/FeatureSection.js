import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

// Categories Image
import featureImg from '../../assets/images/about/about.jpg';

const Feature = () => {

    return (
        <div className="ras-features ras-features-2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <Fade Left>
                            <div className="ras-features-image">
                                <img src={featureImg} alt="our-features" />
                            </div>
                        </Fade>
                    </div>
                    <div className="col-lg-6">
                        <Fade right>
                            <div className="ras-features-details">
                                <h2>A creative agency of some<br /><span class="color-title">Creative & inteligents </span>people</h2> 
                                <p>Lorem ipsum dolor seat ameat dui too consecteture elite. Wel
                                are raisn a creative & digital agency who always provideing a
                                huge creative and marketing relatated.</p>
                                <Fade bottom cascade>
                                    <div className="row features-items-wrapper">
                                        <div className="col-md-6">
                                            <div className="features-item">
                                                <div className="features-icon purple-bg-icon">
                                                    <i className="flaticon-start-up"></i>
                                                </div>
                                                <div className="features-content">
                                                    <h5>Top Rated</h5>
                                                    <p>Creative Agency </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="features-item">
                                                <div className="features-icon orange-bg-icon">
                                                    <i className="flaticon-smiling-girl"></i>
                                                </div>
                                                <div className="features-content">
                                                    <h5>Happy Clients</h5>
                                                    <p>5K+ Happy Clients</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                                <Fade bottom>
                                    <div className="features-btn">
                                        <Link to="/contact" className="btn btn-large btn-primary">Explore More</Link>
                                    </div>
                                </Fade>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className="ras-blur-background"></div>
        </div>
    );
}

export default Feature;