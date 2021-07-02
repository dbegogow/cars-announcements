import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    return (
        <Nav>
            <div>
                <Bar>
                    <i class="fas fa-bars"></i>
                </Bar>
                <Title>Продай или купи своята нова кола!</Title>
            </div>
            <div>
                <LinkButton to="/login">
                    <span>Login</span>
                </LinkButton>
                <LinkButton to="/register">
                    <span>Register</span>
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

    @media only screen and (max-width: 480px) {
        h1 {
            display: none;
        }

        padding: 0 8vw;
    }
`;

const Title = styled.h1`
    font-family: 'Caveat', cursive;
    font-size: 2rem;
    margin: 0;
`;

const Bar = styled.div`
    font-size: 28px;
    margin-top: 5px;
    margin-right: 15px;
`;

const LinkButton = styled(Link)`
    text-decoration: none;
    font-size: 1.3rem;
    color: #FFF;
    font-family: cursive;
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
`;