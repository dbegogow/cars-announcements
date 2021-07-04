import styled from "styled-components";
import AuthFormContainer from "./AuthFormContainer";

const LoginForm = () => {
    return (
        <>
            <Container>
                <ContentContainer>
                    <Title>
                        Влизане
                    </Title>
                    <Form>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Влез</button>
                    </Form>
                </ContentContainer>
            </Container>
            <AuthFormContainer />
        </>
    );
};

export default LoginForm;

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