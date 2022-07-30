import React from "react";
import { Accordion } from "react-bootstrap";

/*
TODO:
  - adjust spacing rules between cards
  - add spacing around component 
  - look into animated card carousel? 
  - import projectsArr as a table 
*/

let arr = [
  {
    id: 1,
    title: "WeLoveMovies WebApp",
    img: "../assets/img/weLoveMovies_preview.png",
    desc: "A webpage built using REST API standards to display sample movie theater data stored on a standalone PostgreSQL database using a frontend UI built with React",
    skills: ["HTML", "CSS ", "Javascript", "React", "Express", "PostgreSQL", "Knex"],
    demo: "https://welovemovies-ar-front.herokuapp.com/",
    github: "https://github.com/tonyDcoder5/welovemovies-be",
  },
  {
    id: 2,
    title: "Decoder/Encoder Ring",
    img: `../assets/img/decoder_preview.png`,
    desc: "A frontend web application that uses Javascript to encode messages using several different ciphers: Ceaser Shift, Polybius Square, and Subsitution",
    skills: ["HTML", "CSS", "Javascript"],
    demo: "https://tonydcoder5.github.io/decoderRing/",
    github: "https://github.com/tonyDcoder5/decoderRing",
  },
  {
    id: 3,
    title: "Restaurant Reservation App",
    img: `../assets/img/dashboard_view_1`,
    desc: "A fullstack webapp built using ReactJS to display mock restaurant reservations data stored on a standalone PostgreSQL database using RESTful API standards to allow for CRUDL (Create, Read, Update, Delete, List) functioning on the front-end UI",
    skills: ["HTML", "CSS", "Javascript", "React", "Express", "PostgreSQL", "Knex"],
    demo: "https://tdc-rest-res-fe.herokuapp.com/dashboard",
    github: "https://github.com/tonyDcoder5/starter-restaurant-reservation",
  },
];

const projects = arr.map((project, index) => {
  return (
    <Accordion.Item key={index} eventKey={index} className="project-card">
      <Accordion.Header>{project.title}</Accordion.Header>
      <Accordion.Body>
        <section>
          <img src={project.img} alt={`${project.title} preview image`} />
          <p className="m-4">{project.desc}</p>
          <div className="d-flex flex-row justify-content-between">
            <a href={project.github} target="_blank">
              GitHub Repo
            </a>
            <a href={project.demo} target="_blank">
              Demo Link
            </a>
          </div>
        </section>
      </Accordion.Body>
    </Accordion.Item>
  );
});

export const Projects = () => {
  return (
    <div className="container project" id="projects">
      <div className="project-heading">
        <h2>Project Board</h2>
      </div>
      <div className="container project-board">
        <Accordion defaultActiveKey="0" flush>
          {/* {projects} */}
          <Accordion.Item
            key={arr[0].id}
            eventKey={arr[0].id}
            className="project-card"
          >
            <Accordion.Header>{arr[0].title}</Accordion.Header>
            <Accordion.Body>
              <section>
                <img
                  src={require(`../assets/img/weLoveMovies_preview.png`)}
                  alt={`${arr[0].title} preview image`}
                />
                <p className="m-4">{arr[0].desc}</p>
                <p className="m-4">Skills Used:</p>
                <ul className="ml-4">
                  {arr[0].skills.map((skill)=>{
                    return <li>{skill}</li>
                  })}
                </ul>
                <div className="d-flex flex-row justify-content-between">
                  <a href={arr[0].github} target="_blank">
                    GitHub Repo
                  </a>
                  <a href={arr[0].demo} target="_blank">
                    Demo Link
                  </a>
                </div>
              </section>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            key={arr[1].id}
            eventKey={arr[1].id}
            className="project-card"
          >
            <Accordion.Header>{arr[1].title}</Accordion.Header>
            <Accordion.Body>
              <section>
                <img
                  src={require(`../assets/img/decoder_preview.png`)}
                  alt={`${arr[1].title} preview image`}
                />
                 <p className="m-4">{arr[1].desc}</p>
                <p className="m-4">Skills Used:</p>
                <ul className="ml-4">
                  {arr[1].skills.map((skill)=>{
                    return <li>{skill}</li>
                  })}
                </ul>
                <div className="d-flex flex-row justify-content-between">
                  <a href={arr[1].github} target="_blank">
                    GitHub Repo
                  </a>
                  <a href={arr[1].demo} target="_blank">
                    Demo Link
                  </a>
                </div>
              </section>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            key={arr[2].id}
            eventKey={arr[2].id}
            className="project-card"
          >
            <Accordion.Header>{arr[2].title}</Accordion.Header>
            <Accordion.Body>
              <section>
                <img
                  src={require(`../assets/img/dashboard_view_1.png`)}
                  alt={`${arr[2].title} preview image`}
                />
                 <p className="m-4">{arr[2].desc}</p>
                <p className="m-4">Skills Used:</p>
                <ul className="ml-4">
                  {arr[2].skills.map((skill)=>{
                    return <li>{skill}</li>
                  })}
                </ul>
                <div className="d-flex flex-row justify-content-between">
                  <a href={arr[2].github} target="_blank">
                    GitHub Repo
                  </a>
                  <a href={arr[2].demo} target="_blank">
                    Demo Link
                  </a>
                </div>
              </section>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};
