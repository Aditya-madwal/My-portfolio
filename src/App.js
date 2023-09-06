import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AboutMe from './Components/AboutMe';
import Home from './Components/Home';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer'
// import Skills from './Components/Skills'
import SkillCard from "./Components/SkillCard";

// import github from "./Components/github.png"
import frontend from "./Components/images/coding.png"
import graphic from "./Components/images/paint.png"
import java from "./Components/images/java.png"
import python from "./Components/images/python.png"
import js from "./Components/images/js.png"
import react from "./Components/images/structure.png"
import database from "./Components/images/database.png"

function App() {

  const app_style = {
    backgroundColor: "#352F44",
  }

  return (
    <div className="App" style={app_style}>
      {/*<Navbar />*/}
      <Home />
      <AboutMe />
      <hr />
        <h2 className="skillHead">Skills of mine!</h2>
      <skills className = "skillContainer">
          <SkillCard skillName = "Python Programming" imageURL = {python} skillDetail = "I am a pythonista, i am familiar with topics like Tkinter, APIs, Web scraping and emailing."/>
          <SkillCard skillName = "Javascript ES6" imageURL = {js} skillDetail = "I am familiar with Javascript and DOM manipulation using it."/>
          <SkillCard skillName = "Frontend Development" imageURL = {frontend} skillDetail = "I have also built projects of frontend development using HTML+CSS+JS."/>
          <SkillCard skillName = "Graphic design" imageURL = {graphic} skillDetail = "I practice graphic designing and concepts on softwares like Figma, Canva, and Adobe Illustrator."/>
          <SkillCard skillName = "React JS" imageURL = {react} skillDetail = "I am a beginner at React JS and this portfolio website is made with react itself."/>
          <SkillCard skillName = "Java Programming" imageURL = {java} skillDetail = "I practice JAVA for DSA and object orient programming."/>
          <SkillCard skillName = "SQLite" imageURL = {database} skillDetail = "I have learnt the basics of DBMS using SQLite and implemented with python."/>
      </skills>
        {/*<SkillCard/>*/}
      <hr />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
