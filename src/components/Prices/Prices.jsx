import Container from 'components/Container/Container';
import { ReactComponent as Icon } from '../../images/svg/Icon.svg';
import { ReactComponent as IconRight } from '../../images/svg/Arrow_Right_white.svg';
import s from './index.module.css';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';

export default function Prices() {
  const [isOpen, setOpen] = useState(false);

  return (
    <section id="Prices" className={s.Prices}>
      <Container>
        <div className={s.Container}>
          <h2 className={s.Title}>Our Prices</h2>
          <p className={s.PreTitle}>
            Our prices are competitive and affordable
          </p>
          <ul className={s.List}>
            <li className={s.Item}>
              <h3 className={s.TitleH3}>$800 $400</h3>
              <p className={s.Text}>Landing page</p>
              <span className={s.Line}></span>
              <ul className={s.Conditions}>
                <li className={s.Condition}>
                  <span className={s.Icon}>
                    <Icon />
                  </span>
                  <p>up to 10 blocks</p>
                </li>
                <li className={s.Condition}>
                  <span className={s.Icon}>
                    <Icon />
                  </span>
                  <p>from 14 days</p>
                </li>
                <li className={s.Condition}>
                  <span className={s.Icon}>
                    <Icon />
                  </span>
                  <p>design development (2 options)</p>
                </li>
                <li className={s.Condition}>
                  <span className={s.Icon}>
                    <Icon />
                  </span>
                  <p>adaptive for all devices</p>
                </li>
                <li className={s.Condition}>
                  <span className={s.Icon}>
                    <Icon />
                  </span>
                  <p>domain and hosting for 1 year as a gift</p>
                </li>
              </ul>
              <button
                type="button"
                className={s.Btn}
                onClick={() => {
                  setOpen(true);
                }}
              >
                <div className={s.BtnText}>Get a free consultation</div>
                <IconRight />
              </button>
            </li>
            <li className={s.Item}>
              <h3 className={s.TitleH3}>$1200 $600</h3>
              <p className={s.Text}>Corporate websites</p>
              <span className={s.Line}></span>
              <ul className={s.Conditions}>
                <li className={s.Condition}>
                  <span className={s.Icon}>
                    <Icon />
                  </span>
                  <p>up to 5 pages</p>
                </li>
                <li className={s.Condition}>
                  <span className={s.Icon}>
                    <Icon />
                  </span>
                  <p>from 20 days</p>
                </li>
                <li className={s.Condition}>
                  <span className={s.Icon}>
                    <Icon />
                  </span>
                  <p>design development (2 options)</p>
                </li>
                <li className={s.Condition}>
                  <span className={s.Icon}>
                    <Icon />
                  </span>
                  <p>adaptive for all devices</p>
                </li>
                <li className={s.Condition}>
                  <span className={s.Icon}>
                    <Icon />
                  </span>
                  <p>domain and hosting for 1 year as a gift</p>
                </li>
              </ul>
              <button
                type="button"
                className={s.Btn}
                onClick={() => {
                  setOpen(true);
                }}
              >
                <div className={s.BtnText}>Get a free consultation</div>
                <IconRight />
              </button>
            </li>
            <li className={s.Item}>
              <h3 className={s.TitleH3}>$1500 $800</h3>
              <p className={s.Text}>E-commerce</p>
              <span className={s.Line}></span>
              <ul className={s.Conditions}>
                <li className={s.Condition}>
                  <span className={s.Icon}>
                    <Icon />
                  </span>
                  <p>from 30 days</p>
                </li>
                <li className={s.Condition}>
                  <span className={s.Icon}>
                    <Icon />
                  </span>
                  <p>design development (2 options)</p>
                </li>
                <li className={s.Condition}>
                  <span className={s.Icon}>
                    <Icon />
                  </span>
                  <p>adaptive for all devices</p>
                </li>
                <li className={s.Condition}>
                  <span className={s.Icon}>
                    <Icon />
                  </span>
                  <p>domain and hosting for 1 year as a gift</p>
                </li>
              </ul>
              <button
                type="button"
                className={s.Btn}
                onClick={() => {
                  setOpen(true);
                }}
              >
                <div className={s.BtnText}>Get a free consultation</div>
                <IconRight />
              </button>
            </li>
          </ul>
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
