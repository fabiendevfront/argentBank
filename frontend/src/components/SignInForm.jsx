import Button from "../components/Button";
/**
* Component for Dashboard page
* @component
* @returns {JSX.Element}
*/
const SignInForm = () => {
    return (
        <div className="si-form">
            <i class="fa fa-user-circle si-form__icon"></i>
            <h2 className="si-form__title">Sign In</h2>
            <form className="si-form__form">
                <div className="si-form__group">
                    <label for="username" className="si-form__label">Username</label>
                    <input type="text" id="username" className="si-form__input"/>
                </div>
                <div className="si-form__group">
                    <label for="password" className="si-form__label">Password</label>
                    <input type="password" id="password" className="si-form__input"/>
                </div>
                <div class="si-form__remember">
                    <input type="checkbox" id="remember-me" className="si-form__remember-input" />
                    <label for="remember-me" className="si-form__remember-label">Remember me</label>
                </div>
                <Button label="Sign In" />
            </form>
        </div>
    );
};

export default SignInForm;