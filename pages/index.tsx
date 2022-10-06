import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header';
import Contact from '../components/Contact';
import HomeComponent from '../components/HomeComponent';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MoveStats</title>
      </Head>

      <Header />
      <HomeComponent />
      <Contact />

    </>
  );
}

export default Home
