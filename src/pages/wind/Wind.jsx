import { useEffect, useState, useRef } from 'react'
import './wind.css'
import WindRose from './WindRose'
import axios from 'axios'
import { useTimer } from 'react-timer-hook';

export default function Wind({ expiryTimestamp }) {
  const [data, setData] = useState(null);
  const [direction, setDirection] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [windArrow, setWindArrow] = useState(0);
  const [timeStamp, setTimeStamp] = useState("");
  const [minBoen, setMinBoen] = useState(0);
  const [maxBoen, setMaxBoen] = useState(0);
  const polling = useRef();
  const [strMinutes, setStrMinutes] = useState("00")
  const [strSecs, setStrSecs] = useState("00")

  const {
    seconds,
    minutes,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called'), interval: 1000 });

  useEffect(() => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 300);
    restart(time)
  }, [])

  useEffect(() => {
    setStrMinutes(`00${minutes}`.slice(-2));
  }, [minutes])

  useEffect(() => {
    setStrSecs(`00${seconds}`.slice(-2));
  }, [seconds])

  const getWindData = async () => {
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
    const windData = await axios.get('https://deltaclub-huetten.ch/lora/get_request.php', {
      withCredentials: false,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      }
    })
    setData(windData)
  }

  useEffect(() => {
    console.log('Getting latest data')
    getWindData();
    polling.current = setInterval(async () => {
      const time = new Date();
      time.setSeconds(time.getSeconds() + 300);
      restart(time);
      await getWindData();
    }, 300000)

    return () => {
      clearInterval(polling.current)
    }
  }, [])

  useEffect(() => {
    if (data !== null) {
      console.log(data.data.uplink_message);
      setTimeStamp(data.data.uplink_message.received_at);
      setDirection(data.data.uplink_message.decoded_payload.dir_ave);
      const wind = parseInt(data.data.uplink_message.decoded_payload.wind_ave * 3600) / 1000; //Wind in kmh
      const maxBoen = parseInt(data.data.uplink_message.decoded_payload.wind_3s_gust * 3600) / 1000; //Wind in kmh
      const minBoen = parseInt(data.data.uplink_message.decoded_payload.wind_3s_min * 3600) / 1000; //Wind in kmh
      setWindSpeed(wind);
      setMaxBoen(maxBoen);
      setMinBoen(minBoen);
      //Normalize arrow sizes
      var arrowWind = wind * 10 < 10 ? 10 : wind * 10;
      arrowWind = arrowWind > 170 ? 170 : arrowWind;
      setWindArrow(arrowWind);
    } else {
      console.error('data is null...')
    }
  }, [data])

  return (
    <>
      <div className='windGaugeContainer'>
        <h2>Letzte Aktualisierung:</h2>
        <h3>{timeStamp}</h3>
        <h3>Nächste Messung in: <span>{strMinutes}</span>:<span>{strSecs}</span></h3>

        <WindRose direction={direction} wind={windArrow} />
        <div>
          <h2>Windrichtung: {direction} °</h2>
          <h2>Windstärke: {windSpeed} km/h</h2>
          <br />
          <h3>Windböen min: {minBoen} km/h</h3>
          <h3>Windböen max: {maxBoen} km/h</h3>
        </div>
      </div>
    </>
  )
}