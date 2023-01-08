import s from './index.module.css';
import Container from 'components/Container/Container';
import PhotoAlbum from 'react-photo-album';
import Begin from '../../images/Rectangle 554-min.png';
import Icecream from '../../images/Rectangle 555-min.png';
import Molenhauer from '../../images/Rectangle 556-min.png';
import Pets_Paw from '../../images/Rectangle 557-min.png';
import Filmoteka from '../../images/Rectangle 558-min.png';
import Trandes_Mancheater from '../../images/Rectangle 559-min.png';

export default function Portfolio() {
  const photos = [
    {
      src: Begin,
      width: 352,
      height: 400,
    },
    {
      src: Icecream,
      width: 352,
      height: 550,
    },
    {
      src: Molenhauer,
      width: 352,
      height: 530,
    },
    {
      src: Pets_Paw,
      width: 352,
      height: 422,
    },
    {
      src: Trandes_Mancheater,
      width: 352,
      height: 450,
    },
    {
      src: Filmoteka,
      width: 352,
      height: 502,
    },
  ];
  return (
    <section id="Portfolio" className={s.Portfolio}>
      <Container>
        <h2 className={s.title}>Portfolio</h2>
        <p className={s.text}>
          Spectacular and effective web solutions with full immersion in your
          business.
        </p>
        <PhotoAlbum layout="columns" columns="3" photos={photos} />
      </Container>
    </section>
  );
}
