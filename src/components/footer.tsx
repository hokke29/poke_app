import styles from './footer.module.scss';
import Container from './container';
import Logo from './ui/logo';

/**
 * フッターコンポーネント
 * @component ServerComponent
 * @returns ReactNode
 */
export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
        </div>
      </Container>
    </footer>
  );
}
