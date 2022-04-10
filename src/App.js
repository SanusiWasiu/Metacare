// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './Sidenav/Sidebar';
// import Sidebar from './components/sidenav/Sidebar';
import Page from './pages/Page';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </Router>
    // <Sidebar />
    // <Sidebar />
    // <div>working</div>
  );
}

export default App;
