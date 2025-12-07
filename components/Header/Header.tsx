'use client';

import css from './Header.module.css';
import Link from 'next/link';
import Container from '../Container/Container';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.wrapper}>
          <Link className={css.logo} href="/">
            <Image src="/logo/logo.svg" alt="TravelTrucks" width={136} height={16} />
          </Link>

          <ul className={css.menuList}>
            <li className={css.menuItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={css.menuItem}>
              <Link href="/campers">Catalog</Link>
            </li>
          </ul>
          <div className={css.empty}> </div>
        </div>
      </Container>
    </header>
  );
}
