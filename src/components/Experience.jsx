import React from 'react';
import { BookOpen, Building2, Code2, Terminal, ExternalLink, Award } from 'lucide-react';
import './Experience.css';

const internships = [
  {
    role: 'MS Elevate Internship',
    company: 'Microsoft',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
    duration: '20 Jan 2026 - 12 Feb 2026',
    description: 'Worked extensively on AI/ML models, Microsoft Azure cloud services, and PowerBI for data visualization and business intelligence applications.',
    skills: ['AIML', 'Azure', 'PowerBI', 'Data Analysis'],
    link: '/MS_Elevate_Internship.pdf'
  },
  {
    role: 'AI & Machine Learning Internship',
    company: 'IBM SkillBuild',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    duration: 'Jan 2024 - March 2024',
    description: 'Built and optimized machine learning models for real-world datasets. Explored neural network architectures and automated ML workflows.',
    skills: ['Python', 'Machine Learning', 'AI Essentials', 'Data Analysis'],
    link: '#'
  }
];

const mentoring = [
  {
    role: 'DSA mentor',
    company: 'Smart Interviews',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACUCAMAAAA9M+IXAAAAw1BMVEX////30wAAAAD11AD50gD7+/vKysoWFhbt7e05OTmrq6vz1QCxsbHx1gD50ADz8/ORkZEeHh6kpKRJSUn///v8zQD87azZ2dn6+OH54GUyMjJdata:image/png;base64,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', // Clearer logo
    duration: 'Ongoing',
    description: 'Mentoring 100+ students in advanced data structures and algorithms. Conducting mock interviews and debugging complex logical challenges.',
    skills: ['Data Structures', 'Algorithms', 'Debugging', 'Communication', 'Leadership'],
    link: '#',
    certificateLink: '#'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      {/* Decorative Blobs */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      <div className="container">
        <h2 className="animate-fade-up">Professional Experience</h2>

        {/* Internships Subsection */}
        <div className="subsection-wrapper">
          <h3 className="subsection-title animate-fade-up">
            <Building2 size={28} className="title-icon" /> Industrial Internships
          </h3>
          <div className="exp-list">
            {internships.map((exp, index) => (
              <div
                key={exp.role}
                className={`exp-row glass-panel animate-fade-up delay-${index * 100}`}
              >
                <div className="exp-company-info">
                  <div className="exp-logo-box">
                    <img src={exp.logo} alt={exp.company} />
                  </div>
                  <div className="exp-branding">
                    <span className="exp-company-name">{exp.company}</span>
                    <span className="exp-duration">{exp.duration}</span>
                  </div>
                </div>

                <div className="exp-details">
                  <h4 className="exp-role-title">{exp.role}</h4>
                  <p className="exp-text">{exp.description}</p>
                  <div className="exp-skills-row">
                    {exp.skills.map(skill => (
                      <span key={skill} className="exp-skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="exp-action">
                  <a href={exp.link} target="_blank" rel="noreferrer" className="exp-visit-btn">
                    <ExternalLink size={18} />
                    <span>View Details</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mentoring Subsection */}
        <div className="subsection-wrapper mentoring-wrapper">
          <h3 className="subsection-title animate-fade-up">
            <BookOpen size={28} className="title-icon" /> Mentoring & Leadership
          </h3>
          <div className="exp-list">
            {mentoring.map((exp, index) => (
              <div
                key={exp.role}
                className={`exp-row glass-panel animate-fade-up delay-${index * 100}`}
              >
                <div className="exp-company-info">
                  <div className="exp-logo-box">
                    <img src={exp.logo} alt={exp.company} onError={(e) => {
                      e.target.src = "https://www.google.com/s2/favicons?domain=smartinterviews.in&sz=64";
                    }} />
                  </div>
                  <div className="exp-branding">
                    <span className="exp-company-name">{exp.company}</span>
                    <span className="exp-duration">{exp.duration}</span>
                  </div>
                </div>

                <div className="exp-details">
                  <h4 className="exp-role-title">{exp.role}</h4>
                  <p className="exp-text">{exp.description}</p>

                  <div className="exp-skills-row">
                    {exp.skills.map(skill => (
                      <span key={skill} className="exp-skill-tag">{skill}</span>
                    ))}
                  </div>

                </div>

                <div className="exp-action">
                  <div className="mentorship-cert-actions">
                    <div className="mentorship-certificate-badge">
                      <Award size={20} className="badge-icon" />
                      <span>Expert Mentor</span>
                    </div>
                    {exp.certificateLink && (
                      <a href={exp.certificateLink} target="_blank" rel="noreferrer" className="exp-visit-btn mt-2">
                        <ExternalLink size={18} />
                        <span>View Certificate</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
