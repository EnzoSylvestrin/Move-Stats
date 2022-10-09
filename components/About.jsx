import { AboutText, ContainerAbout, WrapperImg } from '../styles/AboutStyled';

import imagem from '../public/deficientevisual.png';

export default function About() {
    return (
        <ContainerAbout id="about">
            <WrapperImg
                initial={{ x: -350, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }} //onScroll
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
            >
                <img src={imagem.src} alt="deficiente visual com um celular!"></img>
            </WrapperImg>
            <AboutText
                initial={{ x: 350, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }} //onScroll
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
            >
                <h1>O que é o MoveStats?</h1>
                <p>
                    O projeto MoveStats tem como objetivo principal desenvolver um aplicativo para uma melhor
                    locomoção de deficientes visuais nos ambientes urbanos, além de promover um maior
                    conforto para os mesmos.
                    <br /><br />
                    O aplicativo procura por locais proximos a coordenada do usuário e reproduz de forma audivel
                    a localização, podendo filtrar pelo tipo de estabecimentos.
                </p>
            </AboutText>
        </ContainerAbout>
    ); 
}