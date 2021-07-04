import AuthFormContainer from "./AuthFormContainer";

const LoginForm = () => {
    return (
        <AuthFormContainer
            title="Влизане"
            buttonText="Влез"
        >
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
        </AuthFormContainer>
    );
};

export default LoginForm;