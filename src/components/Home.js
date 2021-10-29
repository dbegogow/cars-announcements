import { useState } from 'react';
import styled from 'styled-components';
import { filterData } from '../services/cars';
import Card from './Card';
import Filters from './Filters';
import Overlay from './Overlay';

const Home = () => {
    const [isOpenFilter, setIsOpenFilter] = useState(false);
    const [isUserData, setIsUserData] = useState(false);
    const [modalHeight, setModalHeight] = useState();
    const [modalTop, setModalTop] = useState();

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

    const openFilter = async (e) => {
        const target = e.target;

        if (target.localName !== 'button') { return; }

        var attribute = target.getAttribute('data');

        if (attribute === 'price' ||
            attribute === 'year' ||
            attribute === 'power') {
            setModalHeight('200px');
            setModalTop('50%');
            setIsUserData(true);
        } else {
            setModalHeight('350px');
            setModalTop('40%');
            setIsUserData(false)
        }

        setIsOpenFilter(true);
    };

    const closeFilter = () => {
        setIsOpenFilter(false);
    };

    return (
        <Wrapper>
            <Filters openFilter={openFilter} />
            <Overlay />
            <CarsContainer>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
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