import './AboutMe.css';

export default function AboutMe() {
    // styling for AboutMe page
    const styles = {
        div: {
            backgroundColor: 'var(--verdigris)',
            height: '100vh',
            display: 'flex',
            alignItems: 'flex-start',
        },
        p: {
            padding: '35px',
        },
    };

    return (
        //returns image and paragraph elements for the AboutMe page
        <div style={styles.div}>
            <img src = ".\thumbnail_IMG_2844.jpg" height='200px' alt="Ryan Gayle"/>
            <p style={styles.p}>
                Currently, Ryan Gayle is a SEO Specialist that works for a Sports Merchandising company. Although he enjoys his current career,
                he is looking to transition into a web or software development role to further his career. At Columbia University Computer Engineering
                Bootcamp, he is learning the skills necessary to become a Full Stack Developer. He is familiar with HTML, CSS, Javascript, Typescript,
                and React, and is learning how to use these skills to create full stack applications and websites with optimal functionality.
            </p>
        </div>
    );
};