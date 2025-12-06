'use client';

import Select from 'react-select';
import type { StylesConfig } from 'react-select';

export type CityOption = {
  value: string;
  label: string;
};

export type SelectProps = {
  options: CityOption[];
  styles: StylesConfig<CityOption, false>;
  placeholder?: string;
  value: CityOption | null;
  onChange: (value: CityOption | null) => void;
};

export default function SelectClient(props: SelectProps) {
  return <Select {...props} />;
}
