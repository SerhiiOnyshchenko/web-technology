import Container from 'components/Container/Container';
import { ReactComponent as Icon } from '../../images/svg/Icon.svg';
import { ReactComponent as IconRight } from '../../images/svg/Arrow_Right_white.svg';
import s from './index.module.css';

export default function Prices() {
  return (
    <section id="Services" className={s.Prices}>
      <Container>
        <div className={s.Container}>
          <h2 className={s.Title}>Our Prices</h2>
          <p className={s.PreTitle}>
            The various services we provide to make your business more powerful
          </p>
          <ul className={s.List}>
            <li className={s.Item}>
              <h3 className={s.TitleH3}>$100</h3>
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
              <button type="button" className={s.Btn}>
                <div className={s.BtnText}>Order a site</div>
                <IconRight />
              </button>
            </li>
            <li className={s.Item}>
              <h3 className={s.TitleH3}>$200</h3>
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
              <button type="button" className={s.Btn}>
                <div className={s.BtnText}>Order a site</div>
                <IconRight />
              </button>
            </li>
            <li className={s.Item}>
              <h3 className={s.TitleH3}>$300</h3>
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
              <button type="button" className={s.Btn}>
                <div className={s.BtnText}>Order a site</div>
                <IconRight />
              </button>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}