import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import s from './index.module.css';
import { ReactComponent as ArrowUp } from '../../images/svg/up-arrow.svg';
import Container from 'components/Container/Container';

export default function ScrollUp() {
  const buttonScrollToTop = useRef();
  window.onscroll = () => scrollToTopFunction();
  const isMobile = useMediaQuery({ maxWidth: 1123 });

  function scrollToTopFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      buttonScrollToTop.current.style.display = 'flex';
    } else {
      buttonScrollToTop.current.style.display = 'none';
    }
  }

  const onClickBtn = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      {isMobile ? (
        <button></button>
      ) : (
        <button
          ref={buttonScrollToTop}
          id="BtnScrollToTop"
          onClick={onClickBtn}
          type="button"
          className={s.Btn}
        >
          <ArrowUp />
        </button>
      )}
    </Container>
  );
}
