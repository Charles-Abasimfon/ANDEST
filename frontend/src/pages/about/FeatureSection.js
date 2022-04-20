import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

// Categories Image
import featureImg from '../../assets/images/about/andestbg.jpg';

const Feature = () => {
  return (
    <div className='ras-features ras-features-2'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <Fade Left>
              <div className='ras-features-image'>
                <img src={featureImg} alt='our-features' />
              </div>
            </Fade>
          </div>
          <div className='col-lg-6'>
            <Fade right>
              <div className='ras-features-details'>
                <h2>ANDEST LLC - Medical Staffing Agency</h2>
                <p>
                  ANDEST LLC is an entity established in the state of Minnesota
                  whose mission is to strive at embroiling technology to
                  streamline healthcare services by fulfilling urgent staffing
                  needs in ALL healthcare fields with highly qualified licensed
                  healthcare personnel to meet above and beyond client
                  expectations.
                </p>
                <p>
                  In a world changing so fast, we will consistently transform
                  with you… to leave the world a better place than we found it!
                </p>
                <Fade bottom>
                  <div className='features-btn'>
                    <Link to='/' className='btn btn-large btn-primary'>
                      Contact Us
                    </Link>
                  </div>
                </Fade>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className='ras-blur-background'></div>
    </div>
  );
};

export default Feature;
