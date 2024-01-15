// components/Home.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { AiFillCode } from 'react-icons/ai';
import ProfessionalButton from './ProfessionalButton';
import { Link } from 'react-router-dom';
import Contact from './Contact';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HomeContainer = styled.section`
  min-height: 100vh;
  background: linear-gradient(45deg, #1f1f1f, #3d3d3d);
  color: #ffffff;
  padding: 40px;
  text-align: center;
  position: relative;
`;

const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 10px;
  color: #61dafb;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
  animation: ${fadeIn} 2s ease;

`;

const Description = styled.p`
  font-size: 1.5em;
  line-height: 1.5;
  color: #ffffff;
  animation: ${fadeIn} 5s ease;

  @media (min-width: 600px) {
    /* Adjust styles for smaller screens */
    margin: 18px 160px 18px; /* Add some spacing between items */
  }
`;

const GraphicLinks = styled.div`
  display: flex;
  flex-direction: column; /* Stack items vertically on small screens */
  align-items: center;
  margin-top: 30px; /* Decreased margin for mobile */
  animation: ${fadeIn} 15s ease;

  a {
    color: #61dafb;
    text-decoration: none;
    font-size: 1.5em; /* Decreased font size for mobile */
    margin: 10px 0; /* Increased spacing between items on small screens */
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: #217ac0;
      transform: scale(1.1);
    }

    svg {
      font-size: 1.5em; /* Decreased icon size for mobile */
      margin-right: 10px;
    }
  }
`;


const InteractiveElement = styled.span`
  position: relative;
  margin-top: 0px;
  margin-bottom: 50px;

  &:before,
  &:after {
    content: "Github";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(97, 218, 251, 0.2);
    z-index: 1;
    border-radius: 20px;
    box-shadow: 0 0 50px rgba(97, 218, 251, 0.5);
    transition: transform 0.5s ease;
  }

  &:hover:before {
    transform: rotate(10deg) scale(0.1);
  }

  &:hover:after {
    content: "Github";
    transform: rotate(-360deg) scale(2.5);
  }
`;
const InteractiveLinkedIn = styled.span`
  position: relative;
  margin-top: 0px;
  margin-bottom: 50px;

  &:before,
  &:after {
    content: "LinkedIn";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(97, 218, 251, 0.2);
    z-index: 1;
    border-radius: 20px;
    box-shadow: 0 0 50px rgba(97, 218, 251, 0.5);
    transition: transform 0.5s ease;
  }

  &:hover:before {
    transform: rotate(10deg) scale(0.1);
  }

  &:hover:after {
    content: "LinkedIn";
    transform: rotate(-360deg) scale(2.5);
  }
`;

const Home = () => (
  <HomeContainer>
    <Title>Welcome to My Professional Portfolio</Title>
    <Description>
      Hello, I'm Jacob. As a seasoned front-end developer, I'm dedicated to creating
      exceptional and user-friendly web experiences.
    </Description>
    <ProfessionalButton />
    <GraphicLinks>
      <a href="https://github.com/bostonbachexchange" target="_blank" rel="noopener noreferrer">
        <AiFillCode /> <InteractiveElement />
      </a>
      <a href="https://www.linkedin.com/in/jacob-clapper/" target="_blank" rel="noopener noreferrer">
        <AiFillCode /> <InteractiveLinkedIn />
      </a>
    </GraphicLinks>
  </HomeContainer>
);

export default Home;