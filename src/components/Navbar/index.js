//Navbar's index.js file is a file with all JSX code.
import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  CatIcon,
  FlagContainer,
  FlagImg,
} from "./NavbarElements";
import "../../i18n";
import { useTranslation } from "react-i18next";
// import PolishFlag from "../../images/polish-flag.png";
// import EnglishFlag from "../../images/english-flag.png";
import PolishFlag from "../../images/img-circle-polish.png";
import EnglishFlag from "../../images/img-circle-english.png";
import GermanFlag from "../../images/img-circle-germany.png";

//Passing the toggle value.
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  //Function stating that when user passed a particular point,
  //let it trigger.

  const changeNav = () => {
    //This is how I targeted particular window.
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  // Language change functions.
  const { t, i18n } = useTranslation();

  function handleLangChange(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <>
      {/* It helps to change the e.g. icon's colors in the whole project. */}
      <IconContext.Provider value={{ color: "#fff" }}>
        {/* Later on I can refactor code a bit and make it so some parts of the code 
        do not repeat themselves unneccessary. */}
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <CatIcon /> catsSoft.
            </NavLogo>
            <MobileIcon onClick={toggle}>
              {/*FaBars - these are react icons */}
              <FaBars />
            </MobileIcon>
            {/* It is a wrapper/container for menu items */}
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  //The offset value is set on -80, because
                  //Navbar's margin is set on -80px.
                  offset={-80}
                >
                  {t("AboutUsNavbar.1")}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {t("ServicesNavbar.1")}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="clients"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {t("ClientsNavbar.1")}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contactForm"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-70}
                >
                  {t("ContactNavbar.1")}
                </NavLinks>
              </NavItem>
            </NavMenu>
            {/* <NavBtn>
              <NavBtnLink to="/signin">Contact Us</NavBtnLink>
            </NavBtn> */}
          </NavbarContainer>
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
          {/* <FlagItem onClick={() => handleLangChange("en")}>
              <img src={EnglishFlag} alt="polish flag" width="35%" />
            </FlagItem>
            <FlagItem onClick={() => handleLangChange("pl")}>
              <img src={PolishFlag} alt="polish flag" width="35%" />
            </FlagItem> */}
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
