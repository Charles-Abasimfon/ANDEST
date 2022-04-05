import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import ProgressBarCircle from '../../components/Progress/ProgressCircle'

import successImg from '../../assets/images/success-story/success-1.jpg'

const Faq = () => {

    return (
        <div className="ras-success-faq ras-success-2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <Fade left>
                            <div className="ras-success-story">
                                <h2>A agency experience <span className="color-title">creative & inteligents people.</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, seieiusmodil
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, seieiusmod tempor is  exercitation ullamco laboris.</p>
                            </div>
                        </Fade>

                        <div className="ras-experience-progress mb-40">
                            <div className="row">
                                <div className="col-sm-4">
                                    <Fade bottom>
                                        <div className="ras-progress-wrapper">
                                            <ProgressBarCircle 
                                                progress='90' 
                                                strokeColor='#4d41e1'  
                                                trackstrokeColor='#cccccc' 
                                                Icon='flaticon-vector'
                                                iconClass='ras-progress-icon purple-bg-icon'
                                            />
                                        </div>
                                    </Fade>
                                </div>

                                <div className="col-sm-4">
                                    <Fade bottom>
                                        <div className="ras-progress-wrapper">
                                            <ProgressBarCircle 
                                                progress='70' 
                                                strokeColor='#ff884e'  
                                                trackstrokeColor='#cccccc' 
                                                Icon='flaticon-digital-marketing'
                                                iconClass='ras-progress-icon orange-bg-icon'
                                            />
                                        </div>
                                    </Fade>
                                </div>

                                <div className="col-sm-4">
                                    <Fade bottom>
                                        <div className="ras-progress-wrapper">
                                            <ProgressBarCircle 
                                                progress='90' 
                                                strokeColor='#36c1ea'  
                                                trackstrokeColor='#cccccc' 
                                                Icon='flaticon-web-programming'
                                                iconClass='ras-progress-icon skyblue-bg-icon'
                                            />
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                        
                        <Fade bottom>
                            <div className="ras-success-explore-more">
                                <Link to="/contact" className="btn btn-primary btn-large mt-4">Explore More<i className="icofont-long-arrow-right"></i></Link>
                            </div>
                        </Fade>
                    </div>

                    <div className="col-lg-6">
                        <Fade right>
                            <div className="ras-success-story-image">
                                <img src={successImg} alt="Our Success Story" />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;