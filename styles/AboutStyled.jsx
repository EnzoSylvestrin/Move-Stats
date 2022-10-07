import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerAbout = styled(motion.section)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 40px;
    flex-wrap: wrap;
    background: var(--bgColorLight);
`;

export const Item = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 200px;
        border-radius: 50%;
    }
`;