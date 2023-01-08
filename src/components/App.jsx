import Footer from './Footer/Footer';
import FormSection from './FormSection/FormSection';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import OurServices from './OurServices/OurServices';
import Prices from './Prices/Prices';
import Technology from './Technology/Technology';
import Portfolio from './Portfolio/Portfolio';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <OurServices />
      <Technology />
      <Prices />
      <Portfolio />
      <Reviews />
      <FormSection />
      <Footer />
    </>
  );
};
