'use client';

import Image from 'next/image';
import css from './SidebarFilters.module.css';
import type { StylesConfig } from 'react-select';
import dynamic from 'next/dynamic';
import type { SelectProps } from './SelectClient';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useFiltersStore } from '@/lib/filtersStore';
import { EQUIPMENT_FILTERS, FORM_FILTERS } from '@/lib/filtersConfig';

const Select = dynamic<SelectProps>(() => import('./SelectClient'), {
  ssr: false,
});
type CityOption = {
  value: string;
  label: string;
};

export default function SidebarFilter() {
  const [options, setOptions] = useState<CityOption[]>([]);
  const { activeFilters, setActiveFilters, currentCity, setCurrentCity, applyFilters } =
    useFiltersStore();

  useEffect(() => {
    const getCities = async () => {
      try {
        const res = await axios.post('https://countriesnow.space/api/v0.1/countries/cities', {
          country: 'ukraine',
        });
        const cites = res.data.data;
        const options = cites.map((el: string[]) => {
          return { value: el, label: `Ukraine, ${el}` };
        });
        setOptions(options);
        console.log(options);
      } catch (error) {
        console.error('error', error);
      }
    };
    getCities();
  }, []);

  const customStyles: StylesConfig<CityOption, false> = {
    control: base => ({
      ...base,
      backgroundColor: 'var(--inputs)',
      borderRadius: '12px',
      border: 'none',
      boxShadow: 'none',
      minHeight: '56px',
      height: '56px',
      paddingLeft: '46px',
      paddingTop: '0px',
      paddingBottom: '0px',
      cursor: 'pointer',
    }),

    valueContainer: base => ({
      ...base,
      padding: 0,
      margin: 0,
    }),

    placeholder: base => ({
      ...base,
      color: 'var(--grey)',
      fontSize: '16px',
    }),

    singleValue: base => ({
      ...base,
      color: '#111',
      fontSize: '16px',
    }),

    input: base => ({
      ...base,
      margin: 0,
      padding: 0,
      color: '#111',
    }),

    indicatorSeparator: () => ({
      display: 'none',
    }),

    dropdownIndicator: base => ({
      ...base,
      paddingRight: '12px',
    }),

    menu: base => ({
      ...base,
      borderRadius: '12px',
      marginTop: '6px',
      overflow: 'hidden',
    }),
  };

  return (
    <div className={css.wrapper}>
      <div className={css.location}>
        <label className={css.cityLabel}>Location</label>

        <div className={css.selectWrapper}>
          <Image
            className={css.mapIcon}
            src="/icons/map-black.svg"
            alt="Map"
            width={20}
            height={20}
          />

          <Select
            options={options}
            value={currentCity ? { value: currentCity, label: `Ukraine, ${currentCity}` } : null}
            onChange={city => setCurrentCity(city ? city.value : null)}
            styles={customStyles}
            placeholder="City"
          />
        </div>
      </div>
      <div className={css.filters}>
        <p className={css.text}>Filters</p>
        <div className={css.equipment}>
          <h3 className={css.subTitle}>Vehicle equipment</h3>
          <ul className={css.menuList}>
            {EQUIPMENT_FILTERS.map(filter => {
              let isActive = false;

              if (filter.type === 'boolean') {
                isActive = activeFilters[filter.key] as boolean;
              } else {
                const list = activeFilters[filter.key] as string[];
                isActive = list.includes(filter.value);
              }

              return (
                <li
                  key={filter.label}
                  className={`${css.menuItem} ${isActive ? css.active : ''}`}
                  onClick={() => {
                    if (filter.type === 'boolean') {
                      setActiveFilters({ [filter.key]: !isActive });
                    } else {
                      const list = activeFilters[filter.key] as string[];
                      const next = isActive
                        ? list.filter(v => v !== filter.value)
                        : [...list, filter.value];

                      setActiveFilters({ [filter.key]: next });
                    }
                  }}
                >
                  <Image src={filter.icon} width={32} height={32} alt={filter.label} />
                  <p>{filter.label}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={css.type}>
          <h3 className={css.subTitle}>Vehicle type</h3>
          <ul className={css.menuList}>
            {FORM_FILTERS.map(filter => {
              const list = activeFilters.form;
              const isActive = list.includes(filter.value);

              return (
                <li
                  key={filter.label}
                  className={`${css.menuItem} ${isActive ? css.active : ''}`}
                  onClick={() => {
                    const next = isActive
                      ? list.filter(v => v !== filter.value)
                      : [...list, filter.value];

                    setActiveFilters({ form: next });
                  }}
                >
                  <Image src={filter.icon} width={32} height={32} alt={filter.label} />
                  <p>{filter.label}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <button className={css.btn} type="button" onClick={applyFilters}>
        Search
      </button>
    </div>
  );
}
