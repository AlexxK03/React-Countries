import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

import Home from "./pages/Home";
import SingleCountry from "./pages/SingleCountry";
import Navbar from "./components/Navbar";
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRegion, setFilterRegion] = useState("")
  
  const onHandleChange=(e)=>{
    setSearchTerm(e.target.value)
  }

  const onHandleSelect = (selected) => {
    setFilterRegion(selected);
};
  
  return (
    <Router>
      <Container>
        <Row>
          <Col>
          <Navbar onHandleChange={onHandleChange} onHandleSelect={onHandleSelect}/>
          <Routes>
            <Route path="/" element={<Home searchTerm = {searchTerm} filterRegion={filterRegion}/>}/>
            <Route path="/country/:name" element={<SingleCountry/>}/>
          </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
