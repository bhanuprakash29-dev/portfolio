import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter, ChevronUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-section">
            <div className="footer-logo">
              <span className="logo-text">
                <span className="gradient-text">Bhanu</span> Prakash
              </span>
            </div>
            <p className="footer-bio">
              Software Engineer & AI Enthusiast. Dedicated to crafting exceptional digital experiences with modern technologies and intelligent design.
            </p>
          </div>

          <div className="footer-nav-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/experience">Experience</Link></li>
            </ul>
          </div>

          <div className="footer-social-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social-grid">
              <a href="https://github.com/bhanuprakash29-dev" target="_blank" rel="noreferrer" className="social-icon-btn" title="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/bhanu-prakash-joopalli-87a432295/" target="_blank" rel="noreferrer" className="social-icon-btn" title="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-btn" title="Twitter">
                <Twitter size={20} />
              </a>
              <a href="mailto:bhanujupalli178@gmail.com" className="social-icon-btn" title="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom-bar">
          <div className="copyright-text">
            &copy; {new Date().getFullYear()} Bhanu Prakash. All rights reserved.
          </div>
          <button onClick={scrollToTop} className="scroll-top-btn" title="Scroll to Top">
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
