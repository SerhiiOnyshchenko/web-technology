import s from './index.module.css';
import { ReactComponent as IconLogo } from '../../images/svg/Logo.svg';

export default function Logo() {
  return (
    <div className={s.Logo}>
      <IconLogo />
    </div>
  );
}
