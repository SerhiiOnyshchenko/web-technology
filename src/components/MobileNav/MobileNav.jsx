import BurgerMenuToggle from 'components/BurgerMenuToggle/BurgerMenuToggle';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import Nav from 'components/Nav/Nav';
import { useState } from 'react';
import s from './index.module.css';

export default function MobileNav({ isOpen, setOpen }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <BurgerMenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <div className={s.navWrapper}>
          <Nav toggle={() => setOpen(!isOpen)} />
          <Button
            onClick={() => {
              setShowModal(true);
            }}
            active={true}
          >
            Get a free consultation
          </Button>
          {showModal && (
            <Modal
              onClose={() => {
                setShowModal(false);
              }}
            />
          )}
        </div>
      )}
    </>
  );
}
