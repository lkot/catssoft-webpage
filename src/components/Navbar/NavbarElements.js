// File with all Navbar components
import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { GiCat } from "react-icons/gi";

// using backticks(` `) enables to use 'normal CSS' in JSX
// adding media (@media) query below (practically it is 'sass')
// navbar will trigger on the transition when max-width will be 960px
export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.3s ease-in-out;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 768px), screen and (max-height: 480px) {
    z-index: 2;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  /* padding: 0 24px; */
  max-width: 1100px;
  /* padding: 0 20rem 0 0rem; */
`;
//a link from REACT ROUTER & I used REACT SCROLL
export const NavLogo = styled(LinkRouter)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;

    &:hover {
      transform: translate(-100%, 60%) scale(1.13);
      transition: all 0.2s ease-in-out;
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

// These are the REACT SCROLL LINKS
export const NavLinks = styled(LinkScroll)`
  color: #fff;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  /* Highlighting the bottom line of whatever link you clicked on. */
  &.active {
    border-bottom: 3px solid #1fb8ff;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const CatIcon = styled(GiCat)`
  margin-right: 4px;
  font-size: 2rem;
`;

// export const FlagContainer = styled.ul`
//   display: flex;
//   align-items: center;
//   list-style: none;
//   text-align: center;
//   /* margin-right: -22px; */
// `;

export const FlagContainer = styled.div`
  display: flex;
  /* padding: 0 0 0 4rem; */
  padding-left: 3rem;
  text-align: center;
  align-items: center;
`;

export const FlagImg = styled.img`
  margin-right: 4px;

  height: 20%;
  width: 15%;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (min-width: 400px) {
    /* display: none; */
  }
  @media screen and (max-width: 400px) {
    display: none;
  }
`;
