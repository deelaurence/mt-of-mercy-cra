import {  HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import AboutUs from './components/About';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/us" element={<AboutUs />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
