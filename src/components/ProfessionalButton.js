// components/BeholdMyBrillianceButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Button = styled.button`
  background: linear-gradient(to right, #61dafb, #217ac0);
  color: #fff;
  font-size: 2em;
  padding: 20px 40px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.5s ease, transform 0.3s ease;
  animation: ${fadeIn} 8s ease;

  &:hover {
    background: linear-gradient(to right, #217ac0, #61dafb);
    transform: scale(1.1);
  }

  @media (max-width: 600px) {
    padding: 15px 35px;
    font-size: 1.5em;
  }
`;

const ProfessionalButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the ProfessionalPage when clicked
    navigate('/professional');
  };

  return <Button onClick={handleClick}>Explore My Professional Work</Button>;
};

export default ProfessionalButton;
