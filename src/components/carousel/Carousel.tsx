import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {}

const Carousel: React.FC<Props> = () => {
  const [slides] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      title: "Slide 1",
      description: "This is slide 1",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1508948956644-0017e845d797?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvZ3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60",
      title: "Slide 2",
      description: "This is slide 2",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1497994139250-caecb78f9df9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZ3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60",
      title: "Slide 3",
      description: "This is slide 3",
    },
  ]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div key={slide.id}>
          <div
            style={{
              width: "100%",
              height: "70vh",
            }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
          <h3>{slide.title}</h3>
          <p>{slide.description}</p>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
