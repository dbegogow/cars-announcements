import { useState } from 'react';
import styled from 'styled-components';
import { getFilterData } from '../services/cars';
import Overlay from './Overlay';

const Filters = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isServerDataFilter, setIsServerDataFilter] = useState(false);
    const [filter, setFilter] = useState();
    const [filterData, setFilterData] = useState();
    const [filterName, setFilterName] = useState();
    const [data, setData] = useState();

    const [brand, setBrand] = useState();
    const [model, setModel] = useState();
    const [type, setType] = useState();
    const [fuel, setFuel] = useState();
    const [transmission, setTransmission] = useState();
    const [fromPrice, setFromPrice] = useState(0);
    const [toPrice, setToPerice] = useState(0);
    const [fromYear, setFromYear] = useState(0);
    const [toYear, setToYear] = useState(0);
    const [doors, setDoors] = useState(0);
    const [fromPower, setFromPower] = useState(0);
    const [toPower, setToPower] = useState(0);

    const openServerDataFilter = async (name, currFilter) => {
        setIsFilterOpen(true);
        setIsServerDataFilter(true);
        setFilter(() => currFilter);

        const data = await getFilterData(name);
        setFilterData(() => data);
    };

    const openUserDataFilter = (title, currFromFilter, currToFilter) => {
        setIsFilterOpen(true);
        setIsServerDataFilter(false);
        setFilterName(title);
        setFilter(() => [currFromFilter, currToFilter]);
    };

    const applyFilter = (itemName) => {
        filter(itemName);
        setIsFilterOpen(false);
    };

    return (
        <>
            <Container>
                <Title>Филтрирай</Title>
                <FilterButton onClick={() => openServerDataFilter('brands', setBrand)}>Марка</FilterButton>
                <FilterButton onClick={() => openServerDataFilter('model', setModel)}>Модел</FilterButton>
                <FilterButton onClick={() => openServerDataFilter('type', setType)}>Купе</FilterButton>
                <FilterButton onClick={() => openServerDataFilter('fuel', setFuel)}>Гориво</FilterButton>
                <FilterButton onClick={() => openServerDataFilter('transmission', setTransmission)}>Скорости</FilterButton>
                <FilterButton onClick={() => openUserDataFilter('Цена', setFromPrice, setToPerice)}>Цена</FilterButton>
                <FilterButton onClick={() => openUserDataFilter('Година', setFromYear, setToYear)}>Година</FilterButton>
                <FilterButton onClick={() => openServerDataFilter('doors', setDoors)}>Брой врати</FilterButton>
                <FilterButton onClick={() => openUserDataFilter('Мощност', setFromPower, setToPower)}>Мощност</FilterButton>
            </Container>
            {
                isFilterOpen
                    ? <Overlay
                        setIsFilterOpen={setIsFilterOpen}
                        isServerDataFilter={isServerDataFilter}
                        filterData={filterData}
                        filterName={filterName}
                        applyFilter={applyFilter}
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