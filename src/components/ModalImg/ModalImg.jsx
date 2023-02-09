import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import s from './index.module.css';
import { ReactComponent as Close } from '../../images/svg/Close.svg';

export default function ModalImg({ onClose, img }) {
  const modalRoot = useRef(document.querySelector('#modal-root'));

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
      <button className={s.CloseModal} type="button" onClick={onClose}>
        <Close />
      </button>

      <div className={s.Content}>
        <img src={img} alt="Big" />
      </div>
    </div>,
    modalRoot.current
  );
}
