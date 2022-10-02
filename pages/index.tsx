import type { NextPage } from 'next'
import Head from 'next/head'

import { DivImg, DivText, HomeWrapper } from '../styles/HomeStyled';

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
          <p>MoveStats</p>
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
