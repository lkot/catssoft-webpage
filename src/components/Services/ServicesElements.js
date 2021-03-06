import styled from "styled-components";
import BackgroundImgCode from "../../images/img-operating-system.svg";

export const ServicesContainer = styled.div`
  /* background-image: url(${BackgroundImgCode}); */
  /* background-position-y: 58vw; */
  /* height: 100%; */
  /* width: 100%; */

  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  /* background: #010606; */

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  //The grid of services will be three columns next to each other.
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 32px;
  padding: 0 30px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  // Now it will become a one column grid when the screen's max width will be 768px;.
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 300px;
  padding: 10px;
  /* box-shadow: 0 4px 3px rgba(0, 0, 0, 0.4); */
  box-shadow: 0 4px 20px #1fb8ff;
  transition: all 0.2s ease-in-out;
  margin-bottom: 160px;

  @media screen and (max-width: 1000px) {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  // Now it will become a one column grid when the screen's max width will be 768px;.
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    background-color: lightsteelblue;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  /* margin-bottom: 10px; */
  /* 
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  } */
`;

export const ServicesH1 = styled.h1`
  font-size: 3rem;
  /* color: #1fb8ff; */
  color: #1fb8ff;
  margin-bottom: 96px;
  text-align: center;
  /* box-shadow: 0 4px 30px #1fb8ff; */
  /* background-color: #1fb8ff; */
  /* border-radius: 5px; */
  /* opacity: 0.5; */
  /* border-bottom: 0 4px 30px #1fb8ff; */
  /* border-bottom: 5px solid #1fb8ff; */
  -webkit-box-shadow: 0px 20px 20px -20px #1fb8ff;
  -moz-box-shadow: 0px 20px 20px -20px #1fb8ff;
  box-shadow: 0px 20px 20px -20px #1fb8ff;
  /* border-bottom-color: transparent; */
  /* border-bottom-width: thick;
  border-top-width: thick; */

  @media screen and (max-width: 1000px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  // Now it will become a one column grid when the screen's max width will be 768px;.
  @media screen and (max-width: 768px) {
    margin-bottom: 5px;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: center;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const ServicesBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

//Background image.
// export const ServicesBackground = styled.div`
//   /* background-image: url(img-code.svg); */
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
// `;

// export const ImgBackground = styled.div`
//   background-image: url(${BackgroundImgCode});
//   width: 100%;
//   height: 100%;
//   -o-object-fit: cover;
//   object-fit: cover;
//   background: 232a34;
//   opacity: 70%;
//   /* filter: brightness(70%); */
// `;
