import s from './index.module.css';
import Container from 'components/Container/Container';
import Begin from '../../images/Rectangle 554.png';
import Icecream from '../../images/Rectangle 555.png';
import Molenhauer from '../../images/Rectangle 556.png';
import Pets_Paw from '../../images/Rectangle 557.png';
import Filmoteka from '../../images/Rectangle 558.png';
import Trandes_Mancheater from '../../images/Rectangle 559.png';
import Begin_big from '../../images/Begin_big.png';
import Album from 'components/Album/Album';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useTranslation } from 'react-i18next';

const photos = [
  {
    src: Begin,
    href: Begin_big,
    width: 352,
    height: 400,
  },
  {
    src: Icecream,
    href: 'https://serhiionyshchenko.github.io/team-project/',
    width: 352,
    height: 550,
  },
  {
    src: Molenhauer,
    href: '',
    width: 352,
    height: 530,
  },
  {
    src: Pets_Paw,
    href: 'https://pets-paw-intern.netlify.app/',
    width: 352,
    height: 422,
  },
  {
    src: Trandes_Mancheater,
    href: '',
    width: 352,
    height: 450,
  },
  {
    src: Filmoteka,
    href: 'https://serhiionyshchenko.github.io/team-project-filmoteka/',
    width: 352,
    height: 502,
  },
];
export default function Portfolio() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const { t } = useTranslation();

  return (
    <section id="Portfolio" className={s.Portfolio}>
      <Container>
        <h2 className={s.title}>{t('Portfolio')}</h2>
        <p className={s.text}>{t('Portfolio tittle')}</p>
        {isMobile ? (
          <Swiper spaceBetween={50} slidesPerView={1}>
            {photos.map(item => (
              <SwiperSlide key={item.src}>
                <a
                  className={s.Link}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={item.src}
                    width="288"
                    height="440"
                    alt="Portfolio"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Album photos={photos} />
        )}
      </Container>
    </section>
  );
}
