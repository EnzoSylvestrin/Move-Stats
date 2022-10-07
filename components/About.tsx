import { ContainerAbout, Item } from '../styles/AboutStyled';

import { CommomTitle } from '../styles/Commom';

import icon from '../public/img-icon.png'

export default function About() {
    return (
        <ContainerAbout>
            <CommomTitle>Sobre</CommomTitle>
            <Item>
                <img src={icon.src}></img>
            </Item>
        </ContainerAbout>
    );
}