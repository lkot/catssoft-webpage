import React from "react";
import { Button } from "../ButtonElements";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      {/* Creating sidebar wrapper so everything looks neat and tidy */}
      <SidebarWrapper>
        <SidebarMenu>
          {/* These below are the React Scrolls so that's why I did not
                    use slash '/' before e.g. link to 'news'. */}
          <SidebarLink to="about" onClick={toggle}>
            About catsSoft
          </SidebarLink>
          {/* <SidebarLink to="newsfeed" onClick={toggle}>
            Newsfeed
          </SidebarLink> */}
          <SidebarLink to="clients" onClick={toggle}>
            Clients
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
          {/* <SidebarLink to="contact" onClick={toggle}>
            Contact
          </SidebarLink> */}
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
            Contact Us
          </Button>
          {/* Here below I use slash '/', because it is a React Router. */}
          {/* <SidebarRoute to="contactForm" onClick={toggle}>
            Contact Us
          </SidebarRoute> */}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
