import Container from 'components/Container/Container';
import Form from 'components/Form/Form';
import s from './index.module.css';

export default function FormSection() {
  return (
    <section className={s.FormSection}>
      <Container>
        <div className={s.Wrapper}>
          <div className={s.WrapperText}>
            <h2 className={s.Title}>Talk to us about your project</h2>
            <p className={s.Text}>
              We would love to hear about your project and discuss how we can
              help. Please fill the form on the right side to schedule a call or
              discussion and meeting on the your convenient time.
            </p>
            <div className={s.Line}></div>
            <p className={s.Grey}>
              Any problem about your booking?
              <br />
              You can contact us on :
            </p>
            <a className={s.Contacts} href="tel:+3809">
              +38(095)768 34 45
            </a>
            <a
              className={s.Contacts}
              href="mailto:web.technology.ukr@gmail.com"
            >
              web.technology.ukr@gmail.com
            </a>
          </div>
          <Form />
        </div>
      </Container>
    </section>
  );
}
