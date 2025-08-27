'use client';

import styles from './spinner.module.scss';

export default function Spinner() {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinner} />
    </div>
  );
}
