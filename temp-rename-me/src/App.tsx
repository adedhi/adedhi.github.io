import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import FadeInSection from './helpers/FadeInSection';
import FadeOnScroll from './helpers/FadeOnScroll';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.body}>
        <Intro />
        <FadeInSection>
          <About />
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
