import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeWrapper = styled.div`
    background-color: var(--bgColor);
    width: 100%;
    padding: 20px;
    padding-top: 10vh;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: center;
    color: var(--textColor);
`

export const DivText = styled.div`
    width: 40%;
    
    p {
        text-align: center;
        font-size: 25px;
        color: #a71d1d;
        font-weight: bold;
    }
`

export const DivImg = styled.div`
    width: 60%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    .Blob {
        position: absolute;
        top: 50%;
        left: 50%;
        background-color: #f51d00;
        width: 480px;
        height: 480px;
        border-radius: 50%;
        margin-top: calc(10vh - 240px);
        z-index: 0;
    }

    img {
        width: auto;
        height: 380px;
        position: relative;
        top: 11%;
        left: 22%;
    }

    @media (max-width: 940px) {
        .Blob {
            width: 400px;
            height: 400px;
            top: 50%;
            margin-top: -200px;
        }

        img {
            
            height: 300px;
        }
    }
`