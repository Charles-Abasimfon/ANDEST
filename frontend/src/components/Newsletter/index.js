import React from 'react';
import Fade from 'react-reveal/Fade';

const Newsletter = (props) => {
  const { sectionClass, title, btn } = props;

  return (
    <div className={sectionClass ? sectionClass : 'ras-newsletter-1'}>
      <div className='container'>
        <div className='subscribe-part'>
          <Fade bottom>
            <h2 className='text-center'>
              {title
                ? title
                : 'To get weekly & monthly our news subscribe Newsletter.'}
            </h2>
          </Fade>
          <div className='input-part'>
            <Fade bottom>
              <label htmlFor='subscribe' className='sr-only'>
                Subscribe
              </label>
              <input
                type='email'
                placeholder='Enter your email'
                id='subscribe'
              />
            </Fade>
            <Fade bottom>
              <a href='#' className='btn btn-primary btn-large fadeInUp'>
                {btn ? btn : 'Subscribe'}
              </a>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
