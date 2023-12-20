// components/Resume.js
import React from 'react';
import styled from 'styled-components';
import resumepdf from '../assets/Resume-Software-Engineer.pdf';

const ResumeContainer = styled.div`
  background: #2d2d2d;
  color: #ffffff;
  padding: 80px;
  text-align: center;
`;

const ResumeTitle = styled.h2`
  font-size: 3em;
  margin-bottom: 30px;
  color: #61dafb;
`;

const DownloadLink = styled.a`
  display: inline-block;
  background: #61dafb;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 1.5em;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
  transition: background 0.3s ease;

  &:hover {
    background: #217ac0;
  }
`;

const ExperienceSection = styled.div`
  margin-top: 40px;
`;

const ExperienceTitle = styled.h3`
  font-size: 2em;
  margin-bottom: 10px;
`;

const ExperienceDetails = styled.p`
  font-size: 1.5em;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const Resume = () => (
  <ResumeContainer>
    <ResumeTitle>Download My Resume</ResumeTitle>
    <DownloadLink href={resumepdf} download="Resume-Software-Engineer.pdf">
      Download PDF
    </DownloadLink>

    {/* Experience Section */}
    <ExperienceSection>
      <ExperienceTitle>Software Engineer</ExperienceTitle>
      <ExperienceDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </ExperienceDetails>
    </ExperienceSection>
  </ResumeContainer>
);

export default Resume;
