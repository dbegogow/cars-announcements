import { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Filters from './Filters';

const Home = () => {
    const [isOpenFilter, setIsOpenFilter] = useState(false);
    const [userData, setUserData] = useState(null);
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

    const openFilter = (e) => {
        const target = e.target;

        if (target.localName !== 'button') { return; }

        var attribute = target.getAttribute('data');

        if (attribute === 'price' ||
            attribute === 'year' ||
            attribute === 'power') {
            setUserData(target.textContent);
            setModalHeight('200px');
            setModalTop('50%');
        } else {
            setUserData(null);
            setModalHeight('350px');
            setModalTop('40%');
        }

        setIsOpenFilter(true);
    };

    const closeFilter = () => {
        setIsOpenFilter(false);
    };

    return (
        <Wrapper>
            <Filters openFilter={openFilter} />
            <div style={{ display: isOpenFilter ? '' : 'none' }}>
                <Overlay />
                <Modal height={modalHeight} top={modalTop}>
                    <CloseFilterButton onClick={closeFilter}>
                        <i className="fas fa-times"></i>
                    </CloseFilterButton>
                    <ServerData style={{ display: userData ? 'none' : '' }}>
                        <Item>Mercedes</Item>
                        <Item>Audi</Item>
                        <Item>BMW</Item>
                    </ServerData>
                    <UserData style={{ display: userData ? '' : 'none' }}>
                        <h2>{userData}</h2>
                        <div>
                            <form>
                                <label htmlFor="from">От:</label>
                                <input id="from" type="text" />
                                <label htmlFor="to">До:</label>
                                <input id="to" type="text" />
                                <button>Филтрирай</button>
                            </form>
                            <button>Изчисти</button>
                        </div>
                    </UserData>
                </Modal>
            </div>
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

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 10;
`;

const Modal = styled.div.attrs(props => ({
    height: props.height,
    top: props.top
}))`
    width: 600px;
    height: ${props => props.height};
    line-height: 200px;
    position: fixed;
    top: ${props => props.top}; 
    left: 50%;
    margin-top: -100px;
    margin-left: -300px;
    background-color: #22A1E2;
    border-radius: 5px;
    z-index: 11;

    @media (max-width: 680px) {
        width: 300px;
        margin-left: -150px;
    }
`;

const CloseFilterButton = styled.button`
    position: absolute;
    top: 10px;
    right: 15px;
    padding: 0;
    color: #BF2B11;
    background: none;
    border: none;
    font-size: 1.2rem;

    &:hover {
        cursor: pointer;
    }
`;

const ServerData = styled.div`
    margin: 40px 10px 15px 10px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    @media (max-width: 680px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const Item = styled.button`
    background: #FFF;
    margin: 7px;
    border: 2px solid #6C6C6C;
    border-radius: 12px;
    padding: 5px;
    font-size: 0.9rem;

    &:hover {
        cursor: pointer;
        background: #E0E0E0;
        transition: 0.4s ease;
    }
`;

const UserData = styled.div`
    margin-left: 40px;
    margin-top: 10px;
    color: #FFF;

    h2 {
        margin: 0;
        position: absolute;
        bottom: 45px;
        font-size: 1.5rem;
        color: #FFF;
    }

    form {
        display: inline-block;
    }

    div label {
        margin-right: 3px;
        font-size: 1.2rem;
    }

    div input {
        margin-right: 20px;
        width: 100px;
        outline: none;
        border: 1px solid #B6B6B6;
        border-radius: 12px;
        padding: 5px 10px;
    }

    button {
        border: 1px solid #B6B6B6;
        border-radius: 8px;
        padding: 5px 10px;
        font-size: 0.9rem;
        background: #E0E0E0;
        color: #000;
        margin-right: 10px;

        &:hover {
            cursor: pointer;
            transform: scale(1.04);
        }
    }
`;