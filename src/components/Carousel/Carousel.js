import React from "react";
//import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
//import { IconContext } from "react-icons";
//import { Button } from "react-bootstrap";
//import { sliderSettings } from "../../data/CarouselData";
import { Row, Heading, Section } from "../../globalStyles";
import {
  // ButtonContainer,
  ReviewSlider,
  // ImageWrapper,
  // CarouselImage,
  CardButton,
} from "./CarouselStyles";
//import { Link } from "react-router-dom";

const Carousel = () => {
  // const [sliderRef, setSliderRef] = useState(null);

  return (
    <Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
      <Row justify="space-between" margin="1rem" wrap="wrap">
        <Heading width="auto" inverse>
          Page Not Found!
        </Heading>
        <CardButton>Back to Home Page</CardButton>
      </Row>

      <ReviewSlider></ReviewSlider>
    </Section>
  );
};

export default Carousel;
