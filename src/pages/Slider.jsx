import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Slider.css';

import everest from '../assets/everest.jpg';
import mustang from '../assets/mustang.jpg';
import pokhara from '../assets/pokhara.jpg';
import kathmandu from '../assets/kathmandu.jpg';

const Slider = () => {
    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();
    const slides = [
        { src: everest, name: 'Everest', path: '/everest' },
        { src: mustang, name: 'Mustang', path: '/mustang' },
        { src: pokhara, name: 'Pokhara', path: '/pokhara' },
        { src: kathmandu, name: 'Kathmandu', path: '/kathmandu' }
    ];

    useEffect(() => {
        const updateClasses = () => {
            const prev = current > 0 ? current - 1 : slides.length - 1;
            const next = current < slides.length - 1 ? current + 1 : 0;

            const items = document.querySelectorAll(".item");
            items.forEach((item, index) => {
                item.classList.remove("active", "prev", "next");
                if (index === current) {
                    item.classList.add("active");
                } else if (index === prev) {
                    item.classList.add("prev");
                } else if (index === next) {
                    item.classList.add("next");
                }
            });
        };

        updateClasses();
    }, [current]);

    const gotoPrev = () => {
        setCurrent(current > 0 ? current - 1 : slides.length - 1);
    };

    const gotoNext = () => {
        setCurrent(current < slides.length - 1 ? current + 1 : 0);
    };

    const handleDescriptionClick = () => {
        navigate(slides[current].path);
    };

    return (
        <div className="slider-wrapper">
            <div className="items">
                {slides.map((slide, index) => (
                    <div key={index} className={`item ${index === current ? 'active' : ''}`}>
                        <img src={slide.src} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
                <div className="button-container">
                    <div className="button" onClick={gotoPrev}>
                        <i className="fas fa-angle-left"></i>
                    </div>
                    <div className="button" onClick={gotoNext}>
                        <i className="fas fa-angle-right"></i>
                    </div>
                </div>
            </div>
            <div className="caption-container" onClick={handleDescriptionClick}>
                <div className="caption">{slides[current].name}</div>
            </div>
        </div>
    );
};

export default Slider;