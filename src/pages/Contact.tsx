import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <>
            <div className="contact">
                <div>
                    <div className="contact-heading">
                        <h1>CONTACT INFO</h1>
                        <p>Welcome to our website. We are glad to have you around.</p>
                    </div>
                    <div className="contact-content">
                        <h3>Address</h3>
                        <p>STAR GLEAM EDUCATION LTD</p>
                        <p>Company number: 11295326</p>
                        <p>Registered office address: Office Gold,Building 3, Chiswick Park, 566</p>
                        <p>Chiswick High Road, London, England, W4 5YA#</p>
                        <h3>Phone</h3>
                        <p>+44 - 7726018288</p>
                        <h3>Email</h3>
                        <p>info@stargleameducation.com</p>
                    </div>
                </div>

                <div>
                    <div className="contact-heading">
                        <h1>SEND A MESSAGE</h1>
                        <p>Your email address will not be published. Required fields are marked.</p>
                    </div>
                    <div className='contact-content'>
                        <form>
                            <label>Name</label><br />
                            <input className='contact-input' type='text' /><br />
                            <label>Email</label><br />
                            <input className='contact-input' type='text' /><br />
                            <label>Phone No</label><br />
                            <input className='contact-input' type='text' /><br />
                            <label>Student Name</label><br />
                            <input className='contact-input' type='text' /><br />
                            <label>Student's current school</label><br />
                            <input className='contact-input' type='text' />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
