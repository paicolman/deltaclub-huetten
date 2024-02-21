
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Title from '../../components/Title/Title';
import './Flugpraxis.css'

export default function Flugpraxis() {


  return (
    <>
      <Navbar />
      <Title titleClass='title-flugpraxis' mainTitle='Flugpraxis' />
      <div className='main-container'>
        <h2>Nützliche Links und Flugpraxis Tipps</h2>
        <p>
          Auf dieser Seite versuchen wir interessante Links und Informationen rund ums Fliegen zu teilen.
        </p>
        <div className='tipps-container'>
          <div className='tipp'>
            <h2>Die drei Thermiktreiber</h2>
            <p>
              Sehr interessanter Artikel von Lucian Haas über den Zusammenspiel zwischen
              Temperaturunterschied, Luftdruck und Luftfeuchtigkeit bei der Bildung von Termikblasen
            </p>
            <p>
              <b><a href='https://lu-glidz.blogspot.com/2017/09/die-drei-thermiktreiber.html' target="_blank">Link zum Artikel</a></b>
            </p>
          </div>
          <div className='tipp'>
            <h2>Moderne Thermiktheorie</h2>
            <p>
              Auch ein Artikel von Lucian Haas mit der gleichen Thematik wie nebenan,
              hier wird das ganze auch mit einem Video erklärt.
            </p>
            <p>
              <b><a href='https://lu-glidz.blogspot.com/2020/04/video-moderne-thermiktheorie.html' target="_blank">Link zum Artikel</a></b>
            </p>
          </div>
          <div className='tipp'>
            <h2>Streckenflugtage erkennen</h2>
            <p>
              Bruno Bohren erklärt in diesem Webinar, wie man die verschiedenen Tools
              benutzen kann, um einen (guten) Streckenflugtag zu erkennen.
            </p>
            <p>
              <b><a href='https://youtu.be/aRhDnKttZXc' target="_blank">Link zum Video (Youtube)</a></b>
            </p>
          </div>
          <div className='tipp'>
            <h2>Streckenfliegen - Seminar</h2>
            <p>
              Ein interessantes Video zum Thema «wie weiter nach dem Startschlauch» (A. Walder).
            </p>
            <p>
              <b><a href='https://youtu.be/bv2M_mEoMGc' target="_blank">Link zum Video (Youtube)</a></b>
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}



