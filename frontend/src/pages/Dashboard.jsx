import { accounts } from "../data/accounts";
import Button from "../components/Button";
import AccountCard from "../components/AccountCard";
import { useSelector } from "react-redux";
import ErrorConnection from "../components/ErrorConnection";

/**
* Component for Dashboard page
* @component
* @returns {JSX.Element}
*/
const Dashboard = () => {
    const user = useSelector((state) => state.user);
    const transactions = accounts.find(account => account.userId === user.id)?.transactions || [];

    const editUser = (e) => {
        e.preventDefault();
        console.log("click");
    };

    return (
        <>
            {user.signin ? (
                <div className="dashboard">
                    <div className="dashboard__head">
                        <h2 className="dashboard__title">Welcome back<br />{user.firstName} {user.lastName}</h2>
                        <Button label="Edit Name" onClick={editUser}/>
                    </div>
                    { transactions.map((transaction) =>
                        <AccountCard key={transaction.id} title={transaction.title} amount={transaction.amount} desc={transaction.desc} />
                    )}
                </div>
            ) : (
                <ErrorConnection />
            )}
        </>
    );
};

export default Dashboard;