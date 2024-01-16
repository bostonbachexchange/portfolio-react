// components/ProjectPage.js
import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
  background: #2d2d2d;
  color: #ffffff;
  padding: 80px;
  text-align: center;

  @media (max-width: 600px) {
    padding: 35px;
  }

`;

const ProjectTitle = styled.h2`
  font-size: 3em;
  margin-bottom: 30px;
  color: #61dafb;

  @media (max-width: 600px) {
    font-size: 1.5em;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.5em;
  line-height: 1.5;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 1.4em;
  line-height: 1.4;
  margin-bottom: 16px;
  }
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

  @media (max-width: 600px) {
    margin-top: 23px;
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

const ProjectPage = ({ title, description, technologies, deployLink, frontendLink, backendLink }) => (
  <ProjectContainer>
    <ProjectTitle>{title}</ProjectTitle>
    <ProjectDescription>{description}</ProjectDescription>
    <Technologies>{technologies}</Technologies>

    {/* Project Links */}
    <ProjectLinks>
      {frontendLink && (
        <a href={frontendLink} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      )}
      {backendLink && (
        <a href={backendLink} target="_blank" rel="noopener noreferrer">
          View Backend
        </a>
      )}
      {deployLink && (
        <a href={deployLink} target="_blank" rel="noopener noreferrer">
          Deployed Project
        </a>
      )}
    </ProjectLinks>

    {/* Project Image */}
    {/* <ProjectImage src={projectImage} alt={title} /> */}

    {/* Embedded Project */}
    <EmbeddedProject>
      {deployLink && <iframe src={deployLink} title={title} allow="fullscreen"></iframe>}
    </EmbeddedProject>

    {/* Add more sections or components to showcase your project details */}
  </ProjectContainer>
);

export default ProjectPage;
