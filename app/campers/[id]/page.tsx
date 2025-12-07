import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getCamperById } from '@/lib/api';
import CamperPageClient from './CamperPage.client';

interface Props {
  params: { id: string };
}

export default async function CamperPage({ params }: Props) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['camper', params.id],
    queryFn: () => getCamperById(Number(params.id)),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CamperPageClient />
    </HydrationBoundary>
  );
}
