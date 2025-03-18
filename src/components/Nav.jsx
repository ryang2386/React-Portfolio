import { Link, useLocation } from 'react-router-dom';

// 
function Nav() { 
    const location = useLocation().pathname;

    return (
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <Link to="/" className={location === '/' ? 'nav-link active' : 'nav-link'}>About Me</Link>
                </li>
                <li class="nav-item">
                    <Link to="/portfolio" className={location === '/portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
                </li>
                <li class="nav-item">
                    <Link to="/contact" className={location === '/contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
                </li>
                <li class="nav-item">
                    <Link to="/resume" className={location === '/resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
                </li>
            </ul>
    );
};

export default Nav;