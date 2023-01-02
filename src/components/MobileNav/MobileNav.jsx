import BurgerMenuToggle from 'components/BurgerMenuToggle/BurgerMenuToggle';
import Button from 'components/Button/Button';
import { useState } from 'react';

import s from './index.module.css';

export default function MobileNav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <BurgerMenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <div className={s.navWrapper}>
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
            <Button active={true}>Request a call</Button>
          </a>
        </div>
      )}
    </>
  );
}
