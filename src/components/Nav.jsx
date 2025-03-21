import { Link, useLocation } from 'react-router-dom';
import './Nav.css';


function Nav() { 
    // const styles = {
    //     nav: {
    //         backgroundColor: 'var(--paynes-gray)',
    //         color: 'var(--mint-green)',
    //         height: '50px',
    //     },
    //     ul: {
    //         listStyleType: 'none',
    //         display: 'flex',
    //         justifyContent: 'flex-end',
    //         padding: '10px',
    //     },
    //     li: {
    //         padding: '10px',
    //     },
    // };

    const location = useLocation().pathname;

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" className={location === '/' ? 'nav-link active' : 'nav-link'}>About Me</Link>
                </li>
                <li>
                    <Link to="/portfolio" className={location === '/portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
                </li>
                <li>
                    <Link to="/contact" className={location === '/contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
                </li>
                <li>
                    <Link to="/resume" className={location === '/resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;