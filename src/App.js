// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Project1 from './components/Project1'; // Import the new component
import GlobalStyles from './GlobalStyles';
import ProfessionalPage from './components/ProfessionalPage';
import styled, { keyframes } from 'styled-components';
import { AiFillHome, AiOutlineUser, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const Navigation = styled.nav`
  background: linear-gradient(45deg, #1f1f1f, #282c34);
  padding: 30px;
  text-align: center;

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-right: 40px;

      &:last-child {
        margin-right: 0;
      }

      a {
        color: #61dafb;
        text-decoration: none;
        font-size: 2.5em;
        transition: color 0.3s ease, transform 0.5s ease;
        transform-origin: bottom;

        &:hover {
          color: #217ac0;
          animation: ${bounce} 1s ease infinite;
        }

        svg {
          font-size: 2em;
          margin-right: 10px;
        }
      }
    }
  }
`;

function App() {
  return (
    <Router>
      <div>
        <GlobalStyles />

        <Navigation>
          <ul>
            <li><Link to="/portfolio-react"><AiFillHome /> Home</Link></li>
            <li><Link to="/portfolio-react/about"><AiOutlineUser /> About</Link></li>
            <li><Link to="/portfolio-react/projects"><AiOutlineProject /> Projects</Link></li>
            <li><Link to="/portfolio-react/contact"><AiOutlineMail /> Contact</Link></li>
          </ul>
        </Navigation>

        <Routes>
          <Route path="/portfolio-react/" element={<Home />} />
          <Route path="/portfolio-react/about" element={<About />} />
          <Route path="/portfolio-react/projects" element={<Projects />} />
          <Route path="/portfolio-react/contact" element={<Contact />} />
          <Route path="/portfolio-react/professional" element={<ProfessionalPage />} />
          <Route path="/portfolio-react/project1" element={<Project1 />} /> {/* Add this route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
