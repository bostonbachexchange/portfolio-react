// components/Projects.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { AiFillProject, AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

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

const ProjectIcon = styled(AiFillProject)`
  font-size: 3em;
  color: #61dafb;
  margin-bottom: 20px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 40px;
  margin-top: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProjectCard = styled.div`
  background: #1f1f1f;
  color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 2em;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1.5em;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const ProjectDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const ProjectLink = styled(Link)`
  color: #61dafb;
  text-decoration: none;
  font-size: 1.5em;
  transition: color 0.3s ease;

  &:hover {
    color: #217ac0;
  }
`;

const GithubIcon = styled(AiFillGithub)`
  font-size: 2em;
  margin-right: 10px;
`;

const Technologies = styled.div`
  font-size: 1.2em;
  color: #ccc;
  margin-top: 10px;
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

const projectsData = [
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    technologies: 'React, Node.js, MongoDB',
    githubLink: 'https://github.com/yourusername/project1',
    projectLink: '/project1',
  },
  {
    title: 'Project 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    technologies: 'Vue.js, Express, PostgreSQL',
    githubLink: 'https://github.com/yourusername/project2',
    projectLink: '/project2',
  },
  {
    title: 'Project 3',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    technologies: 'Angular, Spring Boot, MySQL',
    githubLink: 'https://github.com/yourusername/project3',
    projectLink: '/project3',
  },
  {
    title: 'Project 4',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    technologies: 'React Native, Express, Firebase',
    githubLink: 'https://github.com/yourusername/project4',
    projectLink: '/project4',
  },
];

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
            <ProjectLink to={project.projectLink}>
              <GithubIcon />
              GitHub
            </ProjectLink>
          </ProjectDetails>
        </ProjectCard>
      ))}
    </ProjectsGrid>
    <InteractiveElement />
  </ProjectsContainer>
);

export default Projects;
