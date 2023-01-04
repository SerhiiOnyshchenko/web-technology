import { useMediaQuery } from 'react-responsive';
import Container from 'components/Container/Container';
import Logo from 'components/Logo/Logo';
import s from './index.module.css';
import MobileNav from 'components/MobileNav/MobileNav';
import Nav from 'components/Nav/Nav';
import { useState } from 'react';

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={isOpen ? s.Header : ''}>
      <Container>
        <div className={s.HeaderContainer}>
          <Logo />
          {!isMobile ? (
            <>
              <Nav />
              <a className={s.Tel} href="tel:+380">
                Request a call
              </a>
            </>
          ) : (
            <MobileNav isOpen={isOpen} setOpen={setOpen} />
          )}
        </div>
      </Container>
    </header>
  );
}
