'use client';

import CampersList from '@/components/CampersList/CampersList';
import { getCampers } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import css from './CatalogPage.module.css';
import Container from '@/components/Container/Container';
import SidebarFilter from '@/components/SidebarFilters/SidebarFilters';

export default function CatalogPage() {
  const [page, setPage] = useState(1);
  const perPage = 4;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['campers'],
    queryFn: getCampers,
  });

  const totalItems = data ? data.total : 0;
  const totalPages = data ? Math.ceil(totalItems / perPage) : 0;

  const paginatedItems = data ? data.items.slice(0, page * perPage) : [];

  const loadMore = () => {
    if (page < totalPages) {
      setPage(prev => prev + 1);
    }
  };

  return (
    <div className={css.container}>
      <Container>
        <div className={css.wrapper}>
          <SidebarFilter />
          <div className={css.catalogList}>
            <CampersList total={totalItems} items={paginatedItems} />
            {totalPages > page ? (
              <button onClick={loadMore} className={css.loadBtn}>
                Load more
              </button>
            ) : (
              ''
            )}
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error loading campers.</p>}
          </div>
        </div>
      </Container>
    </div>
  );
}
