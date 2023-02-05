import s from './index.module.css';
import Container from 'components/Container/Container';
import { useState } from 'react';
import { ReactComponent as IconLeft } from '../../images/svg/arrow_left.svg';
import { ReactComponent as IconRight } from '../../images/svg/arrow_right.svg';
import { ReactComponent as IconQuote } from '../../images/svg/quote-left.svg';
import { useTranslation } from 'react-i18next';
const reviews = [
  {
    text: 'The guys did an excellent job. Make adjustments at the request of the client. In touch all the time.',
    name: 'Ferdinand Stindl',
    company: 'Co Founder of CocoPay Company',
  },
  {
    text: 'The good job job. Make adjustments at the request of the client. In touch all the time.',
    name: 'Max Banny',
    company: 'Co Founder of Mac Company',
  },
];

export default function Reviews() {
  const [review, setReview] = useState(0);
  const { t } = useTranslation();
  const handleClick = number => {
    // if (review + number > reviews.length - 1) {
    //   setReview(0);
    // } else if (review + number < 0) {
    //   setReview(reviews.length - 1);
    // } else {
    // }
    setReview(pre => pre + number);
  };
  return (
    <section id="Reviews" className={s.Reviews}>
      <Container>
        <h2 className={s.Title}>{t("Reviews")}</h2>
        <p className={s.PreTitle}>{t("Reviews tittle")}</p>
        <p className={s.Text}>{reviews[review].text}</p>
        <div className={s.Wrapper}>
          <div className={s.BoxName}>
            <div className={s.Icon}>
              <IconQuote />
            </div>
            <p className={s.Name}>- {reviews[review].name}</p>
            <p className={s.Company}>- {reviews[review].company}</p>
          </div>
          <div className={s.BoxBtn}>
            <button
              className={s.Btn}
              disabled={review === 0}
              onClick={() => handleClick(-1)}
            >
              <IconLeft />
            </button>
            <button
              className={s.Btn}
              disabled={review === reviews.length - 1}
              onClick={() => handleClick(1)}
            >
              <IconRight />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
