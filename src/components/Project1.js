// components/Project1.js
import React from 'react';
import styled from 'styled-components';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';
// import project1Image from '../images/project1.jpg'; // Import your project image

const ProjectContainer = styled.div`
  background: #2d2d2d;
  color: #ffffff;
  padding: 80px;
  text-align: center;
`;

const ProjectTitle = styled.h2`
  font-size: 3em;
  margin-bottom: 30px;
  color: #61dafb;
`;

const ProjectDescription = styled.p`
  font-size: 1.5em;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const Technologies = styled.div`
  font-size: 1.2em;
  color: #ccc;
  margin-top: 10px;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  a {
    color: #61dafb;
    text-decoration: none;
    font-size: 1.5em;
    margin: 0 15px;
    transition: color 0.3s ease;

    &:hover {
      color: #217ac0;
    }
  }
`;

const ProjectImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

const EmbeddedProject = styled.div`
  margin-top: 50px;

  iframe {
    width: 100%;
    height: 600px;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }
`;

const Project1 = () => (
  <ProjectContainer>
    <ProjectTitle>Project 1</ProjectTitle>
    <ProjectDescription>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </ProjectDescription>
    <Technologies>Technologies: React, Node.js, MongoDB</Technologies>

    {/* Project Links */}
    <ProjectLinks>
      <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">
        <AiFillGithub /> GitHub
      </a>
      <a href="https://example.com/project1" target="_blank" rel="noopener noreferrer">
        <AiOutlineLink /> View Project
      </a>
    </ProjectLinks>

    {/* Project Image */}
    {/* <ProjectImage src={project1Image} alt="Project 1" /> */}

    {/* Embedded Project */}
    <EmbeddedProject>
      <iframe
        src="https://jacobclapper.com" // Replace with the actual URL of your deployed project
        title="Embedded Project"
        allow="fullscreen"
      ></iframe>
    </EmbeddedProject>

    {/* Add more sections or components to showcase your project details */}
  </ProjectContainer>
);

export default Project1;
