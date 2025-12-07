import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getCamperById } from '@/lib/api';
import CamperPageClient from './CamperPage.client';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function CamperPage({ params }: Props) {
  const queryClient = new QueryClient();
  const { id } = await params;

  await queryClient.prefetchQuery({
    queryKey: ['camper', id],
    queryFn: () => getCamperById(Number(id)),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CamperPageClient />
    </HydrationBoundary>
  );
}
