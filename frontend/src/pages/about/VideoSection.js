import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import ModalVideo from 'react-modal-video';

import videoImg from '../../assets/images/video/video-img.jpg';

const AboutVideo = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div className="ras-about ras-video">
            <h2 className="sr-only">Video</h2>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='FMvA5fyZ338' onClose={() => { openModal(); }} />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <Fade bottom>
                            <div className="ras-video-container">
                                <img 
                                    src={videoImg} 
                                    alt="images" 
                                />
                                <div className="ras-overlay-image">
                                    <div className="ras-video-overlay">
                                        <a className="ras-vid-icon ras-video-lightbox vbox-item more" href="#" onClick={() => { openModal(); }}>
                                            <i className="icofont-ui-play"></i>
                                        </a>
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

export default AboutVideo;