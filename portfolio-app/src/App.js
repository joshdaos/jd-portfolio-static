import './App.css';
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Projects />

    </div>
  );
}

export default App;
