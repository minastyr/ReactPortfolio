import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (section) => {
        navigate(`/${section}`);
    };

    return (
        <header>
            <h1 onClick={() => handleNavigation('about')}>Joe Vargas</h1>
            <nav>
                <ul>
                    <li
                        onClick={() => handleNavigation('about')}
                        className={location.pathname === '/about' ? 'active' : ''}
                    >
                        About Me
                    </li>
                    <li
                        onClick={() => handleNavigation('portfolio')}
                        className={location.pathname === '/portfolio' ? 'active' : ''}
                    >
                        Portfolio
                    </li>
                    <li
                        onClick={() => handleNavigation('contact')}
                        className={location.pathname === '/contact' ? 'active' : ''}
                    >
                        Contact
                    </li>
                    <li
                        onClick={() => handleNavigation('resume')}
                        className={location.pathname === '/resume' ? 'active' : ''}
                    >
                        Resume
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;