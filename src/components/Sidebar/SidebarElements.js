import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;

  /* If the sidebar is opened(is true - meaning icon was clicked) 
    then you can see it in 100% and it was not clicked then it is '0'
    what means it will be invisible. */
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};

  /* It will make the sidebar slide down from the top. */
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  @media screen and (max-width: 768px), screen and (max-height: 200px) {
    z-index: 3;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;

  &:hover {
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #1fb8ff;
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -150px;
  margin-bottom: 20px;
`;

export const SidebarRoute = styled(LinkRouter)`
  border-radius: 50px;
  background: #1fb8ff;
  white-space: nowrap;
  padding: 16px 32px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: black;
    transform: scale(1.02);
  }
`;

export const FlagContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  list-style: none;
  justify-content: center;
`;

export const FlagImg = styled.img`
  margin-right: 4px;
  height: 10%;
  width: 10%;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  /* @media screen and (max-width: 768px) {
    height: 5%;
    width: 5%;
  } */

  /* @media screen and (min-width: 768) {
    width: auto;
    height: auto;
    display: none;
  } */

  /* @media screen and (min-width: 400px) {
    display: none;
  } */
`;
