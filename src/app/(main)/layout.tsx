import Container from '@/components/container';
import Footer from '@/components/footer';
import Header from '@/components/header';

/**
 * メインレイアウト
 * @param children - 子要素
 * @returns ReactNode
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}
