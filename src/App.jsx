import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
    return (
        <>
            {/* swapping between the different pages in the Nav */}
            <Nav />
            <Outlet />
        </>
    );
};

export default App;