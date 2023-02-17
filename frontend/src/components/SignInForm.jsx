import { useState } from "react";
import { userSignIn, getProfil } from "../services/fetchData";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAccessToken, signIn } from "../redux/userSlice";
import Button from "../components/Button";

/**
* Component for Sign In form
* @component
* @returns {JSX.Element}
*/
const SignInForm = () => {
    const [email, setEmail] = useState(localStorage.getItem("email" || ""));
    const [password, setPassword] = useState(localStorage.getItem("password" || ""));
    const [remember, setRemember] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    /**
    * Handles the form submission for sign in form.
    *
    * @param {Event} e - The form submission event.
    */
    const submit = async (e) => {
        e.preventDefault();

        if (email && password) {
            const token = await userSignIn(email, password);
            dispatch(setAccessToken(token));

            if (token) {

                if (remember) {
                    localStorage.setItem("email", email);
                    localStorage.setItem("password", password);
                }

                const profile = await getProfil(token);
                dispatch(signIn(profile));
                navigate("/profile");
            }
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
                <Button btnStyle="btn" label="Sign In" onClick={submit} />
            </form>
        </div>
    );
};

export default SignInForm;