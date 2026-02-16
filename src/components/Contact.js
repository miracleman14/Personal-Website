import React, { useRef, useState } from 'react';
import '../css/contact.css';
import emailjs from '@emailjs/browser';

/* ─────────────────────────────────────────────
   RPG-themed Contact page — "The Courier"

   Design decisions:
   ─────────────────────────────────────────────
   1. COURIER METAPHOR
      → "Send a scroll" — form is framed as dispatching a message
        via courier. Keeps the RPG metaphor without being silly.

   2. FORM PANEL
      → Same dark panel + gold ornament borders as every other page.
        Labels in Cinzel, inputs have gold focus ring.
        Angular (no border-radius) — matches the rest of the site.

   3. SUBMIT = "Dispatch Scroll"
      → CTA button reuses the same style as "Begin Quest" on Home.

   4. SOCIAL LINKS = "Guild Connections"
      → Small section at the bottom with circular social icons,
        but with a gold hover ring instead of white.

   5. SUCCESS TOAST
      → Dark panel with gold text, bottom-right. Not green —
        stays on-palette.
   ───────────────────────────────────────────── */

function Contact({ addMessage }) {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
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
          setFormData({ user_name: '', user_email: '', message: '' });
          setShowSuccessMessage(true);
          setTimeout(() => setShowSuccessMessage(false), 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="courier-section">
      <div className="courier-panel">
        <div className="ornament-top" />

        <h2 className="rpg-heading">The Courier</h2>
        <p className="rpg-subtext">Send a scroll</p>

        <form ref={form} onSubmit={sendEmail} className="courier-form">
          <div className="field-group">
            <label htmlFor="user_name" className="field-label">Name</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="field-input"
            />
          </div>

          <div className="field-group">
            <label htmlFor="user_email" className="field-label">Email</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="field-input"
            />
          </div>

          <div className="field-group">
            <label htmlFor="message" className="field-label">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
              className="field-input field-textarea"
            />
          </div>

          <button type="submit" className="dispatch-btn">
            <span className="btn-diamond">◆</span> Dispatch Scroll
          </button>
        </form>

        <div className="ornament-bottom" />
      </div>

      {/* Success toast */}
      {showSuccessMessage && (
        <div className="scroll-sent-toast">
          ◆ Scroll dispatched successfully!
        </div>
      )}

      {/* Guild Connections */}
      <div className="guild-connections">
        <p className="connections-label">Guild Connections</p>
        <div className="social-links">
          <a href="https://github.com/miracleman14" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src={`${process.env.PUBLIC_URL}/img/git.png`} alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/miraclendu59/?hl=en-gb" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src={`${process.env.PUBLIC_URL}/img/instagram-social-media-icon-design-template-vector-png_126996.png`} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/miracle-ndu-/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src={`${process.env.PUBLIC_URL}/img/ig.png`} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
