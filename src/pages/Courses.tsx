import React from 'react';
import './Courses.css';

const Courses: React.FC = () => {
    return (
        <>
            <div className="course-container">
                <h2 className='course-head'>
                    LIST OF COURSES AVAILABLE AT STAR GLEAM EDUCATION
                </h2>
                <div className='courses'>
                    <p className='courses'>11+ Coaching Group Sessions(Y4) - English, Math, VR & NVR</p>
                    <p className='courses'>Y5 Easter English, Maths, VR, NVR Advance Courses</p>
                    <p className='courses'>11+ Weekly Mock exams year 5</p>
                    <p className='courses'>Y3/Y4/Y5 Maths</p>
                    <p className='courses'>Y5 Intensive summer 11+ coaching</p>
                </div>
            </div>
            <footer>
                <div>
                    <p>© 2021 STAR GLEAM EDUCATION LTD</p>
                    <p>Company number: 11295326</p>
                    <p>Registered office address: Office Gold,Building 3, Chiswick Park, 566 Chiswick High Road, London,</p>
                    <p>England, W4 5YA</p>
                    <p>(+44) 92749012341</p>
                    <p>info@stargleameducation.com</p>
                </div>
            </footer>
        </>
    );
};

export default Courses;
