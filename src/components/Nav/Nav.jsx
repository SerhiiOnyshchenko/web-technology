import React from 'react';
import s from './index.module.css';

export default function Nav({ toggle }) {
  return (
    <nav>
      <ul className={s.List}>
        <li className={s.Item} onClick={toggle}>
          <a href="#Services">Services</a>
        </li>
        <li className={s.Item} onClick={toggle}>
          <a href="#Prices">Prices</a>
        </li>
        <li className={s.Item} onClick={toggle}>
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li className={s.Item} onClick={toggle}>
          <a href="#Reviews">Reviews</a>
        </li>
      </ul>
    </nav>
  );
}
