import BurgerMenuToggle from 'components/BurgerMenuToggle/BurgerMenuToggle';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import Nav from 'components/Nav/Nav';
import { useState } from 'react';
import s from './index.module.css';
import { useTranslation } from 'react-i18next';
import ButtonLanguage from 'components/ButtonLanguage/ButtonLanguage';

export default function MobileNav({ isOpen, setOpen }) {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <BurgerMenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <div className={s.navWrapper}>
          <ButtonLanguage />
          <Nav toggle={() => setOpen(!isOpen)} />
          <Button
            onClick={() => {
              setShowModal(true);
            }}
            active={true}
          >
            {t('Button')}
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
