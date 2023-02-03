import Container from 'components/Container/Container';
import { ReactComponent as IconIdea } from '../../images/svg/Idea.svg';
import { ReactComponent as IconPen } from '../../images/svg/Pen.svg';
import { ReactComponent as IconSyntax } from '../../images/svg/Syntax.svg';
import s from './index.module.css';
import { useTranslation } from 'react-i18next';

export default function OurServices() {
  const { t } = useTranslation();
  return (
    <section id="Services" className={s.OurServices}>
      <Container>
        <div className={s.Container}>
          <h2 className={s.Title}>{t('Our Services')}</h2>
          <p className={s.PreTitle}>{t('Our Services tittle')}</p>
          <ul className={s.List}>
            <li className={s.Item}>
              <span className={s.Icon}>
                <IconIdea width="56px" />
              </span>
              <h3 className={s.TitleH3}>{t('Ideas')}</h3>
              <p className={s.Text}>{t('Ideas text')}</p>
            </li>
            <li className={s.Item}>
              <span className={s.Icon}>
                <IconPen width="56px" />
              </span>
              <h3 className={s.TitleH3}>{t('Design')}</h3>
              <p className={s.Text}>{t('Design text')}</p>
            </li>
            <li className={s.Item}>
              <span className={s.Icon}>
                <IconSyntax width="56px" />
              </span>
              <h3 className={s.TitleH3}>{t('Web Development')}</h3>
              <p className={s.Text}>{t('Web Development text')}</p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
