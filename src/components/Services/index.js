import React from "react";
import Icon1 from "../../images/image-4.svg";
import Icon2 from "../../images/image-5.svg";
import Icon3 from "../../images/image-6.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServicesBtnWrap,
} from "./ServicesElements";
import { Button } from "../ButtonElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>catsSoft Services.</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          {/* Good trick to import images below - this icon will be the 'hyperlink'. */}
          <ServicesIcon src={Icon3} />
          <ServicesH2>Web Development.</ServicesH2>
          <ServicesP>
            Our specialists develop high-quality software solutions with catlike
            agility.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          {/* Good trick to import images below - this icon will be the 'hyperlink'. */}
          <ServicesIcon src={Icon1} />
          <ServicesH2>IT Consulting.</ServicesH2>
          <ServicesP>
            We know from experience what your challenges are and how best to
            deliver a full range of specialized IT services.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          {/* Good trick to import images below - this icon will be the 'hyperlink'. */}
          <ServicesIcon src={Icon2} />
          <ServicesH2>Database Development.</ServicesH2>
          <ServicesP>
            Our company is specializing in database development relying on solid
            domain expertise.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
      {/* <ServicesBtnWrap>
        <Button
          // to="home"
          to="contactForm"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
          dark={false}
          primary={false}
          darkText={true}
        >
          Contact Us
        </Button>
      </ServicesBtnWrap> */}
    </ServicesContainer>
  );
};

export default Services;
