import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Slider from './pages/Slider';
import EverestPage from './pages/EverestPage';
import MustangPage from './pages/MustangPage';
import PokharaCarousel from './pages/PokharaCarousel';
import KathmanduPage from './pages/KathmanduPage';
import Whattosee from './components/Whattosee';
import Whattodo from './components/Whattodo';
import Exploremore from './components/Exploremore';
import Essentials from './components/Essentials';

import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

const App = () => {
    const location = useLocation();

    const getTitle = (path) => {
        switch (path) {
            case '/everest':
                return 'Ready to Explore Everest?';
            case '/mustang':
                return 'Ready to Explore Mustang?';
            case '/pokhara':
                return 'Ready to Explore Pokhara?';
            case '/kathmandu':
                return 'Ready to Explore Kathmandu?';
            default:
                return 'Ready to Explore?';
        }
    };

    const currentPath = location.pathname;

    return (
        <div>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Slider />} />
                <Route path="/everest" element={<EverestPage />} />
                <Route path="/mustang" element={<MustangPage />} />
                <Route path="/pokhara" element={<PokharaCarousel />} />
                <Route path="/kathmandu" element={<KathmanduPage />} />
                <Route path="/whattosee" element={<Whattosee />} />
                <Route path="/whattodo" element={<Whattodo />} />
                <Route path="/exploremore" element={<Exploremore />} />
                <Route path="/essentials" element={<Essentials />} />
            </Routes>
            {currentPath !== '/' && <Footer title={getTitle(currentPath)} />}
        </div>
    );
};

const AppWithRouter = () => (
    <Router>
        <App />
    </Router>
);

export default AppWithRouter;
