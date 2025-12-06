import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface activeFilters {
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  automatic: boolean;
  manual: boolean;
  van: boolean;
  fullyIntegrated: boolean;
  alcove: boolean;
}

type FiltersStore = {
  activeFilters: activeFilters;
  currentCity: string | null;
  setActiveFilters: (filters: activeFilters) => void;
  setCurrentCity: (city: string | null) => void;
};

export const useFiltersStore = create<FiltersStore>()(
  persist(
    set => ({
      activeFilters: {
        AC: false,
        bathroom: false,
        kitchen: false,
        TV: false,
        radio: false,
        refrigerator: false,
        microwave: false,
        gas: false,
        water: false,
        automatic: false,
        manual: false,
        van: false,
        fullyIntegrated: false,
        alcove: false,
      },
      currentCity: null,
      setActiveFilters: (filters: activeFilters) => set({ activeFilters: filters }),
      setCurrentCity: (city: string | null) => set({ currentCity: city }),
    }),
    {
      name: 'filters-storage',
    }
  )
);
