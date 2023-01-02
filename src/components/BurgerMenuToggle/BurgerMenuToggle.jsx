import { motion } from 'framer-motion';
import s from './index.module.css';

const Path = props => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);

const transition = { duration: 0.39 };

export default function BurgerMenuToggle({ toggle, isOpen }) {
  return (
    <button onClick={toggle} className={s.Btn}>
      <svg width="27" height="20" viewBox="0 0 23 23">
        <Path
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5', stroke: '#ffffff' },
            open: { d: 'M 3 16.5 L 17 2.5', stroke: '#ffffff' },
          }}
          transition={transition}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          stroke="#ffffff"
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
        />
        <Path
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346', stroke: '#ffffff' },
            open: { d: 'M 3 2.5 L 17 16.346', stroke: '#ffffff' },
          }}
          transition={transition}
        />
      </svg>
    </button>
  );
}
