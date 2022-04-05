import React from 'react';
import Fade from 'react-reveal/Fade';

const WhyChooseUs = () => {
    return (
        <div className="ras-why-choose-us ras-why-choose-us-2">
            <div className="container">
                <Fade bottom>
                    <h2 className="text-center mb-50">Some special reson of Why<br />clients Choice Us</h2>
                </Fade>
                <Fade bottom cascade>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="choose-us-item">
                                <div className="choose-us-icon purple-bg-icon">
                                    <i className="flaticon-man"></i>
                                </div>
                                <div className="choose-us-details">
                                    <h3>Great Team</h3>
                                    <p>Lorem ipsum dolor seat ameat dui too consecteture eliten
                                        more be too elite.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="choose-us-item">
                                <div className="choose-us-icon orange-bg-icon">
                                    <i className="flaticon-checked"></i>
                                </div>
                                <div className="choose-us-details">
                                    <h3>Safe & Sceure</h3>
                                    <p>Lorem ipsum dolor seat ameat dui too consecteture eliten
                                        more be too elite.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="choose-us-item">
                                <div className="choose-us-icon skyblue-bg-icon">
                                    <i className="flaticon-man"></i>
                                </div>
                                <div className="choose-us-details">
                                    <h3>Online Support</h3>
                                    <p>Lorem ipsum dolor seat ameat dui too consecteture eliten
                                        more be too elite.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="choose-us-item">
                                <div className="choose-us-icon red-bg-icon">
                                    <i className="flaticon-chat"></i>
                                </div>
                                <div className="choose-us-details">
                                    <h3>Online Support</h3>
                                    <p>Lorem ipsum dolor seat ameat dui too consecteture eliten
                                        more be too elite.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}
export default WhyChooseUs;