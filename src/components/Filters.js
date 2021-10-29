import styled from 'styled-components';
import Overlay from './Overlay';

const Filters = ({
    openFilter
}) => {
    return (
        <>
            <Container>
                <div onClick={openFilter}>
                    <Title>Филтрирай</Title>
                    <FilterButton data="model">Купе</FilterButton>
                    <FilterButton data="brand">Марка</FilterButton>
                    <FilterButton data="fuel">Гориво</FilterButton>
                    <FilterButton data="transmission">Скорости</FilterButton>
                    <FilterButton data="price">Цена</FilterButton>
                    <FilterButton data="year">Година</FilterButton>
                    <FilterButton data="doors">Брой врати</FilterButton>
                    <FilterButton data="power">Мощност</FilterButton>
                </div>
                <SerchButton>Търси</SerchButton>
            </Container>
            <Overlay />
        </>
    );
};

export default Filters;

const Container = styled.div`
    position: fixed;
    width: 20vw;
    height: 490px;
    margin-right: 8vw;
    border: 2px solid #585858;

    @media (max-width: 800px) {
        width: 28vw;
    }

    @media (max-width: 420px) {
        width: 32vw;
    }
`;

const Title = styled.h3`
    text-align: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 1.3rem;
`;

const FilterButton = styled.button`
    width: 12vw;
    margin-left: 3.5vw;
    margin-bottom: 10px;
    padding: 7px 0;
    border-radius: 15px;
    border: none;
    background: #3E98C3;
    border: 1px solid #3E98C3;
    color: #FFF;
    font-size: 0.95rem;

    &:hover {
        cursor: pointer;
        background: #DCDCDC;
        color: #000;
        border: 1px solid #000;
        transition: 0.4s ease;
    }

    @media (max-width: 800px) {
        width: 20vw;
    }
`;

const SerchButton = styled.button`
    width: 15vw;
    margin-left: 2vw;
    margin-top: 3px;
    border-radius: 15px;
    border: 2px solid #1423AB;
    background: #2FA3F0;
    padding: 10px 0;
    color: #FFF;
    font-size: 0.95rem;

    &:hover {
        cursor: pointer;
        background: #03B8F0;
    }

    @media (max-width: 800px) {
        width: 23vw;
    }
`;