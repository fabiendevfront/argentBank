import PropTypes from "prop-types";

/**
 * Component displaying button.
 * @component
 * @param {Object} props - Component's props
 * @param {string} props.label - The label of the button
 * @returns {JSX.Element}
 */
const Button = ({ label, onClick }) => {
    return (
        <button className="btn" onClick={onClick}>{label}</button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
};

export default Button;