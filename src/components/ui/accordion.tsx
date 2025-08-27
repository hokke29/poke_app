'use client';

import styles from './accordion.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';

/**
 * アコーディオンコンポーネント
 * @component ClientComponent
 * @param heading - 見出し
 * @param children - 子要素
 * @returns ReactNode
 */
export default function Accordion({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  const [textIsOpen, setTextIsOpen] = useState(false);

  /** アコーディオンの開閉を切り替え */
  const toggleText = () => {
    setTextIsOpen((prev) => !prev);
  };

  const refText = useRef<HTMLDivElement>(null);

  return (
    <div className={textIsOpen ? styles.open : styles.close}>
      <h3 className={styles.heading}>
        <button onClick={toggleText}>
          {heading}
          <FontAwesomeIcon icon={faCircleChevronDown} className={styles.icon} />
        </button>
        <div
          className={styles.text}
          ref={refText}
          style={
            {
              '--text-height': refText.current
                ? `${refText.current.scrollHeight}`
                : '0px',
            } as React.CSSProperties
          }
        >
          <div className={styles.textInner}>{children}</div>
        </div>
      </h3>
    </div>
  );
}
