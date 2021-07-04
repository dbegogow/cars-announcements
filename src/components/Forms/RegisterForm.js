import AuthFormContainer from "./AuthFormContainer";

const RegisterForm = () => {
    return (
        <AuthFormContainer
            title="Регистрация"
            buttonText="Регистриране"
        >
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Repeat Password" />
        </AuthFormContainer>
    );
};

export default RegisterForm;