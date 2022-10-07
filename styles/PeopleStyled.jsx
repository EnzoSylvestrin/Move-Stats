import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerAbout = styled(motion.section)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 40px;
    flex-wrap: wrap;
    background: var(--bgColorLight);

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

export const ItemPeople = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    border-radius: 5px;
    flex-wrap: wrap;
    padding: 12px;
    text-align: center;

    img {
        width: 14rem;
        height: 14rem;
        border-radius: 50%;
        border: 3px solid var(--red);
    }

    h1 {
        width: 100%;
        margin-top: 5px;
        color: var(--textColor);
        font-size: 25px;
    }

    p {
        width: 100%;
        color: var(--textColor);
        font-size: 18px;
    }

    .icons {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 10px;
        color: var(--textColor);

        div {
            cursor: pointer;
            border-radius: 50%;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            margin: 0 0.5rem;
            background-color: var(--bgColor);
            transition: all 0.3s ease;
        }

        div:hover {
            scale: 1.1;
        }
    }
`;