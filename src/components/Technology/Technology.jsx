import Container from 'components/Container/Container';
import s from './index.module.css';

export default function Technology() {
  return (
    <section className={s.Technology}>
      <Container>
        <div className={s.Container}>
          <h2 className={s.Title}>Our Technology</h2>
          <p className={s.PreTitle}>
            We are experts in web technologies, for a full-fledged and most
            functional website for your business
          </p>
          <div className={s.Wrapper}>
            <ul className={s.List}>
              <li className={s.Item}>html5</li>
              <li className={s.Item}>css3</li>
              <li className={s.Item}>scss</li>
              <li className={s.Item}>javascript</li>
              <li className={s.Item}>react.js</li>
              <li className={s.Item}>redux</li>
              <li className={s.Item}>node.js</li>
              <li className={s.Item}>git</li>
            </ul>
            <div className={s.Code}>$ npm install -g ehya.js</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
