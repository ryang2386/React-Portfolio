import React from 'react';
import Project from '../components/Project';

const projects = [
    {
        imageURL: "/Screenshot 2025-03-18 19.05.56.png",
        title: "Employee Database",
        link: "https://github.com/ryang2386/Employee-Database"
    },
    {
        imageURL: "/Screenshot 2025-03-18 19.03.32.png",
        title: "README Generator",
        link: "https://github.com/ryang2386/README-Generator"
    },
    {
        imageURL: "/Screenshot 2025-03-18 18.49.36.png",
        title: "Vehicle Builder",
        link: "https://github.com/ryang2386/Vehicle-Builder"
    },
    {
        imageURL: "/Screenshot 2025-03-18 19.09.05.png",
        title: "Blog Website",
        link: "https://github.com/ryang2386/Module-4"
    },
    {
        imageURL: "/Screenshot 2025-03-18 19.13.31.png",
        title: "Employee Tracker",
        link: "https://github.com/ryang2386/Module-3"
    },
    {
        imageURL: "/Screenshot 2025-03-18 19.15.25.png",
        title: "CSS Cheat Codes Website",
        link: "https://github.com/ryang2386/MiniProject"
    },
];

const styles = {
    div: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundColor: 'var(--verdigris)',
    },
};

export default function Portfolio() { 
    return (
        <div style={styles.div}>
            {projects.map((project, index) => (
                <Project key={index} link={project.link} imageURL={project.imageURL} title={project.title}/>
            ))}
        </div>
    );
};