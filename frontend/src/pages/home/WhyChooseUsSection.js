import React  from 'react';
import Fade from 'react-reveal/Fade';
// WhyChooseUs Image
import shapeImg from '../../assets/images/eclipse-rotate-shape.svg';

const WhyChooseUs = () => {
    return (
        <div className="ras-why-choose-us ras-why-choose-us-1">
            <img src={shapeImg} alt="eclipse-shape" />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12">
                        <Fade bottom>
                            <h2>Here is some reson why most of the clients happy to <span className="color-title">Choice us.</span></h2>
                        </Fade>
                        <Fade bottom>
                            <p>Aaborisum ipsum dolor seat ameat consecteturerslmore be
                                eli elitl elite consect bonsecteture.Contrary to populabeliefLorem ips Ipsum is not sirand. It’s Imo
                            </p>
                        </Fade>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <Fade bottom cascade>
                            <div className="choose-us-items">
                                <div className="choose-us-item">
                                    <div className="choose-us-icon purple-bg-icon">
                                        <i className="flaticon-man"></i>
                                    </div>
                                    <div className="choose-us-details">
                                        <h3>Talented Team</h3>
                                        <p>When we get any projects that time we Planing how we,re
                                            compleate our clients projects perfectly and we are a lots of ti
                                            researching about our project.</p>
                                    </div>
                                </div>
                                <div className="choose-us-item">
                                    <div className="choose-us-icon orange-bg-icon">
                                        <i className="flaticon-checked"></i>
                                    </div>
                                    <div className="choose-us-details">
                                        <h3>Safe & Sceure</h3>
                                        <p>When we get any projects that time we Planing how we,re
                                            compleate our clients projects perfectly and we are a lots of ti
                                            researching about our project.</p>
                                    </div>
                                </div>
                                <div className="choose-us-item">
                                    <div className="choose-us-icon skyblue-bg-icon">
                                        <i className="flaticon-man"></i>
                                    </div>
                                    <div className="choose-us-details">
                                        <h3>Online Support</h3>
                                        <p>When we get any projects that time we Planing how we,re
                                            compleate our clients projects perfectly and we are a lots of ti
                                            researching about our project.</p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WhyChooseUs;