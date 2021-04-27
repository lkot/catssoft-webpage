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
  ServicesBackground,
  ImgBackground,
} from "./ServicesElements";
// import { Button } from "../ButtonElements";
// import ImgageBackground from "../../images/img-code.svg";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <ServicesContainer id="services">
      {/* <ServicesBackground>
        <ImgBackground src={ImgageBackground}></ImgBackground>
      </ServicesBackground> */}
      <ServicesH1>{t("ServicesH1.1")}</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          {/* Good trick to import images below - this icon will be the 'hyperlink'. */}
          <ServicesIcon src={Icon3} />
          <ServicesH2>{t("ServicesWebDevH2.1")}</ServicesH2>
          <ServicesP>{t("ServicesWebDevP.1")}</ServicesP>
        </ServicesCard>
        <ServicesCard>
          {/* Good trick to import images below - this icon will be the 'hyperlink'. */}
          <ServicesIcon src={Icon1} />
          <ServicesH2>{t("ServicesITConsultingH2.1")}</ServicesH2>
          <ServicesP>{t("ServicesITConsultingP.1")}</ServicesP>
        </ServicesCard>
        <ServicesCard>
          {/* Good trick to import images below - this icon will be the 'hyperlink'. */}
          <ServicesIcon src={Icon2} />
          <ServicesH2>{t("ServicesDatabaseDevH2.1")}</ServicesH2>
          <ServicesP>{t("ServicesDatabaseDevP.1")}</ServicesP>
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
