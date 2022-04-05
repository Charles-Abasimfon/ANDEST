import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Fade from 'react-reveal/Fade';

import videoIcon from '../../assets/images/video/video-img.jpg';

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);

  return (
    <div className='ras-video'>
      <h2 className='sr-only'>Video</h2>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <Fade bottom>
              <div className='ras-video-container'>
                <img src={videoIcon} alt='Banner Video' />
                <a
                  className='ras-vid-icon ras-video-lightbox vbox-item more'
                  href='#'
                  onClick={() => {
                    openModal();
                  }}
                >
                  <i className='icofont-ui-play'></i>
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
