import Hero from "./components/Hero"
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <div>
      <div className="h-screen relative">
        <Hero />
      </div>

      <AboutMe />
      <Experience />
      <Education />
    </div>
  )
}

export default App
