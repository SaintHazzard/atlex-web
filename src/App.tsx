// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import Enrollment from './login/Components/Enrollment/Enrrolment';
import SignUpSection from './login/Components/SignUpSection/SignUpSection';
import LoginGoogle from './login/LoginGoogle';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/enrollment" element={<Enrollment />} />
                <Route path="/signup" element={<SignUpSection />} />
                <Route path="/login" element={<LoginGoogle />} />
            </Routes>
        </Router>
    );
};

export default App;
