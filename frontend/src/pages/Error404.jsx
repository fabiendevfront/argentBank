import { Link } from "react-router-dom";

/**
* Component for Error404 page
* @component
* @returns {JSX.Element}
*/
const Error404 = () => {
    return (
        <div className="error-404">
            <h2 className="error-404__title">Oups! The page you request does not exist</h2>
            <Link to="/" className="error-404__link">Go to the home page</Link>
        </div>
    );
};

export default Error404;