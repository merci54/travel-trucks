import { Camper } from '@/types/camper';
import { ActiveFilters } from '@/lib/filtersStore';

export function filterCampers(
  campers: Camper[],
  filters: ActiveFilters,
  city: string | null
): Camper[] {
  return campers.filter(camper => {
    if (city && !camper.location.toLowerCase().includes(city.toLowerCase())) {
      return false;
    }

    const booleanKeys = [
      'AC',
      'bathroom',
      'kitchen',
      'TV',
      'radio',
      'refrigerator',
      'microwave',
      'gas',
      'water',
    ] as const;

    for (const key of booleanKeys) {
      if (filters[key] === true && camper[key] !== true) {
        return false;
      }
    }

    if (filters.transmission && camper.transmission !== filters.transmission) {
      return false;
    }

    if (filters.engine && camper.engine !== filters.engine) {
      return false;
    }

    if (filters.form && camper.form !== filters.form) {
      return false;
    }

    return true;
  });
}
