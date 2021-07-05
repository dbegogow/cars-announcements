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
    height: 60vh;
    margin-right: 8vw;
    border: 2px solid #585858;

    @media (max-width: 750px) {
        width: 30vw;
        height: 70vh;
    }

    @media (max-height: 1500px) {
        height: 47vh;
    }

    @media (max-height: 1400px) {
        height: 35vh;
    }

    @media (max-height: 820px) {
        height: 58vh;
    }

    @media (max-height: 750px) {
        height: 64vh;
    }

    @media (max-height: 670px) {
        height: 70vh;
    }

    @media (max-height: 570px) {
        height: 85vh;
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

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 750px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media (min-height: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const Title = styled.h3`
    text-align: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 1.3rem;

    @media (max-width: 750px) {
        font-size: 1.1rem;
    }
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

    @media (max-width: 750px) {
        width: 23vw;
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

    @media (max-width: 750px) {
        width: 26vw;
    }
`;