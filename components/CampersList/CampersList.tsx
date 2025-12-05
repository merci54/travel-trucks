import { Camper } from '@/types/camper';
import CamperCard from '../CamperCard/CamperCard';
import css from './CampersList.module.css';

interface CampersListProps {
  total: number;
  items: Camper[];
}

export default function CampersList({ items, total }: CampersListProps) {
  return (
    <>
      <ul className={css.list}>
        {items.map(camper => (
          <CamperCard key={camper.id} />
        ))}
      </ul>
    </>
  );
}
