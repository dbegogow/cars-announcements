import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Card from './Card';

const Cars = () => {
    const state = useSelector((state) => state.cars);

    return (
        <Container>
            {
                state?.map(c =>
                    <Card
                        key={c.id}
                        brand={c.brandName}
                        model={c.modelName}
                        fuel={c.fuelName}
                        price={c.price}
                        year={c.year}
                    />
                )
            }
        </Container>
    );
};

export default Cars;

const Container = styled.div`
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