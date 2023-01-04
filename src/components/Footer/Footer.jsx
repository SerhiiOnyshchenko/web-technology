import Container from 'components/Container/Container';
import Nav from 'components/Nav/Nav';
import s from './index.module.css';

export default function Footer() {
  return (
    <footer className={s.Footer}>
      <Container>
        <Nav />
        <div className={s.Line}></div>
        <div className={s.Wrapper}>
          <p className={s.Text}>© 2023 Web Technology</p>
          <div className={s.Links}>
            <p>Terms of Service Privacy Policy</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
