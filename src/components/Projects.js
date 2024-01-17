import React from 'react';
import styled, { keyframes } from 'styled-components';
import { AiFillProject, AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { projectsData } from './projectsData';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ProjectsContainer = styled.section`
  background: linear-gradient(45deg, #2d2d2d, #1f1f1f);
  color: #61dafb;
  padding: 20px; /* Adjusted padding for smaller screens */
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2em; /* Adjusted font size for smaller screens */
  margin-bottom: 20px;
  color: #61dafb;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
  animation: ${fadeIn} 4s ease;
`;

const ProjectIcon = styled(AiFillProject)`
  font-size: 2em; /* Adjusted font size for smaller screens */
  color: #61dafb;
  margin-bottom: 20px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  margin-top: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
`;

const ProjectCard = styled.div`
  background: #1f1f1f;
  color: #ffffff;
  padding: 12px; /* Adjusted padding for smaller screens */
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5em; /* Adjusted font size for smaller screens */
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1.2em; /* Adjusted font size for smaller screens */
  line-height: 1.5;
  margin-bottom: 20px;
`;

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 16px;
  }
`;

const ProjectLink = styled(Link)`
  color: #61dafb;
  text-decoration: none;
  font-size: 1.2em; /* Adjusted font size for smaller screens */
  margin-bottom: 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #217ac0;
  }
`;

const GithubIcon = styled(AiFillGithub)`
  font-size: 1.5em; /* Adjusted font size for smaller screens */
  margin-right: 10px;
`;

const Technologies = styled.div`
  font-size: 1em; /* Adjusted font size for smaller screens */
  color: #ccc;
  margin-top: 10px;
`;

const InteractiveElement = styled.div`
  position: relative;
  margin-top: 20px; /* Adjusted margin for smaller screens */

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

const Projects = () => (
  <ProjectsContainer>
    <Title>Explore My Projects</Title>
    <ProjectIcon />
    <ProjectsGrid>
      {projectsData.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <Technologies>{project.technologies}</Technologies>
          <ProjectDetails>
            <ProjectLink to={project.projectLink}>View Project</ProjectLink>
            <ProjectLink to={project.githubLink}>
              <GithubIcon />
              GitHubd
            </ProjectLink>
          </ProjectDetails>
        </ProjectCard>
      ))}
    </ProjectsGrid>
    <InteractiveElement />
  </ProjectsContainer>
);

export default Projects;
