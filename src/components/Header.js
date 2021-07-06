import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    return (
        <Nav>
            <div>
                <Title to="/">
                    Продай или купи своята нова кола!
                </Title>
            </div>
            <div>
                <LinkButton to="/login">
                    <span>Влез</span>
                </LinkButton>
                <LinkButton to="/register">
                    <span>Регистрация</span>
                </LinkButton>
            </div>
        </Nav>
    );
};

export default Header;

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    height: 70px;
    background: #22A1E2;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2vw;

    div {
        display: inherit;
        align-items: center;
    }

    @media (max-width: 750px) {
        flex-direction: column;
        align-items: flex-start;
    } 
`;

const Title = styled(Link)`
    font-family: 'Caveat', cursive;
    font-size: 2rem;
    margin: 0;
    text-decoration: none;
    color: #FFF;

    @media (max-width: 750px) {
        font-size: 1.5rem;
    } 
`;

const LinkButton = styled(Link)`
    text-decoration: none;
    font-size: 1.3rem;
    font-family: cursive;
    color: #FFF;
    position: relative;
    padding: 10px;

    span {
        cursor: pointer;
    }

    span::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.1em;
        background-color: #FFF;
        opacity: 0;
        transition: opacity 300ms, transform 300ms;
    }

    span:hover::after,
    span:focus::after {
        opacity: 1;
        transform: translate3d(0, 0.2em, 0);
    }

    @media (max-width: 750px) {
        font-size: 1rem;
    } 
`;