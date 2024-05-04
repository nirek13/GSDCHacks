import React from 'react';
import styled, { keyframes } from 'styled-components';
import logoImage from '../logo.png'; // Import the image

// Keyframes for animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled components
const HeaderContainer = styled.header`
  background-color: #000000;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between; /* Align items to the left and right */
  align-items: center; /* Vertically center items */
  animation: ${fadeIn} 0.5s ease;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.5s ease;

  img {
    width: 90px; /* Adjust the width as needed */
    height: 70px; /* Maintain aspect ratio */
  }
`;

const Nav = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    animation: ${fadeIn} 0.5s ease;
  }

  li {
    margin-left: 20px; /* Adjust spacing between items */
  }

  button {
    background-color: transparent;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    transition: color 0.3s ease;
    animation: ${fadeIn} 0.5s ease;

    &:hover {
      color: #ffc107;
    }
  }
`;

function Header({ setPage }) {
    return (
        <HeaderContainer>
            <Logo><img src={logoImage} alt="Logo" className="logo" /></Logo> {/* Use the imported image */}
            <Nav>
                <ul>
                    <li>
                        <button onClick={() => setPage('home')}>Home</button>
                    </li>
                    <li>
                        <button onClick={() => setPage('login')}>Login</button>
                    </li>
                    {/* Add more navigation items here */}
                </ul>
            </Nav>
        </HeaderContainer>
    );
}

export default Header;
