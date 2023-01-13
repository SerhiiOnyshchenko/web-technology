import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import s from './index.module.css';
import { ReactComponent as Close } from '../../images/svg/Close.svg';
import Logo from 'components/Logo/Logo';
import Form from 'components/Form/Form';
import FormSection from 'components/FormSection/FormSection';
import { useMediaQuery } from 'react-responsive';

export default function Modal({ onClose }) {
  const modalRoot = useRef(document.querySelector('#modal-root'));
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  useEffect(() => {
    window.addEventListener('keydown', closeModalEscKey);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function closeModalEscKey(e) {
    if (e.currentTarget === e.target) {
      onClose();
    }
    if (e.code === 'Escape') {
      onClose();
      window.removeEventListener('keydown', closeModalEscKey);
    }
  }

  return createPortal(
    <div className={s.Backdrop} onClick={closeModalEscKey}>
      {isMobile ? (
        <div className={s.Wrapper}>
          <Logo />
          <button className={s.CloseModal} type="button" onClick={onClose}>
            <Close />
          </button>
        </div>
      ) : (
        <button className={s.CloseModal} type="button" onClick={onClose}>
          <Close />
        </button>
      )}

      <div className={s.Content}>{!isMobile ? <FormSection /> : <Form />}</div>
    </div>,
    modalRoot.current
  );
}
