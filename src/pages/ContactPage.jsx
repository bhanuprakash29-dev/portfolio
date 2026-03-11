import React, { useEffect } from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page-wrapper" style={{ paddingTop: '75px', minHeight: '100vh' }}>
      <Contact />
    </main>
  );
};

export default ContactPage;
