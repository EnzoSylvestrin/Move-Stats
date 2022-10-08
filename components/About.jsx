import { CommomContainer } from '../styles/Commom';
import { ContainerAbout } from '../styles/AboutStyled';

import imagem from '../public/deficientevisual.png';

export default function About() {
    return (
        <ContainerAbout>
            <div className='wrapper-img'>
                <img src={imagem.src} alt="deficiente visual com um celular!"></img>
            </div>
            <div className='about-text'>
                <h1>O que é o MoveStats?</h1>
                <p>
                    O projeto MoveStats tem como objetivo principal desenvolver um aplicativo para uma melhor
                    locomoção de deficientes visuais nos ambientes urbanos, além de promover um maior
                    conforto para os mesmos.
                    <br /><br />
                    O aplicativo procura por locais proximos a coordenada do usuário e reproduz de forma audivel
                    a localização, podendo filtrar pelo tipo de estabecimentos.
                </p>
            </div>
        </ContainerAbout>
    ); 
}