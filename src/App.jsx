import { Outlet, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

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
            <Footer />
        </>
    );
};

export default App;