import Hero from "./components/Hero"
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div>
      {/* Your Hero section container might need height adjustment
          if it's absolutely positioned and doesn't push content down.
          You might need a placeholder div or adjust Hero styling.
          Assuming Hero takes full viewport height for now. */}
      <div className="h-screen relative"> {/* Example container for Hero */}
        <Hero />
      </div>

      {/* Render the About Me section below */}
      <AboutMe />

      {/* Add other sections here (Projects, Contact, etc.) */}
    </div>
  )
}

export default App
