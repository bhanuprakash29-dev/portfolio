import React from 'react';
import { Github } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: 'Bus Pass Automation System',
    bulletPoints: [
      'Developed a full-stack automated system for managing student bus passes',
      'Implemented secure authentication and role-based access control',
      'Integrated real-time PDF pass generation with QR code validation',
      'Reduced manual overhead by 70% for administrative staff'
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    logos: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg'
    ],
    github: 'https://github.com/bhanuprakash29-dev'
  },
  {
    title: 'Email Spam Detection',
    bulletPoints: [
      'Engineered a machine learning system to classify emails as spam or ham using Scikit-learn',
      'Implemented a clean, intuitive web interface utilizing the Streamlit framework',
      'Leveraged BeautifulSoup4 for robust HTML parsing and data cleaning of email bodies',
      'Achieved high precision and recall by optimizing text vectorization and model parameters'
    ],
    tags: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'NumPy', 'BS4'],
    logos: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg'
    ],
    github: 'https://github.com/bhanuprakash29-dev/Spam-Email-Detection-Project'
  },
  {
    title: 'DSA Visualizer',
    bulletPoints: [
      'Built a highly interactive visualization tool for complex data structures',
      'Mapped sorting and searching algorithms to visual canvas animations',
      'Created granular controls for playback speed and input modification',
      'Implemented efficient memory management for large-scale visualizations'
    ],
    tags: ['JavaScript', 'HTML5 Canvas', 'CSS Animations'],
    logos: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
    ],
    github: 'https://github.com/bhanuprakash29-dev'
  },
  {
    title: 'Predictive Sales Analysis',
    bulletPoints: [
      'Developed regression-based models to forecast consumer buying trends',
      'Performed detailed ETL on large volumes of historical sales data',
      'Visualized trend lines and seasonal patterns using Matplotlib/Seaborn',
      'Provided actionable insights for inventory and procurement optimization'
    ],
    tags: ['Python', 'Pandas', 'Scikit-Learn'],
    logos: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg'
    ],
    github: 'https://github.com/bhanuprakash29-dev'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="animate-fade-up">Featured <span className="gradient-text">Projects</span></h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className={`project-card glass-panel animate-fade-up delay-${(index % 4) * 100}`}
            >
              <div className="project-header">
                <div className="project-tech-logos">
                  {project.logos.map((logo, i) => (
                    <img key={i} src={logo} alt="Tech Logo" className="tech-logo-img" />
                  ))}
                </div>
              </div>
              
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <ul className="project-bullet-points">
                  {project.bulletPoints.map((point, i) => (
                    <li key={i} className="project-point">{point}</li>
                  ))}
                </ul>
                
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>

                <a href={project.github} target="_blank" rel="noreferrer" className="project-github-repo-link">
                  <Github size={18} />
                  <span>GitHub Repo -&gt;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
