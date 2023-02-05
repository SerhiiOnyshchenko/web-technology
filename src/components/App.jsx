import Footer from './Footer/Footer';
import FormSection from './FormSection/FormSection';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import OurServices from './OurServices/OurServices';
import Prices from './Prices/Prices';
import Technology from './Technology/Technology';
import Portfolio from './Portfolio/Portfolio';
import Reviews from './Reviews/Reviews';
import ScrollUp from './ScrollUp/ScrollUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const App = () => {
  return (
    <>
      <ScrollUp />
      <Header />
      <Hero />
      <OurServices />
      <Technology />
      <Prices />
      <Portfolio />
      <Reviews />
      <FormSection />
      <Footer />
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
