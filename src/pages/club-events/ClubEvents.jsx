
import { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Title from '../../components/title/Title';
import icsToJson from 'ics-to-json'
import './ClubEvents.css'

export default function ClubEvents() {
  const [dchEvents, setEvents] = useState()
  const [eventTable, seteventTable] = useState()

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {}
    }
    const requestCalendar = async () => {
      const response = await fetch('https://deltaclub-huetten.ch/dch-kalender/dch-kalender.php', requestOptions)
      var icsData = await response.text()
      icsData = icsData.replaceAll('\\n', '')
      icsData = icsData.replaceAll(':', 'ç')
      icsData = icsData.replaceAll('UIDç', 'UID:')
      icsData = icsData.replaceAll('DTSTAMPç', 'DTSTAMP:')
      icsData = icsData.replaceAll('BEGINç', 'BEGIN:')
      icsData = icsData.replaceAll('ENDç', 'END:')
      icsData = icsData.replaceAll('TZOFFSETFROMç', 'TZOFFSETFROM:')
      icsData = icsData.replaceAll('TZOFFSETTOç', 'TZOFFSETTO:')
      icsData = icsData.replaceAll('DTSTARTç', 'DTSTART:')
      icsData = icsData.replaceAll('DTSTARTç', 'DTSTART:')
      icsData = icsData.replaceAll('SUMMARYç', 'SUMMARY:')
      icsData = icsData.replaceAll('DESCRIPTIONç', 'DESCRIPTION:')
      icsData = icsData.replaceAll('LOCATIONç', 'LOCATION:')
      icsData = icsData.replaceAll('VERSIONç', 'VERSION:')
      icsData = icsData.replaceAll('PRODIDç', 'PRODID:')
      icsData = icsData.replaceAll('NAMEç', 'NAME:')
      icsData = icsData.replaceAll('X-WR-CALNAMEç', 'X-WR-CALNAME:')
      icsData = icsData.replaceAll('DTSTART;TZID=Europe/Zurichç', 'DTSTART;TZID=Europe/Zurich:')
      icsData = icsData.replaceAll('DTEND;TZID=Europe/Zurichç', 'DTEND;TZID=Europe/Zurich:')
      icsData = icsData.replaceAll('TZID=Europe/Zurich;VALUE=DATEç', 'DTEND;TZID=Europe/Zurich:')
      //console.log(icsData)
      console.log(icsToJson(icsData))
      var data = sortByKey(icsToJson(icsData), 'startDate')
      setEvents(data)
    }
    requestCalendar()
  }, [])

  useEffect(() => {
    if (dchEvents === undefined) return
    console.log(dchEvents)
    const whatever = dchEvents.map((event, eventIdx) => {
      const startDateString = event.startDate.split('T')[0]
      const startTimeString = event.startDate.split('T')[1] == null ? '' : event.startDate.split('T')[1]
      var year = startDateString?.substring(0, 4)
      var month = startDateString?.substring(4, 6)
      var day = startDateString?.substring(6, 8)
      var zeit = ''
      if ((startTimeString !== '000000') && startTimeString !== '') {
        const hour = startTimeString?.substring(0, 2)
        const mins = startTimeString?.substring(2, 4)
        zeit = ` (${hour}:${mins})`
      }
      const startDate = `${day}.${month}.${year}${zeit}`
      const endDateString = event.endDate.split('T')[0]
      const endTimeString = event.startDate.split('T')[1] == null ? '' : event.startDate.split('T')[1]
      year = endDateString?.substring(0, 4)
      month = endDateString?.substring(4, 6)
      day = endDateString?.substring(6, 8)
      if ((endTimeString !== '000000') && endTimeString !== '') {
        const hour = endTimeString?.substring(0, 2)
        const mins = endTimeString?.substring(2, 4)
        zeit = ` (${hour}:${mins})`
      }
      const endDate = `${day}.${month}.${year}${zeit}`
      const dates = startDateString === endDateString ? startDate : `${startDate} - ${endDate}`
      var summary = event.summary === undefined ? '' : `${event.summary}`.replaceAll('\\', '')
      var description = event.description === undefined ? '' : `${event.description}`.replaceAll('\\', '')
      var location = event.location === undefined ? '' : `${event.location}`.replaceAll('\\', '')
      summary = summary.replaceAll('ç', ':')
      description = description.replaceAll('ç', ':')
      location = location.replaceAll('ç', ':')
      //Redefine links
      var urlRegex = /(https?:\/\/[^\s]+)/
      description = description.replace(urlRegex, function (url) {
        return '<a href="' + url + '">' + url + '</a>'
      });
      const desc = <div className='anlassDesc' dangerouslySetInnerHTML={{ __html: description }} />

      const thisYear = new Date().getFullYear().toString();
      var dataRow = null;
      if (year === thisYear) {
        dataRow =
          <tr key={`eventTable-${eventIdx}`}>
            <td data-label="Anlass" className='anlass'>{summary}{desc}</td>
            <td data-label="Ort">{location}</td>
            <td data-label="Datum">{dates}</td>
          </tr>
        console.log(dataRow)
      }

      return dataRow
    })
    seteventTable(whatever)

  }, [dchEvents])

  function sortByKey(jsonArray, key) {
    return jsonArray.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  // const events = {
  //   A: 'Notschirmpacken und GV',
  //   B: 'Flugplatz Abend',
  //   C: 'Flug Delta Challenge 23 (SHV)',
  //   D: 'Saisoneröffnung DCH',
  //   E: 'DCH Weekend',
  //   F: 'Interclub SM (SHV)',
  //   G: 'DCH Weekend 	  ',
  //   H: 'Plausch Clubmeisterschaft',
  //   I: 'DCH Weekend',
  //   J: 'Clubausflug',
  //   K: 'Clubausflug',
  //   L: 'Samichlaushöck'
  // }

  // const places = {
  //   A: 'Hütten',
  //   B: 'Schänis',
  //   C: 'Brenzikofen',
  //   D: 'Mostelegg',
  //   E: 'Offen...',
  //   F: 'Brenzikofen',
  //   G: 'Offen (Fanas?)',
  //   H: 'Mostelegg',
  //   I: 'Surcuolm',
  //   J: 'Normandie',
  //   K: 'Alpes Maritimes, Südfrankreich',
  //   L: 'Hütten'
  // }

  // const dates = {
  //   A: '04. März 23',
  //   B: '24. März 23',
  //   C: '06. - 10. April 23',
  //   D: '15. oder 16. April 23',
  //   E: '22. - 25. April 23',
  //   F: '05. - 07. (Verschiebe Datum 12. - 14) Mai 23',
  //   G: '27. - 29. Mai 23',
  //   H: '03. oder 04. Juni 23',
  //   I: '12. - 13. August 23',
  //   J: '02. - 09. September 23',
  //   K: '07. - 14. Oktober 23',
  //   L: '08. Dezember 23',
  // }

  // function generateTable() {
  //   const eventIndex = Object.keys(events)
  //   const table = eventIndex.map(eventIdx => {
  //     return (
  //       <tr key={`eventTable-${eventIdx}`}>
  //         <td data-label="Anlass" className='anlass'>{events[eventIdx]}</td>
  //         <td data-label="Ort">{places[eventIdx]}</td>
  //         <td data-label="Datum">{dates[eventIdx]}</td>
  //       </tr>
  //     )
  //   });
  //   return (table);
  // }

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
            {eventTable}
            {/* {generateTable()} */}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

