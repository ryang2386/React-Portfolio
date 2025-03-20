export default function Portfolio() { 
    const styles = {
        img: {
            width: '500px',
        },
        section: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            backgroundColor: 'var(--verdigris)',
        },
        img2: {
            height: '266px',
            width: '500px',
        },
        img4: {
            height: '263px',
            width: '500px',
        },
        h5: {
            textAlign: 'center',
        },
    };

    return (
        <div style={styles.div}>
            <section style={styles.section}>
                <div>
                    <a href="https://github.com/ryang2386/Employee-Database"><img src = "src\assets\Screenshot 2025-03-18 19.05.56.png" style={styles.img}/></a>
                    <h5 style={styles.h5}>Employee Database</h5>
                </div>
                <div>
                    <a href="https://github.com/ryang2386/README-Generator"><img src = "src\assets\Screenshot 2025-03-18 19.03.32.png" style={styles.img2}/></a>
                    <h5 style={styles.h5}>README Generator</h5>
                </div>
                <div>
                    <a href="https://github.com/ryang2386/Vehicle-Builder"><img src = "src\assets\Screenshot 2025-03-18 18.49.36.png" style={styles.img}/></a>
                    <h5 style={styles.h5}>Vehicle Builder</h5>
                </div>
                <div>
                    <a href="https://github.com/ryang2386/Module-4"><img src = "src\assets\Screenshot 2025-03-18 19.09.05.png" style={styles.img4}/></a>
                    <h5 style={styles.h5}>Blog Website</h5>
                </div>
                <div>
                    <a href="https://github.com/ryang2386/Module-3"><img src = "src\assets\Screenshot 2025-03-18 19.13.31.png" style={styles.img}/></a>
                    <h5 style={styles.h5}>Employee Tracker</h5>
                </div>
                <div>
                    <a href="https://github.com/ryang2386/MiniProject"><img src = "src\assets\Screenshot 2025-03-18 19.15.25.png" style={styles.img}/></a>
                    <h5 style={styles.h5}>CSS Cheat Codes Website</h5>
                </div>
            </section>
        </div>
    );
};