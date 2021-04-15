import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";
import { SliderData } from "../components/SliderContainer/SliderData";
import Form from "../components/EmailForm/Form";
import ImageSlider from "../components/SliderContainer";

const Home = () => {
  //Function setIs is updating a isOpen - it's a setter
  //By default it is set on false.
  const [isOpen, setIsOpen] = useState(false);

  //Function that updates/changes the State.
  //Basically it changes the State from false to true and the opposite way.
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      {/* Passing data to the InfoSection as a homeObjNumber. */}
      <InfoSection {...homeObjOne} />
      <Services />
      <InfoSection {...homeObjTwo} />
      <ImageSlider slides={SliderData} />
      <Form />
      <Footer />
    </>
  );
};

export default Home;
