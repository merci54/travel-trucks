'use client';

import Image from 'next/image';
import css from './SidebarFilters.module.css';
import type { StylesConfig } from 'react-select';

import dynamic from 'next/dynamic';
import type { SelectProps } from './SelectClient';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Select = dynamic<SelectProps>(() => import('./SelectClient'), {
  ssr: false,
});
type CityOption = {
  value: string;
  label: string;
};

export default function SidebarFilter() {
  const [options, setOptions] = useState<CityOption[]>([]);

  useEffect(() => {
    const getCities = async () => {
      try {
        const res = await axios.post('https://countriesnow.space/api/v0.1/countries/cities', {
          country: 'ukraine',
        });
        const cites = res.data.data;
        const options = cites.map((el: string[]) => {
          return { value: el, label: `${el}, Ukraine` };
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

          <Select options={options} styles={customStyles} placeholder="City" />
        </div>
      </div>
      <div className={css.filters}>
        <p className={css.text}>Filters</p>
        <div className={css.equipment}>
          <h3 className={css.subTitle}>Vehicle equipment</h3>
          <ul className={css.menuList}>
            <li className={css.menuItem}>
              <Image src={'/icons/wind.svg'} width={32} height={32} alt="wind icon" />
              <p>AC</p>
            </li>
            <li className={css.menuItem}>
              <Image src={'/icons/diagram.svg'} width={32} height={32} alt="diagram icon" />
              <p>Automatic</p>
            </li>
            <li className={css.menuItem}>
              <Image src={'/icons/cup-hot.svg'} width={32} height={32} alt="cup hot icon" />
              <p>Kitchen</p>
            </li>
            <li className={css.menuItem}>
              <Image src={'/icons/tv.svg'} width={32} height={32} alt="tv icon" />
              <p>TV</p>
            </li>
            <li className={css.menuItem}>
              <Image src={'/icons/shower.svg'} width={32} height={32} alt="shower icon" />
              <p>Bathroom</p>
            </li>
          </ul>
        </div>
        <div className={css.type}>
          <h3 className={css.subTitle}>Vehicle type</h3>
          <ul className={css.menuList}>
            <li className={css.menuItem}>
              <Image src={'/icons/grid.svg'} width={32} height={32} alt="grid icon" />
              <p>Van</p>
            </li>
            <li className={css.menuItem}>
              <Image src={'/icons/grid2.svg'} width={32} height={32} alt="grid icon" />
              <p>Fully Integrated</p>
            </li>
            <li className={css.menuItem}>
              <Image src={'/icons/grid3.svg'} width={32} height={32} alt="grid icon" />
              <p>Alcove</p>
            </li>
          </ul>
        </div>
      </div>
      <button className={css.btn} type="submit">
        Search
      </button>
    </div>
  );
}
