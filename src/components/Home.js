import { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';

const Home = () => {
    const [isOpenFilter, setIsOpenFilter] = useState(false);
    const [userData, setUserData] = useState(null);
    const [modalHeight, setModalHeight] = useState();
    const [modalTop, setModalTop] = useState();

    const openFilter = (e) => {
        const target = e.target;

        if (target.localName !== 'button') { return; }

        if (target.hasAttribute('data')) {
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
    }

    return (
        <Wrapper>
            <FiltersContainer>
                <div onClick={openFilter}>
                    <Title>Филтрирай</Title>
                    <FilterButton>Купе</FilterButton>
                    <FilterButton>Марка</FilterButton>
                    <FilterButton>Гориво</FilterButton>
                    <FilterButton>Скорости</FilterButton>
                    <FilterButton data="true">Цена</FilterButton>
                    <FilterButton data="true">Година</FilterButton>
                    <FilterButton>Брой врати</FilterButton>
                    <FilterButton data="true">Мощност</FilterButton>
                </div>
                <SerchButton>Търси</SerchButton>
            </FiltersContainer>
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
                            <label htmlFor="from">От:</label>
                            <input id="from" type="text" />
                            <label htmlFor="to">До:</label>
                            <input id="to" type="text" />
                            <button>Филтрирай</button>
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