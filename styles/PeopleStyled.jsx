import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerPeople = styled(motion.section)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 40px;
    flex-wrap: wrap;
    background: var(--bgColor);

    @media (max-width: 400px) {
        padding: 2rem 10px;
    }
`;

export const ContainerItens = styled(motion.div)`
    width: 100%;
    display: grid;
    grid-template-columns: 33% 33% 33%;

    @media (max-width: 860px) {
        grid-template-columns: 50% 50%;
    }

    @media (max-width: 590px) {
        grid-template-columns: 100%;
    }
`