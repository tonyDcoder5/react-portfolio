import { Card, CardGroup } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

const exProjectsArr = [
  {
    id: 1,
    title: "WeLoveMovies WebApp",
    img: "../assets/img/weLoveMovies_preview.png",
    desc: "short example desc",
    skills: ["HTML ", "CSS ", "React "],
    demo: "https://welovemovies-ar-front.herokuapp.com/",
    github: "https://github.com/tonyDcoder5/welovemovies-be",
  },
  {
    id: 2,
    title: "Decoder/Encoder Ring",
    img: "",
    desc: "short example desc",
    skills: ["HTML", "CSS", "React"],
    demo: "https://tonydcoder5.github.io/decoderRing/",
    github: "https://github.com/tonyDcoder5/decoderRing",
  },
  {
    id: 3,
    title: "Restaurant Reservation App",
    img: "",
    desc: "short example desc",
    skills: ["HTML", "CSS", "React"],
    demo: "#",
    github: "#",
  },
    {
    id: 4,
    title: "EXAMPLE PROJECT",
    img: "EXAMPLE IMG",
    desc: "short example desc",
    skills: ["HTML ", "CSS ", "React "],
    demo: "#",
    github: "https://github.com/tonyDcoder5",
  },
  {
    id: 5,
    title: "EXAMPLE PROJECT",
    img: "EXAMPLE IMG",
    desc: "short example desc",
    skills: ["HTML ", "CSS ", "React "],
    demo: "#",
    github: "https://github.com/tonyDcoder5",
  },
];

/*
TODO:
  - adjust spacing rules between cards
  - add spacing around component 
  - look into animated card carousel? 
  - import projectsArr as a table 
*/

export const Projects = () => {
  return (
    <div id="projects" className="container">
      <CardGroup>
        {exProjectsArr.map((project)=> <ProjectCard project={project} /> )}
      </CardGroup>
    </div>
  );
};
