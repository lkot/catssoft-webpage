import React from "react";
import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  CatssoftCatIcon,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";

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
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
