import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import styled from 'styled-components';
import { getAllCars, getFilterData } from '../services/cars';
import Overlay from './Overlay';

const Filters = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isServerDataFilter, setIsServerDataFilter] = useState(false);
    const [filterKey, setFilterKey] = useState();
    const [filterData, setFilterData] = useState();
    const [filterName, setFilterName] = useState();

    const dispatch = useDispatch();
    const { addCars } = bindActionCreators(actionCreators, dispatch);

    const openServerDataFilter = async (filter) => {
        setIsFilterOpen(true);
        setIsServerDataFilter(true);

        setFilterKey(() => filter);

        const data = await getFilterData(`${filter}s`);
        setFilterData(() => data);
    };

    const openUserDataFilter = (title, fromFilter, toFilter) => {
        setIsFilterOpen(true);
        setIsServerDataFilter(false);

        setFilterName(title);

        setFilterKey(() => [fromFilter, toFilter]);
    };

    const filtersState = useSelector((state) => state.filters);

    useEffect(() => {
        (
            async () => {
                const carsData = await getAllCars(
                    filtersState.brand,
                    filtersState.model,
                    filtersState.type,
                    filtersState.fuel,
                    filtersState.transmission,
                    filtersState.fromPrice,
                    filtersState.toPrice,
                    filtersState.fromYear,
                    filtersState.toYear,
                    filtersState.doors,
                    filtersState.fromHorsepower,
                    filtersState.toHorsepower
                );

                addCars(carsData);
            }
        )();
    });

    return (
        <>
            <Container>
                <Title>??????????????????</Title>
                <FilterButton onClick={() => openServerDataFilter('brand')}>??????????</FilterButton>
                <FilterButton onClick={() => openServerDataFilter('model')}>??????????</FilterButton>
                <FilterButton onClick={() => openServerDataFilter('type')}>????????</FilterButton>
                <FilterButton onClick={() => openServerDataFilter('fuel')}>????????????</FilterButton>
                <FilterButton onClick={() => openServerDataFilter('transmission')}>????????????????</FilterButton>
                <FilterButton onClick={() => openUserDataFilter('????????', 'fromPrice', 'toPrice')}>????????</FilterButton>
                <FilterButton onClick={() => openUserDataFilter('????????????', 'fromYear', 'toYear')}>????????????</FilterButton>
                <FilterButton onClick={() => openServerDataFilter('doors')}>???????? ??????????</FilterButton>
                <FilterButton onClick={() => openUserDataFilter('??????????????', 'fromHorsepower', 'toHorsepower')}>??????????????</FilterButton>
            </Container>
            {
                isFilterOpen
                    ? <Overlay
                        setIsFilterOpen={setIsFilterOpen}
                        isServerDataFilter={isServerDataFilter}
                        filterKey={filterKey}
                        filterData={filterData}
                        filterName={filterName}
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