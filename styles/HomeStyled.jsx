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
    flex-wrap: wrap;
    justify-content: center;
    color: var(--textColor);
`

export const DivText = styled.div`
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;

    p {
        color: var(--textColor);
        margin: 15px 20px;
        font-size: 18px;
    }

    @media (max-width: 720px) {
        width: 80%;

        p {
            margin: 15px 0;
            padding: 0 5px; 
        }
    }

`

export const DivImg = styled.div`
    width: 55%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    .Blob {
        position: absolute;
        top: 50%;
        right: 5%;
        background-color: #f51d00;
        width: 480px;
        height: 480px;
        border-radius: 50%;
        margin-top: calc(32.5px - 240px);
        z-index: 0;
    }

    img {
        width: auto;
        height: 380px;
        position: relative;
        top: 11%;
        left: 23%;
    }

    @media (max-width: 960px) {
        .Blob {
            width: 400px;
            height: 400px;
            margin-top: calc(32.5px - 200px);
        }

        img {
            left: 25%;
            height: 300px;
        }
    }

    @media (max-width: 830px) {
        .Blob {
            width: 370px;
            height: 370px;
            margin-top: calc(32.5px - 185px);
        }

        img {
            height: 280px;
        }
    }

    @media (max-width: 720px) {
        display: none;
    }
`