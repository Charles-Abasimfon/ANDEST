import React  from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import caseImg1 from '../../assets/images/case-study/case-study-1.jpg'
import caseImg2 from '../../assets/images/case-study/case-study-2.jpg'
import caseImg3 from '../../assets/images/case-study/case-study-3.jpg'
import caseImg4 from '../../assets/images/case-study/case-study-4.jpg'
import caseImg5 from '../../assets/images/case-study/case-study-5.jpg'
import caseImg6 from '../../assets/images/case-study/case-study-6.jpg'
import caseImg7 from '../../assets/images/case-study/case-study-7.jpg'

const CaseStudy = () => {

    let tab1 = "Web Development",
        tab2 = "Digital Marketing",
        tab3 = "Web & Graphic Design",
        tab4 = "Business Consulting",
        tab5 = "Social media"
    const tabStyle = 'case-tabs flex-xl-column';

    return (
        <div className="ras-case-study ras-case-study-2">
            <div className="ras-case-study-2-wrapper">
                <div className="container">
                    <Tabs>
                        <div className="row align-items-center">
                            <div className="col-xl-4 col-lg-12">
                                <h2 className="mb-50 ras-case-study-title">Recent Case Study</h2>
                                <TabList className={tabStyle}>
                                    <Tab><button>{tab1}</button></Tab>
                                    <Tab><button>{tab2}</button></Tab>
                                    <Tab><button>{tab3}</button></Tab>
                                    <Tab><button>{tab4}</button></Tab>
                                    <Tab><button>{tab5}</button></Tab>
                                </TabList>
                            </div>
                            <div className="col-xl-8 col-lg-12">
                                <TabPanel>
                                    <div id="web-development">
                                        <div className="row align-items-center">
                                            <div className="col-xl-4 lg-mb-30">
                                                <div className="ras-single-case-study">
                                                    <div className="case-study-image case-study-orange">
                                                        <img src={caseImg1} alt="Online educational website development" />
                                                    </div>
                                                    <h4 ><Link to="/case-study/case-study-details" className="case-study-title">Online educational website development</Link></h4>
                                                    <Link to="/case-study/case-study-details" className="read-more">Read more</Link>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 lg-mb-30">
                                                <div className="ras-single-case-study">
                                                    <div className="case-study-image case-study-sky-blue">
                                                        <img src={caseImg2} alt="Educational website development" />
                                                    </div>
                                                    <h4><Link to="/case-study/case-study-details" className="case-study-title">Educational website development</Link></h4>
                                                    <Link to="/case-study/case-study-details" className="read-more">Read more</Link>
                                                </div>
                                            </div>
                                            <div className="col-xl-4">
                                                <div className="ras-single-case-study">
                                                    <div className="case-study-image case-study-red">
                                                        <img src={caseImg3} alt="Business website Development" />
                                                    </div>
                                                    <h4 ><Link to="/case-study/case-study-details" className="case-study-title">Business website Development</Link></h4>
                                                    <Link to="/case-study/case-study-details" className="read-more">Read more</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div id="digital-marketing">
                                        <div className="row align-items-center">
                                            <div className="col-xl-4 lg-mb-30">
                                                <div className="ras-single-case-study">
                                                    <div className="case-study-image case-study-orange">
                                                        <img src={caseImg4} alt="Online educational website development" />
                                                    </div>
                                                    <h4 ><Link to="/case-study/case-study-details" className="case-study-title">Online educational website development</Link></h4>
                                                    <Link to="/case-study/case-study-details" className="read-more">Read more</Link>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 lg-mb-30">
                                                <div className="ras-single-case-study">
                                                    <div className="case-study-image case-study-sky-blue">
                                                        <img src={caseImg5} alt="Educational website development" />
                                                    </div>
                                                    <h4><Link to="/case-study/case-study-details" className="case-study-title">Educational website development</Link></h4>
                                                    <Link to="/case-study/case-study-details" className="read-more">Read more</Link>
                                                </div>
                                            </div>
                                            <div className="col-xl-4">
                                                <div className="ras-single-case-study">
                                                    <div className="case-study-image case-study-red">
                                                        <img src={caseImg6} alt="Business website Development" />
                                                    </div>
                                                    <h4 ><Link to="/case-study/case-study-details" className="case-study-title">Business website Development</Link></h4>
                                                    <Link to="/case-study/case-study-details" className="read-more">Read more</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div id="graphic-design">
                                        <div className="row align-items-center">
                                            <div className="col-xl-4 lg-mb-30">
                                                <div className="ras-single-case-study">
                                                    <div className="case-study-image case-study-orange">
                                                        <img src={caseImg7} alt="Online educational website development" />
                                                    </div>
                                                    <h4 ><Link to="/case-study/case-study-details" className="case-study-title">Online educational website development</Link></h4>
                                                    <Link to="/case-study/case-study-details" className="read-more">Read more</Link>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 lg-mb-30">
                                                <div className="ras-single-case-study">
                                                    <div className="case-study-image case-study-sky-blue">
                                                        <img src={caseImg2} alt="Educational website development" />
                                                    </div>
                                                    <h4><Link to="/case-study/case-study-details" className="case-study-title">Educational website development</Link></h4>
                                                    <Link to="/case-study/case-study-details" className="read-more">Read more</Link>
                                                </div>
                                            </div>
                                            <div className="col-xl-4">
                                                <div className="ras-single-case-study">
                                                    <div className="case-study-image case-study-red">
                                                        <img src={caseImg3} alt="Educational website development" />
                                                    </div>
                                                    <h4 ><Link to="/case-study/case-study-details" className="case-study-title">Business website Development</Link></h4>
                                                    <Link to="/case-study/case-study-details" className="read-more">Read more</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div id="consulting">
                                        <div className="row align-items-center">
                                            <div className="col-xl-4 lg-mb-30">
                                                <div className="ras-single-case-study">
                                                    <div className="case-study-image case-study-orange">
                                                        <img src={caseImg1} alt="Educational website development" />
                                                    </div>
                                                    <h4 ><Link to="/case-study/case-study-details" className="case-study-title">Online educational website development</Link></h4>
                                                    <Link to="/case-study/case-study-details" className="read-more">Read more</Link>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 lg-mb-30">
                                                <div className="ras-single-case-study">
                                                    <div className="case-study-image case-study-sky-blue">
                                                        <img src={caseImg3} alt="Educational website development" />
                                                    </div>
                                                    <h4><Link to="/case-study/case-study-details" className="case-study-title">Educational website development</Link></h4>
                                                    <Link to="/case-study/case-study-details" className="read-more">Read more</Link>
                                                </div>
                                            </div>
                                            <div className="col-xl-4">
                                                <div className="ras-single-case-study">
                                                    <div className="case-study-image case-study-red">
                                                        <img src={caseImg5} alt="Educational website development" />
                                                    </div>
                                                    <h4 ><Link to="/case-study/case-study-details" className="case-study-title">Business website Development</Link></h4>
                                                    <Link to="/case-study/case-study-details" className="read-more">Read more</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div id="social-media">
                                        <div className="row align-items-center">
                                            <div className="col-xl-4 lg-mb-30">
                                                <div className="ras-single-case-study">
                                                    <div className="case-study-image case-study-orange">
                                                        <img src={caseImg4} alt="Educational website development" />
                                                    </div>
                                                    <h4 ><Link to="/case-study/case-study-details" className="case-study-title">Online educational website development</Link></h4>
                                                    <Link to="/case-study/case-study-details" className="read-more">Read more</Link>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 lg-mb-30">
                                                <div className="ras-single-case-study">
                                                    <div className="case-study-image case-study-sky-blue">
                                                        <img src={caseImg6} alt="Educational website development" />
                                                    </div>
                                                    <h4><Link to="/case-study/case-study-details" className="case-study-title">Educational website development</Link></h4>
                                                    <Link to="/case-study/case-study-details" className="read-more">Read more</Link>
                                                </div>
                                            </div>
                                            <div className="col-xl-4">
                                                <div className="ras-single-case-study">
                                                    <div className="case-study-image case-study-red">
                                                        <img src={caseImg5} alt="Educational website development" />
                                                    </div>
                                                    <h4 ><Link to="/case-study/case-study-details" className="case-study-title">Business website Development</Link></h4>
                                                    <Link to="/case-study/case-study-details" className="read-more">Read more</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default CaseStudy;