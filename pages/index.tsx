import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header';
import Contact from '../components/Contact';
import HomeComponent from '../components/HomeComponent';
import About from '../components/About';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MoveStats</title>
      </Head>

      <Header />
      <HomeComponent />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Home
