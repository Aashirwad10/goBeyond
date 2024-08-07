import React, { useEffect, useRef, useState } from 'react';
import '../styles/Pokhara.css'; 

import everest from '../assets/everest.jpg';
import everest2 from '../assets/everest2.jpg';
import everest3 from '../assets/everest3.jpg';
import everest4 from '../assets/everest4.jpg'
import everest5 from '../assets/everest5.jpg';
import mounteverest from '../assets/mounteverest.jpg';
import namchebazar from '../assets/namchebazar.webp';
import gokyolake from '../assets/gokyolake.jpg';
import sagarmathanationalpark from '../assets/sagaramathanationalpark.jpg';

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
                            <img src={everest2} alt="Pokhara Image 2" />
                        </div>
                        <div className="pokhara-carousel-item">
                            <img src={everest3} alt="Pokhara Image 3" />
                        </div>
                        <div className="pokhara-carousel-item">
                            <img src={everest5} alt="Pokhara Image 4" />
                        </div>
                    </div>
                    <a className="pokhara-prev" onClick={prevSlide}>&#10094;</a>
                    <a className="pokhara-next" onClick={nextSlide}>&#10095;</a>
                </div>
            </header>

            <section className="pokhara-content">
                <div className="pokhara-content-item">
                    <img src={mounteverest} alt="Image 1" className="pokhara-content-image" />
                    <div className="pokhara-content-desc">
                        <h2>Mount Everest (Sagarmatha)</h2>
                        <p>The tallest peak in the world, attracting climbers and trekkers from around the globe.</p>
                    </div>
                </div>
                <div className="pokhara-content-item">
                    <img src={namchebazar} alt="Image 2" className="pokhara-content-image" />
                    <div className="pokhara-content-desc">
                        <h2>Namche Bazaar</h2>
                        <p>The main trading center and hub for the Khumbu region, often considered the gateway to Everest.</p>
                    </div>
                </div>
                <div className="pokhara-content-item">
                    <img src={gokyolake} alt="Image 3" className="pokhara-content-image" />
                    <div className="pokhara-content-desc">
                        <h2>Gokyo Lakes</h2>
                        <p>A series of beautiful high-altitude lakes, popular for trekking and offering panoramic views of the Himalayas.</p>
                    </div>
                </div>
                <div className="pokhara-content-item">
                    <img src={sagarmathanationalpark} alt="Image 4" className="pokhara-content-image" />
                    <div className="pokhara-content-desc">
                        <h2>Sagarmatha National Park</h2>
                        <p>A UNESCO World Heritage Site, home to a diverse range of flora and fauna, as well as several trekking routes.</p>
                    </div>
                </div>
            </section>

            <section className="pokhara-gallery">
                <div className="pokhara-gallery-item">
                    <img src={everest4} alt="Gallery Image 1" />
                </div>
                <div className="pokhara-gallery-item">
                    <img src={everest2} alt="Gallery Image 2" />
                </div>
                <div className="pokhara-gallery-item">
                    <img src={everest3} alt="Gallery Image 3" />
                </div>
                <div className="pokhara-gallery-item">
                    <img src={everest5} alt="Gallery Image 4" />
                </div>
            </section>
        </div>
    );
};

export default EverestPage;
