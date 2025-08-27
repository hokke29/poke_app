'use client';

import { useEffect } from 'react';
import MainLayout from './(main)/layout';
import ContentsContainer from '@/components/contentsContainer';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // エラーをエラー報告サービスにログ記録する
    console.error(error);
  }, [error]);

  return (
    <MainLayout>
      <ContentsContainer>
        <h2>エラーが発生しました。</h2>
        <button
          className="button"
          onClick={
            // セグメントを再レンダリングすることで回復を試みる
            () => reset()
          }
        >
          再接続
        </button>
      </ContentsContainer>
    </MainLayout>
  );
}
