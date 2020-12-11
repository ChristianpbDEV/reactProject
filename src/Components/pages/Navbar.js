import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FiScissors } from 'react-icons/fa';

import './Navbar.css';
import { IconContext } from 'react-icons/lib'


function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false); 
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <div className="navbar sticky-top">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        <i className="fa fa-scissors">  PROCUTS Barbershop </i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li> 
                        <li className='nav-item'>
                            <Link to='/bookappointment' className='nav-links' onClick={closeMobileMenu}>
                                Book Appointment
                            </Link>
                        </li> 
                        <li className='nav-item'>
                            <Link to='/pricing' className='nav-links' onClick={closeMobileMenu}>
                                Pricing
                            </Link>
                        </li>    
                    </ul>
                </div>
            </div>
        </IconContext.Provider>   
        </>
    )
}

export default Navbar;
