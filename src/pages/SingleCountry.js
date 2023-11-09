import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Row, Col, Spinner, Image } from "react-bootstrap";
import Weather from "../components/Weather";
import axios from "axios";
const SingleCountry = () => {
  let { name } = useParams();
  const [country, setCountry] = useState("");
  // const [lat, setLat] = useState("");
  // const [lng, setLng] = useState("");
  // const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((response) => {
        // console.log(response.data[0]);
        setCountry(response.data[0]);
        // setLat(response.data[0].latlng[0]);
        // setLng(response.data[0].latlng[1]);
        // console.log(response.data[0].latlng[0]);
      })
      .catch((error) => {
        console.error(error);
      });

    
  }, []);

  if (!country) {
    return <Spinner animation="grow" />;
  }
  return (
    <>
      <Row>
        <Col>
          <Image src={country.flags.png} alt={country.flags.alt} />
          <h1>
            <b>{country.name.common}</b>
          </h1>
        </Col>
        <Col>
          <div className="container-rounded">
            <p>
              <b>Official Name: </b>
              {country.name.official}
            </p>
            <p>
              <b>Region: </b>
              {country.region}
            </p>
            <p>
              <b>Sub-Region: </b>
              {country.subregion}
            </p>
            <p>
              <b>Currency: </b>
              {Object.values(country.currencies)[0].name}
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <div>
          <>
            <Weather latlng={country.latlng}></Weather>
          </>
        </div>
      </Row>
    </>
  );
};

export default SingleCountry;
