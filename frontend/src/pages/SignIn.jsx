import SignInForm from "../components/SignInForm";

/**
* Component for Sign In page
* @component
* @returns {JSX.Element}
*/
const SignIn = () => {
    return (
        <div className="sign-in">
            <div className="sign-in__form">
                <SignInForm />
            </div>
        </div>
    );
};

export default SignIn;