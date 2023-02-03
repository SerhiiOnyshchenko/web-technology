import React from 'react';
import s from './index.module.css';
import { useTranslation } from 'react-i18next';
import ButtonLanguage from 'components/ButtonLanguage/ButtonLanguage';

export default function Nav({ toggle }) {
  const { t } = useTranslation();
  return (
    <nav>
      <ul className={s.List}>
        <li className={s.Item} onClick={toggle}>
          <a href="#Services">{t('Services')}</a>
        </li>
        <li className={s.Item} onClick={toggle}>
          <a href="#Prices">{t('Prices')}</a>
        </li>
        <li className={s.Item} onClick={toggle}>
          <a href="#Portfolio">{t('Portfolio')}</a>
        </li>
        <li className={s.Item} onClick={toggle}>
          <a href="#Reviews">{t('Reviews')}</a>
        </li>
      </ul>
      <ButtonLanguage />
    </nav>
  );
}
