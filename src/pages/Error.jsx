import { useRouteError } from 'react-router-dom';

// Error component to handle any errors that occur during routing
// and display an error message to the user
export default function Error() {
    const error = useRouteError();
    console.log(error);
    
    return (
        <div id = "error-page">
            <h1>Error</h1>
            <p>{error.message}</p>
        </div>
    );
}