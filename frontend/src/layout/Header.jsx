import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

/**
 * The Header component returns JSX element.
 * @returns {JSX.Element}
 */
const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header__link-logo">
                <img src={logo} className="header__logo" alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <nav className="header__nav">
                <Link to="/sign-in" className="header__link-nav">
                    <i className="fa fa-user-circle header__icon"></i>
                    Sign In
                </Link>
            </nav>
        </header>
    );
};

export default Header;