export default function AboutMe() {
    const styles = {
        div: {
            backgroundColor: 'var(--verdigris)',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
        },
        p: {
            padding: '35px',
        },
    };
    return (
        <div style={styles.div}>
            <img src = ".\src\assets\thumbnail_IMG_2844.jpg" height='200px' alt="Ryan Gayle"/>
            <p style={styles.p}>
                Currently, Ryan Gayle is a SEO Specialist that works for a Sports Merchandising company. Although he enjoys his current career,
                he is looking to transition into a web or software development role to further his career. At Columbia University Computer Engineering
                Bootcamp, he is learning the skills necessary to become a Full Stack Developer. He is familiar with HTML, CSS, Javascript, Typescript,
                and React, and is learning how to use these skills to create full stack applications and websites with optimal functionality.
            </p>
        </div>
    );
};