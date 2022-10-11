import React from "react";
import { Accordion } from "react-bootstrap";

let ongoingArr = [
 
];

let completedArr = [
  {
    id: 0,
    title: "GolfYankeeSix Webpage",
    img: require("../assets/img/GYS_v5homepage.png"),
    desc: "A volunteer project for a Veteran Mental Health organization who needed a webpage built for their marketing efforts. I used ReactJS and Bootstrap for the front end build, and NodeJS with Express for the back end build, deployed with Heroku.",
    skills: [
      "HTML",
      "CSS ",
      "Javascript",
      "React",
      "Express",
      "PostgreSQL",
      "Knex",
      "Github",
      "Git",
      "Heroku",
    ],
    demo: "https://www.golfyankeesix.com/",
    github: "https://github.com/tonyDcoder5/GYS_webpage_backup",
  },
  {
    id: 1,
    title: "WeLoveMovies WebApp",
    img: require("../assets/img/weLoveMovies_preview.png"),
    desc: "A webpage built using REST API standards to display sample movie theater data stored on a standalone PostgreSQL database using a frontend UI built with React",
    skills: [
      "HTML",
      "CSS ",
      "Javascript",
      "React",
      "Express",
      "PostgreSQL",
      "Knex",
    ],
    demo: "https://welovemovies-ar-front.herokuapp.com/",
    github: "https://github.com/tonyDcoder5/welovemovies-be",
  },
  {
    id: 2,
    title: "Decoder/Encoder Ring",
    img: require(`../assets/img/decoder_preview.png`),
    desc: "A frontend web application that uses Javascript to encode messages using several different ciphers: Ceaser Shift, Polybius Square, and Subsitution",
    skills: ["HTML", "CSS", "Javascript"],
    demo: "https://tonydcoder5.github.io/decoderRing/",
    github: "https://github.com/tonyDcoder5/decoderRing",
  },
  {
    id: 3,
    title: "Restaurant Reservation App",
    img: require(`../assets/img/dashboard_view_1.png`),
    desc: "A fullstack webapp built using ReactJS to display mock restaurant reservations data stored on a standalone PostgreSQL database using RESTful API standards to allow for CRUDL (Create, Read, Update, Delete, List) functioning on the front-end UI",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Express",
      "PostgreSQL",
      "Knex",
    ],
    demo: "https://tdc-rest-res-fe.herokuapp.com/dashboard",
    github: "https://github.com/tonyDcoder5/starter-restaurant-reservation",
  },
];

const completeProjects = completedArr.map((project, index) => {
  return (
    <>
      <Accordion.Item
        key={project.id}
        eventKey={project.id}
        className="project-card"
      >
        <Accordion.Header>{project.title}</Accordion.Header>
        <Accordion.Body>
          <section>
            <img
              src={`${project.img}`}
              alt={`${project.title} preview image`}
            />
            <p className="m-4">{project.desc}</p>
            <p className="m-4">Skills Used:</p>
            <ul className="ml-4">
              {project.skills.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
            </ul>
            <div className="d-flex flex-row justify-content-between">
              <a href={project.github} target="_blank">
                <button className="btn btn-secondary">GitHub Repo</button>
              </a>
              <a href={project.demo} target="_blank">
                <button className="btn btn-primary">Demo Link</button>
              </a>
            </div>
          </section>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
});

const ongoingProjects = ongoingArr.map((project, index) => {
  return (
    <>
      <Accordion.Item
        key={project.id}
        eventKey={project.id}
        className="project-card"
      >
        <Accordion.Header>{project.title}</Accordion.Header>
        <Accordion.Body>
          <section>
            <img
              src={`${project.img}`}
              alt={`${project.title} preview image`}
            />
            <p className="m-4">{project.desc}</p>
            <p className="m-4">Skills Used:</p>
            <ul className="ml-4">
              {project.skills.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
            </ul>
            <div className="d-flex flex-row justify-content-between">
              <a href={project.github} target="_blank">
                <button className="btn btn-secondary">GitHub Repo</button>
              </a>
              <a href={project.demo} target="_blank">
                <button className="btn btn-primary">Demo Link</button>
              </a>
            </div>
          </section>
        </Accordion.Body>
      </Accordion.Item>
    </>
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
          <div className="mb-5">
            <h3>Ongoing</h3>
            {ongoingProjects}
          </div>
          <div>
            <h3>Completed</h3>
            {completeProjects}
          </div>
        </Accordion>
      </div>
    </div>
  );
};
