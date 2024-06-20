
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import AboutUs from './components/About';
import './App.css';

function App() {
  return (
   
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/us" element={<AboutUs />} />
        </Routes>
      </Router>
   
  );
}

export default App;
