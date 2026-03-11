import React from 'react';
import { Award, Trophy, Star, ShieldCheck, Medal, ExternalLink } from 'lucide-react';
import './Achievements.css';

const certifications = [
  {
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    provider: 'Microsoft',
    companyLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
    description: 'Mastered foundational cloud concepts, core Azure services, and security/governance features essential for modern cloud infrastructure.',
    certificateLink: 'https://microsoft.com',
    skills: [
      { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' },
      { name: 'Cloud Concepts', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloud/cloud-original.svg' },
      { name: 'Networking', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/network/network-original.svg' }
    ]
  },
  {
    title: 'IBM AI & Machine Learning Foundations',
    provider: 'IBM SkillBuild',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    description: 'In-depth exploration of AI history, machine learning algorithms, and real-world applications of intelligence in software systems.',
    certificateLink: 'https://ibm.com',
    skills: [
      { name: 'AI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'ML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
      { name: 'Data Science', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg' }
    ]
  },
  {
    title: 'Full Stack Web Development',
    provider: 'Udemy',
    companyLogo: 'https://www.vectorlogo.zone/logos/udemy/udemy-icon.svg',
    description: 'Practical training on the MERN stack, covering responsive frontend design and scalable backend API development.',
    certificateLink: 'https://udemy.com',
    skills: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' }
    ]
  },
  {
    title: 'Machine Learning Specialization',
    provider: 'Coursera (Stanford Online)',
    companyLogo: 'https://www.vectorlogo.zone/logos/coursera/coursera-icon.svg',
    description: 'Rigorous course on supervised and unsupervised learning, focusing on linear regression, neural networks, and anomaly detection.',
    certificateLink: 'https://coursera.org',
    skills: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'Scikit-Learn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg' },
      { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg' }
    ]
  }
];

const achievements = [
  {
    title: 'Finalist in National Level Coding Hackathon',
    company: 'VNR VJIET TechFest',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/en/e/e5/Official_logo_of_VNRVJIET.png',
    achievement: 'Secured Top 10 position out of 500+ teams in a 24-hour rapid prototyping and algorithmic competition.',
    certificateLink: '#',
    date: 'Dec 2024'
  },
  {
    title: 'Highest Global Ranking - Competitive Programming',
    company: 'CodeChef & LeetCode',
    companyLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
    achievement: 'Attained a global rank of 1500 (Top 1%) in the Weekly algorithmic challenges, showcasing problem-solving efficiency.',
    certificateLink: '#',
    date: 'Aug 2024'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="section achievements-section">
      {/* Decorative Blobs */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      
      <div className="container">
        <h2 className="animate-fade-up">Certifications & <span className="gradient-text">Achievements</span></h2>
        
        {/* Certifications Subsection */}
        <div className="subsection-wrapper">
          <h3 className="subsection-title animate-fade-up">
            <ShieldCheck size={28} className="title-icon" /> Professional Certifications
          </h3>
          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <div 
                key={cert.title} 
                className={`cert-card-new glass-panel animate-fade-up delay-${(index % 2) * 100}`}
              >
                <div className="cert-card-header">
                  <div className="provider-info">
                    <img src={cert.companyLogo} alt={cert.provider} className="provider-logo" />
                    <span className="provider-name">{cert.provider}</span>
                  </div>
                  <a href={cert.certificateLink} target="_blank" rel="noreferrer" className="cert-link-btn" title="View Certificate">
                    <ExternalLink size={20} />
                  </a>
                </div>
                
                <h4 className="cert-card-title">{cert.title}</h4>
                <p className="cert-card-desc">{cert.description}</p>
                
                <div className="cert-skills">
                  <span className="skills-learned-label">Skills Learned:</span>
                  <div className="skills-logo-row">
                    {cert.skills.map((skill, i) => (
                      <div key={i} className="skill-logo-wrapper" title={skill.name}>
                        <img src={skill.logo} alt={skill.name} className="skill-mini-logo" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Subsection */}
        <div className="subsection-wrapper achievements-wrapper">
          <h3 className="subsection-title animate-fade-up">
            <Trophy size={28} className="title-icon" /> Major Achievements
          </h3>
          <div className="achievements-list">
            {achievements.map((achieve, index) => (
              <div 
                key={achieve.title} 
                className={`achievement-row glass-panel animate-fade-up delay-${index * 100}`}
              >
                <div className="achievement-company">
                  <div className="achieve-logo-box">
                    <img src={achieve.companyLogo} alt={achieve.company} />
                  </div>
                  <div className="achieve-company-info">
                    <span className="achieve-company-name">{achieve.company}</span>
                    <span className="achieve-date">{achieve.date}</span>
                  </div>
                </div>
                
                <div className="achievement-details">
                  <h4 className="achievement-title">{achieve.title}</h4>
                  <p className="achievement-text">{achieve.achievement}</p>
                </div>
                
                <div className="achievement-action">
                  <a href={achieve.certificateLink} target="_blank" rel="noreferrer" className="achievement-cert-btn">
                    <Award size={18} />
                    <span>View Certificate</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
