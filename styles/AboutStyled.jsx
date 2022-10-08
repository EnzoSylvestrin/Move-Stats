import styled from "styled-components";

export const ContainerAbout = styled.section`
    display: flex;
    width: 100%;
    padding: 2rem 20px;
    background-color: var(--bgColorLight);

    .wrapper-img {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: auto;
            height: 250px;
            border: 2px solid var(--red);
        }
    }

    .about-text {
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
    }

    @media (max-width: 993px) {
        flex-wrap: wrap;

        .wrapper-img {
            width: 100%;
            margin-bottom: 20px;
            margin-top: 10px;            
        }
    }

    @media (max-width: 480px) {
        .wrapper-img {
            img {
                height: 200px;
            }
        }

        .about-text {
            padding: 0 10px;
        }
    }

    @media (max-width: 375px) {
        .wrapper-img {
            img {
                height: 150px;
            }
        }

        .about-text {
            padding: 0 5px;
        }
    }

`