import Button from "../components/Button";
import { useState } from "react";
import { userSignIn, getProfil } from "../services/fetchData";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../redux/userSlice";
/**
* Component for Dashboard page
* @component
* @returns {JSX.Element}
*/
const SignInForm = () => {
    const [email, setEmail] = useState(sessionStorage.getItem("email" || ""));
    const [password, setPassword] = useState(sessionStorage.getItem("password" || ""));
    const [remember, setRemember] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        if (remember) {
            sessionStorage.setItem("email", email);
            sessionStorage.setItem("password", password);
        } else {
            sessionStorage.setItem("email", "");
            sessionStorage.setItem("password", "");
        }
        const token = await userSignIn(email, password);
        if (token) {
            sessionStorage.setItem("token", token);
            const profile = await getProfil(token);
            console.log(profile);
            dispatch(signIn(profile));
            navigate(`/dashboard/${profile.id}`);
        }
    };

    return (
        <div className="si-form">
            <i className="fa fa-user-circle si-form__icon"></i>
            <h2 className="si-form__title">Sign In</h2>
            <form className="si-form__form">
                <div className="si-form__group">
                    <label htmlFor="username" className="si-form__label">Username</label>
                    <input type="text" id="username" className="si-form__input" onChange={(e) => setEmail(e.currentTarget.value)} defaultValue={email}/>
                </div>
                <div className="si-form__group">
                    <label htmlFor="password" className="si-form__label">Password</label>
                    <input type="password" id="password" className="si-form__input" onChange={(e) => setPassword(e.currentTarget.value)} defaultValue={password}/>
                </div>
                <div className="si-form__remember">
                    <input type="checkbox" id="remember-me" className="si-form__remember-input" onChange={() => setRemember(!remember)} checked={remember}/>
                    <label htmlFor="remember-me" className="si-form__remember-label">Remember me</label>
                </div>
                <Button label="Sign In" onClick={submit} />
            </form>
        </div>
    );
};

export default SignInForm;