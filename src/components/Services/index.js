import React, { useEffect } from 'react';
import Icon1 from '../../images/image-4.svg';
import Icon2 from '../../images/image-5.svg';
import Icon3 from '../../images/image-6.svg';
import {
	ServicesContainer,
	ServicesH1,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesH2,
	ServicesP,
	ServicesBtnWrap,
	ServicesBackground,
	ImgBackground,
} from './ServicesElements';
// import { Button } from "../ButtonElements";
// import ImgageBackground from "../../images/img-code.svg";
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
	useEffect(() => {
		AOS.init({
			startEvent: 'DOMContentLoaded',
			offset: 250,
			duration: 1500,
			once: true,
		});
	});

	const { t } = useTranslation();

	return (
		<ServicesContainer id='services'>
			{/* <ServicesBackground>
        	<ImgBackground src={ImageBackground}></ImgBackground>
        	<ImgBackground />
      		</ServicesBackground> */}
			<ServicesH1 data-aos='fade-down'>{t('ServicesH1.1')}</ServicesH1>
			<ServicesWrapper>
				<ServicesCard data-aos='zoom-in'>
					{/* Good trick to import images below - this icon will be the 'hyperlink'. */}
					<ServicesIcon src={Icon3} />
					<ServicesH2>{t('ServicesWebDevH2.1')}</ServicesH2>
					<ServicesP>{t('ServicesWebDevP.1')}</ServicesP>
				</ServicesCard>
				<ServicesCard data-aos='zoom-out'>
					{/* Good trick to import images below - this icon will be the 'hyperlink'. */}
					<ServicesIcon src={Icon1} />
					<ServicesH2>{t('ServicesITConsultingH2.1')}</ServicesH2>
					<ServicesP>{t('ServicesITConsultingP.1')}</ServicesP>
				</ServicesCard>
				<ServicesCard data-aos='zoom-in'>
					{/* Good trick to import images below - this icon will be the 'hyperlink'. */}
					<ServicesIcon src={Icon2} />
					<ServicesH2>{t('ServicesDatabaseDevH2.1')}</ServicesH2>
					<ServicesP>{t('ServicesDatabaseDevP.1')}</ServicesP>
				</ServicesCard>
			</ServicesWrapper>
			{/* <ServicesBtnWrap>
			<Button
			// to="home"
			to="contactForm"
			smooth={true}
			duration={500}
			spy={true}
			exact="true"
			offset={-80}
			dark={false}
			primary={false}
			darkText={true}
			>
			Contact Us
			</Button>
			</ServicesBtnWrap> */}
		</ServicesContainer>
	);
};

export default Services;
