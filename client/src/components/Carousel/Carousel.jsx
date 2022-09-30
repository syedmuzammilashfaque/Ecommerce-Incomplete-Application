import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

//  all images import for slider data  //
import image1 from "../../images/carouselImage1.png";
import image2 from "../../images/carouselImage2.png";
import image3 from "../../images/carouselImage3.png";

const PreviousBtn = (props) => {
  const { className, onClick } = props; //**-- */
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};

const data = [image1, image2, image3];

const Carousel = () => {
  return (
    <div className="carousel">
      <Slider
        autoplay
        autoplaySpeed={2000}
        initialSlide={2}
        infinite
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        customPaging={(i) => {
          return (
            <div>
              <img
                src={data[i]}
                alt="ma shop product"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          );
        }}
      >
        {data.map((item) => (
          <div>
            <img
              src={item}
              alt="ma shop product"
              style={{ width: "100%", height: "40vh" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
