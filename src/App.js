import React, { useState } from 'react';
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
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    const location = useLocation();
    const [auth, setAuth] = useState(false); // State to manage authentication

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
                <Route path="/login" element={<Login setAuth={setAuth} />} /> {/* Login route */}
                <Route 
                    path="/" 
                    element={
                        <PrivateRoute auth={auth}>
                            <Slider />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/everest" 
                    element={
                        <PrivateRoute auth={auth}>
                            <EverestPage />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/mustang" 
                    element={
                        <PrivateRoute auth={auth}>
                            <MustangPage />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/pokhara" 
                    element={
                        <PrivateRoute auth={auth}>
                            <PokharaCarousel />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/kathmandu" 
                    element={
                        <PrivateRoute auth={auth}>
                            <KathmanduPage />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/whattosee" 
                    element={
                        <PrivateRoute auth={auth}>
                            <Whattosee />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/whattodo" 
                    element={
                        <PrivateRoute auth={auth}>
                            <Whattodo />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/exploremore" 
                    element={
                        <PrivateRoute auth={auth}>
                            <Exploremore />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/essentials" 
                    element={
                        <PrivateRoute auth={auth}>
                            <Essentials />
                        </PrivateRoute>
                    } 
                />
            </Routes>
            {currentPath !== '/' && currentPath !== '/login' && <Footer title={getTitle(currentPath)} />}
        </div>
    );
};

const AppWithRouter = () => (
    <Router>
        <App />
    </Router>
);

export default AppWithRouter;