import { useEffect, useState } from "react";
import axios from "axios";
import { BrightnessAltHighFill } from "react-bootstrap-icons";
const Weather = (props) => {
  const [weather, setWeather] = useState("");
  console.log(props);
  useEffect(() => {
    // ${props.latlng[0]}
    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${props.latlng[0]}&longitude=${props.latlng[1]}&current=relative_humidity_2m,apparent_temperature,is_day,precipitation,wind_speed_10m&timezone=auto`
      )
      .then((response) => {
        setWeather(response.data.current);
        console.log(response.data.current);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const dateTime = new Date(weather.time)
  console.log(dateTime)

    return (
    <>
      <h3 className="my-3">weather info <BrightnessAltHighFill size="45px"/></h3>
      <div className="outline-primary">
        <p><b>tempurature: </b>{weather.apparent_temperature}°C</p>
        <p><b>humidity: </b>{weather.relative_humidity_2m}%</p>
        <p><b>wind speed: </b>{weather.wind_speed_10m}km/h</p>
        <p><b>The current time is: </b>{dateTime.toLocaleString()}</p>
      </div>
    </>
  );
};

export default Weather;
