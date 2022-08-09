import { Card, Carousel } from "react-bootstrap";

import { useState } from "react";


let RefArr = [
  {
    id: 1,
    name: "Kinsey Durham Grace",
    message: "Tony's amazing work ethic and unique creativity make him an unstoppable developer. His excitement and willingness to learn is refreshing. He would be a great asset on any team.",
    title: 'Infrastructure Engineer at Github',
    relation: 'Mentor at Thinkful',
  },
];

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
          <h4>{ref.title}</h4>          
          <p>{ref.relation}</p>
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
