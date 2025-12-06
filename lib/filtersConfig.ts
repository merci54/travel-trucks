import type {
  ActiveFilters,
  TransmissionOption,
  EngineOption,
  FormOption,
} from '@/lib/filtersStore';

export type FilterKey = keyof ActiveFilters;

export type FilterItem =
  | {
      key: FilterKey;
      label: string;
      icon: string;
      type: 'boolean';
    }
  | {
      key: 'transmission';
      label: string;
      icon: string;
      type: 'string';
      value: TransmissionOption;
    }
  | {
      key: 'engine';
      label: string;
      icon: string;
      type: 'string';
      value: EngineOption;
    };

export type FormFilterItem = {
  key: 'form';
  label: string;
  icon: string;
  type: 'string';
  value: FormOption;
};

export const EQUIPMENT_FILTERS: FilterItem[] = [
  { key: 'AC', label: 'AC', icon: '/icons/wind.svg', type: 'boolean' },
  { key: 'bathroom', label: 'Bathroom', icon: '/icons/shower.svg', type: 'boolean' },
  { key: 'kitchen', label: 'Kitchen', icon: '/icons/cup-hot.svg', type: 'boolean' },
  { key: 'TV', label: 'TV', icon: '/icons/tv.svg', type: 'boolean' },
  { key: 'radio', label: 'Radio', icon: '/icons/radio.svg', type: 'boolean' },
  { key: 'refrigerator', label: 'Fridge', icon: '/icons/fridge.svg', type: 'boolean' },
  { key: 'microwave', label: 'Microwave', icon: '/icons/microwave.svg', type: 'boolean' },
  { key: 'gas', label: 'Gas', icon: '/icons/gas.svg', type: 'boolean' },
  { key: 'water', label: 'Water', icon: '/icons/water.svg', type: 'boolean' },

  {
    key: 'transmission',
    value: 'automatic',
    label: 'Automatic',
    icon: '/icons/diagram.svg',
    type: 'string',
  },
  {
    key: 'transmission',
    value: 'manual',
    label: 'Manual',
    icon: '/icons/diagram.svg',
    type: 'string',
  },

  { key: 'engine', value: 'petrol', label: 'Petrol', icon: '/icons/fuel-pump.svg', type: 'string' },
  { key: 'engine', value: 'diesel', label: 'Diesel', icon: '/icons/fuel-pump.svg', type: 'string' },
  { key: 'engine', value: 'hybrid', label: 'Hybrid', icon: '/icons/fuel-pump.svg', type: 'string' },
];

export const FORM_FILTERS: FormFilterItem[] = [
  { key: 'form', value: 'van', label: 'Van', icon: '/icons/grid.svg', type: 'string' },
  {
    key: 'form',
    value: 'fullyIntegrated',
    label: 'Fully Integrated',
    icon: '/icons/grid2.svg',
    type: 'string',
  },
  { key: 'form', value: 'alcove', label: 'Alcove', icon: '/icons/grid3.svg', type: 'string' },
];
