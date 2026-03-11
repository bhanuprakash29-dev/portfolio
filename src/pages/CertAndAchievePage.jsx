import React, { useEffect } from 'react';
import { Award, Trophy, ShieldCheck, ExternalLink } from 'lucide-react';
import '../components/Achievements.css';

const certifications = [
  {
    title: 'AIML certification BY microsoft elevate',
    provider: 'Microsoft Elevate',
    companyLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
    description: 'A comprehensive certification program focused on advanced Artificial Intelligence and Machine Learning implementations within the Microsoft ecosystem.',
    certificateLink: '/AIML_Microsoft_Elevate.pdf',
    skills: [
      { name: 'Artificial Intelligence' },
      { name: 'Machine Learning' },
      { name: 'Data Intelligence' }
    ]
  },
  {
    title: 'CyberSuraksha by Microsoft',
    provider: 'Microsoft',
    companyLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/data:image/png;base64,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-original.svg',
    description: 'Developed a solid foundation in cybersecurity, focusing on threat landscape analysis, secure operations, and data preservation protocols.',
    certificateLink: '/CyberSuraksha_Microsoft.pdf',
    skills: [
      { name: 'Cybersecurity' },
      { name: 'Threat Analysis' },
      { name: 'Secure Ops' }
    ]
  },
  {
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    provider: 'Microsoft',
    companyLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
    description: 'Mastered foundational cloud concepts, core Azure services, and security/governance features essential for modern cloud infrastructure.',
    certificateLink: 'https://microsoft.com',
    skills: [
      { name: 'Azure' },
      { name: 'Cloud Concepts' },
      { name: 'Networking' }
    ]
  },
  {
    title: 'IBM AI & Machine Learning Foundations',
    provider: 'IBM SkillBuild',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    description: 'In-depth exploration of AI history, machine learning algorithms, and real-world applications of intelligence in software systems.',
    certificateLink: 'https://ibm.com',
    skills: [
      { name: 'AI' },
      { name: 'ML' },
      { name: 'Data Science' }
    ]
  },
  {
    title: 'Full Stack Web Development',
    provider: 'Udemy',
    companyLogo: 'https://www.vectorlogo.zone/logos/udemy/udemy-icon.svg',
    description: 'Practical training on the MERN stack, covering responsive frontend design and scalable backend API development.',
    certificateLink: 'https://udemy.com',
    skills: [
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'MongoDB' }
    ]
  },
  {
    title: 'Machine Learning Specialization',
    provider: 'Coursera (Stanford Online)',
    companyLogo: 'https://www.vectorlogo.zone/logos/coursera/coursera-icon.svg',
    description: 'Rigorous course on supervised and unsupervised learning, focusing on linear regression, neural networks, and anomaly detection.',
    certificateLink: 'https://coursera.org',
    skills: [
      { name: 'Python' },
      { name: 'Scikit-Learn' },
      { name: 'NumPy' }
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

const CertAndAchievePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page-wrapper cert-achieve-page" style={{ paddingTop: '75px', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Blobs */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      <section className="section achievements-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '5rem', textAlign: 'center' }}>
            <h2 className="animate-fade-up">Certifications & <span className="gradient-text">Achievements</span></h2>
            <p className="animate-fade-up delay-100" style={{ maxWidth: '800px', margin: '1.5rem auto 0', fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
              Recognition of technical proficiency, academic milestones, and competitive programming excellence.
            </p>
          </div>

          {/* Certifications Subsection */}
          <div className="subsection-wrapper">
            <h3 className="subsection-title animate-fade-up">
              <ShieldCheck size={28} className="title-icon" /> Professional <span className="gradient-text">Certifications</span>
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
                    <div className="skills-tag-row">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="skill-tag-badge">
                          {skill.name}
                        </span>
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
              <Trophy size={28} className="title-icon" /> Major <span className="gradient-text">Achievements</span>
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
    </main>
  );
};

export default CertAndAchievePage;
