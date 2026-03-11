import React, { useEffect } from 'react';
import Education from '../components/Education';

const EducationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page-wrapper" style={{ paddingTop: '75px', minHeight: '100vh' }}>
      <Education />
    </main>
  );
};

export default EducationPage;
