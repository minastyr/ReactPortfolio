import React from 'react';

const Portfolio = () => {
    const projects = [
        {
            title: 'Project 1',
            image: 'link_to_image_1',
            deployedLink: 'link_to_deployed_app_1',
            githubLink: 'link_to_github_repo_1'
        },
        {
            title: 'Project 2',
            image: 'link_to_image_2',
            deployedLink: 'link_to_deployed_app_2',
            githubLink: 'link_to_github_repo_2'
        },
        {
            title: 'Project 3',
            image: 'link_to_image_3',
            deployedLink: 'link_to_deployed_app_3',
            githubLink: 'link_to_github_repo_3'
        },
        {
            title: 'Project 4',
            image: 'link_to_image_4',
            deployedLink: 'link_to_deployed_app_4',
            githubLink: 'link_to_github_repo_4'
        },
        {
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
        }
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