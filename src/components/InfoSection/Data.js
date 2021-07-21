//This is the way to use reusable and 'switchable-around' components.
//All the InfoSection components will be the
//same but just the text and routing will be different.
//Here I use data mapping to the particular files.

//This is the fill where I can pass in all these different values
//and update the design the website without having to hard code in these properties.

// import "../../i18n";
import { useTranslation } from "react-i18next";

// Language change functions.
// const { t, i18n } = useTranslation();

// function handleLangChange(lang) {
//   i18n.changeLanguage(lang);
// }

export const homeObjOne = {
  id: "about",
  //lightBackground with 'false' value will set up a default dark background colors
  //as I did in the InfoSection styling.
  lightBackground: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "About catsSoft",
  headline: "Solutions for both emerging & large companies.",
  description:
    "The catsSoft team designs and implements both small applications as well as versatile healthcare distributed systems.",
  buttonLabel: "Contact Us",
  // imgStart changes the positioning of the picture from left-to-right.
  imgStart: false,
  img: require("../../images/image-1.svg").default,
  alt: "TreeMan",
  dark: true,
  primary: true,
  darkText: false,

  showClients: false,

  firstOne: true,
};

export const homeObjTwo = {
  id: "clients",
  lightBackground: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Our clients",
  headline: "Companies who trusted our services.",
  description:
    "Throughtout years we've managed to provide solutions to number of clients. Co-operating with Polish and multinational firms helped us to deliver the best services possible. We make the companies thrive & embrace their potential!",
  buttonLabel: "Find out more",
  imgStart: true,
  img: require("../../images/image-2.svg").default,
  alt: "Jump",
  dark: true,
  primary: true,
  darkText: false,

  showClients: true,

  firstOne: false,
};

export const homeObjThree = {
  id: "services",
  lightBackground: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Services",
  headline: "catsSoft services.",
  description: "This is SERVICES page.",
  buttonLabel: "Check for services",
  imgStart: true,
  img: require("../../images/image-3.svg").default,
  alt: "Jump",
  dark: false,
  primary: false,
  darkText: true,

  showClients: false,
};

export const homeObjFour = {
  id: "about",
  lightBackground: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "About catsSoft",
  headline: "Solutions for both small & large companies.",
  description:
    "The catsSoft team designs and creates both small applicatios as well as healthcare distributed systems.",
  buttonLabel: "Contact Us",
  imgStart: false,
  img: require("../../images/image-1.svg").default,
  alt: "TreeMan",
  dark: true,
  primary: true,
  darkText: false,

  showClients: false,
};
