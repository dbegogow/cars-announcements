import styled from 'styled-components';
import Filters from './Filters';
import Cars from './Cars';

const Home = () => {

    return (
        <Wrapper>
            <Filters />
            <Cars />
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