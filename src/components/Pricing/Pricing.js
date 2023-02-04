import React from "react";
import { Button, Heading, TextWrapper } from "../../globalStyles";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingContainer,
  //PricingCardInfo,
  ImageWrapper,
  PricingImage,
  //PricingCardPlan,
  //PricingCardCost,
  //PricingCardFeatures,
  //PricingCardText,
  //PricingCardFeature,
  PricingCard,
} from "./PricingStyles";
import { pricingData } from "../../data/PricingData";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: "1rem" }}>
      <PricingSection id="pricing">
        <PricingWrapper>
          <Heading>Pick Your Best Option</Heading>

          <TextWrapper
            mb="1.2rem"
            weight="600"
            size="1.2rem"
            color="#fcc470"
            align="center"
          >
            We print the best price, best quality and fast delivery
          </TextWrapper>
          <PricingContainer>
            {pricingData.map((card, index) => (
              <PricingCard key={index}>
                <ImageWrapper key={index}>
                  <PricingImage src={card.images} />
                  {/* <PricingCardFeatures>{card.images}</PricingCardFeatures> */}
                  <Button>Get Started</Button>
                </ImageWrapper>
              </PricingCard>
            ))}
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
