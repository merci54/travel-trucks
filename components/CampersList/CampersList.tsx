import { Camper } from '@/types/camper';
import CamperCard from '../CamperCard/CamperCard';
import css from './CampersList.module.css';
import { useFiltersStore } from '@/lib/filtersStore';
import { filterCampers } from '@/lib/filterCampers';

interface CampersListProps {
  total: number;
  items: Camper[];
}

export default function CampersList({ items }: CampersListProps) {
  const { appliedCity, appliedFilters } = useFiltersStore();

  const filtered = filterCampers(items, appliedFilters, appliedCity);

  return (
    <>
      <ul className={css.list}>
        {filtered.length === 0 ? (
          <p>No campers match your filters</p>
        ) : (
          filtered.map(camper => <CamperCard key={camper.id} {...camper} />)
        )}
      </ul>
    </>
  );
}
