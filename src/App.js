import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import merakiimg from './merakiimg.jpg';
import Page from './Page'; 
import './App.css';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Page" element={<Page />} />
      </Routes>
    </Router>
  );
}

function Home() {
  const Navigate=useNavigate();
  const handlein = () => {
Navigate('/Page');
  };
  return (
    
    <div>
      <img src={merakiimg} alt="Meraki" />
      <div>
        <p className='head'>MERAKI</p>
        <p className='toe'>to do something with soul, creativity, or love.. </p>
        <button className='in' onClick={handlein}>IN</button>
      </div>
    </div>
  );
}

export default App;
