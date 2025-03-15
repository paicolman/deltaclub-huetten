import MerchCarousel from './MerchCarousel';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Title from '../../components/title/Title';
import './Merch.css'

export default function Merch() {

  return (
    <>
      <Navbar />
      <Title titleClass='title-merch' mainTitle='Wir haben auch coole Sachen!' />
      <div className='merch'>
        <h3>Wir haben schöne T-Shirts und einen tollen Kalender mit Flugbilder!</h3>
        <h3>Wenn Du Interesse hast, kontaktiere uns: <br /> <a href='mailto:info@deltaclub-huetten.ch'>info@deltaclub-huetten.ch</a> </h3>
        <MerchCarousel />
      </div>
      <Footer />
    </>
  );
}



