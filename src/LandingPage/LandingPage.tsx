// LandingPage.tsx
import React from 'react';
import NavBar from './Components/Navbar/NavBar'; 
import HeroSection from './Components/HeroSection/HeroSection'; 
import Cards from './Components/Cards/Cards'; 
import Footer from './Components/Footer/Footer'; 

const LandingPage: React.FC = () => {
    return (
        <div>
            <NavBar />
            <HeroSection />
            <Cards />
            <Footer />
        </div>
    );
};

export default LandingPage;
