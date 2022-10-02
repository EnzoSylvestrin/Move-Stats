import type { NextPage } from 'next'
import Head from 'next/head'

import { HomeWrapper } from '../styles/Home';

import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MoveStats</title>
      </Head>

      <Header />
      
      <HomeWrapper>        
      </HomeWrapper>
    </>
  );
}

export default Home
