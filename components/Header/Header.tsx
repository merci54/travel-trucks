'use client';

import { usePathname } from 'next/navigation';
import css from './Header.module.css';
import Link from 'next/link';
import Container from '../Container/Container';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();
  return (
    <header className={css.header}>
      <Container>
        <div className={css.wrapper}>
          <Link className={css.logo} href="/">
            <Image src="/logo/logo.svg" alt="TravelTrucks" width={136} height={16} />
          </Link>

          <ul className={css.menuList}>
            <li className={`${css.menuItem} ${pathname === '/' ? css.active : ''}`}>
              <Link href="/">Home</Link>
            </li>
            <li className={`${css.menuItem} ${pathname === '/campers' ? css.active : ''}`}>
              <Link href="/campers">Catalog</Link>
            </li>
          </ul>
          <div className={css.empty}> </div>
        </div>
      </Container>
    </header>
  );
}
