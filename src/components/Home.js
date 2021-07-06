import styled from 'styled-components';
import CarCard from './CarCard';

const Home = () => {
    return (
        <Wrapper>
            <FiltersContainer>
                <Title>Филтрирай</Title>
                <FilterButton>Купе</FilterButton>
                <FilterButton>Марка</FilterButton>
                <FilterButton>Гориво</FilterButton>
                <FilterButton>Скорости</FilterButton>
                <FilterButton>Цена</FilterButton>
                <FilterButton>Година</FilterButton>
                <FilterButton>Брой врати</FilterButton>
                <FilterButton>Мощност</FilterButton>
                <SerchButton>Търси</SerchButton>
            </FiltersContainer>
            <CarsContainer>
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
            </CarsContainer>
        </Wrapper>
    );
};

export default Home;

const Wrapper = styled.div`
    margin-top: 12vh;
    margin-bottom: 4vh;
    display: flex;
    flex-direction: row;
`;

const FiltersContainer = styled.div`
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



const CarsContainer = styled.div`
    width: 69vw;
    margin-left: 27vw;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 50px;

    @media (max-width: 1270px) {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 0;
    }

    @media (max-width: 890px) {
        grid-template-columns: repeat(1, 1fr);
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
        background: #8CF1F5;
        color: #000;
        border: 1px solid #000;
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