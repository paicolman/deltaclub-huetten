
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Title from '../../components/Title/Title';
import './ClubEvents.css'

export default function ClubEvents() {

  const events = {
    A: 'Notschirmpacken und GV',
    B: 'Flugplatz Abend',
    C: 'Flug Delta Challenge 23 (SHV)',
    D: 'Saisoneröffnung DCH',
    E: 'DCH Weekend',
    F: 'Interclub SM (SHV)',
    G: 'DCH Weekend 	  ',
    H: 'Plausch Clubmeisterschaft',
    I: 'DCH Weekend',
    J: 'Clubausflug',
    K: 'Clubausflug',
    L: 'Samichlaushöck'
  }

  const places = {
    A: 'Hütten',
    B: 'Schänis',
    C: 'Brenzikofen',
    D: 'Mostelegg',
    E: 'Offen...',
    F: 'Brenzikofen',
    G: 'Offen (Fanas?)',
    H: 'Mostelegg',
    I: 'Surcuolm',
    J: 'Normandie',
    K: 'Alpes Maritimes, Südfrankreich',
    L: 'Hütten'
  }

  const dates = {
    A: '04. März 23',
    B: '24. März 23',
    C: '06. - 10. April 23',
    D: '15. oder 16. April 23',
    E: '22. - 25. April 23',
    F: '05. - 07. (Verschiebe Datum 12. - 14) Mai 23',
    G: '27. - 29. Mai 23',
    H: '03. oder 04. Juni 23',
    I: '12. - 13. August 23',
    J: '02. - 09. September 23',
    K: '07. - 14. Oktober 23',
    L: '08. Dezember 23',
  }

  function generateTable() {
    const eventIndex = Object.keys(events)
    const table = eventIndex.map(eventIdx => {
      return (
        <tr key={`eventTable-${eventIdx}`}>
          <td data-label="Anlass" className='anlass'>{events[eventIdx]}</td>
          <td data-label="Ort">{places[eventIdx]}</td>
          <td data-label="Datum">{dates[eventIdx]}</td>
        </tr>
      )
    });
    return (table);
  }

  return (
    <>
      <Navbar />
      <Title titleClass='title-club-events' mainTitle='Club-Events' />
      <div className='table-container'>
        <table className="table">
          <thead>
            <tr>
              <th>Anlass</th>
              <th>Ort</th>
              <th>Datum</th>
            </tr>
          </thead>
          <tbody>
            {generateTable()}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

