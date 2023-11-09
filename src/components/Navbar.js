import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Stack, Dropdown, DropdownButton, Button } from "react-bootstrap";
import { HouseFill } from "react-bootstrap-icons";
import { GlobeAsiaAustralia,GlobeAmericas,GlobeCentralSouthAsia,GlobeEuropeAfrica } from "react-bootstrap-icons";
const Navbar = (props) => {

  let navigate = useNavigate();

  const handleInputChange = (e) => {
    navigate("/");
    props.onHandleChange(e);
  };

  const handleSelectChange = (selected) => {
    navigate("/");
    props.onHandleSelect(selected);
};

  return (
    <>
      <Row>
        <Col>
          <Stack 
          direction="horizontal">
            <Link to={"/"}>
              <HouseFill 
              className="m-2"
              size="45px" 
              />
            </Link>
            <DropdownButton
              size="sm"
              id="dropdown-basic-button"
              title="region"
              variant="success rounded-pill"
              onSelect={handleSelectChange}
            >
              <Dropdown.Item eventKey={"Europe"}>Europe <GlobeEuropeAfrica/></Dropdown.Item>
              <Dropdown.Item eventKey={"Asia"}>Asia <GlobeCentralSouthAsia/></Dropdown.Item>
              <Dropdown.Item eventKey={"Americas"}>Americas <GlobeAmericas/></Dropdown.Item>
              <Dropdown.Item eventKey={"Oceania"}>Ocenia <GlobeAsiaAustralia/></Dropdown.Item>
              <Dropdown.Item eventKey={"Africa"}>Africa <GlobeEuropeAfrica/></Dropdown.Item>
              <Dropdown.Item eventKey={"Antarctic"}>Antarctic <GlobeAsiaAustralia/></Dropdown.Item>
            </DropdownButton>
            <input
              type="text"
              onChange={handleInputChange}
              value={props.searchTerm}
              placeholder="Search for countries here"
              className="p-2 ms-auto"
            />
            <Button
            className="mx-2"
            variant="primary rounded-pill"
            >
              Search
            </Button>
            
          </Stack>
        </Col>
      </Row>
    </>
  );
};

export default Navbar;
