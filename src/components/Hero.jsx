import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Terminal } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid-bg">
        <div className="grid-glow"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content animate-fade-up">
          <div className="hero-greeting">
            <span className="greeting-badge">
              <Terminal size={16} className="badge-icon" />
              Welcome to my digital space
            </span>
          </div>

          <h1 className="hero-title">
            <span className="title-intro">I'm</span>
            <br />
            <span className="name-primary">Bhanu</span> <span className="gradient-text name-secondary">Prakash</span>
          </h1>

          <h2 className="hero-subtitle">
            <span className="text-highlight">Computer Science Student</span> &bull; <span className="text-highlight">DSA Enthusiast</span> &bull; <span className="text-highlight">Scalable Web & AI Builder</span>
          </h2>

          <p className="hero-description delay-100">
            I love solving complex problems using Data Structures and building scalable web and AI-powered systems.
          </p>

          <div className="hero-cta delay-200">
            <Link to="/projects" className="btn btn-primary btn-glow">
              View Projects <ArrowRight size={20} />
            </Link>
            <a href="/Bhanu_s_resume.pdf" target="_blank" rel="noreferrer" className="btn btn-outline" download>
              <Download size={20} /> Download Resume
            </a>
          </div>
        </div>

        <div className="hero-visual animate-fade-up delay-300">
          <div className="glow-circle primary"></div>
          <div className="glow-circle secondary"></div>
          <div className="glow-circle accent"></div>

          <div className="glass-card terminal-card">
            <div className="window-controls">
              <span className="control minimize"></span>
              <span className="control maximize"></span>
              <span className="control close"></span>
            </div>
            <div className="terminal-body">
              <div className="terminal-line"><span className="prompt">root@portfolio:~#</span> <span className="command">whoami</span></div>
              <div className="terminal-output">bhanu_prakash</div>

              <div className="terminal-line"><span className="prompt">root@portfolio:~#</span> <span className="command">cat developer.json</span></div>
              <div className="terminal-output">
                <pre><code>{`{
  "focus": [
    "Data Structures & Algorithms", 
    "Scalable Web Apps", 
    "AI/ML Interfaces"
  ],
  "technologies": ["React", "Node.js", "C++", "Python"],
  "currently": "Building the future..."
}`}</code></pre>
              </div>
              <div className="terminal-line"><span className="prompt">root@portfolio:~#</span> <span className="cursor-blink">_</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
