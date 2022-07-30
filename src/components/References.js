import { Card, Carousel } from "react-bootstrap";

import { useState } from "react";

let exRefArr = [
  {
    id: 1,
    name: "Kinsey Grace",
    message: "example reference message",
    date: Date.now(),
  },
  {
    id: 2,
    name: "Jenny Allar",
    message: "example reference message",
    date: Date.now(),
  },
  {
    id: 3,
    name: "Tom Riddle",
    message: "example reference message",
    date: Date.now(),
  },
];

/*
TODO:
  - adjust spacing, border, and text rules for more aesthetic look
  - add content from an int datatable refArr

*/

export const References = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const refArr = exRefArr.map((ref, index) => {
    return (
      <Carousel.Item id="slide" key={index}>
        <div className="reference-card" key={index}>
          <h2>{ref.name}</h2>
          <h3>{ref.date}</h3>
          <p>{ref.message}</p>
          </div>
      </Carousel.Item>
    );
  });

  return (      
    <div className="container references">
      <div className="reference-card">
        <h2>Testimonials/References</h2>
        <Carousel
          id="references-banner"
          fade
          className="reference-slider"
          activeIndex={index}
          onSelect={handleSelect}
        >
          {refArr}
        </Carousel>
        </div>
    </div>     
  );
};
