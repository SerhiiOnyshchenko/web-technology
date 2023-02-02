import Container from 'components/Container/Container';
import s from './index.module.css';
import Button from 'components/Button/Button';
import { ReactComponent as IconApplication } from '../../images/svg/Icon_Application.svg';
import { ReactComponent as IconWorkflow } from '../../images/svg/Icon_Workflow.svg';
import { ReactComponent as IconRocket } from '../../images/svg/Icon_Rocket.svg';
import { ReactComponent as IconSupport } from '../../images/svg/Icon_CS.svg';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';

export default function Hero() {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className={s.Hero}>
      <Container>
        <div className={s.HeroText}>
          <h1 className={s.HeroTitle}>
            Turnkey business <span className={s.TitleText}>website</span>{' '}
            development
          </h1>
          <p className={s.HeroAfterTitle}>
            We create unique websites for businesses that make a profit. We
            introduce our own developments that allow you to increase
            applications from your site by 2 times.
          </p>
          <Button
            onClick={() => {
              setOpen(true);
            }}
            active={true}
          >
            Get a free consultation
          </Button>
          <div className={s.HeroAdvantage}>
            <ul className={s.List}>
              <li className={s.Item}>
                <span className={s.Icon}>
                  <IconApplication width="40px" />
                </span>
                <h3 className={s.Title}>Clean code</h3>
                <p className={s.Text}>
                  Clean code improves code readability, maintainability and
                  extensibility, thus reducing development time.
                </p>
              </li>
              <li className={s.Item}>
                <span className={s.Icon}>
                  <IconWorkflow width="40px" />
                </span>
                <h3 className={s.Title}>Adaptive design</h3>
                <p className={s.Text}>
                  The site will look both on wide screens and on laptops,
                  tablets and smartphones.
                </p>
              </li>
              <li className={s.Item}>
                <span className={s.Icon}>
                  <IconRocket width="40px" />
                </span>
                <h3 className={s.Title}>Speed</h3>
                <p className={s.Text}>
                  We know exactly how much time it takes to implement a project,
                  and we always meet deadlines
                </p>
              </li>
              <li className={s.Item}>
                <span className={s.Icon}>
                  <IconSupport width="40px" />
                </span>
                <h3 className={s.Title}>Support</h3>
                <p className={s.Text}>
                  We provide free technical support within 30 days after project
                  submission.
                </p>
              </li>
            </ul>
          </div>
        </div>
        {isOpen && (
          <Modal
            onClose={() => {
              setOpen(false);
            }}
          />
        )}
      </Container>
    </section>
  );
}
