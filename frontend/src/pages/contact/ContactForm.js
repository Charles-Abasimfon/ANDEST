import React from 'react';
import Fade from 'react-reveal/Fade';
import emailjs from 'emailjs-com';

const ContactForm = (props) => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_zkifqvo', 'react_contact_template', e.target, 'user_tNeZ9fC3rqvctJOTF4Zz5')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    } 

    return (
        <div className="ras-contact-form">
            <Fade right>
                <h2>Book an Appointments</h2>
                <form id="contact-form" onSubmit={sendEmail}>
                    <div className="form-group">
                        <label for="name" className="sr-only">Name</label>
                        <input type="text" name="user_name" className="form-control" id="name" placeholder="Stephine Smith" />
                    </div>

                    <div className="form-group">
                        <label for="email" className="sr-only">Email</label>
                        <input type="email" name="user_email" className="form-control" id="email" placeholder="name@example.com" />
                    </div>

                    <div className="form-group">
                        <label for="Inquiry" className="sr-only">Inquiry</label>
                        <select className="form-control" id="Inquiry">
                            <option>General Inquiry</option>
                            <option>Customer Support</option>
                            <option>Development</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="message" className="sr-only">Message</label>
                        <textarea className="form-control" id="message" rows="4" placeholder="Message"></textarea>
                    </div>

                    <div className="form-group mb-0">
                        <button className="btn btn-primary btn-large">Send Message</button>
                    </div>
                </form>
            </Fade>
        </div>
    );

}

export default ContactForm;