import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const CountryCard = (props) => {
  return (
    <Link to={`/country/${props.name}`}>
      <Card 
      style={{
        borderRadius:"20px"
        }}
      className="mt-2">
        <Card.Img src={props.flag} variant="top" alt={props.alt} />
        <Card.Body>
          <Card.Title>
            {props.name}
            <p>{props.region}</p>
          </Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default CountryCard;
