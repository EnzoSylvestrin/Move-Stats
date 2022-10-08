import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header';
import HomeComponent from '../components/HomeComponent';
import About from '../components/About';
import Fairs from '../components/Fairs';
import People from '../components/People';
import Contact from '../components/Contact';
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
      <Fairs />
      <People />
      <Contact />
      <Footer />
    </>
  );
}

export default Home
