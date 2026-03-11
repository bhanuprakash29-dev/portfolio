import React from 'react';
import { BrainCircuit, Network, Cpu, Database, Layout, Server } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' }
    ]
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg', isDark: true }
    ]
  },
  {
    title: 'Databases & Tools',
    skills: [
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', isDark: true }
    ]
  },
  {
    title: 'Machine Learning & AI',
    skills: [
      { name: 'Machine Learning', lucideIcon: <BrainCircuit size={48} strokeWidth={1.5} color="#ec4899" /> },
      { name: 'Retrieval-Augmented Generation (RAG)', lucideIcon: <Network size={48} strokeWidth={1.5} color="#8b5cf6" /> },
      { name: 'LLM Integration', lucideIcon: <Cpu size={48} strokeWidth={1.5} color="#3b82f6" /> }
    ]
  },
  {
    title: 'CS Fundamentals',
    skills: [
      { name: 'Data Structures & Algorithms', lucideIcon: <BrainCircuit size={48} strokeWidth={1.5} color="#10b981" /> },
      { name: 'DBMS', lucideIcon: <Database size={48} strokeWidth={1.5} color="#3b82f6" /> },
      { name: 'OOPS', lucideIcon: <Layout size={48} strokeWidth={1.5} color="#f59e0b" /> },
      { name: 'Computer Networks', lucideIcon: <Server size={48} strokeWidth={1.5} color="#8b5cf6" /> },
      { name: 'Operating Systems', lucideIcon: <Cpu size={48} strokeWidth={1.5} color="#ec4899" /> }
    ]
  },
  {
    title: 'Problem Solving & Logic',
    skills: [
      { name: 'DSA', lucideIcon: <BrainCircuit size={48} strokeWidth={1.5} color="#10b981" /> },
      { name: 'Debugging', lucideIcon: <Cpu size={48} strokeWidth={1.5} color="#ec4899" /> },
      { name: 'Analytical Thinking', lucideIcon: <Layout size={48} strokeWidth={1.5} color="#f59e0b" /> }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="animate-fade-up">Technical <span className="gradient-text">Arsenal</span></h2>
        
        <div className="skills-category-grid">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={category.title} 
              className={`skill-category-card glass-panel animate-fade-up delay-${(catIndex % 4) * 100}`}
            >
              <div className="skill-card-header">
                <div className="skill-tech-logos">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="skill-mini-icon-wrapper">
                      {skill.lucideIcon ? (
                        React.cloneElement(skill.lucideIcon, { size: 20 })
                      ) : (
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className={`skill-mini-icon ${skill.isDark ? 'filter-invert' : ''}`} 
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="skill-card-info">
                <h3 className="skill-category-title">{category.title}</h3>
                <div className="skill-tags">
                  {category.skills.map(skill => (
                    <span key={skill.name} className="skill-tag">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
