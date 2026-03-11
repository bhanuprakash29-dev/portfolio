import React from 'react';
import { Database, Layout, Server, BrainCircuit } from 'lucide-react';
import './Highlights.css';

const highlightsData = [
  {
    title: 'Data Structures & Algorithms',
    points: [
      'Expert at breaking down complex problems',
      'Designing highly optimized algorithmic solutions',
      'Strong problem-solving techniques'
    ],
    icon: <Database size={28} />,
    color: '#3b82f6',
    bg: 'rgba(59, 130, 246, 0.1)'
  },
  {
    title: 'Full Stack Development',
    points: [
      'Building complete web applications',
      'Developing responsive frontends',
      'Scalable backend systems'
    ],
    icon: <Layout size={28} />,
    color: '#8b5cf6',
    bg: 'rgba(139, 92, 246, 0.1)'
  },
  {
    title: 'Scalable Web Applications',
    points: [
      'Designing modern web platforms',
      'Optimized for performance and scalability',
      'Real-world production workloads'
    ],
    icon: <Server size={28} />,
    color: '#10b981',
    bg: 'rgba(16, 185, 129, 0.1)'
  },
  {
    title: 'AI-Powered Projects',
    points: [
      'Building intelligent applications',
      'Integrating machine learning models',
      'Modern AI tools for real-world problems'
    ],
    icon: <BrainCircuit size={28} />,
    color: '#ec4899',
    bg: 'rgba(236, 72, 153, 0.1)'
  }
];

const Highlights = () => {
  return (
    <section className="highlights-section section">
      <div className="container">
        <div className="highlights-grid">
          {highlightsData.map((highlight, index) => (
            <div 
              key={highlight.title} 
              className={`highlight-card glass-panel animate-fade-up delay-${(index % 4) * 100}`}
            >
              <div 
                className="highlight-icon" 
                style={{ backgroundColor: highlight.bg, color: highlight.color }}
              >
                {highlight.icon}
              </div>
              <h3 className="highlight-title">{highlight.title}</h3>
              <ul className="highlight-points">
                {highlight.points.map((point, i) => (
                  <li key={i} className="highlight-point">{point}</li>
                ))}
              </ul>
              
              <div className="card-gradient-border" style={{ background: highlight.color }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
