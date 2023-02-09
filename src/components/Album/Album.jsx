import ModalImg from 'components/ModalImg/ModalImg';
import { useState } from 'react';
import s from './index.module.css';

export default function Album({ photos = [] }) {
  const [img, setImg] = useState('');
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ul className={s.Flex}>
        {photos.map(item => (
          <li
            key={item.src}
            className={s.Item}
            onClick={() => {
              setImg(item.largeSrc);
              setOpen(true);
            }}
          >
            {/* <a href={item.href} target="_blank" rel="noreferrer"> */}
            <img src={item.src} width={item.width} alt="" />
            {/* </a> */}
          </li>
        ))}
      </ul>
      {isOpen && <ModalImg onClose={() => setOpen(false)} img={img} />}
    </>
  );
}
