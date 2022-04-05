import React from 'react';
import Fade from 'react-reveal/Fade';
import ProgressBarCircle from '../../components/Progress/ProgressCircle'

import successImg from '../../assets/images/success-story/success-1.jpg'

const Faq = () => {

    return (
        <div className="ras-success-faq faq-bottom-spacer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <Fade left>
                            <div className="ras-success-story">
                                <h2>A agency experience creative & inteligents people.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, seieiusmodil
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, seieiusmod tempor is  exercitation ullamco laboris.</p>
                            </div>
                        </Fade>

                        <div className="ras-experience-progress mb-50">
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