import Link from 'next/link';
import MainLayout from './(main)/layout';
import ContentsContainer from '@/components/contentsContainer';

export default function NotFound() {
  return (
    <MainLayout>
      <ContentsContainer>
        <h2>404 - ページが見つかりません</h2>
        <p>指定されたページは存在しません。</p>
        <Link href="/">
          <button className="button">TOPへ戻る</button>
        </Link>
      </ContentsContainer>
    </MainLayout>
  );
}
