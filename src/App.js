import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import { AboutMe } from "./components/aboutme";


function App() {
  
 
  return (
    <div className="app">
      <Navbar /> 
      <Banner />
      <AboutMe/>
       <Skill/> 
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
