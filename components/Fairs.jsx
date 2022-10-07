import { CommomContainer, CommomTitle, CommomSubtitle, CommomItem } from '../styles/Commom';
import { ContainerFairs } from '../styles/FairsStyled';

import Febrace from '../public/febrace.jpg';
import Femic from '../public/femic.png';

export default function Fairs() {
    return (
        <CommomContainer light id="fairs">
            <CommomTitle>Feiras</CommomTitle>
            <CommomSubtitle><span>Feiras de ciência que o projeto ja esteve</span></CommomSubtitle>
            <ContainerFairs>
                <CommomItem size="large">
                    <img src={Febrace.src} alt="Febrace"></img>
                    <h1>Febrace</h1>
                    <p></p>
                </CommomItem>
                <CommomItem size="large">
                    <img src={Femic.src} alt="Femic"></img>
                    <h1>Femic</h1>
                    <p></p>
                </CommomItem>
            </ContainerFairs>
        </CommomContainer>
    );
}