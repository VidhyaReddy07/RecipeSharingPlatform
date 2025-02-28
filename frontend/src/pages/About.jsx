import React from 'react';
import './About.css'; // Import the new CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <p className="about-content">
        Welcome to our platform! We are dedicated to providing the best services to meet your needs. Our mission is to deliver high-quality solutions with an emphasis on innovation and customer satisfaction.
        <br />
        We believe in building long-lasting relationships with our users, ensuring they receive the support they need.
      </p>
      <button className="about-btn">Learn More</button>
    </div>
  );
}

export default About;
