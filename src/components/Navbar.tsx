import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar: React.FC = () => {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsDropDownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropDownOpen(false);
    };

    return (
        <>
            <nav className='container'>
                <div className='title'>
                    <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs0ytr72T2C350PM5fWfWezrD0A2f7otklXWDlfy6jtg&s' alt='' />
                    <h1 className='main-heading'>STAR GLEAM <br /> EDUCATION</h1>
                </div>

                <div
                    className='res--menu'
                    onClick={() => {
                        setMenuOpen(!menuOpen);
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={menuOpen ? 'open' : ''}>
                    <li>
                        <NavLink to="/about">ABOUT US</NavLink>
                    </li>
                    <li>
                        <NavLink to="/courses">COURSES</NavLink>
                    </li>
                    <li
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        FREE 11+ RESOURCES ▼ {isDropDownOpen && (
                            <div className="dropdown-content"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}>
                                <div className="dropdown-items" >
                                    <p className="dropdown-item">
                                        <NavLink to='/english-papers'>Free 11+ Practice English<br /> Papers</NavLink>
                                    </p>
                                    <p className="dropdown-item">
                                        <NavLink to='/maths-papers'>Free 11+ Practice Maths<br /> Papers</NavLink>
                                    </p>
                                    <p className="dropdown-item">
                                        <NavLink to='/verbal-papers'>Free 11+ Practice Verbal <br />Reasoning Papers</NavLink>
                                    </p>
                                    <p className="dropdown-item">
                                        <NavLink to='/nonverbal-papers'>Free 11+ Practice Non-Verbal Reasoning Papers </NavLink>
                                    </p>
                                </div>
                            </div>
                        )}
                    </li>
                    <li>
                        <NavLink to='/team-page'>OUR TEAM</NavLink>
                    </li>
                    <li>
                        <NavLink to='/testimonials-page'>TESTIMONIALS</NavLink>
                    </li>
                    <li>
                        <NavLink to='/examTimer-page'>EXAM TIMER</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact-page'>CONTACT US</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
