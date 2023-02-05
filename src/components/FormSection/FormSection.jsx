import Container from 'components/Container/Container';
import Form from 'components/Form/Form';
import s from './index.module.css';
import { useTranslation } from 'react-i18next';

export default function FormSection() {
  const { t } = useTranslation();
  return (
    <section className={s.FormSection}>
      <Container>
        <div className={s.Wrapper}>
          <div className={s.WrapperText}>
            <h2 className={s.Title}>{t('Talk to us about your project')}</h2>
            <p className={s.Text}>{t('Talk to us about your project text')}</p>
            <div className={s.Line}></div>
            <p className={s.Grey}>{t('You can contact us on :')}</p>
            <a className={s.Contacts} href="tel:+3809">
              +38(095)768 34 45
            </a>
            <a
              className={s.Contacts}
              href="mailto:web.technology.ukr@gmail.com"
            >
              web.technology.ukr@gmail.com
            </a>
            <a
              className={s.Contacts}
              href="https://instagram.com/web_technology_ua?igshid=NTdlMDg3MTY="
            >
              web_technology_ua
            </a>
          </div>
          <Form />
        </div>
      </Container>
    </section>
  );
}
