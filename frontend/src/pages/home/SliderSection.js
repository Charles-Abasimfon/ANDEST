import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const HomeSlider = () => {
  const sliderSettings = {
    dots: false,
    arrows: false,
    // Set arrows: true if you need arrows to show
    infinite: true,
    margin: 0,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          // Set arrows: true if you need arrows to show
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <React.Fragment>
      <div className='ras-banner ras-banner-1'>
        <div className='slider-active text-center'>
          <Slider {...sliderSettings}>
            <div className='ras-slide'>
              <div className='container'>
                <div className='ras-slide-content'>
                  <h3 className='ras-slide-sub-heading text-white'>
                    ANDEST LLC STAFFING AGENCY
                  </h3>
                  <h2 className='ras-slide-heading text-white'>
                    We have healthcare staff readily available to take care of
                    your loved ones wherever they are, whenever they need it.
                  </h2>
                  <p className='ras-slide-desc text-white mb-50'></p>
                  <Link to='#' className='btn btn-primary btn-large hero-btn'>
                    Contact us
                    <i className='icofont-long-arrow-right'></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className='ras-slide'>
              <div className='container'>
                <div className='ras-slide-content'>
                  <h3 className='ras-slide-sub-heading text-white'>
                    Rasin Agency
                  </h3>
                  <h2 className='ras-slide-heading text-white'>
                    A Digital & Cretive Agency
                  </h2>
                  <p className='ras-slide-desc text-white mb-50'>
                    Our team of experts ranked the best branding agencies. Find
                    the right branding company for your next project by client
                    positive reviews.
                  </p>
                  <Link
                    to='/contact'
                    className='btn btn-primary btn-large hero-btn'
                  >
                    Start Your Journey
                    <i className='icofont-long-arrow-right'></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className='ras-slide'>
              <div className='container'>
                <div className='ras-slide-content'>
                  <h3 className='ras-slide-sub-heading text-white'>
                    Rasin Agency
                  </h3>
                  <h2 className='ras-slide-heading text-white'>
                    A Digital & Cretive Agency
                  </h2>
                  <p className='ras-slide-desc text-white mb-50'>
                    Our team of experts ranked the best branding agencies. Find
                    the right branding company for your next project by client
                    positive reviews.
                  </p>
                  <Link
                    to='/contact'
                    className='btn btn-primary btn-large hero-btn'
                  >
                    Start Your Journey
                    <i className='icofont-long-arrow-right'></i>
                  </Link>
                </div>
              </div>
            </div> */}
          </Slider>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeSlider;
