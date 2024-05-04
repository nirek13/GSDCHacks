import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

function App() {
    const [page, setPage] = useState('home');

    return (
        <div className="App">
            <Header setPage={setPage} />
            <div className="content">
                {page === 'home' && <LandingPage/>}
                {page === 'login' && <LoginPage />}
            </div>
        </div>
    );
}

export default App;
