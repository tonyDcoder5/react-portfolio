import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';

export const ProjectCard = (project) => {
  return (
    <div>
      <Card style={{ width: "14em" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
          <ListGroupItem>Skills Used</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">demo Link</Card.Link>
          <Card.Link href="#">github Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};
