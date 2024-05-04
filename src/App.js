import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/dashboard"; // Import the Dashboard component

function App() {
    const [page, setPage] = useState('home');

    return (
        <div className="App">
            <Header setPage={setPage} />
            <div className="content">
                {page === 'home' && <LandingPage/>}
                {page === 'login' && <LoginPage />}
                {page === 'dashboard' && <Dashboard />} {/* Use the Dashboard component */}
            </div>
        </div>
    );
}

export default App;
