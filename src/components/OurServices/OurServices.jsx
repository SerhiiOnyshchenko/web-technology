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
            The various services we provide to make your business more powerful
          </p>
          <ul className={s.List}>
            <li className={s.Item}>
              <span className={s.Icon}>
                <IconIdea width="56px" />
              </span>
              <h3 className={s.TitleH3}>Ideate</h3>
              <p className={s.Text}>
                We help you develop creative ideas so that your business can
                grow more rapidly
              </p>
            </li>
            <li className={s.Item}>
              <span className={s.Icon}>
                <IconPen width="56px" />
              </span>
              <h3 className={s.TitleH3}>Design</h3>
              <p className={s.Text}>
                We provide services with the best designs than our designer team
                for your business
              </p>
            </li>
            <li className={s.Item}>
              <span className={s.Icon}>
                <IconSyntax width="56px" />
              </span>
              <h3 className={s.TitleH3}>Web Development</h3>
              <p className={s.Text}>
                We help develop company websites to be more professional and
                attractive
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
