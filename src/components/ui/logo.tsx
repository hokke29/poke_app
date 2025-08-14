import styles from './logo.module.scss';
import Link from 'next/link';

/**
 * ロゴコンポーネント
 * @component ServerComponent
 * @param boxOn - ボックス表示フラグ
 * @returns ReactNode
 */
export default function Logo({ boxOn = false }) {
  return (
    <Link href="/" className={boxOn ? styles.box : styles.basic}>
      POKE
    </Link>
  );
}
