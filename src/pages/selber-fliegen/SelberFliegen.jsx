
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Title from '../../components/title/Title';
import './SelberFliegen.css'

export default function SelberFliegen() {


  return (
    <>
      <Navbar />
      <Title titleClass='title-selber' mainTitle='Selber fliegen?' />
      <div className='tipps-container'>
        <div className='tipp'>
          <div className='condor'>
            <div className='condor-pics'>
              <img className='condor-pic-big' src='assets/condor-1.jpg' alt='Delta Fliegen lernen' />
              <img className='condor-pic-small' src='assets/condor-2.jpg' alt='Delta Fliegen lernen' />
              <img className='condor-pic-small' src='assets/condor-3.jpg' alt='Delta Fliegen lernen' />
            </div>
            <div className='condor-text'>
              <h2>Lerne fliegen!</h2>
              <h3>Delta Flugschule Condor</h3>
              <p>
                Viele Clubmitglieder haben ihre ersten Höhenmeter bei der Delta Flugschule
                Condor gemacht. Mit seiner sympathischen Art und grossen Erfahrung kann Thomi
                Kehren auch Dich in die Luft  bringen. Hier unten findest Du alle Infos um
                auch bald ein Delta-Pilot zu werden!
              </p>
              <p>
                <b>
                  <a href='https://www.deltaflugschule.ch/' target='_blank'>Delta-Flugschule Condor</a>
                </b>
              </p>
            </div>
          </div>
        </div>
        <div className='tipp'>
          <div className='condor'>
            <div className='condor-text'>
              <h2>Passagierflug?</h2>
              <p>
                Möchtest du einmal die Aussicht auf der Vogelperspektive geniessen? Ein Tandemflug mit
                einem erfahrenen Piloten ist ein unvergessliches Erlebnis!  Melde dich direkt bei unserem
                Tandempiloten Roman um einen Termin zu vereinbaren.
              </p>
              <p>
                <b>
                  <a href='mailto: flycat@gmx.ch'>flycat@gmx.ch</a>
                </b>
              </p>
            </div>
            <div className='condor-pics'>
              <img className='condor-pic-big' src='assets/tandem-1.jpg' alt='Delta Passagierflug' />
              <img className='condor-pic-small' src='assets/tandem-2.jpg' alt='Delta Passagierflug' />
              <img className='condor-pic-small' src='assets/tandem-3.jpg' alt='Delta Passagierflug' />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}



