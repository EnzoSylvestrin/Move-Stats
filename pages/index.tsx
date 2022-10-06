import type { NextPage } from 'next'
import Head from 'next/head'

import { DivImg, DivText, HomeWrapper } from '../styles/HomeStyled';
import { CommomBtn } from '../styles/Commom';
import Header from '../components/Header';

import celular from '../public/celular.png';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MoveStats</title>
      </Head>

      <Header />

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
    </>
  );
}

export default Home
