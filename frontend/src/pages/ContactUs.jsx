import React from 'react';
import './ContactUs.css'; // Import the new CSS file

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1 className="contact-us-heading">Contact Us</h1>
      <p className="contact-us-content">
        We would love to hear from you! If you have any questions or need assistance, feel free to reach out to us.
        <br />
        You can contact us through the following ways:
        <ul>
          <li>Email: support@yourcompany.com</li>
          <li>Phone: +1 234 567 890</li>
        </ul>
      </p>
      <button className="contact-us-btn">Send a Message</button>
    </div>
  );
};

export default ContactUs;
