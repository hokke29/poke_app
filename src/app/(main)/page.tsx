export const dynamic = 'force-static';

import ContentsContainer from '@/components/contentsContainer';
import Accordion from '@/components/ui/accordion';
import Hero from '@/components/ui/hero';
/**
 * トップページ
 * @page SSG
 * @return ReactNode
 */
export default function Top() {
  return (
    <>
      <Hero title="POKE" subtitle="PokeAPIを使用したポケモン情報収集サイト" />
      <ContentsContainer>
        <Accordion heading="PagesRouter">a</Accordion>
        <Accordion heading="AppRouter">a</Accordion>
        <Accordion heading="CSR">a</Accordion>
        <Accordion heading="SSR">a</Accordion>
        <Accordion heading="SSG">a</Accordion>
        <Accordion heading="ISR">a</Accordion>
        <Accordion heading="クライアントコンポーネント">a</Accordion>
        <Accordion heading="サーバーコンポーネント">a</Accordion>
      </ContentsContainer>
    </>
  );
}
