import styles from './styles.module.scss';

export function Header() {
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

        <button type="button">Sign in with Github</button>
      </div>
    </header>
  );
}
