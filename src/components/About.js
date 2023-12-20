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
  background: linear-gradient(45deg, #2d2d2d, #1f1f1f);
  color: #61dafb;
  padding: 80px;
  text-align: center;
  animation: ${fadeIn} 2s ease;
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
      Welcome to my brain hub! I'm Jacob, a passionate and creative front-end developer
      with a knack for turning ideas into reality. My journey in the world of coding has been
      nothing short of exciting, and I'm always hungry to learn and grow.
    </Description>
    <InteractiveElement />
  </AboutContainer>
);

export default About;
