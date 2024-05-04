import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import Header from "./components/Header";

function App() {
    const [page, setPage] = useState('home');

    return (
        <div className="App">
            <Header setPage={setPage} />
            <div className="content">
                {page === 'home' && <h2>Welcome to the Home Page</h2>}
                {page === 'login' && <LoginPage />}
            </div>
        </div>
    );
}

export default App;
