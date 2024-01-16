// components/ProfessionalPage.js
import React from 'react';
import styled from 'styled-components';
import Resume from './Resume'
const PageContainer = styled.div`
  background: linear-gradient(45deg, #2d2d2d, #1f1f1f);
  color: #61dafb;
  padding: 80px;
  text-align: center;

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const Title = styled.h2`
  font-size: 3em;
  margin-bottom: 30px;
  color: #61dafb;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);

  @media (max-width: 600px) {
    font-size: 1.5em;
    padding: 1.1em;
  }
`;

const Content = styled.p`
  font-size: 2em;
  line-height: 1.5;
  color: #ffffff;

  @media (max-width: 600px) {
    font-size: 1.5em;
    margin-bottom: 30px;
  }
`;

const ProfessionalPage = () => (
  <PageContainer>
    <Title>Explore My Professional Work</Title>
    <Content>
      Welcome to the Professional Page, where I showcase my extensive experience and
      accomplishments as a front-end developer. Feel free to browse through my portfolio and
      discover the quality of work I deliver.
    </Content>
    <Resume />
  </PageContainer>
);

export default ProfessionalPage;
