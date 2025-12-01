import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </Layout>
  );
}

export default App;
