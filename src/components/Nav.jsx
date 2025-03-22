import { Link, useLocation } from 'react-router-dom';
import './Nav.css';


function Nav() { 
    // used to determine the current page and apply correct link
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