import React from 'react';
import './Helpdesk.css';

const Helpdesk = () => {
  return (
    <div className="helpdesk-container">
      <h1 style={{ color: '#2800006c' }}>Helpdesk (Coming Soon!)</h1>

      <div className="helpdesk-sections">
        <section className="faq">
          <h2 className="typing-text">Frequently Asked Questions</h2>
          <p>
            Find answers to common questions about our services and features.
          </p>
          <button className="explore-button">Explore FAQs</button>
        </section>
        <section className="chat">
          <h2 className="typing-text">Live Chat</h2>
          <p>
            Chat with our support team in real-time for immediate assistance.
          </p>
          <button className="chat-button">Start Chat</button>
        </section>
        <section className="video-call">
          <h2 className="typing-text">Video Call with Sign Language Interpreter</h2>
          <p>
            Schedule a video call with a sign language interpreter for personalized support.
          </p>
          <button className="video-call-button">Schedule a Call</button>
        </section>
        <section className="resources">
          <h2 className="typing-text">Accessibility Resources</h2>
          <p>
            Access a range of resources designed to support deaf individuals.
          </p>
          <button className="resources-button">View Resources</button>
        </section>
      </div>
    </div>
  );
};

export default Helpdesk;
