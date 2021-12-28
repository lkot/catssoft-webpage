import React, { useState, Component, Suspense } from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';
import { SliderData } from '../components/SliderContainer/SliderData';
import Form from '../components/EmailForm/Form';
import ImageSlider from '../components/SliderContainer';
import CookieConsent from 'react-cookie-consent';

import '../App.css';
import '../i18n';
import LanguageSelector from '../LanguageSelector';
import { useTranslation } from 'react-i18next';

import { Translator, Translate } from 'react-auto-translate';

const Home = () => {
	//Function setIs is updating a isOpen - it's a setter
	//By default it is set on false.
	const [isOpen, setIsOpen] = useState(false);

	//Function that updates/changes the State.
	//Basically it changes the State from false to true and the opposite way.
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	// Language change functions.
	const { t, i18n } = useTranslation();

	// function handleClick(lang) {
	//   i18n.changeLanguage(lang);
	// }

	return (
		<>
			{/* <Translator
        // cacheProvider={cacheProvider}
        from="en"
        to="pl"
        googleApiKey="API_KEY"
      > */}
			<Suspense fallback={null}>
				<Sidebar isOpen={isOpen} toggle={toggle} />
				<Navbar toggle={toggle} />
				<HeroSection />
				{/* <LanguageSelector /> */}

				{/* <nav
        style={{ width: "100%", padding: "2rem 0", backgroundColor: "grey" }}
      >
        <button onClick={() => handleClick("en")}>English</button>
        <button onClick={() => handleClick("pl")}>Polish</button>
      </nav> */}

				{/* Passing data to the InfoSection as a homeObjNumber. */}
				<InfoSection {...homeObjOne} />
				<Services />
				<InfoSection {...homeObjTwo} />
				<ImageSlider slides={SliderData} />
				<Form />
				<Footer />
				<CookieConsent
					style={{ background: 'black' }}
					buttonStyle={{ color: '#000', backgroundColor: '#1fb8ff', fontSize: '13px', borderRadius: '8px' }}
				>
					This website uses cookies.
				</CookieConsent>
				{/* </Translator> */}
			</Suspense>
		</>
	);
};

export default Home;
