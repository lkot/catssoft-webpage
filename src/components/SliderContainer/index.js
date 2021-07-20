import React, { useEffect, useRef, useState } from 'react';
import { SliderData } from './SliderData';
import './Slider.css';
import {
	SliderWrapper,
	SliderContainer,
	SlideRightArrow,
	SlideLeftArrow,
	SlideImg,
	SlideItemActive,
	SlideItemNonactive,
	SliderH1,
	SlideBtnWrap,
} from './SliderElements';
// import { Button } from "../ButtonElements";
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ImageSlider = ({ slides }) => {
	useEffect(() => {
		AOS.init({
			startEvent: 'DOMContentLoaded',
			offset: 250,
			duration: 1500,
			once: true,
		});
	});

	const [current, setCurrent] = useState(0);
	const length = slides.length;
	const timeout = useRef(null);
	const { t } = useTranslation();

	//Automated slider. Passing current and length for the dependencies
	useEffect(() => {
		const nextSlide = () => {
			setCurrent((current) => (current === length - 1 ? 0 : current + 1));
		};

		//This function is gonna run the nextSlide function like a timer every 3sec.
		timeout.current = setTimeout(nextSlide, 3000);

		return function () {
			if (timeout.current) {
				clearTimeout(timeout.current);
			}
		};
	}, [current, length]);

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<SliderContainer id='clientsSlider'>
			<SliderH1 data-aos='fade-down'>{t('ClientsSliderH1.1')}</SliderH1>
			<SliderWrapper>
				<SlideRightArrow
					className='right-arrow'
					onClick={nextSlide}
				></SlideRightArrow>
				<SlideLeftArrow
					className='left-arrow'
					onClick={prevSlide}
				></SlideLeftArrow>
				{SliderData.map((slide, index) => {
					return (
						<div
							className={
								// index === current ? (
								//   <SlideItemActive className="slide-active" />
								// ) : (
								//   <SlideItemNonactive className="slide" />
								// )
								index === current ? 'slide-active' : 'slide'
							}
							key={index}
						>
							{index === current && (
								<SlideImg src={slide.image} alt='software image' />
							)}
						</div>
					);
				})}
			</SliderWrapper>
			{/* <SlideBtnWrap>
        <Button
          to="contactForm"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-50}
          dark={false}
          primary={false}
          darkText={true}
        >
          Contact Us
        </Button>
      </SlideBtnWrap> */}
		</SliderContainer>
	);
};

export default ImageSlider;
