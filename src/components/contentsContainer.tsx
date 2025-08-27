import { ReactNode } from 'react';
import styles from './contentsContainer.module.scss';

/**
 * Contentsコンテナ
 * @component ServerComponent
 * @param children - 子要素
 * @returns ReactNode
 */
export default function ContentsContainer({
  children,
}: {
  children: ReactNode;
}) {
  return <div className={styles.stack}>{children}</div>;
}
