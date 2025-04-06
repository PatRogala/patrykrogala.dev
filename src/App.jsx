import Hero from "./components/Hero"
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';

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
    </div>
  )
}

export default App
