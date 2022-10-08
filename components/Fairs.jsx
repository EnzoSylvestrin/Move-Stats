import { CommomContainer, CommomTitle, CommomSubtitle, CommomItem, CommomBtn } from '../styles/Commom';
import { ContainerFairs } from '../styles/FairsStyled';

import Febrace from '../public/febrace.jpg';
import Femic from '../public/femic.jpg';

export default function Fairs() {
    return (
        <CommomContainer light id="fairs">
            <CommomTitle>Feiras</CommomTitle>
            <CommomSubtitle><span>Feiras de ciência que o projeto ja esteve</span></CommomSubtitle>
            <ContainerFairs>
                <CommomItem size="large">
                    <img src={Febrace.src} alt="Febrace"></img>
                    <h1>Febrace</h1>
                    <p>A FEBRACE é a Feira Brasileira de Ciências e Engenharia, um movimento criado para estimular a cultura investigativa, a criatividade, a inovação e o empreendedorismo na Educação Básica brasileira.</p>
                    <CommomBtn><span>Ver mais</span></CommomBtn>
                </CommomItem>
                <CommomItem size="large">
                    <img src={Femic.src} alt="Femic"></img>
                    <h1>Femic</h1>
                    <p>A FEMIC é um movimento de promoção e divulgação científica que incentiva a criatividade, a inovação e o protagonismo em estudantes e professores, através de ações diversas de ensino, pesquisa e extensão. </p>
                    <CommomBtn><span>Ver mais</span></CommomBtn>
                </CommomItem>
            </ContainerFairs>
        </CommomContainer>
    );
}