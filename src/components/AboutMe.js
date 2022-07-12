import { Card, Button } from "react-bootstrap";


export const AboutMe = () => {
  return (
<>
  <div><h2>About Me</h2></div>
  <Card className="bg-dark text-white">    
  <div className="about-container">
  <Card.Img variant="right" src={require("../assets/img/personal-pic.png")} />

  <Card.ImgOverlay>
    <Card.Body>
      <Card.Text>
        Short bio about my passions, interests, and skills and how they will help me provide the best value. professional headshot to the side of text 
      </Card.Text>
    </Card.Body>
    </Card.ImgOverlay>
    </div>
  </Card>
</>
  );
};
