import 'modern-normalize';
import css from './page.module.css';
import Container from '@/components/Container/Container';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={css.home}>
      <Container>
        <div className={css.wrapper}>
          <div className={css.mainBlock}>
            <h1 className={css.title}>Campers of your dreams</h1>
            <p className={css.desc}>You can find everything you want in our catalog</p>

            <Link className={css.btn} href={'/campers'}>
              View Now
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
