import React from "react";
import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  CatssoftCatIcon,
  SocialIconLink,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";
import PolitykaPrywatnosciPDF from "./Polityka-Prywatnosci-catsSoft.pdf";
import KlauzulaInformacyjnaPDF from "./Klauzula-Informacyjna-catsSoft.pdf";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const { t } = useTranslation();

  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/" onClick={toggleHome}>
            <CatssoftCatIcon /> catsSoft.
          </SocialLogo>
          <WebsiteRights>
            catsSoft © {new Date().getFullYear()} {t("FooterCopyrights.1")}
          </WebsiteRights>
          <SocialIconLink href={PolitykaPrywatnosciPDF} target="_blank">
            {t("PrivacyPolicy.1")}
          </SocialIconLink>{" "}
          <SocialIconLink href={KlauzulaInformacyjnaPDF} target="_blank">
            {t("InformationClause.1")}
          </SocialIconLink>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
