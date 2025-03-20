import { Outlet, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';

function App() {
    const location = useLocation();
    let title;

    switch (location.pathname) {
        case '/portfolio':
            title = 'Portfolio';
            break;
        case '/contact':
            title = 'Contact Me';
            break;
        case '/resume':
            title = 'Ryan Gayle\'s Proficiencies';
            break;
        default:
            title = 'About Me';
    };

    return (
        <>
            {/* swapping between the different pages in the Nav */}
            <Nav />
            <main>
                <Header title={title} />
                <Outlet />
            </main>
        </>
    );
};

export default App;