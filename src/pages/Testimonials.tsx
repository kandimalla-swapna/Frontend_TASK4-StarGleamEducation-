import React from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
    return (
        <>
            <div className="posts">
                <div className='posts-card'>
                    <div className="post-heading">
                        <h3>Mary Kalpana Choudary</h3>
                        <p>about 2 years ago</p>
                    </div>
                    <div className="post-content">
                        <p>My 8 year old daughter Moksha attended word bank course with Star Gleam Education in 2020.
                            She really enjoyed the course. She loves her teacher and has been learning a lot from each session.classes were very interesting and enthusiastic
                            .Overall it is a great course designed for younger kids to build sentences with new words, learning antonyms and synonyms and Spellings. Moksha would love to do more such useful sessions .
                            I would like to thank Star gleam team for all your efforts in motivating kids for better future . I would recommend this course .
                        </p>
                    </div>
                </div>
                <div className='posts-card'>
                    <div className='post-heading'>
                        <h3>Irrum Tetlay</h3>
                        <p>About 6 months ago</p>
                    </div>
                    <div className='post-content'>
                        <p>Hi, my son completed word bank course recently and he really enjoyed it. He said it was fun learning new words which improved his vocabulary Also, the sessions were interactive.
                            I would definitely recommend Word bank course. Thank you to the teachers and Star Gleam!
                        </p>
                    </div>
                </div>
            </div>
            <div className='posts'>
                <div className='posts-card'>
                    <div className="post-heading">
                        <h3>Prashanthi Iyer</h3>
                        <p>about 3 years ago</p>
                    </div>
                    <div className="post-content">
                        <p>My Son has been doing their latest Word Bank Course and it’s brilliant as it’s helping him to build the much needed vocabulary for his 11 plus and beyond.
                            There is no such course we have come across.
                            I highly recommend them for children of all groups!! Thankyou Star Gleem!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonials;
