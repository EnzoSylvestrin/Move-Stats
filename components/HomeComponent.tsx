import { DivImg, DivText, HomeWrapper } from '../styles/HomeStyled';
import { CommomBtn, CommomTitle } from '../styles/Commom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import celular from '../public/celular.png';

export default function HomeComponent() {

    const DoToast = () => {
        toast('O aplicativo ainda não está disponível 😭', {
            position: "bottom-left",
            autoClose: 1500,
            pauseOnHover: false,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
        });
    }

    return (
        <HomeWrapper id="home">
            <DivText>
                <CommomTitle>MoveStats</CommomTitle>
                <p>
                    Com o MoveStats sua locomoção se torna, mais segura, rápida e eficiente.
                    <br />
                    Disponivel para todos os tipos de celulares.
                </p>
                <CommomBtn>
                    <a onClick={DoToast}>Baixe agora!</a>
                </CommomBtn>
                <ToastContainer />
                </DivText>
                <DivImg>
                <div className='Blob'>
                    <img src={celular.src} alt="celular"></img>
                </div>
            </DivImg>
      </HomeWrapper>
    ); 
}