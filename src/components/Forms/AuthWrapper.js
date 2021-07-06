import { useHistory } from "react-router";
import styled from "styled-components";

const AuthWrapper = ({
    title,
    text,
    buttonText,
    buttonPath
}) => {
    const history = useHistory();

    const onClickButtonHandler = () => {
        history.push(buttonPath);
    };

    return (
        <Container>
            <Content>
                <Title>
                    {title}
                </Title>
                <Text>
                    {text}
                </Text>
                <Button onClick={onClickButtonHandler}>
                    {buttonText}
                </Button>
            </Content>
        </Container>
    );
};

export default AuthWrapper;

const Container = styled.div`
    background: #22A1E2;
    margin: 27vh 10vw 20vh 10vw;
    height: 38vh;

    @media (max-width: 700px) {
        display: none;
    }
`;

const Content = styled.div`
    width: 20vw;
    height: 30vh;
    position: relative;
    left: 55vw;
    top: 5vh;
    font-family: cursive;
    color: #FFF;
`;

const Title = styled.h2`
    padding-top: 10px;
    margin-bottom: 10px;
`;

const Text = styled.p`
    margin-top: 0;
`;

const Button = styled.button`
    text-decoration: none;
    padding: 7px;
    border: 3px solid #B3DD4B;
    border-radius: 15px;
    background: #E2E7D8;
    font-family: cursive;
    color: #434343;
    font-weight: 500;

    &:hover {
        cursor: pointer;
        transform: scale(1.06);
    }
`;