// components/Contact.js
import React from 'react';
import emailjs from 'emailjs-com';
import styled, { keyframes } from 'styled-components';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dotenv from 'dotenv';
dotenv.config();

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const particleAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const ContactContainer = styled.section`
  background: linear-gradient(45deg, #2d2d2d, #1f1f1f);
  color: #61dafb;
  padding: 80px;
  text-align: center;
  animation: ${fadeIn} 2s ease;
  position: relative;
  overflow: hidden;
`;

const Particle = styled.span`
  position: absolute;
  background: rgba(97, 218, 251, 0.5);
  border-radius: 50%;
  width: 10px;
  height: 10px;
  animation: ${particleAnimation} 1.5s infinite alternate;
  opacity: 0.5;
`;

const Title = styled.h2`
  font-size: 6em;
  margin-bottom: 30px;
  color: #61dafb;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);

  @media (max-width: 600px) {
    font-size: 1.5em;
  }
`;

const MailIcon = styled(AiOutlineMail)`
  font-size: 2.5em;
  color: #61dafb;
  margin-bottom: 20px;
`;

const PhoneIcon = styled(AiFillPhone)`
  font-size: 2.5em;
  color: #61dafb;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 2.5em;
  line-height: 1.5;
  color: #ffffff;
  margin-bottom: 50px;

  @media (max-width: 600px) {
    font-size: 1.5em
  }
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

const ContactTitle = styled.h2`
  font-size: 3em;
  margin-bottom: 30px;
  color: #61dafb;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const FormLabel = styled.label`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1.2em;
`;

const FormTextarea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1.2em;
  resize: vertical;
`;

const FormSubmit = styled.button`
  background: #61dafb;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 1.5em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #217ac0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  a {
    color: #61dafb;
    font-size: 2em;
    margin: 0 15px;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #217ac0;
    }
  }
`;
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const userId = process.env.REACT_APP_EMAILJS_USER_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;




const Contact = () => {

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(serviceId, templateId, e.target, userId);
      console.log(result.text);

      toast.success('Message sent successfully!', {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 3000, // Close the notification after 3 seconds
      });

      e.target.reset(); // Clear the form fields
    } catch (error) {
      console.error(error.text);

      toast.error('Error sending message. Please try again.', {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 3000,
      });
    }
  };
  return (
  <ContactContainer>
    {/* Particles */}
    {[...Array(20)].map((_, index) => (
      <Particle key={index} style={{ top: `${Math.random() * 100}vh`, left: `${Math.random() * 100}vw` }} />
    ))}

    <Title>Contact Me</Title>

    <MailIcon />
    <Description>
      Ready to start a conversation? Feel free to reach out to me via email or phone. I'm
      excited to hear from you and discuss potential collaborations.
    </Description>
    <InteractiveElement />

    {/* Contact Form */}
    <ContactForm onSubmit={sendEmail}>
      <FormLabel htmlFor="name">Name</FormLabel>
      <FormInput type="text" id="name" name="name" required />

      <FormLabel htmlFor="email">Email</FormLabel>
      <FormInput type="email" id="email" name="email" required />

      <FormLabel htmlFor="message">Message</FormLabel>
      <FormTextarea id="message" name="message" rows="4" required />

      <FormSubmit type="submit">Send Message</FormSubmit>
    </ContactForm>

    {/* Social Media Links */}
    <SocialLinks>
      <a href="https://www.linkedin.com/in/jacob-clapper/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a> */}
      <a href="https://github.com/bostonbachexchange" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </SocialLinks>
    <ToastContainer />
  </ContactContainer>
    );
    };

export default Contact;
