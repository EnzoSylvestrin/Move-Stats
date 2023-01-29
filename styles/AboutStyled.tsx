import styled from "styled-components";
import { motion } from 'framer-motion';
 
export const ContainerAbout = styled(motion.section)`
    display: flex;
    width: 100%;
    padding: 2rem 20px;
    background-color: var(--bgColorLight);

    @media (max-width: 993px) {
        flex-wrap: wrap;
    }
`

export const WrapperImg = styled(motion.div)`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: auto;
        height: 250px;
        border: 2px solid var(--red);
    }

    @media (max-width: 993px) {
        width: 100%;
        margin-bottom: 20px;
        margin-top: 10px;            
    }

    @media (max-width: 480px) {     
        img {
            height: 200px;
        }   
    }

    @media (max-width: 375px) {
        img {
            height: 150px;
        }
    }
`

export const AboutText = styled(motion.div)`
    width: 100%;
    padding: 0 20px;

    h1 {
        text-align: center;
        font-size: 25px;
        color: var(--red);
        margin-bottom: 10px;
    }

    p {
        text-align: center;
        color: var(--textColor);
        font-size: 20px;
    }

    @media (max-width: 480px) {        
        padding: 0 10px;
    }

    @media (max-width: 375px) {
        padding: 0 5px;
    }
`