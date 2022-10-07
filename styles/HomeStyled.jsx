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

    p {
        color: var(--textColor);
        margin: 15px 20px;
        font-size: 18px;
    }

    a {
        margin: 10px auto;
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
        right: 8%;
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

    @media (max-width: 940px) {
        .Blob {
            width: 400px;
            height: 400px;
            margin-top: calc(32.5px - 200px);
        }

        img {
            height: 300px;
        }
    }

    @media (max-width: 830px) {
        .Blob {
            width: 340px;
            height: 340px;
            margin-top: calc(32.5px - 150px);
        }
    }   
`