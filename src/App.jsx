import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import About from './components/About';
import Skills3D from './components/Skills3D';
import Projects3D from './components/Projects3D';
import Contact from './components/Contact';
import Footer from './components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Global3DBackground from './scenes/Global3DBackground';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  useEffect(() => {
    // Apply theme class to html element
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    // Smooth appearance for sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, []);

  return (
    <div className="bg-bg-main text-text-main min-h-screen selection:bg-blue-500/30 font-sans selection:text-white transition-colors duration-500">
      <Global3DBackground isDarkMode={isDarkMode} />
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="relative z-10 transition-colors duration-500">
        <Hero3D />
        <About />
        <Skills3D isDarkMode={isDarkMode} />
        <Projects3D />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
