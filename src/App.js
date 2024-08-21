import Navbar from "./components/Navbar"
import Home  from "./components/Home"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import SocialLink from "./components/SocialLink"

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <SocialLink/>

      </div>
    </>
  )
}

export default App