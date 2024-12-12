import React, { useState } from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import OMEDLogoLight from '../../assets/images/OMED_Logos/Omed_Logo_Light.png';
import OMEDLogoDark from '../../assets/images/OMED_Logos/Omed_Logo_Dark.png';
import FooterBGLight from '../../assets/images/FooterBG/FooterBG-Light.png';
import FooterBGDark from '../../assets/images/FooterBG/FooterBG-Dark.png';

// Styled Components
const FooterContainer = styled.footer`
  background-color: #343a40;
  color: #f8f9fa;
  padding: 20px 0;
  position: relative;
  background-image: url(${(props) => (props.mode === 'light' ? FooterBGLight : FooterBGDark)});
  background-size: cover;
  background-position: center;
`;

const FooterLogo = styled.img`
  width: 130px; /* Adjust size as needed */
  height: auto;
`;

const FooterSection = styled.div`
  @media (min-width: 768px) {
    flex: 1;
    padding: 10px;
  }
`;

const FooterTitle = styled.h5`
  font-size: 1.25rem;
  margin-bottom: 5px;
  color: ${(props) => (props.mode === 'light' ? '#343a40' : '#f8f9fa')}; /* Dynamic color based on mode */
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0px;
`;

const FooterListItem = styled.li`
  margin-bottom: 10px;
  a {
    color: ${(props) => (props.mode === 'light' ? '#343a40' : '#f8f9fa')}; /* Change text color based on mode */
    text-decoration: none;
    transition: all 0.3s ease; /* Smooth transition for hover effect */
    text: bold;
    
    &:hover {
      text-decoration: none; /* No underline on hover */
      text-shadow: ${(props) => (props.mode === 'light' ? 
        '0 0 5px rgba(0, 0, 0, 1), 0 0 10px rgba(0, 0, 0, 1)' : // Light mode glowing blue
        '0 0 5px rgba(255, 255, 255, 0.7), 0 0 10px rgba(255, 255, 255, 0.7)')}; // Dark mode glowing white
    }
  }
`;


const FooterFormGroup = styled.div`
  margin-bottom: 15px;
`;

const FooterInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  margin-top: 10px;
  border: 5px solid #ccc;
  border-radius: 50px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  background: linear-gradient(45deg, #FFFFFF, #228B22); /* Bright Green Gradient */
  color: black;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  margin-top: 1px;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease; /* Smooth transition for hover and click effects */

  &:hover {
    background: linear-gradient(45deg, #00FF00, #FFFFFF); /* Reverse gradient on hover */
    box-shadow: 0 0 15px 5px rgb(64, 130, 109); /* White glow on hover */
    color: white;
  }

  &:active {
    background: linear-gradient(45deg, #228B22, #7CFC00); /* Gradient effect on active */
    box-shadow: 0 0 25px 10px rgba(255, 255, 255, 0.8); /* Stronger white glow when clicked */
    color: white;
  }
`;

const SocialIcons = styled.div`
  margin-top: 15px;
  a {
    color: ${(props) => (props.mode === 'light' ? '#343a40' : '#f8f9fa')}; /* Adjust social icon color based on mode */
    margin-right: 15px;
    font-size: 1.5rem;
    transition: color 0.3s;
    &:hover {
      color: ${(props) => (props.mode === 'light' ? '#007bff' : '#ffcc00')}; /* Light mode links are blue, dark mode links are yellow */
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 0.875rem;
`;

// React Functional Component
function Footer({ mode }) {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email submitted: ${email}`);
  };

  return (
    <FooterContainer mode={mode}>
      <div className="container">
        {/* Logo on the top left */}
        <div className="d-flex justify-content-start">
          <FooterLogo
            className="ms-1 mb-2 mt-3"
            src={mode === 'light' ? OMEDLogoLight : OMEDLogoDark}
            alt="Company Logo"
          />
        </div>
        {/* Rest of the footer sections */}

        <div className="row ms-1 me-1">
          {/* First Section */}
          <FooterSection className="col-md-4">
            <FooterTitle mode={mode}>Know Us</FooterTitle>
            <FooterList>
              <FooterListItem mode={mode}><a href="/">About Us</a></FooterListItem>
              <FooterListItem mode={mode}><a href="/">Contact Us</a></FooterListItem>
              <FooterListItem mode={mode}><a href="/">Become a Health Partner</a></FooterListItem>
              <FooterListItem mode={mode}><a href="/">Licence</a></FooterListItem>
              <FooterListItem mode={mode}><a href="/">Product Servicing</a></FooterListItem>
            </FooterList>
          </FooterSection>

          {/* Second Section */}
          <FooterSection className="col-md-4">
            <FooterTitle mode={mode}>Our Policies</FooterTitle>
            <FooterList>
              <FooterListItem mode={mode}><a href="/">Policies</a></FooterListItem>
              <FooterListItem mode={mode}><a href="/">Terms and Conditions</a></FooterListItem>
              <FooterListItem mode={mode}><a href="/">Return Policy</a></FooterListItem>
              <FooterListItem mode={mode}><a href="/">Grievance Redressal</a></FooterListItem>
              <FooterListItem mode={mode}><a href="/">Help Regards</a></FooterListItem>
            </FooterList>
          </FooterSection>

          {/* Third Section */}
          <FooterSection className="col-md-4">
            <FooterTitle mode={mode}>Contact Us</FooterTitle>
            <form onSubmit={handleSubmit}>
              <FooterFormGroup>
                <FooterInput
                  type="email"
                  id="email"
                  placeholder="Enter your email : (abc@gmail.com)"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </FooterFormGroup>
              <SubmitButton type="submit" className="btn btn btn-outline-light">
                Submit
              </SubmitButton>
            </form>

            <SocialIcons mode={mode}>
              <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </SocialIcons>
          </FooterSection>
        </div>

        {/* Footer Bottom */}
        <FooterBottom>
          <p>&copy; 2024 My Company. All rights reserved.</p>
        </FooterBottom>
      </div>
    </FooterContainer>
  );
}

export default Footer;
