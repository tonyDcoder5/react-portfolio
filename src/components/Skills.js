import { Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export const Skills = () => {

  const skills = [
    {name: "HTML5", level: 5}, 
    {name: "CSS3", level: 5},
    {name: "Javascript", level: 6},
    {name: "ReactJS", level: 6},
    {name: "Node", level: 6},
    {name: "Git", level: 7},
    {name: "PostgreSQL", level: 6},
    {name: "Express", level: 6},
    {name: "Knex", level: 4},
    {name: "REST APIs", level: 5},
  ]

  let display = skills.map((skill, index)=>{
    return (
      <div key={index} style={{ width: 100, height: 100, marginLeft: "2em" }}>
                <CircularProgressbar value={skill.level * 10} text={`Lvl ${skill.level}`} />;
                  <h5>{skill.name}</h5>
                </div>
    )
  })

  const responsive = {
    superLargeDesktop: {
      breakpoint: {max: 4000, min:3000},
      items:5
    },
    desktop: {
      breakpoint: {max: 3000, min:1024},
      items:3
    },
    tabley: {
      breakpoint: {max: 1024, min:600},
      items:2
    },
    mobile: {
      breakpoint: {max: 600, min:0},
      items:1
    },
  }

  return (
    <div className="container skills-container">
      <Card className="bg-dark text-white p-5 mt-5">  
        <Card.Body>
              <h2>
                Skills 
              </h2>
              <Carousel responsive={responsive} infinite={true} className="skill-slider p-5 mt-3">
              {display}
              </Carousel>
        </Card.Body>
      </Card>   
      </div>
  );
};