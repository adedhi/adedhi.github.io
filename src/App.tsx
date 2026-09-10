import { useState, useEffect } from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Footer from './components/Footer';
import FadeInSection from './helpers/FadeInSection';
import FadeOnScroll from './helpers/FadeOnScroll';
import styles from './App.module.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <Header currentTheme={theme} toggleTheme={toggleTheme} />
      <div className={styles.body}>
        <Intro />
        <FadeInSection>
          <About />
        </FadeInSection>
        <FadeInSection>
          <Experiences />
        </FadeInSection>
        <FadeInSection>
          <Projects />
        </FadeInSection>
      </div>
      <FadeOnScroll>
        <Footer />
      </FadeOnScroll>
    </div>
  );
}

export default App
