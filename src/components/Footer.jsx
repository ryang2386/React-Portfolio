import React from 'react';

function Footer() {
    const styles = {
        img: {
            width: '50px',
        },
    }

    return (
        <footer>
            <a href="https://github.com/ryang2386"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" style={styles.img}/></a>
        </footer>
    )
};

export default Footer;