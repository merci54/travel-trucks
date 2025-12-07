'use client';

import Image from 'next/image';
import css from './SingleCamperPage.module.css';
import { Camper } from '@/types/camper';
import { useState } from 'react';
import { EQUIPMENT_FILTERS } from '@/lib/filtersConfig';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import toast from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type ActiveBlock = 'features' | 'reviews';

interface FormProps {
  name: string;
  email: string;
  date: Date | null;
  comment?: string;
}

export default function SingleCamperPage(camper: Camper) {
  const [activeBlock, setActiveBlock] = useState<ActiveBlock>('features');
  const [startDate, setStartDate] = useState<Date | null>(null);

  const initialValues: FormProps = {
    name: '',
    email: '',
    date: null,
    comment: '',
  };

  const handleSubmit = async (value: FormProps, options: FormikHelpers<FormProps>) => {
    try {
      await new Promise(res => setTimeout(res, 2000));
      console.log(value);
      toast.success('Thank you for booking! Our team will contact you soon.');
      options.resetForm();
    } catch (error) {
      console.log(error);
      toast.error('Error. Try again!');
    } finally {
      options.setSubmitting(false);
    }
  };

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
            <div className={css.featuresBlock}>
              <ul className={css.filters}>
                <li className={css.filtersItem}>
                  <Image src="/icons/diagram.svg" alt="transmission" width={20} height={20} />
                  <p>{camper.transmission[0].toUpperCase() + camper.transmission.slice(1)}</p>
                </li>

                <li className={css.filtersItem}>
                  <Image src="/icons/fuel-pump.svg" alt="engine" width={20} height={20} />
                  <p>{camper.engine[0].toUpperCase() + camper.engine.slice(1)}</p>
                </li>

                {EQUIPMENT_FILTERS.map(filter => {
                  const value = camper[filter.key as keyof Camper];
                  if (value !== true) return null;

                  return (
                    <li key={filter.key} className={css.filtersItem}>
                      <Image src={filter.icon} width={20} height={20} alt={filter.label} />
                      <p>{filter.label}</p>
                    </li>
                  );
                })}
              </ul>

              <div className={css.metricsBlock}>
                <h3 className={css.subTitle}>Vehicle details</h3>

                <ul className={css.detailsList}>
                  <li>
                    <span className={css.detailsText}>Form</span>
                    <span className={css.detailsText}>{camper.form}</span>
                  </li>
                  <li>
                    <span className={css.detailsText}>Length</span>
                    <span className={css.detailsText}>{camper.length}</span>
                  </li>
                  <li>
                    <span className={css.detailsText}>Width</span>
                    <span className={css.detailsText}>{camper.width}</span>
                  </li>
                  <li>
                    <span className={css.detailsText}>Height</span>
                    <span className={css.detailsText}>{camper.height}</span>
                  </li>
                  <li>
                    <span className={css.detailsText}>Tank</span>
                    <span className={css.detailsText}>{camper.tank}</span>
                  </li>
                  <li>
                    <span className={css.detailsText}> Consumption</span>
                    <span className={css.detailsText}>{camper.consumption}</span>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <ul className={css.reviewsList}>
              {camper.reviews.map(review => (
                <li key={review.reviewer_name + review.comment.slice(0, 10)} className={css.reviewsItem}>
                  <div className={css.authorBlock}>
                    <div className={css.authorAvatar}>
                      <h2>{review.reviewer_name.charAt(0).toUpperCase()}</h2>
                    </div>
                    <div className={css.authorName}>
                      <p className={css.authorNameText}>{review.reviewer_name}</p>

                      <Image src={'/icons/star-gold.svg'} width={16} height={16} alt="gold star" />
                      <Image src={'/icons/star-gold.svg'} width={16} height={16} alt="gold star" />
                      <Image src={'/icons/star-gold.svg'} width={16} height={16} alt="gold star" />
                      <Image src={'/icons/star-gold.svg'} width={16} height={16} alt="gold star" />
                      <Image src={'/icons/star-gold.svg'} width={16} height={16} alt="gold star" />
                    </div>
                  </div>
                  <div className={css.reviewContent}>{review.comment}</div>
                </li>
              ))}
            </ul>
          )}
          <div className={css.booking}>
            <h3 className={css.bookingTitle}>Book your campervan now</h3>
            <p className={css.bookingSubtitle}>Stay connected! We are always ready to help you.</p>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {({ isSubmitting }) => (
                <Form className={css.form}>
                  <Field className={css.input} type="text" name="name" placeholder="Name*" required />
                  <Field className={css.input} type="email" name="email" placeholder="Email*" required />
                  <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    placeholderText="Booking date*"
                    className={css.input}
                    minDate={new Date()}
                  />
                  <Field
                    as="textarea"
                    className={`${css.input} ${css.commentInput}`}
                    name="comment"
                    placeholder="Comment"
                  />
                  <button className={css.submitBtn} type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
