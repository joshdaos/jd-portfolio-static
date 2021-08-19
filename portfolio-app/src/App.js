import './App.css';
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
