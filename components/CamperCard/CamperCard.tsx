'use client';

import Image from 'next/image';
import css from './CamperCard.module.css';
import Link from 'next/link';

export default function CamperCard() {
  return (
    <li className={css.card}>
      <div className={css.img}>
        <Image src="/vehicles/vehicle1.png" alt="vehicle image" width={292} height={320} />
      </div>
      <div className={css.content}>
        <div className={css.cardHeader}>
          <div className={css.upper}>
            <h2 className={css.title}>Mavericks</h2>
            <div>
              <h2>€8000.00</h2>

              <div className={css.heartIcon}></div>
            </div>
          </div>
          <div className={css.lower}>
            <div className={css.reviews}>
              <Image src={'/icons/star-gold.svg'} alt="star icon" width={16} height={16} />
              <p>4.4(2 Reviews)</p>
            </div>
            <div className={css.location}>
              <Image src={'/icons/map-black.svg'} alt="map icon" width={16} height={16} />
              <p>Kyiv, Ukraine</p>
            </div>
          </div>
        </div>
        <p className={css.about}>
          Embrace simplicity and freedom with the Mavericks panel truck...
        </p>
        <ul className={css.filters}>
          <li className={css.filtersItem}>
            <Image src={'/icons/diagram.svg'} alt="diagram icon" width={20} height={20} />
            <p>Automatic</p>
          </li>
          <li className={css.filtersItem}>
            <Image src={'/icons/gas.svg'} alt="gas icon" width={20} height={20} />
            <p>Petrol</p>
          </li>
          <li className={css.filtersItem}>
            <Image src={'/icons/cup-hot.svg'} alt="cup icon" width={20} height={20} />
            <p>Kitchen</p>
          </li>
          <li className={css.filtersItem}>
            <Image src={'/icons/wind.svg'} alt="wind icon" width={20} height={20} />
            <p>AC</p>
          </li>
        </ul>
        <Link className={css.btn} href={'/campers/1'}>
          Show More
        </Link>
      </div>
    </li>
  );
}
