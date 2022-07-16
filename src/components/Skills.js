import { Card } from "react-bootstrap";

/*
TODO:
- create graph visual with dev skills charted 
- look into animating the data? 

*/

export const Skills = () => {

  const skills = [
    "HTML", "CSS", "JavaScript",
            "ReactJS",
            "Node",
            "Git",
            "Postgres",
            "Express",
            "Knex",
  ]

  return (
    <>
    <div className="container skills-container">
      <Card className="bg-dark text-white p-3 mt-5">  
        <Card.Body>
          <Card.Text> 
            <h2>Skills</h2>
              <p>Graph or visual layout of my skills and level of expertise/mastery for each:
              </p>
              {skills.map((skill)=>{
                return <p>{skill}</p>
              })}
          </Card.Text>
        </Card.Body>
      </Card>    
      </div>
    </>
  );
};
