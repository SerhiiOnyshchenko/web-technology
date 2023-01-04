import Footer from './Footer/Footer';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import OurServices from './OurServices/OurServices';
import Prices from './Prices/Prices';
import Technology from './Technology/Technology';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <OurServices />
      <Technology />
      <Prices />
      {/* <Portfolio /> */}
      {/* <Reviews /> */}
      <Footer />
    </>
  );
};
