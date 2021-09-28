import styled from "styled-components";

const FilterButton = ({
    children
}) => {
    return (
        <Button>
            {children}
        </Button>
    );
};

const Button = styled.button`
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
        background: #8CF1F5;
        color: #000;
        border: 1px solid #000;
    }

    @media (max-width: 800px) {
        width: 20vw;
    }
`;

export default FilterButton;