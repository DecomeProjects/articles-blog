import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from './home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Articles Blog</title>
      </Head>

      <div className={styles.homeContainer}>
        <main>
          <span>
            <Image
              width={26}
              height={26}
              src="/images/clapping.png"
              alt="clapping hands"
            />
            Hey, welcome
          </span>

          <div>
            <h2>
              <span className={styles['text-blue']}>Organize</span> and
              <span className={styles['text-blue']}> share </span>
              your thoughts
            </h2>

            <p>
              Let your experience{' '}
              <span className={styles['text-blue']}>reach</span> and{' '}
              <span className={styles['text-blue']}>help</span>
              <br />
              other developers.
            </p>
          </div>

          <button type="button">Share now</button>
        </main>

        <div className={styles.image}>
          <div>
            <Image
              width={668}
              height={1040}
              src="/images/woman-coding.svg"
              alt="woman coding"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
