// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidenav/Sidebar';


function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Sidebar />} />
    //   </Routes>
    // </Router>

    <Sidebar />
  );
}

export default App;
