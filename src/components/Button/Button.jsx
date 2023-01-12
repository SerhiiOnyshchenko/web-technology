import React from 'react';
import s from './index.module.css';

export default function Button({
  wd = 'auto',
  mg = 0,
  active = false,
  children,
  onClick,
}) {
  return (
    <button
      type="button"
      className={active ? s.Active : s.Btn}
      style={{ width: wd, margin: mg }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
