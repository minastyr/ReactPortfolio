import React from 'react';

const Portfolio = () => {
    const projects = [
        {
            title: 'React Porfolio',
            image: 'src/assets/react.png',
            deployedLink: 'link_to_deployed_app_1',
            githubLink: 'https://github.com/minastyr/ReactPortfolio'
        },
        {
            title: 'Full Stack',
            image: 'src/assets/full-stack-developer.jpg',
            deployedLink: 'https://fullstack-u9iy.onrender.com',
            githubLink: 'https://github.com/minastyr/FullStack'
        },
        {
            title: 'Weather Dashboard',
            image: 'src/assets/weather-weather-mood-clouds-nature-landscapes-66fac6.jpg',
            deployedLink: 'https://chapter9.onrender.com/',
            githubLink: 'https://github.com/minastyr/Chapter9'
        },
        {
            title: 'Joes Employee Manager',
            image: 'src/assets/64055e59bec773284d08d1e9_Employee-Retention-Policy-1200x675.jpeg',
            deployedLink: 'https://drive.google.com/file/d/1kklRtHXK-nk4kCcNjXoYQfyy_3Fs1VmD/view',
            githubLink: 'https://github.com/minastyr/Chapter10'
        }
/*         {
            title: 'Project 5',
            image: 'link_to_image_5',
            deployedLink: 'link_to_deployed_app_5',
            githubLink: 'link_to_github_repo_5'
        },
        {
            title: 'Project 6',
            image: 'link_to_image_6',
            deployedLink: 'link_to_deployed_app_6',
            githubLink: 'link_to_github_repo_6'
        } */
    ];

    return (
        <div className="portfolio">
            <h2>My Portfolio</h2>
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div key={index} className="portfolio-item">
                        <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                            <img src={project.image} alt={project.title} />
                            <h3>{project.title}</h3>
                        </a>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;