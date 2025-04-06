import Hero from "./components/Hero"
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <div className="h-screen relative">
        <Hero />
      </div>

      <AboutMe />
      <Experience />
      <Education />
      <Projects />
      <Skills />
    </div>
  )
}

export default App
