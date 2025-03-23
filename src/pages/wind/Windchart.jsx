import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ScatterChart, Scatter, ResponsiveContainer } from 'recharts';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function WindChart() {
  const [windData, setWindData] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [chartWidth, setChartWidth] = useState(350);
  const [dataShown, setDataShown] = useState(160);
  const [subType, setSubType] = useState("0px");
  const polling = useRef();

  useEffect(() => {
    getWindData();
    polling.current = setInterval(async () => {
      await getWindData();
    }, 300000)

    return () => {
      clearInterval(polling.current)
    }
  }, []);

  useEffect(() => {
    if (windData !== null) {
      var filteredData = windData
      if (dataShown < windData.length) {
        filteredData = windData.slice(-1 * dataShown)
      }
      //console.log(filteredData);
      setChartData(filteredData);
    }
  }, [windData, dataShown])

  useEffect(() => {
    setChartWidth(window.innerWidth - 50);
  }, [window.innerWidth])

  const getWindData = async () => {
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
    const windLog = await axios.get('https://deltaclub-huetten.ch/lora/get_100.php', {
      withCredentials: false,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      }
    })
    //console.log(windLog)
    if (windLog !== undefined) {
      const chartWindData = Object.values(windLog.data).map((point) => {
        //console.log(point.time);
        const hour = convertTimeStamp(point.time).split(':');
        //console.log(`${hour[0]}:${hour[1]}`)
        point.time = `${hour[0]}:${hour[1]}`
        return point
      })
      setWindData(chartWindData)
    }
  }

  const convertTimeStamp = (timeStamp) => {
    if (timeStamp !== null) {
      const local = new Date(timeStamp);
      console.log(local)
      return (local.toLocaleTimeString());
    }
  }

  return (
    <div>
      <div className="legend">
        <div className="wind">Wind:</div><div>Durchschnittswind letzte 3 Minuten</div>
        <div className="boen1">Böen 1 sek: &nbsp;&nbsp;</div><div>Böen mit max. Dauer 1 Sekunde</div>
        <div className="boen3">Böen 3 sek: &nbsp;&nbsp;</div><div>Böen mit max. Dauer 3 Sekunden</div>
        <div className="minbo">Min 3 sek: &nbsp;&nbsp;</div><div>Wenig Wind mit max. Dauer 3 Sekunden</div>
      </div>
      <div className="chartSelect">
        <Box sx={{ display: "flex" }}>
          <Box className="mask-box">
            <Box
              className="mask"
              style={{
                transform: `translateX(${subType})`
              }}
            />
            <Button
              disableRipple
              variant="text"
              sx={{ color: subType === "0px" ? "#ffffff" : "#5316AE" }}
              onClick={() => { setDataShown(160); setSubType('0px') }}
            >
              8 Stunden
            </Button>
            <Button
              disableRipple
              variant="text"
              sx={{ color: subType === "100px" ? "#ffffff" : "#5316AE" }}
              onClick={() => { setDataShown(80); setSubType('100px') }}
            >
              4 Stunden
            </Button>
            <Button
              disableRipple
              variant="text"
              sx={{ color: subType === "200px" ? "#ffffff" : "#5316AE" }}
              onClick={() => { setDataShown(40); setSubType('200px') }}
            >
              2 Stunden
            </Button>
          </Box>
        </Box>
      </div>
      <h3>Windstärke:</h3>
      <ResponsiveContainer width={chartWidth} height={250} >
        <LineChart data={chartData}>
          <Line type="monotone" dataKey="Wind" stroke="#0040ff" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="Böen 1 sek" stroke="#ff4000" strokeWidth={1} dot={false} />
          <Line type="monotone" dataKey="Böen 3 sek" stroke="#bb0000" strokeWidth={1} dot={false} />
          <Line type="monotone" dataKey="Min 3 sek" stroke="#00aa00" strokeWidth={1} dot={false} />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="time" />
          <Tooltip labelStyle={{ fontSize: 7, fontWeight: 'bold', lineHeight: 1 }} itemStyle={{ fontSize: 7 }} />
          <Legend layout="vertical" />
          <YAxis unit={"kmh"} />
        </LineChart>
      </ResponsiveContainer>
      <h3>Windrichtung:</h3>
      <ResponsiveContainer width={chartWidth} height={250} >
        <ScatterChart data={chartData}>
          <Scatter dataKey="Richtung" stroke="#80ff30" fill="#80bb30" strokeWidth={1} />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="time" />
          <Tooltip />
          <YAxis unit={"°"} />
        </ScatterChart>
      </ResponsiveContainer>
    </div>

  );

}