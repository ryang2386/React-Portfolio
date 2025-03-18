import { useErrorRouter } from 'react-router-dom';

export default function Error() {
    const error = useErrorRouter();
    console.log(error);
    
    return (
        <div id = "error-page">
            <h1>Error</h1>
            <p>{error.message}</p>
        </div>
    );
}