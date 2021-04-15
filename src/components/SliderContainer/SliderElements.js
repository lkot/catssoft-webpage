// import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export const SliderContainer = styled.div`
  color: #fff;
  height: 100vh;
  margin-top: 50px;

  /* margin-top: 40px; */

  /* background-color: lightgrey; */

  @media screen and (max-width: 1000px) {
    padding-top: 20px;
    margin-bottom: 20px;
    height: 95vh;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 5px;
    height: 70vh;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    height: 50vh;
  }
`;

export const SliderWrapper = styled.section`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: grey; */
`;

export const SlideRightArrow = styled(FaArrowAltCircleRight)`
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  color: #1fb8ff;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  color: black;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const SlideLeftArrow = styled(FaArrowAltCircleLeft)`
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  color: #1fb8ff;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  color: black;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const SlideImg = styled.img`
  width: 1000px;
  height: 550px;
  border-radius: 10px;

  @media screen and (max-width: 1000px) {
    padding-bottom: 20px;
    width: 75vh;
    height: 75vh;
  }

  @media screen and (max-width: 768px) {
    width: 40vh;
    height: 40vh;
  }

  @media screen and (max-width: 480px) {
    width: 20vh;
    height: 20vh;
    /* margin-bottom: 20px; */
  }
`;

export const SlideItemNonactive = styled.img`
  opacity: 0;
  transition-duration: 1s ease;
`;

export const SlideItemActive = styled.img`
  opacity: 1;
  transition-duration: 3s;
  transform: scale(1.1);
`;

export const SliderH1 = styled.h1`
  font-size: 3rem;
  /* color: #1fb8ff; */
  color: black;

  text-align: center;

  @media screen and (max-width: 1000px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 5px;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const SlideBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
