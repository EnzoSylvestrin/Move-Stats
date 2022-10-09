import styled from "styled-components";

export const HomeWrapper = styled.div`
    background-color: var(--bgColor);
    width: 100%;
    padding: 20px;
    padding-top: 10vh;
    min-height: 100vh;
    height: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    color: var(--textColor);

    @media (max-width: 400px) {
        padding: 5px;
        padding-top: 10vh;
    }
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
        font-size: 20px;
    }

    @media (max-width: 720px) {
        width: 80%;
        margin-top: 25px;

        p {
            margin: 15px 0;
            padding: 0 5px; 
        }
    }

`

export const DivImg = styled.div`
    width: 55%;
    height: 300px;
    overflow: hidden;
    display: flex;
    align-self: flex-start;
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
        left: 29%;
    }

    @media (max-width: 960px) {
        .Blob {
            width: 400px;
            height: 400px;
            margin-top: calc(32.5px - 200px);
        }

        img {
            left: 30%;
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
        width: 100%;
        margin-top: 30px;
        margin-bottom: 20px;

        .Blob {
            width: auto;
            height: auto;
            position: sticky;
            background-color: transparent;
        }

        img {
            height: 300px;
            display: block;
            margin: 0 auto;
            position: static;
        }
        
    }
`