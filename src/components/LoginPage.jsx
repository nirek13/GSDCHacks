import React, { useState } from 'react';
import '../login.css'; // Import your CSS file for styling

function LoginPage() {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showRegister, setShowRegister] = useState(false);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [registrationError, setRegistrationError] = useState('');

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Here you can add your logic for authentication
        console.log('Login Email:', loginEmail, 'Login Password:', loginPassword);
        // You can also redirect the user to another page upon successful login
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        // Here you can add your logic for registration
        if (registerPassword !== confirmPassword) {
            setRegistrationError('Passwords do not match');
            return;
        }
        // Perform registration logic here
        console.log('Register Username:', registerUsername, 'Register Email:', registerEmail, 'Register Password:', registerPassword);
        setRegistrationSuccess(true);
    };

    return (
        <div className="mac-terminal-login">
            <div className="mac-terminal-window">
                <div className="mac-terminal-title-bar">
                    <div className="mac-terminal-buttons">
                        <div className="mac-terminal-button close"></div>
                        <div className="mac-terminal-button minimize"></div>
                        <div className="mac-terminal-button maximize"></div>
                    </div>
                    <div className="mac-terminal-title"> {showRegister ? 'Register' : 'Login'}</div>
                </div>
                <div className="mac-terminal-content">
                    {!registrationSuccess ? (
                        <>
                            {showRegister ? (
                                <form onSubmit={handleRegisterSubmit}>
                                    <div className="mac-terminal-input">
                                        <label>Username:</label>
                                        <input
                                            type="text"
                                            value={registerUsername}
                                            onChange={(e) => setRegisterUsername(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mac-terminal-input">
                                        <label>Email:</label>
                                        <input
                                            type="email"
                                            value={registerEmail}
                                            onChange={(e) => setRegisterEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mac-terminal-input">
                                        <label>Password:</label>
                                        <input
                                            type="password"
                                            value={registerPassword}
                                            onChange={(e) => setRegisterPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mac-terminal-input">
                                        <label>Confirm Password:</label>
                                        <input
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    {registrationError && <div className="error-message">{registrationError}</div>}
                                    <button type="submit">Register</button>
                                </form>
                            ) : (
                                <form onSubmit={handleLoginSubmit}>
                                    <div className="mac-terminal-input">
                                        <label>Email:</label>
                                        <input
                                            type="email"
                                            value={loginEmail}
                                            onChange={(e) => setLoginEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mac-terminal-input">
                                        <label>Password:</label>
                                        <input
                                            type="password"
                                            value={loginPassword}
                                            onChange={(e) => setLoginPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button type="submit">Login</button>
                                    <button onClick={() => setShowRegister(!showRegister)}>
                                        {showRegister ? 'Back to Login' : 'Register'}
                                    </button>
                                </form>
                            )}

                        </>
                    ) : (
                        <div className="registration-success">Registration successful! You can now login.</div>
                    )}
                </div>
                <div className="mac-terminal-cursor"></div>
            </div>
        </div>
    );
}

export default LoginPage;
