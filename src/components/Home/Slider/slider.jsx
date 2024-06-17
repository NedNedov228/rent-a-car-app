import './slider.scss'
import {classSliderArray, sliderText} from '../../../store/store'
import React, {useState} from "react";
import leftArrow from '../../../assets/left-arrow.svg'
import rightArrow from '../../../assets/right-arrow.svg'
import cn from "classnames";

const Slider = () => {
    const [step, setStep] = useState(0)
    const [sliderClass, setSliderClass] = useState('__first')

    const stepLeft = () => {
        if (step > 0) {
            setStep(step - 1)
            setSliderClass(classSliderArray[step - 1])
        } else {
            setStep(3)
            setSliderClass(classSliderArray[3])
        }
    }

    const stepRight = () => {
        if (step < 3) {
            setStep(step + 1)
            setSliderClass(classSliderArray[step + 1])
        } else {
            setStep(0)
            setSliderClass(classSliderArray[0])
        }
    }
    const renderDots = () => {
        let dots = []
        for (let i = 0; i <= 3; i++) {
            dots.push(<span className={cn('slider-dots__item', {'slider-dots__item_active': i === step})}/>)
        }
        return dots
    }

    return (
        <aside className={`slider-container slider-container${sliderClass}`}>
            <section className='slider-container__step-left' onClick={stepLeft}>
                <img className='slider-container__arrow' src={leftArrow} alt='arrow left'/>
            </section>
            <section className='slider-text'>
                        <h1 className='slider-text__title'>{sliderText[step].title}</h1>
                        <p className='slider-text__subtitle'>
                            {sliderText[step].subtitle}
                        </p>
                <button className={`slider-text-button slider-text-button${sliderClass}`}>
                    <a href='/tarifs' className='slider-text__link'>Подробнее</a>
                </button>
            </section>
            <section className='slider-dots'>
                {renderDots().map((item) => (item))}
            </section>
            <section className='slider-container__step-right' onClick={stepRight}>
                <img className='slider-container__arrow' src={rightArrow} alt='arrow right'/>
            </section>
        </aside>
    );
}

export default Slider;