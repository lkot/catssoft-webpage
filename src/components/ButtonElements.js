// The reusable button for all the website.
// There are also many different buttons, e.g. in Navbar, etc.,
// because of the fact that their are different NavLinks.
// This button will be a scroll link.

import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  /* What I've done below simply is that I've added hover animations, etc. 
  Without doing it with new style everytime. */
  background: ${({ primary }) => (primary ? "#1FB8FF" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};

  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#1FB8FF")};
    color: ${({ dark }) => (dark ? "#010606" : "#010606")};
  }
`;
