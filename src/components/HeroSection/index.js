import React, { useState, useEffect } from 'react';
import Video from '../../videos/catssoft-background-vid-blue.mp4';
import { Button } from '../Buttons/ButtonElements';
import {
	HeroContainer,
	HeroBackground,
	VideoBackground,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight,
	ImgBackground,
} from './HeroElements';
// import ImgWelcomeCats from "../../images/undraw_working_late.svg";
import ImgWelcomeCats from '../../images/undraw_Code_typing.svg';
import '../../i18n';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
	useEffect(() => {
		AOS.init({
			startEvent: 'DOMContentLoaded',
			offset: 200,
			duration: 2000,
			once: true,
		});
	});

	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};

	// Language change functions.
	// const { t, i18n } = useTranslation();
	const { t } = useTranslation();

	// function handleLangChange(lang) {
	//   i18n.changeLanguage(lang);
	// }

	return (
		<>
			<HeroContainer id='home'>
				<HeroBackground>
					<VideoBackground
						autoPlay
						loop
						muted
						src={Video}
						type='video/mp4'
					></VideoBackground>
				</HeroBackground>
				<HeroContent>
					<ImgBackground
						src={ImgWelcomeCats}
						alt='welcome-cats'
						data-aos='fade-down'
						data-aos-delay='600'
					/>
					<HeroH1 data-aos='fade-down' data-aos-delay='400'>
						{t('HeroSectionH1.1')}
					</HeroH1>
					{/* <HeroH1>IT solutions with catlike agility.</HeroH1> */}
					<HeroP data-aos='fade-down' data-aos-delay='200'>
						{t('HeroSectionP1.1')}
					</HeroP>
					<HeroBtnWrapper>
						{/* When the cursor will go onto(and off) the button it will
              trigger the onHover function which changes the state. */}
						<Button
							to='contactForm'
							smooth={true}
							duration={500}
							spy={true}
							exact='true'
							offset={-50}
							onMouseEnter={onHover}
							onMouseLeave={onHover}
							//   Thanks to 'setting up' two options of button's color in
							//   ButtonElement component, there is a possibility to swiftly
							//   change the button colors (true values below).
							//   primary="true"
							//   dark="true"
						>
							{/* On button's hover, the arrow icon will change its shape. */}
							{t('ContactHeroBtn.1')}
							{hover ? <ArrowForward /> : <ArrowRight />}
						</Button>
					</HeroBtnWrapper>
				</HeroContent>
			</HeroContainer>
		</>
	);
};

export default HeroSection;
