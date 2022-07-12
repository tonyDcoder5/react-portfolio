import { Card } from "react-bootstrap";

/*
TODO:
- create ECard design with QR code
- add professional head shot picture
- add link to resume/contact form/sMplatforms
*/

export const ECard = () => {
  return (
    <>
      <div><h2>ECard</h2></div>
      <Card className="bg-dark text-white">
      <div className="ecard-container">
        {/* <Card.Img variant="right" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Text>
            ECard/Quick contact card with links to:
            Resume, Contact Me form, Social Media LinkTree
          </Card.Text>
        </Card.Body>
        </div>
      </Card>
    </>
  );
};
