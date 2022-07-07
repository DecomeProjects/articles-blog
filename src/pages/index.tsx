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
              News about
              <br />
              the <span className={styles['text-blue']}>React</span> world
            </h2>

            <p>
              Get acess to all the publications
              <br />
              <span className={styles['text-blue']}>for $9,90 month</span>
            </p>
          </div>

          <button type="button">Subscribe now</button>
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
