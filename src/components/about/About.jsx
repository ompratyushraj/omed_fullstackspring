import React from 'react';
import Image01 from "../../assets/images/iloveimg-resized/c1.jpg";
import Image02 from "../../assets/images/iloveimg-resized/c5.jpg";
import Image03 from "../../assets/images/iloveimg-resized/c3.jpg";
import Image04 from "../../assets/images/iloveimg-resized/c4.jpg";
import Profile01 from "../../assets/images/ProfilePhoto01.jpg";
import Profile02 from "../../assets/images/ProfilePhoto02.jpg";

// Common reusable styles
const commonStyles = {
  photoItem: {
    position: 'relative',
    width: '379px',
    height: '379px',
    overflow: 'hidden',
  },
  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  profileImage: {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '50%',
    marginBottom: '15px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
  },
  ownerCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0',
    width: '100%',
    position: 'relative',
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))',
  },
  label: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: '50px',
    fontWeight: 'bold',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
    zIndex: 1,
    pointerEvents: 'none',
  },
  textCenter: {
    textAlign: 'center',
  },
};

const About = () => {
  const { photoItem, photo, profileImage, ownerCard, container, label, textCenter } = commonStyles;

  return (
    <>
      <div style={container}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0' }}>
          {[Image01, Image02, Image03, Image04].map((image, index) => (
            <div key={index} style={photoItem}>
              <img src={image} alt={`Shop ${index + 1}`} style={photo} />
            </div>
          ))}
        </div>
        <div style={label}>About Us</div>
      </div>

      <div className="container my-5" style={textCenter}>
        <p className="fs-2">
          <strong>Welcome to OMED</strong><br />
          Your trusted source for quality healthcare and pharmaceutical products. Our mission is to provide the highest standard of pharmaceutical services and products to improve the health and well-being of our community.
        </p>

        <h2>Our Ownership & Licenses</h2>
        <p className="fs-5">
          <strong>OMED</strong> is proudly owned by <strong>Om Prakash Srivastava</strong> and <strong>Babli Sinha</strong>, both experienced pharmacists with over <strong>6</strong> years of combined experience in the healthcare industry. We are fully licensed by the <strong>India's Pharmaceutical Regulatory Authority</strong> and strictly adhere to all industry standards and regulations.
        </p>

        <h2>Our Motto</h2>
        <p className="fs-3"><i>"Caring for your health, one prescription at a time."</i></p>
        <p className="fs-5">
          At <strong>OMED</strong>, we believe that every customer deserves personalized care and the best available pharmaceutical solutions.
        </p>

        <h2>Meet the Owners</h2>
        <div className="row">
          {[{ name: 'Om Prakash Srivastava', profilePic: Profile01, description: 'With over 6 years of experience in the pharmaceutical field, passionate about ensuring customers receive the best medical advice and products.' }, 
            { name: 'Babli Sinha', profilePic: Profile02, description: 'A seasoned pharmacist with a deep understanding of medicine and patient care. Focused on providing accurate and timely services.' }].map((owner, index) => (
            <div className="col-md-6" style={ownerCard} key={index}>
              <img
                src={owner.profilePic}
                alt={owner.name}
                className="img-fluid mt-5"
                style={profileImage}
              />
              <p className="fs-4"><strong>{owner.name}</strong></p>
              <p className="fs-5">{owner.description}</p>
            </div>
          ))}
        </div>

        <h2>Our Purpose</h2>
        <p className="fs-5">
          At <strong>OMED</strong>, we are committed to improving the health of our community by offering an extensive range of pharmaceutical products, over-the-counter medications, wellness items, and expert advice.
        </p>
        <p className="fs-4">We provide:</p>
        <ul className="fs-5">
          <li>Prescription Medications</li>
          <li>Over-the-Counter Drugs</li>
          <li>Health Supplements</li>
          <li>Personal Care Products</li>
          <li>Home Healthcare Devices</li>
          <li>Health Consultation & Advice</li>
        </ul>

        <h2> Address</h2>
        <p className="fs-3 m-0"><strong>OMED</strong></p>
        <p className="fs-5 m-0">Postal Park, Road No. 1, Kankarbagh<br />Patna - 800001, Bihar</p>
        <p className="fs-5 mt-0">Landmark: State Bank Of India, Postal Park Branch</p>

        <h2>Kindly, Give the feedback. If we are able to fulfill you with the care you prefer!</h2>
        <p className="fs-5">
          Stay updated with the latest products, offers, and health tips by following us on social media. We value your feedback and are always ready to assist you with any health-related inquiries.
        </p>
      </div>
    </>
  );
};

export default About;
