import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Mediasocial from './pages/Media-Social';




function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Media-Social" element={<Mediasocial />} />
        </Routes>


    </div>
  );
}

export default App;
