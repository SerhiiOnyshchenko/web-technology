import Container from 'components/Container/Container';
import Form from 'components/Form/Form';
import s from './index.module.css';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Instagram } from '../../images/svg/instagram_icon.svg';
import { ReactComponent as Email } from '../../images/svg/email.svg';
import { ReactComponent as Phone } from '../../images/svg/phone.svg';

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
            <div className={s.Contacts_icon}>
              <Phone />
              <a className={s.Contacts} href="tel:+3809">
                +38(096)628 45 44
              </a>
            </div>
            <div className={s.Contacts_icon}>
              <Email />
              <a
                className={s.Contacts}
                href="mailto:web.technology.ukr@gmail.com"
              >
                web.technology.ukr@gmail.com
              </a>
            </div>
            <div className={s.Contacts_icon}>
              <Instagram />
              <a
                className={s.Contacts}
                href="https://instagram.com/web_technology_ua?igshid=NTdlMDg3MTY="
              >
                web_technology_ua
              </a>
            </div>
          </div>
          <Form />
        </div>
      </Container>
    </section>
  );
}
