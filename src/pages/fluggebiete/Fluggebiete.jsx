import Fluggebiet1 from './Fluggebiet1';
import Fluggebiet2 from './Fluggebiet2';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Title from '../../components/title/Title';
import './Fluggebiete.css'
import Wind from '../wind/Wind';

export default function Fluggebiete() {

  return (
    <>
      <Navbar />
      <Title titleClass='title-fluggebiete' mainTitle='Hier sind wir oft anzutreffen!' picFooter='&copy; Christian Stoop 2023' />
      <div className='fluggebiete'>
        <Fluggebiet1 />
        <Fluggebiet2 />

      </div>
      <Footer />
    </>
  );
}



