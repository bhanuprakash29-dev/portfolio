import React, { useEffect } from 'react';
import Experience from '../components/Experience';
import CodingProfiles from '../components/CodingProfiles';

const ExperiencePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page-wrapper" style={{ paddingTop: '75px', minHeight: '100vh' }}>
      <Experience />
      <CodingProfiles />
    </main>
  );
};

export default ExperiencePage;
