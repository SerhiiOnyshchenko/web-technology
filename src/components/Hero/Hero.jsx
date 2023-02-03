import Container from 'components/Container/Container';
import s from './index.module.css';
import Button from 'components/Button/Button';
import { ReactComponent as IconApplication } from '../../images/svg/Icon_Application.svg';
import { ReactComponent as IconWorkflow } from '../../images/svg/Icon_Workflow.svg';
import { ReactComponent as IconRocket } from '../../images/svg/Icon_Rocket.svg';
import { ReactComponent as IconSupport } from '../../images/svg/Icon_CS.svg';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <section className={s.Hero}>
      <Container>
        <div className={s.HeroText}>
          <h1 className={s.HeroTitle}>
            {t('Hero title')}{' '}
            <span className={s.TitleText}>{t('Hero title span')}</span>{' '}
          </h1>
          <p className={s.HeroAfterTitle}>{t('Hero awterTitle')}</p>
          <Button
            onClick={() => {
              setOpen(true);
            }}
            active={true}
          >
            {t('Button')}
          </Button>
          <div className={s.HeroAdvantage}>
            <ul className={s.List}>
              <li className={s.Item}>
                <span className={s.Icon}>
                  <IconApplication width="40px" />
                </span>
                <h3 className={s.Title}>{t('Clean code')}</h3>
                <p className={s.Text}>{t('Clean code text')}</p>
              </li>
              <li className={s.Item}>
                <span className={s.Icon}>
                  <IconWorkflow width="40px" />
                </span>
                <h3 className={s.Title}>{t('Adaptive design')}</h3>
                <p className={s.Text}>{t('Adaptive design text')}</p>
              </li>
              <li className={s.Item}>
                <span className={s.Icon}>
                  <IconRocket width="40px" />
                </span>
                <h3 className={s.Title}>{t('Speed')}</h3>
                <p className={s.Text}>{t('Speed text')}</p>
              </li>
              <li className={s.Item}>
                <span className={s.Icon}>
                  <IconSupport width="40px" />
                </span>
                <h3 className={s.Title}>{t('Support')}</h3>
                <p className={s.Text}>{t('Support text')}</p>
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
