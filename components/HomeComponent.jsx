import { DivImg, DivText, HomeWrapper } from '../styles/HomeStyled';
import { CommomBtn } from '../styles/Commom';

import celular from '../public/celular.png';

export default function HomeComponent() {
    return (
        <HomeWrapper>
            <DivText>
                <h1>MoveStats</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, placeat, cum veniam maxime, consectetue.</p>
                <CommomBtn>
                    <span>Baixe agora!</span>
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