import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';

/*
TODO:
  - adjust spacing rules and text-font-alignment-colors
  - add images of project screenshots as preview
  - make links into aesthetic icons

*/

export const ProjectCard = ({project}) => {
  return (
    <div>
      <Card style={{ width: "14em" }}>
        <Card.Img variant="top" src={project.img} />
        <Card.Body>
          <Card.Title>Project Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{project.title}</ListGroupItem>
          <ListGroupItem>{project.desc}</ListGroupItem>
          <ListGroupItem>{project.skills}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href={project.demo} target="_blank">demo Link</Card.Link>
          <Card.Link href={project.github} target="_blank">github Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};
