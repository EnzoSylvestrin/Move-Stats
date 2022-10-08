import styled from 'styled-components';

export const ContainerFairs = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;

    @media (max-width: 660px) {
        grid-template-columns: 100%;
    }
`;
