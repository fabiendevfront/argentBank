import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { accounts } from "../data/accounts";
import { addCapitalLetter } from "../business/utils";
import { editProfil } from "../services/fetchData";
import Button from "../components/Button";
import AccountCard from "../components/AccountCard";
import ErrorConnection from "../components/ErrorConnection";

/**
* Component for Dashboard page
* @component
* @returns {JSX.Element}
*/
const Dashboard = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [editName, setEditName] = useState(false);
    const user = useSelector((state) => state.user);
    const token = user.accessToken;
    const dispatch = useDispatch();
    const transactions = accounts.find(account => account.userId === user.id)?.transactions || [];

    const editUser = (e) => {
        e.preventDefault();
        setEditName(!editName);
    };

    const saveEditName = async (e) => {
        e.preventDefault();
        if (firstName !== "" && lastName !== "" && token) {
            await editProfil(token, firstName, lastName);
            dispatch(editUser({
                firstName: addCapitalLetter(firstName),
                lastName: addCapitalLetter(lastName),
            }));
            setEditName(false);
        }
    };

    const cancelEditName = (e) => {
        e.preventDefault();
        if (editName) {
            setEditName(false);
        }
    };

    return (
        <>
            {user.signin ? (
                <div className="dashboard">
                    <div className="dashboard__head">
                        {editName ? (
                            <>
                                <h2 className="dashboard__title">Welcome back</h2>
                                <form className="dashboard__form">
                                    <div className="dashboard__form-first">
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="dashboard__form-input"
                                            onChange={(e) => setFirstName(e.currentTarget.value)}
                                            placeholder={user.firstName}
                                        />
                                    </div>
                                    <div className="dashboard__form-last">
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="dashboard__form-input"
                                            onChange={(e) => setLastName(e.currentTarget.value)}
                                            placeholder={user.lastName}
                                        />
                                        <Button label="Save" onClick={saveEditName} />
                                        <Button label="Cancel" onClick={cancelEditName} />
                                    </div>
                                </form>
                            </>
                        ) : (
                            <>
                                <h2 className="dashboard__title">Welcome back<br />{user.firstName} {user.lastName}</h2>
                                <Button label="Edit Name" onClick={editUser}/>
                            </>
                        )}
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