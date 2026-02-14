import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Versus from "./sections/Versus";
import Game from "./sections/Game";
import Contact from "./sections/Contact";
import Armory from "./sections/Armory";

export default function App() {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden bg-black'>
      <Navbar />
      <Hero />
      <About />
      <Versus />
      <Game />
      <Armory/>
      <Contact />
    </main>
  )
}
