import styled from 'styled-components'
import { motion } from 'framer-motion';

export const ContainerContact = styled(motion.section)`
    padding: 2rem 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--bgColorLight);
    flex-wrap: wrap;
`

export const FormSubmit = styled(motion.form)`
    width: 40%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    margin-top: 10px;

    label {
        display: block;
        margin: 0 auto;
        width: 100%;
        font-size: 20px;
        color: var(--textColor);
        text-align: left;
        padding: 3px;
    }

    .form-control {
        position: relative;
        display: flex;
        width: 100%;
        margin: 10px auto;
        background-color: var(--bgColor);
        padding: 10px;
        color: white;
        outline: none;
        border: 1px solid var(--red);
        z-index: 1;
    }

    textarea {
        height: 100px;
        resize: none;
    }

    .form-control:hover,
    .form-control:focus {
    }

    input[type="submit"] {
        display: block;
        margin: 0 auto;
        cursor: pointer;
        border-radius: 10px;
        margin-top: 10px;
        padding: 7px;
        background-color: transparent;
        font-size: 19px;
        border: 1px solid var(--red);
        transition: all 0.3s ease;
        color: var(--textColor);    
    }

    input[type="submit"]:hover {
        background-color: rgba(194, 21, 15, 0.76)
    }

    @media (max-width: 900px) {
        width: 60%;
    }

    @media (max-width: 700px) {
        width: 75%;
    }

    @media (max-width: 540px) {
        width: 90%;

        textarea {
            resize: vertical;
        }
    }
`