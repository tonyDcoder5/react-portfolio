import { Card, Button } from "react-bootstrap";
import {aboutImg} from "../assets/img/aboutMepic.png"

export const AboutMe = () => {
  return (
<>
  <Card>
    {/* <Card.Img variant="right" src="../assets/img/aboutMepic.png" /> */}
    <Card.Body>
      <Card.Text>
        Short bio about my passions, interests, and skills and how they will help me provide the best value. professional headshot to the side of text 
      </Card.Text>
    </Card.Body>
  </Card>
</>
  );
};
