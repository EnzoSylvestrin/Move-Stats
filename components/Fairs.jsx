import { CommomContainer, CommomTitle, CommomSubtitle, CommomItem, CommomBtn } from '../styles/Commom';
import { ContainerFairs } from '../styles/FairsStyled';

import Febrace from '../public/febrace.jpg';
import Femic from '../public/femic.jpg';

export default function Fairs() {
    return (
        <CommomContainer id="fairs">
            <CommomTitle
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }} //onScroll
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Feiras
            </CommomTitle>
            <CommomSubtitle
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }} //onScroll
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <span>Feiras de ciência em que o projeto ja esteve</span>
            </CommomSubtitle>
            <ContainerFairs>
                <CommomItem
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} //onScroll
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }} 
                    size="large"
                >
                    <img src={Febrace.src} alt="Febrace"></img>
                    <h1>Febrace</h1>
                    <p>A FEBRACE é a Feira Brasileira de Ciências e Engenharia, um movimento criado para estimular a cultura investigativa, a criatividade, a inovação e o empreendedorismo na Educação Básica brasileira.</p>
                    <CommomBtn>
                        <a href="https://www.youtube.com/watch?v=FApfmscYKaY" rel="noopener noreferrer" target="_blank">
                            Ver mais
                        </a>
                    </CommomBtn>
                </CommomItem>
                <CommomItem
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} //onScroll
                    transition={{ duration: 0.6,  delay: 0.8 }}
                    viewport={{ once: true }} 
                    size="large"
                >
                    <img src={Femic.src} alt="Femic"></img>
                    <h1>Femic</h1>
                    <p>A FEMIC é um movimento de promoção e divulgação científica que incentiva a criatividade, a inovação e o protagonismo em estudantes e professores, através de ações diversas de ensino, pesquisa e extensão. </p>
                    <CommomBtn>
                        <a href="https://www.youtube.com/watch?v=u3uDe3JViOk"  rel="noopener noreferrer" target="_blank">
                            Ver mais
                        </a>
                    </CommomBtn>
                </CommomItem>
            </ContainerFairs>
        </CommomContainer>
    );
}