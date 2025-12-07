'use client';

import { getCamperById } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import css from './CamperPage.module.css';
import Container from '@/components/Container/Container';
import SingleCamperPage from '@/components/SingleCamperPage/SingleCamperPage';

export default function CamperPageClient() {
  const { id } = useParams<{ id: string }>();

  const {
    data: camper,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['camper', id],
    queryFn: () => getCamperById(+id),
    refetchOnMount: false,
  });

  return (
    <div style={{ paddingTop: '48px' }}>
      <Container>
        {camper ? <SingleCamperPage {...camper} /> : <h2>This camper wan`t found! Try again</h2>}
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error! Try again!</p>}
      </Container>
    </div>
  );
}
