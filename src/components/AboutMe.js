import { Card } from "react-bootstrap";


export const AboutMe = () => {
  return (
<>
<div className="container about-container">
<Card className="bg-dark text-white p-3 mt-3">
    <Card.Body>
      <Card.Text>
        <h2 className="mt-2">About Me</h2>
        <p className="p-3">
          After graduating in 2017 from the USF College of Business, 
          I transitioned between various industries looking for my 
          place in the world. At each position I found myself analyzing the technology used, imagining ways I could improve the way the technology can be used if I had the skill. 
          </p>
      </Card.Text>
      <Card.Img className="p-3" src={require("../assets/img/personal-pic.png")} />
      <Card.Text className="mt-3">
      <p className="p-3">
          And so I took on Thinkful's Engineering Immersion bootcamp
          to hone the skills I had been introduced to in my 
          undergraduate coursework. With the skills I have built
          over the last year, I hope to continue improving my skills to provide the best service I can as a growing Web Developer. 
        </p>
      </Card.Text>
    </Card.Body>
  </Card>
</div></>
  );
};