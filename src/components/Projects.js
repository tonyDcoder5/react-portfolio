import { Card, CardGroup } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

const exProjectsArr = [
  {
    id: 1,
    title: "example project title",
    img: "",
    desc: "short example desc",
    skills: ["HTML", "CSS", "React"],
    demo: "",
    github: "",
  },
  {
    id: 2,
    title: "example project name 2",
    img: "",
    desc: "short example desc",
    skills: ["HTML", "CSS", "React"],
    demo: "",
    github: "",
  },
  {
    id: 3,
    title: "example project name 3",
    img: "",
    desc: "short example desc",
    skills: ["HTML", "CSS", "React"],
    demo: "",
    github: "",
  },
];

export const Projects = () => {
  return (
    <div className="container">
      <CardGroup>
        {exProjectsArr.map((project)=> <ProjectCard project={project} /> )}
      </CardGroup>
    </div>
  );
};
