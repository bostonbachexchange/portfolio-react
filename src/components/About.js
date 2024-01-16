// components/About.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { GiBrain } from 'react-icons/gi';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AboutContainer = styled.section`
  min-height: 100vh;
  background: linear-gradient(45deg, #2d2d2d, #1f1f1f);
  color: #61dafb;
  padding: 50px;
  text-align: center;

`;

const Title = styled.h2`
  font-size: 3em;
  margin-bottom: 30px;
  color: #61dafb;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
  animation: ${fadeIn} 2s ease;

  @media (max-width: 600px) {
    font-size: 1.5em;
  }
`;

const Description = styled.p`
  font-size: 2.0em;
  line-height: 1.5;
  color: #ffffff;
  margin-bottom: 50px;

  @media (max-width: 600px) {
    font-size: 1.5em;
  }
`;

const BrainIcon = styled(GiBrain)`
  font-size: 3em;
  color: #61dafb;
  margin-bottom: 20px;
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

const About = () => (
  <AboutContainer>
    <Title>Get to Know Me</Title>
    <BrainIcon />
    <Description>
      As a creative, focused, and diligent Software Engineer, I strive to develop full stack applications that are intuitive and efficient. My background as a teacher with a Master's of Music degree with a concentration in Piano Performance has given me the ability to manage and prioritize multiple obligations. I have developed necessary communication skills to collaborate as a team and also work independently. It is with this experience that I am able to build creative solutions that build community and increase productivity.
    </Description>
  </AboutContainer>
);

export default About;
