import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type TransmissionType = 'automatic' | 'manual' | null;
export type EngineType = 'petrol' | 'diesel' | 'hybrid' | null;
export type FormType = 'alcove' | 'van' | 'fullyIntegrated' | null;

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

  transmission: TransmissionType;
  engine: EngineType;
  form: FormType;
};

export type FilterKey = keyof ActiveFilters;

export type FiltersStore = {
  activeFilters: ActiveFilters;
  currentCity: string | null;
  setActiveFilters: (filters: Partial<ActiveFilters>) => void;
  setCurrentCity: (city: string | null) => void;
};

const initialFilters: ActiveFilters = {
  AC: false,
  bathroom: false,
  kitchen: false,
  TV: false,
  radio: false,
  refrigerator: false,
  microwave: false,
  gas: false,
  water: false,

  transmission: null,
  engine: null,
  form: null,
};

export const useFiltersStore = create<FiltersStore>()(
  persist(
    set => ({
      activeFilters: initialFilters,

      currentCity: null,

      setActiveFilters: filters =>
        set(state => ({
          activeFilters: { ...state.activeFilters, ...filters },
        })),

      setCurrentCity: city => set({ currentCity: city }),
    }),
    {
      name: 'filters-storage',
    }
  )
);
