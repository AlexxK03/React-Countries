import { useState, useEffect } from "react"
import { Row } from "react-bootstrap"
import axios from "axios"
import CountryCard from "../components/CountryCard"

const Home = (props) => {
const [countriesList, setCountriesList] = useState([])
const [filteredCountriesList, setFilteredCountriesList] = useState([])


useEffect(()=>{
    getAll();
    },[])

    const getAll = () => {
        axios
        .get('https://restcountries.com/v3.1/all')
        .then(response => {
            console.log(response.data)
            setCountriesList(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        if (props.filterRegion <= 1) {
            setFilteredCountriesList(countriesList);
        } else {
            let filter = countriesList.filter((country) => {
                return country.region === props.filterRegion;
            });
            setFilteredCountriesList(filter);
        }
    }, [countriesList, props.filterRegion]);

    useEffect(()=>{
        if(props.searchTerm <=2){
            setFilteredCountriesList(countriesList)
        } else {
            let filter = countriesList.filter((country)=>{
                return country.name.common
                .toLowerCase()
                .includes(props.searchTerm.toLowerCase())
            })
            setFilteredCountriesList(filter)
        }
    },[countriesList, props.searchTerm])

    let countryCards = filteredCountriesList.map((country,i) => {
        return <CountryCard 
            key={i} 
            flag={country.flags.png} 
            name={country.name.common} 
            region={country.region}
            alt = {country.flags.alt}/>
    })

    return (
        <>
        <Row className="g-4" md={3} xs={1}>
        {countryCards}
        </Row>
        </>

    )
}

export default Home