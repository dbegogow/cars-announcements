import { useState } from 'react';
import styled from 'styled-components';
import FilterButton from './FilterButton';
import Overlay from './Overlay';

const Filters = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filter, setFilter] = useState();

    const [model, setModel] = useState();
    const [brand, setBrand] = useState();
    const [fuel, setFuel] = useState();
    const [transmission, setTransmission] = useState();
    const [fromPrice, setFromPrice] = useState(0);
    const [toPrice, setToPrice] = useState(0);
    const [fromYear, setFromYear] = useState(0);
    const [toYear, setToYear] = useState(0);
    const [doors, setDoors] = useState(0);
    const [fromPower, setFromPower] = useState(0);
    const [toPower, setToPower] = useState(0);

    const openFilter = (e) => {
        const target = e.target;

        if (target.localName === 'div') { return; }

        const data = target.getAttribute('data');

        console.log(data);
    }

    return (
        <>
            <Container>
                <Title>Филтрирай</Title>
                <div onClick={openFilter}>
                    <FilterButton>Купе</FilterButton>
                    <FilterButton>Марка</FilterButton>
                    <FilterButton>Гориво</FilterButton>
                    <FilterButton>Скорости</FilterButton>
                    <FilterButton>Цена</FilterButton>
                    <FilterButton>Година</FilterButton>
                    <FilterButton>Брой врати</FilterButton>
                    <FilterButton>Мощност</FilterButton>
                </div>
            </Container>
            {
                isFilterOpen
                    ? <Overlay
                        setIsFilterOpen={setIsFilterOpen}
                        filter={filter}
                        setFilter={setFilter}
                    />
                    : null
            }
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