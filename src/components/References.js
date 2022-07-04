import { Carousel } from "react-bootstrap";

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

export const References = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const refArr = exRefArr.map((ref)=>{
    return(
        <Carousel.Item id="slide">
        <div className="container">
          <h2>{ref.name}</h2>
          <h3>{ref.date}</h3>
          <p>{ref.message}</p>
        </div>
      </Carousel.Item>
    )
  })

  return (
    <Carousel
      id="references-banner"
      fade
      activeIndex={index}
      onSelect={handleSelect}
    >
    {refArr} 
    </Carousel>
  );
};
