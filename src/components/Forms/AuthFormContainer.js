import styled from "styled-components";
import AuthWrapper from "./AuthWrapper";

const AuthFormContainer = ({
    title,
    buttonText,
    children
}) => {
    return (
        <>
            <Container>
                <ContentContainer>
                    <Title>
                        {title}
                    </Title>
                    <Form>
                        {children}
                        <button type="submit">{buttonText}</button>
                    </Form>
                </ContentContainer>
            </Container>

            {
                title === 'Влизане'
                    ? (
                        <AuthWrapper
                            title="Нямаш акаунт?"
                            text="Създай своя акаунт още сега"
                            buttonText="Регистриране"
                            buttonPath="/register"
                        />
                    )
                    : (
                        <AuthWrapper
                            title="Имаш вече акаунт?"
                            text="Влез в своя акаунт"
                            buttonText="Влизане"
                            buttonPath="/login"
                        />
                    )
            }
        </>
    );
};

export default AuthFormContainer;

const Container = styled.div`
    background: #FFF;
    position: absolute;
    top: 17vh;
    left: 18vw;
    width: 30vw;
    height: 60vh;
    box-shadow: 0px 0px 15px 7px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 15px 7px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 15px 7px rgba(0,0,0,0.75);

    @media (max-width: 700px) {
        width: 70vw;
        left: 14vw;
        top: 21vh;
    }
`;

const ContentContainer = styled.div`
    margin: 5vh 4vw;
`;

const Title = styled.h2`
    font-family: cursive;
    font-size: 2rem;
    font-weight: 400;
`;

const Form = styled.form`
    height: 30vh;

    input {
        width: 100%;
        margin-bottom: 25px;
        padding: 15px;
        border: 2px solid #7E7E7E;
        border-radius: 5px;
        outline: none;
    }

    button {
        margin-top: 5px;
        padding: 10px 30px;
        border: none;
        border-radius: 5px;
        background: #797979;
        color: #FFF;
        font-family: cursive;
        font-size: 1.0rem;
    }

    button:hover {
        cursor: pointer;
        transform: scale(1.06);
    }
`;