import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Registration from './Pages/Registration';
import "./App.scss"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
