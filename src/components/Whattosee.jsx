import React, { useState } from 'react';
import '../styles/Whattosee.css'; 

import everest from '../assets/everest.jpg';
import kathmandu from '../assets/kathmandu.jpg';
import mustang from '../assets/mustang.jpg';
import loveRed from '../assets/loveRed.png'; 
import hiking from '../assets/hiking.png';
import temple from '../assets/temple.png';
import hotel from '../assets/hotel.png';
import adv from '../assets/adventure.png';
import festival from '../assets/festival.png';
import food from '../assets/food.png';
import nature from '../assets/nature.png'; 
import culture from '../assets/culture.png';
import newCat1 from '../assets/hiking.png';
import newCat2 from '../assets/temple.png';


const Whattosee = () => {
    const [activeCategory, setActiveCategory] = useState('');
    const [lovedIcons, setLovedIcons] = useState({});

    const handleOptionClick = (category) => {
        setActiveCategory(prevCategory => prevCategory === category ? '' : category);
    };

    const toggleLove = (index) => {
        setLovedIcons(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const getImagesForCategory = (category) => {
        const images = {
            hiking: [mustang, mustang, mustang],
            temples: [everest, kathmandu, mustang],
            hotels: [mustang, kathmandu, everest],
            adventure: [mustang, everest, kathmandu],
            culture: [kathmandu, mustang, everest],
            food: [everest, mustang, kathmandu],
            nature: [mustang, kathmandu, everest],
            festivals: [kathmandu, mustang, everest],
            newCat1: [everest, kathmandu, mustang],
            newCat2: [kathmandu, mustang, everest],
        };

        const names = {
            hiking: ['Mountain Trails', 'Mountain xx', 'Mountain YY'],
            temples: ['Sacred Temples', 'Temple A', 'Temple B'],
            hotels: ['Cozy Stays', 'Hotel A', 'Hotel B'],
            adventure: ['Thrilling Activities', 'Adventure A', 'Adventure B'],
            culture: ['Cultural Sites', 'Site A', 'Site B'],
            food: ['Local Cuisine', 'Cuisine A', 'Cuisine B'],
            nature: ['Scenic Views', 'View A', 'View B'],
            festivals: ['Festive Events', 'Event A', 'Event B'],
            newCat1: ['New Category 1', 'Subcategory 1', 'Subcategory 2'], 
            newCat2: ['New Category 2', 'Subcategory 1', 'Subcategory 2'],
        };

        return images[category] && names[category] ? images[category].map((imgSrc, index) => (
            <div key={index} className="unique-image-box">
                <img src={imgSrc} alt={category} />
                <div className="unique-image-overlay">{names[category][index]}</div>
            </div>
        )) : null;
    };

    const popularOptions = [
        { category: 'hiking', img: hiking },
        { category: 'temples', img: temple },
        { category: 'hotels', img: hotel },
        { category: 'adventure', img: adv },
        { category: 'culture', img: culture },
        { category: 'food', img: food },
        { category: 'nature', img: nature },
        { category: 'festivals', img: festival },
        { category: 'newCat1', img: newCat1 }, // Add new categories
        { category: 'newCat2', img: newCat2 }  // Add new categories
    ];

    return (
        <main>
            <header className="unique-header">
                <div className="unique-header-container">
                    <input type="text" id="unique-search" placeholder="Search..." />
                    <div className="unique-login-profile">
                        <img src={loveRed} alt="Profile Picture" /> {/* Use imported love icon */}
                    </div>
                </div>
            </header>
            <section className="unique-popular-options">
                <h2>Popular Options</h2>
                <div className="unique-options-container">
                    {popularOptions.map(option => (
                        <div
                            key={option.category}
                            className="unique-option"
                            data-category={option.category}
                            onClick={() => handleOptionClick(option.category)}
                        >
                            <img src={option.img} alt={option.category} /> {/* Use an appropriate image for options */}
                            <div className="unique-overlay">{option.category.charAt(0).toUpperCase() + option.category.slice(1)}</div>
                        </div>
                    ))}
                </div>
                <div id="unique-image-display" className="unique-image-display">
                    {activeCategory && getImagesForCategory(activeCategory)}
                </div>
            </section>
            <section className="unique-top-attractions">
                <h2>Top Attractions</h2>
                <div className="unique-attractions-container">
                    {['Attraction 1', 'Attraction 2', 'Attraction 3', 'Attraction 4'].map((name, index) => (
                        <div key={index} className="unique-attraction">
                            <img src={kathmandu} alt={name} /> {/* Use an appropriate image for attractions */}
                            <div className="unique-attraction-info">
                                <div
                                    className={`unique-love-icon ${lovedIcons[index] ? 'loved' : ''}`}
                                    onClick={() => toggleLove(index)}
                                ></div>
                                <p className="unique-attraction-name">{name}</p>
                                <div className="unique-rating">
                                    {[...Array(5)].map((_, i) => (
                                        <span
                                            key={i}
                                            className={`unique-circle ${i < 3 ? 'active' : ''}`}
                                        ></span>
                                    ))}
                                </div>
                                <p className="unique-description">Description of {name}.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Whattosee;