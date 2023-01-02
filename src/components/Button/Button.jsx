import React from 'react';
import s from './index.module.css';

export default function Button({
  wd = 'auto',
  mg = 0,
  active = false,
  children,
}) {
  return (
    <button
      type="button"
      className={active ? `${s.Btn} ${s.Active}` : s.Btn}
      style={{ width: wd, margin: mg }}
    >
      {children}
    </button>
  );
}
