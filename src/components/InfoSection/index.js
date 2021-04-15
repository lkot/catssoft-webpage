//Reusable InfoSection used in all of the 'pages'.

import React from "react";
import { Button } from "../ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({
  lightBackground,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark1,
  dark2,
  showClients,
}) => {
  return (
    <>
      {/* Passing values, in this case through the 'id'. */}
      <InfoContainer lightBackground={lightBackground} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                {/* Passing properties of homeObjOne object from Data.js file. */}
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  {/* Using React Scroll properties (smooth, etc.) 
                  For instance offset wth -80 value will trigger
                  the hovering Navbars pages from the bottom
                  when you scroll down to its section*/}
                  <Button
                    // to="home"
                    to={showClients ? "clientsSlider" : "contactForm"}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    // The solution below was found on StackOverflow (don't ask me why).
                    // Basically 1 means true and 0 means false.
                    primary={primary ? 1 : 0}
                    dark={dark1 ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    // showClients={showClients ? 1 : 0}
                    // to={"clientsList" ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;