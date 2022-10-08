import { DivImg, DivText, HomeWrapper } from '../styles/HomeStyled';
import { CommomBtn, CommomTitle } from '../styles/Commom';

import celular from '../public/celular.png';

export default function HomeComponent() {
    return (
        <HomeWrapper id="home">
            <DivText>
                <CommomTitle>MoveStats</CommomTitle>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, placeat, cum veniam maxime, consectetue.</p>
                <CommomBtn>
                    <a href="#" rel="noopener noreferrer" target="_blank">Baixe agora!</a>
                </CommomBtn>
                </DivText>
                <DivImg>
                <div className='Blob'>
                    <img src={celular.src} alt="celular"></img>
                </div>
            </DivImg>
      </HomeWrapper>
    ); 
}