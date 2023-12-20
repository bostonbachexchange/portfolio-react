// components/Resume.js
import React from 'react';
import styled from 'styled-components';

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

// components/Resume.js
// ... (previous code)

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
    <DownloadLink href="/path/to/your/resume.pdf" download="YourResume.pdf">
      Download PDF
    </DownloadLink>

    {/* Experience Section */}
    <ExperienceSection>
      <ExperienceTitle>Software Engineer</ExperienceTitle>
      <ExperienceDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </ExperienceDetails>
    </ExperienceSection>

    {/* Add more sections for Education, Projects, etc. */}
  {/* </ResumeContainer>
); */}

{/* // export default Resume;

// const Resume = () => ( */}
{/* //   <ResumeContainer> */}
    <ResumeTitle>Download My Resume</ResumeTitle>
    <DownloadLink href="/path/to/your/resume.pdf" download="YourResume.pdf">
      Download PDF
    </DownloadLink>
  </ResumeContainer>
);

export default Resume;
