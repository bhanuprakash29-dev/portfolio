import React, { useEffect } from 'react';
import Skills from '../components/Skills';

const SkillsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page-wrapper" style={{ paddingTop: '75px', minHeight: '100vh' }}>
      <Skills />
    </main>
  );
};

export default SkillsPage;
