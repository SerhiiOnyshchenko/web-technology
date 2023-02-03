import { useMediaQuery } from 'react-responsive';
import Container from 'components/Container/Container';
import Logo from 'components/Logo/Logo';
import s from './index.module.css';
import MobileNav from 'components/MobileNav/MobileNav';
import Nav from 'components/Nav/Nav';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const [isOpen, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <header className={s.Header}>
      <Container>
        <div className={isOpen ? s.HeaderContainerFix : s.HeaderContainer}>
          <Logo />
          {!isMobile ? (
            <>
              <Nav />
              <button
                type="button"
                className={s.Request}
                onClick={() => {
                  setShowModal(true);
                }}
              >
                Get a free consultation
              </button>
            </>
          ) : (
            <MobileNav isOpen={isOpen} setOpen={setOpen} />
          )}
        </div>
        {showModal && (
          <Modal
            onClose={() => {
              setShowModal(false);
            }}
          />
        )}
      </Container>
    </header>
  );
}
