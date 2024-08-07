import React, { useEffect, useRef, useState } from 'react';
import '../styles/Pokhara.css'; 

import kathmandu from '../assets/kathmandu.jpg';
import kathmandu2 from '../assets/kathmandu2.jpg';
import kathmandu3 from '../assets/kathmandu3.jpg';
import kathmandu4 from '../assets/kathmandu4.jpg';
import kathmandu5 from '../assets/kathmandu6.jpeg';
import swayambhunath from '../assets/swayambhunath.jpg';
import bhaktapurdurbarsquare from '../assets/bhaktapurdurbarsquare.jpg';
import thamel from '../assets/thamel.jpg';
import chandragiri from '../assets/chandragiri.jpg';

const KathmanduPage = () => {
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
                            <img src={kathmandu} alt="Pokhara Image 1" />
                        </div>
                        <div className="pokhara-carousel-item">
                            <img src={kathmandu2} alt="Pokhara Image 2" />
                        </div>
                        <div className="pokhara-carousel-item">
                            <img src={kathmandu5} alt="Pokhara Image 3" />
                        </div>
                        <div className="pokhara-carousel-item">
                            <img src={kathmandu4} alt="Pokhara Image 4" />
                        </div>
                    </div>
                    <a className="pokhara-prev" onClick={prevSlide}>&#10094;</a>
                    <a className="pokhara-next" onClick={nextSlide}>&#10095;</a>
                </div>
            </header>

            <section className="pokhara-content">
                <div className="pokhara-content-item">
                    <img src={swayambhunath} alt="Image 1" className="pokhara-content-image" />
                    <div className="pokhara-content-desc">
                        <h2>Swayambhunath (Monkey Temple)</h2>
                        <p>An ancient religious complex atop a hill, offering panoramic views of the city and home to many monkeys.</p>
                    </div>
                </div>
                <div className="pokhara-content-item">
                    <img src={bhaktapurdurbarsquare} alt="Image 2" className="pokhara-content-image" />
                    <div className="pokhara-content-desc">
                        <h2>Bhaktapur Durbar Square</h2>
                        <p>A UNESCO World Heritage Site in Bhaktapur, showcasing stunning medieval architecture, including the 55-Window Palace and Nyatapola Temple.</p>
                    </div>
                </div>
                <div className="pokhara-content-item">
                    <img src={thamel} alt="Image 3" className="pokhara-content-image" />
                    <div className="pokhara-content-desc">
                        <h2>Thamel</h2>
                        <p>A vibrant neighborhood popular with tourists for its shops, restaurants, bars, and lively atmosphere.</p>
                    </div>
                </div>
                <div className="pokhara-content-item">
                    <img src={chandragiri} alt="Image 4" className="pokhara-content-image" />
                    <div className="pokhara-content-desc">
                        <h2>Chandragiri Hills</h2>
                        <p>A hill station accessible by cable car, providing stunning views of the Kathmandu Valley and the Himalayan range.</p>
                    </div>
                </div>
            </section>

            <section className="pokhara-gallery">
                <div className="pokhara-gallery-item">
                    <img src={kathmandu} alt="Gallery Image 1" />
                </div>
                <div className="pokhara-gallery-item">
                    <img src={kathmandu2} alt="Gallery Image 2" />
                </div>
                <div className="pokhara-gallery-item">
                    <img src={kathmandu3} alt="Gallery Image 3" />
                </div>
                <div className="pokhara-gallery-item">
                    <img src={kathmandu4} alt="Gallery Image 4" />
                </div>
            </section>
        </div>
    );
};

export default KathmanduPage;
