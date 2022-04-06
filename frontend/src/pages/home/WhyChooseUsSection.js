import React from 'react';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { FaUserMd } from 'react-icons/fa';
import { AiOutlineFileSync } from 'react-icons/ai';
import { HiOutlineUsers } from 'react-icons/hi';
import { RiUserSmileLine } from 'react-icons/ri';
import Fade from 'react-reveal/Fade';

// WhyChooseUs Image
import shapeImg from '../../assets/images/eclipse-rotate-shape.svg';

const WhyChooseUs = () => {
  return (
    <div className='ras-why-choose-us ras-why-choose-us-1'>
      <img src={shapeImg} alt='eclipse-shape' />
      <div className='container'>
        <Fade bottom>
          <h2 className='text-center mb-50'>Working with Andest:</h2>
        </Fade>
        <Fade bottom cascade>
          <div className='row justify-content-center'>
            <div className='col-lg-6 col-md-12'>
              <div className='choose-us-items'>
                <div className='choose-us-item'>
                  <div className='choose-us-icon purple-bg-icon'>
                    <IoChatboxEllipsesOutline className='choose-us-react-icon' />
                  </div>
                  <div className='choose-us-details'>
                    <h3>Real-time communication</h3>
                    <p>
                      As facilities upload their open shifts, agencies and
                      healthcare personnel are notified, and any changes made
                      ie. Shift approvals, shift void or changed hours(edits)
                      are sent as notifications to emails and provided phone
                      numbers.
                    </p>
                  </div>
                </div>
                <div className='choose-us-item'>
                  <div className='choose-us-icon orange-bg-icon'>
                    <AiOutlineFileSync className='choose-us-react-icon' />
                  </div>
                  <div className='choose-us-details'>
                    <h3>Compliance</h3>
                    <p>
                      Both facilities, SNSA’s and healthcare personnel are
                      responsible in staying compliant at all times. Prompts to
                      upload needed credentials will be available on employee
                      portals. Otherwise said profile will be inactivated until
                      compliant.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12'>
              <div className='choose-us-items'>
                <div className='choose-us-item'>
                  <div className='choose-us-icon purple-bg-icon'>
                    <FaUserMd className='choose-us-react-icon' />
                  </div>
                  <div className='choose-us-details'>
                    <h3>Flexible and Simple staffing process</h3>
                    <p>
                      We provide a one-stop for all staffing needs. Easy
                      communication about changes and messaging within parties.
                      Chat with us and leave a suggestions/idea on how to better
                      serve you!
                    </p>
                  </div>
                </div>
                <div className='choose-us-item'>
                  <div className='choose-us-icon skyblue-bg-icon'>
                    <HiOutlineUsers className='choose-us-react-icon' />
                  </div>
                  <div className='choose-us-details'>
                    <h3>Networking</h3>
                    <p>
                      We provide professional conferences to meet with career
                      building managers, and facilities looking to hire
                      healthcare personnel. Check our website for our quarterly
                      conference schedules. Come hang with us and make friends!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12'>
              <div className='choose-us-items'>
                <div className='choose-us-item'>
                  <div className='choose-us-icon orange-bg-icon'>
                    <RiUserSmileLine className='choose-us-react-icon' />
                  </div>
                  <div className='choose-us-details'>
                    <h3>User friendly software</h3>
                    <p>***Tell them the awesome job you did!!! Brag away***</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};
export default WhyChooseUs;
