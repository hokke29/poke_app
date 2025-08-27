import styles from "./container.module.scss";

/**
 * コンテナコンポーネント
 * @component ServerComponent
 * @param children - 子要素
 * @param large - 大きなサイズを適用するかどうかのフラグ
 * @returns ReactNode
 */
export default function Container({
  children,
  large = false,
}: {
  children: React.ReactNode;
  large?: boolean;
}) {
  return (
    <div className={large ? styles.large : styles.default}>{children}</div>
  );
}
