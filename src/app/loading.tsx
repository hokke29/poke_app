import Spinner from '@/components/ui/spinner';
import MainLayout from './(main)/layout';

export default function Loading() {
  return (
    <MainLayout>
      <Spinner />
    </MainLayout>
  );
}
