import { accounts } from "../data/accounts";
import Button from "../components/Button";
import AccountCard from "../components/AccountCard";

/**
* Component for Dashboard page
* @component
* @returns {JSX.Element}
*/
const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard__head">
                <h2 className="dashboard__title">Welcome back<br />Tony Jarvis!</h2>
                <Button label="Edit Name" />
            </div>

            {accounts.map((account) =>
                <AccountCard key={account.id} title={account.title} amount={account.amount} desc={account.desc} />
            )}
        </div>
    );
};

export default Dashboard;