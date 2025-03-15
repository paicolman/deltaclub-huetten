import Footer from '../../components/footer/Footer';
import Gallery from './Gallery';
import Navbar from '../../components/navbar/Navbar';
import Title from '../../components/title/Title';


function App() {

  return (
    <>
      <Navbar />
      <Title titleClass='title-gallery' mainTitle='Foto - Gallerie' />
      <Gallery />
      <Footer />
    </>
  );
}

export default App

