import s from './index.module.css';
import Container from 'components/Container/Container';
import Begin from '../../images/Rectangle 554-min.png';
import Icecream from '../../images/Rectangle 555-min.png';
import Molenhauer from '../../images/Rectangle 556-min.png';
import Pets_Paw from '../../images/Rectangle 557-min.png';
import Filmoteka from '../../images/Rectangle 558-min.png';
import Trandes_Mancheater from '../../images/Rectangle 559-min.png';
import Album from 'components/Album/Album';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const photos = [
  {
    src: Begin,
    href: '',
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

  return (
    <section id="Portfolio" className={s.Portfolio}>
      <Container>
        <h2 className={s.title}>Portfolio</h2>
        <p className={s.text}>
          Spectacular and effective web solutions with full immersion in your
          business.
        </p>
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
                  <img src={item.src} width="288" alt="Portfolio" />
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
