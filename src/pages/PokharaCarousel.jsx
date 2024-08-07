import React, { useEffect, useRef, useState } from 'react';
import '../styles/Pokhara.css'; 

import pokhara from '../assets/pokhara.jpg';
import pokhara2 from '../assets/pokhara2.jpg';
import pokhara3 from '../assets/pokhara3.jpg';
import pokhara4 from '../assets/pokhara4.jpg';
import pokhara5 from '../assets/pokhara5.jpg';
import fewalake from '../assets/fewalake.jpg';
import shantipagoda from '../assets/shantipagoda.jpeg';
import devisfalls from '../assets/devisfalls.jpg';
import sarangkot from '../assets/sarangkot.jpg';

const PokharaCarousel = () => {
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
                            <img src={pokhara} alt="Pokhara Image 1" />
                        </div>
                        <div className="pokhara-carousel-item">
                            <img src={pokhara2} alt="Pokhara Image 2" />
                        </div>
                        <div className="pokhara-carousel-item">
                            <img src={pokhara3} alt="Pokhara Image 3" />
                        </div>
                        <div className="pokhara-carousel-item">
                            <img src={pokhara4} alt="Pokhara Image 4" />
                        </div>
                    </div>
                    <a className="pokhara-prev" onClick={prevSlide}>&#10094;</a>
                    <a className="pokhara-next" onClick={nextSlide}>&#10095;</a>
                </div>
            </header>

            <section className="pokhara-content">
                <div className="pokhara-content-item">
                    <img src={fewalake} alt="Image 1" className="pokhara-content-image" />
                    <div className="pokhara-content-desc">
                        <h2>Fewa Lake</h2>
                        <p>The second-largest lake in Nepal, offering boating, fishing, and stunning views of the Annapurna range.</p>
                    </div>
                </div>
                <div className="pokhara-content-item">
                    <img src={shantipagoda} alt="Image 2" className="pokhara-content-image" />
                    <div className="pokhara-content-desc">
                        <h2>World Peace Pagoda (Shanti Stupa)</h2>
                        <p>A Buddhist pagoda situated on a hilltop, providing panoramic views of Pokhara city, Phewa Lake, and the Himalayas.</p>
                    </div>
                </div>
                <div className="pokhara-content-item">
                    <img src={devisfalls} alt="Image 3" className="pokhara-content-image" />
                    <div className="pokhara-content-desc">
                        <h2>Davis Falls (Patale Chhango)</h2>
                        <p>A unique waterfall that flows into an underground tunnel, named after a tourist who tragically fell into it.</p>
                    </div>
                </div>
                <div className="pokhara-content-item">
                    <img src={sarangkot} alt="Image 4" className="pokhara-content-image" />
                    <div className="pokhara-content-desc">
                        <h2>Sarangkot</h2>
                        <p>A hill station known for its breathtaking sunrise and sunset views over the Annapurna and Dhaulagiri mountain ranges.</p>
                    </div>
                </div>
            </section>

            <section className="pokhara-gallery">
                <div className="pokhara-gallery-item">
                    <img src={pokhara} alt="Gallery Image 1" />
                </div>
                <div className="pokhara-gallery-item">
                    <img src={pokhara2} alt="Gallery Image 2" />
                </div>
                <div className="pokhara-gallery-item">
                    <img src={pokhara4} alt="Gallery Image 3" />
                </div>
                <div className="pokhara-gallery-item">
                    <img src={pokhara5} alt="Gallery Image 4" />
                </div>
            </section>
        </div>
    );
};

export default PokharaCarousel;