import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiCat } from "react-icons/gi";

export const FooterContainer = styled.footer`
  /* background-color: #010606; */
  background-color: black;
`;

export const FooterWrap = styled.div`
  padding: 24px auto 24px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 60px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #1fb8ff;
    transition: 0.3s ease-in-out;
  }
`;

export const SocialMedia = styled.section`
  /* max-width: 1100px; */
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  /* display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1100px; */

  padding: 48px 24px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;

  /* margin: 40px 0 auto 0; */

  /* display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1100px;
  margin: 0 auto; */

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;

  &:hover {
    color: #1fb8ff;
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  margin-bottom: 16px;
  color: #fff;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    color: #1fb8ff;
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;

export const CatssoftCatIcon = styled(GiCat)`
  margin-right: 4px;
  font-size: 2rem;
`;
