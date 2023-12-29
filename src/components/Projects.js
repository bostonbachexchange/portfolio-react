// components/Projects.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { AiFillProject, AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
// import ProjectPage from './ProjectPage';
import { projectsData } from './projectsData';
import { getBaseUrl } from './utils/baseUrl';

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

// const projectsData = [
//   {
//     title: 'Musician Page',
//     description: 'Professional Musician Bio and Blog Page',
//     technologies: 'React, Node.js, MongoDB, Express',
//     githubLink: 'https://github.com/yourusername/project1',
//     projectLink: `${getBaseUrl()}/portfolio-react/project1`,
//   },
//   {
//     title: 'First Piano Lesson',
//     description: 'Professional Musician Bio and Blog Page',
//     technologies: 'React, Node.js',
//     githubLink: 'https://github.com/bostonbachexchange/first-lesson',
//     projectLink: `https://bostonbachexchange.github.io/first-lesson/`,
//   },
//   {
//     title: 'Workout App Tracker',
//     description: 'A cross-platform mobile app built with React Native and Expo, designed for easy workout tracking. Log your workouts, compare progress, and share your fitness journey with others.',
//     technologies: 'React Native, Expo, Yarn, SQLite',
//     githubLink: 'https://github.com/EfrainAD/Workout-App',
//     projectLink: '',
//   },
//   {
//     title: 'Scattler Plot Viz',
//     description: "This is a React project that fetches cyclist data from a JSON file and visualizes it using a scatter plot. The data is sourced from freeCodeCamp and represents the 35 fastest times up Alpe d'Huez.",
//     technologies: 'React, D3',
//     githubLink: 'https://github.com/bostonbachexchange/scatter-plot-bicycle',
//     projectLink: 'https://bostonbachexchange.github.io/scatter-plot-bicycle/',
//   },
//   {
//     title: 'GDP Bar Chart',
//     description: 'This React application fetches GDP data from a JSON file and visualizes it using a bar chart. The data is sourced from [freeCodeCamp](https://www.freecodecamp.org/), and the chart displays the GDP data over time.',
//     technologies: 'React, D3',
//     githubLink: 'https://github.com/bostonbachexchange/usa-gdp-bar-chart',
//     projectLink: 'https://bostonbachexchange.github.io/usa-gdp-bar-chart/',
//   },
//   {
//     title: 'Inflation Bar Chart',
//     description: 'This React application fetches GDP data from a JSON file and visualizes it using a bar chart. The data is sourced from [freeCodeCamp](https://www.freecodecamp.org/), and the chart displays the GDP data over time.',
//     technologies: 'React, D3',
//     githubLink: 'https://github.com/bostonbachexchange/data-vis-bar-chart',
//     projectLink: 'https://bostonbachexchange.github.io/data-vis-bar-chart/',
//   },
//   {
//     title: 'Memory Game',
//     description: 'Immerse yourself in this interactive music memory game built with JavaScript. Match composers, rhythms, and musical elements while enjoying the soothing tunes of classical masterpieces.',
//     technologies: 'Vanilla JavaScript, Html, Css',
//     githubLink: 'https://github.com/bostonbachexchange/project_1',
//     projectLink: 'https://bostonbachexchange.github.io/project_1/',
//   },
// ];

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
