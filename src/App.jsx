import About from "./section/About";
import Clients from "./section/clients";
import Contact from "./section/Contact";
import Experience from "./section/Experience";
import Footer from "./section/Footer";
import Hero from "./section/Hero";
import Navbar from "./section/Navbar";
import Projects from "./section/Projects";

const App = () => {
  return(
    <main className="max-w-7xl mx-auto">
     <Navbar />
     <Hero />
     <About />
     <Projects />
    <Clients />
    <Experience />
    <Contact />
    <Footer />
    </main>
  )
}

export default App;