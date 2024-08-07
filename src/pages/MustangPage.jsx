import React, { useEffect, useRef, useState } from 'react';
import '../styles/Pokhara.css'; 

import mustang from '../assets/mustang.jpg';
import mustang2 from '../assets/mustang2.jpg';
import mustang3 from '../assets/mustang3.jpg';
import mustang4 from '../assets/mustang4.jpg';
import mustang5 from '../assets/mustang5.jpg';
import Lomanthang from '../assets/lomanthang.jpg';
import muktinathtemple from '../assets/muktinathtemple.jpg';
import jomsom from '../assets/jomsom.jpg';
import Kagbeni from '../assets/Kagbeni.jpg';

const MustangPage = () => {
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
                            <img src={mustang} alt="Pokhara Image 1" />
                        </div>
                        <div className="pokhara-carousel-item">
                            <img src={mustang3} alt="Pokhara Image 2" />
                        </div>
                        <div className="pokhara-carousel-item">
                            <img src={mustang4} alt="Pokhara Image 3" />
                        </div>
                        <div className="pokhara-carousel-item">
                            <img src={mustang5} alt="Pokhara Image 4" />
                        </div>
                    </div>
                    <a className="pokhara-prev" onClick={prevSlide}>&#10094;</a>
                    <a className="pokhara-next" onClick={nextSlide}>&#10095;</a>
                </div>
            </header>

            <section className="pokhara-content">
                <div className="pokhara-content-item">
                    <img src={Lomanthang} alt="Image 1" className="pokhara-content-image" />
                    <div className="pokhara-content-desc">
                        <h2>Lo Manthang</h2>
                        <p>The ancient walled capital of the Upper Mustang region, known for its well-preserved Tibetan culture and traditional architecture.</p>
                    </div>
                </div>
                <div className="pokhara-content-item">
                    <img src={muktinathtemple} alt="Image 2" className="pokhara-content-image" />
                    <div className="pokhara-content-desc">
                        <h2>Muktinath Temple</h2>
                        <p>A sacred site for both Hindus and Buddhists, famous for its 108 water spouts and eternal flame.</p>
                    </div>
                </div>
                <div className="pokhara-content-item">
                    <img src={jomsom} alt="Image 3" className="pokhara-content-image" />
                    <div className="pokhara-content-desc">
                        <h2>Jomsom</h2>
                        <p>A popular town that serves as a gateway to the Mustang region, known for its breathtaking views and as a starting point for treks.</p>
                    </div>
                </div>
                <div className="pokhara-content-item">
                    <img src={Kagbeni} alt="Image 4" className="pokhara-content-image" />
                    <div className="pokhara-content-desc">
                        <h2>Kagbeni</h2>
                        <p>A picturesque village that serves as the entry point to Upper Mustang, known for its ancient monasteries and traditional mud-brick houses.</p>
                    </div>
                </div>
            </section>

            <section className="pokhara-gallery">
                <div className="pokhara-gallery-item">
                    <img src={mustang2} alt="Gallery Image 1" />
                </div>
                <div className="pokhara-gallery-item">
                    <img src={mustang3} alt="Gallery Image 2" />
                </div>
                <div className="pokhara-gallery-item">
                    <img src={mustang4} alt="Gallery Image 3" />
                </div>
                <div className="pokhara-gallery-item">
                    <img src={mustang5} alt="Gallery Image 4" />
                </div>
            </section>
        </div>
    );
};

export default MustangPage;
