'use client';

import Image from 'next/image';
import css from './SingleCamperPage.module.css';
import { Camper } from '@/types/camper';
import { useState } from 'react';

type ActiveBlock = 'features' | 'reviews';

export default function SingleCamperPage(camper: Camper) {
  const [activeBlock, setActiveBlock] = useState<ActiveBlock>('features');
  return (
    <div className={css.wrapper}>
      <div className={css.upperBlock}>
        <div className={css.headerBlock}>
          <h2 className={css.title}>{camper.name}</h2>
          <div className={css.lower}>
            <div className={css.reviews}>
              <Image src="/icons/star-gold.svg" alt="star icon" width={16} height={16} />
              <p>
                {camper.rating}({camper.reviews.length} Reviews)
              </p>
            </div>

            <div className={css.location}>
              <Image src="/icons/map-black.svg" alt="map icon" width={16} height={16} />
              <p>{camper.location}</p>
            </div>
          </div>
          <h2 className={css.price}>€{camper.price}.00</h2>
        </div>
        <div className={css.gallery}>
          {camper.gallery.map((img, index) => (
            <div key={index} className={css.imgBlock}>
              <Image src={img.thumb} alt={`camper image ${index + 1}`} className={css.img} fill sizes="282px" />
            </div>
          ))}
        </div>
        <p className={css.about}>{camper.description}</p>
      </div>
      <div className={css.lowerBlock}>
        <div className={css.buttons}>
          <button
            className={`${css.btn} ${activeBlock === 'features' ? css.active : ''}`}
            onClick={() => setActiveBlock('features')}
          >
            Features
          </button>
          <button
            className={`${css.btn} ${activeBlock === 'reviews' ? css.active : ''}`}
            onClick={() => setActiveBlock('reviews')}
          >
            Reviews
          </button>
        </div>
        <div className={css.infoBlock}>
          {activeBlock === 'features' ? (
            <div className={css.featuresBlock}></div>
          ) : (
            <div className={css.reviewsBlock}></div>
          )}
        </div>
      </div>
    </div>
  );
}
