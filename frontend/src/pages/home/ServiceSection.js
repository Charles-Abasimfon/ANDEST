import React from 'react';
import Fade from 'react-reveal/Fade';

import SingleService from '../../components/Service/SingleService';

import serviceShape from '../../assets/images/eclips-shape-1.svg';

const Service = () => {
  return (
    <div className='ras-services ras-services-1 ras-service-1-spacer-bottom'>
      <img src={serviceShape} alt='service1-bg' className='ras-services-1-bg' />
      <div className='container'>
        <Fade bottom>
          <h2 className='mb-50 text-center'>
            We’ve helped hundreds <br />
            of clients to reach internet & grow
            <br /> <span className='color-title'>their Business</span>
          </h2>
        </Fade>
        <Fade left cascade>
          <div className='row'>
            <div className='col-lg-4'>
              <SingleService
                itemClass='ras-services-item'
                Icon='flaticon-web-programming'
                Title='Web Developmnt'
                Desc='According to elite we providing web Development
                                services to our honorable clients for business.'
              />
            </div>
            <div className='col-lg-4'>
              <SingleService
                itemClass='ras-services-item'
                Icon='flaticon-digital-marketing'
                Title='Digital Marketing'
                Desc='According to elite we providing web Development
                                services to our honorable clients for business.'
              />
            </div>
            <div className='col-lg-4'>
              <SingleService
                itemClass='ras-services-item'
                Icon='flaticon-vector'
                Title='Web & Graphic Design'
                Desc='According to elite we providing web Development
                                services to our honorable clients for business.'
              />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Service;
