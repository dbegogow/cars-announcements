import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = () => {
    return (
        <Container to={`/car`}>
            <DateContainer>
                <div>
                    02.07.2021
                </div>
                <i class="far fa-heart"></i>
            </DateContainer>
            <Image src="https://g1-bg.cars.bg/2021-01-30_2/60159a1fd9e18c11211fbd03o.jpg" alt="car" />
            <Price>10.500лв.</Price>
            <Model>BMW X3 2.0d Other somethig text</Model>
            <Specifications>2006, Дизел, 200000 км.</Specifications>
            <Description>Регистрирана, нов внос</Description>
            <Location>частно лице, Враца</Location>
        </Container>
    );
};

export default Card;

const Container = styled(Link)`
    color: inherit;
    text-decoration: none;
    width: 290px;
    height: 370px;
    border: 2px solid #DEDEDE;
    border-radius: 5px;
    position: relative;

    &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 53px -5px rgba(0,0,0,0.74);
        -webkit-box-shadow: 0px 0px 53px -5px rgba(0,0,0,0.74);
        -moz-box-shadow: 0px 0px 53px -5px rgba(0,0,0,0.74);
        transform: scale(1.03);
    }

    i {
        font-size: 20px;
    }

    @media (max-width: 550px) {
        width: 230px;
        height: 370px;
    }

    @media (max-width: 420px) {
        width: 200px;
        height: 360px;
    }

    @media (min-height: 1020px) { 
        height: 430px;
    }

    @media (min-height: 1300px) { 
        height: 500px;
    }
`;

const DateContainer = styled.div`
    font-family: cursive;
    width: 100%;
    height: 33px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    color: #4E4E4E;
`;

const Image = styled.img`
    width: 100%;
    height: 22vh;
    object-fit: cover;
`;

const Price = styled.div`
    position: absolute;
    right: 15px;
    top: 22vh;
    padding: 7px;
    font-family: cursive;
    background: #FFF;
    border: 2px solid #0B6BC8;
    border-radius: 12px;
    font-size: 1.1rem;
`;

const Model = styled.h5`
    margin: 8px 9px 0 9px;
    font-size: 1.2rem;
    font-weight: 500;
    font-family: sans-serif;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 100%;
        border-bottom: 2px solid #4D4D4D;
    } 
`;

const Specifications = styled.div`
    margin: 17px 9px 0 9px;
`;

const Description = styled.div`
    margin: 10px 9px 0 9px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #888888;
`;

const Location = styled.div`
    margin: 10px 9px 0 9px;
`;