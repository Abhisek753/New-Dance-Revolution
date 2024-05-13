import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cr1 from "../../assets/cr1.png";
import cr2 from "../../assets/cr2.png";
import cr3 from "../../assets/cr3.png";
import cr4 from "../../assets/cr4.png";
import cr5 from "../../assets/cr5.png";

const Index = () => {
  return (
    <div>
      <Carousel autoPlay={true}>
        <div>
          <img src={cr1} />
        </div>
        <div>
          <img src={cr2} />
        </div>
        <div>
          <img src={cr3} />
        </div>
        <div>
          <img src={cr4} />
        </div>
        <div>
          <img src={cr5} />
        </div>
      </Carousel>
    </div>
  );
};

export default Index;
