import React from 'react';
import './About.css';

const Team: React.FC = () => {
    return (
        <>
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

export default Team;
