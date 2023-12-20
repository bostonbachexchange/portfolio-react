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
  background: linear-gradient(45deg, #1f1f1f, #2d2d2d);
  color: #ffffff;
  padding: 80px;
  text-align: center;
  animation: ${fadeIn} 2s ease;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 6em;
  margin-bottom: 30px;
  color: #61dafb;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
`;

const Description = styled.p`
  font-size: 2.5em;
  line-height: 1.5;
  color: #ffffff;
  margin-bottom: 50px;
`;

const GraphicLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  a {
    color: #61dafb;
    text-decoration: none;
    font-size: 2.5em;
    margin: 0 20px;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: #217ac0;
      transform: scale(1.1);
    }

    svg {
      font-size: 2.5em;
      margin-right: 10px;
    }
  }
`;


const InteractiveElement = styled.div`
  position: relative;
  margin-top: 60px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(97, 218, 251, 0.2);
    z-index: -1;
    border-radius: 20px;
    box-shadow: 0 0 50px rgba(97, 218, 251, 0.5);
    transition: transform 0.5s ease;
  }

  &:hover:before {
    transform: rotate(10deg) scale(1.2);
  }

  &:hover:after {
    transform: rotate(-10deg) scale(1.2);
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
        <AiFillCode /> GitHub
      </a>
      <a href="https://www.linkedin.com/in/jacob-clapper/" target="_blank" rel="noopener noreferrer">
        <AiFillCode /> LinkedIn
      </a>
    </GraphicLinks>
    <InteractiveElement />
  </HomeContainer>
);

export default Home;