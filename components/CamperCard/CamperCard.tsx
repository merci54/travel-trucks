'use client';

import Image from 'next/image';
import css from './CamperCard.module.css';
import Link from 'next/link';
import { Camper } from '@/types/camper';
import { EQUIPMENT_FILTERS } from '@/lib/filtersConfig';

export default function CamperCard(props: Camper) {
  return (
    <li className={css.card}>
      <div className={css.imgBlock}>
        <Image
          src={props.gallery[0].thumb}
          alt="vehicle image"
          fill
          className={css.img}
          sizes="292px"
        />
      </div>

      <div className={css.content}>
        <div className={css.cardHeader}>
          <div className={css.upper}>
            <h2 className={css.title}>{props.name}</h2>
            <div>
              <h2>€{props.price}.00</h2>
              <div className={css.heartIcon}></div>
            </div>
          </div>

          <div className={css.lower}>
            <div className={css.reviews}>
              <Image src="/icons/star-gold.svg" alt="star icon" width={16} height={16} />
              <p>
                {props.rating}({props.reviews.length} Reviews)
              </p>
            </div>

            <div className={css.location}>
              <Image src="/icons/map-black.svg" alt="map icon" width={16} height={16} />
              <p>{props.location}</p>
            </div>
          </div>
        </div>

        <p className={css.about}>{props.description.slice(0, 60)}...</p>

        <ul className={css.filters}>
          <li className={css.filtersItem}>
            <Image src="/icons/diagram.svg" alt="transmission" width={20} height={20} />
            <p>{props.transmission[0].toUpperCase() + props.transmission.slice(1)}</p>
          </li>

          <li className={css.filtersItem}>
            <Image src="/icons/fuel-pump.svg" alt="engine" width={20} height={20} />
            <p>{props.engine[0].toUpperCase() + props.engine.slice(1)}</p>
          </li>

          {EQUIPMENT_FILTERS.map(filter => {
            const value = props[filter.key as keyof Camper];

            if (value !== true) return null;

            return (
              <li key={filter.key} className={css.filtersItem}>
                <Image src={filter.icon} width={20} height={20} alt={filter.label} />
                <p>{filter.label}</p>
              </li>
            );
          })}
        </ul>

        <Link className={css.btn} href={`/campers/${props.id}`}>
          Show More
        </Link>
      </div>
    </li>
  );
}
