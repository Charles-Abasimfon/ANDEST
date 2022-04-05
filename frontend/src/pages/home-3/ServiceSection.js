import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import SingleService from '../../components/Service/SingleService';

const Service = () => {

    return (
        <div className="ras-services ras-services-1 ras-services-1-spacer gradient-bg">
            <div class="container">
                <h2 class="mb-50 text-center fadeInUp">We’ve halped hundreds<br /> of clients to reach internet & grow<br /> <span class="color-title">their Business</span></h2>
                <Fade left cascade>
                    <div className="row align-items-center"> 
                        <div className="col-lg-4">
                            <SingleService
                                itemClass="ras-services-item"
                                Icon='flaticon-web-programming'
                                Title="Web Developmnt"
                                Desc="According to elite we providing web Development services to our honorable clients for business."
                            />
                        </div>
                        <div className="col-lg-4">
                            <SingleService
                                itemClass="ras-services-item fadeInLeft"
                                Icon='flaticon-digital-marketing'
                                Title="Digital Marketing"
                                Desc="According to elite we providing web Development
                                services to our honorable clients for business."
                            />
                        </div>
                        <div className="col-lg-4">
                            <SingleService
                                itemClass="ras-services-item fadeInLeft"
                                Icon='flaticon-vector'
                                Title="Web & Graphic Design"
                                Desc="According to elite we providing web Development
                                services to our honorable clients for business."
                            />
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="text-center fadeInUp">
                        <Link to="/service" className="ras-explore-more">Explore all Services</Link>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Service;