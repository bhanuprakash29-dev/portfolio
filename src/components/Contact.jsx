import React from 'react';
import { Mail, Github, Linkedin, Send, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="animate-fade-up">Let's <span className="gradient-text">Connect</span></h2>
        
        <div className="contact-panel glass-panel animate-fade-up delay-100">
          <div className="contact-panel-content">
            <div className="contact-text-area">
              <h3>Ready to build something amazing?</h3>
              <p>
                I'm currently looking for new opportunities and collaborations. 
                Whether you have a question, a project idea, or just want to say hi, 
                my inbox is always open. I'll get back to you as soon as possible!
              </p>
            </div>
            
            <div className="contact-links">
              <a href="tel:9848677093" className="contact-card phone-card">
                <div className="contact-icon">
                  <Phone size={32} />
                </div>
                <div className="contact-info">
                  <h4>Call Me</h4>
                  <span>+91 9848677093</span>
                </div>
                <Send size={18} className="arrow-icon" />
              </a>

              <a href="mailto:bhanujupalli178@gmail.com" className="contact-card email-card">
                <div className="contact-icon">
                  <Mail size={32} />
                </div>
                <div className="contact-info">
                  <h4>Email Me</h4>
                  <span>bhanujupalli178@gmail.com</span>
                </div>
                <Send size={18} className="arrow-icon" />
              </a>
              
              <div className="social-cards">
                <a href="https://github.com/bhanuprakash29-dev" target="_blank" rel="noreferrer" className="social-card github">
                  <Github size={28} />
                  <span>GitHub</span>
                </a>
                
                <a href="https://www.linkedin.com/in/bhanu-prakash-joopalli-87a432295/" target="_blank" rel="noreferrer" className="social-card linkedin">
                  <Linkedin size={28} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-glow-bg"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
