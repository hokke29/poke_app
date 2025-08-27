import ContentsContainer from '@/components/contentsContainer';
import Hero from '@/components/ui/hero';

/**
 * レイアウト
 * @param children - 子要素
 * @returns ReactNode
 */
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Hero title="ポケモン一覧" subtitle="PokeAPIで取得した一覧ページ" />
      <ContentsContainer>{children}</ContentsContainer>
    </>
  );
}
