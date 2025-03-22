export default function Resume() {
    // styling for the div element on the Resume page
    const styles = {
        div: {
            backgroundColor: 'var(--verdigris)',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    };

    // returns HTML elements for the Resume page with a list of proficiencies 
    // and a link to a downloadable resume
    return (
        <div style={styles.div}>
            <ul>
                <li>Typescript</li>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>APIs</li>
                <li>SQL</li>
            </ul>
            <p>Click on the link for the downloadable version of the resume: <a href="\Ryan_Gayle_ResumeFinal.docx" download>Ryan Gayle's Resume</a></p>
        </div>
    );
};