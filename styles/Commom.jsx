import styled, { css, keyframes } from "styled-components";
import { motion } from "framer-motion";

const animaBorda = keyframes`
    from {
        background-position: 0;
    }
    to {
        background-position: 300%;
    }
`;

export const CommomContainer = styled(motion.section)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0px;
    flex-wrap: wrap;
    background: ${props => props.light ? 'var(--bgColorLight)' : 'var(--bgColor)'};
`;

export const CommomTitle = styled(motion.h1)`
    width: 100%;
    text-align: center;
    color: var(--red);
    font-size: 30px;
    letter-spacing: 1px;
`;

export const CommomSubtitle = styled(motion.div)`
    width: 100%;
    font-size: 18px;
    text-align: center;

    span {
        background: linear-gradient(45deg,#0099ff, #001aff, #a200ff, #ff0055, #ff0000,
        #0099ff, #001aff, #a200ff, #ff0055, #ff0000);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        background-size: 300%;
        animation: ${animaBorda} 10s linear infinite;
    }

    span::selection {
        background-color: transparent;
    }
`;

export const CommomBtn = styled(motion.div)`
    position: relative;
    color: #fff;
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    cursor: pointer;
    background: var(--bgColor);
    transition: scale 0.3s ease;
    font-size: 20px;

    input[type="submit"] {
        color: var(--textColor);
        width: 140px;
        font-size: 20px;
        background: var(--bgColor);
        text-align: center;
        outline: none;
        border: none;
        cursor: pointer;
        padding: 4px 0;
    }

    a {
        color: var(--textColor);
        width: 140px;
        background: var(--bgColor);
        text-align: center;
        padding: 4px 0;
    }

    a::selection {
        background-color: var(--textColor);
    }

    :before, :after {
        content: '';
        position: absolute;
        width: calc(100% + 6px);
        height: calc(100% + 6px);
        background: linear-gradient(45deg, #0099ff, #001aff, #a200ff, #ff0055, #ff0000,
        #0099ff, #001aff, #a200ff, #ff0055, #ff0000);
        background-size: 300%;
        animation: ${animaBorda} 10s linear alternate infinite; 
        z-index: -1;
    }

    :after {
        filter: blur(4px);
    }

    :hover {
        scale: 1.04;
    }

    :hover &:after {
        filter: blur(50px);
    }
`;

export const CommomItem = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    border-radius: 5px;
    flex-wrap: wrap;
    padding: 12px;
    text-align: center;

    img {
        ${props => {
            switch (props.size) {
                case "large":
                    return css`
                        width: 16rem;
                        height: 16rem;
                    `
                default:
                    return css`
                        width: 14rem;
                        height: 14rem;
                    `
            }
        }};

        border-radius: 50%;
        border: 3px solid var(--red);
    }

    img::selection {
        background-color: transparent;
    }

    h1 {
        width: 100%;
        margin-top: 5px;
        color: var(--textColor);
        font-size: 25px;
    }

    p {
        padding: 0 40px;
        width: 100%;
        color: var(--textColor);
        font-size: 18px;
    }

    div {
        margin-top: 20px;
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
            margin: 0;
            background-color: var(--bgColor);
            transition: all 0.4s ease;
        }

        div:hover {
            scale: 1.1;
            background-color: var(--textColor);
            color: var(--bgColor) !important;
        }

        a {
            border-radius: 50%;
            margin: 0 0.3rem;
        }
    }

    .rotate {
        transform: rotate(45deg);
    }

    .rotate2 {
        transform: rotate(-20deg);
    }

    @media (max-width: 800px) {
        p {
            padding: 0 10px;
        }
    }
`;

