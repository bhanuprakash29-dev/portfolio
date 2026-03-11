import React, { useEffect } from 'react';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page-wrapper" style={{ paddingTop: '75px', minHeight: '100vh' }}>
      <Projects />
    </main>
  );
};

export default ProjectsPage;
