import s from './index.module.css';

export default function Album({ photos = [] }) {
  return (
    <ul className={s.Flex}>
      {photos.map(item => (
        <li key={item.src} className={s.Item}>
          <a href={item.href} target="_blank" rel="noreferrer">
            <img src={item.src} width={item.width} alt="" />
          </a>
        </li>
      ))}
    </ul>
  );
}
