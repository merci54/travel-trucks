import Container from '@/components/Container/Container';
import css from './LayoutFilters.module.css';

interface Props {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export default function LayoutFilters({ sidebar, children }: Props) {
  return (
    <div className={css.container}>
      <Container>
        <div className={css.wrapper}>
          <aside className={css.sidebar}>{sidebar}</aside>
          <div className={css.notesWrapper}>{children}</div>
        </div>
      </Container>
    </div>
  );
}
