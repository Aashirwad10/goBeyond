import React, { useEffect, useRef, useState } from 'react';
import '../styles/Pokhara.css'; 

import everest from '../assets/everest.jpg';

const EverestPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselInnerRef = useRef(null);

    const showSlide = (index) => {
        const slides = document.querySelectorAll('.pokhara-carousel-item');
        if (index >= slides.length) {
            setCurrentSlide(0);
        } else if (index < 0) {
            setCurrentSlide(slides.length - 1);
        } else {
            setCurrentSlide(index);
        }
    };

    const nextSlide = () => {
        showSlide(currentSlide + 1);
    };

    const prevSlide = () => {
        showSlide(currentSlide - 1);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3500);
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [currentSlide]);

    useEffect(() => {
        if (carouselInnerRef.current) {
            const offset = -currentSlide * 100;
            carouselInnerRef.current.style.transform = `translateX(${offset}%)`;
        }
    }, [currentSlide]);

    return (
        <div>
            <header>
                <div className="pokhara-carousel">
                    <div className="pokhara-carousel-inner" ref={carouselInnerRef}>
                        <div className="pokhara-carousel-item active">
                            <img src={everest} alt="Pokhara Image 1" />
                        </div>
                        <div className="pokhara-carousel-item">
                            <img src={everest} alt="Pokhara Image 2" />
                        </div>
                        <div className="pokhara-carousel-item">
                            <img src={everest} alt="Pokhara Image 3" />
                        </div>
                        <div className="pokhara-carousel-item">
                            <img src={everest} alt="Pokhara Image 4" />
                        </div>
                    </div>
                    <a className="pokhara-prev" onClick={prevSlide}>&#10094;</a>
                    <a className="pokhara-next" onClick={nextSlide}>&#10095;</a>
                </div>
            </header>

            <section className="pokhara-content">
                <div className="pokhara-content-item">
                    <img src={everest} alt="Image 1" className="pokhara-content-image" />
                    <div className="pokhara-content-desc">
                        <h2>Place Title 1</h2>
                        <p>Description of place 1. Pokhara is known for its stunning scenery, adventurous activities, and cultural experiences.</p>
                    </div>
                </div>
                <div className="pokhara-content-item">
                    <img src={everest} alt="Image 2" className="pokhara-content-image" />
                    <div className="pokhara-content-desc">
                        <h2>Place Title 2</h2>
                        <p>Description of place 2. Pokhara offers breathtaking views of the Annapurna mountain range and serene lakes.</p>
                    </div>
                </div>
                <div className="pokhara-content-item">
                    <img src={everest} alt="Image 3" className="pokhara-content-image" />
                    <div className="pokhara-content-desc">
                        <h2>Place Title 3</h2>
                        <p>Description of place 3. Explore the caves, waterfalls, and the vibrant local markets of Pokhara.</p>
                    </div>
                </div>
                <div className="pokhara-content-item">
                    <img src={everest} alt="Image 4" className="pokhara-content-image" />
                    <div className="pokhara-content-desc">
                        <h2>Place Title 4</h2>
                        <p>Description of place 4. Enjoy paragliding, boating, and other exciting activities in Pokhara.</p>
                    </div>
                </div>
            </section>

            <section className="pokhara-gallery">
                <div className="pokhara-gallery-item">
                    <img src={everest} alt="Gallery Image 1" />
                </div>
                <div className="pokhara-gallery-item">
                    <img src={everest} alt="Gallery Image 2" />
                </div>
                <div className="pokhara-gallery-item">
                    <img src={everest} alt="Gallery Image 3" />
                </div>
                <div className="pokhara-gallery-item">
                    <img src={everest} alt="Gallery Image 4" />
                </div>
            </section>
        </div>
    );
};

export default EverestPage;
