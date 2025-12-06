'use client';

import Select, { components, ClearIndicatorProps } from 'react-select';
import type { StylesConfig } from 'react-select';
import Image from 'next/image';

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

function ClearIndicator(props: ClearIndicatorProps<CityOption, false>) {
  return (
    <components.ClearIndicator {...props}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingRight: 6,
          cursor: 'pointer',
        }}
        onClick={props.clearValue}
      >
        <Image src="/icons/close.svg" alt="Clear" width={18} height={18} />
      </div>
    </components.ClearIndicator>
  );
}

export default function SelectClient(props: SelectProps) {
  return (
    <Select
      {...props}
      isClearable
      components={{
        ClearIndicator,
        IndicatorSeparator: () => null,
      }}
    />
  );
}
