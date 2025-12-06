import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type TransmissionOption = 'automatic' | 'manual';
export type EngineOption = 'petrol' | 'diesel' | 'hybrid';
export type FormOption = 'van' | 'fullyIntegrated' | 'alcove';

export type ActiveFilters = {
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;

  transmission: TransmissionOption[];
  engine: EngineOption[];
  form: FormOption[];
};

export type FiltersStore = {
  activeFilters: ActiveFilters;
  currentCity: string | null;

  appliedFilters: ActiveFilters;
  appliedCity: string | null;

  setActiveFilters: (filters: Partial<ActiveFilters>) => void;
  setCurrentCity: (city: string | null) => void;
  applyFilters: () => void;
};

export const initialFilters: ActiveFilters = {
  AC: false,
  bathroom: false,
  kitchen: false,
  TV: false,
  radio: false,
  refrigerator: false,
  microwave: false,
  gas: false,
  water: false,

  transmission: [],
  engine: [],
  form: [],
};

export const useFiltersStore = create<FiltersStore>()(
  persist(
    set => ({
      activeFilters: initialFilters,
      currentCity: null,

      appliedFilters: initialFilters,
      appliedCity: null,

      setActiveFilters: filters =>
        set(state => ({
          activeFilters: { ...state.activeFilters, ...filters },
        })),

      setCurrentCity: city => set({ currentCity: city }),

      applyFilters: () =>
        set(state => ({
          appliedFilters: state.activeFilters,
          appliedCity: state.currentCity,
        })),
    }),
    { name: 'filters-storage' }
  )
);
