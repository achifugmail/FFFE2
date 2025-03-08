import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import League from './pages/League';
import MyTeam from './pages/MyTeam';
import Scores from './pages/Scores';
import Settings from './pages/Settings';

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/league" element={<League />} />
          <Route path="/my-team" element={<MyTeam />} />
          <Route path="/scores" element={<Scores />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;