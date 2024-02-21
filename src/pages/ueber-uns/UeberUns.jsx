
import Navbar from '../../components/navbar/Navbar';
import Title from '../../components/Title/Title';
import Footer from '../../components/footer/Footer';
import './UeberUns.css'
import { useState } from "react";

export default function UeberUns() {
  const [memberForm, setForm] = useState()

  function showForm() {
    console.log('Showing form now')
    setForm(
      <div className='memberFormContainer' onClick={hideForm}>
        <iframe className='memberForm' onSubmit={hideForm} onClick={hideForm} src='https://dch.webling.ch/forms/memberform/2f733a2ba62aacdd71a6'>

        </iframe>
        <div className='button' onClick={hideForm}>Zurück zur Startseite</div>
      </div>
    )
  }

  function hideForm() {
    console.log('hide the thing')
    setForm()
  }

  return (
    <>
      {memberForm}
      <Navbar />
      <Title titleClass='title-ueber-uns' mainTitle='DELTA CLUB HÜTTEN' subTitle='am Delta fliegen seit 1990.' />
      <div className='ueber-uns-container'>
        <h1>Der Delta Club Hütten</h1>
        <p>
          Der Delta Club Hütten DCH wurde im Jahr 1990 gegründet, um Piloten einen Anlaufpunkt zum gemeinsamen Fliegen und Erfahrungsaustausch zu bieten.
          Für spontane Flüge sind wir meist in den umliegenden Fluggebiete (Zürich, Zentral und Ostschweiz) wie Amden, Mostelegg, Galgenen etc. anzutreffen.
          Zudem organisieren wir während dem Jahr verschiedene Clubanlässe und Clubausflüge.
        </p>
        <h2>Werde Mitglied vom Delta Club Hütten!</h2>
        <p>
          Wir heissen alle flugbegeisterten Deltisten herzlich Willkommen in unserem Club. Gerne kannst du dich per Mail
          (<a href='mailto:info@deltaclub-huetten.ch'>info@deltaclub-huetten.ch</a>) anmelden, oder nutze am besten unser Anmeldeformular:
        </p>
        <div className='button' onClick={showForm}>Mitglied werden</div>

      </div>
      <Footer />
    </>
  )
}
