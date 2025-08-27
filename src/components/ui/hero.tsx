import styles from './hero.module.scss';

/**
 * ヒーローコンポーネント
 * @component ServerComponent
 * @param title - タイトル
 * @param subtitle - サブタイトル
 * @returns ReactNode
 */
export default function Hero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p>このページの生成時刻: {new Date().toLocaleString()}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
}
