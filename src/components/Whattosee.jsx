import React, { useState, useEffect } from 'react';
import '../styles/Whattosee.css'; 
import axios from 'axios';

import everest from '../assets/everest.jpg';
import kathmandu from '../assets/kathmandu.jpg';
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
import annapurna from '../assets/annapurna.jpg';
import uppermustang from '../assets/uppermustang.jpg';
import gosaikunda from '../assets/gosaikunda.jpg';
import jankitemple from '../assets/janakitemple.webp';
import boudhanathtemple from '../assets/boudha.jpg';
import barahitemple from '../assets/barahi.jpg';
import hyatt from '../assets/hyatt.webp';
import dhulikhel from '../assets/dhulikhelresort.jpg';
import soaltee from '../assets/soaltee.jpg';
import mountaineering from '../assets/mountaineering.jpg'
import waterrafting from '../assets/waterrafting.jpg';
import bunjee from '../assets/bunjee.jpg';
import holi from '../assets/holi.webp';
import woodcrafting from '../assets/woodcrafting.webp';
import tharudance from '../assets/tharudance.jpeg';
import dalbhat from '../assets/dalbhat.webp';
import dhido from '../assets/dhido.jpg';
import yomari from '../assets/yomari.jpg';
import chitwannp from '../assets/chitwannationapark.jpg';
import tilicho from '../assets/tilicholake.jpg';
import lumbini from '../assets/lumbini.jpg';
import dashain from '../assets/dashain.webp';
import tihar from '../assets/tihar.webp';
import shivaratri from '../assets/shivaratri.jpg';
import pokhara from '../assets/pokhara.jpg'


const imageMap = {
    'everest.jpg': everest,
    'kathmandu.jpg': kathmandu,
    'loveRed.png': loveRed,
    'hiking.png': hiking,
    'temple.png': temple,
    'hotel.png': hotel,
    'adventure.png': adv,
    'festival.png': festival,
    'food.png': food,
    'nature.png': nature,
    'culture.png': culture,
    'newCat1.png': newCat1,
    'newCat2.png': newCat2,
    'annapurna.jpg': annapurna,
    'uppermustang.jpg': uppermustang,
    'gosaikunda.jpg': gosaikunda,
    'janakitemple.webp': jankitemple,
    'boudha.jpg': boudhanathtemple,
    'barahi.jpg': barahitemple,
    'hyatt.webp': hyatt,
    'dhulikhelresort.jpg': dhulikhel,
    'soaltee.jpg': soaltee,
    'mountaineering.jpg': mountaineering,
    'waterrafting.jpg': waterrafting,
    'bunjee.jpg': bunjee,
    'holi.webp': holi,
    'woodcrafting.webp': woodcrafting,
    'tharudance.jpeg': tharudance,
    'dalbhat.webp': dalbhat,
    'dhido.jpg': dhido,
    'yomari.jpg': yomari,
    'chitwannationapark.jpg': chitwannp,
    'tilicholake.jpg': tilicho,
    'lumbini.jpg': lumbini,
    'dashain.webp': dashain,
    'tihar.webp': tihar,
    'shivaratri.jpg': shivaratri,
    'pokhara.jpg': pokhara
};


const Whattosee = () => {
    const [activeCategory, setActiveCategory] = useState('');
    const [lovedIcons, setLovedIcons] = useState({});
    const [topAttractions, setTopAttractions] = useState([]);
    const [categories, setCategories] = useState([]);

    const handleOptionClick = (category) => {
        setActiveCategory(prevCategory => prevCategory === category ? '' : category);
    };

    const toggleLove = (index) => {
        setLovedIcons(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    useEffect(() => {
        // Fetch top attractions from Django API
        axios.get('http://127.0.0.1:8000/api/top_attractions/')
            .then(response => {
                setTopAttractions(response.data.top_attractions);
            })
            .catch(error => {
                console.error('Error fetching top attractions:', error);
            });

            // Fetch categories from Django API
            axios.get('http://127.0.0.1:8000/api/categories/')
            .then(response => {
                setCategories(response.data.categories);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    const getImagesForCategory = (category) => {
        const images = {
            hiking: [annapurna, uppermustang, gosaikunda],
            temples: [jankitemple, boudhanathtemple, barahitemple],
            hotels: [hyatt, dhulikhel, soaltee],
            adventure: [mountaineering, waterrafting, bunjee],
            culture: [holi, woodcrafting, tharudance],
            food: [dalbhat, dhido, yomari],
            nature: [chitwannp, tilicho, lumbini],
            festivals: [dashain, tihar, shivaratri],
            newCat1: [everest, everest, everest],
            newCat2: [everest, everest, everest],
        };

        const names = {
            hiking: ['Annapurna Circuit Trek', 'Upper Mustang Trek', 'Gosaikunda Trek'],
            temples: ['Janaki Temple', 'Boudhanath Stupa', 'Barahi Temple'],
            hotels: ['Hyatt Regency', 'Dhulikhel M. Resort', 'Soaltee Crowne Plaza'],
            adventure: ['Mountaineering', 'Water Rafting', 'Bungee Jumping'],
            culture: ['Holi', 'Wood Crafting', 'Tharu Dance'],
            food: ['Dal Bhat', 'Dhido', 'Yomari'],
            nature: ['Chitwan National Park', 'Tilicho Lake', 'Lumbini'],
            festivals: ['Dashain', 'Tihar', 'Shivaratri'],
            newCat1: ['New Category 1', 'New Category 1', 'New Category 1'], 
            newCat2: ['New Category 2', 'New Category 2', 'New Category 2'],
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
                    {topAttractions.map((attraction, index) => (
                        <div key={index} className="unique-attraction">
                            <img src={imageMap[attraction.img]} alt={attraction.name} /> 
                            <div className="unique-attraction-info">
                                <div
                                    className={`unique-love-icon ${lovedIcons[index] ? 'loved' : ''}`}
                                    onClick={() => toggleLove(index)}
                                ></div>
                                <p className="unique-attraction-name">{attraction.name}</p>
                                <div className="unique-rating">
                                    {[...Array(5)].map((_, i) => (
                                        <span
                                            key={i}
                                            className={`unique-circle ${i < attraction.rating ? 'active' : ''}`}
                                        ></span>
                                    ))}
                                </div>
                                <p className="unique-description">{attraction.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Whattosee;