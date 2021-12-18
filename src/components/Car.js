import styled from 'styled-components';

const Car = () => {
    return (
        <Container>
            <AnnouncementInfoContainer>
                <p>днес, 15:44</p>
                <p>Разглеждания: <span>42</span></p>
            </AnnouncementInfoContainer>
        </Container>
    );
};

export default Car;

const Container = styled.div`
    background: beige;
    margin: 80px 230px 20px 230px;
`;

const AnnouncementInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;

    p {
        margin: 0;
        font-size: 14px;
        color: #808080;
    }

    span {
        font-weight: 600;
    }
`;