import React, { useRef, useState } from 'react';
import '../css/contact.css'; // Import external CSS file for styling
import emailjs from '@emailjs/browser';

function Contact({ addMessage }) {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0uvztgj', 'template_c88t3yx', form.current, '7yusf3C-74oj2rJms')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          console.log("message sent");
          setFormData({ user_name: '', user_email: '', message: '' });
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000); // Hide message after 3 seconds
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="user_name">Name:</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="user_email">Email:</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      {showSuccessMessage && (
        <div className="success-message">
          Message sent successfully!
        </div>
      )}
      <div className="social-links">
        <a href="https://github.com/miracleman14" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/img/git.png`} alt="GitHub Link" />
        </a>
        <a href="https://www.instagram.com/miraclendu59/?hl=en-gb" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/img/instagram-social-media-icon-design-template-vector-png_126996.png`} alt="Instagram Link" />
        </a>
        <a href="https://www.linkedin.com/in/miracle-ndu-/" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/img/ig.png`} alt="Linkedin Link" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
