import React from 'react';

// styling the header
const styles = {
    header: {
        backgroundColor: 'var(--verdigris)',
        height: '75px',
        textAlign: 'center',
        paddingTop: '20px',
    },
};

// creating Header function that takes title as a prop to be passed to App
function Header({title}) {
    return (
        <header style={styles.header}>
            <h3>{title}</h3>
        </header>
    );
};

export default Header;