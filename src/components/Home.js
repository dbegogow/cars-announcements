import styled from 'styled-components';
import CarCard from './CarCard';

const Home = () => {
    return (
        <Wrapper>
            <FiltersContainer>
                Filters
            </FiltersContainer>
            <CarsContainer>
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
    display: flex;
    flex-direction: row;
`;

const FiltersContainer = styled.div`
    background: wheat;
    width: 20vw;
    height: 80vh;
    margin-right: 8vw;
`;

const CarsContainer = styled.div`
    width: 69vw;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 50px;
`;