import React from 'react';

const styles = {
    header: {
        backgroundColor: 'var(--verdigris)',
        height: '75px',
        textAlign: 'center',
        paddingTop: '20px',
    },
};

function Header({title}) {
    return (
        <header style={styles.header}>
            <h3>{title}</h3>
        </header>
    );
};

export default Header;