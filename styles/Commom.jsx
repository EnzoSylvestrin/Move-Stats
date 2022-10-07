import styled, { keyframes } from "styled-components";

const animaBorda = keyframes`
    from {
        background-position: 0;
    }
    to {
        background-position: 300%;
    }
`

export const CommomTitle = styled.h1`
    width: 100%;
    text-align: center;
    color: var(--red);
    font-size: 30px;
    letter-spacing: 1px;
`

export const CommomSubtitle = styled.div`
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
`

export const CommomBtn = styled.div`
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

    span {
        color: var(--textColor);
        width: 140px;
        background: var(--bgColor);
        text-align: center;
        padding: 4px 0;
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
`

