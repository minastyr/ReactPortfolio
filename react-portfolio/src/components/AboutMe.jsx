import React from 'react';
import avatar from '../assets/avatar.jpg';
import '../styles/styles.css';

const AboutMe = () => {
    return (
        <div className="about-me">
            <img src={avatar} alt="Developer Avatar" className="avatar" />
            <h2>About Me</h2>
            <p>Hello! I am a Versatile IT professional merging expertise in IT infrastructure management with a passion for web development. As a lead IT infrastructure technician and team leader, I've managed complex systems while championing security and compliance. Proficient in HTML, CSS, JavaScript, and React, I'm dedicated to creating responsive, user-friendly websites.

Key Strengths:
Full-Stack Perspective: IT infrastructure and web development skills for holistic problem-solving.

Web Development: Expertise in HTML, CSS, JavaScript, and React.

Infrastructure Management: Skilled in designing and maintaining secure IT systems.

Team Leadership: Leading IT teams to achieve excellence.

Security & Compliance: Ensuring adherence to industry standards.

Business Alignment: Translating technology into business value.

Continuous Learning: Eager to embrace new technologies.

Professional Philosophy:
I integrate robust IT infrastructure with dynamic web development, emphasizing security and compliance. My aim is to create innovative IT solutions and user-centric web experiences that drive business growth.

 
            </p>
        </div>
    );
};

export default AboutMe;