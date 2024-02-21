
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Title from '../../components/Title/Title';
import './Videos.css'

export default function Videos() {

  const videos = [
    <video key="vid-01" className='video' preload="metadata" poster="https://deltaclub-huetten.ch/videogallerie/thm/lanzarote.jpg" controls><source src="https://deltaclub-huetten.ch/videogallerie/lanzarote.mp4" type="video/mp4" /></video>,
    <video key="vid-02" className='video' preload="metadata" poster="https://deltaclub-huetten.ch/videogallerie/thm/spontan.jpg" controls><source src="https://deltaclub-huetten.ch/videogallerie/spontan.mp4" type="video/mp4" /></video>,
    <video key="vid-03" className='video' preload="metadata" poster="https://deltaclub-huetten.ch/videogallerie/thm/amden-roman.jpg" controls><source src="https://deltaclub-huetten.ch/videogallerie/amden-roman.mp4" type="video/mp4" /></video>,
    <video key="vid-04" className='video' preload="metadata" poster="https://deltaclub-huetten.ch/videogallerie/thm/amden-zingg.jpg" controls><source src="https://deltaclub-huetten.ch/videogallerie/amden-zingg.mp4" type="video/mp4" /></video>,
    <video key="vid-05" className='video' preload="metadata" poster="https://deltaclub-huetten.ch/videogallerie/thm/annecy.jpg" controls><source src="https://deltaclub-huetten.ch/videogallerie/annecy.mp4" type="video/mp4" /></video>,
    <video key="vid-06" className='video' preload="metadata" poster="https://deltaclub-huetten.ch/videogallerie/thm/brigels.jpg" controls><source src="https://deltaclub-huetten.ch/videogallerie/brigels.mp4" type="video/mp4" /></video>,
    <video key="vid-07" className='video' preload="metadata" poster="https://deltaclub-huetten.ch/videogallerie/thm/cucco-nord.jpg" controls><source src="https://deltaclub-huetten.ch/videogallerie/cucco-nord.mp4" type="video/mp4" /></video>,
    <video key="vid-08" className='video' preload="metadata" poster="https://deltaclub-huetten.ch/videogallerie/thm/cucco-windy.jpg" controls><source src="https://deltaclub-huetten.ch/videogallerie/cucco-windy.mp4" type="video/mp4" /></video>,
    <video key="vid-09" className='video' preload="metadata" poster="https://deltaclub-huetten.ch/videogallerie/thm/mosti-roman.jpg" controls><source src="https://deltaclub-huetten.ch/videogallerie/mosti-roman.mp4" type="video/mp4" /></video>,
    <video key="vid-10" className='video' preload="metadata" poster="https://deltaclub-huetten.ch/videogallerie/thm/mythen.jpg" controls><source src="https://deltaclub-huetten.ch/videogallerie/mythen.mp4" type="video/mp4" /></video>,
    <video key="vid-11" className='video' preload="metadata" poster="https://deltaclub-huetten.ch/videogallerie/thm/tandem.jpg" controls><source src="https://deltaclub-huetten.ch/videogallerie/tandem.mp4" type="video/mp4" /></video>
  ]


  return (
    <>
      <Navbar />
      <Title titleClass='title-videos' mainTitle='Videos' />
      <div className='video-container'>
        {videos}
      </div>
      <Footer />
    </>
  );
}



