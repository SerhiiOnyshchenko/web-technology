import React from 'react';
import s from './index.module.css';

export default function Container({ children }) {
  return <div className={s.Container}>{children}</div>;
}
