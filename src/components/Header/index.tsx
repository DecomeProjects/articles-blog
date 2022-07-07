import { useSession } from 'next-auth/react';

import { SignInButton } from './SignInButton';
import { Profile } from './Profile';
import styles from './styles.module.scss';

export function Header() {
  const { data: session } = useSession();

  return (
    <header className={styles.headerContainer}>
      <div id={styles.wrapper}>
        <div>
          <h1>Articles Blog</h1>

          <nav className={styles.navigation}>
            <ul>
              <li className={styles.active}>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Posts</a>
              </li>
            </ul>
          </nav>
        </div>

        {!session ? <SignInButton /> : <Profile session={session} />}
      </div>
    </header>
  );
}
