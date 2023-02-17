import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { signOut } from "../redux/userSlice";

/**
 * The Header component returns JSX element.
 * @returns {JSX.Element}
 */
const Header = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    // Clean local storage and dispatch signOut action for clear user store
    const userSignOut = () => {
        localStorage.clear();
        dispatch(signOut(user));
    };

    return (
        <header className="header">
            <Link to="/" className="header__link-logo">
                <img src={logo} className="header__logo" alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <nav className="header__nav">
                <Link to={user.signin ? "/profile" : "/login"} className="header__link-nav">
                    <i className="fa fa-user-circle header__icon"></i>
                    { user.signin ? `${user.firstName}` : "Sign In" }
                </Link>
                { user.signin ? (
                    <Link to="/" className="header__link-nav" onClick={userSignOut}>
                        <i className="fa fa-sign-out"></i>
                            Sign Out
                    </Link>
                ) : "" }
            </nav>
        </header>
    );
};

export default Header;