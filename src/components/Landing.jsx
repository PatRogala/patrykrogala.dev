import RubyCanvas from './RubyCanvas'
import { socialLinks } from '../data/socialLinks'

const Landing = () => {
  return (
    <div className="bg-black">
      <div className="flex items-center justify-center absolute inset-0 pointer-events-none text-white bg-black">
        <div className="absolute text-center text-[clamp(32px,15vw,200px)] uppercase font-extrabold tracking-[5px] sm:tracking-[10px] leading-[0.9] z-[1]">RUBY<br />ON RAILS<br />DEVELOPER</div>
        <div className="absolute text-center text-[clamp(32px,15vw,200px)] uppercase font-extrabold tracking-[5px] sm:tracking-[10px] leading-[0.9] z-0 filter blur-[7.5px] -webkit-filter-blur-[7.5px]">RUBY<br />ON RAILS<br />DEVELOPER</div>
        <div className="absolute text-center text-[clamp(32px,15vw,200px)] uppercase font-extrabold tracking-[5px] sm:tracking-[10px] leading-[0.9]" 
          style={{
            color: "transparent",
            WebkitTextStroke: "2px white",
            zIndex: 3
          }}>
          RUBY<br />ON RAILS<br />DEVELOPER
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-2 w-screen h-screen z-[2]">
        <RubyCanvas />
      </div>


      <div className="z-[5] flex items-center justify-between flex-col absolute top-5 left-0 right-0 bottom-5 tracking-wider">
        <header>
          <p className="text-white tracking-[4px]">@patryk_rogala</p>
        </header>
        <footer className="tracking-wider">
          <ul className="flex items-center justify-center gap-4 pt-4">
            {socialLinks.map(({ id, name, url, icon: Icon }) => (
              <li key={id}>
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="block transform transition-all duration-200 hover:-translate-y-1"
                >
                  <Icon className="w-6 h-6 text-white hover:text-gray-300 transition-colors" />
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </div>
  )
}

export default Landing
