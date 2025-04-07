import Hero from "./components/Hero"
import AboutMe from './components/AboutMe';
import ExperienceSection from './components/ExperienceSection';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import LatestPosts from './components/LatestPosts';

function App() {
  return (
    <div>
      <div className="h-screen relative">
        <Hero />
      </div>

      <AboutMe />
      <ExperienceSection />
      <Education />
      <Projects />
      <Skills />
      <LatestPosts />
      <Contact />
    </div>
  )
}

export default App
