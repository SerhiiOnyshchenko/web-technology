import Container from 'components/Container/Container';
import { ReactComponent as IconIdea } from '../../images/svg/Idea.svg';
import { ReactComponent as IconPen } from '../../images/svg/Pen.svg';
import { ReactComponent as IconSyntax } from '../../images/svg/Syntax.svg';
import s from './index.module.css';

export default function OurServices() {
  return (
    <section id="Services" className={s.OurServices}>
      <Container>
        <div className={s.Container}>
          <h2 className={s.Title}>Our Services</h2>
          <p className={s.PreTitle}>
            Services we provide to make your business better
          </p>
          <ul className={s.List}>
            <li className={s.Item}>
              <span className={s.Icon}>
                <IconIdea width="56px" />
              </span>
              <h3 className={s.TitleH3}>Ideate</h3>
              <p className={s.Text}>
                We help you develop creative ideas to grow your business faster
              </p>
            </li>
            <li className={s.Item}>
              <span className={s.Icon}>
                <IconPen width="56px" />
              </span>
              <h3 className={s.TitleH3}>Design</h3>
              <p className={s.Text}>
                Our designers will develop a design that will attract new
                customers
              </p>
            </li>
            <li className={s.Item}>
              <span className={s.Icon}>
                <IconSyntax width="56px" />
              </span>
              <h3 className={s.TitleH3}>Web Development</h3>
              <p className={s.Text}>
                We will create a technically correct website that will be better
                seen by search engines
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
