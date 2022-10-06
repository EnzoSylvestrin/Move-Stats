import styled from "styled-components";

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

    span {
        color: var(--textColor);
        width: 140px;
        background: var(--bgColor);
        text-align: center;
    }

    :before, :after {
        content: '';
        position: absolute;
        width: calc(100% + 6px);
        height: calc(100% + 6px);
        background: linear-gradient(45deg, #0099ff, #001aff, #a200ff, #ff0055, #ff0000,
        #0099ff, #001aff, #a200ff, #ff0055, #ff0000);
        background-size: 300%;
        animation: AnimaBorda 10s linear alternate infinite; 
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