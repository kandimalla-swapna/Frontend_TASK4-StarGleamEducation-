import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <>
            <header>
                <h1>Star Gleam Education</h1>
                <p>“ONE SHOP STOP” for 11+ and all competitive exams to encourage pre-foundation skills to discover challenges.</p>
            </header>
            <div className='sge-content sge-main-content'>
                <div>
                    <img className='sge-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBuF-d_6y3_ou6tcqR5KBYtMZT-8SJYSTluaDu7qOfQXHoNMJwn13qylNXBTFgu0egyIA&usqp=CAU' alt='sge' />
                </div>
                <div >
                    <h2>WHO WE ARE</h2>
                    <p className='content'>We are from STAR GLEAM EDUCATION, a team of tutors, parents, teachers, IT professionals and students who came with these motivational ideas of creative products that will immensely help children in their current journey in competitive exams.

                        Our research and feedback from innumerable parents and teachers brought these products to LIVE with active participation and feedback from various tutors, teachers and parents to ease children’s preparation to some extent in a pragmatic way.

                        Our innovative ideas behind these products and building blocks will enhance the ways of learning in a more friendly and fun way which encourage children to achieve their goals.</p>
                </div>
            </div>

            <div className='sge-content'>
                <div >
                    <h2>WHAT WE DO</h2>
                    <p>Star Gleam Education is founded in the year 2020 with immense motivation to offer ONE-STOP-SHOP services to parents and children who are going through challenging journey of competitive exams in ISEB, CEM, GL, SATS.</p>
                    <p>We specialise in offering variant unique products that helps children to build their foundation skills to compete in these exams as mandatory skills needed throughout</p>
                    <p>We offer specialised interactive and task-oriented coaching to train children’s mind practically to cope with the reality in a fun way so they can carry this knowledge with them forever in their day to day lives.</p>
                    <p>Our MOTO behind these products is SUCCESS and SHINE LIKE A STAR to achieve  GOALS.</p>
                </div>
            </div>

            <div className='sge-members'>
                <h1 className='members-heading'>MEET OUR TEAM</h1>
                <div className='line'>
                    <span></span>
                </div>
                <button>JOIN OUR TEAM</button>
                <div className='sge-members'>
                    <div className='mem-container'>
                        <div>
                            <img className='mem-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Armaan_Malik_2016.jpg/640px-Armaan_Malik_2016.jpg' alt='mem' />
                            <div className='mem-name'>
                                <h2>Armaan</h2>
                                <p>Maths Tutor</p>
                            </div>
                        </div>
                        <div>
                            <img className='mem-img' src='https://www.shutterstock.com/image-photo/close-head-shot-confident-serious-260nw-1481322794.jpg' alt='mem' />
                            <div className='mem-name'>
                                <h2>Eric</h2>
                                <p>Bussinesss manager</p>
                            </div>
                        </div>
                        <div>
                            <img className='mem-img' src='https://lawschoolpolicyreview.files.wordpress.com/2018/06/passport-size-photo-2-e1558013566564.jpg?w=596' alt='mem' />
                            <div className='mem-name'>
                                <h2>Parul</h2>
                                <p>Maths Tutor</p>
                            </div>
                        </div>
                        <div>
                            <img className='mem-img' src='https://t4.ftcdn.net/jpg/05/37/94/59/360_F_537945906_6wvA48InlpyUoDt55hOS2uOwpD6Ws0VY.jpg' alt='mem' />
                            <div className='mem-name'>
                                <h2>Karul</h2>
                                <p>English Tutor</p>
                            </div>
                        </div>
                    </div>
                    <div className='mem-container'>
                        <div>
                            <img className='mem-img' src='https://img.freepik.com/premium-photo/passport-photo-portrait-asian-smiling-woman_264197-7671.jpg' alt='mem' />
                            <div className='mem-name'>
                                <h2>Jiya </h2>
                                <p>Social Tutor</p>
                            </div>
                        </div>
                        <div>
                            <img className='mem-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGc_oqzldwI2XYJOZRFSnoSHI8Xyc71c1HjZX0sxfjw&s' alt='mem' />
                            <div className='mem-name'>
                                <h2>Gosh</h2>
                                <p>Science Tutor</p>
                            </div>
                        </div>
                        <div>
                            <img className='mem-img' src='https://superlawyer.in/wp-content/uploads/2022/10/Divyashree-Suri-Passport-Photo.jpeg' alt='mem' />
                            <div className='mem-name'>
                                <h2>Visa Josh</h2>
                                <p>Management Advisor</p>
                            </div>
                        </div>
                        <div>
                            <img className='mem-img' src='https://www.topmediai.com/micro/passport-photo-maker/assets/bigger_pic4-843adaaa.png' alt='mem' />
                            <div className='mem-name'>
                                <h2>Vivian</h2>
                                <p>Maths Tutor</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default About;
