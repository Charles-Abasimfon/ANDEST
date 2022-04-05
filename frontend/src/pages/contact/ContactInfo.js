import React from 'react';
import Fade from 'react-reveal/Fade';

const ContactInfo = (props) => {
    const { contactBoxClass } = props;
    return (
        <div className={contactBoxClass ? contactBoxClass : 'ras-contact-address'}>
            <Fade left>
                <h2>GET IN TOUCH</h2>
                <p>Lorem ipsum dolor seat ameat dui hambes duitag istu leling too consecteture more be elite adipaiscing. According to contact with us you can easilly co-
                    contact with us.</p>

                <h6 className="mb-0">Address:</h6>
                <p className="mb-10">Rasin Avenew 02, Road No#02, House No#03, Street Address,
                    New York, NY030, U.S.A.</p>
                <h6 className="mb-0">Email:</h6>
                <p className="mb-10">Support.Rasin2021@e-mail.com</p>
                <h6 className="mb-0">Phone:</h6>
                <p className="mb-10">(012) 222 33 4444, +000 22 333 444</p>
            </Fade>
        </div>
    );

}

export default ContactInfo;