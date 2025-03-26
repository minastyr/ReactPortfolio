import React from 'react';

const Resume = () => {
    return (
        <div className="resume-section">
            <h2>Resume</h2>
            <a href="src/assets/joe vargas.pdf" download>Download Resume</a>
            <h3>Proficiencies</h3>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>HTML & CSS</li>
                <li>Git & GitHub</li>
                <li>RESTful APIs</li>
            </ul>
        </div>
    );
};

export default Resume;