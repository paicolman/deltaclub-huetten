import { useEffect, useState, useRef } from 'react';
import './wind.css';
import WindRose from './WindRose';
import axios from 'axios';
import WindChart from './Windchart';
import Navbar from '../../components/navbar/Navbar';

export default function Wind() {
  const [data, setData] = useState(null);
  const [direction, setDirection] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [windArrow, setWindArrow] = useState(0);
  const [timeStamp, setTimeStamp] = useState("");
  const [minBoen, setMinBoen] = useState(0);
  const [maxBoen, setMaxBoen] = useState(0);
  const [battery, setBattery] = useState('???');
  const [topMargin, setTopMargin] = useState('140px');
  const polling = useRef();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    //console.log(`WindowSize Changed! ${windowSize.width}`)
    if (windowSize.width > 970) {
      setTopMargin('140px');
    } else {
      setTopMargin('80px');
    }
  }, [windowSize])

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
    //console.log('Getting latest data')
    getWindData();
    polling.current = setInterval(async () => {
      // const time = new Date();
      // time.setSeconds(time.getSeconds() + 300);
      // restart(time);
      await getWindData();
    }, 300000)

    return () => {
      clearInterval(polling.current)
    }
  }, [])

  useEffect(() => {
    if (data !== null) {
      //console.log(data.data.uplink_message);
      setTimeStamp(convertTimeStamp(data.data.uplink_message.received_at));
      setDirection(data.data.uplink_message.decoded_payload.dir_ave);
      const wind = parseInt(data.data.uplink_message.decoded_payload.wind_ave * 36) / 10; //Wind in kmh
      const maxBoen = parseInt(data.data.uplink_message.decoded_payload.wind_1s_gust * 36) / 10; //Wind in kmh
      const minBoen = parseInt(data.data.uplink_message.decoded_payload.wind_3s_min * 36) / 10; //Wind in kmh
      setWindSpeed(wind);
      setMaxBoen(maxBoen);
      setMinBoen(minBoen);
      setBattery(data.data.uplink_message.decoded_payload.battery_indicator);
      //Normalize arrow sizes
      var arrowWind = wind * 10 < 10 ? 10 : wind * 10;
      arrowWind = arrowWind > 170 ? 170 : arrowWind;
      setWindArrow(arrowWind);
    }
  }, [data])

  const convertTimeStamp = (timeStamp) => {
    if (timeStamp !== null) {
      const local = new Date(timeStamp);
      return (local.toLocaleTimeString());
    }
    return null;
  }

  return (
    <>
      <Navbar />
      <div className='windRoot' style={{ marginTop: topMargin }}>
        <div className='windPageContainer'>
          <h1><small><small>Wind-Station Gäsi</small></small></h1>
          <h2>Letzte Aktualisierung:</h2>
          <h3>{timeStamp}</h3>
          <WindRose direction={direction} wind={windArrow} />
          <div className='windData'>
            <h2>Windrichtung: {direction} °</h2>
            <h2>Windstärke: {windSpeed} km/h</h2>
          </div>
          <div className='windData'>
            <h3>Windböen min: {minBoen} km/h</h3>
            <h3>Windböen max: {maxBoen} km/h</h3>
          </div>
          <div className='windData'>
            <h4>Batterie: {battery}</h4>
          </div>
          <div className='windChartTitle'>
            <hr />
            <h2>Wind Verlauf</h2>
          </div>
          <WindChart />
        </div>
      </div>
    </>
  )
}