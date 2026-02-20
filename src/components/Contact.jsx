import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="section-title">Contact</h2>
      
      <div className="contact-container">
        {/* LEFT SIDE: FORM */}
        <div className="contact-left">
          <form action="https://formspree.io/f/mvzbbvze" method="POST" className="contact-form">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>

        {/* RIGHT SIDE: INFO */}
        <div className="contact-right">
          <h3>Get In Touch</h3>
          <p>
            Got an idea for a collaboration? Do dm me !
          </p>
          <div className="contact-details">
            <p><strong>Email:</strong> manartchy@gmail.com</p>
            <p><strong>Phone:</strong> +880 1937-771458</p>
            <p><strong>Location:</strong> Sylhet, Bangladesh</p>
          </div>
          
          <div className="social-icons">
            <a href="https://github.com/manartouf" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/manar-toufique-chy-jdsbcxh/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;