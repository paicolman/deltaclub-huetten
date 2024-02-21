import './Fluggebiete.css'

export default function Fluggebiet1() {
  return (
    <div className='fluggebiet-container'>
      <img className='fluggebiet-item fluggebiet-image' src='assets/amden-start.jpg' alt='Startplatz Fluggebiet Amden' />
      <div className='fluggebiet-item fluggebiet-description'>
        <h2>Amden</h2>
        <p>
          Wir fliegen sehr oft in Amden. Das Gebiet ist viel aktiver als die Mostelegg.
          Im besten Fall läuft es thermisch direkt am Startplatz oder dynamisch / thermisch
          auf der anderen Talseite am Kerenzerberg.
        </p>
      </div>
      <div className='fluggebiet-item fluggebiet-description'>
        <h3><a href="https://map.geo.admin.ch/?lang=en&topic=ech&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.zeitreihen,ch.bfs.gebaeude_wohnungs_register,ch.bav.haltestellen-oev,ch.swisstopo.swisstlm3d-wanderwege,ch.astra.wanderland-sperrungen_umleitungen&layers_opacity=1,1,1,0.8,0.8&layers_visibility=false,false,false,false,false&layers_timestamp=18641231,,,,&E=2727445&N=1223046&zoom=10.776666666666666&crosshair=marker" target={'_blank'}>
          Startplatz Durschlegi
        </a></h3>
        <p>
          <b>Höhe</b>: 1125m<br />
          <b>Startrichtung</b>: S<br />
          <b>Besonderheiten</b>: Sehr einfacher Startplatz, eine sehr steile Wiese, einfach auf einen schönen Wind warten und weg...<br />
        </p>
        <h3><a href="https://map.geo.admin.ch/?lang=en&topic=ech&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.zeitreihen,ch.bfs.gebaeude_wohnungs_register,ch.bav.haltestellen-oev,ch.swisstopo.swisstlm3d-wanderwege,ch.astra.wanderland-sperrungen_umleitungen&layers_opacity=1,1,1,0.8,0.8&layers_visibility=false,false,false,false,false&layers_timestamp=18641231,,,,&E=2726180&N=1220400&zoom=11.456666666666665&crosshair=marker" target={'_blank'}>
          Landeplatz Gäsi
        </a></h3>
        <p>
          <b>Höhe</b>: 452m<br />
          <b>Besonderheiten</b>: Am Nachmittag können am Landeplatz turbulente Verhältnisse herrschen.
          Das Fluggebiet wird durch den <a href="https://deltaclub-gl.jimdofree.com/fluggebiete/" target={'_blank'}><b>DC Glarnerland</b></a> betreut,
          weitere Informationen findet Ihr daher auf dessen Internetseite. Die  <a href="https://www.shv-fsvl.ch/fileadmin/files/redakteure/Allgemein/Sicherheit/SHVInfotafeln/Amden_A4.pdf" target={'_blank'}>
            Infotafel vom SHV</a>enthält weitere wichtige Details.
          <br /><br />
          <b style={{ color: 'darkred' }}>Wichtig! Unbedingt das Fahrverbot zum Startplatz beachten und einhalten!!</b>
        </p>
      </div>
      <img className='fluggebiet-item fluggebiet-image' src='assets/amden-landung.jpg' alt='Landeplatz Fluggebiet Amden' />
    </div>
  )
}
