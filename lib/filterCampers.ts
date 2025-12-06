import { Camper } from '@/types/camper';
import { ActiveFilters } from '@/lib/filtersStore';

export function filterCampers(campers: Camper[], filters: ActiveFilters, city: string | null) {
  return campers.filter(camper => {
    if (city && !camper.location.toLowerCase().includes(city.toLowerCase())) {
      return false;
    }

    const booleanKeys: (keyof ActiveFilters)[] = [
      'AC',
      'bathroom',
      'kitchen',
      'TV',
      'radio',
      'refrigerator',
      'microwave',
      'gas',
      'water',
    ];

    for (const key of booleanKeys) {
      if (filters[key] && !camper[key as keyof Camper]) {
        return false;
      }
    }

    // transmission
    if (filters.transmission.length && !filters.transmission.includes(camper.transmission)) {
      return false;
    }

    // engine
    if (filters.engine.length && !filters.engine.includes(camper.engine)) {
      return false;
    }

    // form
    if (filters.form.length && !filters.form.includes(camper.form)) {
      return false;
    }

    return true;
  });
}
