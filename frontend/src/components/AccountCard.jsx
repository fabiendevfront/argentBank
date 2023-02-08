import Button from "../components/Button";
import PropTypes from "prop-types";

/**
 * Component displaying Feature Card
 * @component
 * @param {Object} props - Component's props
 * @param {string} props.title - Title of account
 * @param {string} props.amount - Amount of account
 * @param {string} props.desc - Description of amount
 * @returns {JSX.Element}
 */
const AccountCard = ({ title, amount, desc }) => {
    return (
        <div className="account-item">
            <div className="account-item__content">
                <h3 className="account-item__title">{title}</h3>
                <p className="account-item__amount">{amount}</p>
                <p className="account-item__desc">{desc}</p>
            </div>
            <div className="account-item__cta">
                <Button btnStyle="btn" label="View transactions" />
            </div>
        </div>
    );
};

AccountCard.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
};

export default AccountCard;