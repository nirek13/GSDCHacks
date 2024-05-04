// Function to generate a random number within a range
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create a fire particle
function createFireParticle() {
    const particle = document.createElement('div');
    particle.classList.add('fire-particle');
    particle.style.left = `${getRandomNumber(0, 100)}%`;
    particle.style.animationDuration = `${getRandomNumber(2, 4)}s`;
    document.body.appendChild(particle);
}

// Function to generate fire particles
function generateFireParticles(count) {
    for (let i = 0; i < count; i++) {
        createFireParticle();
    }
}

// Generate fire particles on window load
window.onload = function() {
    generateFireParticles(50); // Adjust the count as needed
};
