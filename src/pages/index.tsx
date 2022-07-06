import { NextPage } from 'next';
import Head from 'next/head';

import { Header } from '../components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Articles Blog</title>
      </Head>

      <Header />
    </>
  );
};

export default Home;
