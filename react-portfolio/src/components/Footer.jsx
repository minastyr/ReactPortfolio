import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <a href="https://github.com" target="https://github.com/minastyr" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://linkedin.com" target="www.linkedin.com/in/joe-vargas-ba568a8" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://stackoverflow.com" target="https://stackoverflow.com/users/28188564/joe-vargas" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faStackOverflow} size="2x" />
            </a>
        </footer>
    );
};

export default Footer;