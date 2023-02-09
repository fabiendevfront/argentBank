import PropTypes from "prop-types";

/**
 * Component displaying button.
 * @component
 * @param {Object} props - Component's props
 * @param {string} props.btnStyle - The className of the button
 * @param {string} props.label - The label of the button
 * @param {Function} props.onClick - The function triggered by the onClick
 * @returns {JSX.Element}
 */
const Button = ({ btnStyle, label, onClick }) => {
    return (
        <button className={btnStyle} onClick={onClick}>{label}</button>
    );
};

Button.propTypes = {
    btnStyle: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default Button;