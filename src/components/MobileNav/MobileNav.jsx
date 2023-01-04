import BurgerMenuToggle from 'components/BurgerMenuToggle/BurgerMenuToggle';
import Button from 'components/Button/Button';
import Nav from 'components/Nav/Nav';
import s from './index.module.css';

export default function MobileNav({ isOpen, setOpen }) {
  return (
    <>
      <BurgerMenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <div className={s.navWrapper}>
          <Nav toggle={() => setOpen(!isOpen)} />
          <a className={s.Tel} href="tel:+380">
            <Button active={true}>Request a call</Button>
          </a>
        </div>
      )}
    </>
  );
}
