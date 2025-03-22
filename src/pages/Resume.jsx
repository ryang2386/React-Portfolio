import './Resume.css';

export default function Resume() {

    const styles = {
        div: {
            backgroundColor: 'var(--verdigris)',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    };

    return (
        <div style={styles.div}>
            <ul>
                <li>Typescript</li>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>APIs</li>
            </ul>
            <p>Click on the link for the downloadable version of the resume: <a href="\Ryan_Gayle_ResumeFinal.docx" download>Ryan Gayle's Resume</a></p>
        </div>
    );
};