import React from "react";
import { Button } from "../Buttons/ButtonElements";
import { CatIcon, FlagImg, NavLogo } from "../Navbar/NavbarElements";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  FlagContainer,
} from "./SidebarElements";
import { animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import PolishFlag from "../../images/img-circle-polish.png";
import EnglishFlag from "../../images/img-circle-english.png";
import GermanFlag from "../../images/img-circle-germany.png";

const Sidebar = ({ isOpen, toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  // Language change functions.
  // const { t } = useTranslation();
  const { t, i18n } = useTranslation();

  function handleLangChange(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <NavLogo to="/" onClick={toggleHome}>
        <CatIcon /> catsSoft.
        {/* <FlagContainer>
          <FlagImg
            src={PolishFlag}
            onClick={() => handleLangChange("pl")}
            alt="polish flag"
          />
          <FlagImg
            src={EnglishFlag}
            onClick={() => handleLangChange("en")}
            alt="english flag"
          />
          <FlagImg
            src={GermanFlag}
            onClick={() => handleLangChange("de")}
            alt="german flag"
          />
        </FlagContainer> */}
      </NavLogo>
      {/* <FlagContainer>
        <FlagImg
          src={PolishFlag}
          onClick={() => handleLangChange("pl")}
          alt="polish flag"
        />
        <FlagImg
          src={EnglishFlag}
          onClick={() => handleLangChange("en")}
          alt="english flag"
        />
        <FlagImg
          src={GermanFlag}
          onClick={() => handleLangChange("de")}
          alt="german flag"
        />
      </FlagContainer> */}
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      {/* Creating sidebar wrapper so everything looks neat and tidy */}
      <SidebarWrapper>
        <SidebarMenu>
          {/* These below are the React Scrolls so that's why I did not
                    use slash '/' before e.g. link to 'news'. */}
          <SidebarLink to="about" onClick={toggle}>
            {t("AboutUsNavbar.1")}
          </SidebarLink>
          <SidebarLink to="clients" onClick={toggle}>
            {t("ClientsNavbar.1")}
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            {t("ServicesNavbar.1")}
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <Button
            to="contactForm"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
            dark={false}
            primary={true}
            darkText={true}
          >
            {t("ContactHeroBtn.1")}
          </Button>
          {/* Here below I use slash '/', because it is a React Router. */}
          {/* <SidebarRoute to="contactForm" onClick={toggle}>
            Contact Us
          </SidebarRoute> */}
        </SideBtnWrap>
      </SidebarWrapper>
      <FlagContainer>
        <FlagImg
          src={PolishFlag}
          onClick={() => handleLangChange("pl")}
          alt="polish flag"
        />
        <FlagImg
          src={EnglishFlag}
          onClick={() => handleLangChange("en")}
          alt="english flag"
        />
        <FlagImg
          src={GermanFlag}
          onClick={() => handleLangChange("de")}
          alt="german flag"
        />
      </FlagContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
