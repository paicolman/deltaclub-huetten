import './Fluggebiete.css'

export default function Fluggebiet1() {
  return (
    <div className='fluggebiet-container'>
      <img className='fluggebiet-item fluggebiet-image' src='assets/mostelegg-start.jpg' alt='Startplatz Fluggebiet Mostelegg' />
      <div className='fluggebiet-item fluggebiet-description'>
        <h2>Mostelegg</h2>
        <p>
          Die Mostelegg ist einer unserer Hausberge, ein schönes und sehr einfaches Fluggebiet.
          Thermik setzt etwas spät ein und am besten funktionert es, wenn eine leichte Bise herrscht,
          welche die Leerthermik begünstigt. Gelandet wird neben dem Altersheim in Steinen,
          auf einer riesigen Wiese.
        </p>
      </div>
      <div className='fluggebiet-item fluggebiet-description'>
        <h3><a href="https://map.geo.admin.ch/?lang=en&topic=ech&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.zeitreihen,ch.bfs.gebaeude_wohnungs_register,ch.bav.haltestellen-oev,ch.swisstopo.swisstlm3d-wanderwege,ch.astra.wanderland-sperrungen_umleitungen&layers_opacity=1,1,1,0.8,0.8&layers_visibility=false,false,false,false,false&layers_timestamp=18641231,,,,&E=2692754&N=1212321&zoom=13&crosshair=marker" target={'_blank'}>
          Startplatz Mostelegg
        </a></h3>
        <p>
          <b>Höhe</b>: 1265m<br />
          <b>Startrichtung</b>: S - SW<br />
          <b>Besonderheiten</b>: Bei Bise auch die Fähnchen oben beachten, nicht zu weit hinten Anlauf holen.<br />
        </p>
        <h3><a href="https://map.geo.admin.ch/?lang=en&topic=ech&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.zeitreihen,ch.bfs.gebaeude_wohnungs_register,ch.bav.haltestellen-oev,ch.swisstopo.swisstlm3d-wanderwege,ch.astra.wanderland-sperrungen_umleitungen&layers_opacity=1,1,1,0.8,0.8&layers_visibility=false,false,false,false,false&layers_timestamp=18641231,,,,&E=2688723&N=1210466&zoom=10&crosshair=marker" target={'_blank'}>
          Landeplatz Steinen
        </a></h3>
        <p>
          <b>Höhe</b>: 452m<br />
          <b>Besonderheiten</b>: Sehr einfacher Landeplatz. Windspione beachten.<br />
        </p>
      </div>
      <img className='fluggebiet-item fluggebiet-image' src='assets/mostelegg-landung.jpg' alt='Landeplatz Fluggebiet Mostelegg' />
    </div>
  )
}
