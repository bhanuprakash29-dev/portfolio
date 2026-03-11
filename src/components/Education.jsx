import React from 'react';
import { GraduationCap, School, Book, CheckCircle2 } from 'lucide-react';
import './Education.css';

const educationData = [
  {
    title: 'B.Tech',
    institution: 'VNR VIGNANA JYOTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY',
    location: '(Bachupally, Hyderabad)',
    affiliation: 'JNTUH AFFILIATED',
    logo: 'https://upload.wikimedia.org/wikipedia/en/e/e5/Official_logo_of_VNRVJIET.png',
    details: [
      { label: 'Branch', value: 'Computer Science Engineering' },
      { label: 'Duration', value: '2023 – 2027' },
      { label: 'CGPA', value: '9.3' }
    ],
    highlights: [
      'Focus on Data Structures & Algorithms',
      'Advanced Database Management Systems',
      'Full Stack Web Development & Microservices',
      'Machine Learning & Artificial Intelligence'
    ],
    icon: <GraduationCap size={32} className="edu-icon blue" />
  },
  {
    title: 'Intermediate',
    institution: 'Narayana Junior College',
    location: '(ECIL, Hyderabad)',
    logo: 'https://narayanagroup.com/assets/images/logo.png',
    details: [
      { label: 'Duration', value: '2021 – 2023 (TSBIE BOARD)' },
      { label: 'Intermediate Score', value: '97.5%' },
      { label: 'EAMCET Rank', value: '4840' },
      { label: 'JEE Mains Percentile', value: '92.5' }
    ],
    highlights: [
      'State level MPC stream (Maths, Physics, Chemistry)',
      'Consistent top performer in academic tests',
      'Excellence in Mathematics and Logical Reasoning'
    ],
    icon: <Book size={32} className="edu-icon purple" />
  },
  {
    title: 'Schooling',
    institution: 'Sri Medhaa Vidya Mandir High School',
    location: '(ECIL, Hyderabad)',
    logo: 'https://cdn-icons-png.flaticon.com/512/167/167707.png',
    details: [
      { label: 'Year', value: '2021 (SSC BOARD)' },
      { label: 'Class 10 GPA', value: '10.0' }
    ],
    highlights: [
      'Perfect 10/10 CGPA achievement in SSC Board',
      'Active participant in Science & Mathematics Olympiads',
      'School topper in technical and logical aptitude tests'
    ],
    icon: <School size={32} className="edu-icon emerald" />
  }
];

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="animate-fade-up">My <span className="gradient-text">Education</span></h2>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={edu.title} className={`edu-card glass-panel animate-fade-up delay-${(index + 1) * 100}`}>
              <div className="edu-logo-wrapper">
                {edu.logo ? (
                  <img src={edu.logo} alt={edu.institution} className="edu-logo" onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }} />
                ) : null}
                <div className="edu-icon-placeholder" style={{ display: edu.logo ? 'none' : 'flex' }}>
                  {edu.icon}
                </div>
              </div>

              <div className="edu-content">
                <div className="edu-header">
                  <h3 className="edu-title">{edu.title}</h3>
                </div>

                <h4 className="edu-institution">
                  {edu.institution} <span className="edu-location">{edu.location}</span>
                </h4>

                {edu.affiliation && (
                  <p className="edu-affiliation">{edu.affiliation}</p>
                )}

                <div className="edu-details">
                  {edu.details.map((detail) => (
                    <div key={detail.label} className="detail-row">
                      <span className="detail-label">{detail.label}:</span>
                      <span className="detail-value">{detail.value}</span>
                    </div>
                  ))}
                </div>

                {edu.highlights && (
                  <div className="edu-highlights">
                    <h5 className="highlights-title">Academic Highlights:</h5>
                    <div className="highlights-grid">
                      {edu.highlights.map((highlight, i) => (
                        <div key={i} className="highlight-item">
                          <CheckCircle2 size={16} className="highlight-check" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
