import React from "react";
import Contact from "../components/Contact/Contact";
//import Carousel from "../components/Carousel/Carousel";
import { Content } from "../components/Content/Content";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import { heroTwo, heroThree } from "../data/HeroData";
//import { heroOne, heroTwo, heroThree } from "../data/HeroData";

// Hero Feature Content Carousel

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      {/* <Content {...heroOne} /> */}
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Contact />
    </>
  );
};

export default Home;
