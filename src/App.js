import NavBar from "./componants/NavBar/navBar";
import Contact from "./componants/contact/contact";
import Footer from "./componants/footer/footer";
import Hero from "./componants/hero/hero"
import Skills from "./componants/skills/skills";
import Work from "./componants/work/work";

function App() {
  return (
    <div className="App" >
      <NavBar/>
      <Hero/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
