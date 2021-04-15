import React, { useState } from "react";
import Video from "../../videos/catssoft-background-vid-blue.mp4";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBackground,
  VideoBackground,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer id="home">
        <HeroBackground>
          <VideoBackground
            autoPlay
            loop
            muted
            src={Video}
            type="video/mp4"
          ></VideoBackground>
        </HeroBackground>
        <HeroContent>
          <HeroH1>Catlike agile IT solutions.</HeroH1>
          {/* <HeroH1>IT solutions with catlike agility.</HeroH1> */}
          <HeroP>Want to know more? Contact us now!</HeroP>
          <HeroBtnWrapper>
            {/* When the cursor will go onto(and off) the button it will
              trigger the onHover function which changes the state. */}
            <Button
              to="contactForm"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-50}
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              //   Thanks to 'setting up' two options of button's color in
              //   ButtonElement component, there is a possibility to swiftly
              //   change the button colors (true values below).
              //   primary="true"
              //   dark="true"
            >
              {/* On button's hover, the arrow icon will change its shape. */}
              Contact Us {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
