import React, { useEffect } from 'react';
import '../styles.css'; // Import your CSS file for styling
import logoImage from '../path/to/your/image.png'; // Import the image

function FancyLandingPage() {
    useEffect(() => {
        // Function to generate a random number within a range
        function getRandomNumber(min, max) {
            return Math.random() * (max - min) + min;
        }

        // Function to create a fire particle
        function createFireParticle() {
            const particle = document.createElement('div');
            particle.classList.add('fire-particle');
            particle.style.left = `${getRandomNumber(0, 100)}%`;
            particle.style.bottom = `${getRandomNumber(0, 100)}%`; // Randomize the vertical position
            particle.style.width = `${getRandomNumber(4, 8)}px`; // Randomize the width
            particle.style.height = `${getRandomNumber(4, 12)}px`; // Randomize the height
            particle.style.animationDuration = `${getRandomNumber(1, 2)}s`; // Randomize the animation duration
            document.body.appendChild(particle);
        }

        // Function to generate fire particles
        function generateFireParticles(count) {
            for (let i = 0; i < count; i++) {
                createFireParticle();
            }
        }

        // Generate fire particles on component mount
        generateFireParticles(200); // Adjust the count as needed

        // Cleanup function to remove fire particles when component unmounts
        return () => {
            const particles = document.querySelectorAll('.fire-particle');
            particles.forEach((particle) => {
                particle.remove();
            });
        };
    }, []); // Ensure the useEffect hook runs only once on component mount

    return (
        <div className="landing-page">
            <div className="container">
                <div className="landing-content">
                    <img src="../img.png" alt="Logo" className="logo" />
                    <h1 className="neon-text">Welcome to Hestia</h1>
                    <p>Your ultimate home system for comfort, security, and convenience.</p>
                    <a href="#" className="cta-button">Get Started</a>
                </div>
            </div>
        </div>
    );
}

export default FancyLandingPage;
