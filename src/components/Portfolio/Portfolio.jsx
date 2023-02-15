import s from './index.module.css';
import Container from 'components/Container/Container';
import Begin from '../../images/Rectangle 554.png';
import Icecream from '../../images/Rectangle 555.png';
import Molenhauer from '../../images/Rectangle 556.png';
import Pets_Paw from '../../images/Rectangle 557.png';
import Filmoteka from '../../images/Rectangle 558.png';
import Trandes_Mancheater from '../../images/Rectangle 559.png';
import Begin_big from '../../images/Begin_big.png';
import Icecream_big from '../../images/Icecream_big.jpg';
import Petly_big from '../../images/Petly_big.png';
import Molenhauer_big from '../../images/Molenhauer_big.png';
import Trandes_Mancheater_big from '../../images/Trandes_Mancheater_big.png';
import Filmoteka_big from '../../images/Filmoteka_big.jpg';
import Album from 'components/Album/Album';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import ModalImg from 'components/ModalImg/ModalImg';

const photos = [
  {
    src: Begin,
    largeSrc: Begin_big,
    width: 352,
    height: 400,
  },
  {
    src: Icecream,
    largeSrc: Icecream_big,
    href: 'https://serhiionyshchenko.github.io/team-project/',
    width: 352,
    height: 550,
  },
  {
    src: Molenhauer,
    largeSrc: Molenhauer_big,
    href: '',
    width: 352,
    height: 530,
  },
  {
    src: Pets_Paw,
    largeSrc: Petly_big,
    href: 'https://pets-paw-intern.netlify.app/',
    width: 352,
    height: 422,
  },
  {
    src: Trandes_Mancheater,
    largeSrc: Trandes_Mancheater_big,
    href: '',
    width: 352,
    height: 450,
  },
  {
    src: Filmoteka,
    largeSrc: Filmoteka_big,
    href: 'https://serhiionyshchenko.github.io/team-project-filmoteka/',
    width: 352,
    height: 502,
  },
];
export default function Portfolio() {
  const [img, setImg] = useState('');
  const [isOpen, setOpen] = useState(false);
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
                {/* <a
                  className={s.Link}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                > */}
                <div
                  className={s.Link}
                  onClick={() => {
                    setImg(item.largeSrc);
                    setOpen(true);
                  }}
                >
                  <img
                    src={item.src}
                    width="288"
                    height="440"
                    alt="Portfolio"
                  />
                </div>
                {/* </a> */}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Album photos={photos} />
        )}
        {isOpen && <ModalImg onClose={() => setOpen(false)} img={img} />}
      </Container>
    </section>
  );
}
