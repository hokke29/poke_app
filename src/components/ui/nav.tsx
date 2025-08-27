'use client';

import styles from './nav.module.scss';
import Link from 'next/link';
import { useState } from 'react';

/**
 * ナビゲーションコンポーネント
 * @component clientComponent
 * @returns ReactNode
 */
export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  /** ナビゲーションの開閉を切り替える */
  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
  };

  /** ナビゲーションを閉じる */
  const closeNav = () => {
    setNavIsOpen(false);
  };

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
      )}

      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
      </button>

      <ul className={styles.list}>
        <li>
          <Link href="/" onClick={closeNav}>
            TOP
          </Link>
        </li>
        <li>
          <Link href="/pokemon/page/1" onClick={closeNav}>
            ポケモン一覧
          </Link>
        </li>
        <li>
          <Link href="/favorite" onClick={closeNav}>
            お気に入り一覧
          </Link>
        </li>
      </ul>
    </nav>
  );
}
