import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { actionCreators } from '../state';

const Overlay = ({
    setIsFilterOpen,
    isServerDataFilter,
    filterKey,
    filterData,
    filterName,
}) => {
    const filtersState = useSelector((state) => state.filters);
    const dispatch = useDispatch();
    const { changeFilter } = bindActionCreators(actionCreators, dispatch);

    const applyServerDataFilter = (itemName) => {
        changeFilter({ key: filterKey, value: itemName });

        setIsFilterOpen(false);
    };

    const clearUserDataForm = (e) => {
        e.preventDefault();

        const [fromFilter, toFilter] = filterKey;

        changeFilter({ key: fromFilter, value: null });
        changeFilter({ key: toFilter, value: null });

        setIsFilterOpen(false);
    };

    const applyUserDataFilter = (e) => {
        e.preventDefault();

        const target = e.target;

        let fromValue = target.from.value;
        let toValue = target.to.value;

        try {
            fromValue = parseInt(fromValue);
        } catch (err) {
            fromValue = null;
        }

        try {
            toValue = parseInt(toValue);
        } catch (err) {
            toValue = null;
        }

        const [fromFilter, toFilter] = filterKey;

        changeFilter({ key: fromFilter, value: fromValue });
        changeFilter({ key: toFilter, value: toValue });

        setIsFilterOpen(false);
    };

    const clearServerFilter = (filterKey) => {
        changeFilter({ key: filterKey, value: null })

        setIsFilterOpen(false);
    };

    return (
        <div>
            <Container />
            <Modal
                height={isServerDataFilter ? '350px' : '200px'}
                top={isServerDataFilter ? '40%' : '50%'}
            >
                <CloseFilterButton onClick={() => setIsFilterOpen(false)}>
                    <i className="fas fa-times"></i>
                </CloseFilterButton>
                {
                    isServerDataFilter
                        ? (
                            <ServerData >
                                <ClearFilterButton onClick={() => clearServerFilter(filterKey)}>Изчисти</ClearFilterButton>
                                {
                                    filterData?.map(item =>
                                        <Item
                                            key={item.id}
                                            onClick={() => applyServerDataFilter(item.name)}
                                            style={{
                                                pointerEvents: filtersState[filterKey] === item.name ? 'none' : '',
                                                background: filtersState[filterKey] === item.name ? '#B6B6B6' : ''
                                            }}
                                        >
                                            {item.name}
                                        </Item>)
                                }
                            </ServerData>
                        )
                        : (
                            <UserData>
                                <h2>{filterName}</h2>
                                <div>
                                    <form onSubmit={applyUserDataFilter}>
                                        <label htmlFor="from">От:</label>
                                        <input id="from" name="from" type="text" />
                                        <label htmlFor="to">До:</label>
                                        <input id="to" type="text" />
                                        <button>Филтрирай</button>
                                    </form>
                                    <button onClick={clearUserDataForm}>Изчисти</button>
                                </div>
                            </UserData>
                        )
                }
            </Modal>
        </div>
    );
};

export default Overlay;

const Container = styled.div`
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

const ClearFilterButton = styled.button`
    position: absolute;
    top: 10px;
    right: 50px;
    border-radius: 7px;
    border: 2px solid #6C6C6C;

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