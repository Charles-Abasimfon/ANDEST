import React from 'react';
import Fade from 'react-reveal/Fade';

import andestVideo from '../../assets/images/video/andestvideo.mp4';

const VideoSection = () => {
  return (
    <div className='ras-video'>
      <h2 className='sr-only'>Video</h2>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='ras-video-container'>
              <div
                dangerouslySetInnerHTML={{
                  __html: `<video
                loop
                muted
                autoplay
                playsinline
                >
                <source src="${andestVideo}" type="video/mp4" />
                Your browser does not support the video tag.
                </video>`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
