import { useMediaQuery } from 'react-responsive';
import Container from 'components/Container/Container';
import Logo from 'components/Logo/Logo';
import s from './index.module.css';
import MobileNav from 'components/MobileNav/MobileNav';

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  return (
    <header>
      <Container>
        <div className={s.HeaderContainer}>
          <Logo />
          {!isMobile ? (
            <>
              <nav>
                <ul className={s.List}>
                  <li className={s.Item + ' ' + s.Active}>
                    <a href="#Services">Services</a>
                  </li>
                  <li className={s.Item}>
                    <a href="#Prices">Prices</a>
                  </li>
                  <li className={s.Item}>
                    <a href="#Portfolio">Portfolio</a>
                  </li>
                  <li className={s.Item}>
                    <a href="#Reviews">Reviews</a>
                  </li>
                </ul>
              </nav>
              <a className={s.Tel} href="tel:+380">
                Request a call
              </a>
            </>
          ) : (
            <MobileNav />
          )}
        </div>
      </Container>
    </header>
  );
}
