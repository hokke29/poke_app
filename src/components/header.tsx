import Logo from './ui/logo';
import Nav from './ui/nav';
import styles from './header.module.scss';
import Container from './container';

/**
 * ヘッダーコンポーネント
 * @component ServerComponent
 * @returns ReactNode
 */
export default function Header() {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  );
}
