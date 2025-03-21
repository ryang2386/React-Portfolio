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
//     img: {
//         width: '500px',
//     },
    div: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundColor: 'var(--verdigris)',
    },
//     img2: {
//         height: '266px',
//         width: '500px',
//     },
//     img4: {
//         height: '263px',
//         width: '500px',
//     },
//     h5: {
//         textAlign: 'center',
//     },
};

export default function Portfolio() { 
    return (
        <div style={styles.div}>
            {projects.map((project, index) => (
                <Project key={index} link={project.link} imageURL={project.imageURL} title={project.title}/>
            ))}
        </div>
    );

    // return (
        // <div style={styles.div}>
        //     <section style={styles.section}>
        //         <div>
        //             <a href="https://github.com/ryang2386/Employee-Database"><img src = "\Screenshot 2025-03-18 19.05.56.png" style={styles.img}/></a>
        //             <h5 style={styles.h5}>Employee Database</h5>
        //         </div>
        //         <div>
        //             <a href="https://github.com/ryang2386/README-Generator"><img src = "\Screenshot 2025-03-18 19.03.32.png" style={styles.img2}/></a>
        //             <h5 style={styles.h5}>README Generator</h5>
        //         </div>
        //         <div>
        //             <a href="https://github.com/ryang2386/Vehicle-Builder"><img src = "\Screenshot 2025-03-18 18.49.36.png" style={styles.img}/></a>
        //             <h5 style={styles.h5}>Vehicle Builder</h5>
        //         </div>
        //         <div>
        //             <a href="https://github.com/ryang2386/Module-4"><img src = "\Screenshot 2025-03-18 19.09.05.png" style={styles.img4}/></a>
        //             <h5 style={styles.h5}>Blog Website</h5>
        //         </div>
        //         <div>
        //             <a href="https://github.com/ryang2386/Module-3"><img src = "\Screenshot 2025-03-18 19.13.31.png" style={styles.img}/></a>
        //             <h5 style={styles.h5}>Employee Tracker</h5>
        //         </div>
        //         <div>
        //             <a href="https://github.com/ryang2386/MiniProject"><img src = "\Screenshot 2025-03-18 19.15.25.png" style={styles.img}/></a>
        //             <h5 style={styles.h5}>CSS Cheat Codes Website</h5>
        //         </div>
        //     </section>
        // </div>

};