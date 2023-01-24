import PropTypes from "prop-types";

/**
 * The Layout component returns a JSX element that contains Header and/or Sidebar components and main.
 * @component
 * @param {Object} props - Component's props
 * @param {Object} props.children - The content to be rendered inside the Layout component
 * @returns {JSX.Element}
 */
const Layout = ({ children }) => {
    return (
        <>
            <main>{children}</main>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;