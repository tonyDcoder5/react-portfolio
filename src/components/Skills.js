import { Card } from "react-bootstrap";

/*
TODO:
- create graph visual with dev skills charted 
- look into animating the data? 

*/

export const Skills = () => {
  return (
    <>
      <div><h2>Skills</h2></div>
      <Card className="bg-dark text-white">
      <div className="skills-container">
        <Card.Body>
          <Card.Text>
            Graph or visual layout of my skills and level of expertise/mastery for each:
            HTML
            CSS
            JavaScript
            React
            Node
            Git
            etc.
          </Card.Text>
        </Card.Body>
        </div>
      </Card>
    </>
  );
};
