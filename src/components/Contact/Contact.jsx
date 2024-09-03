import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import emailjs
import './Contact.css'; // Import the CSS file

const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log('EmailJS Result:', result.text);
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' }); // Clear form fields
    }, (error) => {
      console.error('EmailJS Error:', error.text);
      setStatus('Failed to send message.');
    });
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Please reach out with any questions or feedback.</p>
      </header>
      <main className="contact-main">
        <section className="contact-form-section">
          <h2>Get in Touch</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Send</button>
            {status && <p className="status-message">{status}</p>}
          </form>
        </section>
        {/* <section className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="path/to/team-member1.jpg" alt="Team Member 1" />
              <p>Team Member 1</p>
            </div>
            <div className="team-member">
              <img src="path/to/team-member2.jpg" alt="Team Member 2" />
              <p>Team Member 2</p>
            </div>
          </div>
        </section> */}
      </main>
      <footer className="contact-footer">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};
// console.log('Service ID:', process.env.REACT_APP_EMAILJS_SERVICE_ID);
// console.log('Template ID:', process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
// console.log('Public Key:', process.env.REACT_APP_EMAILJS_PUBLIC_KEY);


export default ContactPage;
