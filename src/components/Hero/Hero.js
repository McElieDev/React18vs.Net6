import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
} from "./HeroStyle";

const Hero = () => {
  //const navigate = useNavigate();
  return (
    <HeroSection>
      <HeroVideo src="./assets/hero.mp4" autoPlay muted />
      <Container>
        <MainHeading>Your Digital Printing service expert</MainHeading>
        <HeroText>
          We provide the best digital printing services for clients nationwide.
        </HeroText>
        <ButtonWrapper>
          <Link to="gallery-enquiry">
            <Button>Get Started</Button>
          </Link>
          <HeroButton>
            <Link
              to="gallery-enquiry"
              style={{ textDecoration: "none", borderBottom: "none" }}
            >
              Get Quote
            </Link>
          </HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
