import { Card, Button } from "react-bootstrap";
import {aboutImg} from "../assets/img/aboutMepic.png"

export const AboutMe = () => {
  return (
<>
  <Card>
    <Card.Img variant="right" src="holder.js/100px180" />
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
</>
  );
};
